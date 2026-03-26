"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ClipboardList,
  Calendar,
  ChevronRight,
  ArrowLeft,
  Search,
} from "lucide-react";
import meetingMinutes from "../data/meetingMinutes.json";

export default function MeetingMinutesPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 pb-24">
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Nút quay lại tinh tế */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-12 hover:translate-x-[-4px] transition-transform"
        >
          <ArrowLeft size={14} /> Về trang chủ
        </Link>

        {/* Header Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-[1.25rem] bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
              <ClipboardList className="text-white" size={28} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">
                Biên Bản <span className="text-primary">Họp Nhóm</span>
              </h1>
              <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-[0.3em] mt-2">
                Documentation & Group Progress
              </p>
            </div>
          </div>
          <p className="text-foreground/60 max-w-2xl leading-relaxed font-medium">
            Lưu trữ toàn bộ nội dung thảo luận, các quyết định quan trọng và
            bảng phân công nhiệm vụ chi tiết của đội ngũ CHEVE qua từng giai
            đoạn.
          </p>
        </div>

        {/* List of Meetings */}
        <div className="grid gap-6">
          {meetingMinutes.map((meeting) => (
            <Link
              href={`/meeting-minutes/${meeting.id}`}
              key={meeting.id}
              className="group"
            >
              <div className="bg-background p-6 md:p-8 rounded-[2rem] border border-primary shadow-sm group-hover:shadow-xl group-hover:border-primary/30 group-hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="flex items-center gap-1.5 text-[10px] font-black text-primary bg-primary/5 px-3 py-1 rounded-full uppercase tracking-widest">
                      <Calendar size={12} />
                      {new Date(meeting.date).toLocaleDateString("vi-VN")}
                    </span>
                    <span className="text-[10px] font-bold text-foreground/20 uppercase tracking-widest">
                      ID: #{meeting.id.toString().padStart(3, "0")}
                    </span>
                  </div>

                  <h2 className="text-2xl font-black tracking-tight group-hover:text-primary transition-colors">
                    {meeting.title}
                  </h2>

                  <p className="text-foreground/50 text-sm leading-relaxed line-clamp-2 font-medium">
                    {meeting.description}
                  </p>
                </div>

                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0 shadow-inner">
                  <ChevronRight size={24} />
                </div>
              </div>
            </Link>
          ))}

          {meetingMinutes.length === 0 && (
            <div className="text-center py-24 bg-background rounded-[2rem] border-2 border-dashed border-primary">
              <ClipboardList
                className="mx-auto mb-6 text-foreground/10"
                size={64}
              />
              <p className="text-foreground/40 font-black uppercase tracking-widest text-sm">
                Chưa có dữ liệu biên bản họp
              </p>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="mt-16 text-center">
          <p className="text-[10px] font-bold text-foreground/20 uppercase tracking-[0.4em]">
            Green5 Management System v1.0
          </p>
        </div>
      </div>
    </div>
  );
}
