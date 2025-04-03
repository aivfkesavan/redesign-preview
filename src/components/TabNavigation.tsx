
import { FolderClosed, Clock, Star, Grid3X3, List } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const TabNavigation = () => {
  return (
    <div className="flex justify-between items-center my-8 px-6 animate-slide-up">
      <Tabs defaultValue="projects" className="w-full max-w-md">
        <TabsList className="grid w-full grid-cols-3 bg-[#221F26]">
          <TabsTrigger value="projects" className="flex items-center gap-2 data-[state=active]:bg-[#8B5CF6] data-[state=active]:text-white">
            <FolderClosed className="h-4 w-4" />
            <span>My Projects</span>
          </TabsTrigger>
          <TabsTrigger value="latest" className="flex items-center gap-2 data-[state=active]:bg-[#8B5CF6] data-[state=active]:text-white">
            <Clock className="h-4 w-4" />
            <span>Latest</span>
          </TabsTrigger>
          <TabsTrigger value="featured" className="flex items-center gap-2 data-[state=active]:bg-[#8B5CF6] data-[state=active]:text-white">
            <Star className="h-4 w-4" />
            <span>Featured</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
      
      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="bg-[#221F26] border-[#33C3F0]/20 text-[#33C3F0] hover:text-white hover:bg-[#33C3F0]/20">
          <Grid3X3 className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="sm" className="bg-[#221F26] border-[#33C3F0]/20 text-[#33C3F0] hover:text-white hover:bg-[#33C3F0]/20">
          <List className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default TabNavigation;
