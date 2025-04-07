
import Navbar from "@/components/Navbar";
import PromptInput from "@/components/PromptInput";
import SuggestionBar from "@/components/SuggestionBar";
import TabNavigation from "@/components/TabNavigation";
import ProjectGrid from "@/components/ProjectGrid";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 container mx-auto py-6 px-4">
        <PromptInput />
        <SuggestionBar />
        <TabNavigation />
        <ProjectGrid />
      </main>
      <footer className="py-4 border-t border-gray-200 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-black flex items-center justify-center">
                <span className="font-bold text-xs text-white">V</span>
              </div>
              <p className="text-xs text-gray-600">
                © {new Date().getFullYear()} Vibe Coding. All rights reserved.
              </p>
            </div>
            <div className="flex gap-5">
              <a href="#" className="text-xs text-gray-600 hover:text-black transition-colors">Terms</a>
              <a href="#" className="text-xs text-gray-600 hover:text-black transition-colors">Privacy</a>
              <a href="#" className="text-xs text-gray-600 hover:text-black transition-colors">Contact</a>
              <a href="#" className="text-xs text-gray-600 hover:text-black transition-colors">Help</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
