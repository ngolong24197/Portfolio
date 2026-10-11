import type { ReactNode } from "react";

export const container = "mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8";

export function SectionTag({ index, label }: { index: string; label: string }) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <span className="font-mono text-[12px] font-semibold text-emerald-400">{index}</span>
      <div className="h-px w-12 bg-emerald-500/40" />
      <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">{label}</span>
    </div>
  );
}

export function Chip({ children, muted = false }: { children: ReactNode; muted?: boolean }) {
  return (
    <span
      className={`rounded-lg border border-line bg-chip px-2.5 py-1 font-mono text-[11px] ${
        muted ? "text-slate-300" : "text-emerald-300"
      }`}
    >
      {children}
    </span>
  );
}

export function PulseDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
    </span>
  );
}
