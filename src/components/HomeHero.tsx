import Image from "next/image";
import Link from "next/link";
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
  const heroIntro = aboutMe.intro.replace(/^I am Mazharul Hoq Bhuiyan Saim,?\s*(?:a\s+)?/i, "A ");

  return (
    <section className="pt-8 sm:pt-12 pb-12 sm:pb-16">
      <div className="container-x w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
          {/* Intro block — below the photo on mobile, left of it on desktop */}
          <div className="order-2 lg:order-1 lg:col-span-7 space-y-6 max-w-2xl">
            <Reveal delay={300}>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.08]">
                {personalInfo.name}
              </h1>
            </Reveal>

            <Reveal delay={400}>
              <p className="text-sm sm:text-base text-accent font-semibold leading-relaxed max-w-xl">
                {personalInfo.designation} | Project &amp; Social Media Manager
              </p>
            </Reveal>

            <Reveal delay={500}>
              <p className="text-[13px] sm:text-sm text-[#9aa2a6] leading-[1.85] text-justify max-w-xl">
                {heroIntro} {aboutMe.journey}
              </p>
            </Reveal>

            {/* Action buttons */}
            <Reveal delay={600}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/projects"
                  className="btn-green uppercase !text-[12px] tracking-[0.18em]"
                >
                  See my Projects <span aria-hidden>→</span>
                </Link>

                <a
                  href={personalInfo.resumeLink}
                  download="Resume_Mazharul_Hoq_Bhuiyan_Saim.pdf"
                  className="btn-outline-green uppercase !text-[12px] tracking-[0.18em]"
                >
                  Download Resume <span aria-hidden>↓</span>
                </a>
              </div>
            </Reveal>

            {/* Social links */}
            <Reveal delay={700}>
              <div className="flex items-center gap-3.5 pt-1">
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
            </Reveal>
          </div>

          {/* Photo circle — first on mobile, right side on desktop */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center">
            <Reveal delay={500} className="w-full">
              <div className="relative mx-auto w-[290px] sm:w-[380px] lg:w-[460px] max-w-full aspect-square flex items-center justify-center animate-float">
                {/* Ambient backlighting aura — soft emerald/accent depth */}
                <div
                  className="absolute inset-4 sm:inset-6 rounded-full bg-gradient-to-tr from-[#00e572]/20 via-[#00e572]/5 to-transparent blur-3xl opacity-50 pointer-events-none"
                  aria-hidden
                />

                {/* Orbit ring 1 — precision technical ring with subtle gradient hairline and micro-ticks */}
                <svg
                  viewBox="0 0 500 500"
                  className="absolute inset-0 w-full h-full animate-spin-slower pointer-events-none"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="orbit-grad-primary" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00e572" stopOpacity="0.85" />
                      <stop offset="35%" stopColor="#00e572" stopOpacity="0.12" />
                      <stop offset="70%" stopColor="#00e572" stopOpacity="0.65" />
                      <stop offset="100%" stopColor="#00e572" stopOpacity="0.08" />
                    </linearGradient>
                  </defs>

                  {/* Refined hairline primary orbit track */}
                  <circle
                    cx="250"
                    cy="250"
                    r="240"
                    fill="none"
                    stroke="url(#orbit-grad-primary)"
                    strokeWidth="1.2"
                    strokeDasharray="160 50 220 70 120 60"
                    strokeLinecap="round"
                  />

                  {/* Precision cardinal coordinate tick markers */}
                  <line x1="250" y1="6" x2="250" y2="14" stroke="#00e572" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
                  <line x1="486" y1="250" x2="494" y2="250" stroke="#00e572" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
                  <line x1="250" y1="486" x2="250" y2="494" stroke="#00e572" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
                  <line x1="6" y1="250" x2="14" y2="250" stroke="#00e572" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />

                  {/* Micro tech coordinates / satellite node */}
                  <circle cx="250" cy="10" r="3.5" fill="#00e572" className="drop-shadow-[0_0_6px_#00e572]" />
                  <circle cx="250" cy="490" r="2" fill="#00e572" opacity="0.6" />
                </svg>

                {/* Orbit ring 2 — inner delicate technical coordinate track, reverse rotation */}
                <svg
                  viewBox="0 0 500 500"
                  className="absolute -inset-2 sm:-inset-3 w-[calc(100%+16px)] sm:w-[calc(100%+24px)] h-[calc(100%+16px)] sm:h-[calc(100%+24px)] animate-spin-slow-rev pointer-events-none"
                  aria-hidden
                >
                  {/* Subtle dotted secondary track */}
                  <circle
                    cx="250"
                    cy="250"
                    r="242"
                    fill="none"
                    stroke="#00e572"
                    strokeWidth="1"
                    strokeDasharray="3 16"
                    opacity="0.3"
                  />
                  {/* Secondary mini orbit nodes */}
                  <circle cx="78" cy="78" r="2.5" fill="#00e572" opacity="0.7" />
                  <circle cx="422" cy="422" r="2.5" fill="#00e572" opacity="0.7" />
                </svg>

                {/* Circular portal framing the photo with subtle border, dark gradient and soft shadow */}
                <div className="relative w-[87%] h-[87%] rounded-full overflow-hidden border border-[#25282b] bg-gradient-to-b from-[#181b1c] to-[#0d0f10] shadow-[0_12px_44px_rgba(0,0,0,0.65)] ring-1 ring-white/5">
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    fill
                    priority
                    sizes="(max-width: 640px) 270px, (max-width: 1024px) 340px, 420px"
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
