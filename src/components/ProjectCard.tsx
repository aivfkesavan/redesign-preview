
import React from 'react';
import { Calendar, ExternalLink, Code } from 'lucide-react';
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
      className={`project-card ${isHovered ? 'card-glow' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="h-28 bg-gradient-to-br from-[#2F2763] to-[#161622] flex items-center justify-center overflow-hidden">
          <Code className={`h-16 w-16 text-[#8B5CF6]/25 transition-all duration-300 ${isHovered ? 'scale-110' : ''}`} />
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-base font-medium text-white">{title}</h3>
            <div className={`bg-[#161622] border border-[#2F2763] rounded-full p-1 transition-colors ${isHovered ? 'bg-[#2F2763]' : ''}`}>
              <ExternalLink className="h-3.5 w-3.5 text-[#8B5CF6]" />
            </div>
          </div>
          
          <Badge variant="outline" className="bg-[#161622] border-[#2F2763] text-xs font-normal px-2 py-0.5 flex items-center gap-1 w-fit text-[#8B5CF6]">
            <Calendar className="h-3 w-3" />
            {days} {days === 1 ? 'day' : 'days'} ago
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
