
import ProjectCard from "./ProjectCard";

// For each project, we'll use placeholder images that we would normally generate with a service
const projects = [
  {
    id: 1,
    title: "hai-ve-connectivity",
    image: "/placeholder.svg",
    days: 2,
  },
  {
    id: 2,
    title: "starlit-code-canvas",
    image: "/placeholder.svg",
    days: 2,
  },
  {
    id: 3,
    title: "cuddle-feature-kit",
    image: "/placeholder.svg",
    days: 2,
  },
  {
    id: 4,
    title: "theia-webcraft",
    image: "/placeholder.svg",
    days: 2,
  },
  {
    id: 5,
    title: "signaturesafe",
    image: "/placeholder.svg",
    days: 6,
  },
  {
    id: 6,
    title: "snapshot-revamp",
    image: "/placeholder.svg",
    days: 7,
  },
  {
    id: 7,
    title: "web-design-dreamweaver",
    image: "/placeholder.svg",
    days: 14,
  },
  {
    id: 8,
    title: "demo-landing-creator",
    image: "/placeholder.svg",
    days: 14,
  },
];

const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
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
