import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ExperienceTabs from "@/components/ExperienceTabs";
import AiChatbot from "@/components/AiChatbot";

export default function ExperiencePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="flex-1">
        <ExperienceTabs />
      </main>
      <SiteFooter />
      <AiChatbot />
    </div>
  );
}
