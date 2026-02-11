"use client";

import { useLenis } from "@/contexts/LenisContext";

export function ParallaxGradient() {
  const { progress } = useLenis();
  const offset = progress * 6;

  return (
    <div
      className="gradient-bg-parallax pointer-events-none fixed inset-0 z-[-1] overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute inset-[-50%] transition-transform duration-100 ease-out"
        style={{
          transform: `translateY(${offset}%) scale(1.02)`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 80% 10%, rgba(59, 130, 246, 0.45) 0%, rgba(37, 99, 235, 0.2) 35%, rgba(30, 64, 175, 0.08) 55%, transparent 72%), radial-gradient(ellipse 70% 60% at 15% 45%, rgba(96, 165, 250, 0.28) 0%, rgba(59, 130, 246, 0.12) 35%, transparent 62%)",
            animation: "gradient-flow 14s ease-in-out infinite",
          }}
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% 100%, transparent 40%, rgba(15, 23, 42, 0.6) 100%)",
          animation: "gradient-shift 8s ease-in-out infinite",
        }}
      />
    </div>
  );
}
