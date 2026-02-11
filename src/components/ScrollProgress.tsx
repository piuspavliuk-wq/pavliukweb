"use client";

import { useLenis } from "@/contexts/LenisContext";

export function ScrollProgress() {
  const { progress } = useLenis();

  return (
    <div
      className="fixed left-0 top-0 z-[100] h-[3px] origin-left bg-primary shadow-[0_0_12px_rgba(59,130,246,0.6)] transition-[transform] duration-75 ease-out"
      style={{ transform: `scaleX(${progress})` }}
      aria-hidden
    />
  );
}
