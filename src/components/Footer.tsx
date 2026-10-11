import { ArrowUp, Mail, Smartphone, Terminal } from "lucide-react";
import { profile } from "@/data/site";

const link =
  "inline-flex items-center gap-1.5 font-mono text-[12px] text-slate-400 transition-colors hover:text-emerald-300";

export default function Footer() {
  return (
    <footer className="mt-16 w-full border-t border-line bg-ink-footer">
      <div className="mx-auto max-w-[1240px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-line pb-8 md:flex-row md:items-center">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md border border-emerald-500/40 bg-chip">
                <span className="font-mono text-xs font-bold text-emerald-500">{profile.initial}</span>
              </div>
              <span className="font-mono text-[15px] font-bold text-white">{profile.shortName}</span>
            </div>
            <p className="text-[13px] text-slate-400">Designed with care. Built with curiosity.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a className={link} href={profile.github} target="_blank" rel="noreferrer">
              <Terminal size={15} />
              GitHub
            </a>
            <a className={link} href={profile.googlePlay} target="_blank" rel="noreferrer">
              <Smartphone size={15} />
              Google Play
            </a>
            <a className={link} href={`mailto:${profile.email}`}>
              <Mail size={15} />
              Email
            </a>
            <a
              href="#"
              aria-label="Back to top"
              className="inline-flex items-center gap-1 rounded-lg border border-line bg-raised px-3 py-1.5 font-mono text-[11px] text-slate-300 transition-colors hover:border-emerald-500/50 hover:text-emerald-300"
            >
              <ArrowUp size={15} />
              Top
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-2 pt-6 font-mono text-[11px] text-slate-500 sm:flex-row sm:items-center">
          <p>© 2026 {profile.name}. All rights reserved.</p>
          <p className="text-emerald-500/80">Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
