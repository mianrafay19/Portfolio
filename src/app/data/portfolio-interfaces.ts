// ============================
// MAIN PORTFOLIO DATA MODEL
// ============================
export interface PortfolioData {
  name: string;
  profile_image: string;
  logo: string;
  stack: string[];
  description?: string;
  resume: string;
  role: string;

  socials: Socials; // Contact & social links
  about: About; // About section with passions
  educations: Education[]; // Multiple education entries
  skills: Skills; // Frontend, backend, tools
  courses: Course[]; // Multiple courses
  languages: string[];
  experiences: Experience[]; // Multiple work experiences
  projects: Project[]; // Portfolio projects
  tabs: Tabs; // UI Tabs configuration
}

// ============================
// SOCIALS
// ============================
export interface Socials {
  email: string;
  phone: string;
  whatsapp: string;
  whatsappMessage: string;
  github: string;
  linkedin: string;
  location: string;
}

// ============================
// ABOUT
// ============================
export interface About {
  description: string;
  passions: Passion[];
  interests: string[];
}

export interface Passion {
  title: string;
  description: string;
  key: string;
}

// ============================
// SKILLS
// ============================
export interface Skills {
  frontend: string[];
  backend: string[];
  tools: string[];
}

// ============================
// EDUCATION / COURSES / EXPERIENCE
// ============================
export interface Education {
  degree: string;
  institution: string;
  timeline: string;
  location: string;
  cgpa?: string;
  description?: string;
  document?: string; // Optional PDF link
}

export interface Course {
  name: string;
  institution: string;
  timeline: string;
  location: string;
  description: string;
  certificate_link?: string;
  document?: string; // Optional PDF link
}

export interface Experience {
  role: string;
  company: string;
  timeline: string;
  location: string;
  responsibilities?: string[];
  technologies?: string[];
  document?: string; // Optional PDF link
}

// ============================
// PROJECTS
// ============================
export interface Project {
  name: string;
  timeline: string;
  description: string;
  link: string;
  technologies?: string[];
  github_link?: string;
  image?: string;
  expanded?: boolean;
}

// ============================
// TABS (UI Navigation)
// ============================
export interface TabItem {
  label: string;
  icon: string;
}

export interface Tabs {
  about: TabItem[];
  education: TabItem[];
  skills: TabItem[];
}
