// Content for the Dr. Daniela page. Collected from public provider listings and press pages.
// TODO: ask the practice to confirm every credential, date and hospital name before launch.

export const doctor = {
  name: 'Dr. Daniela Atanassova-Lineva',
  short: 'Dr. Daniela',
  role: 'Pediatrician and founder of Peds For Kids',
  lede: 'A board certified pediatrician with more than 20 years of experience in pediatric and emergency medicine. She cares for babies, kids and teens in Rego Park, Queens, in five languages.',
  quickFacts: ['Board certified', 'Speaks five languages', '20+ years of experience', 'Top Pediatrician 2022'],
  story: [
    'Dr. Daniela grew up around many languages and cultures. Today she speaks five, so more families can talk with her in the words they use at home.',
    'She trained in medicine in Bulgaria, then finished her pediatric residency in New York. For many years she also worked in a hospital pediatric emergency department.',
    'At Peds For Kids she brings that experience to everyday care: check-ups, sick visits, asthma, allergies, healthy weight and the big questions teens bring. She also teaches, and helps train physician assistant students from Stony Brook University.',
  ],
  promise: 'Every child should leave feeling brave, and every parent should leave feeling heard.',
};

export const path = [
  { year: 'Medical degree', title: 'Varna Medical University', text: 'Earned her medical degree in Bulgaria.', color: 'sky' },
  { year: 'Residency', title: 'Mount Sinai School of Medicine', text: 'Pediatric residency, with training at Elmhurst Hospital in Queens.', color: 'coral' },
  { year: '2016', title: 'Aesthetic medicine certification', text: 'Added training in aesthetic care for parents and adults.', color: 'grape' },
  { year: '2019', title: 'Obesity medicine, Harvard', text: 'Certified in obesity diagnosis and management.', color: 'meadow' },
  { year: 'Today', title: 'Teaching and caring', text: 'Leads Peds For Kids and teaches physician assistant students from Stony Brook University.', color: 'sun' },
] as const;

export const focus = [
  { title: 'Asthma and allergies', text: 'Breathing tests in the office and a clear plan.', glyph: 'cloud', color: 'sky' },
  { title: 'Healthy weight and food', text: 'Kind, practical help with nutrition and growth.', glyph: 'apple', color: 'meadow' },
  { title: 'Teen care', text: 'A safe place for older kids to ask real questions.', glyph: 'star', color: 'sun' },
  { title: 'Emergency know-how', text: 'Years of urgent care for children, now used for sick visits.', glyph: 'thermo', color: 'coral' },
  { title: 'Skin and aesthetics', text: 'Dermatology interest and aesthetic care for parents.', glyph: 'flower', color: 'grape' },
  { title: 'Video visits', text: 'Telemedicine for families across the US.', glyph: 'screen', color: 'sky' },
] as const;

export const honors = [
  'Top Pediatrician of the Year 2022 (IAOTP)',
  'Top Pediatrician of the Decade (IAOTP)',
  'Empowered Woman of the Year (IAOTP)',
  'Patients’ Choice Award',
  'Co-author of “The Prescription for a Happy and Healthy Child”',
];

export const stats = [
  { value: '20+', label: 'years in pediatric and emergency care', color: 'sky' },
  { value: '5', label: 'languages spoken with families', color: 'coral' },
  { value: '15+', label: 'years teaching in a hospital emergency department', color: 'meadow' },
  { value: '2022', label: 'Top Pediatrician of the Year (IAOTP)', color: 'sun' },
] as const;
