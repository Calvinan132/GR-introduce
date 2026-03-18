"use client";

import { useState, useEffect } from "react";
import timelineData from "../data/timelineData.json";
import {
  CheckCircle2,
  Clock,
  Calendar,
  ChevronDown,
  ChevronUp,
  Flag,
} from "lucide-react";

const TimelineItem = ({ item, isExpanded, onToggle, isOdd }: any) => {
  // Xác định Icon dựa trên trạng thái
  const StatusIcon = () => {
    switch (item.status) {
      case "completed":
        return <CheckCircle2 size={16} className="text-primary" />;
      case "in-progress":
        return <Clock size={16} className="text-amber-500 animate-pulse" />;
      default:
        return <Flag size={16} className="text-foreground/20" />;
    }
  };

  return (
    <div
      className={`relative flex items-center justify-between md:justify-normal ${isOdd ? "md:flex-row-reverse" : ""} group`}
    >
      {/* 1. Điểm mốc trên đường kẻ */}
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-background border-4 border-primary z-10 absolute left-0 md:left-1/2 transform md:-translate-x-1/2 transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)]">
        <StatusIcon />
      </div>

      {/* 2. Nội dung Card */}
      <div
        className={`ml-14 md:ml-0 md:w-[44%] bg-background p-6 rounded-[2rem] shadow-sm border border-primary hover:border-primary/30 transition-all cursor-pointer group/card`}
        onClick={onToggle}
      >
        <div className="flex justify-between items-start mb-3">
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">
            {item.week}
          </span>
          <span className="flex items-center text-[10px] text-foreground/40 font-bold">
            <Calendar size={12} className="mr-1" /> {item.date}
          </span>
        </div>

        <h4 className="font-black text-foreground flex justify-between items-center group-hover/card:text-primary transition-colors">
          {item.title}
          <div className="p-1 rounded-full bg-primary/5 text-primary">
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>
        </h4>

        {/* Danh sách Task con (Animation) */}
        <div
          className={`grid transition-all duration-300 ease-in-out ${isExpanded ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}
        >
          <ul className="overflow-hidden space-y-2 border-t border-primary/5 pt-4">
            {item.tasks.map((task: string, i: number) => (
              <li
                key={i}
                className="text-xs text-foreground/60 flex items-start gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                {task}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const TimelinePage = () => {
  const [mounted, setMounted] = useState(false);
  const [expandedId, setExpandedId] = useState<number | null>(1);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-4 py-20">
        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4 tracking-tighter uppercase">
            Lộ Trình <span className="text-foreground">Phát Triển</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-foreground/50 font-bold uppercase tracking-widest text-xs">
            Chi tiết tiến độ thực hiện dự án Green5 theo từng tuần
          </p>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative">
          {/* Đường kẻ dọc thông minh (Gradient) */}
          <div className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-primary/50 via-primary/20 to-transparent"></div>

          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={item.id}
                item={item}
                isOdd={index % 2 !== 0}
                isExpanded={expandedId === item.id}
                onToggle={() =>
                  setExpandedId(expandedId === item.id ? null : item.id)
                }
              />
            ))}
          </div>
        </div>

        {/* FOOTER TIMELINE */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/5 border border-primary text-primary font-black text-[10px] uppercase tracking-widest">
            <Flag size={14} /> Điểm kết thúc dự án: Giai đoạn 1
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;
