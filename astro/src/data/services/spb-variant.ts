import type { ServiceBlock, ServicePage, BreadcrumbItem } from './types';
import { SPB_GEOGRAPHY_BLOCK_CONTENT } from './pages/spb-home';
import { SPB_OVERRIDES } from './spb-overrides';

const REPLACEMENTS: [RegExp, string][] = [
  [/Московской области/g, 'Ленинградской области'],
  [/Московскую область/g, 'Ленинградскую область'],
  [/московской области/g, 'ленинградской области'],
  [/в Москве/g, 'в Санкт-Петербурге'],
  [/по Москве/g, 'по Санкт-Петербургу'],
  [/Москве/g, 'Санкт-Петербурге'],
  [/Москвы/g, 'Санкт-Петербурга'],
  [/Москву/g, 'Санкт-Петербург'],
  [/Москва/g, 'Санкт-Петербург'],
  [/в столице/g, 'в Санкт-Петербурге'],
  [/столичных/g, 'петербургских'],
  [/москвичи/g, 'петербуржцы'],
  [/москвичей/g, 'петербуржцев'],
  [/МКАД/g, 'КАД'],
];

function replaceMoscow(text: string): string {
  let result = text;
  for (const [pattern, replacement] of REPLACEMENTS) {
    result = result.replace(pattern, replacement);
  }
  return result;
}

function deepClone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

function transformBlocks(blocks: ServiceBlock[], pagePath: string, originalSlug: string): ServiceBlock[] {
  const cloned = deepClone(blocks);
  const transformed: ServiceBlock[] = [];
  let hasBreadcrumb = false;
  let heroInserted = false;

  const overrides = SPB_OVERRIDES[originalSlug];

  for (const block of cloned) {
    switch (block.type) {
      case 'hero':
        block.config.title = replaceMoscow(block.config.title);
        block.config.leadSource = block.config.leadSource + '-spb';
        transformed.push(block);
        heroInserted = true;
        break;

      case 'breadcrumb': {
        hasBreadcrumb = true;
        const originalLabel = block.items.find((i: BreadcrumbItem) => i.isActive)?.label ?? block.items[block.items.length - 1]?.label ?? '';
        block.items = [
          { label: 'Санкт-Петербург', href: '/spb/' },
          { label: originalLabel, href: pagePath, isActive: true },
        ];
        transformed.push(block);
        break;
      }

      case 'seoText':
        if (overrides?.seoText) {
          block.config = overrides.seoText;
        } else {
          block.config.summaryTitle = replaceMoscow(block.config.summaryTitle);
          block.config.paragraphsHtml = block.config.paragraphsHtml.map(replaceMoscow);
          block.config.listIntroHtml = replaceMoscow(block.config.listIntroHtml);
          block.config.listItemsHtml = block.config.listItemsHtml.map(replaceMoscow);
          block.config.closingHtml = replaceMoscow(block.config.closingHtml);
        }
        transformed.push(block);
        break;

      case 'faq':
        if (overrides?.faq) {
          block.items = overrides.faq;
        } else {
          block.items = block.items.map((item: { question: string; answer: string }) => ({
            question: replaceMoscow(item.question),
            answer: replaceMoscow(item.answer),
          }));
        }
        transformed.push(block);
        break;

      case 'geography':
        block.config = deepClone(SPB_GEOGRAPHY_BLOCK_CONTENT);
        transformed.push(block);
        break;

      default:
        transformed.push(block);
        break;
    }
  }

  // Add breadcrumbs after hero if not present
  if (!hasBreadcrumb && heroInserted) {
    const heroIdx = transformed.findIndex((b) => b.type === 'hero');
    const breadcrumb: ServiceBlock = {
      type: 'breadcrumb',
      items: [{ label: 'Санкт-Петербург', href: '/spb/' }],
    };
    transformed.splice(heroIdx + 1, 0, breadcrumb);
  }

  return transformed;
}

export function createSpbVariant(page: ServicePage): ServicePage {
  const slug = `spb-${page.slug}`;
  const path = `/spb${page.path}`;
  return {
    slug,
    path,
    canonicalPath: path,
    seo: {
      title: replaceMoscow(page.seo.title),
      description: replaceMoscow(page.seo.description),
    },
    blocks: transformBlocks(page.blocks, path, page.slug),
  };
}

