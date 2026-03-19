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
  Ticket
} from "lucide-react";

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
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Giới thiệu dự án</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight uppercase">
            Hệ thống quản lý sự kiện <br />
            <span className="text-primary relative inline-block mt-2">
              & Bán vé trực tuyến
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"></span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed mt-6">
            Dự án này nhằm xây dựng một hệ thống để hỗ trợ các tổ chức hoặc cá nhân trong việc tổ chức và quản lý các sự kiện một cách thông minh và tối ưu.
          </p>
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
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">Dành cho Nhà Tổ Chức</h3>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                Hệ thống cho phép người quản lý một cách linh hoạt, đảm bảo sự kiện hoạt động trơn tru với các công cụ tối ưu:
              </p>
              
              <ul className="space-y-4">
                {[
                  { icon: CalendarCheck, text: "Tạo sự kiện, thiết lập chi tiết thông tin" },
                  { icon: Settings, text: "Cập nhật thông tin sự kiện liên tục" },
                  { icon: Users, text: "Quản lý số lượng người tham gia hiệu quả" },
                  { icon: BarChart, text: "Theo dõi tình hình bán vé trực tiếp" },
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
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">Dành cho Người Tham Gia</h3>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                Người dùng có thể dễ dàng tương tác với hệ thống, mang lại sự tiện ích cao nhất trong suốt quá trình sử dụng:
              </p>
              
              <ul className="space-y-4">
                {[
                  { icon: Search, text: "Dễ dàng tìm kiếm sự kiện yêu thích" },
                  { icon: Ticket, text: "Đặt vé nhanh gọn chỉ bằng vài cú click" },
                  { icon: CreditCard, text: "Thực hiện thanh toán trực tuyến an toàn" },
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
          <h2 className="text-3xl font-black tracking-tight uppercase mb-6">Giá trị & Lợi ích mang lại</h2>
          <p className="text-lg text-foreground/70 leading-relaxed mb-16">
            Việc ứng dụng hệ thống sẽ giải quyết triệt để các hạn chế hiện tại và tối ưu hóa quy trình.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-2xl shadow-sm border border-primary/10 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <Zap size={24} />
              </div>
              <h4 className="font-bold text-lg mb-2">Giảm Thao Tác Thủ Công</h4>
              <p className="text-sm text-foreground/60">Tự động hoá nhiều khâu trong quản lý giúp tiết kiệm thời gian đáng kể.</p>
            </div>

            <div className="bg-background p-6 rounded-2xl shadow-sm border border-primary/10 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <ShieldCheck size={24} />
              </div>
              <h4 className="font-bold text-lg mb-2">Hạn Chế Sai Sót</h4>
              <p className="text-sm text-foreground/60">Bảo đảm tính chính xác trong quá trình thu thập thông tin và quản lý dữ liệu.</p>
            </div>

            <div className="bg-background p-6 rounded-2xl shadow-sm border border-primary/10 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <Users size={24} />
              </div>
              <h4 className="font-bold text-lg mb-2">Nâng Cao Trải Nghiệm</h4>
              <p className="text-sm text-foreground/60">Đồng thời nâng cao trải nghiệm sự kiện mượt mà và trọn vẹn hơn cho người tham gia.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
