
import { Lightbulb, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const suggestions = [
  { id: 1, text: "AI image generator" },
  { id: 2, text: "Dashboard template" },
  { id: 3, text: "Landing page" },
  { id: 4, text: "E-commerce site" },
  { id: 5, text: "Portfolio" },
];

const SuggestionBar = () => {
  return (
    <div className="flex flex-col items-center my-6 animate-slide-up">
      <div className="flex items-center gap-2 mb-3 text-[#8B5CF6]">
        <Lightbulb className="h-4 w-4" />
        <span className="text-sm font-medium">Try asking for</span>
      </div>
      
      <div className="flex flex-wrap justify-center gap-2">
        {suggestions.map((suggestion) => (
          <Button 
            key={suggestion.id} 
            variant="outline" 
            className="rounded-full bg-[#161622] text-white/70 hover:text-white hover:bg-[#2F2763] border-[#2F2763] hover:border-[#8B5CF6]"
          >
            {suggestion.text}
            <ArrowUpRight className="h-3.5 w-3.5 ml-1 text-[#8B5CF6]" />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SuggestionBar;
