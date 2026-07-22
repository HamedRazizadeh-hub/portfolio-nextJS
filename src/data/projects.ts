import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "football-teams-explorer",
    title: "Football Teams Explorer",
    description:
      "A React and TypeScript application for exploring football teams and data from a football API.",
    technologies: ["React", "TypeScript", "API", "Vite"],
    likes: 4,
  },
  {
    id: "c55-cookbook",
    title: "C55 Cookbook",
    description:
      "A group project for discovering recipes, viewing cohort dishes, and saving favourite meals.",
    technologies: ["JavaScript", "Express", "SQLite", "TheMealDB API"],
    likes: 3,
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A personal portfolio originally built with React Router and Vite, now migrated to the Next.js App Router.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    likes: 5,
  },
];

export async function getProjects(): Promise<Project[]> {
  return projects;
}

export async function getProjectById(id: string): Promise<Project | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 800));

  return projects.find((project) => project.id === id);
}
