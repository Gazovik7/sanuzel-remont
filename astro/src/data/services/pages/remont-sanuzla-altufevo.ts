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
  summaryTitle: 'Доступный ремонт санузла в Алтуфьево',
  paragraphsHtml: [
    'Район метро <strong>Алтуфьево</strong> — это крупный жилой массив на севере столицы, застроенный преимущественно панельными домами 80-90-х годов. Ремонт санузла здесь — это возможность обновить устаревшие коммуникации и создать современный интерьер в типовой квартире. Мы предлагаем жителям Бибирево и Лианозово качественный ремонт ванных комнат по разумным ценам.',
    'Наши мастера имеют большой опыт работы в домах на Алтуфьевском шоссе, улице Лескова и Череповецкой. Мы знаем, как грамотно использовать каждый сантиметр пространства в стандартных санузлах, предлагая надежные решения по замене труб и укладке плитки, которые прослужат вам долгие годы.',
  ],
  listIntroHtml: '<strong>Почему ремонт санузла в Алтуфьево доверяют нам:</strong>',
  listItemsHtml: [
    'Честные цены и прозрачная смета без переплат.',
    'Капитальная замена труб водоснабжения и канализации.',
    'Профессиональное выравнивание стен и полов под плитку.',
    'Монтаж натяжных потолков с влагозащищенным освещением.',
    'Гарантия 2 года на все выполненные работы.',
  ],
  closingHtml:
    'Ремонт санузла в Алтуфьево с нашей бригадой — это гарантия качества и соблюдения сроков. Мы работаем аккуратно и быстро. Позвоните нам, чтобы заказать бесплатный замер и узнать точную стоимость вашего ремонта.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли менять проводку в ванной при ремонте?',
  answer:
    'В домах старой постройки мы рекомендуем полную замену электропроводки на медную с установкой УЗО для вашей безопасности.',
},
{
  question: 'Как долго длится ремонт ванной в панельном доме?',
  answer:
    'Стандартный капитальный ремонт санузла в Алтуфьево занимает от 12 до 18 рабочих дней.',
},
{
  question: 'Помогаете ли вы с доставкой материалов?',
  answer:
    'Да, мы можем организовать закупку, доставку и подъем всех необходимых строительных материалов на ваш этаж.',
},
{
  question: 'Можно ли сделать ремонт без отселения?',
  answer:
    'Да, мы стараемся минимизировать неудобства, сохраняя доступ к воде и туалету на максимально возможный период времени.',
},
{
  question: 'Бесплатен ли выезд мастера на замер в Алтуфьево?',
  answer:
    'Да, наш специалист приедет к вам в районе Алтуфьево для замера и консультации совершенно бесплатно.',
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
  slug: 'remont-sanuzla-altufevo',
  path: '/remont-sanuzla-altufevo/',
  canonicalPath: '/remont-sanuzla-altufevo/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Алтуфьево | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Алтуфьево | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-altufevo',
        title: 'Ремонт санузла у станции метро Алтуфьево',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Алтуфьево', href: '/remont-sanuzla-altufevo/', isActive: true }] }),
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

