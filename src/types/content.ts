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
