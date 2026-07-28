import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import type { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";

const testProject: Project = {
  id: "football-teams-explorer",
  title: "Football Teams Explorer",
  description: "An application for exploring football teams.",
  technologies: ["React", "TypeScript", "API"],
  likes: 4,
};

describe("ProjectCard", () => {
  it("renders the project information", () => {
    render(
      <ProjectCard project={testProject} onLike={vi.fn()} isLiking={false} />,
    );

    expect(
      screen.getByRole("heading", {
        name: "Football Teams Explorer",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /view project details/i,
      }),
    ).toHaveAttribute("href", "/projects/football-teams-explorer");
  });

  it("calls onLike with the project id when the user clicks the like button", async () => {
    const user = userEvent.setup();
    const handleLike = vi.fn();

    render(
      <ProjectCard
        project={testProject}
        onLike={handleLike}
        isLiking={false}
      />,
    );

    await user.click(
      screen.getByRole("button", {
        name: /4/,
      }),
    );

    expect(handleLike).toHaveBeenCalledTimes(1);

    expect(handleLike).toHaveBeenCalledWith("football-teams-explorer");
  });

  it("disables the like button while a like is being added", () => {
    render(
      <ProjectCard project={testProject} onLike={vi.fn()} isLiking={true} />,
    );

    const likeButton = screen.getByRole("button", {
      name: /adding/i,
    });

    expect(likeButton).toBeDisabled();
  });
});
