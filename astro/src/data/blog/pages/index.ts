import { post as p1 } from './1';
import type { BlogPost } from '../types';

export const BLOG_POSTS: BlogPost[] = [p1];

export function getBlogPostById(id: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.id === id);
}

export function getAllBlogPostIds(): string[] {
  return BLOG_POSTS.map((post) => post.id);
}

