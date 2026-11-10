import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ContactPage from "@/components/ContactPage";
import AiChatbot from "@/components/AiChatbot";

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="flex-1">
        <ContactPage />
      </main>
      <SiteFooter />
      <AiChatbot />
    </div>
  );
}
