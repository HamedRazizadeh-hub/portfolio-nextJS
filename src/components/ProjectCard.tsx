import Link from "next/link";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  onLike: (projectId: string) => void;
  isLiking: boolean;
};

export default function ProjectCard({
  project,
  onLike,
  isLiking,
}: ProjectCardProps) {
  return (
    <article className="flex min-h-72 flex-col rounded-2xl border border-slate-300 bg-white/85 px-6 py-8 text-center shadow-lg backdrop-blur transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
      <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
        {project.title}
      </h2>

      <p className="leading-relaxed text-slate-700 dark:text-slate-300">
        {project.description}
      </p>

      <ul className="mt-6 flex flex-wrap justify-center gap-2">
        {project.technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            {technology}
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => onLike(project.id)}
        disabled={isLiking}
        className="mx-auto mt-6 rounded-lg bg-rose-100 px-4 py-2 font-semibold text-rose-700 transition hover:bg-rose-200 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-rose-950 dark:text-rose-300"
      >
        ❤️ {project.likes}
        {isLiking && " Adding..."}
      </button>

      <Link
        href={`/projects/${project.id}`}
        className="mt-auto pt-8 font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
      >
        View project details →
      </Link>
    </article>
  );
}
