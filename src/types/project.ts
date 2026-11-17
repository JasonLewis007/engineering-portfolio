export interface Project {
  slug: string;
  featured?: boolean;
  status?: string;
  number: string;
  category: string;
  title: string;
  summary: string;
  stack: readonly string[];
  icon:
    "shipping" | "reporting" | "daily-reporting" | "ar-aging" | "manufacturing";
  problem: string;
  responsibilities: string;
  approach: string;
  architecture: string;
  challenges: string;
  outcome: string;
  confirmation: string;
}
