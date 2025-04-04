
import { FolderOpen, Clock, Star, Grid3X3, List } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const TabNavigation = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center my-8 animate-slide-up">
      <div className="flex items-center gap-3 mb-4 md:mb-0">
        <h2 className="text-xl font-bold text-white glow">Your Projects</h2>
        <span className="text-xs px-2 py-0.5 bg-[#2F2763] text-white/70 rounded-full">24</span>
      </div>
      
      <div className="flex justify-between w-full md:w-auto items-center">
        <Tabs defaultValue="projects" className="w-full max-w-md">
          <TabsList className="grid w-full grid-cols-3 bg-[#161622] border border-[#2F2763] p-1 rounded-xl">
            <TabsTrigger value="projects" className="flex items-center gap-1.5 rounded-lg data-[state=active]:bg-[#8B5CF6] data-[state=active]:text-white">
              <FolderOpen className="h-3.5 w-3.5" />
              <span className="text-xs">My Projects</span>
            </TabsTrigger>
            <TabsTrigger value="latest" className="flex items-center gap-1.5 rounded-lg data-[state=active]:bg-[#8B5CF6] data-[state=active]:text-white">
              <Clock className="h-3.5 w-3.5" />
              <span className="text-xs">Latest</span>
            </TabsTrigger>
            <TabsTrigger value="featured" className="flex items-center gap-1.5 rounded-lg data-[state=active]:bg-[#8B5CF6] data-[state=active]:text-white">
              <Star className="h-3.5 w-3.5" />
              <span className="text-xs">Featured</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="flex gap-2 ml-3">
          <Button variant="outline" size="sm" className="bg-[#161622] border-[#2F2763] text-[#8B5CF6] hover:text-white hover:bg-[#2F2763] h-8 w-8 p-0">
            <Grid3X3 className="h-3.5 w-3.5" />
          </Button>
          <Button variant="outline" size="sm" className="bg-[#161622] border-[#2F2763] text-[#8B5CF6] hover:text-white hover:bg-[#2F2763] h-8 w-8 p-0">
            <List className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;
