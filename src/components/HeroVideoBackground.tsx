"use client";

import React, { useState } from "react";

interface HeroVideoBackgroundProps {
  videoSrc?: string;
}

export const HeroVideoBackground: React.FC<HeroVideoBackgroundProps> = ({
  videoSrc = "/hero-rev.mp4",
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 rounded-2xl">
      {!hasError ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          onError={() => setHasError(true)}
          className="w-full h-full object-cover opacity-30 filter grayscale contrast-125 transition-opacity duration-1000"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : null}

      {/* Retro CRT Scanline & Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-[#070709]/80" />
      <div className="absolute inset-0 scanline-overlay opacity-40" />
    </div>
  );
};
