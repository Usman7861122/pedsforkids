// Page content for each /services/<slug> page. Add a new entry to build another page.
// Based on the old peds4kids.com well child exams page, rewritten in plain words.
import type { GlyphName } from '../components/art/Art';

export type ServicePage = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  lede: string;
  tags: string[];
  photos: { hero: string; a: string; b: string; c: string; d: string };
  visit: { title: string; text: string; items: { title: string; text: string; glyph: GlyphName; color: string }[] };
  schedule: { title: string; text: string; ages: string[]; after: string };
  teen: { title: string; text: string; topics: string[] };
  vaccines: { title: string; text: string; shots: { name: string; text: string }[] };
  bring: string[];
  faqs: { q: string; a: string }[];
  // TODO: ask the practice to review the list of nearby neighborhoods.
  local: { title: string; text: string; areas: string[] };
};

export const servicePages: ServicePage[] = [
  {
    slug: 'well-child-exams',
    title: 'Well child exams',
    h1: 'Well child exams in Rego Park, Queens',
    description:
      'Regular well child check-ups for babies, kids and teens in Rego Park, Queens. Growth checks, vaccines, screenings and answers to your questions at Peds For Kids.',
    lede: 'A well child visit is a check-up when your child is healthy. We watch how your child grows, catch small problems early, keep shots up to date and answer your questions. We see children and teens up to age 21.',
    tags: ['Newborn to age 21', 'Shots on schedule', 'Same-day sick visits'],
    photos: { hero: 'wce-hero', a: 'wce-toddler', b: 'wce-baby', c: 'wce-teen', d: 'wce-vaccine' },
    visit: {
      title: 'What happens at a visit',
      text: 'Each visit is calm and friendly. Here is what we usually do.',
      items: [
        { title: 'Height and weight', text: 'We measure and mark your child on a growth chart to see how they are growing.', glyph: 'star', color: 'sun' },
        { title: 'Health history and exam', text: 'We talk about your child’s health and do a full check from head to toe.', glyph: 'heart', color: 'coral' },
        { title: 'Screenings', text: 'We check for things like anemia, tuberculosis and high cholesterol, when your child’s age and health call for it.', glyph: 'shield', color: 'sky' },
        { title: 'Food and weight', text: 'We give kind, practical advice on healthy eating and a healthy weight.', glyph: 'apple', color: 'meadow' },
        { title: 'Growing up', text: 'We look at how your child learns, plays and behaves, and talk about any changes.', glyph: 'flower', color: 'grape' },
        { title: 'Your questions', text: 'Sleep, feeding, school, screens. Bring your list and we will go through it together.', glyph: 'cloud', color: 'sky' },
      ],
    },
    schedule: {
      title: 'How often should we come?',
      text: 'Babies have more visits because they grow so fast. Here is when we like to see your child.',
      ages: ['1 month', '2 months', '4 months', '6 months', '9 months', '12 months', '15 months', '18 months', '2 years', '2½ years', '3 years'],
      after: 'After age 3, we see your child at least once a year until age 21. Children with health conditions may need visits more often.',
    },
    teen: {
      title: 'Teen well visits',
      text: 'Teens get time to ask real questions in a comfortable, respectful space. Visits are tailored to their age.',
      topics: [
        'Eating habits and body image',
        'Mood and feeling down',
        'Scoliosis checks',
        'Blood pressure',
        'Sports health and injury prevention',
        'Growing up and body changes',
        'When to see a gynecologist',
        'Hernia checks and self-exam tips for boys',
      ],
    },
    vaccines: {
      title: 'Shots, kept on schedule',
      text: 'We keep your child’s vaccines up to date at well visits, and we explain each one in clear words. Some are given at particular ages.',
      shots: [
        { name: 'Tdap booster', text: 'A booster that protects against tetanus, diphtheria and whooping cough, given in the preteen years.' },
        { name: 'HPV', text: 'The first dose is usually given around the same time.' },
        { name: 'Meningococcal', text: 'The first dose helps protect older kids and teens from a serious infection.' },
      ],
    },
    bring: ['Your insurance card', 'Past shot records', 'Any forms to fill out, such as school or camp forms', 'A short list of questions', 'A comfort toy or a book for little ones'],
    faqs: [
      { q: 'How often should my child have a well visit?', a: 'Babies are seen often in the first three years, at 1, 2, 4, 6, 9, 12, 15 and 18 months, then at 2, 2½ and 3 years. After that we recommend at least one visit each year until age 21.' },
      { q: 'What if my child is sick between visits?', a: 'Call us. Sick visits can often be booked for the same day, and many tests, like rapid strep and flu, are done right in the office.' },
      { q: 'Are shots given at the well visit?', a: 'Yes. We check your child’s record and give the shots that are due. We explain each one first so you feel comfortable.' },
      { q: 'Do you see teens on their own?', a: 'Teens are seen in a way that fits their age, with time to ask questions. Parents are welcome and we work together to keep your teen healthy.' },
      { q: 'Do you take my insurance?', a: 'We accept many plans and also see families who self-pay. See the full list on our home page, or call us at 718-268-9100.' },
    ],
    local: {
      title: 'Well child exams near you',
      text: 'Families visit our Austin Street office in Rego Park from all over Queens.',
      areas: ['Rego Park', 'Forest Hills', 'Elmhurst', 'Middle Village', 'Kew Gardens', 'Corona', 'Jackson Heights', 'Flushing'],
    },
  },
];
