"use client";
import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import {
  Users,
  Target,
  ClipboardList,
  Github,
  ExternalLink,
  CheckCircle2,
  X,
} from "lucide-react";
import teamMembers from "./data/teamMembers.json";
import progress from "./data/progress.json";
import meetingMinutes from "./data/meetingMinutes.json";
import img from "../../public/assets/CHEVEBANNER.png";
interface Props {
  backlogNode?: React.ReactNode;
}

const GreenTeamContent = ({ backlogNode }: Props) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("tiendo");
  const [selectedMember, setSelectedMember] = useState<
    (typeof teamMembers)[0] | null
  >(null);

  const searchParams = useSearchParams();
  const section = searchParams.get("section");

  const teamRef = useRef<HTMLElement>(null);
  const managementRef = useRef<HTMLElement>(null);
  const productRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && section) {
      const refs: Record<string, React.RefObject<HTMLElement | null>> = {
        team: teamRef,
        management: managementRef,
        product: productRef,
      };
      refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [section, mounted]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300">
      {/* HERO SECTION */}
      <header className="relative min-h-[70vh] flex items-center justify-center pt-20 pb-40 px-4 overflow-hidden bg-primary">
        {/* 1. ẢNH NỀN (BANNER) */}
        <div className="absolute inset-0 z-0">
          <Image
            src={img}
            alt="Green5 Banner Background"
            fill
            priority
            className="object-cover opacity-30" // Giảm opacity để làm nền
            sizes="100vw"
          />
          {/* Lớp phủ Gradient để chuyển màu mượt mà xuống phần dưới của trang */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/90 to-background" />
        </div>

        {/* 2. HIỆU ỨNG ĐÈN LED (DECORATIVE LIGHTS) */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FBBF24]/10 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-500/20 rounded-full blur-[100px] -ml-24 -mb-24 pointer-events-none" />

        {/* 3. NỘI DUNG CHÍNH (CONTENT) */}
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
          {/* Nhãn hiệu nhỏ phía trên (Badge) */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FBBF24] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FBBF24]"></span>
            </span>
            <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">
              Project Version 1.0
            </span>
          </div>

          {/* Tiêu đề chính */}
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[1.1] uppercase ">
            Quản Trị <br />
            <span className="text-[#FBBF24] drop-shadow-[0_5px_15px_rgba(251,191,36,0.3)]">
              Thông Minh
            </span>
          </h1>

          {/* Đoạn mô tả */}
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-medium leading-relaxed">
            Giải pháp tối ưu cho nhóm trong việc điều phối tiến độ và kiểm soát
            phạm vi dự án phần mềm chuyên nghiệp.
          </p>

          {/* Hộp mục tiêu nhóm (Glassmorphism Card) */}
          <div className="flex justify-center pt-6">
            <div className="group bg-white/5 border border-white/10 hover:border-white/30 backdrop-blur-xl p-6 rounded-[2rem] text-left max-w-md shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FBBF24] rounded-2xl flex items-center justify-center shrink-0 shadow-lg rotate-3 group-hover:rotate-0 transition-transform">
                  <Target className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-[#FBBF24] font-black uppercase text-[10px] tracking-[0.2em] mb-1">
                    Mục tiêu nhóm
                  </h3>
                  <p className="text-sm text-white/90 font-medium leading-snug">
                    Phát triển mạnh mẽ, chuyên nghiệp, xây dựng quy trình quản
                    lý tinh gọn hướng tới tương lai.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hiệu ứng cuộn chuột (Scroll Indicator) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </header>

      {/* ABOUT OUR TEAM SECTION */}
      <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        <div className="bg-background p-8 md:p-12 rounded-3xl shadow-xl border border-primary transition-colors box-border relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <div>
                <h4 className="text-primary text-xs font-black uppercase tracking-widest mb-2">
                  About Our Team
                </h4>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Cùng nhau kiến tạo <br />
                  <span className="text-primary">Giá Trị Đích Thực</span>
                </h2>
              </div>

              <p className="text-foreground/70 leading-relaxed">
                Chúng tôi là một tập thể gồm những người đam mê công nghệ, gắn
                kết và hỗ trợ lẫn nhau. Với sự kết hợp đa dạng giúp nhóm luôn
                hướng đến những giải pháp thực tế và hiệu quả nhất.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-primary/5 p-4 rounded-2xl border border-primary/10">
                  <h5 className="font-bold text-primary flex items-center gap-2 mb-2">
                    <Target size={18} /> Sứ mệnh
                  </h5>
                  <p className="text-xs text-foreground/60">
                    Sản phẩm đáp ứng tối đa nhu cầu, đề cao tính ứng dụng.
                  </p>
                </div>
                <div className="bg-primary/5 p-4 rounded-2xl border border-primary/10">
                  <h5 className="font-bold text-primary flex items-center gap-2 mb-2">
                    <Users size={18} /> Tầm nhìn
                  </h5>
                  <p className="text-xs text-foreground/60">
                    Môi trường làm việc cởi mở và không ngừng phát triển.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group border-4 border-background">
              <Image
                src={img}
                alt="Team working"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section
        ref={teamRef}
        className="max-w-7xl mx-auto px-4 py-12 relative z-20"
      >
        <div className="bg-background p-8 rounded-3xl shadow-xl border border-primary transition-colors">
          <h2 className="text-2xl font-bold text-primary mb-8">
            Thành viên nhóm
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group cursor-pointer hover:-translate-y-1 transition-all"
                onClick={() => setSelectedMember(member)}
              >
                <div
                  className={`h-48 rounded-2xl bg-gradient-to-br ${member.color} mb-4 relative overflow-hidden shadow-lg`}
                >
                  <Users className="absolute -bottom-2 -left-2 w-20 h-20 text-white/10" />
                  <div className="absolute inset-0 p-2">
                    <Image
                      src={`${member.image}`}
                      alt={member.name}
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xs font-bold bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                      Chi tiết
                    </span>
                  </div>
                </div>
                <h4 className="font-bold text-foreground text-lg">
                  {member.name}
                </h4>
                <p className="text-foreground/50 text-sm">
                  Mssv: {member.mssv}
                </p>
                <p className="text-primary text-[10px] font-black uppercase tracking-widest mb-2">
                  {member.role}
                </p>
                <p className="text-foreground/70 text-xs line-clamp-2">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRESS & MANAGEMENT */}
      <main ref={managementRef} className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-8">
            <h3 className="text-2xl font-bold text-primary">
              Giai đoạn thực hiện
            </h3>
            <div className="bg-background rounded-2xl shadow-sm border border-primary overflow-hidden">
              <div className="bg-primary/5 p-3 border-b border-primary/10 flex gap-2">
                {["tiendo", "backlog"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2 rounded-xl text-xs font-black uppercase transition ${activeTab === tab ? "bg-primary text-white" : "text-foreground/40 hover:bg-primary/10"}`}
                  >
                    {tab === "tiendo" ? "Giai đoạn" : "Backlog"}
                  </button>
                ))}
              </div>
              <div className="p-6">
                {activeTab === "tiendo" ? (
                  <div className="space-y-4">
                    {progress.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 p-4 rounded-xl border border-primary/5 hover:border-primary transition group"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                          {item.id}
                        </div>
                        <div className="flex-1">
                          <h5 className="font-bold text-sm">{item.name}</h5>
                          <div className="text-xs text-foreground/60">
                            {item.task.map((task, index) => (
                              <p key={index}>• {task}</p>
                            ))}
                          </div>
                        </div>
                        <CheckCircle2 className="text-primary" size={18} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-background">
                    {backlogNode || (
                      <div className="text-center py-10 opacity-20">
                        <ClipboardList className="mx-auto mb-2" size={40} />
                        <p className="text-xs font-bold uppercase">
                          Chưa tải được Backlog.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xl font-bold text-primary">Quản trị</h3>
            <div className="bg-primary p-6 rounded-3xl text-white shadow-xl border-t-4 border-[#FBBF24]">
              <h4 className="text-[#FBBF24] font-black text-xs uppercase mb-2">
                Team Contract
              </h4>
              <p className="text-sm text-white/80 mb-4">
                Cam kết về thời gian và sự minh bạch.
              </p>
              <Link
                href="/team-contract"
                className="text-xs font-bold underline decoration-white/30 underline-offset-4 hover:text-[#FBBF24]"
              >
                XEM HỢP ĐỒNG
              </Link>
            </div>

            <div className="bg-background p-6 rounded-3xl border border-primary shadow-sm">
              <h4 className="font-bold text-sm flex items-center gap-2 mb-4">
                <ClipboardList size={16} className="text-primary" /> Biên bản
                họp
              </h4>
              <div className="space-y-2">
                {meetingMinutes.slice(0, 3).map((item) => (
                  <Link
                    href={`/meeting-minutes/${item.id}`}
                    key={item.id}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-primary/5 group"
                  >
                    <span className="text-xs text-foreground/60 group-hover:text-primary truncate pr-4">
                      • {item.title}
                    </span>
                    <ExternalLink
                      size={12}
                      className="text-foreground/20 group-hover:text-primary"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* MEMBER MODAL */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-background rounded-3xl p-8 max-w-md w-full relative shadow-2xl border border-primary/20 animate-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-primary/10 text-primary transition"
            >
              <X size={18} />
            </button>
            <div
              className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${selectedMember.color} mb-6 relative overflow-hidden shadow-2xl mx-auto border-4 border-background -mt-20`}
            >
              <Image
                src={selectedMember.image}
                alt={selectedMember.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-center mb-1">
              {selectedMember.name}
            </h3>
            <p className="text-primary text-center text-xs font-black uppercase tracking-widest mb-6">
              {selectedMember.role}
            </p>
            <div className="bg-primary/5 p-5 rounded-2xl border border-primary/10 mb-8 text-center text-sm italic text-foreground/70">
              {selectedMember.desc}
            </div>
            <div className="flex justify-center gap-4">
              <button className="flex-1 bg-primary text-white py-2 rounded-full font-bold text-sm shadow-lg hover:scale-105 transition">
                Liên hệ
              </button>
              <button className="p-2 rounded-full border border-primary/20 text-primary hover:bg-primary/10 transition">
                <Github size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const GreenTeamPage = ({ backlogNode }: Props) => {
  return (
    <Suspense fallback={<div className="h-screen bg-background" />}>
      <GreenTeamContent backlogNode={backlogNode} />
    </Suspense>
  );
};

export default GreenTeamPage;
