"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "@/lib/useLanguage";

export default function MentionsLegales() {
  const { t, language } = useLanguage();
  return <main className="flex min-h-screen flex-col bg-white dark:bg-[#151515]"><Navbar /><div className="container mx-auto max-w-4xl flex-grow px-6 py-28"><h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">{t.legal.title}</h1><div className="space-y-8 leading-relaxed text-gray-700 dark:text-gray-300"><section><h2 className="mb-2 text-2xl font-semibold">{language === "fr" ? "Éditeur du site" : "Site publisher"}</h2><p>{t.legal.owner}<br /><a className="underline" href={`mailto:${t.legal.email}`}>{t.legal.email}</a></p></section><section><h2 className="mb-2 text-2xl font-semibold">{language === "fr" ? "Hébergement" : "Hosting"}</h2><p>{t.legal.hosting}</p></section><section><h2 className="mb-2 text-2xl font-semibold">{language === "fr" ? "Propriété intellectuelle" : "Intellectual property"}</h2><p>{t.legal.intellectualProperty}</p></section></div></div><Footer /></main>;
}
