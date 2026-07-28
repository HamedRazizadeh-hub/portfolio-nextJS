import type { Project } from "@/types/project";

export function findProjectById(
  projects: Project[],
  projectId: string,
): Project | undefined {
  return projects.find((project) => project.id === projectId);
}
