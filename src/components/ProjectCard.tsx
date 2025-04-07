
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
  // Generate a random gradient for each project
  const gradientIndex = React.useMemo(() => Math.floor(Math.random() * 5), []);
  const gradients = [
    "from-[#6e42dd] to-[#8B5CF6]",
    "from-[#7847e3] to-[#9775fa]",
    "from-[#9775fa] to-[#8a63f3]",
    "from-[#8561f5] to-[#7045e0]",
    "from-[#7f57f1] to-[#6e42dd]"
  ];
  
  return (
    <Card 
      className={`group transition-all duration-300 cursor-pointer h-[190px] bg-[#161622]/90 border border-[#2F2763] hover:border-[#8B5CF6] rounded-xl overflow-hidden ${isHovered ? 'shadow-lg shadow-[#8B5CF6]/20 scale-[1.02]' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <CardContent className="p-0 h-full flex flex-col">
        <div className={`p-6 flex-1 flex flex-col`}>
          <div className="flex justify-between items-start mb-4">
            <div className={`flex-1 flex items-center gap-3`}>
              {isHovered ? (
                <FolderOpen className={`h-10 w-10 text-[#8B5CF6] transition-all duration-300`} />
              ) : (
                <Folder className={`h-10 w-10 text-[#8B5CF6] transition-all duration-300`} />
              )}
              <div>
                <h3 className="text-base font-medium text-white group-hover:text-[#8B5CF6] transition-colors truncate">{title}</h3>
                <Badge variant="outline" className="mt-1 bg-[#161622] border-[#2F2763] text-xs font-normal px-2 py-0.5 flex items-center gap-1 w-fit text-[#8B5CF6] group-hover:border-[#8B5CF6]/50 transition-colors">
                  <Calendar className="h-3 w-3" />
                  {days} {days === 1 ? 'day' : 'days'} ago
                </Badge>
              </div>
            </div>
            <div className={`bg-[#161622] border border-[#2F2763] rounded-full p-1.5 transition-colors ${isHovered ? 'bg-[#2F2763]' : ''}`}>
              <ExternalLink className="h-3.5 w-3.5 text-[#8B5CF6]" />
            </div>
          </div>
        </div>
        <div className={`h-1.5 bg-gradient-to-r ${gradients[gradientIndex]}`}></div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
