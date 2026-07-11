import {
  Award,
  BadgeCheck,
  BookOpen,
  Brain,
  Building2,
  CalendarDays,
  ClipboardList,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Home,
  LifeBuoy,
  Mail,
  MapPinned,
  Mic,
  Palette,
  PhoneCall,
  School,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
  Users,
} from 'lucide-react';

export const galleryImages = [
  { src: '/images/campus-building.jpeg', title: 'Campus Building', category: 'Campus', alt: 'Karam Manovikas Sansthan campus building in Alwar' },
  { src: '/images/assembly.jpeg', title: 'Inclusive Assembly', category: 'Activities', alt: 'Students and staff taking a pledge in the school courtyard' },
  { src: '/images/event-speech.jpeg', title: 'Awareness Address', category: 'Events', alt: 'Speaker addressing gathering on International Disability Day' },
  { src: '/images/welcome-guest.jpeg', title: 'Guest Welcome', category: 'Events', alt: 'Guest being welcomed with a marigold garland' },
  { src: '/images/student-performance.jpeg', title: 'Student Performance', category: 'Students', alt: 'Students performing during a school event' },
  { src: '/images/award-ceremony.jpeg', title: 'Award Ceremony', category: 'Awards', alt: 'Student receiving award at school function' },
  { src: '/images/gallery/gallery-01.jpeg', title: 'Campus Corridor Gathering', category: 'Campus', alt: 'Students and staff gathered in the campus corridor' },
  { src: '/images/gallery/gallery-02.jpeg', title: 'Outdoor Group Session', category: 'Activities', alt: 'Students seated outdoors for a group session' },
  { src: '/images/gallery/gallery-03.jpeg', title: 'Playground Activity', category: 'Activities', alt: 'Students participating in a playground activity' },
  { src: '/images/gallery/gallery-04.jpeg', title: 'Classroom Celebration', category: 'Events', alt: 'Students celebrating inside a classroom' },
  { src: '/images/gallery/gallery-05.jpeg', title: 'Rangoli Activity', category: 'Activities', alt: 'Students creating a colorful rangoli together' },
  { src: '/images/gallery/gallery-06.jpeg', title: 'Sports Practice', category: 'Activities', alt: 'Students practicing sports on the ground' },
  { src: '/images/gallery/gallery-07.jpeg', title: 'Sports Achievement', category: 'Awards', alt: 'Students posing with medals after a sports event' },
  { src: '/images/gallery/gallery-08.jpeg', title: 'Creative Classroom', category: 'Students', alt: 'Students doing a creative classroom activity' },
  { src: '/images/gallery/gallery-09.jpeg', title: 'Learning Support', category: 'Students', alt: 'A student working with learning material at a desk' },
  { src: '/images/gallery/gallery-10.jpeg', title: 'Lawn Group Activity', category: 'Activities', alt: 'Students and staff participating in a lawn activity' },
  { src: '/images/gallery/gallery-11.jpeg', title: 'Yoga Formation', category: 'Activities', alt: 'Students practicing yoga in a large formation' },
  { src: '/images/gallery/gallery-12.jpeg', title: 'School Assembly', category: 'Events', alt: 'Students assembled for a school program' },
  { src: '/images/gallery/gallery-13.jpeg', title: 'Resource Room Learning', category: 'Students', alt: 'Students learning with teachers in the resource room' },
  { src: '/images/gallery/gallery-14.jpeg', title: 'Computer Session', category: 'Students', alt: 'Students attending a supervised computer learning session' },
  { src: '/images/gallery/gallery-15.jpeg', title: 'Awareness Rally', category: 'Events', alt: 'Students and staff holding an awareness banner outside campus' },
  { src: '/images/gallery/gallery-16.jpeg', title: 'Group Learning Circle', category: 'Students', alt: 'Students seated around a table for guided learning' },
  { src: '/images/gallery/gallery-17.jpeg', title: 'Community Outreach', category: 'Events', alt: 'Students and community members at an outreach program' },
  { src: '/images/gallery/gallery-18.jpeg', title: 'Campus Group Photo', category: 'Campus', alt: 'Students and staff posing outside the campus entrance' },
  { src: '/images/gallery/gallery-19.jpeg', title: 'Campus Courtyard', category: 'Campus', alt: 'View of the school courtyard and building' },
  { src: '/images/gallery/gallery-20.jpeg', title: 'Classroom Interaction', category: 'Students', alt: 'Students interacting during a classroom session' },
  { src: '/images/gallery/gallery-21.jpeg', title: 'Student Discussion', category: 'Workshop', alt: 'Students participating in a guided discussion' },
  { src: '/images/gallery/gallery-22.jpeg', title: 'Indoor Assembly', category: 'Events', alt: 'Students assembled in an indoor hall' },
  { src: '/images/gallery/gallery-23.jpeg', title: 'Disability Day Guests', category: 'Events', alt: 'Guests seated at an International Disability Day program' },
  { src: '/images/gallery/gallery-24.jpeg', title: 'Disability Day Program', category: 'Events', alt: 'Guests and students during a campus celebration' },
  { src: '/images/gallery/gallery-25.jpeg', title: 'Cultural Performance', category: 'Events', alt: 'Students performing during a cultural event' },
  { src: '/images/gallery/gallery-26.jpeg', title: 'Dance Performance', category: 'Events', alt: 'Students performing a dance in the courtyard' },
  { src: '/images/gallery/gallery-27.jpeg', title: 'Stage Performance', category: 'Events', alt: 'A student performing on stage during a program' },
  { src: '/images/gallery/gallery-28.jpeg', title: 'Student Performance Moment', category: 'Events', alt: 'A student performing before guests and classmates' },
  { src: '/images/gallery/gallery-29.jpeg', title: 'Courtyard Presentation', category: 'Events', alt: 'A student presenting during a courtyard event' },
  { src: '/images/gallery/gallery-30.jpeg', title: 'Guest Welcome Ritual', category: 'Events', alt: 'Guests being welcomed during a school event' },
  { src: '/images/gallery/gallery-31.jpeg', title: 'Training Classroom', category: 'Workshop', alt: 'Trainees attending a classroom workshop' },
  { src: '/images/gallery/gallery-32.jpeg', title: 'Training Group Photo', category: 'Workshop', alt: 'Training participants posing for a group photo' },
  { src: '/images/gallery/gallery-33.jpeg', title: 'School Visit', category: 'Campus', alt: 'Students and staff during a school visit' },
  { src: '/images/gallery/gallery-34.jpeg', title: 'Field Visit', category: 'Activities', alt: 'Students visiting an outdoor location with staff' },
  { src: '/images/gallery/gallery-35.jpeg', title: 'Campus Entry Visit', category: 'Campus', alt: 'Students and visitors near the campus entrance' },
  { src: '/images/gallery/gallery-36.jpeg', title: 'Learning Table Session', category: 'Students', alt: 'Students working together at a classroom table' },
  { src: '/images/gallery/gallery-37.jpeg', title: 'Teacher Training Session', category: 'Workshop', alt: 'Teacher leading a classroom training session' },
  { src: '/images/gallery/gallery-38.jpeg', title: 'Group Classroom Session', category: 'Workshop', alt: 'Students and trainees seated for a classroom session' },
  { src: '/images/gallery/gallery-39.jpeg', title: 'Campus Interaction', category: 'Campus', alt: 'Staff interacting with visitors in the campus courtyard' },
  { src: '/images/gallery/gallery-40.jpeg', title: 'Therapy Room Activity', category: 'Therapy', alt: 'Students participating in a therapy room activity' },
  { src: '/images/gallery/gallery-41.jpeg', title: 'Outdoor Learning Assembly', category: 'Activities', alt: 'Students seated outdoors for learning and awareness' },
  { src: '/images/gallery/gallery-42.jpeg', title: 'Awareness Discussion', category: 'Workshop', alt: 'Students and staff during an awareness discussion' },
  { src: '/images/gallery/gallery-43.jpeg', title: 'Interactive Awareness Session', category: 'Workshop', alt: 'Students and staff in an interactive awareness session' },
  { src: '/images/gallery/gallery-44.jpeg', title: 'Morning Assembly Ground', category: 'Activities', alt: 'Students gathered on the ground for assembly' },
  { src: '/images/gallery/gallery-45.jpeg', title: 'Peer Learning Group', category: 'Students', alt: 'Students learning together in a small group' },
  { src: '/images/gallery/gallery-46.jpeg', title: 'Small Group Study', category: 'Students', alt: 'Students working in a small outdoor study group' },
  { src: '/images/gallery/gallery-47.jpeg', title: 'Classroom Exam Session', category: 'Workshop', alt: 'Students attending a classroom exam or training session' },
  { src: '/images/gallery/gallery-48.jpeg', title: 'Guided Learning Activity', category: 'Students', alt: 'Students receiving guided learning support' },
  { src: '/images/gallery/gallery-49.jpeg', title: 'Creative Group Activity', category: 'Students', alt: 'Students doing a creative group activity' },
  { src: '/images/gallery/gallery-50.jpeg', title: 'Toy Library Session', category: 'Students', alt: 'Students using learning materials in the toy library' },
];

