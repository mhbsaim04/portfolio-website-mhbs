import Image from "next/image";
import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGoogleearthengine,
  SiC,
  SiGithub,
  SiVercel,
  SiQgis,
  SiOpencode,
  SiStripe,
  SiShadcnui,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { FiLock, FiLink, FiCode, FiDatabase } from "react-icons/fi";

/**
 * Skill name → brand glyph (react-icons Simple Icons), with generic
 * feather icons as tasteful fallbacks for skills that have no real logo.
 */
const skillIcons: Record<string, IconType> = {
  // Frontend
  "Next.js (App Router)": SiNextdotjs,
  "React 19": SiReact,
  TypeScript: SiTypescript,
  "Tailwind CSS v4": SiTailwindcss,
  "shadcn/ui": SiShadcnui,
  shadcn: SiShadcnui,
  "JavaScript (ES6+)": SiJavascript,
  "HTML5 & Modern CSS": SiHtml5,
  // Backend & Data
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "MongoDB & Mongoose": SiMongodb,
  "Better Auth": FiLock,
  JWT: FiLock,
  Stripe: SiStripe,
  "CRUD & REST APIs": FiLink,
  CRUD: FiLink,
  "Google Earth Engine (GEE)": SiGoogleearthengine,
  "C Programming": SiC,
  // Tools & Platforms
  "Git & GitHub": SiGithub,
  "VS Code": TbBrandVscode,
  "NoSQLBooster for MongoDB": FiDatabase,
  Vercel: SiVercel,
  opencode: SiOpencode,
  "GIS (ArcGIS & QGIS)": SiQgis,
};

/** Skills whose icon is a real brand image asset in /images/ */
const customSkillImages: Record<string, string> = {
  // Frontend
  "shadcn/ui": "/images/shadcn_logo.png",
  shadcn: "/images/shadcn_logo.png",
  // Backend & Data
  "Node.js": "/images/nodejs_logo.png",
  Nodejs: "/images/nodejs_logo.png",
  "Express.js": "/images/expressjs_logo.png",
  Express: "/images/expressjs_logo.png",
  "Better Auth": "/images/betterauth_logo.png",
  BetterAuth: "/images/betterauth_logo.png",
  JWT: "/images/jwt_logo.svg",
  "JSON Web Tokens (JWT)": "/images/jwt_logo.svg",
  Stripe: "/images/stripe_logo.jpg",
  "CRUD & REST APIs": "/images/crud_logo.svg",
  CRUD: "/images/crud_logo.svg",
  "RESTful & CRUD APIs": "/images/crud_logo.svg",
  "REST & CRUD APIs": "/images/crud_logo.svg",
  // Tools & Platforms
  antigravity: "/images/Google-Antigravity-Icon-White.png",
};

export default function SkillIcon({
  name,
  className = "w-12 h-12 sm:w-14 sm:h-14",
}: {
  name: string;
  className?: string;
}) {
  const customSrc = customSkillImages[name];
  if (customSrc) {
    return (
      <Image
        src={customSrc}
        alt={name}
        width={64}
        height={64}
        unoptimized
        className={`${className} object-contain rounded-md`}
        aria-hidden
      />
    );
  }
  const Icon = skillIcons[name] ?? FiCode;
  return <Icon className={className} aria-hidden />;
}
