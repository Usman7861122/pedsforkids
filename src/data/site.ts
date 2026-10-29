// All homepage content lives here so pages stay clean and copy is easy to edit.

export const practice = {
  name: 'Peds For Kids',
  legalName: 'Atanassova-Lineva MD Pediatrics PC',
  slogan: 'Let your dreams soar like dragon wings',
  tagline: 'Pediatric and adolescent medicine in Rego Park, Queens',
  phone: '718-268-9100',
  phoneHref: 'tel:+17182689100',
  fax: '877-926-5112',
  address: ['63-95 Austin St.', 'Rego Park, NY 11374'],
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=63-95+Austin+St+Rego+Park+NY+11374',
  bookUrl: '/book', // TODO: point to Zocdoc / Healow booking link
  social: [
    { name: 'Facebook', href: 'https://facebook.com/peds4kids' },
    { name: 'Instagram', href: 'https://instagram.com/peds4kids' },
    { name: 'TikTok', href: 'https://tiktok.com/@askdrd' },
  ],
};

// Nearby neighborhoods shown under the contact form. TODO: ask the practice to review this list.
export const serviceAreas = ['Rego Park', 'Forest Hills', 'Elmhurst', 'Middle Village', 'Kew Gardens', 'Corona', 'Jackson Heights', 'Flushing'];

// 0 = Sunday ... 6 = Saturday
export const hours: { day: string; time: string | null }[] = [
  { day: 'Sunday', time: null },
  { day: 'Monday', time: '11:00 am to 8:00 pm' },
  { day: 'Tuesday', time: '11:00 am to 5:00 pm' },
  { day: 'Wednesday', time: '11:00 am to 8:00 pm' },
  { day: 'Thursday', time: null },
  { day: 'Friday', time: '11:00 am to 5:00 pm' },
  { day: 'Saturday', time: '9:00 am to 2:00 pm' },
];

export const services = [
  { slug: 'well-child-exams', title: 'Well child exams', text: 'Growth checks, milestones and school forms, from newborn to teen.', glyph: 'heart', color: 'sun' },
  { slug: 'sick-visits', title: 'Sick visits', text: 'Fever, cough, sore throat or ear pain? We test on site, including rapid strep and flu.', glyph: 'thermo', color: 'coral' },
  { slug: 'vaccines', title: 'Vaccines', text: 'Routine shots on schedule, with clear answers to your questions.', glyph: 'shield', color: 'sky' },
  { slug: 'asthma', title: 'Asthma', text: 'Breathing tests in the office and a plan that keeps your child playing.', glyph: 'cloud', color: 'grape' },
  { slug: 'allergies', title: 'Allergies', text: 'Help with seasonal, food and skin allergies, and what to do next.', glyph: 'flower', color: 'meadow' },
  { slug: 'telemedicine', title: 'Telemedicine', text: 'Video visits for families anywhere in the US, through the Healow app.', glyph: 'screen', color: 'sky' },
  { slug: 'weight-and-obesity', title: 'Healthy weight', text: 'Kind, practical support for healthy eating and growth.', glyph: 'apple', color: 'coral' },
  { slug: 'pediatric-and-adolescent-medicine', title: 'Teen care', text: 'A comfortable place for older kids to ask real questions.', glyph: 'star', color: 'sun' },
] as const;

export const grownUpServices = [
  'Botox',
  'Dermal fillers',
  'Microneedling',
  'Facial rejuvenation',
  'LED light therapy',
  'PRP treatments',
  'IV vitamin infusions',
];

// Adult aesthetic services shown as cards on the About page. Pages at /services/<slug> come later.
export const grownUpCards = [
  { slug: 'botox', title: 'Botox', text: 'Smooth fine lines with quick, gentle treatments.', glyph: 'star', color: 'grape' },
  { slug: 'dermal-fillers', title: 'Dermal fillers', text: 'Restore volume and a fresh, natural look.', glyph: 'heart', color: 'coral' },
  { slug: 'microneedling', title: 'Microneedling', text: 'Help skin look smoother and more even.', glyph: 'shield', color: 'sky' },
  { slug: 'facial-rejuvenation', title: 'Facial rejuvenation', text: 'Treatments that bring back glow and tone.', glyph: 'flower', color: 'meadow' },
  { slug: 'led-light-therapy', title: 'LED light therapy', text: 'Gentle light care for calmer, clearer skin.', glyph: 'star', color: 'sun' },
  { slug: 'prp-treatments', title: 'PRP treatments', text: 'Use your own natural healing power for renewed skin.', glyph: 'thermo', color: 'coral' },
  { slug: 'iv-vitamin-infusions', title: 'IV vitamin infusions', text: 'Vitamins and fluids to help you feel your best.', glyph: 'apple', color: 'meadow' },
] as const;

