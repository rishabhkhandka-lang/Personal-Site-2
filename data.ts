// ============================================================
// Central content source for the entire site.
// ============================================================

export const profile = {
  name: "Rishabh S. Khandka",
  fullName: "Rishabh Singh Khandka",
  subtitle: "Speaker. Strategist. Still becoming.",
  tagline:
    "Founding Head Boy. Award-winning debater. Exploring where discipline meets strategy — from defence to engineering.",
  bio: "I'm Rishabh Singh Khandka, a student who genuinely enjoys taking the lead, speaking on stage, and pushing myself to bring out the best of my potential. As a regular on the public speaking circuit, I've learned how to think fast, communicate clearly, and stay grounded. I'm exploring career paths that combine discipline and strategy — from defence to engineering. Outside the classroom, I anchor events, build presentations, play guitar, look for ways to constantly improve myself, and I'm still figuring out where I fit in this world.",
  email: "rishabhkhandka@gmail.com",
  linkedin:
    "https://www.linkedin.com/in/rishabh-s-khandka-716826317",
  location: "Dehradun, India",
};

// ------------------------------------------------------------
// EXPERIENCE / LEADERSHIP TIMELINE
// ------------------------------------------------------------
export type ExperienceItem = {
  id: string;
  title: string;
  org: string;
  period: string;
  summary: string;
  points: string[];
  image?: string;
};

export const experience: ExperienceItem[] = [
  {
    id: "headboy",
    title: "Founding Head Boy",
    org: "Ann Mary School, Dehradun",
    period: "2025 — 2026",
    summary:
      "Conferred the highest student leadership position for exemplary discipline, academic consistency, and contribution to school culture — leading a student body of 2,000+ through one of the most dynamic academic years in the school's history.",
    points: [
      "First Head Boy in the school's history since 1985 — established the foundation for its entire student leadership system.",
      "Acted as the strategic bridge between students, teachers, and administration, driving initiatives that strengthened culture, improved communication, and elevated engagement across every section.",
      "Oversaw and coordinated student leadership teams for smooth execution of Interschool and Interhouse competitions and school-wide events.",
      "Directed and anchored 25+ major school events — national-level competitions, annual functions, assemblies, and debates — setting new standards for stagecraft and coordination.",
      "Mentored multiple student committees, boosting participation and accountability across academic and cultural activities.",
      "Represented the school at interschool debates and competitions, securing Best Speaker at multiple prestigious events.",
      "Trained junior speakers and anchors, building a stronger public speaking culture across the school.",
    ],
    image: "/images/ach-headboy-investiture.webp",
  },
  {
    id: "debating",
    title: "Member, Senior English Debating Society",
    org: "Ann Mary School, Dehradun",
    period: "2023 — 2026",
    summary:
      "Represented the school in major Interschool and national-level English debating competitions, including the country's 2nd-largest English debate competition — the Frank Anthony Memorial All India Interschool English Debate Competition.",
    points: [
      "Honoured with the title 'Voice of Excellence of the School' — recognizing consistent excellence in hosting, debating, competitive public speaking, and representation at major competitions.",
      "Secured multiple distinctions, including Best Speaker awards at reputed institutions.",
      "Contributed to research, case-building, and strategy formulation for high-stakes debate rounds.",
      "Mentored junior debaters in argument structuring, delivery, and rebuttal technique.",
      "Organized in-school debates and strengthened the society's competitive presence across the city.",
    ],
    image: "/images/ach-summervalley-bestspeaker.webp",
  },
  {
    id: "quizclub",
    title: "Member & Quizmaster",
    org: "Quiz Club, Ann Mary School",
    period: "2024 — 2025",
    summary:
      "Served as Quizmaster for the Annual Interhouse Senior Quiz Competition, overseeing end-to-end execution — from question design to on-stage delivery.",
    points: [
      "Collaborated with teachers to develop, fact-check, and refine 100+ high-accuracy questions across multiple categories.",
      "Coordinated event flow, scoring methods, and time management for a smooth, professional on-stage experience.",
      "Anchored the competition, maintaining engagement, clarity, and pace for participants and audience alike.",
      "Supported planning and on-ground management, strengthening the school's broader quizzing culture.",
    ],
  },
  {
    id: "codeday",
    title: "Volunteer",
    org: "CodeDay Dehradun · Graphic Era Deemed University",
    period: "August 2025",
    summary:
      "Volunteered with CodeDay Dehradun, supporting event management, logistics, and participant engagement at a full-day hackathon.",
    points: [
      "Actively contributed to public speaking, coordination, and on-ground execution to ensure a smooth, inclusive experience for students and developers.",
      "Helped represent the event, manage sessions, and maintain high energy throughout the hackathon.",
      "Certified for active participation by CodeDay's regional leadership team.",
    ],
    image: "/certs/cert-codeday.webp",
  },
];

