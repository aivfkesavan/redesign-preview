
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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

interface ProjectGridProps {
  limit?: number;
  showViewMore?: boolean;
}

const ProjectGrid = ({ limit, showViewMore = false }: ProjectGridProps) => {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleProjectClick = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };

  const handleViewMore = () => {
    navigate("/projects");
  };

  // If limit is provided, only show that many projects
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -5 }}
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
      
      {showViewMore && (
        <div className="flex justify-center">
          <Button 
            onClick={handleViewMore}
            className="purple-gradient text-white gap-2 px-6"
          >
            <span>View All Projects</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProjectGrid;
