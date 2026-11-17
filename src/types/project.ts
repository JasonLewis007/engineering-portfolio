export interface Project {
  slug: string;
  number: string;
  category: string;
  title: string;
  summary: string;
  stack: readonly string[];
  icon: "shipping" | "reporting" | "manufacturing";
  problem: string;
  responsibilities: string;
  approach: string;
  architecture: string;
  challenges: string;
  outcome: string;
  confirmation: string;
}
