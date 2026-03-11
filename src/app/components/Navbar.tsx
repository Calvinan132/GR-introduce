"use client";

import { useEffect, useState } from "react";
import { Users, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect này đảm bảo component đã được gắn (mount) vào trình duyệt
  // giúp tránh lỗi "Hydration Mismatch"
  useEffect(() => {
    setMounted(true);
  }, []);

  // Nếu chưa mount, chúng ta trả về giao diện khung hoặc nút ẩn
  // để tránh việc icon bị nhảy qua lại khi load trang
  if (!mounted) {
    return (
      <nav className="bg-[#064E3B] dark:bg-[#011a14] text-white sticky top-0 z-50 h-16 border-b border-[#10B981]/20"></nav>
    );
  }

  return (
    <nav className="bg-[#064E3B] dark:bg-[#011a14] text-white sticky top-0 z-50 shadow-md border-b border-[#10B981]/20">
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-[#FBBF24] rounded-lg flex items-center justify-center">
            <Users size={20} className="text-[#064E3B]" />
          </div>
          <span className="font-black text-xl tracking-tighter">
            GREEN<span className="text-[#FBBF24]">5</span>
          </span>
        </Link>

        {/* MENU */}
        <div className="hidden md:flex gap-6 text-sm font-semibold uppercase tracking-wide">
          <Link href="/?section=team" className="hover:text-[#FBBF24] transition">
            Thành viên
          </Link>
          <Link href="/?section=management" className="hover:text-[#FBBF24] transition">
            Quản lý
          </Link>
          <Link href="/?section=product" className="hover:text-[#FBBF24] transition">
            Sản phẩm
          </Link>
          <Link href="/timeline" className="hover:text-[#FBBF24] transition">
            Timeline
          </Link>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-[#10B981]/20 hover:bg-[#10B981]/40 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {theme === "dark" ? (
              <Sun size={20} className="text-[#FBBF24]" />
            ) : (
              <Moon size={20} className="text-white" />
            )}
          </button>
          <button className="bg-[#FBBF24] text-[#064E3B] px-5 py-2 rounded-full text-xs font-bold transition-all shadow-lg hover:scale-105">
            BACKLOG
          </button>
        </div>
      </div>
    </nav>
  );
}
