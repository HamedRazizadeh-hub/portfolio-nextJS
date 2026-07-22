import type { Metadata } from "next";
import ProjectsList from "@/components/ProjectsList";

export const metadata: Metadata = {
  title: "Projects",
  description: "Frontend development projects created by Hamed Razizadeh.",
};

export default function ProjectsPage() {
  return (
    <section className="space-y-8">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Projects
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          Here are some projects I have built while learning frontend
          development.
        </p>
      </div>

      <ProjectsList />
    </section>
  );
}
