import Image from "next/image";
import { GithubIcon, LinkedinIcon, TwitterIcon, FacebookIcon } from "@/components/SocialIcons";
import { personalInfo, homeStats, aboutMe } from "@/data/portfolioData";
import Reveal from "@/components/Reveal";

const socials = [
  { label: "GitHub", href: personalInfo.socials.github, Icon: GithubIcon },
  { label: "LinkedIn", href: personalInfo.socials.linkedin, Icon: LinkedinIcon },
  { label: "Twitter / X", href: personalInfo.socials.twitter, Icon: TwitterIcon },
  { label: "Facebook", href: personalInfo.socials.facebook, Icon: FacebookIcon },
];

export default function HomeHero() {
  return (
    <section className="pt-8 sm:pt-12 pb-12 sm:pb-16">
      <div className="container-x w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
          {/* Left: intro block */}
          <div className="lg:col-span-7 space-y-6 max-w-2xl">
            <Reveal delay={300}>
              <p className="text-2xl sm:text-3xl font-bold text-white">Hello! I&apos;m</p>
            </Reveal>

            <Reveal delay={400}>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-accent leading-[1.08]">
                {personalInfo.name}
              </h1>
            </Reveal>

            <Reveal delay={500}>
              <p className="text-sm sm:text-base text-[#e8ecea] font-medium leading-relaxed max-w-xl">
                {personalInfo.designation}{" "}
                <span className="text-[#9aa2a6]">| Project &amp; Social Media Manager</span>
              </p>
            </Reveal>

            <Reveal delay={600}>
              <p className="text-[13px] sm:text-sm text-[#9aa2a6] leading-[1.85] text-justify max-w-xl">
                {aboutMe.intro} {aboutMe.journey}
              </p>
            </Reveal>

            {/* Resume + socials */}
            <Reveal delay={700}>
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <a
                  href={personalInfo.resumeLink}
                  download="Resume_Mazharul_Hoq_Bhuiyan_Saim.pdf"
                  className="btn-outline-green uppercase !text-[12px] tracking-[0.18em]"
                >
                  Download Resume <span aria-hidden>↓</span>
                </a>

                <div className="flex items-center gap-3.5">
                  {socials.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-11 h-11 rounded-full border border-[#25282b] flex items-center justify-center text-[#9aa2a6] hover:text-accent hover:border-[#00e572]/60 transition-colors no-underline"
                    >
                      <Icon className="w-[18px] h-[18px]" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: photo masked inside a circle, orbit arcs sweeping around it */}
          <div className="lg:col-span-5 flex justify-center">
            <Reveal delay={500} className="w-full">
              <div className="relative mx-auto w-[300px] sm:w-[380px] lg:w-[520px] max-w-full aspect-square">
                {/* orbit ring 1 — long dashed segments, slow rotation */}
                <svg
                  viewBox="0 0 440 440"
                  className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] animate-spin-slower pointer-events-none"
                  aria-hidden
                >
                  <circle
                    cx="220"
                    cy="220"
                    r="216"
                    fill="none"
                    stroke="#00e572"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="150 110 70 160"
                    opacity="0.95"
                  />
                </svg>
                {/* orbit ring 2 — faint dotted ring, reverse rotation */}
                <svg
                  viewBox="0 0 440 440"
                  className="absolute -inset-4 w-[calc(100%+32px)] h-[calc(100%+32px)] animate-spin-slow-rev pointer-events-none"
                  aria-hidden
                >
                  <circle
                    cx="220"
                    cy="220"
                    r="215"
                    fill="none"
                    stroke="#00e572"
                    strokeWidth="2"
                    strokeDasharray="5 28"
                    opacity="0.35"
                  />
                </svg>

                {/* circular frame that masks the photo */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    fill
                    priority
                    sizes="(max-width: 640px) 300px, (max-width: 1024px) 380px, 520px"
                    className="object-contain object-top"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stats row */}
        <Reveal delay={750}>
          <div className="mt-16 lg:mt-24 pt-12 border-t border-[#25282b]/70">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
              {homeStats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent leading-none shrink-0 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-[13px] text-[#9aa2a6] font-medium leading-snug whitespace-pre-line">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
