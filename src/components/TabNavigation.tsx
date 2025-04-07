
import { FolderOpen, Clock, Star, GridIcon, List } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const TabNavigation = () => {
  return (
    <div className="my-8 animate-slide-up">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold text-black">Your Projects</h2>
          <span className="text-xs px-2 py-0.5 bg-black text-white rounded-full font-medium">24</span>
        </div>
        
        <div className="flex flex-col sm:flex-row w-full md:w-auto items-center gap-3">
          <Tabs defaultValue="projects" className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-3 bg-white border border-gray-200 p-1 rounded-md">
              <TabsTrigger 
                value="projects" 
                className="flex items-center gap-1.5 rounded data-[state=active]:bg-black data-[state=active]:text-white"
              >
                <FolderOpen className="h-3.5 w-3.5" />
                <span className="text-xs font-medium">My Projects</span>
              </TabsTrigger>
              <TabsTrigger 
                value="latest" 
                className="flex items-center gap-1.5 rounded data-[state=active]:bg-black data-[state=active]:text-white"
              >
                <Clock className="h-3.5 w-3.5" />
                <span className="text-xs font-medium">Latest</span>
              </TabsTrigger>
              <TabsTrigger 
                value="featured" 
                className="flex items-center gap-1.5 rounded data-[state=active]:bg-black data-[state=active]:text-white"
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
              className="bg-white border-gray-200 text-black hover:bg-gray-50 h-8 w-8 p-0 rounded"
            >
              <GridIcon className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-white border-gray-200 text-black hover:bg-gray-50 h-8 w-8 p-0 rounded"
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
