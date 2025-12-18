import { post as p1 } from './1';
import { post as p2 } from './2';
import { post as p3 } from './3';
import { post as p4 } from './4';
import type { BlogPost } from '../types';

export const BLOG_POSTS: BlogPost[] = [p1, p2, p3, p4];

export function getBlogPostById(id: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.id === id);
}

export function getAllBlogPostIds(): string[] {
  return BLOG_POSTS.map((post) => post.id);
}

