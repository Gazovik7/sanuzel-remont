import { SHARED_BLOCKS } from '../shared/blocks';
import type { ServiceBlock } from '../types';

export type SharedBlockKey = keyof typeof SHARED_BLOCKS;

const deepClone = <T>(value: T): T => {
  const structuredCloneFn = (globalThis as unknown as { structuredClone?: <U>(input: U) => U }).structuredClone;
  return structuredCloneFn ? structuredCloneFn(value) : JSON.parse(JSON.stringify(value));
};

export const use = <K extends SharedBlockKey>(key: K): (typeof SHARED_BLOCKS)[K] => deepClone(SHARED_BLOCKS[key]);

export const unique = (block: ServiceBlock): ServiceBlock => block;

export const off = (): null => null;

export const buildBlocks = (items: Array<ServiceBlock | null>): ServiceBlock[] =>
  items.filter((item): item is ServiceBlock => item !== null);
