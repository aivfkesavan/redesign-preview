
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const suggestions = [
  { id: 1, text: "Recharts dashboard" },
  { id: 2, text: "Hacker News top 100" },
  { id: 3, text: "AI image generator" },
  { id: 4, text: "Recipe collection" },
];

const SuggestionBar = () => {
  return (
    <div className="flex justify-center gap-3 my-6 flex-wrap animate-slide-up">
      {suggestions.map((suggestion) => (
        <Button 
          key={suggestion.id} 
          variant="outline" 
          className="rounded-full bg-lovable-gray-light text-muted-foreground hover:bg-lovable-gray-medium hover:text-foreground border-none"
        >
          {suggestion.text}
          <ArrowUpRight className="h-4 w-4 ml-1" />
        </Button>
      ))}
    </div>
  );
};

export default SuggestionBar;
