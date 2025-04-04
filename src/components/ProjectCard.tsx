
import React from 'react';
import { Calendar, ExternalLink, Code, Sparkles } from 'lucide-react';
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
      className={`group overflow-hidden bg-[#161622]/90 rounded-xl border border-[#2F2763] hover:border-[#8B5CF6] transition-all duration-300 cursor-pointer ${isHovered ? 'shadow-lg shadow-[#8B5CF6]/20 scale-[1.02]' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className={`h-32 bg-gradient-to-br ${gradients[gradientIndex]} flex items-center justify-center overflow-hidden relative`}>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0icGF0dGVybiIgeD0iMCIgeT0iMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj4KICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMC41Ii8+CiAgPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz4KPC9zdmc+')]"></div>
          <div className="absolute top-2 right-2">
            <Badge variant="outline" className="bg-white/10 border-white/20 text-white/90 text-xs py-0 px-1.5 h-5 font-normal">
              <Sparkles className="h-3 w-3 mr-1" />
              New
            </Badge>
          </div>
          <Code className={`h-16 w-16 text-white/30 transition-all duration-300 ${isHovered ? 'scale-110 rotate-12' : ''}`} />
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-base font-medium text-white group-hover:text-[#8B5CF6] transition-colors">{title}</h3>
            <div className={`bg-[#161622] border border-[#2F2763] rounded-full p-1.5 transition-colors ${isHovered ? 'bg-[#2F2763]' : ''}`}>
              <ExternalLink className="h-3.5 w-3.5 text-[#8B5CF6]" />
            </div>
          </div>
          
          <Badge variant="outline" className="bg-[#161622] border-[#2F2763] text-xs font-normal px-2 py-0.5 flex items-center gap-1 w-fit text-[#8B5CF6] group-hover:border-[#8B5CF6]/50 transition-colors">
            <Calendar className="h-3 w-3" />
            {days} {days === 1 ? 'day' : 'days'} ago
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
