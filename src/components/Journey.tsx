import { Award } from "lucide-react";
import { certifications, journey } from "@/data/site";
import { container, SectionTag } from "./ui";

export default function Journey() {
  return (
    <section id="journey" className={`${container} py-20 md:py-28`}>
      <SectionTag index="04 / JOURNEY" label="Experience & Education" />
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">My journey so far.</h2>
      <p className="mb-12 max-w-[600px] pt-2 text-[15px] text-slate-400">
        From hospitality in Finland to building software in Da Nang, most recent first.
      </p>

      <ol className="relative space-y-10 pl-6 before:absolute before:bottom-2 before:left-2 before:top-2 before:w-[2px] before:bg-line before:content-[''] sm:pl-8 sm:before:left-3">
        {journey.map((item) => (
          <li key={item.title} className="relative">
            <div
              className={`absolute -left-[23px] top-1.5 h-4 w-4 rounded-full bg-ink ring-4 sm:-left-[27px] ${
                item.current ? "emerald-glow-sm ring-emerald-400" : "ring-line-strong"
              }`}
            />
            <div className="rounded-2xl border border-line bg-panel p-6 transition-colors hover:border-emerald-500/40">
              <div className="flex flex-col justify-between gap-1 pb-2 sm:flex-row sm:items-center">
                <h3 className="text-[18px] font-bold text-white">{item.title}</h3>
                <span
                  className={`shrink-0 font-mono text-[12px] font-semibold ${
                    item.current ? "text-emerald-400" : "text-slate-400"
                  }`}
                >
                  {item.period}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2 pb-3">
                <span className="rounded border border-line bg-chip px-2 py-0.5 font-mono text-[10px] uppercase text-emerald-300">
                  {item.kind}
                </span>
                <span className="font-mono text-[11px] uppercase text-slate-400">{item.place}</span>
              </div>
              <p className="text-[14px] leading-relaxed text-slate-300">{item.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-12 rounded-2xl border border-line bg-panel p-6">
        <div className="flex items-center gap-2 border-b border-line pb-3 font-mono text-[12px] font-semibold uppercase tracking-wide text-emerald-300">
          <Award size={16} />
          Certifications
        </div>
        <ul className="grid grid-cols-1 gap-x-8 gap-y-2 pt-4 text-[14px] text-slate-300 md:grid-cols-2">
          {certifications.map((certification) => (
            <li key={certification} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
              <span>{certification}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
