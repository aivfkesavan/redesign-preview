
import Navbar from "@/components/Navbar";
import PromptInput from "@/components/PromptInput";
import SuggestionBar from "@/components/SuggestionBar";
import TabNavigation from "@/components/TabNavigation";
import ProjectGrid from "@/components/ProjectGrid";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F0F15]">
      <Navbar />
      <main className="flex-1 container mx-auto py-8 px-4">
        <PromptInput />
        <SuggestionBar />
        <TabNavigation />
        <ProjectGrid limit={4} showViewMore={true} />
      </main>
      <footer className="py-6 border-t border-[#2F2763]/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md purple-gradient flex items-center justify-center">
                <span className="font-bold text-xs text-white">V</span>
              </div>
              <p className="text-xs text-white/60">
                © {new Date().getFullYear()} Vibe Coding. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-white/60 hover:text-[#8B5CF6] transition-colors">Terms</a>
              <a href="#" className="text-xs text-white/60 hover:text-[#8B5CF6] transition-colors">Privacy</a>
              <a href="#" className="text-xs text-white/60 hover:text-[#8B5CF6] transition-colors">Contact</a>
              <a href="#" className="text-xs text-white/60 hover:text-[#8B5CF6] transition-colors">Help</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
