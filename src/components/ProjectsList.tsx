"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/types/project";
import { incrementProjectLikes } from "@/utils/incrementProjectLikes";

type LikeMutationContext = {
  previousProjects: Project[] | undefined;
};

async function fetchProjects(): Promise<Project[]> {
  const response = await fetch("/api/projects");

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  return response.json();
}

export default function ProjectsList() {
  const queryClient = useQueryClient();

  const {
    data: projects = [],
    isPending,
    isError,
  } = useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  const likeMutation = useMutation<string, Error, string, LikeMutationContext>({
    mutationFn: async (projectId) => {
      await new Promise((resolve) => setTimeout(resolve, 500));

      return projectId;
    },

    onMutate: async (projectId) => {
      await queryClient.cancelQueries({
        queryKey: ["projects"],
      });

      const previousProjects = queryClient.getQueryData<Project[]>([
        "projects",
      ]);

      queryClient.setQueryData<Project[]>(
        ["projects"],
        (currentProjects = []) =>
          incrementProjectLikes(currentProjects, projectId),
      );

      return {
        previousProjects,
      };
    },

    onError: (_error, _projectId, context) => {
      if (context?.previousProjects) {
        queryClient.setQueryData(["projects"], context.previousProjects);
      }
    },

    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
    },
  });

  if (isPending) {
    return <p className="text-center">Loading...</p>;
  }

  if (isError) {
    return <p className="text-center text-red-600">Could not load projects.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onLike={(projectId) => likeMutation.mutate(projectId)}
          isLiking={
            likeMutation.isPending && likeMutation.variables === project.id
          }
        />
      ))}
    </div>
  );
}
