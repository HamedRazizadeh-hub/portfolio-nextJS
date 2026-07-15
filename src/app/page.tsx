import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Portfolio homepage of Hamed Razizadeh, frontend developer student.",
};

export default function HomePage() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Tailwind",
  ];

  return (
    <section className="space-y-8">
      <div className="flex flex-col items-center rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-12 text-center text-white shadow-xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-100">
          Frontend Developer Student
        </p>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Hamed Razizadeh
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-blue-50">
          I am learning frontend development and building modern, responsive web
          applications with React, TypeScript, Next.js, and Tailwind CSS.
        </p>
      </div>

      <div className="flex flex-col items-center rounded-3xl bg-white/85 p-8 text-center shadow-lg ring-1 ring-slate-300 backdrop-blur dark:bg-slate-900 dark:ring-slate-800">
        <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
          About me
        </h2>

        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          I have a background in architecture and design. I enjoy creating
          clean, useful, and accessible user interfaces. My goal is to combine
          my design experience with frontend development skills to build
          practical web applications.
        </p>
      </div>

      <div className="flex flex-col items-center rounded-3xl bg-white/85 p-8 text-center shadow-lg ring-1 ring-slate-300 backdrop-blur dark:bg-slate-900 dark:ring-slate-800">
        <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
          Skills
        </h2>

        <ul className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-4 text-center sm:grid-cols-3 md:grid-cols-6">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-2xl bg-slate-100 px-4 py-4 font-semibold text-slate-700 shadow-sm transition hover:-translate-y-1 hover:bg-blue-600 hover:text-white dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-blue-600"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
