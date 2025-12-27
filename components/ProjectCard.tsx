import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article>
      <Image src={project.image} alt={project.title} width={400} height={300} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div>
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
        Lorem Ipsum
      </Link>
    </article>
  );
}
