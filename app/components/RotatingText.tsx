"use client";

import React from "react";

export default function RotatingText({
  text = "• AARTI FURNITURE • EXCELLENCE & CRAFTSMANSHIP ",
  width = 160,
  height = 160,
  className = "",
}: {
  text?: string;
  width?: number;
  height?: number;
  className?: string;
}) {
  const radius = 50;
  const pathId = "textCirclePath";

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Center Accent Arrow */}
        <span className="text-xl text-accent font-semibold">↓</span>
      </div>
      <svg
        viewBox="0 0 120 120"
        className="h-full w-full animate-spin-slow"
        style={{ transformOrigin: "center" }}
      >
        <path
          d={`M 60,60 m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          id={pathId}
          fill="none"
          stroke="none"
        />
        <text className="fill-accent text-[6px] font-semibold tracking-[0.2em] uppercase">
          <textPath href={`#${pathId}`} startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
