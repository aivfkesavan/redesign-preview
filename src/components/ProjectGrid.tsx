
import ProjectCard from "./ProjectCard";

// Use more realistic placeholder images
const projects = [
  {
    id: 1,
    title: "hai-ve-connectivity",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&auto=format&fit=crop&q=60",
    days: 2,
  },
  {
    id: 2,
    title: "starlit-code-canvas",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop&q=60",
    days: 2,
  },
  {
    id: 3,
    title: "cuddle-feature-kit",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=60",
    days: 2,
  },
  {
    id: 4,
    title: "theia-webcraft",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop&q=60",
    days: 2,
  },
  {
    id: 5,
    title: "signaturesafe",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&auto=format&fit=crop&q=60",
    days: 6,
  },
  {
    id: 6,
    title: "snapshot-revamp",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop&q=60",
    days: 7,
  },
  {
    id: 7,
    title: "web-design-dreamweaver",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=60",
    days: 14,
  },
  {
    id: 8,
    title: "demo-landing-creator",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop&q=60",
    days: 14,
  },
];

const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-4 mb-12">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          image={project.image}
          days={project.days}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
