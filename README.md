# Peds 4 Kids

Astro + React islands + Tailwind CSS v4 + Framer Motion. Paper-craft kids theme.

## Commands
- `npm install`
- `npm run dev` start dev server
- `npm run build` type check and build
- `npm run preview` preview the build

## Structure
- `src/data/site.ts` all copy, hours, providers, insurances, posts
- `src/styles/global.css` colors, fonts, paper "sheet" styles
- `src/components/art/Art.tsx` paper-craft illustrations
- `src/components/islands/` React + Framer Motion (header, hero, insurance finder, forms)
- `src/components/sections/` homepage sections
- `src/components/ui/PaperEdge.astro` torn paper edges between sections

## To do
- Replace sample art with real photos (Dr. Daniela, gallery drawings)
- Set `practice.bookUrl` in `src/data/site.ts` to the Zocdoc/Healow link
- Connect the contact form in `ContactForm.tsx`

### Moved to the future About page
- Board certified in pediatric and adolescent medicine; speaks five languages
- Visits: check-ups, walk-in care, asthma and allergies
- Tests in the office: rapid strep and flu, lung function, EKG, blood work, genetic testing
- Affiliated with Mount Sinai, Northwell and NewYork-Presbyterian Queens
- "Insured or self-pay" highlight
