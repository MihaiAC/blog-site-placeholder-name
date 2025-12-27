import ProjectCard from "@/components/ProjectCard";
import { getAllProjects, getAllProjectTags } from "@/data/projects/projects";

export default function ProjectsPage() {
  const projects = getAllProjects();
  const tags = getAllProjectTags();

  return (
    <div>
      <h1>Lorem Ipsum Dolor</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <section>
        <h2>Consectetur Adipiscing</h2>
        <div>
          {tags.map((tag) => (
            <button key={tag}>{tag}</button>
          ))}
        </div>
      </section>

      <section>
        <h2>Sed Do Eiusmod</h2>
        <div>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
