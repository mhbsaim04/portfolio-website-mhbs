import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ProjectsList from "@/components/ProjectsList";
import AiChatbot from "@/components/AiChatbot";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="flex-1">
        <ProjectsList />
      </main>
      <SiteFooter />
      <AiChatbot />
    </div>
  );
}
