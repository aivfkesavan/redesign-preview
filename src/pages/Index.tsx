
import Navbar from "@/components/Navbar";
import PromptInput from "@/components/PromptInput";
import SuggestionBar from "@/components/SuggestionBar";
import TabNavigation from "@/components/TabNavigation";
import ProjectGrid from "@/components/ProjectGrid";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#1A1F2C]">
      <Navbar />
      <main className="flex-1 container mx-auto py-8 px-4">
        <PromptInput />
        <SuggestionBar />
        <TabNavigation />
        <ProjectGrid />
      </main>
      <footer className="py-6 border-t border-[#33C3F0]/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-xs text-white/60">
              © {new Date().getFullYear()} Vibe Coding. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-xs text-white/60 hover:text-white transition">Terms</a>
              <a href="#" className="text-xs text-white/60 hover:text-white transition">Privacy</a>
              <a href="#" className="text-xs text-white/60 hover:text-white transition">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
