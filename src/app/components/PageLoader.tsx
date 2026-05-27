"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../public/assets/CHEVELOGO.png";

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [shouldRender, setShouldRender] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // 1. Disable body scrolling while loading
    document.body.style.overflow = "hidden";

    // 2. Animate progress bar smoothly
    const duration = 1200; // 1.2s total loader time
    const intervalTime = 30; 
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(currentProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        // Start fading out
        setIsFadingOut(true);
        // Re-enable scrolling
        document.body.style.overflow = "";
        
        // Fully unmount after fade transition ends (500ms)
        const unmountTimer = setTimeout(() => {
          setShouldRender(false);
        }, 500);
        
        return () => clearTimeout(unmountTimer);
      }
    }, intervalTime);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background transition-all duration-500 ease-in-out ${
        isFadingOut ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      }`}
    >
      {/* Background ambient glow matching page theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative flex flex-col items-center space-y-8 z-10 max-w-xs w-full px-6">
        {/* Animated Brand Container */}
        <div className={`relative flex flex-col items-center transition-all duration-700 ${isFadingOut ? "scale-90 opacity-0" : "scale-100"}`}>
          {/* Logo with preloader-glow effect */}
          <div className="relative w-28 h-20 mb-4 bg-background/50 rounded-2xl p-2 flex items-center justify-center preloader-glow animate-pulse">
            <Image
              src={logo}
              alt="CHEVE Logo"
              priority
              className="object-contain"
            />
          </div>
          
          <h1 className="text-3xl font-black tracking-tighter text-foreground text-center uppercase">
            CHE<span className="text-primary">VE</span>
          </h1>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/80 mt-1">
            Project Management
          </p>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full space-y-2">
          <div className="relative w-full h-1 bg-foreground/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-100 ease-out page-loader-progress"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-foreground/40">
            <span>Đang khởi tạo...</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
