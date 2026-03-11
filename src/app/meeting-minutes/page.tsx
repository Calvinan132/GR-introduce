"use client";

import React from "react";
import Link from "next/link";
import {
    ClipboardList,
    Calendar,
    ChevronRight,
    ArrowLeft
} from "lucide-react";
import meetingMinutes from "../data/meetingMinutes.json";

export default function MeetingMinutesPage() {
    return (
        <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#02140f] text-[#111827] dark:text-gray-100 font-sans transition-colors duration-300 pb-20">
            <div className="max-w-4xl mx-auto px-4 py-12">
                {/* Back Link */}
                <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#10B981] mb-8 hover:underline font-medium">
                    <ArrowLeft size={16} /> Về trang chủ
                </Link>

                {/* Header Section */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
                            <ClipboardList className="text-emerald-600 dark:text-emerald-400" size={24} />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">
                            Biên Bản Họp Nhóm
                        </h1>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl">
                        Tổng hợp tất cả biên bản họp, nội dung thảo luận và bảng phân công công việc của nhóm.
                    </p>
                </div>

                {/* List of Meetings */}
                <div className="space-y-4">
                    {meetingMinutes.map((meeting) => (
                        <Link href={`/meeting-minutes/${meeting.id}`} key={meeting.id}>
                            <div className="bg-white dark:bg-[#062d24] p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md hover:border-emerald-200 dark:hover:border-emerald-500/30 transition-all duration-300 group flex flex-col md:flex-row md:items-center justify-between gap-4 block mb-4">
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-3 mb-2">
                                        <h2 className="text-xl font-bold border-b border-transparent group-hover:border-emerald-500 dark:text-white transition-colors duration-300">
                                            {meeting.title}
                                        </h2>
                                        <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2.5 py-1 rounded-full">
                                            <Calendar size={12} />
                                            {new Date(meeting.date).toLocaleDateString('vi-VN')}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                                        {meeting.description}
                                    </p>
                                </div>
                                <div className="flex items-center justify-end md:justify-center w-10 h-10 rounded-full bg-gray-50 dark:bg-[#04211a] group-hover:bg-emerald-500 group-hover:text-white text-gray-400 transition-colors duration-300 shrink-0">
                                    <ChevronRight size={20} />
                                </div>
                            </div>
                        </Link>
                    ))}

                    {meetingMinutes.length === 0 && (
                        <div className="text-center py-16 bg-white dark:bg-[#062d24] rounded-2xl border border-dashed border-gray-200 dark:border-white/10">
                            <ClipboardList className="mx-auto mb-4 text-gray-300 dark:text-gray-600" size={48} />
                            <p className="text-gray-500 dark:text-gray-400 font-medium">Chưa có biên bản họp nào.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
