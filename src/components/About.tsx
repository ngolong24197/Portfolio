import { Compass, Sparkles } from "lucide-react";
import { about, profile } from "@/data/site";
import { Chip, container, SectionTag } from "./ui";

export default function About() {
  return (
    <section id="about" className="w-full border-y border-line/80 bg-panel py-20 md:py-28">
      <div className={container}>
        <div className="mb-5">
          <SectionTag index="01 / ABOUT" label="Background & Mindset" />
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-7">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              A little about me.
            </h2>
            <div className="space-y-4 text-[15px] leading-relaxed text-slate-300">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-2 flex items-start gap-4 rounded-xl border border-line bg-ink p-5">
              <div className="shrink-0 rounded-lg border border-emerald-500/30 bg-chip p-2 text-emerald-400">
                <Compass size={24} />
              </div>
              <div>
                <div className="text-[16px] font-semibold text-white">{about.principle.title}</div>
                <p className="pt-1 text-[13px] leading-relaxed text-slate-400">
                  {about.principle.body}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="flex flex-col gap-5 rounded-2xl border border-line bg-ink p-6 shadow-lg">
              <div className="flex items-center justify-between border-b border-line pb-3">
                <span className="font-mono text-[13px] font-semibold text-emerald-300">
                  DEVELOPER_PROFILE
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-raised px-2 py-0.5 font-mono text-[11px] text-emerald-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Active
                </span>
              </div>

              <dl className="space-y-3.5 text-[13px]">
                {about.facts.map((fact) => (
                  <div key={fact.label} className="flex flex-col">
                    <dt className="font-mono text-[11px] uppercase tracking-wide text-slate-400">
                      {fact.label}
                    </dt>
                    <dd className="pt-0.5 font-medium text-white">{fact.value}</dd>
                    {fact.detail && <dd className="text-[12px] text-slate-400">{fact.detail}</dd>}
                  </div>
                ))}
                <div className="flex flex-col">
                  <dt className="font-mono text-[11px] uppercase tracking-wide text-slate-400">
                    Location &amp; Timezone
                  </dt>
                  <dd className="flex items-center gap-2 pt-0.5">
                    <span className="font-medium text-white">{profile.location}</span>
                    <span className="rounded border border-line bg-chip px-2 py-0.5 font-mono text-[11px] text-emerald-300">
                      {profile.timezone}
                    </span>
                  </dd>
                </div>
              </dl>

              <div className="flex flex-col gap-2.5 border-t border-line pt-4">
                <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-slate-400">
                  <Sparkles size={14} className="text-emerald-400" />
                  Working with most
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {about.interests.map((interest) => (
                    <Chip key={interest}>{interest}</Chip>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
