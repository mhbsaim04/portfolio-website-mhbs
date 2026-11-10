"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { personalInfo } from "@/data/portfolioData";

function copyText(value: string, id: string, set: (v: string) => void) {
  navigator.clipboard?.writeText(value);
  set(id);
  setTimeout(() => set(""), 1800);
}

export default function ContactPage() {
  const [copied, setCopied] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const waLink = `https://wa.me/${personalInfo.whatsapp.replace(/[^0-9]/g, "")}`;

  const rows = [
    { id: "phone", label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/[^0-9+]/g, "")}`, icon: Phone },
    { id: "email", label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}`, icon: Mail },
    { id: "whatsapp", label: "WhatsApp", value: personalInfo.whatsapp, href: waLink, icon: MessageCircle },
    { id: "linkedin", label: "Linkedin", value: "mazharul-hoq-bhuiyan-saim", href: personalInfo.socials.linkedin, icon: LinkedinIcon },
    { id: "github", label: "Github", value: personalInfo.githubUsername, href: personalInfo.socials.github, icon: GithubIcon },
    { id: "location", label: "Address", value: personalInfo.location, href: null, icon: MapPin },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 6000);
    }, 800);
  };

  return (
    <section className="py-16">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form card */}
          <div className="flat-card !rounded-2xl p-7 sm:p-9">
            <h2 className="text-2xl sm:text-3xl font-bold text-accent mb-3">
              Let&apos;s build something great!
            </h2>
            <p className="text-[13px] text-[#9aa2a6] mb-8 leading-relaxed">
              Available for full-time roles, freelance projects, or
              collaborations. I help teams design, build, and scale reliable
              web products — from idea to production.
            </p>

            {submitted && (
              <p className="mb-6 p-3.5 rounded-lg bg-[#00e572]/10 border border-[#00e572]/30 text-accent text-xs">
                ✓ Message sent successfully! I&apos;ll get back to you soon.
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                required
                placeholder="Enter your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="input-flat"
              />
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="input-flat"
              />
              <textarea
                required
                rows={5}
                placeholder="Type your message here"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="input-flat resize-y"
              />
              <button
                type="submit"
                disabled={loading}
                className="btn-green disabled:opacity-60 cursor-pointer"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Direct rows */}
          <div className="space-y-7 pt-2">
            {rows.map((row) => {
              const Icon = row.icon;
              return (
                <div key={row.id} className="flex items-center gap-5">
                  <span className="w-11 h-11 rounded-xl bg-[#151819] border border-[#25282b] flex items-center justify-center text-accent shrink-0">
                    <Icon className="w-4.5 h-4.5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-[#6b7276]">{row.label}</p>
                    <div className="flex items-center gap-3">
                      {row.href ? (
                        <a
                          href={row.href}
                          target={row.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-[13px] sm:text-sm font-semibold text-white hover:text-accent transition-colors no-underline break-all"
                        >
                          {row.value}
                        </a>
                      ) : (
                        <span className="text-[13px] sm:text-sm font-semibold text-white break-all">
                          {row.value}
                        </span>
                      )}
                      <button
                        onClick={() => copyText(row.value, row.id, setCopied)}
                        aria-label={`Copy ${row.label}`}
                        className="text-[#6b7276] hover:text-accent transition-colors cursor-pointer shrink-0"
                      >
                        {copied === row.id ? <Check className="w-3.5 h-3.5 text-accent" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
