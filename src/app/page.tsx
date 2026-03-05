"use client";

import React, { useState, useEffect } from "react";
import {
  Users,
  Target,
  FileText,
  Calendar,
  Layout,
  Video,
  ClipboardList,
  Github,
  ExternalLink,
  CheckCircle2,
  ChevronRight,
  Mail,
  Sun,
  Moon,
} from "lucide-react";

const GreenTeamPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("tiendo");

  // Hàm chuyển đổi Dark Mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const teamMembers = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      role: "Leader / Project Manager",
      desc: "Điều phối dự án, quản lý phạm vi và tiến độ tuần.",
      color: "from-[#064E3B] to-[#10B981]",
    },
    {
      id: 2,
      name: "Trần Thị B",
      role: "UI/UX Designer",
      desc: "Thiết kế giao diện, poster và bộ nhận diện thương hiệu.",
      color: "from-[#10B981] to-[#059669]",
    },
    {
      id: 3,
      name: "Lê Văn C",
      role: "Backend Developer",
      desc: "Xây dựng hệ thống API và quản trị cơ sở dữ liệu.",
      color: "from-[#059669] to-[#064E3B]",
    },
    {
      id: 4,
      name: "Phạm Minh D",
      role: "Frontend Developer",
      desc: "Chuyển đổi thiết kế thành mã nguồn React/Tailwind.",
      color: "from-[#064E3B] to-[#10B981]",
    },
    {
      id: 5,
      name: "Hoàng Anh E",
      role: "Tester / Marketing",
      desc: "Kiểm thử sản phẩm và thực hiện video, nội dung quảng bá.",
      color: "from-[#10B981] to-[#059669]",
    },
  ];

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#02140f] text-[#111827] dark:text-gray-100 font-sans transition-colors duration-300">
        {/* NAVIGATION */}
        <nav className="bg-[#064E3B] dark:bg-[#011a14] text-white sticky top-0 z-50 shadow-md border-b border-[#10B981]/20">
          <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-[#FBBF24] rounded-lg flex items-center justify-center">
                <Users size={20} className="text-[#064E3B]" />
              </div>
              <span className="font-black text-xl tracking-tighter">
                GREEN<span className="text-[#FBBF24]">5</span>
              </span>
            </div>

            <div className="hidden md:flex gap-6 text-sm font-semibold uppercase tracking-wide">
              <a href="#team" className="hover:text-[#FBBF24] transition">
                Thành viên
              </a>
              <a href="#management" className="hover:text-[#FBBF24] transition">
                Quản lý
              </a>
              <a href="#product" className="hover:text-[#FBBF24] transition">
                Sản phẩm
              </a>
            </div>

            <div className="flex items-center gap-4">
              {/* DARK MODE TOGGLE */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-[#10B981]/20 hover:bg-[#10B981]/40 transition-colors"
              >
                {isDarkMode ? (
                  <Sun size={20} className="text-[#FBBF24]" />
                ) : (
                  <Moon size={20} className="text-white" />
                )}
              </button>
              <button className="bg-[#FBBF24] text-[#064E3B] px-5 py-2 rounded-full text-xs font-bold transition-all shadow-lg hover:scale-105">
                BACKLOG
              </button>
            </div>
          </div>
        </nav>

        {/* HERO SECTION */}
        <header
          id="intro"
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
          id="team"
          className="max-w-7xl mx-auto px-4 -mt-16 relative z-20"
        >
          <div className="bg-white dark:bg-[#062d24] p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-white/5 transition-colors">
            <h2 className="text-2xl font-bold text-[#064E3B] dark:text-[#10B981] mb-8">
              Thành viên nhóm
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {teamMembers.map((member) => (
                <div key={member.id} className="group">
                  <div
                    className={`h-32 rounded-2xl bg-gradient-to-br ${member.color} mb-4 relative overflow-hidden shadow-inner`}
                  >
                    <div className="absolute inset-0 opacity-20 group-hover:scale-110 transition-transform duration-500">
                      <Users className="absolute -bottom-4 -right-4 w-24 h-24" />
                    </div>
                  </div>
                  <h4 className="font-bold text-[#064E3B] dark:text-white text-lg">
                    {member.name}
                  </h4>
                  <p className="text-[#10B981] dark:text-[#FBBF24] text-[10px] font-black uppercase tracking-widest mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-4">
                    {member.desc}
                  </p>
                  <div className="flex gap-3 text-gray-400">
                    <Github
                      size={16}
                      className="cursor-pointer hover:text-[#10B981]"
                    />
                    <Mail
                      size={16}
                      className="cursor-pointer hover:text-[#10B981]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROGRESS & MANAGEMENT */}
        <main id="management" className="max-w-7xl mx-auto px-4 py-24">
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
          id="product"
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

        {/* FOOTER */}
        <footer className="bg-[#064E3B] dark:bg-[#000000] text-white py-12 px-4 transition-colors">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-[#FBBF24] rounded flex items-center justify-center text-[#064E3B] text-[10px] font-bold">
                  5
                </div>
                <span className="font-bold tracking-tighter">GREENTEAM</span>
              </div>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">
                Software Project Management 2024
              </p>
            </div>
            <div className="flex gap-8 text-[10px] font-bold text-gray-400">
              <a href="#" className="hover:text-[#FBBF24]">
                GITHUB
              </a>
              <a href="#" className="hover:text-[#FBBF24]">
                JIRA
              </a>
              <a href="#" className="hover:text-[#FBBF24]">
                DOCUMENTATION
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default GreenTeamPage;
