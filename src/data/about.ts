// Content for the About page. Based on the old peds4kids.com/about page.

export const aboutIntro = {
  title: 'About Peds For Kids',
  lede: 'A pediatric and adolescent medicine practice in Rego Park, Queens. We care for busy families with check-ups, walk-in visits and long-term needs like asthma and allergies. We see new patients with insurance or self-pay, and video visits are open to families across the US.',
};

export const drBio = {
  name: 'Dr. Daniela Atanassova-Lineva',
  role: 'Pediatrician and founder',
  paragraphs: [
    'Dr. Daniela is board certified in pediatric and adolescent medicine. She is also a fellow of the Adolescent Medicine section of the American Academy of Pediatrics.',
    'She speaks five languages, so more families can talk with her in the words they use at home.',
    'She holds a certification from Harvard Medical School in obesity diagnosis and management, which helps her give kind, practical advice on healthy weight.',
  ],
};

export const credentials = [
  { title: 'Board certified', text: 'Pediatric and adolescent medicine.', glyph: 'shield', color: 'sky' },
  { title: 'Five languages', text: 'Families can talk in the words they use at home.', glyph: 'heart', color: 'coral' },
  { title: 'Top Pediatrician 2022', text: 'Named by the International Association of Top Professionals (IAOTP).', glyph: 'star', color: 'sun' },
  { title: 'Harvard Medical School', text: 'Certified in obesity diagnosis and management.', glyph: 'apple', color: 'meadow' },
] as const;

export const affiliations = [
  'Mount Sinai Hospital',
  'North Shore Hospital (Northwell Health)',
  'NewYork-Presbyterian Hospital/Queens',
];

export const inOffice = [
  'Rapid strep and flu tests',
  'Blood work',
  'Pulmonary function tests',
  'EKG',
  'Genetic testing to find the cause of infections',
];
