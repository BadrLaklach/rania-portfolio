"use client";

import { useLanguage } from "@/lib/useLanguage";

export default function TechGrid() {
  const { t } = useLanguage();
  const categories = Object.keys(t.techStack.categories) as Array<keyof typeof t.techStack.categories>;
  return (
    <section id={t.sections.techStack} className="bg-gray-50 py-24 dark:bg-[#121212]">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <div className="mb-12 flex items-end gap-6"><h2 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-6xl">{t.techStack.title}</h2><div className="mb-2 h-[3px] flex-1 bg-gray-900/30 dark:bg-white/30" /></div>
        <div className="space-y-8">
          {categories.map((category) => <div key={category}><h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">{t.techStack.categories[category]}</h3><p className="rounded-2xl bg-white p-6 leading-8 text-gray-700 shadow-sm dark:bg-[#1a1a1a] dark:text-gray-300">{t.techStack.items.find((item) => item.category === category)?.name}</p></div>)}
        </div>
      </div>
    </section>
  );
}
