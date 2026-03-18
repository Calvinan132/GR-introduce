"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  FileText,
  Target,
  ExternalLink,
  Info,
} from "lucide-react";
import meetingMinutes from "../../data/meetingMinutes.json";

export default function MeetingMinuteDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const meeting = meetingMinutes.find((m) => m.id === id);

  if (!mounted) return null;

  if (!meeting) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
          <Info className="text-primary" size={40} />
        </div>
        <h2 className="text-2xl font-black uppercase tracking-tighter mb-2">
          Không tìm thấy biên bản
        </h2>
        <p className="text-foreground/50 mb-8 font-medium">
          Dữ liệu cuộc họp này có thể đã bị dời hoặc không tồn tại.
        </p>
        <Link
          href="/meeting-minutes"
          className="px-8 py-3 bg-primary text-white rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition shadow-lg shadow-primary/20"
        >
          Quay lại danh sách
        </Link>
      </div>
    );
  }

  const embedMinuteUrl = `https://docs.google.com/document/d/${meeting.minuteDocId}/preview`;
  const embedAssignmentUrl = `https://docs.google.com/document/d/${meeting.assignmentDocId}/preview`;

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 pb-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* NAVIGATION & HEADER */}
        <div className="mb-12">
          <Link
            href="/meeting-minutes"
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-8 hover:translate-x-[-4px] transition-transform"
          >
            <ArrowLeft size={14} /> Danh sách biên bản
          </Link>

          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-none">
              {meeting.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary shadow-sm">
                <Calendar size={14} className="shrink-0" />
                <span className="text-[11px] font-black uppercase tracking-widest">
                  {new Date(meeting.date).toLocaleDateString("vi-VN")}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-background border border-primary px-4 py-2 rounded-full shadow-sm">
                <Info size={14} className="text-foreground/40 shrink-0" />
                <span className="text-[11px] font-bold text-foreground/60 uppercase tracking-widest truncate max-w-[300px] md:max-w-xl">
                  {meeting.description}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* DOCUMENTS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* 1. BIÊN BẢN HỌP */}
          <div className="space-y-4">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shadow-inner">
                  <FileText className="text-primary" size={20} />
                </div>
                <h3 className="font-black uppercase tracking-tight text-lg">
                  Biên bản chi tiết
                </h3>
              </div>
              <a
                href={`https://docs.google.com/document/d/${meeting.minuteDocId}/edit`}
                target="_blank"
                className="p-2 rounded-full hover:bg-primary/5 text-foreground/20 hover:text-primary transition-colors"
              >
                <ExternalLink size={18} />
              </a>
            </div>

            <div className="bg-background rounded-[2rem] shadow-2xl border border-primary overflow-hidden h-[800px] relative">
              {/* Browser Bar Fake */}
              <div className="absolute top-0 left-0 w-full p-3 bg-primary/5 border-b border-primary flex gap-2 z-10 backdrop-blur-md">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/40" />
              </div>
              <iframe
                src={embedMinuteUrl}
                className="w-full h-full border-0 pt-10"
                title="Meeting Minute Doc"
                allowFullScreen
              />
            </div>
          </div>

          {/* 2. PHÂN CÔNG CÔNG VIỆC */}
          <div className="space-y-4">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-500/10 flex items-center justify-center shadow-inner">
                  <Target className="text-blue-500" size={20} />
                </div>
                <h3 className="font-black uppercase tracking-tight text-lg">
                  Phân công nhiệm vụ
                </h3>
              </div>
              <a
                href={`https://docs.google.com/document/d/${meeting.assignmentDocId}/edit`}
                target="_blank"
                className="p-2 rounded-full hover:bg-blue-500/5 text-foreground/20 hover:text-blue-500 transition-colors"
              >
                <ExternalLink size={18} />
              </a>
            </div>

            <div className="bg-background rounded-[2rem] shadow-2xl border border-primary overflow-hidden h-[800px] relative">
              {/* Browser Bar Fake */}
              <div className="absolute top-0 left-0 w-full p-3 bg-blue-500/5 border-b border-primary flex gap-2 z-10 backdrop-blur-md">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/40" />
              </div>
              <iframe
                src={embedAssignmentUrl}
                className="w-full h-full border-0 pt-10"
                title="Task Assignment Doc"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
