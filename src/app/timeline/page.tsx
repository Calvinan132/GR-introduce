"use client";
import { useState } from "react";
import timelineData from "../data/timelineData.json";
import {
  CheckCircle2,
  Clock,
  Calendar,
  ChevronDown,
  ChevronUp,
  Flag,
} from "lucide-react";
const TimelinePage = () => {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-[#064E3B] dark:text-[#10B981] mb-2">
          Lộ Trình Phát Triển
        </h2>
        <p className="text-gray-500">
          Theo dõi tiến độ thực hiện dự án theo từng tuần
        </p>
      </div>

      <div className="relative">
        {/* Đường kẻ dọc xuyên suốt */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-800"></div>

        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <div
              key={item.id}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
            >
              {/* Icon mốc thời gian */}
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white dark:bg-[#02140f] border-4 border-[#10B981] z-10 absolute left-0 md:left-1/2 transform md:-translate-x-1/2 transition-transform group-hover:scale-125">
                {item.status === "completed" ? (
                  <CheckCircle2 size={16} className="text-[#10B981]" />
                ) : item.status === "in-progress" ? (
                  <Clock size={16} className="text-amber-500 animate-pulse" />
                ) : (
                  <Flag size={16} className="text-gray-300" />
                )}
              </div>

              {/* Nội dung Card */}
              <div
                className="ml-12 md:ml-0 md:w-[45%] bg-white dark:bg-[#062d24] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:shadow-md transition-all cursor-pointer"
                onClick={() =>
                  setExpandedId(expandedId === item.id ? null : item.id)
                }
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-black text-[#10B981] uppercase tracking-widest">
                    {item.week}
                  </span>
                  <span className="flex items-center text-[10px] text-gray-400">
                    <Calendar size={12} className="mr-1" /> {item.date}
                  </span>
                </div>

                <h4 className="font-bold text-[#064E3B] dark:text-white mb-2 flex justify-between items-center">
                  {item.title}
                  {expandedId === item.id ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </h4>

                {/* Danh sách Task con (Hiện khi click) */}
                {expandedId === item.id && (
                  <ul className="mt-4 space-y-2 border-t border-gray-50 dark:border-white/5 pt-4 animate-in fade-in slide-in-from-top-2">
                    {item.tasks.map((task, i) => (
                      <li
                        key={i}
                        className="text-xs text-gray-500 dark:text-gray-400 flex items-center"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] mr-2"></span>
                        {task}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;
