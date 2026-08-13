export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  featured: boolean;
  githubUrl?: string;
  demoUrl?: string;
  status?: string;
}
