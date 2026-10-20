export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  technologies: string[];
  demo?: string;
  repository?: string;
  image?: string;
}
export interface Article {
  title: string;
  summary: string;
  topic: string;
  date?: string;
  url: string;
}
export interface CaseStudy {
  title: string;
  status: "preparation" | "published";
  context?: string;
  problem?: string;
  strategy?: string;
  tools?: string[];
  approach?: string;
  results?: string;
  learnings?: string;
}
