"use client";

import { useEffect, useState } from "react";
import {
  CalendarCheck,
  Users,
  Search,
  CreditCard,
  Settings,
  BarChart,
  Zap,
  ShieldCheck,
  Ticket,
  FolderOpen,
  FileText,
  ExternalLink,
  Github,
  GitBranch,
} from "lucide-react";

import docs from "../data/docs.json";

export default function IntroducePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      {/* HEADER SECTION */}
      <header className="relative pt-32 pb-20 px-4 overflow-hidden flex flex-col items-center justify-center min-h-[50vh]">
        {/* Decorative elements */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Giới thiệu dự án
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight uppercase">
            Hệ thống quản lý sự kiện <br />
            <span className="text-primary relative inline-block mt-2">
              & Bán vé trực tuyến
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"></span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed mt-6">
            Dự án này nhằm xây dựng một hệ thống để hỗ trợ các tổ chức hoặc cá
            nhân trong việc tổ chức và quản lý các sự kiện một cách thông minh
            và tối ưu.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href={process.env.GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-primary text-white font-bold text-sm hover:scale-105 hover:shadow-lg hover:shadow-primary/20 active:scale-95 transition-all duration-300 dark:text-background"
            >
              <Github size={18} />
              GitHub Sản Phẩm
            </a>
          </div>
        </div>
      </header>

      {/* CORE FEATURES SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {/* Đối với Quản lý */}
          <div className="bg-background rounded-3xl p-8 border border-primary/20 shadow-xl relative overflow-hidden group hover:border-primary/50 transition-colors duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110">
              <Settings size={180} />
            </div>

            <div className="relative z-10">
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-lg mb-6 text-white transform -rotate-3 group-hover:rotate-0 transition-transform">
                <Settings size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">
                Dành cho Nhà Tổ Chức
              </h3>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                Hệ thống cho phép người quản lý một cách linh hoạt, đảm bảo sự
                kiện hoạt động trơn tru với các công cụ tối ưu:
              </p>

              <ul className="space-y-4">
                {[
                  {
                    icon: CalendarCheck,
                    text: "Tạo sự kiện, thiết lập chi tiết thông tin",
                  },
                  {
                    icon: Settings,
                    text: "Cập nhật thông tin sự kiện liên tục",
                  },
                  {
                    icon: Users,
                    text: "Quản lý số lượng người tham gia hiệu quả",
                  },
                  {
                    icon: BarChart,
                    text: "Theo dõi tình hình bán vé trực tiếp",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <item.icon size={16} />
                    </div>
                    <span className="font-medium text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Đối với Người dùng */}
          <div className="bg-background rounded-3xl p-8 border border-primary/20 shadow-xl relative overflow-hidden group hover:border-primary/50 transition-colors duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110">
              <Users size={180} />
            </div>

            <div className="relative z-10">
              <div className="w-14 h-14 bg-primary/20 border border-primary/30 rounded-2xl flex items-center justify-center shadow-lg mb-6 text-primary transform rotate-3 group-hover:rotate-0 transition-transform">
                <Users size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">
                Dành cho Người Tham Gia
              </h3>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                Người dùng có thể dễ dàng tương tác với hệ thống, mang lại sự
                tiện ích cao nhất trong suốt quá trình sử dụng:
              </p>

              <ul className="space-y-4">
                {[
                  { icon: Search, text: "Dễ dàng tìm kiếm sự kiện yêu thích" },
                  {
                    icon: Ticket,
                    text: "Đặt vé nhanh gọn chỉ bằng vài cú click",
                  },
                  {
                    icon: CreditCard,
                    text: "Thực hiện thanh toán trực tuyến an toàn",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <item.icon size={16} />
                    </div>
                    <span className="font-medium text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES / BENEFITS SECTION */}
      <section className="bg-primary/5 py-24 px-4 border-t border-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black tracking-tight uppercase mb-6">
            Giá trị & Lợi ích mang lại
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed mb-16">
            Việc ứng dụng hệ thống sẽ giải quyết triệt để các hạn chế hiện tại
            và tối ưu hóa quy trình.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-2xl shadow-sm border border-primary/10 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <Zap size={24} />
              </div>
              <h4 className="font-bold text-lg mb-2">Giảm Thao Tác Thủ Công</h4>
              <p className="text-sm text-foreground/60">
                Tự động hoá nhiều khâu trong quản lý giúp tiết kiệm thời gian
                đáng kể.
              </p>
            </div>

            <div className="bg-background p-6 rounded-2xl shadow-sm border border-primary/10 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <ShieldCheck size={24} />
              </div>
              <h4 className="font-bold text-lg mb-2">Hạn Chế Sai Sót</h4>
              <p className="text-sm text-foreground/60">
                Bảo đảm tính chính xác trong quá trình thu thập thông tin và
                quản lý dữ liệu.
              </p>
            </div>

            <div className="bg-background p-6 rounded-2xl shadow-sm border border-primary/10 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <Users size={24} />
              </div>
              <h4 className="font-bold text-lg mb-2">Nâng Cao Trải Nghiệm</h4>
              <p className="text-sm text-foreground/60">
                Đồng thời nâng cao trải nghiệm sự kiện mượt mà và trọn vẹn hơn
                cho người tham gia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT GITHUB REPOSITORY SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-16 relative z-10">
        <div className="bg-gradient-to-br from-primary/10 via-background to-primary/5 rounded-[2.5rem] p-8 md:p-12 border border-primary/20 shadow-2xl relative overflow-hidden group">
          {/* Decorative glowing gradient */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-primary/20 transition-all duration-700" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-primary/20 transition-all duration-700" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left: Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
                <Github size={14} className="text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Open Source Product
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                Mã nguồn dự án <br />
                <span className="text-primary">Được Công Khai Trên GitHub</span>
              </h2>

              <p className="text-foreground/70 leading-relaxed max-w-xl">
                Chúng tôi quản lý toàn bộ vòng đời phát triển phần mềm (SDLC)
                một cách minh bạch thông qua nền tảng GitHub. Dự án được áp dụng
                mô hình Git Flow chuẩn hóa, đảm bảo tính nhất quán, bảo mật và
                chất lượng mã nguồn cao.
              </p>

              {/* Badges/Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                <div className="bg-background/50 border border-primary/10 p-3 rounded-2xl text-center backdrop-blur-sm">
                  <div className="text-xs text-foreground/50 font-bold uppercase tracking-wider mb-1">
                    Ngôn ngữ
                  </div>
                  <div className="text-sm font-black text-primary">
                    TypeScript
                  </div>
                </div>
                <div className="bg-background/50 border border-primary/10 p-3 rounded-2xl text-center backdrop-blur-sm">
                  <div className="text-xs text-foreground/50 font-bold uppercase tracking-wider mb-1">
                    Phiên bản
                  </div>
                  <div className="text-sm font-black text-primary">v1.0.0</div>
                </div>
                <div className="bg-background/50 border border-primary/10 p-3 rounded-2xl text-center backdrop-blur-sm">
                  <div className="text-xs text-foreground/50 font-bold uppercase tracking-wider mb-1">
                    Giấy phép
                  </div>
                  <div className="text-sm font-black text-primary">
                    MIT License
                  </div>
                </div>
                <div className="bg-background/50 border border-primary/10 p-3 rounded-2xl text-center backdrop-blur-sm">
                  <div className="text-xs text-foreground/50 font-bold uppercase tracking-wider mb-1">
                    Trạng thái
                  </div>
                  <div className="text-sm font-black text-primary">Public</div>
                </div>
              </div>
            </div>

            {/* Right: CTA Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm bg-background/60 border border-primary/30 p-8 rounded-3xl backdrop-blur-xl shadow-2xl relative group/card hover:border-primary/60 transition-all duration-500 hover:-translate-y-1">
                {/* Glowing glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                <div className="flex flex-col items-center text-center space-y-6 relative z-10">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-inner group-hover/card:scale-110 transition-transform duration-500">
                    <Github size={44} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-1">
                      Calvinan132/GR-introduce
                    </h3>
                    <p className="text-xs text-foreground/50 flex items-center justify-center gap-1">
                      <GitBranch size={12} className="text-primary" /> branch:{" "}
                      <strong>main</strong>
                    </p>
                  </div>

                  <p className="text-xs text-foreground/60 leading-relaxed">
                    Tải về mã nguồn, nhân bản dự án (clone) hoặc đóng góp
                    (contribute) trực tiếp thông qua pull request trên hệ thống
                    của chúng tôi.
                  </p>

                  <a
                    href={process.env.GITHUB_REPO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 px-6 rounded-2xl font-black text-sm uppercase tracking-wider shadow-lg hover:shadow-primary/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 dark:text-background"
                  >
                    Truy Cập Repository <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPRINTS DOCUMENT SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-24 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-4">
            <FolderOpen size={16} className="text-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Tài Liệu Của Team
            </span>
          </div>
          <h2 className="text-3xl font-black tracking-tight uppercase mb-4">
            Tài liệu dự án theo Sprint
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Nơi lưu trữ, quản lý tài liệu, báo cáo tiến độ và các sản phẩm bàn
            giao của từng giai đoạn phát triển (Sprint).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {docs?.map((sprint) => (
            <div
              key={sprint.id}
              className="bg-background rounded-3xl p-6 border border-primary/20 shadow-xl hover:border-primary/50 transition-colors group flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <FolderOpen size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{sprint.name}</h3>
                    <p className="text-xs text-foreground/60">{sprint.desc}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mt-6 flex-grow">
                <h4 className="text-sm font-semibold uppercase text-foreground/50 tracking-wider">
                  Tài liệu đính kèm
                </h4>
                <div className="space-y-2">
                  {sprint.docs.length > 0 ? (
                    sprint.docs.map((doc, i) => {
                      return "link" in doc && doc.link ? (
                        <a
                          key={i}
                          href={doc.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 rounded-xl bg-primary/5 border border-primary/5 hover:bg-primary/15 transition-colors group/doc cursor-pointer shadow-sm"
                        >
                          <div className="flex items-center gap-3 overflow-hidden">
                            <FileText
                              size={18}
                              className="text-primary shrink-0"
                            />
                            <span className="text-sm font-medium truncate text-foreground/80 group-hover/doc:text-foreground">
                              {doc.name}
                            </span>
                          </div>
                          <ExternalLink
                            size={16}
                            className="text-primary/50 group-hover/doc:text-primary shrink-0 opacity-0 group-hover/doc:opacity-100 transition-opacity"
                          />
                        </a>
                      ) : (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/5 shadow-sm text-foreground/40 italic text-sm"
                        >
                          <FileText size={18} className="shrink-0" />
                          <span>{doc.name}</span>
                        </div>
                      );
                    })
                  ) : (
                    <p className="text-sm text-foreground/40 italic py-2">
                      Chưa có tài liệu
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