export const nav = {
  about: {
    label: 'About us',
    items: [
      { label: 'Meet Dr. Daniela', text: 'Our pediatrician and founder', href: '/dr-daniela', color: 'sun' },
      { label: 'Observership program', text: 'For international medical graduates', href: '/observership', color: 'grape' },
      { label: "Dr. Daniela's book", text: 'Prescription for a Happy and Healthy Child', href: '/book-by-dr-daniela', color: 'coral' },
    ],
  },
  providers: {
    label: 'Providers',
    items: [
      { label: 'Meet Dr. Daniela', text: 'Our pediatrician and founder', href: '/dr-daniela', color: 'sun' },
      { label: 'Lisa M. Guan, CPNP', text: 'Nurse practitioner', href: '/about#providers', color: 'coral' },
      { label: 'Miriam Samekhova, CFNP', text: 'Nurse practitioner', href: '/about#providers', color: 'sky' },
      { label: 'Michal Sarikov, FNP-BC', text: 'Nurse practitioner', href: '/about#providers', color: 'meadow' },
    ],
  },
  services: {
    label: 'Services',
    items: [
      ...services.map((s) => ({ label: s.title, text: '', href: `/services/${s.slug}`, color: s.color })),
    ],
  },
  families: {
    label: 'Families',
    items: [
      { label: 'Patient forms', text: 'Fill in before you visit', href: '/patient-forms', color: 'sky' },
      { label: 'Reviews', text: 'What parents say', href: '/testimonials', color: 'sun' },
      { label: 'Art from our kids', text: 'Our little artists', href: '/art-from-our-kids', color: 'coral' },
      { label: 'Health blog', text: 'Answers to common questions', href: '/blog', color: 'meadow' },
    ],
  },
};

export const press = {
  main: {
    kicker: 'New York, NY, February 19, 2022',
    title: 'Dr. Daniela Atanassova-Lineva named Top Pediatrician of the Year',
    text: 'The International Association of Top Professionals (IAOTP) chose Dr. Daniela as Top Pediatrician of the Year for 2022. The group praised her leadership, dedication and ethical practice in pediatric and adolescent medicine. Only a few members in each field receive this honor.',
    href: '/press/top-pediatrician-of-the-year',
  },
  more: [
    { title: 'Top Pediatrician of the Decade', source: 'IAOTP', href: '/press/top-pediatrician-of-the-decade' },
    { title: 'Empowered Woman of the Year', source: 'IAOTP, December 2023', href: '/press/empowered-woman-of-the-year' },
  ],
  seenOn: [
    { name: 'KUTV 2', logo: '/images/press/kutv.png', href: 'https://markets.financialcontent.com/fourptsmedia.kutv/article/getnews-2023-12-14-dr-daniela-atanassova-lineva-selected-as-top-pediatrician-of-the-decade-by-iaotp/' },
    { name: 'FOX 40', logo: '/images/press/fox40.png', href: 'https://www.wicz.com/story/50219136/dr-daniela-atanassovalineva-selected-as-empowered-woman-of-the-year-by-iaotp' },
    { name: 'NBC Fort Wayne', logo: '/images/press/nbc-fort-wayne.png', href: 'https://fwnbc.marketminute.com/article/getnews-2023-12-14-dr-daniela-atanassova-lineva-selected-as-empowered-woman-of-the-year-by-iaotp' },
    { name: 'WPTA 21', logo: '/images/press/wpta.png', href: 'https://wpta.marketminute.com/article/getnews-2023-12-14-dr-daniela-atanassova-lineva-selected-as-top-pediatrician-of-the-decade-by-iaotp' },
  ],
};

// Real reviews from the practice's own testimonials page.
export const reviews = [
  {
    name: 'Boris J.',
    note: 'Parent, June 2024',
    quote: 'Dr. Daniela is knowledgeable and compassionate. Happy to have my daughter under her care.',
    color: 'sun',
  },
  {
    name: 'Martha E.',
    note: 'Parent, July 2021',
    quote: 'She had an excellent bedside manner, she was thorough and attentive. She was able to make us feel comfortable and reassured with some questions we had.',
    color: 'coral',
  },
  {
    name: 'Tarathya D.',
    note: 'Medical student, February 2020',
    quote: 'It has been a privilege to meet and learn from an inspirational pediatrician like you.',
    color: 'grape',
  },
] as const;

