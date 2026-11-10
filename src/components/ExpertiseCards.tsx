import { ArrowDownRight } from "lucide-react";
import { expertise } from "@/data/portfolioData";
import Reveal from "@/components/Reveal";

export default function ExpertiseCards() {
  return (
    <section className="py-16">
      <div className="container-x">
        <Reveal>
          <h1 className="text-3xl sm:text-4xl font-bold text-accent mb-4">
            Expertise
          </h1>
          <p className="text-sm text-[#9aa2a6] max-w-2xl mb-14">
            Core web engineering skills backed by a product lens — end-to-end
            development, authentication, deployment, plus the geography and
            project-management strengths that set me apart.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {expertise.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 70}>
              <div className="group border-b border-[#25282b] pb-8 transition-colors hover:border-[#00e572]/50">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-baseline gap-4">
                    <span className="ghost-num group-hover:[-webkit-text-stroke-color:rgba(0,229,114,0.65)] transition-all duration-300">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base" aria-hidden>
                      {item.icon}
                    </span>
                  </div>
                  <span className="w-11 h-11 rounded-full border border-[#25282b] flex items-center justify-center text-[#9aa2a6] group-hover:text-accent group-hover:border-[#00e572]/60 group-hover:rotate-45 transition-all duration-300">
                    <ArrowDownRight className="w-4 h-4" />
                  </span>
                </div>

                <h2 className="text-base sm:text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {item.title}
                </h2>
                <p className="text-[13px] text-[#9aa2a6] leading-relaxed mb-4 max-w-xl text-justify">
                  {item.desc}
                </p>
                <p className="text-xs sm:text-[13px] text-accent font-medium leading-relaxed">
                  {item.tags.join(", ")}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
