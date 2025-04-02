
import { ArrowUpRight } from "lucide-react";

const suggestions = [
  { id: 1, text: "Recharts dashboard" },
  { id: 2, text: "Hacker News top 100" },
  { id: 3, text: "AI image generator" },
  { id: 4, text: "Recipe collection" },
];

const SuggestionBar = () => {
  return (
    <div className="flex justify-center gap-3 my-4 flex-wrap animate-slide-up">
      {suggestions.map((suggestion) => (
        <button key={suggestion.id} className="suggestion-btn">
          {suggestion.text}
          <ArrowUpRight className="h-4 w-4" />
        </button>
      ))}
    </div>
  );
};

export default SuggestionBar;
