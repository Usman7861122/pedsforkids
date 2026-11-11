// Search engine data (JSON-LD) built from the same facts the site already shows.
import { practice, hours, serviceAreas, services } from './site';

export const SITE = 'https://www.peds4kids.com';
export const abs = (path: string) => new URL(path, SITE).toString();

export const DEFAULT_OG = {
  src: '/images/og-default.jpg',
  alt: 'Peds For Kids, pediatric and adolescent care in Rego Park, Queens',
  width: 1200,
  height: 630,
};

// "11:00 am" -> "11:00", "5:00 pm" -> "17:00"
function to24(t: string): string {
  const m = t.trim().match(/^(\d{1,2}):(\d{2})\s*(am|pm)$/i);
  if (!m) return t;
  let h = parseInt(m[1], 10) % 12;
  if (m[3].toLowerCase() === 'pm') h += 12;
  return `${String(h).padStart(2, '0')}:${m[2]}`;
}

const openingHours = hours
  .filter((h) => h.time)
  .map((h) => {
    const [from, to] = h.time!.split(/\s+to\s+/);
    return { '@type': 'OpeningHoursSpecification', dayOfWeek: h.day, opens: to24(from), closes: to24(to) };
  });

export const clinicId = `${SITE}/#clinic`;
export const websiteId = `${SITE}/#website`;

export const clinic = {
  '@type': 'MedicalClinic',
  '@id': clinicId,
  name: practice.name,
  legalName: practice.legalName,
  url: `${SITE}/`,
  description: `${practice.tagline}. Well child exams, sick visits, vaccines, asthma, allergies and video visits for babies, kids and teens.`,
  medicalSpecialty: 'Pediatric',
  isAcceptingNewPatients: true,
  telephone: '+1-718-268-9100',
  faxNumber: '+1-877-926-5112',
  logo: abs('/images/logo.png'),
  image: abs(DEFAULT_OG.src),
  address: {
    '@type': 'PostalAddress',
    streetAddress: practice.address[0],
    addressLocality: 'Rego Park',
    addressRegion: 'NY',
    postalCode: '11374',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 40.7272719, longitude: -73.8632016 },
  // Assumption: mid-range price band. Ask the clinic to confirm.
  priceRange: '$$',
  hasMap: practice.mapsUrl,
  openingHoursSpecification: openingHours,
  areaServed: serviceAreas.map((name) => ({ '@type': 'City', name })),
  availableService: services.map((s) => ({ '@type': 'MedicalProcedure', name: s.title, url: abs(`/services/${s.slug}/`) })),
  sameAs: practice.social.map((s) => s.href),
  potentialAction: { '@type': 'ReserveAction', target: practice.bookUrl, name: 'Book a visit' },
};

export const website = {
  '@type': 'WebSite',
  '@id': websiteId,
  url: `${SITE}/`,
  name: practice.name,
  inLanguage: 'en-US',
  publisher: { '@id': clinicId },
};

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

// Safe to place inside <script type="application/ld+json">.
export const toJson = (data: unknown) => JSON.stringify(data).replace(/</g, '\\u003c');
