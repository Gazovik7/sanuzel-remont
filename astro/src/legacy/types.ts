
export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface Package {
  title: string;
  subtitle: string;
  price: string;
  time: string;
  features: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PortfolioItem {
  before: string;
  after: string;
  title: string;
  desc: string;
  workList: string;
  time: string;
  price: string;
}

export interface ComparisonRow {
  feature: string;
  private: string; // Private master
  studio: string; // Design studio
  us: string; // Us
  isUsBest: boolean;
}

export interface Review {
  name: string;
  location: string;
  avatar: string; // Optional, can be used for thumbnail or removed if screenshot covers it
  screenshot: string; // New field for the WhatsApp screenshot image
}

export interface VideoReview {
  id: number;
  author: string;
  location: string;
  preview: string;
  duration: string;
}

export interface PaperReview {
  id: number;
  author: string;
  date: string;
  image: string;
}