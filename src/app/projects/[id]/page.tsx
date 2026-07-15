import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl rounded-3xl bg-white/85 p-8 shadow-xl ring-1 ring-slate-300 backdrop-blur dark:bg-slate-900 dark:ring-slate-800">
      <Link
        href="/projects"
        className="font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
      >
        ← Back to projects
      </Link>

      <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        {project.title}
      </h1>

      <p className="mt-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
        {project.description}
      </p>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Technologies
        </h2>

        <ul className="mt-4 flex flex-wrap gap-3">
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full bg-blue-100 px-4 py-2 font-medium text-blue-800 dark:bg-blue-950 dark:text-blue-200"
            >
              {technology}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
