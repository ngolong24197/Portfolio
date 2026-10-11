import { Cloud, Database, PanelsTopLeft, Server, ShieldCheck, Smartphone } from "lucide-react";
import { skills, type SkillIcon } from "@/data/site";
import { Chip, container, SectionTag } from "./ui";

const icons: Record<SkillIcon, typeof Server> = {
  server: Server,
  layout: PanelsTopLeft,
  smartphone: Smartphone,
  database: Database,
  cloud: Cloud,
  shield: ShieldCheck,
};

export default function Skills() {
  return (
    <section id="skills" className="w-full border-y border-line/80 bg-panel py-20 md:py-28">
      <div className={container}>
        <SectionTag index="03 / SKILLS" label="Languages & Tooling" />
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Tools I work with.
        </h2>
        <p className="mb-12 max-w-[620px] pt-2 text-[15px] text-slate-400">
          The technologies I use to build, secure, and deploy web and mobile software.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => {
            const Icon = icons[group.icon];
            return (
              <div
                key={group.title}
                className="flex flex-col justify-between rounded-2xl border border-line bg-ink p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50"
              >
                <div>
                  <div className="flex items-center gap-3 border-b border-line pb-4">
                    <Icon size={24} className="text-emerald-400" />
                    <h3 className="text-[17px] font-semibold text-white">{group.title}</h3>
                  </div>
                  <p className="pb-5 pt-3 text-[13px] leading-relaxed text-slate-400">
                    {group.blurb}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
