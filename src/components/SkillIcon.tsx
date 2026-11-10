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
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { FiLock, FiLink, FiBriefcase, FiCode, FiPenTool } from "react-icons/fi";

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
  "Vercel Deployment": SiVercel,
  "Canva & Brand Creatives": FiPenTool,
  "GIS (ArcGIS & QGIS)": SiQgis,
  "Project Management": FiBriefcase,
};

export default function SkillIcon({
  name,
  className = "w-7 h-7",
}: {
  name: string;
  className?: string;
}) {
  const Icon = skillIcons[name] ?? FiCode;
  return <Icon className={className} aria-hidden />;
}
