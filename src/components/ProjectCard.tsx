
import React from 'react';
import { ExternalLink, Calendar } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  image: string; // We'll keep this in the props for compatibility but won't use it
  days: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, days }) => {
  return (
    <Card className="bg-lovable-dark-secondary border-lovable-gray-light hover:border-lovable-orange/70 transition-all duration-300 cursor-pointer group animate-fade-in h-full">
      <CardContent className="p-5 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-base font-medium">{title}</h3>
          <div className="bg-lovable-gray-light hover:bg-lovable-gray-medium rounded-full p-1.5 transition-colors">
            <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-foreground" />
          </div>
        </div>
        
        <div className="mt-auto pt-4">
          <Badge variant="outline" className="bg-lovable-dark border-lovable-gray-light text-xs font-normal px-2 py-0.5 flex items-center gap-1 w-fit">
            <Calendar className="h-3 w-3" />
            {days} {days === 1 ? 'day' : 'days'} ago
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