// ------------------------------------------------------------
// ACHIEVEMENTS / AWARDS (with photo evidence)
// ------------------------------------------------------------
export type Achievement = {
  id: string;
  title: string;
  event: string;
  description: string;
  image: string;
  year: string;
};

export const achievements: Achievement[] = [
  {
    id: "sv-bestspeaker",
    title: "Best Speaker",
    event: "Summer Valley School Inter-School English Debate Competition",
    description:
      "Adjudged Best Speaker at the Summer Valley School Inter-School English Debate Competition, recognized for clarity of argument, delivery, and command of the floor.",
    image: "/images/ach-summervalley-bestspeaker.webp",
    year: "2024",
  },
  {
    id: "sv-bestteam",
    title: "Best Team",
    event: "Summer Valley School Inter-School English Debate Competition",
    description:
      "Led the winning team to a Best Team title at the same competition — a rare speaker-and-team double that reflects both individual skill and collaborative case-building.",
    image: "/images/ach-summervalley-bestteam.webp",
    year: "2024",
  },
  {
    id: "asian-runnerup",
    title: "Runner-Up Team (₹5,000 Prize)",
    event: "The Asian Challenge — Interschool English Debate Competition",
    description:
      "Secured Runner-Up honours at The Asian School Dehradun's flagship debate competition, earning a ₹5,000 cash prize as part of the runner-up team.",
    image: "/images/ach-asianchallenge-runnerup.webp",
    year: "2025",
  },
  {
    id: "mindspree-winner",
    title: "Winner",
    event: "MindSpree — Annual Interschool Academic & Creative Festival",
    description:
      "Won top honours at MindSpree, St. Jude's School's annual interschool academic and creative festival, competing against teams from across the region.",
    image: "/images/ach-mindspree-winner.webp",
    year: "2025",
  },
  {
    id: "mindspree-ppt",
    title: "Runner-Up Speaker",
    event: "MindSpree — Interschool PowerPoint Presentation Competition",
    description:
      "Placed as Runner-Up Speaker in MindSpree's PowerPoint Presentation Competition, showcasing structured storytelling and confident on-stage delivery.",
    image: "/images/ach-mindspree-ppt.webp",
    year: "2025",
  },
  {
    id: "festla",
    title: "Runner-Up",
    event: "Festla 7.0 — English Debate Competition, Uttaranchal University",
    description:
      "Finished as Runner-Up at Festla 7.0, hosted by the Uttaranchal Institute of Management at Uttaranchal University — one of the region's larger interschool fest competitions.",
    image: "/images/ach-festla.webp",
    year: "2026",
  },
  {
    id: "voice-excellence",
    title: "Voice of Excellence of the School",
    event: "Ann Mary School, Dehradun",
    description:
      "Honoured with the title 'Voice of Excellence' — given to the student who best embodies articulate, authoritative representation of the school through hosting, debate, and public speaking.",
    image: "/images/ach-voiceofexcellence.webp",
    year: "2026",
  },
  {
    id: "headboy-title",
    title: "1st Head Boy in School History",
    event: "Ann Mary School, Dehradun (Founding Head Boy since 1985)",
    description:
      "Appointed the first-ever Head Boy of Ann Mary School since its founding in 1985 — establishing the foundation of the school's student leadership system.",
    image: "/images/ach-headboy-investiture.webp",
    year: "2025",
  },
];

// ------------------------------------------------------------
// CERTIFICATIONS
// ------------------------------------------------------------
export type Certification = {
  id: string;
  title: string;
  issuer: string;
  description: string;
  image: string;
  color: "openai" | "anthropic" | "hubspot" | "semrush" | "jpmorgan";
  date?: string;
};

