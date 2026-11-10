"use client";

import { useLanguage } from "@/lib/useLanguage";

export default function Certifications() {
  const { t } = useLanguage();
  return (
    <section id={t.sections.certifications} className="bg-white py-24 dark:bg-[#121212]">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <div className="mb-12 flex items-end gap-6"><h2 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-6xl">{t.certifications.title}</h2><div className="mb-2 h-[3px] flex-1 bg-gray-900/30 dark:bg-white/30" /></div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {t.certifications.items.map((cert) => <article key={cert.id} className="flex min-h-40 flex-col justify-between rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-[#1a1a1a]"><div><span className="text-3xl text-gray-400 dark:text-gray-500" aria-hidden="true">✦</span><h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">{cert.title}</h3></div>{cert.issuer && <p className="mt-3 text-gray-600 dark:text-gray-400">{cert.issuer}</p>}</article>)}
        </div>
      </div>
    </section>
  );
}
