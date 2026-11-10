"use client";

import { useLanguage } from "@/lib/useLanguage";

export default function Experience() {
  const { t } = useLanguage();
  return (
    <section id={t.sections.experience} className="bg-gray-50 py-24 dark:bg-[#121212]">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <div className="mb-12 flex items-end gap-6"><h2 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-6xl">{t.experience.title}</h2><div className="mb-2 h-[3px] flex-1 bg-gray-900/30 dark:bg-white/30" /></div>
        <div className="space-y-6">
          {t.experience.items.map((item) => (
            <article key={item.id} className="rounded-2xl bg-white p-7 shadow-sm dark:bg-[#1a1a1a]">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div><h3 className="text-xl font-bold uppercase text-gray-900 dark:text-white">{item.company}</h3><p className="mt-1 text-gray-700 dark:text-gray-300">{item.role} · {item.location}</p></div>
                <span className="text-sm italic text-gray-500 dark:text-gray-400">{item.date}</span>
              </div>
              <ul className="mt-5 space-y-3">{item.achievements.map((achievement) => <li key={achievement} className="flex gap-3 leading-relaxed text-gray-700 dark:text-gray-300"><span className="font-bold">•</span><span>{achievement}</span></li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
