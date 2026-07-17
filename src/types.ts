export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin: string;
    twitter: string;
    email: string;
  };
}

export interface TextContent {
  title: string;
  description: string;
  icon: string;
}

export interface GoalItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ValueItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface LocalizedData<T> {
  ar: T;
  en: T;
}

export type Language = 'ar' | 'en';
