
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "hai-ve-connectivity",
    image: "", // Keep empty string for compatibility
    days: 2,
  },
  {
    id: 2,
    title: "starlit-code-canvas",
    image: "",
    days: 2,
  },
  {
    id: 3,
    title: "cuddle-feature-kit",
    image: "",
    days: 2,
  },
  {
    id: 4,
    title: "theia-webcraft",
    image: "",
    days: 2,
  },
  {
    id: 5,
    title: "signaturesafe",
    image: "",
    days: 6,
  },
  {
    id: 6,
    title: "snapshot-revamp",
    image: "",
    days: 7,
  },
  {
    id: 7,
    title: "web-design-dreamweaver",
    image: "",
    days: 14,
  },
  {
    id: 8,
    title: "demo-landing-creator",
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 mb-12 animate-fade-in">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          image={project.image}
          days={project.days}
          isHovered={hoveredId === project.id}
          onMouseEnter={() => setHoveredId(project.id)}
          onMouseLeave={() => setHoveredId(null)}
          onClick={() => handleProjectClick(project.id)}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
