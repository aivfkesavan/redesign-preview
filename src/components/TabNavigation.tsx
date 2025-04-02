
import { FolderClosed, Clock, Star } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabNavigation = () => {
  return (
    <div className="flex justify-center my-8 animate-slide-up">
      <Tabs defaultValue="projects" className="w-full max-w-md">
        <TabsList className="grid w-full grid-cols-3 bg-lovable-dark-secondary">
          <TabsTrigger value="projects" className="flex items-center gap-2 data-[state=active]:bg-lovable-gray-medium">
            <FolderClosed className="h-4 w-4" />
            <span>My Projects</span>
          </TabsTrigger>
          <TabsTrigger value="latest" className="flex items-center gap-2 data-[state=active]:bg-lovable-gray-medium">
            <Clock className="h-4 w-4" />
            <span>Latest</span>
          </TabsTrigger>
          <TabsTrigger value="featured" className="flex items-center gap-2 data-[state=active]:bg-lovable-gray-medium">
            <Star className="h-4 w-4" />
            <span>Featured</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default TabNavigation;
