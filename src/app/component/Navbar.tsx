import { Users, Sun, Moon } from "lucide-react";

export default function Navbar({
  isDarkMode,
  toggleDarkMode,
}: {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}) {
  return (
    <>
      <nav className="bg-[#064E3B] dark:bg-[#011a14] text-white sticky top-0 z-50 shadow-md border-b border-[#10B981]/20">
        <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-[#FBBF24] rounded-lg flex items-center justify-center">
              <Users size={20} className="text-[#064E3B]" />
            </div>
            <span className="font-black text-xl tracking-tighter">
              GREEN<span className="text-[#FBBF24]">5</span>
            </span>
          </div>

          <div className="hidden md:flex gap-6 text-sm font-semibold uppercase tracking-wide">
            <a href="#team" className="hover:text-[#FBBF24] transition">
              Thành viên
            </a>
            <a href="#management" className="hover:text-[#FBBF24] transition">
              Quản lý
            </a>
            <a href="#product" className="hover:text-[#FBBF24] transition">
              Sản phẩm
            </a>
          </div>

          <div className="flex items-center gap-4">
            {/* DARK MODE TOGGLE */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-[#10B981]/20 hover:bg-[#10B981]/40 transition-colors"
            >
              {isDarkMode ? (
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
    </>
  );
}
