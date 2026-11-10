"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/useLanguage";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:px-12 md:grid-cols-3">
        <div><h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Rania Madmoune</h3><p className="mt-3 text-gray-600 dark:text-gray-400">{t.footer.description}</p></div>
        <div><h3 className="text-xl font-semibold text-gray-900 dark:text-white">{t.footer.navigation}</h3><div className="mt-3 flex flex-col gap-2">{[[t.nav.about, t.sections.about], [t.nav.experience, t.sections.experience], [t.nav.projects, t.sections.projects], [t.nav.contact, t.sections.contact]].map(([label, id]) => <Link key={id} href={`/#${id}`} className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">{label}</Link>)}</div></div>
        <div><h3 className="text-xl font-semibold text-gray-900 dark:text-white">{t.footer.contact.title}</h3><a className="mt-3 block text-gray-700 underline dark:text-gray-300" href="mailto:raniamadmoune@gmail.com">raniamadmoune@gmail.com</a><a className="mt-2 block text-gray-700 underline dark:text-gray-300" href="tel:+212659310266">+212 659 310 266</a><p className="mt-3 text-sm text-gray-600 dark:text-gray-400">{t.footer.contact.follow}</p></div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-gray-200 px-6 py-5 text-center text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400 sm:px-12 md:flex-row"><p>© {new Date().getFullYear()} Rania Madmoune. {t.footer.rights}</p><div className="flex gap-3"><Link href="/mentions-legales">{t.footer.legal}</Link><Link href="/politique-confidentialite">{t.footer.privacy}</Link></div></div>
    </footer>
  );
}
