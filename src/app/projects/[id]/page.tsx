import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolioData";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Saim.dev`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.id === id);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="flex-1 py-16">
        <div className="container-x">
          {/* Back + index */}
          <div className="flex items-center justify-between mb-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#9aa2a6] hover:text-accent transition-colors no-underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects</span>
            </Link>
            <span className="ghost-num !text-2xl">{String(idx + 1).padStart(2, "0")}</span>
          </div>

          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00e572]/40 bg-[#00e572]/10 text-accent text-[11px] font-bold uppercase tracking-wider">
                {project.category} Project
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white leading-snug">
                {project.title}
              </h1>
              <p className="text-[13px] text-[#9aa2a6] leading-relaxed">
                {project.shortDescription}
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-green !text-xs">
                  Live Project <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-green !text-xs"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  GitHub Repo
                </a>
              </div>
              <p className="text-xs text-accent pt-1">{project.techStack.join(", ")}</p>
            </div>

            {/* Banner image */}
            <div className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden border border-[#25282b]">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  width={920}
                  height={600}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
            <div className="lg:col-span-7 space-y-14">
              <section>
                <h2 className="text-lg font-bold text-white mb-4">
                  Overview <span className="text-accent">&amp; Architecture</span>
                </h2>
                <p className="text-[13px] text-[#9aa2a6] leading-relaxed text-justify">
                  {project.fullDescription}
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-white mb-5">
                  Challenges <span className="text-accent">Faced</span>
                </h2>
                <ul className="space-y-3">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <span className="ghost-num !text-xl shrink-0 !mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[13px] text-[#c1c8cb] leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-bold text-white mb-5">
                  Improvements <span className="text-accent">&amp; Future Plans</span>
                </h2>
                <ul className="space-y-3">
                  {project.improvements.map((imp, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-accent shrink-0 pt-0.5">▸</span>
                      <span className="text-[13px] text-[#c1c8cb] leading-relaxed">{imp}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Side meta */}
            <aside className="lg:col-span-5 space-y-8 lg:sticky lg:top-28 self-start">
              <div className="flat-card !rounded-2xl p-6 space-y-4">
                <h3 className="text-sm font-bold text-accent uppercase tracking-wider">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-[#1a1d1e] border border-[#25282b] text-[11px] text-[#c1c8cb]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flat-card !rounded-2xl p-6 space-y-4">
                <h3 className="text-sm font-bold text-accent uppercase tracking-wider">Project Specs</h3>
                <dl className="space-y-3 text-[13px]">
                  <div className="flex justify-between border-b border-[#25282b]/70 pb-3">
                    <dt className="text-[#6b7276]">Category</dt>
                    <dd className="font-semibold text-white">{project.category}</dd>
                  </div>
                  <div className="flex justify-between border-b border-[#25282b]/70 pb-3">
                    <dt className="text-[#6b7276]">Type</dt>
                    <dd className="font-semibold text-white">Production Webapp</dd>
                  </div>
                  <div className="flex justify-between border-b border-[#25282b]/70 pb-3">
                    <dt className="text-[#6b7276]">Repository</dt>
                    <dd className="font-semibold text-white">Public (Client)</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[#6b7276]">Status</dt>
                    <dd className="font-semibold text-accent">● Live &amp; Deployed</dd>
                  </div>
                </dl>
                <div className="flex items-center gap-3 pt-2">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-accent no-underline hover:opacity-75 transition-opacity">
                    Visit Live ↗
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#9aa2a6] no-underline hover:text-white transition-colors">
                    Source Code ↗
                  </a>
                </div>
              </div>

              <Link href="/projects" className="btn-outline-green w-full !justify-center">
                View All Projects
              </Link>
            </aside>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
