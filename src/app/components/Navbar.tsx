"use client";

import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/CHEVELOGO.png";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Trả về khung xám nhẹ để tránh nhảy layout (layout shift)
    return (
      <nav className="h-16 border-b border-primary/10 bg-background"></nav>
    );
  }

  return (
    <nav className="sticky top-0 z-50 h-16 border-b border-primary bg-background/80 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4">
        {/* LOGO SECTION */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-12 w-16 items-center justify-center rounded-xl transition-transform group-hover:scale-110">
            <Image
              src={logo}
              alt="CHEVE Logo"
              priority
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black leading-none tracking-tighter text-foreground">
              CHE<span className="text-primary">VE</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary/80">
              Project Management
            </span>
          </div>
        </Link>

        {/* MENU (Desktop) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider">
          <Link
            href="/?section=product"
            className="text-foreground/70 hover:text-primary transition"
          >
            Trang chủ
          </Link>
          <Link
            href="/?section=team"
            className="text-foreground/70 hover:text-primary transition"
          >
            Thành viên
          </Link>
          <Link
            href="/?section=management"
            className="text-foreground/70 hover:text-primary transition"
          >
            Quản lý
          </Link>
          <Link
            href="/introduce"
            className="text-foreground/70 hover:text-primary transition"
          >
            Sản phẩm
          </Link>
          <Link
            href="/timeline"
            className="text-foreground/70 hover:text-primary transition"
          >
            Timeline
          </Link>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">
          {/* Nút chuyển Dark Mode */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/25 text-primary hover:bg-primary/20 transition-all"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Nút Backlog nổi bật */}
          <button className="hidden sm:block rounded-full bg-primary px-6 py-2 text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:shadow-primary/40 active:scale-95">
            <Link href="/?section=management">BACKLOG</Link>
          </button>

          {/* Hamburger Menu Toggle Button (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary hover:bg-primary/25 transition-all md:hidden border border-primary/20 active:scale-95"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 z-40 bg-background/95 backdrop-blur-lg border-b border-primary p-6 space-y-4 md:hidden shadow-2xl animate-in slide-in-from-top-5 duration-300">
          <div className="flex flex-col space-y-3 text-sm font-black uppercase tracking-wider">
            <Link
              href="/?section=product"
              onClick={() => setIsOpen(false)}
              className="text-foreground/80 hover:text-primary py-2 border-b border-primary/10 transition"
            >
              Trang chủ
            </Link>
            <Link
              href="/?section=team"
              onClick={() => setIsOpen(false)}
              className="text-foreground/80 hover:text-primary py-2 border-b border-primary/10 transition"
            >
              Thành viên
            </Link>
            <Link
              href="/?section=management"
              onClick={() => setIsOpen(false)}
              className="text-foreground/80 hover:text-primary py-2 border-b border-primary/10 transition"
            >
              Quản lý
            </Link>
            <Link
              href="/introduce"
              onClick={() => setIsOpen(false)}
              className="text-foreground/80 hover:text-primary py-2 border-b border-primary/10 transition"
            >
              Sản phẩm
            </Link>
            <Link
              href="/timeline"
              onClick={() => setIsOpen(false)}
              className="text-foreground/80 hover:text-primary py-2 border-b border-primary/10 transition"
            >
              Timeline
            </Link>
            
            {/* Mobile Backlog Button */}
            <div className="pt-2">
              <Link
                href="/?section=management"
                onClick={() => setIsOpen(false)}
                className="w-full text-center rounded-full bg-primary py-3 text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-primary/20 block transition-all hover:brightness-110"
              >
                BACKLOG
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
