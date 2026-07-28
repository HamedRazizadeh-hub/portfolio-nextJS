import type { Project } from "@/types/project";

export function incrementProjectLikes(
  projects: Project[],
  projectId: string,
): Project[] {
  return projects.map((project) =>
    project.id === projectId
      ? {
          ...project,
          likes: project.likes + 1,
        }
      : project,
  );
}
