
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  image: string;
  days: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, days }) => {
  return (
    <div className="project-card group animate-fade-in">
      <div className="project-card-img-container">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
        <img src={image} alt={title} className="project-card-img" />
      </div>
      <div className="p-3 flex justify-between items-center">
        <div>
          <h3 className="text-sm font-medium truncate">{title}</h3>
          <p className="text-xs text-muted-foreground">Edited {days} days ago</p>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
          <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-foreground" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
