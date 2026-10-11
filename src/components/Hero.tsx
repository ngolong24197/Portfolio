import { ArrowDown, ArrowUpRight, ChevronDown, MessageSquare, Terminal } from "lucide-react";
import { heroStats, profile } from "@/data/site";
import { container, PulseDot } from "./ui";

const kw = "font-medium text-emerald-400";
const str = "text-[#34D399]";
const ann = "text-[#6EE7B7]";
const fn = "font-semibold text-emerald-200";
const dim = "text-slate-400";
const note = "italic text-slate-500";

// Illustrative snippet in the style of the Hotel Booking System backend.
const code: [string, string?][][] = [
  [["@RestController", ann]],
  [["@RequestMapping", ann], ["("], ['"/api/bookings"', str], [")"]],
  [["public class ", kw], ["BookingController", fn], [" {"]],
  [],
  [["  @PostMapping", ann]],
  [["  @PreAuthorize", ann], ["("], ['"hasRole(\'GUEST\')"', str], [")"]],
  [["  public ", kw], ["ResponseEntity", dim], ["<Booking> "], ["create", fn], ["("]],
  [["      @Valid @RequestBody ", ann], ["BookingRequest", dim], [" request) {"]],
  [["    // JWT-authenticated guest, validated payload", note]],
  [["    Booking booking = bookings."], ["reserve", fn], ["(request);"]],
  [["    return ", kw], ["ResponseEntity."], ["ok", fn], ["(booking);"]],
  [["  }"]],
  [["}"]],
];

export default function Hero() {
  return (
    <>
      <div className={`${container} pb-3 pt-8`}>
        <div className="flex items-center justify-between gap-4 border-b border-line/60 pb-3 font-mono text-[11px] text-slate-400">
          <span className="flex items-center gap-2 text-emerald-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            STATUS: ONLINE // DA NANG, VN [{profile.timezone}]
          </span>
          <span className="hidden text-[#34D399]/70 md:inline-block">{profile.coordinates}</span>
          <span className="hidden sm:inline-block">PORTFOLIO // 2026</span>
        </div>
      </div>

      <section className={`${container} pb-20 pt-6 md:pb-28`}>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col gap-6 pt-2 lg:col-span-7">
            <div className="inline-flex w-fit flex-wrap items-center gap-2 rounded-full border border-emerald-500/40 bg-raised px-3 py-1.5">
              <PulseDot />
              <span className="font-mono text-[11px] font-medium uppercase tracking-wide text-emerald-300">
                Available for opportunities
              </span>
              <span className="font-light text-line-strong">•</span>
              <span className="font-mono text-[11px] text-[#A7F3D0]">FULL-STACK &amp; MOBILE</span>
            </div>

            <p className="font-mono text-[13px] text-emerald-300">
              Hi, I&apos;m {profile.name} — {profile.role}
            </p>

            <h1 className="max-w-[640px] text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[54px]">
              Turning ideas into{" "}
              <span className="font-serif italic font-normal text-emerald-400 underline decoration-emerald-500/40 decoration-wavy decoration-2">
                useful
              </span>{" "}
              software.
            </h1>

            <p className="max-w-[580px] text-base leading-relaxed text-slate-300 sm:text-lg">
              {profile.summary}
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-[14px] font-semibold text-on-accent shadow-lg shadow-emerald-950/50 transition-all duration-200 hover:bg-emerald-400 hover:shadow-emerald-500/20"
              >
                <span>Explore Featured Projects</span>
                <ArrowDown size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-raised px-5 py-3 text-[14px] font-medium text-slate-200 transition-all duration-200 hover:border-emerald-500/50 hover:bg-chip-hi hover:text-emerald-200"
              >
                <span>Get In Touch</span>
                <MessageSquare size={18} className="text-emerald-400" />
              </a>
              <a
                href={profile.cv}
                download
                className="inline-flex items-center gap-1.5 px-3 py-3 font-mono text-[12px] text-slate-400 transition-colors hover:text-emerald-300"
              >
                <span>Download CV</span>
                <ArrowUpRight size={15} />
              </a>
            </div>

            <dl className="mt-4 grid max-w-[540px] grid-cols-3 gap-4 border-t border-line/70 pt-6">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-[#6EE7B7]">
                    {stat.label}
                  </dt>
                  <dd className="pt-1 text-[17px] font-semibold text-white">{stat.value}</dd>
                  <dd className="font-mono text-[11px] text-slate-400">{stat.detail}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex flex-col lg:col-span-5" aria-hidden="true">
            <div className="emerald-glow overflow-hidden rounded-2xl border border-line bg-panel shadow-2xl">
              <div className="flex select-none items-center justify-between gap-3 border-b border-line bg-ink-deep px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-3 w-3 rounded-full bg-[#EF4444]/80" />
                  <span className="inline-block h-3 w-3 rounded-full bg-[#F59E0B]/80" />
                  <span className="inline-block h-3 w-3 rounded-full bg-[#10B981]" />
                </div>
                <div className="flex items-center gap-1 font-mono text-[12px]">
                  <span className="flex items-center gap-1.5 rounded border border-emerald-500/30 bg-chip px-2.5 py-1 font-medium text-emerald-300">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    BookingController.java
                  </span>
                  <span className="hidden px-2 py-1 text-slate-400 sm:inline">RoomSearch.jsx</span>
                </div>
              </div>

              <div className="overflow-x-auto bg-ink p-4 font-mono text-[13px] leading-[22px] text-slate-300">
                <div className="flex gap-4">
                  <div className="select-none text-right text-[12px] text-line-strong">
                    {code.map((_, i) => (
                      <div key={i}>{String(i + 1).padStart(2, "0")}</div>
                    ))}
                  </div>
                  <pre className="flex-1 font-mono">
                    {code.map((line, i) => (
                      <div key={i}>
                        {line.length === 0
                          ? " "
                          : line.map(([text, cls], j) => (
                              <span key={j} className={cls}>
                                {text}
                              </span>
                            ))}
                      </div>
                    ))}
                  </pre>
                </div>
              </div>

              <div className="flex flex-col gap-2 border-t border-line bg-panel p-3 font-mono text-[12px]">
                <span className="flex items-center gap-1.5 font-medium text-emerald-300">
                  <Terminal size={14} />
                  Terminal
                </span>
                <div className="flex items-center gap-2 truncate rounded-lg border border-line bg-ink-deep p-2.5 text-[11px] text-slate-200">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                  <span className="truncate">Started HotelBookingApplication on port 8080</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between px-2 pt-3 font-mono text-[11px] text-slate-400">
              <span>{"// STACK: SPRING BOOT + REACT + ANDROID"}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-12">
          <a
            href="#about"
            className="group inline-flex flex-col items-center gap-1 text-slate-400 transition-colors hover:text-emerald-400"
          >
            <span className="font-mono text-[11px] uppercase tracking-wider">Scroll down</span>
            <ChevronDown size={20} className="animate-bounce text-emerald-400" />
          </a>
        </div>
      </section>
    </>
  );
}
