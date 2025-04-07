
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
      className={`group transition-all duration-300 cursor-pointer h-[180px] bg-white border border-gray-200 hover:border-gray-800 rounded-xl overflow-hidden shadow-sm ${isHovered ? 'shadow-md scale-[1.02]' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <CardContent className="p-0 h-full flex flex-col">
        <div className={`p-6 flex-1 flex flex-col`}>
          <div className="flex justify-between items-start mb-4">
            <div className={`flex-1 flex items-center gap-3`}>
              {isHovered ? (
                <FolderOpen className={`h-10 w-10 text-black transition-all duration-300`} />
              ) : (
                <Folder className={`h-10 w-10 text-gray-700 transition-all duration-300`} />
              )}
              <div>
                <h3 className="text-base font-medium text-gray-900 group-hover:text-black transition-colors truncate">{title}</h3>
                <Badge variant="outline" className="mt-1 bg-white border-gray-200 text-xs font-normal px-2 py-0.5 flex items-center gap-1 w-fit text-gray-600">
                  {days} {days === 1 ? 'day' : 'days'} ago
                </Badge>
              </div>
            </div>
          </div>
        </div>
        <div className={`h-1 bg-gray-800 ${isHovered ? 'opacity-100' : 'opacity-30'} transition-opacity`}></div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
