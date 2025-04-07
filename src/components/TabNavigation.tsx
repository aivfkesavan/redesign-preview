
import { FolderOpen } from "lucide-react";

const TabNavigation = () => {
  return (
    <div className="my-8 animate-slide-up">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold text-gray-900">Recent Projects</h2>
          <span className="text-xs px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full font-medium">3</span>
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;
