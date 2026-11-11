"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

const links = [
  { name: "Home", href: "/" },
  { name: "Expertise", href: "/expertise" },
  { name: "About me", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#0d0f10]/90 backdrop-blur-md border-b border-[#25282b]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-x flex items-center h-24 gap-8">
        {/* Wordmark */}
        <Link href="/" className="no-underline shrink-0">
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-accent">mhbs</span>
            <span className="text-white">.portfolio</span>
          </span>
        </Link>

        {/* Desktop links (centered) */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-10">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              data-active={isActive(link.href)}
              className="nav-link text-sm font-semibold no-underline"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href={personalInfo.resumeLink}
            download="Resume_Mazharul_Hoq_Bhuiyan_Saim.pdf"
            className="btn-outline-green !text-[14px] !px-8 !py-3.5"
          >
            Resume <span aria-hidden>↓</span>
          </a>
          <Link href="/contact" className="btn-green !text-[14px] !px-8 !py-3.5">
            Hire me!
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          className="md:hidden p-2 text-[#9aa2a6] hover:text-accent transition-colors cursor-pointer"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-[#25282b] bg-[#0d0f10]/95 backdrop-blur-md">
          <nav className="container-x py-4 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm py-2.5 px-3 rounded-lg no-underline transition-colors ${
                  isActive(link.href)
                    ? "text-accent bg-[#00e572]/5"
                    : "text-[#9aa2a6] hover:text-white hover:bg-[#151819]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={personalInfo.resumeLink}
              download="Resume_Mazharul_Hoq_Bhuiyan_Saim.pdf"
              className="btn-outline-green mt-3 !justify-center !text-[13px]"
            >
              Download Resume <span aria-hidden>↓</span>
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-green !justify-center"
            >
              Hire me!
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
