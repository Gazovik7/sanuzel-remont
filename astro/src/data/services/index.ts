export * from './types';

export * from './shared';

export { buildBlocks, off, unique, use, type SharedBlockKey } from './builder';

export { PAGES } from './pages';
import { PAGES } from './pages';
import type { ServicePage } from './types';

export const SERVICES: ServicePage[] = [...PAGES];

const normalizePath = (path: string): string => {
  const withLeadingSlash = path.startsWith('/') ? path : `/${path}`;
  if (withLeadingSlash === '/') return '/';
  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`;
};

export const getServiceBySlug = (slug: string): ServicePage => {
  const service = SERVICES.find((item) => item.slug === slug);
  if (!service) throw new Error(`Unknown service slug: ${slug}`);
  return service;
};

export const getServiceByPath = (path: string): ServicePage => {
  const normalized = normalizePath(path);
  const service = SERVICES.find((item) => normalizePath(item.path) === normalized);
  if (!service) throw new Error(`Unknown service path: ${normalized}`);
  return service;
};

export const getAllServicePaths = (): string[] => SERVICES.map((item) => normalizePath(item.path));

export const getService = getServiceBySlug;
