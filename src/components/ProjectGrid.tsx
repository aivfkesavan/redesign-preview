
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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

  return (
    <div className="mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            whileHover={{ y: -2 }}
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
      
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              href="#" 
              className="text-gray-700 border-gray-200 bg-white hover:bg-gray-50" 
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink 
              href="#" 
              isActive 
              className="bg-black text-white border-black hover:bg-gray-800"
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink 
              href="#" 
              className="text-gray-700 border-gray-200 bg-white hover:bg-gray-50"
            >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink 
              href="#" 
              className="text-gray-700 border-gray-200 bg-white hover:bg-gray-50"
            >
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext 
              href="#" 
              className="text-gray-700 border-gray-200 bg-white hover:bg-gray-50" 
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ProjectGrid;