export const stats = [
  { value: 23, suffix: '+', label: 'Years of Service' },
  { value: 600, suffix: '+', label: 'Children Supported' },
  { value: 12, suffix: '+', label: 'Therapy & Skill Areas' },
  { value: 3, suffix: '+', label: 'Professional Courses' },
];

export const programs = [
  {
    icon: School,
    title: 'Special School',
    text: 'Individualized education, life skills, daily living support and joyful learning for children with special needs.',
    link: '/special-school',
  },
  {
    icon: GraduationCap,
    title: 'Professional Courses',
    text: 'RCI-oriented teacher training pathways including B.Ed, D.Ed and NTT preparation for future educators.',
    link: '/professional-courses',
  },
  {
    icon: Stethoscope,
    title: 'Therapy Services',
    text: 'Speech, occupational, behavioral, sensory and remedial support designed around each learner.',
    link: '/special-school',
  },
  {
    icon: Palette,
    title: 'Vocational Training',
    text: 'Practical skill-building in art, craft, self-care, communication and work-readiness.',
    link: '/special-school',
  },
];

export const whyChoose = [
  { icon: BadgeCheck, title: 'Established in 2001', text: 'A trusted Alwar institution with deep community roots and consistent social impact.' },
  { icon: HeartHandshake, title: 'Child-Centered Care', text: 'Every plan begins with the child, family goals and measurable developmental progress.' },
  { icon: Users, title: 'Experienced Team', text: 'Special educators, therapists and trainers collaborate through structured reviews.' },
  { icon: ShieldCheck, title: 'Safe Campus', text: 'Accessible spaces, supportive routines and respectful supervision throughout the day.' },
];

