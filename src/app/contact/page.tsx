import type { Metadata } from "next";
import SubmitButton from "@/components/SubmitButton";
import { sendMessage } from "./actions";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Hamed Razizadeh about frontend development opportunities and projects.",
};

export default function ContactPage() {
  return (
    <section className="space-y-8">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Contact
        </h1>

        <p className="mt-4 max-w-2xl text-center text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          Send me a message using the form below.
        </p>
      </div>

      <form
        action={sendMessage}
        className="mx-auto w-full max-w-5xl space-y-6 rounded-3xl bg-white/85 p-8 shadow-lg ring-1 ring-slate-300 backdrop-blur dark:bg-slate-900 dark:ring-slate-800"
      >
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
          >
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            minLength={2}
            autoFocus
            className="w-full rounded-2xl border border-slate-300 bg-white p-3 text-slate-900 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows={7}
            required
            minLength={20}
            className="min-h-40 w-full rounded-2xl border border-slate-300 bg-white p-3 text-slate-900 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
          />
        </div>

        <div className="flex justify-center">
          <SubmitButton />
        </div>
      </form>
    </section>
  );
}
