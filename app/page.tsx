"use client";

import { Suspense } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import { ThemeProvider } from "./components/theme-provider";
import LazyBeams from "./components/LazyBeams";
import ProjectCard from "./components/ProjectCard";
import TechGrid from "./components/TechGrid";
import Certifications from "./components/Certifications";
import { useLanguage } from "@/lib/useLanguage";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main>
      <ThemeProvider>
        <section className="relative flex min-h-screen flex-col overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Suspense fallback={<div className="h-full w-full bg-[#dddddd] dark:bg-[#070707]" />}>
              <LazyBeams beamWidth={3} beamHeight={25} beamNumber={10} speed={2} noiseIntensity={2} scale={0.2} rotation={30} />
            </Suspense>
          </div>
          <Navbar />
          <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-6 pt-24 text-center sm:px-12">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-gray-600 dark:text-gray-300 sm:text-sm">{t.hero.eyebrow}</p>
            <h1 className="text-5xl font-bold text-gray-950 dark:text-white sm:text-7xl md:text-8xl">Rania<br className="sm:hidden" /> Madmoune</h1>
            <p className="mt-7 max-w-3xl text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg">{t.hero.description}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={`#${t.sections.projects}`} className="rounded-full bg-[#191919] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 dark:bg-white dark:text-[#191919]">{t.hero.primaryCta}</a>
              <a href={`#${t.sections.contact}`} className="rounded-full border border-gray-900/30 bg-white/50 px-6 py-3 text-sm font-semibold text-gray-900 backdrop-blur-sm transition hover:-translate-y-0.5 dark:border-white/30 dark:bg-black/20 dark:text-white">{t.hero.secondaryCta}</a>
            </div>
            <p className="mt-10 text-sm text-gray-600 dark:text-gray-400">{t.footer.contact.follow}</p>
          </div>
        </section>

        <section id={t.sections.about} className="bg-white py-24 dark:bg-[#121212]">
          <div className="mx-auto max-w-7xl px-6 sm:px-12">
            <SectionTitle title={t.about.title} />
            <div className="grid gap-12 md:grid-cols-[18rem_1fr]">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl md:mx-0 md:w-72 md:max-w-none">
                <Image
                  src="/rania-portfolio/rania-photo.jpg"
                  alt="Rania Madmoune"
                  fill
                  sizes="(max-width: 768px) 100vw, 288px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div>
                <h3 className="text-4xl font-bold text-gray-900 dark:text-white">Rania Madmoune</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {[t.about.tags.location, t.about.tags.softwareEng, t.about.tags.mlAi, t.about.tags.mobileWeb].map((tag) => <span key={tag} className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-800 dark:bg-[#252525] dark:text-gray-100">{tag}</span>)}
                </div>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">{t.about.description}</p>
                <p className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">{t.about.quote}</p>
                <h4 className="mb-5 mt-10 text-2xl font-bold text-gray-900 dark:text-white">{t.about.education.title}</h4>
                <div className="space-y-5">
                  {[t.about.education.ensamEngineering, t.about.education.ensamPreparatory, t.about.education.highschool].map((item) => <div key={item.degree} className="border-l-2 border-gray-300 pl-5 dark:border-gray-700"><div className="flex flex-wrap justify-between gap-2"><strong className="text-gray-900 dark:text-white">{item.location}</strong><span className="text-sm text-gray-500 dark:text-gray-400">{item.date}</span></div><p className="text-gray-700 dark:text-gray-300">{item.degree}</p></div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Experience />
        <Certifications />

        <section id={t.sections.projects} className="bg-gray-50 py-24 dark:bg-[#121212]">
          <div className="mx-auto max-w-7xl px-6 sm:px-12">
            <SectionTitle title={t.projects.title} />
            <div className="grid items-start gap-6 md:grid-cols-2">
              {t.projects.items.map((project) => <ProjectCard key={project.id} images={[]} title={project.title} description={project.description} date={project.date} tags={[...project.tags]} />)}
            </div>
          </div>
        </section>

        <TechGrid />

        <section className="bg-white py-24 dark:bg-[#121212]">
          <div className="mx-auto max-w-7xl px-6 sm:px-12">
            <SectionTitle title={t.activities.title} />
            <article className="rounded-2xl bg-gray-50 p-7 dark:bg-[#1a1a1a]">
              <div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="text-xl font-bold text-gray-900 dark:text-white">Club Industriel, Mécanique & Robotique — ENSAM Meknès</h3><span className="text-sm text-gray-500 dark:text-gray-400">{t.activities.date}</span></div>
              <p className="mt-1 text-gray-600 dark:text-gray-400">{t.activities.role}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">{t.activities.achievements.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
            <h3 className="mb-4 mt-10 text-xl font-bold text-gray-900 dark:text-white">{t.techStack.languagesLabel}</h3>
            <div className="flex flex-wrap gap-3">{t.techStack.languages.map((language) => <span key={language} className="rounded-full bg-gray-100 px-4 py-2 text-gray-800 dark:bg-[#252525] dark:text-gray-100">{language}</span>)}</div>
          </div>
        </section>

        <section id={t.sections.contact} className="bg-gray-50 py-24 dark:bg-[#121212]">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-12 lg:grid-cols-3">
            <div><SectionTitle title={t.contact.title} /><p className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">{t.contact.infos.available}</p><p className="mt-5 text-sm font-semibold text-gray-600 dark:text-gray-300">{t.contact.infos.usefulLinks}</p><a className="mt-2 block text-gray-700 underline dark:text-gray-300" href="mailto:raniamadmoune@gmail.com">raniamadmoune@gmail.com</a><a className="mt-2 block text-gray-700 underline dark:text-gray-300" href="tel:+212659310266">+212 659 310 266</a><p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{t.footer.contact.follow}</p></div>
            <div className="flex flex-col justify-center lg:col-span-2"><h3 className="text-3xl font-semibold text-gray-900 dark:text-white">{t.contact.form.title}</h3><p className="mt-4 max-w-xl text-lg text-gray-600 dark:text-gray-400">{t.contact.form.description}</p><a href="mailto:raniamadmoune@gmail.com" className="mt-7 inline-flex w-fit rounded-xl bg-[#191919] px-7 py-4 font-bold text-white shadow-lg transition hover:scale-[1.02] dark:bg-white dark:text-[#191919]">raniamadmoune@gmail.com</a></div>
          </div>
        </section>
        <Footer />
      </ThemeProvider>
    </main>
  );
}

function SectionTitle({ title }: { title: string }) {
  return <div className="mb-12 flex items-end gap-6"><h2 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-6xl">{title}</h2><div className="mb-2 h-[3px] flex-1 bg-gray-900/30 dark:bg-white/30" /></div>;
}
