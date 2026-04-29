import * as React from "react";
import Image from "next/image";

export function Logo({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`} aria-label="Oeste Local">
      <span aria-hidden style={{ width: size, height: size }} className="relative overflow-hidden rounded-full">
        <Image
          src="/brand/logo_oestelocal_icon.png"
          alt=""
          fill
          sizes={`${size}px`}
          className="object-cover"
          priority
        />
      </span>
      <span className="font-display text-base tracking-tightish">Oeste Local</span>
    </span>
  );
}
