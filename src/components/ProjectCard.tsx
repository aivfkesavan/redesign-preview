
import React from 'react';
import { ExternalLink, Calendar } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  image: string;
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
      className={`bg-[#1A1F2C] border-[#33C3F0]/20 hover:border-[#8B5CF6] transition-all duration-300 
                 cursor-pointer h-full transform ${isHovered ? 'scale-105' : 'scale-100'}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <CardContent className="p-5 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-base font-medium text-white">{title}</h3>
          <div className="bg-[#221F26] hover:bg-[#8B5CF6]/20 rounded-full p-1.5 transition-colors">
            <ExternalLink className="h-4 w-4 text-[#8B5CF6]" />
          </div>
        </div>
        
        <div className="mt-auto pt-4">
          <Badge variant="outline" className="bg-[#221F26] border-[#33C3F0]/30 text-xs font-normal px-2 py-0.5 flex items-center gap-1 w-fit text-[#33C3F0]">
            <Calendar className="h-3 w-3" />
            {days} {days === 1 ? 'day' : 'days'} ago
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
