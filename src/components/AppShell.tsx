"use client";

import React, { useState, useEffect } from "react";
import { BackgroundCanvas } from "@/components/BackgroundCanvas";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { FooterStatus } from "@/components/FooterStatus";
import { PageTransition } from "@/components/PageTransition";

export const AppShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showLoading, setShowLoading] = useState<boolean>(true);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
    const hasLoaded = sessionStorage.getItem("portfolio_loaded");
    if (hasLoaded === "true") {
      setShowLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    setShowLoading(false);
    sessionStorage.setItem("portfolio_loaded", "true");
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#070709]">
      {/* 60fps Ambient Grid Background */}
      <BackgroundCanvas />

      {/* Opening Minimal Progress Loader */}
      {isClient && showLoading && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}

      {/* Header Navigation */}
      <Navbar />

      {/* Main Content Area with Directional Horizontal Slide Transitions */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden lg:cockpit-viewport">
        <div className="w-full max-w-6xl h-full flex flex-col justify-center overflow-hidden">
          <PageTransition>{children}</PageTransition>
        </div>
      </main>

      {/* Minimal Footer */}
      <FooterStatus />
    </div>
  );
};
