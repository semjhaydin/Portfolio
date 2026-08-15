"use client";

import React, { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Navigation route order — determines slide direction
const NAV_ORDER = [
  "/",
  "/hakkimda",
  "/projeler",
  "/projeler/tum-projeler",
  "/teknolojiler",
  "/referanslar",
  "/referanslar/sertifikalar",
  "/iletisim",
];

function getNavIndex(path: string): number {
  const exact = NAV_ORDER.indexOf(path);
  if (exact !== -1) return exact;
  const partial = NAV_ORDER.findIndex((p) => p !== "/" && path.startsWith(p));
  return partial !== -1 ? partial : 0;
}

// Module-level: computed synchronously, no React state lag
let _prevPath = "";
let _direction = 1; // 1 = slide from right, -1 = slide from left

export const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const divRef = useRef<HTMLDivElement>(null);

  // Compute direction BEFORE render so useLayoutEffect fires with correct value
  if (_prevPath !== pathname) {
    if (_prevPath) {
      const prev = getNavIndex(_prevPath);
      const next = getNavIndex(pathname);
      _direction = next >= prev ? 1 : -1;
    }
    _prevPath = pathname;
  }

  // Fire CSS animation synchronously before browser paints
  useLayoutEffect(() => {
    const el = divRef.current;
    if (!el) return;

    const cls = _direction >= 0 ? "page-slide-right" : "page-slide-left";

    // Remove both animation classes and force reflow to restart animation
    el.classList.remove("page-slide-right", "page-slide-left");
    void el.offsetWidth; // trigger reflow
    el.classList.add(cls);
  }, [pathname]);

  return (
    <div ref={divRef} className="w-full h-full flex flex-col justify-center">
      {children}
    </div>
  );
};
