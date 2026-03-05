"use client";
import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Users,
  Target,
  FileText,
  Layout,
  Video,
  ClipboardList,
  Github,
  ExternalLink,
  CheckCircle2,
  ChevronRight,
  Mail,
  X,
} from "lucide-react";
import teamMembers from "./data/teamMembers.json";

const GreenTeamContent = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("tiendo");
  const [selectedMember, setSelectedMember] = useState<(typeof teamMembers)[0] | null>(null);

  const searchParams = useSearchParams();
  const section = searchParams.get("section");

  const teamRef = useRef<HTMLElement>(null);
  const managementRef = useRef<HTMLElement>(null);
  const productRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (section === "team" && teamRef.current) {
      teamRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "management" && managementRef.current) {
      managementRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "product" && productRef.current) {
      productRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [section]);

  // Hàm chuyển đổi Dark Mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#02140f] text-[#111827] dark:text-gray-100 font-sans transition-colors duration-300">
        {/* HERO SECTION */}
        <header
          className="relative bg-[#064E3B] dark:bg-[#011a14] pt-20 pb-32 px-4 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#10B981] opacity-10 rounded-full -mr-20 -mt-20"></div>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Quản Trị <span className="text-[#FBBF24]">Thông Minh</span>
            </h1>
            <p className="text-xl text-gray-300 dark:text-gray-400 max-w-2xl mx-auto mb-10">
              Giải pháp tối ưu cho nhóm 5 người trong việc quản lý tiến độ và
              phạm vi dự án phần mềm.
            </p>
            <div className="flex justify-center">
              <div className="bg-white/5 border border-white/10 dark:bg-black/20 p-4 rounded-2xl backdrop-blur-sm text-left max-w-md">
                <h3 className="text-[#FBBF24] font-bold flex items-center mb-2">
                  <Target size={18} className="mr-2" /> Mục tiêu đề tài
                </h3>
                <p className="text-sm text-gray-200">
                  Xây dựng nền tảng hỗ trợ các nhóm làm việc từ xa theo quy
                  trình Agile hiện đại.
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* TEAM SECTION */}
        <section
          ref={teamRef}
          className="max-w-7xl mx-auto px-4 -mt-16 relative z-20"
        >
          <div className="bg-white dark:bg-[#062d24] p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-white/5 transition-colors">
            <h2 className="text-2xl font-bold text-[#064E3B] dark:text-[#10B981] mb-8">
              Thành viên nhóm
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="group cursor-pointer hover:-translate-y-1 transition-all duration-300"
                  onClick={() => setSelectedMember(member)}
                >
                  {/* Container chứa ảnh */}
                  <div
                    className={`h-48 rounded-2xl bg-gradient-to-br ${member.color} mb-4 relative overflow-hidden shadow-lg`}
                  >
                    {/* Lớp phủ họa tiết icon ẩn bên dưới */}
                    <Users className="absolute -bottom-2 -left-2 w-20 h-20 text-white/10" />

                    {/* Ảnh thành viên - Đã sửa lỗi hiển thị */}
                    <div className="absolute inset-0 flex items-center justify-center p-2">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                        // Dự phòng nếu ảnh lỗi thì hiện icon
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=" + member.name;
                        }}
                      />
                    </div>

                    {/* Hiệu ứng overlay khi hover */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-xs font-bold bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                        Xem chi tiết
                      </span>
                    </div>
                  </div>

                  {/* Thông tin bên dưới */}
                  <h4 className="font-bold text-[#064E3B] dark:text-white text-lg">
                    {member.name}
                  </h4>
                  <p className="text-[#10B981] dark:text-[#FBBF24] text-[10px] font-black uppercase tracking-widest mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2">
                    {member.desc}
                  </p>

                  <div className="flex gap-3 text-gray-400 group-hover:text-[#10B981] transition-colors">
                    <Github size={16} className="cursor-pointer hover:scale-110 transition" />
                    <Mail size={16} className="cursor-pointer hover:scale-110 transition" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROGRESS & MANAGEMENT */}
        <main ref={managementRef} className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-8">
              <h3 className="text-2xl font-bold text-[#064E3B] dark:text-[#10B981]">
                Tiến độ dự án
              </h3>
              <div className="bg-white dark:bg-[#062d24] rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 overflow-hidden">
                <div className="bg-gray-50 dark:bg-[#04211a] p-3 border-b border-gray-100 dark:border-white/5 flex gap-2">
                  {["tiendo", "backlog"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition ${activeTab === tab ? "bg-[#064E3B] text-white" : "text-gray-400 hover:bg-gray-200 dark:hover:bg-[#063b2f]"}`}
                    >
                      {tab === "tiendo" ? "Theo Tuần" : "Product Backlog"}
                    </button>
                  ))}
                </div>

                <div className="p-6">
                  {activeTab === "tiendo" ? (
                    <div className="space-y-4">
                      {[1, 2, 3].map((w) => (
                        <div
                          key={w}
                          className="flex items-center gap-4 p-4 rounded-xl border border-gray-50 dark:border-white/5 hover:border-[#10B981] dark:hover:border-[#FBBF24] transition group"
                        >
                          <div className="w-10 h-10 rounded-full bg-[#10B981] text-white flex items-center justify-center font-bold text-sm">
                            {w}
                          </div>
                          <div className="flex-1">
                            <h5 className="font-bold text-sm dark:text-white">
                              Tuần {w}: Hoàn thiện tài liệu
                            </h5>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Biên bản họp và phân tích rủi ro đã cập nhật.
                            </p>
                          </div>
                          <CheckCircle2 className="text-[#10B981]" size={18} />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-10 text-gray-400">
                      <ClipboardList
                        className="mx-auto mb-2 opacity-20"
                        size={40}
                      />
                      <p className="text-xs uppercase tracking-widest font-bold">
                        Dữ liệu Jira đang cập nhật...
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <h3 className="text-xl font-bold text-[#064E3B] dark:text-[#10B981]">
                Quản trị
              </h3>
              <div className="bg-[#064E3B] dark:bg-[#04211a] p-6 rounded-3xl text-white shadow-xl border-t-4 border-[#FBBF24]">
                <h4 className="text-[#FBBF24] font-black text-xs uppercase tracking-tighter mb-2">
                  Team Contract
                </h4>
                <p className="text-sm text-gray-300 mb-4">
                  Cam kết về thời gian, chất lượng mã nguồn và sự minh bạch
                  trong trao đổi.
                </p>
                <button className="text-xs font-bold underline decoration-[#10B981] underline-offset-4">
                  XEM HỢP ĐỒNG
                </button>
              </div>

              <div className="bg-white dark:bg-[#062d24] p-6 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm">
                <h4 className="font-bold text-sm mb-4 flex items-center gap-2 dark:text-white">
                  <ClipboardList size={16} className="text-[#10B981]" /> Biên
                  bản họp nhóm
                </h4>
                <div className="space-y-2">
                  {["Kick-off Project", "UI Design Review"].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-[#F9FAFB] dark:hover:bg-[#063b2f] cursor-pointer transition"
                    >
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        • {item}
                      </span>
                      <ExternalLink size={12} className="text-gray-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* PRODUCT & PROMOTION */}
        <section
          ref={productRef}
          className="bg-white dark:bg-[#011a14] py-24 transition-colors"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#064E3B] dark:text-[#10B981]">
                Quảng bá dự án
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-video bg-[#064E3B] dark:bg-[#062d24] rounded-3xl flex flex-col items-center justify-center border border-[#10B981]/20 group cursor-pointer overflow-hidden relative">
                <Video
                  size={40}
                  className="text-[#FBBF24] mb-2 group-hover:scale-110 transition"
                />
                <span className="text-white font-bold text-sm">
                  VIDEO GIỚI THIỆU
                </span>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <div className="w-12 h-12 bg-[#FBBF24] rounded-full flex items-center justify-center text-[#064E3B] pl-1">
                    ▶
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#F9FAFB] dark:bg-[#062d24] rounded-2xl border border-gray-100 dark:border-white/5 flex flex-col items-center justify-center p-6 hover:border-[#FBBF24] transition">
                  <Layout className="text-[#10B981] mb-2" />
                  <span className="text-[10px] font-black text-[#064E3B] dark:text-gray-300">
                    UI DESIGN
                  </span>
                </div>
                <div className="bg-[#F9FAFB] dark:bg-[#062d24] rounded-2xl border border-gray-100 dark:border-white/5 flex flex-col items-center justify-center p-6 hover:border-[#FBBF24] transition">
                  <FileText className="text-[#10B981] mb-2" />
                  <span className="text-[10px] font-black text-[#064E3B] dark:text-gray-300">
                    POSTER
                  </span>
                </div>
                <div className="col-span-2 bg-[#FBBF24] p-4 rounded-2xl flex justify-between items-center px-8">
                  <span className="text-[#064E3B] font-bold text-sm italic underline">
                    Download Pitch Deck (PDF)
                  </span>
                  <ChevronRight className="text-[#064E3B]" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* MEMBER MODAL */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white dark:bg-[#062d24] rounded-3xl p-8 max-w-md w-full relative shadow-2xl border border-gray-100 dark:border-white/10 transform transition-all duration-300 animate-in slide-in-from-bottom-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Nút đóng */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-5 right-5 p-2 z-10 rounded-full bg-white/60 dark:bg-black/40 text-gray-500 dark:text-gray-300 hover:bg-white dark:hover:bg-black/70 hover:scale-110 transition shadow-sm"
            >
              <X size={18} />
            </button>

            {/* Container chứa ảnh - Đã sửa lỗi hiển thị */}
            <div
              className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${selectedMember.color} mb-6 relative overflow-hidden shadow-2xl mx-auto border-4 border-white dark:border-[#062d24] -mt-20`}
            >
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-full h-full object-cover rounded-2xl scale-100 hover:scale-105 transition-transform duration-500"
                // Dự phòng nếu ảnh lỗi thì hiện icon
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://ui-avatars.com/api/?name=" +
                    selectedMember.name +
                    "&size=128";
                }}
              />
            </div>

            {/* Thông tin thành viên */}
            <h3 className="text-2xl font-bold text-center text-[#064E3B] dark:text-white mb-1">
              {selectedMember.name}
            </h3>
            <p className="text-[#10B981] dark:text-[#FBBF24] text-center text-xs font-black uppercase tracking-widest mb-6">
              {selectedMember.role}
            </p>

            <div className="bg-gray-50 dark:bg-[#04211a] p-5 rounded-2xl border border-gray-100 dark:border-white/5 mb-8">
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed text-center">
                {selectedMember.desc}
              </p>
            </div>

            {/* Các nút hành động */}
            <div className="flex justify-center gap-4">
              <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-[#064E3B] text-white hover:bg-[#043b2c] transition hover:scale-105 font-semibold text-sm shadow-md">
                <Mail size={16} /> Liên hệ
              </button>
              <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 transition hover:scale-105 font-semibold text-sm">
                <Github size={16} /> GitHub
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const GreenTeamPage = () => {
  return (
    <Suspense fallback={null}>
      <GreenTeamContent />
    </Suspense>
  );
};

export default GreenTeamPage;