export const certifications: Certification[] = [
  {
    id: "openai-aif",
    title: "Applied AI Foundations",
    issuer: "OpenAI Academy",
    description:
      "Completed OpenAI Academy's Applied AI Foundations course, covering the practical fundamentals of working with modern AI systems — from core model behavior to applied use cases.",
    image: "/certs/cert-openai-aif.webp",
    color: "openai",
  },
  {
    id: "anthropic-fluency",
    title: "AI Fluency for Students",
    issuer: "Anthropic",
    description:
      "Completed Anthropic's AI Fluency program for students, developed with UCC, Ringling College of Art + Design, and national higher-education bodies — building a grounded, critical understanding of how to work effectively with AI.",
    image: "/certs/cert-anthropic-aifluency.webp",
    color: "anthropic",
  },
  {
    id: "claude-101",
    title: "Claude Code 101",
    issuer: "Anthropic",
    description:
      "Completed Anthropic's introductory course on Claude Code, covering the fundamentals of agentic coding workflows and how to direct an AI coding assistant effectively.",
    image: "/certs/cert-claudecode101.webp",
    color: "anthropic",
  },
  {
    id: "claude-action",
    title: "Claude Code in Action",
    issuer: "Anthropic",
    description:
      "Completed the applied follow-up to Claude Code 101 — putting agentic coding workflows into practice on real, hands-on tasks.",
    image: "/certs/cert-claudecode-action.webp",
    color: "anthropic",
  },
  {
    id: "hubspot-content",
    title: "Content Marketing Certified",
    issuer: "HubSpot Academy",
    description:
      "Certified by HubSpot Academy in content marketing — tested on long-term content planning, creation, promotion, and analysis, and applying growth marketing principles to drive results.",
    image: "/certs/cert-hubspot.webp",
    color: "hubspot",
    date: "Valid Jul 2026 – Jul 2028",
  },
  {
    id: "semrush-seo",
    title: "On-Page SEO & AI Search Essentials",
    issuer: "Semrush Academy",
    description:
      "Certified by Semrush Academy in On-Page SEO and AI Search Essentials — covering how modern search and AI-driven discovery surfaces content, and how to optimize for it.",
    image: "/certs/cert-semrush.webp",
    color: "semrush",
  },
  {
    id: "jpm-ib",
    title: "Investment Banking Job Simulation",
    issuer: "J.P. Morgan · Forage",
    description:
      "Completed J.P. Morgan's Investment Banking Job Simulation — practical tasks spanning M&A target identification, auction process analysis, financial modeling, and investment recommendation writing.",
    image: "/certs/cert-jpm-ib.webp",
    color: "jpmorgan",
    date: "June 2026",
  },
  {
    id: "jpm-quant",
    title: "Quantitative Research Job Simulation",
    issuer: "J.P. Morgan · Forage",
    description:
      "Completed J.P. Morgan's Quantitative Research Job Simulation — practical tasks in price data analysis, commodity storage contract pricing, credit risk analysis, and FICO score bucketing.",
    image: "/certs/cert-jpm-quant.webp",
    color: "jpmorgan",
    date: "June 2026",
  },
];

// ------------------------------------------------------------
// SKILLS
// ------------------------------------------------------------
export type SkillCategory = {
  label: string;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    skills: [
      { name: "Python", level: 72 },
      { name: "Java", level: 65 },
      { name: "C++", level: 60 },
      { name: "JavaScript", level: 68 },
    ],
  },
  {
    label: "Web & Tools",
    skills: [
      { name: "React", level: 62 },
      { name: "Next.js", level: 58 },
      { name: "Tailwind CSS", level: 65 },
      { name: "Git & GitHub", level: 70 },
    ],
  },
  {
    label: "AI & Marketing",
    skills: [
      { name: "AI Fluency", level: 85 },
      { name: "Prompt Engineering", level: 82 },
      { name: "Machine Learning (Applied)", level: 55 },
      { name: "SEO & Content Marketing", level: 80 },
    ],
  },
  {
    label: "Leadership",
    skills: [
      { name: "Public Speaking", level: 97 },
      { name: "Leadership", level: 95 },
      { name: "Event Direction", level: 92 },
      { name: "Strategic Communication", level: 90 },
    ],
  },
];

export const skillCloud = [
  "Python",
  "Java",
  "C++",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind",
  "Git",
  "GitHub",
  "AI Fluency",
  "Machine Learning",
  "Prompt Engineering",
  "SEO",
  "Content Marketing",
  "Leadership",
  "Public Speaking",
];

// ------------------------------------------------------------
// ACHIEVEMENT COUNTERS (for the stats section)
// ------------------------------------------------------------
export const achievementStats = [
  { label: "Students Led", value: 2000, suffix: "+" },
  { label: "Events Directed", value: 25, suffix: "+" },
  { label: "Debate Awards", value: 6, suffix: "" },
  { label: "Certifications", value: 8, suffix: "" },
];

// ------------------------------------------------------------
// CORE IDENTITY / "ACHIEVEMENTS" PILLARS (the 5 you listed)
// ------------------------------------------------------------
export type Pillar = {
  id: string;
  title: string;
  description: string;
};

export const pillars: Pillar[] = [
  {
    id: "headboy",
    title: "Founding Head Boy",
    description:
      "First Head Boy in Ann Mary School's history since 1985 — led a 2,000+ student body and built the leadership system from the ground up.",
  },
  {
    id: "debater",
    title: "Award-Winning Debater",
    description:
      "Multiple Best Speaker and Best Team titles across interschool and national-level English debate competitions, including the Frank Anthony Memorial Debate.",
  },
  {
    id: "speaker",
    title: "Public Speaker",
    description:
      "A consistent presence on stage and at the podium — from assemblies to nationals — recognized as the school's 'Voice of Excellence.'",
  },
  {
    id: "host",
    title: "Event Host",
    description:
      "Directed and anchored 25+ major school events, from national competitions to annual functions, setting new standards for stagecraft.",
  },
  {
    id: "guitarist",
    title: "Guitarist",
    description:
      "Plays guitar outside the spotlight of competition — a quieter form of the same discipline and expression.",
  },
];

export const socials = {
  linkedin: profile.linkedin,
  email: `mailto:${profile.email}`,
};
