import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import HomeHero from "@/components/HomeHero";
import AiChatbot from "@/components/AiChatbot";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="flex-1">
        <HomeHero />
      </main>
      <SiteFooter />
      <AiChatbot />
    </div>
  );
}
