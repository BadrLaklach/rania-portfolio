"use client";

import { useLanguage } from "@/lib/useLanguage";

interface ProjectCardProps {
  images: string[];
  title: string;
  description: string;
  date: string;
  tags: string[];
}

export default function ProjectCard({ title, description, date, tags }: ProjectCardProps) {
  const { language } = useLanguage();
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:bg-[#1a1a1a]">
      <div className="flex h-36 items-end bg-gradient-to-br from-slate-200 via-slate-100 to-gray-50 p-6 dark:from-slate-800 dark:via-slate-900 dark:to-[#1a1a1a]"><span className="text-5xl font-semibold text-slate-400 dark:text-slate-600">{title.slice(0, 1)}</span></div>
      <div className="p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>{date && <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>}</div>
        <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">{description}</p>
        <div className="mt-5 flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">{tag}</span>)}</div>
        <span className="sr-only">{language === "fr" ? "Projet académique" : "Academic project"}</span>
      </div>
    </article>
  );
}
