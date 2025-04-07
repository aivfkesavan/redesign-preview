
import React from 'react';
import { Calendar, ExternalLink, Folder, FolderOpen } from 'lucide-react';
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
      className={`group transition-all duration-300 cursor-pointer h-[190px] bg-white/5 border border-white/10 rounded-xl overflow-hidden ${isHovered ? 'shadow-lg shadow-black/20 scale-[1.02]' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <CardContent className="p-0 h-full flex flex-col">
        <div className={`p-6 flex-1 flex flex-col`}>
          <div className="flex justify-between items-start mb-4">
            <div className={`flex-1 flex items-center gap-3`}>
              {isHovered ? (
                <FolderOpen className={`h-10 w-10 text-gray-800 transition-all duration-300`} />
              ) : (
                <Folder className={`h-10 w-10 text-gray-800 transition-all duration-300`} />
              )}
              <div>
                <h3 className="text-base font-medium text-black/90 group-hover:text-black/70 transition-colors truncate">{title}</h3>
                <Badge variant="outline" className="mt-1 bg-white/5 border-white/10 text-xs font-normal px-2 py-0.5 flex items-center gap-1 w-fit text-gray-700 group-hover:border-black/30 transition-colors">
                  <Calendar className="h-3 w-3" />
                  {days} {days === 1 ? 'day' : 'days'} ago
                </Badge>
              </div>
            </div>
            <div className={`bg-white/5 border border-white/10 rounded-full p-1.5 transition-colors ${isHovered ? 'bg-white/10' : ''}`}>
              <ExternalLink className="h-3.5 w-3.5 text-gray-800" />
            </div>
          </div>
        </div>
        <div className={`h-1.5 bg-gradient-to-r from-gray-200 to-gray-300`}></div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
