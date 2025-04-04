
import { Paperclip, Import, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const PromptInput = () => {
  return (
    <div className="w-full max-w-2xl mx-auto mt-8 mb-10 animate-slide-up">
      <div className="relative bg-[#221F26] rounded-lg border border-[#8B5CF6]/20 overflow-hidden shadow-lg">
        <Textarea
          className="w-full bg-transparent p-5 resize-none border-none outline-none focus-visible:ring-0 text-white placeholder:text-white/50 min-h-[120px]"
          placeholder="Ask Vibe Coding to create something amazing..."
        />
        <div className="p-3 border-t border-[#8B5CF6]/20 flex justify-between items-center">
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="text-white/60 hover:text-white hover:bg-[#8B5CF6]/20 gap-2">
              <Paperclip className="h-4 w-4" />
              <span className="text-sm">Attach</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-white/60 hover:text-white hover:bg-[#8B5CF6]/20 gap-2">
              <Import className="h-4 w-4" />
              <span className="text-sm">Import</span>
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="bg-[#1A1F2C] border-[#8B5CF6]/20 text-white/80 hover:bg-[#8B5CF6]/20 text-sm">
              Public
            </Button>
            <Button size="sm" className="bg-[#8B5CF6] hover:bg-[#8B5CF6]/90 text-white">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptInput;
