"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "@/lib/useLanguage";

export default function Confidentialite() {
  const { t } = useLanguage();
  return <main className="flex min-h-screen flex-col bg-white dark:bg-[#151515]"><Navbar /><div className="container mx-auto max-w-4xl flex-grow px-6 py-28"><h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">{t.privacy.title}</h1><p className="leading-relaxed text-gray-700 dark:text-gray-300">{t.privacy.text}</p><p className="mt-6 text-gray-700 dark:text-gray-300"><a className="underline" href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer">GitHub Privacy Statement</a></p></div><Footer /></main>;
}
