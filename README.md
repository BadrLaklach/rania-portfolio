# Rania Madmoune — Portfolio

Bilingual French/English portfolio for Rania Madmoune, based on her CV and the Next.js portfolio template at [BadrLaklach/my-portfolio](https://github.com/BadrLaklach/my-portfolio).

## Stack

- Next.js App Router with TypeScript and Tailwind CSS
- French/English content selected from the browser language
- Static export deployed to GitHub Pages by GitHub Actions

## Local development

Use Node.js 22 or newer (the workflow uses Node.js 22 LTS).

```bash
npm ci
npm run dev
```

Build the static site with `npm run build`; Next.js writes the export to `out/`.

## GitHub Pages

The site is configured for the public repository [`BadrLaklach/rania-portfolio`](https://github.com/BadrLaklach/rania-portfolio) (`basePath: /rania-portfolio`). Once GitHub Pages finishes its first Actions deployment, the site will be available at [badrlaklach.github.io/rania-portfolio](https://badrlaklach.github.io/rania-portfolio/). If the repository name changes, update `basePath` in `next.config.ts`, the public asset paths, and `public/site.webmanifest`.

## Content source

Portfolio details are based on `GEM-MADMOUNE-RANIA.pdf`. The source CV is kept in the working directory and is not copied into the public site. No social profile URL, project link, certificate verification link, or portrait is published unless supplied and verified.
