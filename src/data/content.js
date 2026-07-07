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
  MapPinned,
  Medal,
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
  { name: 'Dr. Meera Sharma', role: 'Director', text: 'Leads institutional planning, parent engagement and quality assurance.' },
  { name: 'Rajesh Kumar', role: 'Principal', text: 'Coordinates special school academics, activities and learner progress.' },
  { name: 'Neha Jain', role: 'Special Educator', text: 'Designs IEP goals, classroom strategies and child-centered interventions.' },
  { name: 'Amit Verma', role: 'Therapy Coordinator', text: 'Supports therapy scheduling, documentation and multidisciplinary reviews.' },
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

export const notices = [
  { title: 'Admission Enquiry Open for Special School', date: '7 July 2026', category: 'Admission', file: '/docs/prospectus.pptx' },
  { title: 'Professional Course Prospectus Available', date: '5 July 2026', category: 'Courses', file: '/docs/prospectus.pptx' },
  { title: 'Parent Review Meeting Schedule', date: '25 June 2026', category: 'Parents', file: '/docs/prospectus.pptx' },
  { title: 'Therapy Assessment Camp Registration', date: '12 June 2026', category: 'Therapy', file: '/docs/prospectus.pptx' },
];

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
  { icon: PhoneCall, title: 'Phone', text: '+91 94140 00000' },
  { icon: ClipboardList, title: 'Working Hours', text: 'Monday to Saturday, 9:00 AM - 4:00 PM' },
  { icon: CalendarDays, title: 'Admissions', text: 'Open for school, therapy and teacher training enquiries' },
];
