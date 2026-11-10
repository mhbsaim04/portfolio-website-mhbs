"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

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
          <span className="text-2xl font-bold tracking-tight text-white">
            Saim<span className="text-accent">.dev</span>
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
        <div className="hidden md:block shrink-0">
          <Link href="/contact" className="btn-green !text-[14px] !px-9 !py-3.5">
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
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-green mt-3 !justify-center"
            >
              Hire me!
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
