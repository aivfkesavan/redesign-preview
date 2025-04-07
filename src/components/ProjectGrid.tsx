import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

const projects = [
  {
    id: 1,
    title: "ai-visual-generator",
    image: "",
    days: 1,
  },
  {
    id: 2,
    title: "nebula-dashboard",
    image: "",
    days: 2,
  },
  {
    id: 3,
    title: "pulse-analytics",
    image: "",
    days: 3,
  },
  {
    id: 4,
    title: "quantum-design-system",
    image: "",
    days: 4,
  },
  {
    id: 5,
    title: "cipher-auth-service",
    image: "",
    days: 5,
  },
  {
    id: 6,
    title: "echo-messaging-app",
    image: "",
    days: 7,
  },
  {
    id: 7,
    title: "fusion-commerce",
    image: "",
    days: 10,
  },
  {
    id: 8,
    title: "orbit-portfolio",
    image: "",
    days: 14,
  },
];

const ProjectGrid = () => {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleProjectClick = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };

  const handleViewMore = () => {
    navigate('/projects');
  };

  return (
    <div className="mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ProjectCard
              title={project.title}
              image={project.image}
              days={project.days}
              isHovered={hoveredId === project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => handleProjectClick(project.id)}
            />
          </motion.div>
        ))}
      </div>
      
      <div className="flex justify-center">
        <Button 
          variant="outline" 
          onClick={handleViewMore} 
          className="border border-gray-800 bg-white text-black hover:bg-gray-100 flex items-center gap-2"
        >
          View all projects
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ProjectGrid;
