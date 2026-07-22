"use client";

import { useQuery } from "@tanstack/react-query";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/types/project";

async function fetchProjects(): Promise<Project[]> {
  const response = await fetch("/api/projects");

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  return response.json();
}

export default function ProjectsList() {
  const {
    data: projects = [],
    isPending,
    isError,
  } = useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: fetchProjects,
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
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
