
import { FolderClosed, Clock, Star } from "lucide-react";

const TabNavigation = () => {
  return (
    <div className="flex justify-center gap-3 my-8 animate-slide-up">
      <button className="nav-tab active flex items-center gap-2">
        <FolderClosed className="h-4 w-4" />
        <span>My Projects</span>
      </button>
      <button className="nav-tab flex items-center gap-2">
        <Clock className="h-4 w-4" />
        <span>Latest</span>
      </button>
      <button className="nav-tab flex items-center gap-2">
        <Star className="h-4 w-4" />
        <span>Featured</span>
      </button>
    </div>
  );
};

export default TabNavigation;
