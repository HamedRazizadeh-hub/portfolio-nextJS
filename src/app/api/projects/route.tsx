import { NextResponse } from "next/server";
import { getProjects } from "@/data/projects";

export async function GET() {
  try {
    const projects = await getProjects();

    return NextResponse.json(projects);
  } catch {
    return NextResponse.json(
      {
        message: "Failed to load projects",
      },
      {
        status: 500,
      },
    );
  }
}
