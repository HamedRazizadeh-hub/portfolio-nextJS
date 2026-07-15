import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div className="mx-auto max-w-2xl rounded-3xl bg-white/85 p-8 text-center shadow-xl dark:bg-slate-900">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
        Project not found
      </h1>

      <p className="mt-4 text-slate-600 dark:text-slate-300">
        The project you are looking for does not exist.
      </p>

      <Link
        href="/projects"
        className="mt-6 inline-block rounded-full bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Back to projects
      </Link>
    </div>
  );
}
