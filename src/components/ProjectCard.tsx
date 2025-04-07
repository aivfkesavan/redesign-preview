
import React from 'react';
import { Folder, FolderOpen } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  image?: string;
  days: number;
  isHovered?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  days, 
  isHovered = false,
  onMouseEnter,
  onMouseLeave,
  onClick
}) => {
  return (
    <Card 
      className={`group transition-all duration-300 cursor-pointer h-[170px] bg-white border-gray-200 rounded-lg overflow-hidden ${isHovered ? 'shadow-md border-gray-300' : 'shadow-sm'}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <CardContent className="p-0 h-full flex flex-col">
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-3">
              {isHovered ? (
                <FolderOpen className="h-8 w-8 text-black" />
              ) : (
                <Folder className="h-8 w-8 text-gray-700" />
              )}
              <div>
                <h3 className="text-base font-medium text-gray-900 truncate">{title}</h3>
                <p className="text-xs text-gray-500 mt-1">
                  {days} {days === 1 ? 'day' : 'days'} ago
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-1 bg-black"></div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