export const providers = [
  { name: 'Dr. Daniela Atanassova-Lineva', short: 'Dr. Daniela', role: 'Pediatrician', text: 'Board certified in pediatric and adolescent medicine. Speaks five languages.', animal: 'owl', color: 'sun' },
  { name: 'Lisa M. Guan, CPNP', short: 'Lisa', role: 'Nurse practitioner', text: 'Board-certified nurse practitioner for babies, kids and teens.', animal: 'bunny', color: 'coral' },
  { name: 'Miriam Samekhova, CFNP', short: 'Miriam', role: 'Nurse practitioner', text: 'Board-certified family nurse practitioner for the whole family.', animal: 'bear', color: 'sky' },
  { name: 'Michal Sarikov, MSN, ARNP, FNP-BC', short: 'Michal', role: 'Nurse practitioner', text: 'Board-certified family nurse practitioner, here to help.', animal: 'fox', color: 'meadow' },
] as const;

export const insurancesFeatured = [
  '1199SEIU', 'Aetna', 'Anthem Blue Cross', 'Blue Cross Blue Shield', 'Cigna', 'Empire Blue Cross Blue Shield',
  'Empire Plan', 'HealthFirst', 'Oxford (UnitedHealthcare)', 'United Health Care',
];
export const insurancesMore = [
  'Anthem Blue Cross Blue Shield', 'Arkansas Blue Cross Blue Shield', 'Blue Cross', 'Capital Blue Cross',
  'CareFirst Blue Cross Blue Shield', 'CBA Blue', 'Caterpillar', 'Emblem Health GHI PPO HIP', 'Fidelis Care',
  'Florida Blue', 'GeoBlue', 'Health Plus', 'HighMark Blue Cross Blue Shield', 'HighMark Blue Shield',
  'MetroPlus Health Plan', 'Premera Blue Cross', 'Regence Blue Cross Blue Shield', 'United Health One',
  'Wellmark Blue Cross Blue Shield',
];

export const posts = [
  {
    slug: 'autism-spectrum-disorder-asd-in-children',
    title: 'Autism Spectrum Disorder (ASD) in Children',
    date: 'Jul 31, 2026',
    text: 'Early signs to watch for, and when to talk with your pediatrician.',
    color: 'sky',
    art: 'owl',
  },
  {
    slug: 'developmental-dysplasia-of-the-hip',
    title: 'Developmental Dysplasia of the Hip',
    date: 'Apr 30, 2026',
    text: 'How a baby’s hips grow, and why early checks matter.',
    color: 'meadow',
    art: 'bunny',
  },
  {
    slug: 'pediatric-fractures',
    title: 'Pediatric Fractures',
    date: 'Mar 26, 2026',
    text: 'What to know when your child breaks a bone.',
    color: 'coral',
    art: 'bear',
  },
] as const;

// Logos saved by scripts/fetch-old-site-images.sh into public/images/insurance/
export const insuranceLogos = [
  { name: 'Regence Blue Cross Blue Shield', logo: '/images/insurance/1771740.png' },
  { name: '1199SEIU', logo: '/images/insurance/1771750.png' },
  { name: 'Aetna', logo: '/images/insurance/2206449.png' },
  { name: 'Anthem Blue Cross', logo: '/images/insurance/1771839.png' },
  { name: 'Anthem Blue Cross Blue Shield', logo: '/images/insurance/1771694.png' },
  { name: 'Arkansas Blue Cross Blue Shield', logo: '/images/insurance/1775100.png' },
  { name: 'Blue Cross', logo: '/images/insurance/1771833.png' },
  { name: 'Blue Cross Blue Shield', logo: '/images/insurance/2272134.png' },
  { name: 'Capital Blue Cross', logo: '/images/insurance/1771909.png' },
  { name: 'CareFirst Blue Cross Blue Shield', logo: '/images/insurance/1771896.png' },
  { name: 'CBA Blue', logo: '/images/insurance/1776303.png' },
  { name: 'Cigna', logo: '/images/insurance/2614660.png' },
  { name: 'Empire Blue Cross Blue Shield', logo: '/images/insurance/1771835.png' },
  { name: 'Empire Plan', logo: '/images/insurance/1790359.png' },
  { name: 'HealthFirst', logo: '/images/insurance/1790728.png' },
  { name: 'Oxford (UnitedHealthcare)', logo: '/images/insurance/1789309.png' },
];
