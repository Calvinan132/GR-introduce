"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
    ArrowLeft,
    Calendar,
    FileText,
    Target
} from "lucide-react";
import meetingMinutes from "../../data/meetingMinutes.json";

export default function MeetingMinuteDetailPage() {
    const params = useParams();
    const id = params.id as string;

    const meeting = meetingMinutes.find(m => m.id === id);

    if (!meeting) {
        return (
            <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#02140f] flex flex-col items-center justify-center p-4">
                <p className="text-xl text-gray-500 mb-4">Không tìm thấy biên bản họp.</p>
                <Link href="/meeting-minutes" className="text-emerald-600 hover:underline">
                    Quay lại danh sách
                </Link>
            </div>
        );
    }

    const embedMinuteUrl = `https://docs.google.com/document/d/${meeting.minuteDocId}/preview`;
    const embedAssignmentUrl = `https://docs.google.com/document/d/${meeting.assignmentDocId}/preview`;

    return (
        <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#02140f] text-[#111827] dark:text-gray-100 font-sans transition-colors duration-300 pb-20">
            <div className="max-w-7xl mx-auto px-4 py-8">

                {/* Header */}
                <div className="mb-8">
                    <Link href="/meeting-minutes" className="inline-flex items-center gap-2 text-sm text-[#10B981] mb-6 hover:underline font-medium">
                        <ArrowLeft size={16} /> Về danh sách biên bản
                    </Link>

                    <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 text-[#064E3B] dark:text-white">
                        {meeting.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1.5 bg-white dark:bg-[#062d24] px-3 py-1.5 rounded-full border border-gray-100 dark:border-white/5 shadow-sm">
                            <Calendar size={16} className="text-emerald-500" />
                            Ngày họp: {new Date(meeting.date).toLocaleDateString('vi-VN')}
                        </span>
                        <p className="max-w-2xl bg-white dark:bg-[#062d24] px-4 py-1.5 rounded-full border border-gray-100 dark:border-white/5 shadow-sm truncate">
                            {meeting.description}
                        </p>
                    </div>
                </div>

                {/* Docs Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Minute Doc */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
                                <FileText className="text-emerald-600 dark:text-emerald-400" size={20} />
                            </div>
                            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                                Biên bản họp
                            </h2>
                        </div>

                        <div className="bg-white dark:bg-[#062d24] rounded-2xl shadow-xl border border-gray-100 dark:border-white/5 overflow-hidden h-[750px] relative w-full">
                            <div className="absolute top-0 left-0 w-full p-2 bg-gray-50 dark:bg-[#04211a] border-b border-gray-100 dark:border-white/5 flex gap-2 z-10">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                            </div>
                            <iframe
                                src={embedMinuteUrl}
                                className="w-full h-full border-0 pt-8"
                                title="Google Docs Meeting Minute"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* Assignment Doc */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
                                <Target className="text-blue-600 dark:text-blue-400" size={20} />
                            </div>
                            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                                Phân công công việc
                            </h2>
                        </div>

                        <div className="bg-white dark:bg-[#062d24] rounded-2xl shadow-xl border border-gray-100 dark:border-white/5 overflow-hidden h-[750px] relative w-full">
                            <div className="absolute top-0 left-0 w-full p-2 bg-gray-50 dark:bg-[#04211a] border-b border-gray-100 dark:border-white/5 flex gap-2 z-10">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                            </div>
                            <iframe
                                src={embedAssignmentUrl}
                                className="w-full h-full border-0 pt-8"
                                title="Google Docs Task Assignment"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
