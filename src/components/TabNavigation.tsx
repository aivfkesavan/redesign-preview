
import { FolderOpen, Clock, Star, GridIcon, List } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const TabNavigation = () => {
  return (
    <div className="my-10 animate-slide-up">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold text-white text-gradient">Your Projects</h2>
          <span className="text-xs px-2.5 py-1 bg-[#2F2763] text-[#8B5CF6] rounded-full font-medium">24</span>
        </div>
        
        <div className="flex flex-col sm:flex-row w-full md:w-auto items-center gap-4">
          <Tabs defaultValue="projects" className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-3 bg-[#161622]/80 border border-[#2F2763] p-1 rounded-xl shadow-lg">
              <TabsTrigger 
                value="projects" 
                className="flex items-center gap-1.5 rounded-lg data-[state=active]:bg-gradient-to-br data-[state=active]:from-[#8B5CF6] data-[state=active]:to-[#7847e3] data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                <FolderOpen className="h-3.5 w-3.5" />
                <span className="text-xs font-medium">My Projects</span>
              </TabsTrigger>
              <TabsTrigger 
                value="latest" 
                className="flex items-center gap-1.5 rounded-lg data-[state=active]:bg-gradient-to-br data-[state=active]:from-[#8B5CF6] data-[state=active]:to-[#7847e3] data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                <Clock className="h-3.5 w-3.5" />
                <span className="text-xs font-medium">Latest</span>
              </TabsTrigger>
              <TabsTrigger 
                value="featured" 
                className="flex items-center gap-1.5 rounded-lg data-[state=active]:bg-gradient-to-br data-[state=active]:from-[#8B5CF6] data-[state=active]:to-[#7847e3] data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                <Star className="h-3.5 w-3.5" />
                <span className="text-xs font-medium">Featured</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-[#161622]/80 border-[#2F2763] text-[#8B5CF6] hover:text-white hover:bg-[#2F2763] h-9 w-9 p-0 rounded-lg shadow-md"
            >
              <GridIcon className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-[#161622]/80 border-[#2F2763] text-[#8B5CF6] hover:text-white hover:bg-[#2F2763] h-9 w-9 p-0 rounded-lg shadow-md"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;
