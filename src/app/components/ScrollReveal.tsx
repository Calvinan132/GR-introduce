"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out";
  delay?: number; // in milliseconds
  duration?: number; // in milliseconds
  threshold?: number; // 0 to 1
  className?: string;
  once?: boolean; // whether animation should run only once
}

export default function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 800,
  threshold = 0.05,
  className = "",
  once = true,
}: ScrollRevealProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = elementRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (once) {
            observer.unobserve(currentRef);
          }
        } else if (!once) {
          setIsIntersecting(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before it hits viewport edge
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef && once) {
        // Safe check
      } else if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  // Define transition styles
  const getAnimationStyles = () => {
    const baseStyles = {
      transitionProperty: "opacity, transform",
      transitionDuration: `${duration}ms`,
      transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)", // Premium cubic-bezier transition
      transitionDelay: `${delay}ms`,
    };

    switch (animation) {
      case "fade-up":
        return {
          ...baseStyles,
          opacity: isIntersecting ? 1 : 0,
          transform: isIntersecting ? "translateY(0)" : "translateY(40px)",
        };
      case "fade-down":
        return {
          ...baseStyles,
          opacity: isIntersecting ? 1 : 0,
          transform: isIntersecting ? "translateY(0)" : "translateY(-40px)",
        };
      case "fade-left":
        return {
          ...baseStyles,
          opacity: isIntersecting ? 1 : 0,
          transform: isIntersecting ? "translateX(0)" : "translateX(40px)",
        };
      case "fade-right":
        return {
          ...baseStyles,
          opacity: isIntersecting ? 1 : 0,
          transform: isIntersecting ? "translateX(0)" : "translateX(-40px)",
        };
      case "zoom-in":
        return {
          ...baseStyles,
          opacity: isIntersecting ? 1 : 0,
          transform: isIntersecting ? "scale(1)" : "scale(0.92)",
        };
      case "zoom-out":
        return {
          ...baseStyles,
          opacity: isIntersecting ? 1 : 0,
          transform: isIntersecting ? "scale(1)" : "scale(1.08)",
        };
      default:
        return baseStyles;
    }
  };

  return (
    <div
      ref={elementRef}
      style={getAnimationStyles()}
      className={`will-change-[transform,opacity] ${className}`}
    >
      {children}
    </div>
  );
}
