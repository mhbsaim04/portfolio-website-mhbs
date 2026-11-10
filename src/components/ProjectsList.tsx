"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, personalInfo } from "@/data/portfolioData";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

type ViewMode = "grid" | "list";

export default function ProjectsList() {
  const [count, setCount] = useState(0);
  const [mode, setMode] = useState<ViewMode>("grid");

  // Animate the "Projects (N|" counter once on mount
  useEffect(() => {
    let frame = 0;
    const target = projects.length;
    const timer = setInterval(() => {
      frame += 1;
      setCount(Math.min(target, Math.round(target * (frame / 22))));
      if (frame >= 22) clearInterval(timer);
    }, 40);
    return () => clearInterval(timer);
  }, []);

  const isList = mode === "list";

  return (
    <section className="py-16">
      <div className="container-x">
        {/* Header with counting title */}
        <Reveal>
          <div className="flex items-start justify-between gap-6 flex-wrap mb-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-accent">
              Projects ({count}
              <span className="caret" />)
            </h1>

            {/* Grid / list segmented toggle */}
            <div className="flex items-center rounded-lg border border-[#25282b] overflow-hidden">
              <button
                onClick={() => setMode("grid")}
                aria-label="Grid view"
                className={`w-11 h-11 flex items-center justify-center transition-colors cursor-pointer ${
                  !isList ? "bg-accent text-[#062d15]" : "text-[#9aa2a6] hover:text-white"
                }`}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="1" y="1" width="6" height="6" rx="1" />
                  <rect x="11" y="1" width="6" height="6" rx="1" />
                  <rect x="1" y="11" width="6" height="6" rx="1" />
                  <rect x="11" y="11" width="6" height="6" rx="1" />
                </svg>
              </button>
              <div className="w-px h-full bg-[#25282b]" />
              <button
                onClick={() => setMode("list")}
                aria-label="List view"
                className={`w-11 h-11 flex items-center justify-center transition-colors cursor-pointer ${
                  isList ? "bg-accent text-[#062d15]" : "text-[#9aa2a6] hover:text-white"
                }`}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                  <path d="M2 4h14M2 9h14M2 14h9" />
                </svg>
              </button>
            </div>
          </div>

          <p className="text-[13px] text-[#9aa2a6] mb-16">
            Here it&apos;s a showcase of my {projects.length} live projects —
            open-source code available on my GitHub repo:{" "}
            <a
              href={`https://github.com/${personalInfo.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="accent-link"
            >
              {personalInfo.githubUsername}
            </a>
          </p>
        </Reveal>

        {/* Rows */}
        <div className={isList ? "space-y-20" : "grid grid-cols-1 xl:grid-cols-2 gap-x-14 gap-y-20"}>
          {projects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 60}>
              <div
                className={
                  isList
                    ? "grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
                    : "flex flex-col-reverse lg:flex-col gap-8 items-start"
                }
              >
                {/* Text side */}
                <div className={isList ? "lg:col-span-6" : "w-full"}>
                  <div className="flex items-start justify-between mb-5">
                    <span className="ghost-num">{String(idx + 1).padStart(2, "0")}</span>
                    <div className="flex items-center gap-3">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live demo"
                        className="w-11 h-11 rounded-full border border-[#25282b] flex items-center justify-center text-[#9aa2a6] hover:text-accent hover:border-[#00e572]/60 transition-colors"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                      <Link
                        href={`/projects/${project.id}`}
                        aria-label="Project details"
                        className="w-11 h-11 rounded-full border border-[#25282b] flex items-center justify-center text-[#9aa2a6] hover:text-accent hover:border-[#00e572]/60 transition-colors no-underline"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Z" />
                          <path d="M5 12h14" />
                          <path d="M12 5c2.5 3 2.5 11 0 14" />
                          <path d="M12 5c-2.5 3-2.5 11 0 14" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  <Link href={`/projects/${project.id}`} className="no-underline group">
                    <h2 className="text-lg sm:text-xl font-bold text-white leading-snug mb-4 max-w-xl group-hover:text-accent transition-colors">
                      {project.title} {project.techStack.slice(0, 2).join(" · ")} {project.category} Project
                    </h2>
                  </Link>

                  <p className="text-[13px] text-[#9aa2a6] leading-relaxed text-justify max-w-xl mb-5">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                    <Link
                      href={`/projects/${project.id}`}
                      className="text-xs font-bold text-accent uppercase tracking-wider no-underline hover:opacity-75 transition-opacity"
                    >
                      View Details →
                    </Link>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#9aa2a6] uppercase tracking-wider no-underline hover:text-white transition-colors"
                    >
                      Live Demo ↗
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#9aa2a6] uppercase tracking-wider no-underline hover:text-white transition-colors"
                    >
                      Code ↗
                    </a>
                  </div>
                </div>

                {/* Image side */}
                <div className={isList ? "lg:col-span-6 w-full" : "w-full"}>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative rounded-xl overflow-hidden border border-[#25282b] transition-colors hover:border-[#00e572]/50 no-underline"
                  >
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      width={920}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                  </a>
                </div>
              </div>

              {isList && idx < projects.length - 1 && <hr className="row-divider mt-20" />}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
