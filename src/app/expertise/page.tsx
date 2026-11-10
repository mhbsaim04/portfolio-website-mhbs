import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ExpertiseCards from "@/components/ExpertiseCards";
import AiChatbot from "@/components/AiChatbot";

export default function ExpertisePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="flex-1">
        <ExpertiseCards />
      </main>
      <SiteFooter />
      <AiChatbot />
    </div>
  );
}