export const facilities = [
  { icon: Building2, title: 'Accessible Campus', text: 'Calm classrooms, activity areas and circulation designed for supervised learning.' },
  { icon: Brain, title: 'Therapy Rooms', text: 'Dedicated spaces for sensory, speech, occupational and remedial interventions.' },
  { icon: BookOpen, title: 'Resource Library', text: 'Teaching aids, visual schedules, adaptive learning material and assessment tools.' },
  { icon: Home, title: 'Life Skills Lab', text: 'Practice-led training for daily living, hygiene, social behavior and independence.' },
];

export const courses = [
  {
    title: 'B.Ed Special Education',
    duration: '2 Years',
    eligibility: 'Graduation as per university and RCI norms',
    text: 'Professional teacher preparation for inclusive classrooms, disability studies, assessment and intervention planning.',
  },
  {
    title: 'D.Ed Special Education',
    duration: '2 Years',
    eligibility: 'Senior secondary as per applicable norms',
    text: 'Foundational special education training for classroom readiness, practical teaching and child development support.',
  },
  {
    title: 'NTT',
    duration: '1-2 Years',
    eligibility: 'Senior secondary or equivalent',
    text: 'Nursery teacher training focused on early childhood education, activity-based learning and classroom management.',
  },
];

export const disabilities = [
  'Intellectual Disability',
  'Autism Spectrum Support',
  'Learning Difficulties',
  'Multiple Disability Support',
  'Speech and Language Needs',
  'Behavioral and Adaptive Skill Needs',
];

