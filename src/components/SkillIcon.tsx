import Image from "next/image";
import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiExpress,
  SiMongodb,
  SiGoogleearthengine,
  SiC,
  SiGithub,
  SiVercel,
  SiQgis,
  SiOpencode,
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
  "JavaScript (ES6+)": SiJavascript,
  "HTML5 & Modern CSS": SiHtml5,
  // Backend & Data
  "Node.js & Express.js": SiExpress,
  "MongoDB & Mongoose": SiMongodb,
  "Better Auth & JWT": FiLock,
  "RESTful & CRUD APIs": FiLink,
  "Google Earth Engine (GEE)": SiGoogleearthengine,
  "C Programming": SiC,
  // Tools & Platforms
  "Git & GitHub": SiGithub,
  "VS Code": TbBrandVscode,
  "NoSQLBooster for MongoDB": FiDatabase,
  "Vercel": SiVercel,
  opencode: SiOpencode,
  "GIS (ArcGIS & QGIS)": SiQgis,
};

/** Skills whose icon is a real brand PNG asset instead of a react-icon glyph. */
const customSkillImages: Record<string, string> = {
  antigravity: "/images/Google-Antigravity-Icon-White.png",
};

export default function SkillIcon({
  name,
  className = "w-7 h-7",
}: {
  name: string;
  className?: string;
}) {
  const customSrc = customSkillImages[name];
  if (customSrc) {
    return (
      <Image
        src={customSrc}
        alt=""
        width={32}
        height={32}
        className={className}
        aria-hidden
      />
    );
  }
  const Icon = skillIcons[name] ?? FiCode;
  return <Icon className={className} aria-hidden />;
}
