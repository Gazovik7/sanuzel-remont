export interface BlogAuthor {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  author: BlogAuthor;
  reviewer?: BlogAuthor;
  content: string;
}

