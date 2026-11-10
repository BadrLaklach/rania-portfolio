"use client";

import { useLanguage } from "@/lib/useLanguage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Link from "next/link";

export default function NotFound() {
  const { language } = useLanguage();
  return <main className="flex min-h-screen flex-col bg-white dark:bg-[#101010]"><Navbar /><div className="flex flex-1 flex-col items-center justify-center px-6 text-center"><p className="text-8xl font-bold text-gray-900 dark:text-white">404</p><h1 className="mt-4 text-xl text-gray-700 dark:text-gray-300">{language === "fr" ? "Page introuvable" : "Page not found"}</h1><Link className="mt-7 rounded-full bg-[#191919] px-6 py-3 font-semibold text-white dark:bg-white dark:text-[#191919]" href="/">{language === "fr" ? "Retour à l’accueil" : "Back to home"}</Link></div><Footer /></main>;
}
