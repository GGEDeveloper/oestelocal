import * as React from "react";

export function Logo({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`} aria-label="Oeste Local">
      <span
        aria-hidden
        className="logo-gradient relative grid place-items-center rounded-full"
        style={{ width: size, height: size }}
      >
        <span
          className="absolute inset-[3px] rounded-full"
          style={{ background: "var(--bg)" }}
        />
        <span
          className="relative font-display font-semibold"
          style={{ fontSize: size * 0.55, lineHeight: 1, color: "var(--ink)" }}
        >
          O
        </span>
      </span>
      <span className="font-display text-base tracking-tightish">Oeste Local</span>
    </span>
  );
}
