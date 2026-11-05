// Content for the service pages other than Well child exams (that one has its own page and data).
// Kids services are rewritten in plain words from the live peds4kids.com pages.
// Grown-up services (except IV infusions) are NOT on the old site. Their text is short and general.
// TODO: ask the practice to review every page, and the grown-up pages most of all, before launch.

export type Block =
  | { type: 'cards'; title: string; text?: string; items: { title: string; text: string }[] }
  | { type: 'list'; title: string; text?: string; items: string[] }
  | { type: 'prices'; title: string; text?: string; items: { name: string; price: string; text: string; mix: string }[]; note?: string };

export type ServiceTopic = {
  slug: string;
  kind: 'kids' | 'grownup';
  title: string;
  h1: string;
  description: string;
  lede: string;
  tags: string[];
  photo: string; // key in data/images.ts
  blocks: Block[];
  faqs: { q: string; a: string }[];
};

export const serviceTopics: ServiceTopic[] = [
  {
    slug: 'sick-visits',
    kind: 'kids',
    title: 'Sick visits',
    h1: 'Sick visits in Rego Park, Queens',
    description: 'Same-day sick visits for children in Rego Park, Queens. Rapid strep and flu tests, and video visits through the Healow app, at Peds For Kids.',
    lede: 'A cough or sore throat can be a simple cold or something more. When your child does not feel well, we offer same-day visits and video visits, and we test for flu and strep right in the office.',
    tags: ['Same-day visits', 'Rapid strep and flu tests', 'Video visits'],
    photo: 'svc-sick-visits',
    blocks: [
      {
        type: 'list',
        title: 'When to bring your child in',
        text: 'Not sure if it is a sick visit or just the sniffles? Call us. We are happy to talk it through. These signs mean it is time to come in:',
        items: ['High fever or a fever that stays', 'Pain in the throat, ears or tummy that does not go away', 'A bad headache', 'Noisy, fast or hard breathing', 'Eye goo that glues the eyelids shut and does not get better'],
      },
      {
        type: 'cards',
        title: 'What happens at a sick visit',
        items: [
          { title: 'Quick check', text: 'We check temperature, pulse and blood pressure, and ask about the symptoms.' },
          { title: 'Tests in the office', text: 'We may do a rapid flu test, a rapid strep test or a nose swab for viruses.' },
          { title: 'A clear plan', text: 'We explain what is wrong and the best treatment, so you know what to do at home.' },
        ],
      },
      {
        type: 'cards',
        title: 'Illnesses we treat',
        text: 'We care for the most common childhood illnesses, and more.',
        items: [
          { title: 'Strep throat', text: 'A germ that causes a very sore throat. Our rapid test gives an answer fast.' },
          { title: 'Ear pain', text: 'It may be an ear infection, swimmer’s ear or a cold. We look in the ears and choose the right care.' },
          { title: 'Urinary tract infection', text: 'Can cause pain or burning when peeing, side pain or bedwetting, from babies to teens.' },
          { title: 'Colds', text: 'Very common. Many young children get 6 to 8 colds a year, most of all in daycare.' },
        ],
      },
    ],
    faqs: [
      { q: 'Can I get a same-day appointment?', a: 'Yes. We offer same-day sick visits. Call us at 718-268-9100 as early as you can.' },
      { q: 'Can we see someone by video?', a: 'Yes. You can have a video visit through the Healow app for many small illnesses.' },
      { q: 'Does my child need a flu or strep test?', a: 'We decide at the visit. Both rapid tests are done in our office, so you get answers fast.' },
    ],
  },
  {
    slug: 'vaccines',
    kind: 'kids',
    title: 'Vaccines',
    h1: 'Vaccines for children in Rego Park, Queens',
    description: 'Routine childhood vaccines on schedule at Peds For Kids in Rego Park, Queens, with clear answers to your questions.',
    lede: 'Vaccines protect your child from serious illness. We give routine shots on schedule, explain each one in clear words and answer every question you have.',
    tags: ['Shots on schedule', 'Clear answers', 'Babies to teens'],
    photo: 'svc-vaccines',
    blocks: [
      {
        type: 'cards',
        title: 'How we do vaccines',
        items: [
          { title: 'We check the record', text: 'At each visit we look at your child’s shot record and see what is due.' },
          { title: 'We explain first', text: 'We tell you what each vaccine does and what to expect, before we give it.' },
          { title: 'We keep it gentle', text: 'Our team is kind and quick. Little ones often leave with a smile and a colorful bandage.' },
        ],
      },
      {
        type: 'list',
        title: 'Vaccines your child may need by age 13',
        text: 'Your provider will give you the right schedule for your child.',
        items: ['Chickenpox (if your child has not had it)', 'Measles, mumps and rubella (MMR)', 'Hepatitis A and B', 'Meningococcal', 'Human papillomavirus (HPV)', 'Tetanus, diphtheria and whooping cough booster (Tdap)'],
      },
      {
        type: 'list',
        title: 'Official schedules',
        text: 'Want to read the full schedule? These groups publish it for free.',
        items: ['Immunize.org vaccine information statements: immunize.org/vis', 'CDC child and teen schedule: cdc.gov/vaccines'],
      },
    ],
    faqs: [
      { q: 'Are shots given at well visits?', a: 'Yes. We check the record and give the shots that are due, after we explain them.' },
      { q: 'Can I bring my child’s old shot records?', a: 'Please do. They help us keep your child on the right schedule.' },
      { q: 'I am worried about a vaccine. Can I ask?', a: 'Of course. No question is silly. Ask at the visit or call us ahead of time.' },
    ],
  },
  {
    slug: 'asthma',
    kind: 'kids',
    title: 'Asthma',
    h1: 'Asthma care for children in Rego Park, Queens',
    description: 'Asthma diagnosis and treatment for children in Rego Park, Queens. Breathing tests, allergy testing and a clear plan at Peds For Kids.',
    lede: 'Wheezing and coughing are common signs of asthma. With the right care, your child can breathe easier and keep playing. We test, make a plan with you and help with allergies that can set off asthma.',
    tags: ['Breathing tests', 'Allergy testing on site', 'A plan for home'],
    photo: 'svc-asthma',
    blocks: [
      {
        type: 'cards',
        title: 'What is asthma?',
        text: 'Asthma is the most common long-term lung condition in young kids. It makes the airways inflamed, sensitive, swollen and full of mucus, and the muscles around them squeeze tight. There is no cure, but good care helps a lot.',
        items: [
          { title: 'Very common', text: 'About 6 million children in the United States have asthma.' },
          { title: 'It can run in families', text: 'Asthma and allergies often appear in the same family.' },
          { title: 'It can be controlled', text: 'With the right plan, kids can enjoy school, sports and play.' },
        ],
      },
      {
        type: 'list',
        title: 'Signs of asthma',
        items: ['Coughing', 'Wheezing', 'Fast breathing', 'Trouble breathing or short breath', 'Colds that keep settling in the chest'],
      },
      {
        type: 'cards',
        title: 'How we find and treat it',
        items: [
          { title: 'Exam and history', text: 'We check your child and ask about family health and what seems to trigger symptoms.' },
          { title: 'Airflow test', text: 'We may measure how air moves in and out of the lungs.' },
          { title: 'Allergy tests', text: 'Allergies can trigger asthma, so we offer allergy testing and treatment on site.' },
          { title: 'A treatment plan', text: 'Quick-relief medicine for symptoms, and long-term medicine to calm the airways. Given by inhaler or nebulizer.' },
        ],
      },
    ],
    faqs: [
      { q: 'Does asthma ever go away?', a: 'There is no cure, but with the right treatment most children live active, healthy lives.' },
      { q: 'What triggers asthma?', a: 'Common triggers are allergies, colds, dust, pets and smoke. We help you find your child’s triggers.' },
      { q: 'When should I call?', a: 'Call us if your child has trouble breathing, wheezes often, or has a cough that will not go away. For an emergency, call 911.' },
    ],
  },
  {
    slug: 'allergies',
    kind: 'kids',
    title: 'Allergies',
    h1: 'Allergy testing and care in Rego Park, Queens',
    description: 'Allergy tests and treatment for children in Rego Park, Queens. Food, pet, dust, skin and insect sting allergies at Peds For Kids.',
    lede: 'An allergy can be a big worry. With the right diagnosis and treatment, you can feel calm about your child’s allergies. We offer allergy tests and treatment, so your child can play and learn.',
    tags: ['Allergy testing', 'All kinds of allergies', 'Treatment plans'],
    photo: 'svc-allergies',
    blocks: [
      {
        type: 'list',
        title: 'Signs of an allergy',
        text: 'An allergy is when the body overreacts to a food or substance. Look for:',
        items: ['Skin rashes', 'Sneezing', 'Coughing', 'Upset tummy', 'Trouble breathing', 'Stuffy nose'],
      },
      {
        type: 'cards',
        title: 'Common childhood allergies',
        items: [
          { title: 'Food', text: 'Affects up to 6 million children. Some, like peanut, can cause a serious reaction called anaphylaxis.' },
          { title: 'Insect stings', text: 'Bees, wasps, hornets and fire ants can cause swelling and pain. Serious reactions are rare.' },
          { title: 'Skin', text: 'Plants like poison ivy, foods or medicines can cause a bumpy, red rash.' },
          { title: 'Dust', text: 'Dust mites cause sneezing, watery eyes and a runny nose.' },
          { title: 'Pets', text: 'Can cause sneezing or rashes, even after the pet has left the room.' },
        ],
      },
      {
        type: 'cards',
        title: 'Finding and treating the cause',
        items: [
          { title: 'Exam and family history', text: 'Allergies often run in families, along with asthma and eczema.' },
          { title: 'Blood or skin tests', text: 'These help find exactly what your child is allergic to.' },
          { title: 'Treatment options', text: 'Short-term and long-term choices, such as decongestants, antihistamines, steroids, allergy shots or tablets.' },
        ],
      },
    ],
    faqs: [
      { q: 'Can allergies cause other problems?', a: 'Yes. Allergies can cause hay fever and may lead to ear infections, so early care helps.' },
      { q: 'Do allergies and asthma go together?', a: 'They often do. Allergies can set off asthma, so we look at both.' },
      { q: 'What if my child has a bad reaction?', a: 'Trouble breathing or swelling of the face or throat is an emergency. Call 911.' },
    ],
  },
  {
    slug: 'telemedicine',
    kind: 'kids',
    title: 'Telemedicine',
    h1: 'Telemedicine for kids in Rego Park, Queens',
    description: 'Video visits and the Healow app for Peds For Kids families. Message your provider, refill medicine and see results from home.',
    lede: 'Care can come to you with a few taps on your phone. We use the secure Healow app for video visits, messages, refills and test results, so you can get help without leaving home.',
    tags: ['Video visits', 'Healow app', 'Secure and private'],
    photo: 'svc-telemedicine',
    blocks: [
      {
        type: 'cards',
        title: 'What you can do in the Healow app',
        items: [
          { title: 'Message us', text: 'Send and receive messages with your provider.' },
          { title: 'Book visits', text: 'Search for and book appointments, and get reminders.' },
          { title: 'Manage medicine', text: 'Ask for refills and get medicine reminders.' },
          { title: 'See records', text: 'View lab and imaging results, vital signs, shots and allergy records.' },
        ],
      },
      {
        type: 'list',
        title: 'A video visit can help with',
        text: 'A video visit is a virtual appointment with a provider. It works well for small illnesses, and may keep your child from missing school.',
        items: ['Cold or flu', 'Cough or sore throat', 'Sinus infection or stuffy nose', 'Pink eye or eye infection', 'Seasonal allergies', 'Poison oak or ivy'],
      },
    ],
    faqs: [
      { q: 'Is telemedicine safe and private?', a: 'Yes. The Healow app is secure and keeps your child’s records private.' },
      { q: 'Do I need special equipment?', a: 'No. A phone or tablet with a camera and internet is enough.' },
      { q: 'Can my child get a check-up by video?', a: 'Video visits are best for small illnesses. Well visits are done in the office.' },
    ],
  },
  {
    slug: 'weight-and-obesity',
    kind: 'kids',
    title: 'Healthy weight',
    h1: 'Healthy weight care for kids in Rego Park, Queens',
    description: 'Kind, practical help with healthy eating and weight for children and teens in Rego Park, Queens. Nutrition counseling at Peds For Kids.',
    lede: 'Weight can affect a child’s health and feelings. We offer kind nutrition counseling that helps children and teens reach a healthy weight, with realistic goals for the whole family.',
    tags: ['Nutrition counseling', 'Realistic goals', 'Whole family support'],
    photo: 'svc-weight-and-obesity',
    blocks: [
      {
        type: 'cards',
        title: 'What can cause it',
        text: 'The number of children with obesity has more than tripled since the 1970s. A few things can raise the risk, and often they work together.',
        items: [
          { title: 'Food habits', text: 'A diet with too many sugary or heavy foods.' },
          { title: 'Too little activity', text: 'Not enough play, sport or movement.' },
          { title: 'Family history', text: 'Weight patterns can run in families.' },
        ],
      },
      {
        type: 'list',
        title: 'Why it matters',
        text: 'Extra weight can raise a child’s chance of problems now and later:',
        items: ['High blood pressure', 'High cholesterol', 'Type 2 diabetes', 'Bone and joint problems', 'Shortness of breath and sleep apnea', 'Low self-esteem and bullying'],
      },
      {
        type: 'cards',
        title: 'How we help',
        items: [
          { title: 'Check BMI and growth', text: 'We use height, weight and a growth chart to see where your child is compared with other kids.' },
          { title: 'Blood tests when needed', text: 'We may test for health problems linked to weight.' },
          { title: 'Nutrition counseling', text: 'We talk about family eating and activity habits and set goals you can keep.' },
          { title: 'Slow and safe', text: 'Fast weight loss is not healthy. Children ages 6 to 11 should not lose more than about one pound a month.' },
        ],
      },
    ],
    faqs: [
      { q: 'Is my child overweight?', a: 'We use BMI and a growth chart. A BMI from the 85th to the 94th percentile is overweight, and the 95th and up is obesity.' },
      { q: 'Will you put my child on a diet?', a: 'We focus on healthy habits and gradual change for the whole family, not strict diets.' },
      { q: 'Do you offer nutrition products?', a: 'We offer USANA nutrition and health products. We will tell you if they are right for your child.' },
    ],
  },
  {
    slug: 'pediatric-and-adolescent-medicine',
    kind: 'kids',
    title: 'Teen care',
    h1: 'Pediatric and adolescent medicine in Rego Park, Queens',
    description: 'Pediatric and adolescent medicine for children from infancy to age 21 in Rego Park, Queens, at Peds For Kids.',
    lede: 'Your child’s body changes every day. We partner with you to make sure your child or teen is hitting the right milestones. We care for children from infancy to age 21.',
    tags: ['Infancy to age 21', 'Teen friendly', 'All in one place'],
    photo: 'svc-pediatric-and-adolescent-medicine',
    blocks: [
      {
        type: 'list',
        title: 'Pediatric care we offer',
        items: ['Well-child exams', 'Shots and vaccines', 'Blood tests in the office', 'Weight checks and nutrition counseling', 'Hearing and vision screening', 'Sick visits, with rapid strep and flu tests', 'Video visits'],
      },
      {
        type: 'cards',
        title: 'A well-child visit',
        text: 'A check-up that focuses on prevention. We usually see children at least once a year after age 3.',
        items: [
          { title: 'Growth check', text: 'Height and weight, and head size for babies and toddlers.' },
          { title: 'Screenings', text: 'Hearing, vision and other tests when needed.' },
          { title: 'Your questions', text: 'A good time to talk about behavior or development.' },
        ],
      },
      {
        type: 'list',
        title: 'Teen checks',
        text: 'As teens go through puberty, their visits change. They may be checked for:',
        items: ['Scoliosis', 'High blood pressure', 'Depression', 'Cholesterol', 'Sexually transmitted diseases'],
      },
    ],
    faqs: [
      { q: 'Until what age do you see patients?', a: 'We care for children and teens from infancy to age 21.' },
      { q: 'Do you help with sports health?', a: 'Yes. For teens who play sports, we talk about staying healthy and avoiding injuries.' },
      { q: 'Which shots are due by age 13?', a: 'Often chickenpox, MMR, hepatitis A and B, meningococcal, HPV and the Tdap booster. We will check your child’s record.' },
    ],
  },

  // ---------- Grown-up services ----------
  {
    slug: 'iv-vitamin-infusions',
    kind: 'grownup',
    title: 'IV vitamin infusions',
    h1: 'IV vitamin infusions in Rego Park, Queens',
    description: 'IV vitamin infusions in Rego Park, Queens. Vitamins, minerals and hydration for energy, immunity and glowing skin at Peds For Kids.',
    lede: 'Feeling tired? Vitamins, minerals and fluids go straight into the bloodstream through an IV, to help you feel recharged. Treatments are for adults and are planned after a medical check.',
    tags: ['For adults', '45 to 60 minutes', 'Custom blends'],
    photo: 'adult-iv-vitamin-infusions',
    blocks: [
      {
        type: 'cards',
        title: 'How it works',
        text: 'Sleep loss, stress, poor food and tiredness can drain your body. An IV bypasses the stomach, so vitamins and fluids are absorbed quickly. Results can vary.',
        items: [
          { title: 'Blood pressure check', text: 'A nurse or Dr. Daniela checks that your blood pressure is normal.' },
          { title: 'IV in your arm', text: 'You may feel a small pinch when the IV goes in.' },
          { title: 'Relax', text: 'The vitamins drip in slowly while you rest. It takes about 45 to 60 minutes.' },
        ],
      },
      {
        type: 'prices',
        title: 'IV packages',
        text: 'Each package comes in 250 ml of normal saline.',
        items: [
          { name: 'Stamina and endurance', price: '$229', text: 'For workout recovery and muscle repair.', mix: 'Glutathione, selenium, zinc, magnesium, vitamin C, B complex' },
          { name: 'Immunity boost', price: '$249', text: 'For colds, flu, sick days and jet lag.', mix: 'High-dose vitamin C (5000 mg), zinc, B complex, magnesium' },
          { name: 'Skin glow and antioxidant boost', price: '$249', text: 'Supports metabolism, the liver and even skin tone.', mix: 'Glutathione, selenium, magnesium, vitamin C, biotin' },
          { name: 'Myers', price: '$199', text: 'The classic Myers blend.', mix: 'B complex, vitamin C, magnesium, potassium' },
          { name: 'Vitamin C', price: '$149', text: 'Supports immunity and healing, and helps fight colds.', mix: 'Vitamin C' },
        ],
        note: 'Any other vitamin, mineral or amino acid is $20 more. Dr. Daniela can design a custom blend after a medical check. Please read and sign the consent form before treatment.',
      },
    ],
    faqs: [
      { q: 'Are IV infusions for children?', a: 'No. This service is for adults.' },
      { q: 'How long does a treatment take?', a: 'Usually 45 to 60 minutes.' },
      { q: 'Is there a form to sign?', a: 'Yes. You can find the consent form on our Patient forms page.' },
    ],
  },
  {
    slug: 'botox',
    kind: 'grownup',
    title: 'Botox',
    h1: 'Botox in Rego Park, Queens',
    description: 'Botox treatments for adults in Rego Park, Queens at Peds For Kids. Book a consultation to talk about your goals.',
    lede: 'Botox is a quick, gentle treatment that can soften fine lines and wrinkles. It is for adults. Call to book a consultation and talk about what you would like.',
    tags: ['For adults', 'Quick treatment', 'Consultation first'],
    photo: 'adult-botox',
    blocks: [
      {
        type: 'cards',
        title: 'What to expect',
        items: [
          { title: 'A talk first', text: 'We listen to your goals and tell you if the treatment is right for you.' },
          { title: 'A quick visit', text: 'Treatment is usually short. Your provider explains each step.' },
          { title: 'Aftercare tips', text: 'We tell you how to care for your skin after your visit.' },
        ],
      },
    ],
    faqs: [
      { q: 'Is Botox for teens or children?', a: 'No. Our grown-up services are for adults.' },
      { q: 'How do I start?', a: 'Call us or send a message to book a consultation.' },
    ],
  },
  {
    slug: 'dermal-fillers',
    kind: 'grownup',
    title: 'Dermal fillers',
    h1: 'Dermal fillers in Rego Park, Queens',
    description: 'Dermal filler treatments for adults in Rego Park, Queens at Peds For Kids. Book a consultation.',
    lede: 'Dermal fillers can help restore volume for a fresh, natural look. They are for adults. Book a consultation and we will talk about your goals.',
    tags: ['For adults', 'Natural look', 'Consultation first'],
    photo: 'adult-dermal-fillers',
    blocks: [
      {
        type: 'cards',
        title: 'What to expect',
        items: [
          { title: 'A talk first', text: 'We listen to your goals and explain your options.' },
          { title: 'A careful plan', text: 'Your provider plans the treatment with you, step by step.' },
          { title: 'Aftercare tips', text: 'We share simple tips to care for your skin after treatment.' },
        ],
      },
    ],
    faqs: [
      { q: 'Are fillers for children or teens?', a: 'No. Our grown-up services are for adults.' },
      { q: 'How do I start?', a: 'Call us or send a message to book a consultation.' },
    ],
  },
  {
    slug: 'microneedling',
    kind: 'grownup',
    title: 'Microneedling',
    h1: 'Microneedling in Rego Park, Queens',
    description: 'Microneedling skin treatments for adults in Rego Park, Queens at Peds For Kids. Book a consultation.',
    lede: 'Microneedling is a skin treatment that can help skin look smoother and more even. It is for adults. Book a consultation and we will talk about what is right for you.',
    tags: ['For adults', 'Skin care', 'Consent form'],
    photo: 'adult-microneedling',
    blocks: [
      {
        type: 'cards',
        title: 'What to expect',
        items: [
          { title: 'A talk first', text: 'We listen to your goals and tell you if the treatment is a good fit.' },
          { title: 'Read and sign', text: 'You will read and sign a consent form before treatment. You can find it on our Patient forms page.' },
          { title: 'Aftercare tips', text: 'We explain how to care for your skin afterward.' },
        ],
      },
    ],
    faqs: [
      { q: 'Where is the consent form?', a: 'On our Patient forms page. You can fill it in at home.' },
      { q: 'How do I start?', a: 'Call us or send a message to book a consultation.' },
    ],
  },
  {
    slug: 'facial-rejuvenation',
    kind: 'grownup',
    title: 'Facial rejuvenation',
    h1: 'Facial rejuvenation in Rego Park, Queens',
    description: 'Facial rejuvenation treatments for adults in Rego Park, Queens at Peds For Kids. Book a consultation.',
    lede: 'Facial rejuvenation treatments aim to bring back glow and tone. They are for adults. Book a consultation and we will plan care that fits you.',
    tags: ['For adults', 'Glow and tone', 'Consultation first'],
    photo: 'adult-facial-rejuvenation',
    blocks: [
      {
        type: 'cards',
        title: 'What to expect',
        items: [
          { title: 'A talk first', text: 'We learn about your skin and your goals.' },
          { title: 'A plan for you', text: 'Your provider suggests care that suits your skin.' },
          { title: 'Aftercare tips', text: 'We share simple skin care tips for after your visit.' },
        ],
      },
    ],
    faqs: [
      { q: 'Is it for teens?', a: 'No. Our grown-up services are for adults.' },
      { q: 'How do I start?', a: 'Call us or send a message to book a consultation.' },
    ],
  },
  {
    slug: 'led-light-therapy',
    kind: 'grownup',
    title: 'LED light therapy',
    h1: 'LED light therapy in Rego Park, Queens',
    description: 'LED light therapy skin care for adults in Rego Park, Queens at Peds For Kids. Book a consultation.',
    lede: 'LED light therapy is a gentle, relaxing skin treatment that uses soft light. It is for adults. Book a consultation to see if it is right for you.',
    tags: ['For adults', 'Gentle light', 'Relaxing'],
    photo: 'adult-led-light-therapy',
    blocks: [
      {
        type: 'cards',
        title: 'What to expect',
        items: [
          { title: 'A talk first', text: 'We listen to your skin goals.' },
          { title: 'Relax', text: 'You rest while the light does its work. Your provider explains each step.' },
          { title: 'Aftercare tips', text: 'We share simple tips to care for your skin afterward.' },
        ],
      },
    ],
    faqs: [
      { q: 'Is it for children?', a: 'No. Our grown-up services are for adults.' },
      { q: 'How do I start?', a: 'Call us or send a message to book a consultation.' },
    ],
  },
  {
    slug: 'prp-treatments',
    kind: 'grownup',
    title: 'PRP treatments',
    h1: 'PRP treatments in Rego Park, Queens',
    description: 'PRP skin treatments for adults in Rego Park, Queens at Peds For Kids. Book a consultation.',
    lede: 'PRP treatments use a part of your own blood to support your skin’s natural healing. They are for adults. Book a consultation to learn more.',
    tags: ['For adults', 'Uses your own blood', 'Consultation first'],
    photo: 'adult-prp-treatments',
    blocks: [
      {
        type: 'cards',
        title: 'What to expect',
        items: [
          { title: 'A talk first', text: 'We explain how PRP works and if it fits your goals.' },
          { title: 'A careful process', text: 'Your provider explains each step before treatment.' },
          { title: 'Aftercare tips', text: 'We share simple tips to care for your skin afterward.' },
        ],
      },
    ],
    faqs: [
      { q: 'What does PRP mean?', a: 'It stands for platelet-rich plasma, a part of your own blood.' },
      { q: 'How do I start?', a: 'Call us or send a message to book a consultation.' },
    ],
  },
];
