
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  image: string;
  days: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, days }) => {
  return (
    <Card className="overflow-hidden bg-lovable-dark-secondary border-lovable-gray-light hover:border-lovable-orange/70 transition-all duration-200 cursor-pointer group animate-fade-in">
      <div className="relative h-36 overflow-hidden bg-lovable-gray-dark">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
        <img src={image} alt={title} className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105" />
      </div>
      <CardContent className="p-3 flex justify-between items-center">
        <div>
          <h3 className="text-sm font-medium truncate">{title}</h3>
          <p className="text-xs text-muted-foreground">Edited {days} days ago</p>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
          <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-foreground" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
