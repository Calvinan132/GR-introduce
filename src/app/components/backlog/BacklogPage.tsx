import { getJiraBacklog } from "@/lib/jira";
import { JiraSearchResponse } from "@/types/jira";
import { 
  CheckCircle2, 
  CircleDashed, 
  Clock, 
  AlertCircle, 
  Bookmark, 
  SquareAsterisk,
  ArrowUpCircle,
  ArrowDownCircle,
  ArrowRightCircle
} from "lucide-react";

export default async function BacklogPage() {
  let data: JiraSearchResponse | null = null;
  let errorMessage: string | null = null;

  try {
    data = await getJiraBacklog();
  } catch (error) {
    errorMessage = (error as Error).message;
  }

  if (errorMessage) {
    return (
      <div className="p-8 text-center rounded-2xl bg-red-500/5 border border-red-500/20 text-red-500">
        <AlertCircle className="mx-auto mb-2" size={32} />
        <h1 className="text-sm font-bold uppercase tracking-widest mb-2">Đã xảy ra lỗi kết nối Jira</h1>
        <p className="text-xs opacity-80">{errorMessage}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-primary/50 animate-pulse">
        <CircleDashed className="animate-spin mb-4" size={32} />
        <p className="text-xs font-bold uppercase tracking-widest">Đang tải Backlog...</p>
      </div>
    );
  }

  if (data.issues.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-primary/40">
        <CheckCircle2 size={40} className="mb-4 opacity-50" />
        <p className="text-xs font-bold uppercase tracking-widest">Không có task nào trong Backlog!</p>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    const s = status.toLowerCase();
    if (s.includes("done") || s.includes("hoàn thành")) return "text-emerald-500 bg-emerald-500/10 border-emerald-500/20";
    if (s.includes("progress") || s.includes("process") || s.includes("đang") || s.includes("review")) return "text-blue-500 bg-blue-500/10 border-blue-500/20";
    return "text-orange-500 bg-orange-500/10 border-orange-500/20";
  };

  const getStatusIcon = (status: string) => {
    const s = status.toLowerCase();
    if (s.includes("done") || s.includes("hoàn thành")) return <CheckCircle2 size={14} />;
    if (s.includes("progress") || s.includes("process") || s.includes("đang") || s.includes("review")) return <Clock size={14} />;
    return <CircleDashed size={14} />;
  };

  const getPriorityIcon = (priority?: string) => {
    const p = priority?.toLowerCase() || "";
    if (p.includes("high") || p.includes("highest")) return <ArrowUpCircle size={14} className="text-red-500" />;
    if (p.includes("low") || p.includes("lowest")) return <ArrowDownCircle size={14} className="text-blue-500" />;
    return <ArrowRightCircle size={14} className="text-orange-500" />;
  };

  const getTypeIcon = (type?: string) => {
    const t = type?.toLowerCase() || "";
    if (t.includes("bug")) return <AlertCircle size={14} className="text-red-500" />;
    if (t.includes("story")) return <Bookmark size={14} className="text-emerald-500" />;
    return <SquareAsterisk size={14} className="text-blue-500" />;
  };

  return (
    <div className="animate-in fade-in zoom-in-95 duration-500">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-sm font-black text-primary uppercase tracking-widest flex items-center gap-2">
          Jira Backlog
        </h2>
        <span className="px-3 py-1 text-xs font-bold bg-primary/10 text-primary rounded-full border border-primary/20">
          Tổng: {data.total}
        </span>
      </div>
      
      <div className="space-y-3">
        {data.issues.map((issue) => (
          <div
            key={issue.id}
            className="group flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-xl border border-primary/10 bg-background hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 relative overflow-hidden shadow-sm hover:shadow-md"
          >
            {/* Hover Indicator */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
            
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-md border border-primary/20 shadow-sm">
                  {issue.key}
                </span>
                
                {issue.fields.issuetype?.name && (
                  <div className="flex items-center gap-1 text-[10px] text-foreground/70 bg-foreground/5 px-2 py-0.5 rounded-md border border-foreground/10" title="Issue Type">
                    {getTypeIcon(issue.fields.issuetype.name)}
                    <span className="font-semibold">{issue.fields.issuetype.name}</span>
                  </div>
                )}

                {issue.fields.priority?.name && (
                  <div className="flex items-center gap-1 text-[10px] text-foreground/70 bg-foreground/5 px-2 py-0.5 rounded-md border border-foreground/10" title="Priority">
                    {getPriorityIcon(issue.fields.priority.name)}
                    <span className="font-semibold">{issue.fields.priority.name}</span>
                  </div>
                )}
              </div>
              
              <h5 className="font-bold text-sm text-foreground pr-4 group-hover:text-primary transition-colors leading-relaxed">
                {issue.fields.summary}
              </h5>
            </div>
            
            <div className="shrink-0 flex items-center sm:self-center self-start">
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-wider shadow-sm transition-colors ${getStatusColor(issue.fields.status.name)}`}>
                {getStatusIcon(issue.fields.status.name)}
                <span>{issue.fields.status.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {data.total > data.issues.length && (
        <div className="mt-6 text-center">
          <p className="text-xs text-foreground/40 font-semibold italic">
            Hiển thị {data.issues.length} trên tổng số {data.total} tasks.
          </p>
        </div>
      )}
    </div>
  );
}
