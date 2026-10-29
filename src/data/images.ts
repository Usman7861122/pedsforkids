/**
 * Photo slots. Drop licensed photos into /public/images/ and set `src`.
 * Any slot with no `src` falls back to the paper illustration, so nothing breaks.
 */
export type Photo = { src?: string; alt: string };

export const photos: Record<string, Photo> = {
  // Services cards (one per service slug)
  'svc-well-child-exams': { src: '/images/svc-well-child-exams.jpg', alt: 'A smiling child having her height checked' },
  'svc-sick-visits': { src: '/images/svc-sick-visits.jpg', alt: 'A nurse practitioner gently checking a child’s ear' },
  'svc-vaccines': { src: '/images/svc-vaccines.jpg', alt: 'A cheerful child showing a colorful bandage' },
  'svc-asthma': { src: '/images/svc-asthma.jpg', alt: 'A pediatrician listening to a child’s breathing' },
  'svc-allergies': { src: '/images/svc-allergies.jpg', alt: 'A child smelling flowers outdoors' },
  'svc-telemedicine': { src: '/images/svc-telemedicine.jpg', alt: 'A mother and child on a video visit with their doctor' },
  'svc-weight-and-obesity': { src: '/images/svc-weight-and-obesity.jpg', alt: 'Kids enjoying fresh fruit and vegetables' },
  'svc-pediatric-and-adolescent-medicine': { src: '/images/svc-pediatric-and-adolescent-medicine.jpg', alt: 'A smiling teenager talking with a provider' },
  // Grown-up services (About page). Add licensed photos to /public/images/ and set src.
  'adult-botox': { src: '/images/adult-botox.jpg', alt: 'A woman receiving a gentle Botox injection' },
  'adult-dermal-fillers': { src: '/images/adult-dermal-fillers.jpg', alt: 'A woman receiving a dermal filler treatment' },
  'adult-microneedling': { src: '/images/adult-microneedling.jpg', alt: 'A provider giving a microneedling skin treatment' },
  'adult-facial-rejuvenation': { src: '/images/adult-facial-rejuvenation.jpg', alt: 'A woman receiving a facial treatment with a mask' },
  'adult-led-light-therapy': { src: '/images/adult-led-light-therapy.jpg', alt: 'A woman relaxing under a pink LED light therapy mask' },
  'adult-prp-treatments': { src: '/images/adult-prp-treatments.jpg', alt: 'Scientists examining a blood sample for PRP treatment' },
  'adult-iv-vitamin-infusions': { src: '/images/adult-iv-vitamin-infusions.jpg', alt: 'An IV drip stand in a treatment room' },
  // Well child exams page
  'wce-hero': { src: '/images/wce-hero.jpg', alt: 'A smiling doctor checking a happy baby while mom holds him' },
  'wce-toddler': { src: '/images/wce-toddler.jpg', alt: 'A pediatrician listening to a little girl’s back on a sofa' },
  'wce-vaccine': { src: '/images/wce-vaccine.jpg', alt: 'A smiling girl getting a colorful bandage after her shot' },
  'wce-baby': { src: '/images/wce-baby.jpg', alt: 'A baby sitting up during a gentle check-up' },
  'wce-teen': { src: '/images/wce-teen.jpg', alt: 'A boy and his mother talking with a doctor' },
  'wce-play': { src: '/images/wce-play.jpg', alt: 'A boy in a doctor’s coat listening to his teddy bear' },
  // Services photo strip
  strip1: { alt: 'A smiling child at a check-up' },
  strip2: { alt: 'A nurse practitioner listening to a child’s heartbeat' },
  strip3: { alt: 'A happy family in the waiting room' },
  // Press
  doctor: { src: '/images/dr-daniela.jpg', alt: 'Dr. Daniela Atanassova-Lineva in her white coat' },
  // Testimonials
  family1: { src: '/images/svc-telemedicine.jpg', alt: 'A parent hugging a smiling toddler' },
  family2: { src: '/images/svc-allergies.jpg', alt: 'Two kids laughing together' },
  // Gallery: real art from the old site (hot-linked; run scripts/fetch-old-site-images.sh to save local copies)
  gallery0: { src: 'https://sa1s3optim.patientpop.com/assets/images/provider/photos/1949846.jpeg', alt: 'Art made by a patient for Dr. Daniela' },
  gallery1: { src: 'https://sa1s3optim.patientpop.com/assets/images/provider/photos/1949847.jpeg', alt: 'Art made by a patient for Dr. Daniela' },
  gallery2: { src: 'https://sa1s3optim.patientpop.com/assets/images/provider/photos/1949848.jpeg', alt: 'Art made by a patient for Dr. Daniela' },
  gallery3: { src: 'https://sa1s3optim.patientpop.com/assets/images/provider/photos/1949849.jpeg', alt: 'Art made by a patient for Dr. Daniela' },
  gallery4: { src: 'https://sa1s3optim.patientpop.com/assets/images/provider/photos/1949850.jpeg', alt: 'Art made by a patient for Dr. Daniela' },
  gallery5: { src: 'https://sa1s3optim.patientpop.com/assets/images/provider/photos/1949851.jpeg', alt: 'Art made by a patient for Dr. Daniela' },
  // Providers (headshots)
  provider0: { src: '/images/dr-daniela.jpg', alt: 'Dr. Daniela Atanassova-Lineva' },
  provider1: { src: 'https://sa1s3optim.patientpop.com/assets/production/practices/393f89bc5848d93e98bd0771889762273578c143/images/1949840.png', alt: 'Lisa M. Guan, CPNP' },
  provider2: { src: 'https://sa1s3optim.patientpop.com/assets/production/practices/393f89bc5848d93e98bd0771889762273578c143/images/2692893.png', alt: 'Miriam Samekhova, CFNP' },
  provider3: { src: 'https://sa1s3optim.patientpop.com/assets/production/practices/393f89bc5848d93e98bd0771889762273578c143/images/2824031.jpg', alt: 'Michal Sarikov, FNP-BC' },
  // Blog
  blog0: { src: '/images/svc-pediatric-and-adolescent-medicine.jpg', alt: 'A parent talking with a child' },
  blog1: { src: '/images/svc-well-child-exams.jpg', alt: 'A baby being gently checked' },
  blog2: { src: '/images/svc-sick-visits.jpg', alt: 'A child with a cast on their arm' },
  // Contact
  clinic: { src: '/images/say-hello.jpg', alt: 'A mother and her toddler reading a picture book together' },
};
