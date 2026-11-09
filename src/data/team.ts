// Nurse practitioner profiles. Written in our own words from the live provider pages.
// TODO: ask each provider to confirm credentials, schooling and languages before launch.

export interface Provider {
  slug: string;
  photoSlot: string; // key in data/images.ts
  name: string;
  short: string;
  role: string;
  lede: string;
  facts: string[];
  about: string[];
  details: { title: string; items: string[]; color: 'sky' | 'coral' | 'sun' | 'meadow' | 'grape' }[];
  animal: 'bunny' | 'bear' | 'fox';
  color: 'sky' | 'coral' | 'sun' | 'meadow';
}

export const team: Provider[] = [
  {
    slug: 'lisa-m-guan-cpnp',
    photoSlot: 'provider1',
    name: 'Lisa M. Guan, CPNP',
    short: 'Lisa',
    role: 'Board-certified pediatric nurse practitioner',
    lede: 'A pediatric nurse practitioner with more than 10 years of experience, caring for babies, kids and teens in Rego Park. She also speaks Cantonese and Mandarin.',
    facts: ['Board certified', '10+ years as an NP', 'Mom of two', 'Speaks Cantonese and Mandarin'],
    about: [
      'Lisa is proud to care for new and returning families at Peds For Kids. She has worked as a pediatric nurse practitioner for more than 10 years.',
      'Before she became an NP, she was a senior staff nurse on the children\'s floor at NYU Langone Medical Center. Her love for kids led her back to school to study pediatric nursing.',
      'Lisa is a mom of two, so she sees each visit through a doctor\'s eyes and a parent\'s eyes. She keeps learning the latest medical news so your family gets the best care.',
      'Outside of work she loves to travel, swim and ski with her family.',
    ],
    details: [
      { title: 'School and training', items: ['Bachelor of Science in Psychology, University at Buffalo (SUNY)', 'Bachelor of Science in Nursing, New York University', 'Master of Science as a Pediatric Nurse Practitioner, New York University'], color: 'sky' },
      { title: 'She loves to help with', items: ['Everyday pediatric care', 'Development checks', 'Asthma and allergies', 'Skin conditions', 'Healthy weight and food', 'Teen health'], color: 'meadow' },
      { title: 'Languages', items: ['English', 'Cantonese', 'Mandarin'], color: 'sun' },
    ],
    animal: 'bunny',
    color: 'coral',
  },
  {
    slug: 'michal-sarikov-msn-arnp-fnp-bc',
    photoSlot: 'provider2',
    name: 'Michal Sarikov, MSN, ARNP, FNP-BC',
    short: 'Michal',
    role: 'Double board-certified family nurse practitioner',
    lede: 'A caring family nurse practitioner who helps children and parents feel safe, valued and understood at every visit. She is a mom of three.',
    facts: ['Double board certified', 'Mom of three', 'Preventive care'],
    about: [
      'Michal is a double board-certified family nurse practitioner. She brings warmth, skill and real care to every child and family she meets.',
      'She earned her Master of Science in Nursing at LIU Brooklyn, where her love for preventive medicine and children\'s care grew.',
      'As a mom of three, Michal builds a calm, welcoming space and helps families learn and work together. She believes healthy habits and kind talk in the early years are the base for a healthy life.',
      'She wants every young patient to leave feeling safe, valued and understood.',
    ],
    details: [
      { title: 'School and training', items: ['Master of Science in Nursing, LIU Brooklyn', 'Double board-certified family nurse practitioner'], color: 'meadow' },
      { title: 'She loves to help with', items: ['Child development', 'Preventive health', 'Short-term illness', 'Long-term health conditions'], color: 'grape' },
    ],
    animal: 'fox',
    color: 'meadow',
  },
];
