"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface LazyImageProps extends ImageProps {
  wrapperClassName?: string;
}

export default function LazyImage({
  src,
  alt,
  wrapperClassName = "",
  className = "",
  onLoad,
  ...props
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden w-full h-full bg-foreground/5 rounded-[inherit] ${wrapperClassName}`}>
      {/* 1. Shimmer Loading Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 z-10 shimmer-placeholder rounded-[inherit] transition-opacity duration-500 pointer-events-none" />
      )}

      {/* 2. Actual Image with Smooth Reveal Transition */}
      <Image
        src={src}
        alt={alt}
        onLoad={(e) => {
          setIsLoaded(true);
          if (onLoad) {
            onLoad(e);
          }
        }}
        className={`transition-all duration-700 ease-out rounded-[inherit] ${
          isLoaded 
            ? "opacity-100 scale-100 blur-0" 
            : "opacity-0 scale-95 blur-sm"
        } ${className}`}
        {...props}
      />
    </div>
  );
}
