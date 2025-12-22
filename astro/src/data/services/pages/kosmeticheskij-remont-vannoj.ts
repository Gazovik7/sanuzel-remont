import { buildBlocks, unique, use } from '../builder';
import {
  FAQ_BLOCK_CONTENT,
  GEOGRAPHY_BLOCK_CONTENT,
  HERO_LEAD_PARAGRAPH_DEFAULT,
  HERO_OFFERS_DEFAULT,
  PRICE_TABLE_BLOCK_CONTENT,
  PRICE_TABLE_CATEGORIES,
} from '../shared/blockContent';
import { INCLUDED_WORKS, QUALITY_CHECKLIST } from '../shared/datasets';
import type { FaqItem } from '../../../legacy/types';
import type { IncludedBlockConfig, PriceTableCategory, PriceTableConfig, SeoTextBlockConfig, ServicePage } from '../types';

const PAGE_SEO_TEXT_BLOCK_CONTENT: SeoTextBlockConfig = {
  summaryTitle: 'Косметический ремонт ванных комнат в Москве: быстрое обновление без перепланировки',
  paragraphsHtml: [
    'Аккуратный <strong>косметический ремонт ванной комнаты</strong> позволяет обновить внешний вид помещения без замены коммуникаций и сложных строительных работ. Такой формат подходит, если ванная в технически исправном состоянии, но требует визуального обновления.',
    'Мы выполняем косметический ремонт ванных комнат в Москве под ключ: обновляем отделку, потолок, освещение и сантехнические элементы без вмешательства в инженерные системы. Все этапы и сроки согласуются заранее, чтобы ремонт прошёл быстро и без лишних неудобств.',
  ],
  listIntroHtml: '<strong>Что обычно включает косметический ремонт ванной комнаты:</strong>',
  listItemsHtml: [
    'Демонтаж старых декоративных элементов без повреждения коммуникаций.',
    'Обновление отделки стен и потолка с использованием влагостойких материалов.',
    'Замена или обновление сантехнических приборов и аксессуаров.',
    'Монтаж нового освещения и зеркал.',
    'Финишная уборка и подготовка помещения к эксплуатации.',
  ],
  closingHtml:
    'Стоимость косметического ремонта ванной комнаты зависит от площади помещения и выбранных материалов. Для предварительного расчета достаточно замеров или фото. После согласования фиксируем объем работ, сроки и итоговую стоимость в договоре.',
};


const PAGE_FAQ: FaqItem[] = [{
  question: 'Чем косметический ремонт отличается от капитального?',
  answer:
    'Косметический ремонт не затрагивает инженерные коммуникации и перепланировку. Он направлен на обновление внешнего вида ванной комнаты при исправных трубах и электрике.',
},
{
  question: 'Сколько времени занимает косметический ремонт ванной?',
  answer:
    'В среднем косметический ремонт ванной комнаты занимает от 5 до 14 дней. Сроки зависят от объема работ и выбранных материалов.',
},
{
  question: 'Можно ли пользоваться ванной во время косметического ремонта?',
  answer:
    'В большинстве случаев пользоваться ванной можно, так как работы не затрагивают водоснабжение и канализацию на длительный срок.',
},
{
  question: 'Какие работы чаще всего входят в косметический ремонт?',
  answer:
    'Обычно выполняется обновление отделки, потолка, освещения, замена сантехнических элементов и аксессуаров без вмешательства в коммуникации.',
},
{
  question: 'Сколько стоит косметический ремонт ванной комнаты в Москве?',
  answer:
    'Цена косметического ремонта ванной зависит от площади помещения, объема работ и выбранных материалов. Точная стоимость рассчитывается после осмотра или анализа фото.',
},
];

const PAGE_QUALITY_CHECKLIST = QUALITY_CHECKLIST;

const PAGE_PRICE_TABLE_CATEGORIES: PriceTableCategory[] = PRICE_TABLE_CATEGORIES;

const PAGE_PRICE_TABLE_BLOCK_CONTENT: PriceTableConfig = PRICE_TABLE_BLOCK_CONTENT;

const PAGE_INCLUDED_WORKS: string[] = INCLUDED_WORKS;

const PAGE_INCLUDED_BLOCK_CONTENT: IncludedBlockConfig = {
  kicker: 'Под ключ',
  title: 'Что входит в стоимость ремонта?',
  description:
    'Мы берем на себя весь цикл работ по ремонту в ванной комнате: от демонтажа старой плитки до установки крючков для полотенец.',
  highlightIncludedCleaning: 'Вывоз мусора и клининг включены',
  highlightIncludedDocs: 'Полный пакет документов для УК',
};

const PAGE_GEOGRAPHY_SEO_TEXT_HTML = GEOGRAPHY_BLOCK_CONTENT.seoTextHtml;

const QUALITY = use('quality');
const PACKAGES = use('packagesDefault');
const INCLUDED = use('included');
const GEOGRAPHY = use('geography');

export const page: ServicePage = {
  slug: 'kosmeticheskij-remont-vannoj',
  path: '/kosmeticheskij-remont-vannoj/',
  canonicalPath: '/kosmeticheskij-remont-vannoj/',
  seo: {
    title: 'Косметический ремонт ванной под ключ в Москве | Косметический ремонт ванных комнат и санузла цена',
    description:
      'Косметический ремонт ванной комнаты и туалета под ключ в Москве | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(49)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-kosmeticheskij-remont-vannoj',
        title: 'Косметический ремонт ванной комнаты и туалета под ключ',
        badgeText: 'Гарантия 2 года на все работы',
        backgroundImage: '/img/remont-vannoy-v-moskve.webp',
        subtitleLines: [
          { className: 'text-blue-400', text: 'Без авансов и скрытых доплат.' },
          { className: 'text-white', text: 'Платите только за результат.' },
        ],
        leadParagraph: HERO_LEAD_PARAGRAPH_DEFAULT,
        offers: HERO_OFFERS_DEFAULT,
      },
    }),
    unique({ type: 'breadcrumb', items: [{ label: 'Косметический ремонт ванной комнаты', href: '/kosmeticheskij-remont-vannoj/', isActive: true }] }),
    use('comparison'),
    use('portfolioDefault'),
    unique({ ...QUALITY, checklist: PAGE_QUALITY_CHECKLIST }),
    use('whyUs'),
    use('materials'),
    use('calculatorDefault'),
    unique({
      ...PACKAGES,
      config: {
        ...PACKAGES.config,
        priceTable: PAGE_PRICE_TABLE_BLOCK_CONTENT,
        priceTableCategories: PAGE_PRICE_TABLE_CATEGORIES,
      },
    }),
    use('workflow'),
    unique({ ...INCLUDED, config: PAGE_INCLUDED_BLOCK_CONTENT, works: PAGE_INCLUDED_WORKS }),
    use('visualization'),
    use('team'),
    use('guarantee'),
    use('reviews'),
    unique({ type: 'seoText', config: PAGE_SEO_TEXT_BLOCK_CONTENT }),
    unique({ type: 'faq', variant: 'default', config: FAQ_BLOCK_CONTENT, items: PAGE_FAQ }),
    unique({ ...GEOGRAPHY, config: { ...GEOGRAPHY.config, seoTextHtml: PAGE_GEOGRAPHY_SEO_TEXT_HTML } }),
  ]),
};

