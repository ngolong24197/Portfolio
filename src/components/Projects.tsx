"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  Eye,
  MousePointerClick,
  Terminal,
} from "lucide-react";
import { moreProjectsNote, profile, projectFilters, projects } from "@/data/site";
import { container, SectionTag } from "./ui";

type Filter = (typeof projectFilters)[number];

const pad = (n: number) => String(n).padStart(2, "0");

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selectedSlug, setSelectedSlug] = useState(projects[0].slug);

  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const selected = visible.find((p) => p.slug === selectedSlug) ?? visible[0];
  const selectedIndex = visible.indexOf(selected);

  const step = (delta: number) => {
    const next = (selectedIndex + delta + visible.length) % visible.length;
    setSelectedSlug(visible[next].slug);
  };

  const arrowButton =
    "flex h-7 w-7 items-center justify-center rounded-lg border border-line bg-chip text-slate-300 transition-colors hover:bg-emerald-500/20 hover:text-emerald-300 disabled:opacity-40 disabled:hover:bg-chip disabled:hover:text-slate-300";

  return (
    <section id="projects" className={`${container} py-20 md:py-28`}>
      <div className="mb-8 flex flex-col justify-between gap-6 border-b border-line/80 pb-6 lg:flex-row lg:items-end">
        <div>
          <SectionTag index="02 / PROJECTS" label="Selected Work" />
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Featured projects.
          </h2>
          <p className="max-w-[620px] pt-2 text-[15px] text-slate-400">
            A published Android app, a client automation tool, and full-stack web platforms. Select
            a card to see how each one works.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 self-start sm:gap-4 lg:self-end">
          <div
            role="group"
            aria-label="Filter projects"
            className="flex flex-wrap items-center gap-1.5 rounded-xl border border-line bg-panel p-1"
          >
            {projectFilters.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={filter === item}
                onClick={() => setFilter(item)}
                className={
                  filter === item
                    ? "rounded-lg bg-emerald-500 px-3 py-1 font-mono text-[12px] font-medium text-on-accent"
                    : "rounded-lg px-3 py-1 font-mono text-[12px] text-slate-400 transition-colors hover:text-white"
                }
              >
                {item === "All" ? "All Projects" : item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-line bg-panel px-2.5 py-1">
            <span className="pr-1 font-mono text-[12px] font-semibold text-emerald-400">
              {pad(selectedIndex + 1)} / {pad(visible.length)}
            </span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                aria-label="Previous project"
                disabled={visible.length < 2}
                onClick={() => step(-1)}
                className={arrowButton}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                aria-label="Next project"
                disabled={visible.length < 2}
                onClick={() => step(1)}
                className={arrowButton}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {visible.map((project) => {
          const isSelected = project.slug === selected.slug;
          const number = pad(projects.indexOf(project) + 1);
          return (
            <button
              key={project.slug}
              type="button"
              aria-pressed={isSelected}
              onClick={() => setSelectedSlug(project.slug)}
              className={`group relative flex flex-col rounded-2xl p-5 text-left transition-all duration-300 hover:-translate-y-1 ${
                isSelected
                  ? "emerald-glow border-2 border-emerald-400 bg-raised shadow-lg"
                  : "border-2 border-line bg-ink shadow-md hover:border-emerald-500/50 hover:bg-raised"
              }`}
            >
              <div className="mb-3 flex items-center justify-between gap-2">
                <span
                  className={`font-mono text-[11px] ${
                    isSelected ? "font-medium text-emerald-400" : "text-slate-400"
                  }`}
                >
                  PRJ_{number} {"//"} {project.category.toUpperCase()}
                </span>
              </div>
              <h3 className="text-[18px] font-bold text-white transition-colors group-hover:text-emerald-300">
                {project.title}
              </h3>
              <p
                className={`mt-2 text-[13px] leading-relaxed ${
                  isSelected ? "text-slate-300" : "text-slate-400"
                }`}
              >
                {project.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className={`rounded border border-line px-2 py-0.5 font-mono text-[10px] ${
                      isSelected ? "bg-chip-hi text-emerald-300" : "bg-chip text-slate-300"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto w-full pt-4">
                <div
                  className={`flex items-center justify-between border-t border-line pt-3 font-mono text-[11px] transition-colors ${
                    isSelected ? "text-emerald-400" : "text-slate-500 group-hover:text-emerald-400"
                  }`}
                >
                  <span>{isSelected ? "SHOWING DETAILS" : "View details"}</span>
                  {isSelected ? <Eye size={16} /> : <MousePointerClick size={16} />}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div
        aria-live="polite"
        className="relative overflow-hidden rounded-2xl border-2 border-line bg-panel shadow-2xl"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-ink-deep px-5 py-3.5">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="inline-block h-3 w-3 rounded-full bg-[#EF4444]/90" />
              <span className="inline-block h-3 w-3 rounded-full bg-[#F59E0B]/90" />
              <span className="inline-block h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <span className="font-mono text-[12px] font-medium text-emerald-300">
              project: <span className="text-white">{selected.slug}</span>
            </span>
          </div>
          <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-chip px-2.5 py-1 font-mono text-[11px] text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {selected.status.toUpperCase()}
          </span>
        </div>

        <div className="grid grid-cols-1 divide-y divide-line lg:grid-cols-12 lg:divide-x lg:divide-y-0">
          <div className="flex flex-col justify-between bg-[#0B1512]/60 p-6 sm:p-8 lg:col-span-5">
            <div className="space-y-6">
              <div>
                <div className="mb-2 font-mono text-[11px] text-emerald-400">
                  {selected.category.toUpperCase()}
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white">{selected.title}</h3>
                <p className="pt-2 text-[14px] leading-relaxed text-slate-300">
                  {selected.description}
                </p>
              </div>

              <dl className="grid grid-cols-2 gap-2.5">
                {selected.facts.map((fact) => (
                  <div key={fact.label} className="rounded-xl border border-line bg-raised p-3">
                    <dt className="font-mono text-[10px] uppercase text-slate-400">{fact.label}</dt>
                    <dd className="mt-0.5 text-[14px] font-semibold text-emerald-300">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="space-y-2">
                <div className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                  What I built
                </div>
                <ul className="space-y-1.5 text-[13px] text-slate-300">
                  {selected.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <CircleCheck size={16} className="mt-0.5 shrink-0 text-emerald-400" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-line pt-6">
              {selected.links.map((link) =>
                link.kind === "live" ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-500 px-4 py-2.5 font-mono text-[13px] font-semibold text-on-accent transition-colors hover:bg-emerald-400"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={15} />
                  </a>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-line bg-chip px-4 py-2.5 font-mono text-[13px] text-slate-200 transition-colors hover:bg-chip-hi"
                  >
                    <Terminal size={16} className="text-emerald-400" />
                    <span>{link.label}</span>
                  </a>
                ),
              )}
              {selected.note && (
                <span className="font-mono text-[12px] text-slate-400">{selected.note}</span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-5 bg-ink p-6 sm:p-8 lg:col-span-7">
            <div className="rounded-xl border border-line bg-raised p-4 sm:p-5">
              <div className="flex items-center justify-between border-b border-line/80 pb-3">
                <span className="font-mono text-[12px] font-medium text-white">
                  {selected.flowLabel}
                </span>
                <span className="rounded border border-emerald-500/30 bg-emerald-950/80 px-2 py-0.5 font-mono text-[11px] text-emerald-300">
                  {pad(selected.flow.length)} STEPS
                </span>
              </div>

              <ol className="relative mt-4 space-y-3 before:absolute before:bottom-4 before:left-[13px] before:top-4 before:w-px before:bg-line-strong before:content-['']">
                {selected.flow.map((stage, i) => (
                  <li key={stage.title} className="relative flex items-start gap-3">
                    <span className="z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-emerald-500/30 bg-chip font-mono text-[11px] font-bold text-emerald-400">
                      {pad(i + 1)}
                    </span>
                    <div className="flex-1 rounded-lg border border-line bg-ink-deep px-3.5 py-2.5">
                      <div className="text-[13px] font-semibold text-white">{stage.title}</div>
                      <div className="text-[12px] text-slate-400">{stage.detail}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-xl border border-line bg-raised p-4 sm:p-5">
              <div className="font-mono text-[11px] font-semibold uppercase tracking-wide text-emerald-300">
                Tech stack
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {selected.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-line bg-chip px-2.5 py-1 font-mono text-[11px] text-emerald-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="pt-6 text-[14px] text-slate-400">
        {moreProjectsNote}{" "}
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[13px] text-emerald-400 underline-offset-4 hover:underline"
        >
          {profile.githubLabel} ↗
        </a>
      </p>
    </section>
  );
}
