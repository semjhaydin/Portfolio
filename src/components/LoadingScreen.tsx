"use client";

import React, { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState<number>(0);
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  useEffect(() => {
    const startTime = performance.now();
    const duration = 1200; // 1.2s sleek minimal loading speed

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const currentProgress = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(currentProgress);

      if (elapsed < duration) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(onComplete, 500);
        }, 150);
      }
    };

    requestAnimationFrame(animate);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070709] transition-all duration-700 ease-in-out ${
        fadeOut ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      }`}
    >
      <div className="w-full max-w-xs px-6 flex flex-col items-center space-y-6">
        
        {/* Brand Monogram */}
        <div className="font-mono text-xl font-bold tracking-widest text-white">
          SEMİH AYDIN
        </div>

        {/* Minimal Expand Line */}
        <div className="w-full h-px bg-white/10 relative overflow-hidden rounded-full">
          <div
            className="absolute left-0 top-0 bottom-0 bg-white transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage Counter */}
        <div className="flex items-center justify-between w-full font-mono text-xs text-white/40">
          <span>PORTFOLIO</span>
          <span className="text-white font-medium">{progress.toString().padStart(2, "0")}%</span>
        </div>

      </div>
    </div>
  );
};
