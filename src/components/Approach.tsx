import { approach } from "@/data/site";
import { container } from "./ui";

export default function Approach() {
  return (
    <section className="w-full border-y border-line/80 bg-panel py-20 md:py-24">
      <div className={container}>
        <div className="mb-12 max-w-[620px]">
          <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-400">
            Methodology
          </span>
          <h2 className="pt-1 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How I approach building software.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {approach.map((item) => (
            <div
              key={item.tag}
              className="flex flex-col justify-between rounded-2xl border border-line bg-ink p-8 transition-colors hover:border-emerald-500/40"
            >
              <div className="flex flex-col gap-3">
                <div className="font-mono text-[12px] font-semibold text-emerald-400">{item.tag}</div>
                <h3 className="text-[18px] font-bold text-white">{item.title}</h3>
                <p className="text-[14px] leading-relaxed text-slate-400">{item.body}</p>
              </div>
              <div className="pt-6 font-mono text-[11px] uppercase text-slate-500">
                Phase: {item.phase}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
