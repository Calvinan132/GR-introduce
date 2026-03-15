"use client";

import React from "react";
import {
  ExternalLink,
  Users,
  Calendar,
  MapPin,
  Gavel,
  Star,
  Coffee,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function TeamContractPage() {
  const googleDocsId = "1j0DnkMeIaaE1lSh7j4jjGskQXgfapHSa";
  const embedUrl = `https://docs.google.com/file/d/${googleDocsId}/preview`;
  const editUrl = `https://docs.google.com/file/d/${googleDocsId}/edit`;

  // Dữ liệu cho các section bên phải
  const principles = [
    "Tinh thần trách nhiệm cao",
    "Lắng nghe và tôn trọng ý kiến",
    "Chủ động giải quyết vấn đề",
    "Khả năng lãnh đạo & nhìn nhận vấn đề",
  ];

  const evaluationCriteria = [
    {
      score: "9 - 10",
      desc: "Xuất sắc, sáng tạo, Leader",
      color: "text-primary",
    },
    { score: "7 - 8", desc: "Hoàn thành tốt nhiệm vụ", color: "text-blue-500" },
    { score: "5 - 6", desc: "Còn nhiều thiếu sót", color: "text-orange-500" },
    { score: "0", desc: "Không tham gia", color: "text-red-500" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 pb-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* HEADER SECTION */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 uppercase">
            Team Working <span className="text-primary">Contract</span>
          </h1>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-foreground/50 font-medium max-w-2xl mx-auto text-sm uppercase tracking-widest">
            Nguyên tắc làm việc và cam kết chất lượng của đội ngũ Green5
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT: DOCUMENT VIEWER */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between bg-background border border-primary/10 p-5 rounded-3xl shadow-sm">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5 mr-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest opacity-40">
                  Docs Preview
                </span>
              </div>
              <a
                href={editUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-[10px] font-black uppercase tracking-widest bg-primary text-white rounded-full hover:scale-105 transition-all shadow-lg shadow-primary/20"
              >
                <ExternalLink size={12} /> Mở bản full
              </a>
            </div>

            <div className="bg-background rounded-[2rem] shadow-2xl border border-primary/10 overflow-hidden h-[750px] relative group">
              <iframe
                src={embedUrl}
                className="w-full h-full border-0"
                title="Team Contract"
                allowFullScreen
              />
            </div>
          </div>

          {/* RIGHT: STRUCTURED CONTENT */}
          <div className="lg:col-span-5 space-y-8">
            {/* 1. Principles */}
            <section className="bg-background border border-primary/10 p-8 rounded-[2rem] shadow-sm">
              <h3 className="flex items-center gap-3 text-lg font-black mb-6 uppercase tracking-tight">
                <Users className="text-primary" size={22} /> Nguyên tắc làm việc
              </h3>
              <ul className="space-y-4">
                {principles.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <CheckCircle2
                      size={18}
                      className="text-primary mt-0.5 shrink-0 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-sm text-foreground/70 italic font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 2. Meeting Rules */}
            <section className="bg-background border border-primary/10 p-8 rounded-[2rem] shadow-sm">
              <h3 className="flex items-center gap-3 text-lg font-black mb-6 uppercase tracking-tight">
                <Calendar className="text-primary" size={22} /> Lịch họp nhóm
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-primary tracking-widest mb-1">
                      Địa điểm
                    </p>
                    <p className="text-sm font-bold opacity-80">
                      Online (Meet) / Offline tại UIT
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Calendar size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-primary tracking-widest mb-1">
                      Tần suất
                    </p>
                    <p className="text-sm font-bold opacity-80">
                      Cố định 1 lần/tuần (Báo cáo & Gỡ rối)
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Rewards & Penalties */}
            <section className="bg-primary p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <h3 className="flex items-center gap-3 text-lg font-black mb-6 uppercase tracking-tight relative z-10">
                <Gavel className="text-[#FBBF24]" size={22} /> Thưởng & Phạt
              </h3>
              <div className="space-y-4 relative z-10">
                <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                  <p className="font-black text-[10px] uppercase text-[#FBBF24] tracking-widest flex items-center gap-2 mb-2">
                    <Coffee size={14} /> Đặc quyền thưởng
                  </p>
                  <p className="text-xs font-medium leading-relaxed opacity-90">
                    Hoàn thành xuất sắc nhiệm vụ sẽ được Leader thưởng 1 ly cafe
                    Ngô Gia.
                  </p>
                </div>
                <div className="p-4 bg-black/10 rounded-2xl border border-white/5">
                  <p className="font-black text-[10px] uppercase text-red-300 tracking-widest flex items-center gap-2 mb-2">
                    <AlertCircle size={14} /> Quy tắc kỷ luật
                  </p>
                  <p className="text-xs font-medium leading-relaxed opacity-90">
                    Chậm deadline hoặc thiếu tích cực sẽ bị trừ điểm đánh giá
                    hoặc loại khỏi nhóm.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Evaluation Criteria */}
            <section className="bg-background border border-primary/10 p-8 rounded-[2rem] shadow-sm">
              <h3 className="flex items-center gap-3 text-lg font-black mb-6 uppercase tracking-tight">
                <Star className="text-primary" size={22} /> Tiêu chí đánh giá
              </h3>
              <div className="space-y-2">
                {evaluationCriteria.map((c, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center p-3 hover:bg-primary/5 rounded-xl transition-colors group"
                  >
                    <span className={`font-black text-lg ${c.color}`}>
                      {c.score}
                    </span>
                    <span className="text-[11px] font-bold opacity-40 uppercase tracking-tighter group-hover:opacity-100 transition-opacity">
                      {c.desc}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
