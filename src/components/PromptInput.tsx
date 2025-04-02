
import { Paperclip, Import } from "lucide-react";
import { Button } from "@/components/ui/button";

const PromptInput = () => {
  return (
    <div className="w-full max-w-2xl mx-auto mt-8 mb-12 animate-slide-up">
      <div className="relative bg-lovable-dark-secondary rounded-lg border border-lovable-gray-light overflow-hidden">
        <textarea
          className="w-full bg-transparent p-5 resize-none outline-none text-foreground placeholder:text-muted-foreground min-h-[100px]"
          placeholder="Ask Lovable to create an internal tool..."
        />
        <div className="p-3 border-t border-lovable-gray-light flex justify-between items-center">
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground gap-2">
              <Paperclip className="h-4 w-4" />
              <span className="text-sm">Attach</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground gap-2">
              <Import className="h-4 w-4" />
              <span className="text-sm">Import</span>
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="bg-lovable-gray-light border-none hover:bg-lovable-gray-medium text-sm">
              Public
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptInput;
