export interface Project {
  id: string;
  title: string;
  description: string;
  githubUrl: string;
  tags: string[];
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: "neural-viz",
    title: "Lorem Ipsum Dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    githubUrl: "https://example.com",
    tags: ["Python", "TensorFlow", "React", "D3.js"],
    imageUrl: "placeholder.jpg",
  },
  {
    id: "task-queue",
    title: "Consectetur Adipiscing",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    githubUrl: "https://example.com",
    tags: ["Go", "Redis", "Docker", "Kubernetes"],
    imageUrl: "placeholder.jpg",
  },
  {
    id: "md-blog",
    title: "Sed Do Eiusmod",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    githubUrl: "https://example.com",
    tags: ["TypeScript", "Next.js", "MDX", "TailwindCSS"],
    imageUrl: "placeholder.jpg",
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectsByTag(tag: string): Project[] {
  return projects.filter((p) => p.tags.includes(tag));
}

export function getAllProjectTags(): string[] {
  const tagSet = new Set<string>();
  projects.forEach((project) => {
    project.tags.forEach((tag) => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}
