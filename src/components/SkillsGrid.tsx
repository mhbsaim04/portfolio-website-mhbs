import type { skills } from "@/data/portfolioData";
import SkillIcon from "@/components/SkillIcon";

type Skill = (typeof skills)["frontend"][number];

/**
 * One skill category: a grid of dark icon tiles on top (brand logo,
 * name on hover), with the classic name/percentage progress bars below.
 */
export default function SkillsGrid({ list }: { list: Skill[] }) {
  return (
    <>
      {/* Icon tiles */}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 mb-8">
        {list.map((skill) => (
          <div
            key={skill.name}
            title={skill.name}
            className="group aspect-square rounded-xl bg-[#1a1d1e] border border-[#25282b] flex items-center justify-center cursor-default hover:-translate-y-1 hover:border-[#00e572]/50 transition-all duration-300"
          >
            <SkillIcon
              name={skill.name}
              className="w-7 h-7 text-[#e6eae9] group-hover:text-accent transition-colors duration-300"
            />
          </div>
        ))}
      </div>

      {/* Progress bars */}
      <div className="space-y-4 max-w-xl">
        {list.map((skill) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[13px] text-[#e6eae9]">
                {skill.name}
              </span>
              <span className="text-xs text-[#6b7276]">{skill.level}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-[#25282b] overflow-hidden">
              <div
                className="h-full rounded-full bg-accent transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
