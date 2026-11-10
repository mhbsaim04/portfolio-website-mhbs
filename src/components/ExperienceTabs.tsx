"use client";

import { useState } from "react";
import { aboutMe, experience, education, skills, personalInfo, stats } from "@/data/portfolioData";
import Reveal from "@/components/Reveal";

type Tab = "about" | "experience" | "education" | "skills" | "achievements";

const tabs: { id: Tab; label: string }[] = [
  { id: "about", label: "About me" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Highlights" },
];

const summaryKv = [
  { k: "Name", v: personalInfo.name },
  { k: "Phone", v: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/[^0-9+]/g, "")}` },
  { k: "Email", v: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { k: "Experience", v: "2 Roles" },
  { k: "Nationality", v: "Bangladeshi" },
  { k: "Languages", v: "Bengali (Native), English (Professional)" },
  { k: "Core Stack", v: stats[1].value },
  { k: "Availability", v: "Available" },
];

export default function ExperienceTabs() {
  const [tab, setTab] = useState<Tab>("about");

  return (
    <section className="py-16">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: tab rail */}
          <aside className="lg:col-span-1 space-y-3 lg:sticky lg:top-28 self-start">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`w-full py-3.5 px-4 rounded-xl text-[13px] text-center transition-all duration-200 cursor-pointer border ${
                  tab === t.id
                    ? "bg-[#00e572] text-[#062d15] font-bold border-[#00e572] shadow-[0_0_20px_rgba(0,229,114,0.3)]"
                    : "bg-[#151819] text-[#9aa2a6] font-semibold border-[#25282b] hover:text-white hover:border-[#3a3f41]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </aside>

          {/* Right: panel */}
          <div className="lg:col-span-2 min-h-[420px]">
            {tab === "about" && (
              <Reveal key="about">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Professional <span className="text-accent">Summary</span>
                </h2>
                <p className="text-[13px] text-[#9aa2a6] leading-relaxed text-justify max-w-2xl">
                  {aboutMe.intro} <br />
                  <br />
                  {aboutMe.journey}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 mt-8">
                  {summaryKv.map((row) => (
                    <div key={row.k} className="flex items-baseline gap-3 py-2 border-b border-[#25282b]/70">
                      <span className="text-xs text-[#6b7276] shrink-0">{row.k}</span>
                      {row.href ? (
                        <a href={row.href} className="accent-link text-[13px] font-semibold break-all">
                          {row.v}
                        </a>
                      ) : (
                        <span className="text-[13px] font-semibold text-[#e6eae9]">{row.v}</span>
                      )}
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            {tab === "experience" && (
              <div key="exp" className="space-y-10">
                {experience.map((job, i) => (
                  <Reveal key={job.id} delay={i * 80}>
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="ghost-num !text-2xl sm:!text-3xl">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-xs text-[#6b7276]">{job.period}</span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-1">
                      {job.role} <span className="text-accent">@ {job.company}</span>
                    </h3>
                    <p className="text-[13px] text-[#9aa2a6] mb-4">{job.description}</p>
                    <ul className="space-y-2 mb-4">
                      {job.achievements.map((a, idx) => (
                        <li key={idx} className="text-[13px] text-[#c1c8cb] leading-relaxed flex gap-3">
                          <span className="text-accent shrink-0">▸</span>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-accent">{job.technologies.join(", ")}</p>
                  </Reveal>
                ))}
              </div>
            )}

            {tab === "education" && (
              <div key="edu" className="space-y-10">
                {education.map((edu, i) => (
                  <Reveal key={edu.id} delay={i * 80}>
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="ghost-num !text-2xl sm:!text-3xl">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-xs text-[#6b7276]">{edu.period}</span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-[13px] text-accent mb-2">{edu.institution}</p>
                    <p className="text-[13px] text-[#9aa2a6] leading-relaxed text-justify max-w-2xl">
                      {edu.description}
                    </p>
                    <p className="text-xs text-[#6b7276] mt-2">
                      {edu.location} · {edu.grade}
                    </p>
                  </Reveal>
                ))}
              </div>
            )}

            {tab === "skills" && (
              <div key="skills" className="space-y-12">
                {(
                  [
                    ["Frontend", skills.frontend],
                    ["Backend & Data", skills.backend],
                    ["Tools & Platforms", skills.tools],
                  ] as const
                ).map(([group, list], gi) => (
                  <Reveal key={group} delay={gi * 80}>
                    <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-5">
                      {group}
                    </h3>
                    <div className="space-y-4 max-w-xl">
                      {list.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[13px] text-[#e6eae9]">
                              {skill.icon} {skill.name}
                            </span>
                            <span className="text-xs text-[#6b7276]">{skill.level}%</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-[#25282b] overflow-hidden">
                            <div
                              className="h-full rounded-full bg-accent transition-all duration-1000"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                ))}
              </div>
            )}

            {tab === "achievements" && (
              <Reveal key="hl">
                <h2 className="text-2xl font-bold text-white mb-6">
                  What sets me <span className="text-accent">apart</span>
                </h2>
                <ul className="space-y-3 max-w-xl">
                  {aboutMe.funFacts.map((fact, idx) => (
                    <li
                      key={idx}
                      className="flat-card px-5 py-3.5 text-[13px] text-[#c1c8cb] flex items-center gap-3"
                    >
                      <span className="text-accent">▸</span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[13px] text-[#9aa2a6] mt-8 leading-relaxed text-justify max-w-2xl">
                  {aboutMe.workStyle}
                </p>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
