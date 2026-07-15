"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { dark, toggleDark } = useTheme();

  function getLinkClass(href: string) {
    const isActive =
      href === "/" ? pathname === "/" : pathname.startsWith(href);

    return isActive
      ? "rounded-full bg-blue-600 px-4 py-2 font-semibold text-white shadow-sm"
      : "rounded-full px-4 py-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white";
  }

  return (
    <header className="sticky top-0 z-10 border-b border-white/60 bg-white/80 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Image
            className="h-20 w-20 rounded-full object-cover shadow-md ring-4 ring-white dark:ring-slate-800"
            src="/profile.jpg"
            alt="Portrait of Hamed Razizadeh"
            width={80}
            height={80}
            priority
          />

          <div>
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-tight text-slate-900 hover:text-blue-600 dark:text-white"
            >
              Hamed Razizadeh
            </Link>

            <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
              Frontend Developer Student
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          <nav aria-label="Main navigation">
            <ul className="flex flex-wrap gap-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={getLinkClass(link.href)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="w-fit rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 dark:ring-offset-slate-950"
            type="button"
            onClick={toggleDark}
            aria-label="Toggle dark mode"
          >
            {dark ? "Light mode" : "Dark mode"}
          </button>
        </div>
      </div>
    </header>
  );
}
