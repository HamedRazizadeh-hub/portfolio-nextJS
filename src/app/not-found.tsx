import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-bold text-slate-800 dark:text-slate-200">
        Page not found
      </h2>

      <p className="mt-3 text-slate-600 dark:text-slate-400">
        The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-full bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Back to home
      </Link>
    </main>
  );
}
