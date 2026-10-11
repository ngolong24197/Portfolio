"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  AtSign,
  CircleAlert,
  CircleCheck,
  MapPin,
  Send,
  Smartphone,
  Terminal,
} from "lucide-react";
import { profile } from "@/data/site";
import { container, SectionTag } from "./ui";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: AtSign,
    external: false,
  },
  {
    label: "GitHub Profile",
    value: profile.githubLabel,
    href: profile.github,
    icon: Terminal,
    external: true,
  },
  {
    label: "Google Play",
    value: "Daily Reset",
    href: profile.googlePlay,
    icon: Smartphone,
    external: true,
  },
];

const inputClass =
  "rounded-xl border border-line bg-ink px-4 py-2.5 text-[14px] text-white outline-none transition-all placeholder:text-slate-600 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400";
const labelClass = "font-mono text-[11px] font-medium uppercase text-slate-300";

// Web3Forms access keys are safe to expose in the browser; they only allow
// sending mail to the address the key was issued for.
const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const subject = String(data.get("subject") ?? "");

    // Without a key, hand the message to the visitor's own email app.
    if (!accessKey) {
      const body = `${data.get("message") ?? ""}\n\n${data.get("name") ?? ""}\n${data.get("email") ?? ""}`;
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          from_name: "Portfolio contact form",
          subject: `[Portfolio] ${subject}`,
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          botcheck: data.get("botcheck") ? true : "",
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className={`${container} py-20 md:py-28`}>
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-5">
          <div>
            <SectionTag index="05 / CONTACT" label="Get in Touch" />
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Have an interesting idea? Let&apos;s talk.
            </h2>
            <p className="pt-3 text-[15px] leading-relaxed text-slate-300">
              I&apos;m open to new roles and collaborations in web and mobile development, and happy
              to talk through a project you have in mind.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            {channels.map((channel) => {
              const Icon = channel.icon;
              const Arrow = channel.external ? ArrowUpRight : ArrowRight;
              return (
                <a
                  key={channel.label}
                  href={channel.href}
                  {...(channel.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-line bg-panel p-4 transition-all hover:border-emerald-500/50"
                >
                  <div className="flex min-w-0 items-center gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-chip text-emerald-400 transition-colors group-hover:bg-emerald-500 group-hover:text-on-accent">
                      <Icon size={20} />
                    </span>
                    <div className="min-w-0">
                      <div className="font-mono text-[11px] uppercase text-slate-400">
                        {channel.label}
                      </div>
                      <div className="truncate text-[14px] font-medium text-white">
                        {channel.value}
                      </div>
                    </div>
                  </div>
                  <Arrow
                    size={20}
                    className="shrink-0 text-slate-500 transition-colors group-hover:text-emerald-400"
                  />
                </a>
              );
            })}
          </div>

          <div className="flex items-center justify-between gap-3 rounded-xl border border-line bg-panel p-3.5 font-mono text-[12px] text-slate-300">
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-emerald-400" />
              {profile.location}
            </span>
            <span className="text-slate-400">{profile.timezone}</span>
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-panel p-6 shadow-lg sm:p-8 lg:col-span-7">
          <div className="mb-6 flex items-center justify-between border-b border-line pb-6">
            <h3 className="text-[18px] font-semibold text-white">Send a direct message</h3>
            <span className="font-mono text-[11px] text-emerald-400">
              {accessKey ? "DIRECT TO INBOX" : "VIA EMAIL"}
            </span>
          </div>

          <form className="space-y-4" onSubmit={onSubmit}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className={labelClass} htmlFor="name">
                  Your Name
                </label>
                <input
                  className={inputClass}
                  id="name"
                  name="name"
                  placeholder="Jane Doe"
                  required
                  type="text"
                  autoComplete="name"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelClass} htmlFor="email">
                  Your Email
                </label>
                <input
                  className={inputClass}
                  id="email"
                  name="email"
                  placeholder="jane@example.com"
                  required
                  type="email"
                  autoComplete="email"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className={labelClass} htmlFor="subject">
                Subject / Topic
              </label>
              <input
                className={inputClass}
                id="subject"
                name="subject"
                placeholder="A role, a project, or a question"
                required
                type="text"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className={labelClass} htmlFor="message">
                Message
              </label>
              <textarea
                className={`${inputClass} resize-y`}
                id="message"
                name="message"
                placeholder="Hi Long, I saw your portfolio and wanted to discuss..."
                required
                rows={5}
              />
            </div>
            {/* Honeypot: hidden from people, filled in by bots. */}
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            <div className="flex flex-col items-center justify-between gap-4 pt-2 sm:flex-row">
              <button
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-mono text-[14px] font-semibold text-on-accent shadow-md transition-all duration-200 hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                type="submit"
                disabled={status === "sending"}
              >
                <span>{status === "sending" ? "Sending..." : "Send Message"}</span>
                <Send size={18} />
              </button>
              <span className="font-mono text-[11px] text-slate-500">
                {accessKey
                  ? "Your message goes straight to my inbox."
                  : "Opens your email app with the message filled in."}
              </span>
            </div>
            <div aria-live="polite">
              {status === "sent" && (
                <div className="mt-3 flex items-center gap-2 rounded-xl border border-emerald-500/50 bg-emerald-950/80 p-3.5 font-mono text-[13px] text-emerald-300">
                  <CircleCheck size={18} className="shrink-0 text-emerald-400" />
                  <span>Thank you! Your message has been sent.</span>
                </div>
              )}
              {status === "error" && (
                <div className="mt-3 flex items-center gap-2 rounded-xl border border-red-500/50 bg-red-950/60 p-3.5 font-mono text-[13px] text-red-300">
                  <CircleAlert size={18} className="shrink-0 text-red-400" />
                  <span>
                    The message could not be sent. Please email me at {profile.email} instead.
                  </span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
