
import Navbar from "@/components/Navbar";
import PromptInput from "@/components/PromptInput";
import SuggestionBar from "@/components/SuggestionBar";
import TabNavigation from "@/components/TabNavigation";
import ProjectGrid from "@/components/ProjectGrid";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-lovable-dark">
      <Navbar />
      <main className="flex-1 container mx-auto py-8">
        <PromptInput />
        <SuggestionBar />
        <TabNavigation />
        <ProjectGrid />
      </main>
      <footer className="py-6 border-t border-lovable-gray-light">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Lovable. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
