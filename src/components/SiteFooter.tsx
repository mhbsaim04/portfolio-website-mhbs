import Link from "next/link";

const footerLinks = [
  { name: "Projects", href: "/projects" },
  { name: "About me", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[#25282b] bg-[#0d0f10] relative z-10">
      <div className="container-x flex flex-col sm:flex-row items-center justify-between gap-6 py-8 sm:py-9 pb-24 sm:pb-9">
        <p className="text-xs sm:text-sm text-[#9aa2a6] text-center sm:text-left">
          © {new Date().getFullYear()} All rights reserved.
        </p>

        <nav
          aria-label="Footer Navigation"
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 sm:pr-24 lg:pr-32"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="nav-link text-xs sm:text-sm font-medium no-underline hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
