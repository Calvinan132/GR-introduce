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

  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#02140f] text-[#111827] dark:text-gray-100 font-sans transition-colors duration-300 pb-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">
            Team Working Contract
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Văn bản cam kết về nguyên tắc làm việc, kế hoạch và tiêu chí đánh
            giá nhằm đảm bảo hiệu quả tối đa cho đồ án nhóm.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side: Document Viewer */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between bg-white dark:bg-[#062d24] p-4 rounded-xl border border-gray-100 dark:border-white/5 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-sm font-medium opacity-70">
                  Google Docs Preview
                </span>
              </div>
              <a
                href={editUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 text-sm bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-lg hover:bg-emerald-100 transition-colors"
              >
                <ExternalLink size={14} /> Mở bản full
              </a>
            </div>

            <div className="bg-white dark:bg-[#062d24] rounded-2xl shadow-2xl border border-gray-100 dark:border-white/5 overflow-hidden h-[700px]">
              <iframe
                src={embedUrl}
                className="w-full h-full border-0"
                title="Google Docs Team Contract"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Right Side: Structured Content */}
          <div className="lg:col-span-5 space-y-6">
            {/* 1. Nguyên tắc */}
            <section className="bg-white dark:bg-[#062d24] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
              <h3 className="flex items-center gap-2 text-lg font-bold mb-4 text-emerald-600">
                <Users size={20} /> 1. Nguyên tắc làm việc
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  "Tinh thần trách nhiệm cao",
                  "Lắng nghe và tôn trọng ý kiến",
                  "Chủ động giải quyết vấn đề",
                  "Khả năng lãnh đạo & nhìn nhận vấn đề",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 italic">
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 text-emerald-500 shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 2 & 3. Họp hành */}
            <section className="bg-white dark:bg-[#062d24] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
              <h3 className="flex items-center gap-2 text-lg font-bold mb-4 text-blue-500">
                <Calendar size={20} /> 2 & 3. Lịch họp & Hình thức
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <MapPin size={18} className="text-gray-400 shrink-0" />
                  <div>
                    <p className="font-semibold">Địa điểm:</p>
                    <p className="opacity-80">
                      Online (Google Meet) hoặc Offline tại trường ĐH CNTT.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Calendar size={18} className="text-gray-400 shrink-0" />
                  <div>
                    <p className="font-semibold">Tần suất:</p>
                    <p className="opacity-80">
                      1 lần/tuần để báo cáo tiến độ và gỡ rối khó khăn.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Thưởng phạt */}
            <section className="bg-gradient-to-br from-emerald-50 to-white dark:from-[#062d24] dark:to-[#04211a] p-6 rounded-2xl border border-emerald-100 dark:border-emerald-500/20 shadow-sm relative overflow-hidden">
              <h3 className="flex items-center gap-2 text-lg font-bold mb-4 text-orange-500">
                <Gavel size={20} /> 4. Quy tắc thưởng phạt
              </h3>
              <div className="space-y-4 text-sm relative z-10">
                <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                  <p className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                    <Coffee size={16} /> Thưởng:
                  </p>
                  <p className="mt-1 opacity-90 italic">
                    Hoàn thành xuất sắc, đóng góp sáng kiến hoặc fix bug lớn sẽ
                    được leader **Tạ Duy Phúc** mời 1 ly Ngô Gia.
                  </p>
                </div>
                <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                  <p className="font-bold text-red-600 dark:text-red-400 flex items-center gap-2">
                    <AlertCircle size={16} /> Phạt:
                  </p>
                  <p className="mt-1 opacity-90 italic">
                    Chậm tiến độ, thiếu tích cực sẽ bị cảnh cáo, trừ điểm hoặc
                    loại khỏi nhóm.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Tiêu chí đánh giá */}
            <section className="bg-white dark:bg-[#062d24] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
              <h3 className="flex items-center gap-2 text-lg font-bold mb-4 text-yellow-500">
                <Star size={20} /> 5. Tiêu chí đánh giá
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition-colors">
                  <span className="font-bold text-emerald-500">9 - 10</span>
                  <span className="text-xs opacity-70 italic text-right max-w-[200px]">
                    Xuất sắc, sáng tạo, Leader
                  </span>
                </div>
                <div className="flex justify-between items-center p-2 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition-colors">
                  <span className="font-bold text-blue-500">7 - 8</span>
                  <span className="text-xs opacity-70 italic text-right max-w-[200px]">
                    Hoàn thành tốt nhiệm vụ
                  </span>
                </div>
                <div className="flex justify-between items-center p-2 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition-colors">
                  <span className="font-bold text-orange-500">5 - 6</span>
                  <span className="text-xs opacity-70 italic text-right max-w-[200px]">
                    Còn nhiều thiếu sót
                  </span>
                </div>
                <div className="flex justify-between items-center p-2 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition-colors">
                  <span className="font-bold text-red-500">0</span>
                  <span className="text-xs opacity-70 italic text-right max-w-[200px]">
                    Không tham gia
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
