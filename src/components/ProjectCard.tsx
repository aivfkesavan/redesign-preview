
import React from 'react';
import { ExternalLink, Calendar } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  image: string;
  days: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, days }) => {
  return (
    <Card className="overflow-hidden bg-lovable-dark-secondary border-lovable-gray-light hover:border-lovable-orange/70 transition-all duration-300 cursor-pointer group animate-fade-in h-full">
      <div className="relative h-44 overflow-hidden bg-lovable-gray-dark">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <img src={image} alt={title} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" />
        <div className="absolute bottom-3 left-3 z-20">
          <Badge variant="outline" className="bg-black/40 backdrop-blur-sm border-white/10 text-xs font-normal px-2 py-0.5 flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {days} {days === 1 ? 'day' : 'days'} ago
          </Badge>
        </div>
      </div>
      <CardContent className="p-4 flex justify-between items-center">
        <div>
          <h3 className="text-sm font-medium truncate">{title}</h3>
          <p className="text-xs text-muted-foreground mt-0.5 opacity-70">React Project</p>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-lovable-gray-light hover:bg-lovable-gray-medium rounded-full p-1.5">
          <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-foreground" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
