import { describe, expect, it } from "vitest";
import type { Project } from "@/types/project";
import { findProjectById } from "./findProjectById";

const testProjects: Project[] = [
  {
    id: "football-app",
    title: "Football App",
    description: "A football teams application.",
    technologies: ["React", "TypeScript"],
    likes: 4,
  },
  {
    id: "cookbook",
    title: "Cookbook",
    description: "A recipe discovery application.",
    technologies: ["JavaScript", "API"],
    likes: 3,
  },
];

describe("findProjectById", () => {
  it("returns the matching project when the id exists", () => {
    const result = findProjectById(testProjects, "football-app");

    expect(result).toEqual(testProjects[0]);
  });

  it("returns undefined when the project id does not exist", () => {
    const result = findProjectById(testProjects, "unknown-project");

    expect(result).toBeUndefined();
  });

  it("returns undefined when the project id is empty", () => {
    const result = findProjectById(testProjects, "");

    expect(result).toBeUndefined();
  });
});