export const therapies = [
  { icon: Mic, title: 'Speech Therapy', text: 'Communication, articulation, language readiness and social expression.' },
  { icon: LifeBuoy, title: 'Occupational Therapy', text: 'Motor planning, sensory processing, posture and daily living skills.' },
  { icon: Brain, title: 'Behavioral Support', text: 'Positive routines, emotional regulation and classroom participation.' },
  { icon: Sparkles, title: 'Remedial Education', text: 'Concept clarity, literacy, numeracy and learner-specific academic support.' },
];

export const timeline = [
  { year: '2001', title: 'Institution Established', text: 'Karam Manovikas Sansthan began its mission for special education and rehabilitation support in Alwar.' },
  { year: '2008', title: 'Expanded Therapy Support', text: 'Structured therapy and life-skill interventions became part of the daily learning program.' },
  { year: '2016', title: 'Professional Training Focus', text: 'Teacher training and awareness programs strengthened the institute’s education outreach.' },
  { year: '2026', title: 'Modern Learning Campus', text: 'Digital-first communication, community events and professional programs continue to grow.' },
];

export const team = [
  {
    name: 'K.S. Gaur',
    role: 'Director',
    image: '/images/director-ks-gaur.jpeg',
    text: 'Guides Karam Manovikas Sansthan with steady leadership, institutional planning and parent-focused support.',
  },
];

export const events = [
  {
    title: 'International Disability Day Celebration',
    date: '3 December 2026',
    type: 'Upcoming',
    image: '/images/assembly.jpeg',
    text: 'Awareness pledge, cultural performances, parent interaction and recognition of student achievements.',
  },
  {
    title: 'Student Talent & Awards Ceremony',
    date: '14 November 2025',
    type: 'Previous',
    image: '/images/award-ceremony.jpeg',
    text: 'Students were recognized for progress in academics, life skills, sportsmanship and creative expression.',
  },
  {
    title: 'Community Sensitization Workshop',
    date: '21 September 2025',
    type: 'Previous',
    image: '/images/event-speech.jpeg',
    text: 'Teachers, families and guests discussed inclusion, disability rights and practical support systems.',
  },
];

// Add client notices here when they are ready to publish.
// Example: { id: 1, title: '', category: '', date: '', pdf: '' }
export const notices = [];

export const faqs = [
  { q: 'How does admission begin?', a: 'Families can call, WhatsApp or visit the institute. The team conducts an interaction and recommends a suitable education or therapy plan.' },
  { q: 'Do you prepare Individual Education Plans?', a: 'Yes. IEP goals are created from assessment, parent priorities and classroom observations, then reviewed at regular intervals.' },
  { q: 'Are professional courses recognized?', a: 'The course page is structured for RCI-oriented special education programs. Final admission is subject to current regulatory and university norms.' },
  { q: 'Can parents receive guidance?', a: 'Yes. Parent counselling, home strategies and progress discussions are part of the support model.' },
];

export const objectives = [
  { icon: Target, title: 'Build Independence', text: 'Develop communication, self-care, social behavior and daily living confidence.' },
  { icon: HandHeart, title: 'Support Families', text: 'Guide parents with practical strategies, assessments and steady progress reviews.' },
  { icon: Award, title: 'Train Educators', text: 'Prepare compassionate professionals for special and inclusive education.' },
  { icon: MapPinned, title: 'Serve Community', text: 'Create awareness, inclusion and access for children and adults with disabilities.' },
];

export const contactCards = [
  { icon: MapPinned, title: 'Address', text: 'B Block, Budh Vihar, Alwar, Rajasthan' },
  { icon: PhoneCall, title: 'Phone', text: '+91 9414240645' },
  { icon: Mail, title: 'Email', text: 'Kmvsansthan@gmail.com' },
  { icon: ClipboardList, title: 'Working Hours', text: 'Monday to Saturday, 9:00 AM - 4:00 PM' },
  { icon: CalendarDays, title: 'Admissions', text: 'Open for school, therapy and teacher training enquiries' },
];


