"use client";

import { useEffect, useState } from "react";
import { Download, Mail, Menu, Terminal, X } from "lucide-react";
import { navLinks, profile } from "@/data/site";
import { PulseDot } from "./ui";

const iconButton =
  "flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-raised text-slate-300 transition-colors hover:border-emerald-500/50 hover:text-emerald-400";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    const onScroll = () => {
      const marker = window.scrollY + window.innerHeight * 0.35;
      let current = "home";
      for (const section of sections) {
        if (section.offsetTop <= marker) current = section.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [{ id: "home", label: "Home" }, ...navLinks];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-ink/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <a href="#" className="group flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-500/40 bg-chip transition-colors duration-300 group-hover:border-emerald-500">
              <span className="font-mono text-base font-bold text-emerald-500">{profile.initial}</span>
            </div>
            <span className="font-mono text-[15px] font-semibold tracking-tight text-emerald-100 transition-colors group-hover:text-emerald-400">
              {profile.shortName}
            </span>
          </a>
          <div className="mx-1 hidden h-4 w-px bg-line/60 lg:block" />
          <span className="hidden items-center gap-2 rounded-full border border-emerald-500/30 bg-raised px-2.5 py-1 font-mono text-[11px] text-emerald-300 lg:inline-flex">
            <PulseDot />
            Open to opportunities
          </span>
        </div>

        <nav
          aria-label="Main"
          className="hidden items-center gap-1.5 rounded-lg border border-line/60 bg-panel/90 p-1 text-[13px] md:flex"
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={link.id === "home" ? "#" : `#${link.id}`}
              aria-current={active === link.id ? "true" : undefined}
              className={
                active === link.id
                  ? "rounded-md border border-emerald-500/30 bg-[#162D24] px-3 py-1.5 font-medium text-emerald-300"
                  : "rounded-md border border-transparent px-3 py-1.5 text-slate-400 transition-colors hover:bg-[#12231D]/60 hover:text-emerald-200"
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className={iconButton}
          >
            <Terminal size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Send an email" className={iconButton}>
            <Mail size={18} />
          </a>
          <a
            href={profile.cv}
            download
            className="hidden items-center gap-1.5 rounded-lg bg-emerald-500 px-3.5 py-1.5 font-mono text-[13px] font-medium tracking-tight text-on-accent transition-colors duration-200 hover:bg-emerald-400 sm:inline-flex"
          >
            <Download size={16} />
            <span>Download CV</span>
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-raised text-slate-200 md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-line/80 bg-ink px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1 text-[14px]">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.id === "home" ? "#" : `#${link.id}`}
                onClick={() => setOpen(false)}
                className={
                  active === link.id
                    ? "rounded-md bg-[#162D24] px-3 py-2 font-medium text-emerald-300"
                    : "rounded-md px-3 py-2 text-slate-300 hover:bg-[#12231D]/60 hover:text-emerald-200"
                }
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.cv}
              download
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-lg bg-emerald-500 px-3.5 py-2 font-mono text-[13px] font-medium text-on-accent sm:hidden"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
