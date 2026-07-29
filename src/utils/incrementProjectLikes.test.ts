import { describe, expect, it } from "vitest";
import type { Project } from "@/types/project";
import { incrementProjectLikes } from "./incrementProjectLikes";

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
    likes: 0,
  },
];

describe("incrementProjectLikes", () => {
  it("increments the likes of the matching project", () => {
    const result = incrementProjectLikes(testProjects, "football-app");

    expect(result[0].likes).toBe(5);
    expect(result[1].likes).toBe(0);
  });

  it("does not change any likes when the project id does not exist", () => {
    const result = incrementProjectLikes(testProjects, "unknown-project");

    expect(result).toEqual(testProjects);
  });

  it("increments a project with zero likes to one", () => {
    const result = incrementProjectLikes(testProjects, "cookbook");

    expect(result[1].likes).toBe(1);
  });

  it("does not mutate the original projects array", () => {
    incrementProjectLikes(testProjects, "football-app");

    expect(testProjects[0].likes).toBe(4);
  });
});
