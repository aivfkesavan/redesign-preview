
import { Sparkles, Send, Paperclip, PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const PromptInput = () => {
  return (
    <div className="w-full max-w-2xl mx-auto mt-8 mb-10 animate-slide-up">
      <div className="relative glass-effect rounded-xl overflow-hidden shadow-lg card-glow">
        <div className="absolute top-4 left-4 flex items-center gap-2 text-[#8B5CF6]">
          <Sparkles className="h-4 w-4" />
          <span className="text-sm font-medium">AI Prompt</span>
        </div>
        
        <Textarea
          className="w-full bg-transparent pt-12 px-5 pb-5 resize-none border-none outline-none focus-visible:ring-0 text-white placeholder:text-white/40 min-h-[140px]"
          placeholder="Describe your project idea or ask Vibe Coding to create something amazing..."
        />
        
        <div className="p-3 border-t border-[#2F2763] flex justify-between items-center bg-[#121219]">
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="text-white/50 hover:text-white hover:bg-[#2F2763] gap-2 rounded-lg">
              <Paperclip className="h-4 w-4" />
              <span className="text-xs">Attach</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-white/50 hover:text-white hover:bg-[#2F2763] gap-2 rounded-lg">
              <PenLine className="h-4 w-4" />
              <span className="text-xs">Markup</span>
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="bg-[#161622] border-[#2F2763] text-white/70 hover:bg-[#2F2763] text-xs rounded-lg">
              Public
            </Button>
            <Button size="sm" className="purple-gradient text-white rounded-lg">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptInput;
