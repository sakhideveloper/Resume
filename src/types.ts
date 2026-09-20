export interface Project {
  id: string;
  title: string;
  role?: string;
  clientOrCompany?: string;
  url?: string;
  liveUrl?: string;
  githubUrl?: string;
  isRecent?: boolean;
  isFeatured?: boolean;
  category: 'recent' | 'laravel' | 'fullstack' | 'api';
  description: string;
  highlights: string[];
  technologies: string[];
  year?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  description?: string;
  points: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
  badge?: string;
  description?: string;
}

export interface ContactInfo {
  name: string;
  title: string;
  headline: string;
  email: string;
  phone: string;
  phoneRaw: string;
  whatsappLink: string;
  location: string;
  previousLocation?: string;
  linkedin: string;
  linkedinUrl: string;
  github: string;
  githubUrl: string;
  availability: string;
  summary: string;
}
