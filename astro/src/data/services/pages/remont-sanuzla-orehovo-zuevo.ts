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
  summaryTitle: 'Ремонт санузлов в Орехово-Зуево: надежно и доступно',
  paragraphsHtml: [
    'Предлагаем качественный ремонт ванных комнат и туалетов в городе <strong>Орехово-Зуево</strong>. Мы работаем во всех районах города: от исторического центра и <strong>Крутого</strong> до микрорайонов <strong>Карболит</strong> и <strong>Первая Советская</strong>. Мы ценим промышленную историю города и предлагаем решения, которые прослужат долго.',
    'Несмотря на удаленность от Москвы, мы обеспечиваем жителей Орехово-Зуево современным сервисом. Наши логистические схемы позволяют доставлять качественные материалы по Горьковскому шоссе без лишних наценок. Мы также активно работаем с местными строительными базами для оперативного решения задач.',
  ],
  listIntroHtml: '<strong>Особенности нашего подхода в Орехово-Зуево:</strong>',
  listItemsHtml: [
    'Бесплатный выезд замерщика, даже в отдаленные части города.',
    'Опыт ремонта в старинных домах "морозовской" постройки (кирпичные стены, высокие потолки).',
    'Замена чугунных стояков канализации на современные пластиковые трубы.',
    'Помощь в выборе недорогой, но качественной сантехники и плитки.',
    'Честные цены и фиксированная смета в договоре.',
  ],
  closingHtml:
    'Вам не нужно искать бригаду в Москве или рисковать с частниками без гарантий. Мы предлагаем официальный ремонт санузла в Орехово-Зуево с гарантией 2 года. Звоните!',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'Выезжаете ли вы в Ликино-Дулево или Дрезну?',
    answer: 'Да, Орехово-Зуевский городской округ — зона нашего обслуживания. Мы выезжаем в соседние города на тех же условиях.',
  },
  {
    question: 'Где покупать материалы? Везти из Москвы дорого.',
    answer: 'В Орехово-Зуево есть неплохие строительные магазины (например, "Апельсин" или рынки на Карболите). Мы поможем скомплектовать объект на месте, а эксклюзивные позиции привезем из Москвы попутным грузом.',
  },
  {
    question: 'Сколько стоит замена труб в хрущевке?',
    answer: 'Замена внутриквартирной разводки (холодная, горячая вода, канализация) на полипропилен стоит недорого. Точную сумму назовет мастер после осмотра состояния стояков.',
  },
  {
    question: 'Можно ли сделать ремонт частями (сначала ванна, потом туалет)?',
    answer: 'Да, можно. Но при раздельном ремонте общая стоимость и сроки могут немного увеличиться из-за двойного выезда и подготовки.',
  },
  {
    question: 'Устанавливаете ли вы водонагреватели?',
    answer: 'Да, в Орехово-Зуево нередки отключения горячей воды, поэтому установка бойлера — разумное решение. Мы подключим его к электросети и водопроводу с соблюдением всех норм безопасности.',
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
  slug: 'remont-sanuzla-orehovo-zuevo',
  path: '/remont-sanuzla-orehovo-zuevo/',
  canonicalPath: '/remont-sanuzla-orehovo-zuevo/',
  seo: {
    title: 'Ремонт санузла в Орехово-Зуево под ключ | Цена от мастеров | Ремонт ванной комнаты',
    description:
      'Ремонт санузла в Орехово-Зуево под ключ | Бесплатный выезд мастера | Гарантия 2 года | Без предоплаты | Лучшие цены на ремонт санузлов ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-orehovo-zuevo',
        title: 'Ремонт санузла в Орехово-Зуево',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Орехово-Зуево', href: '/remont-sanuzla-orehovo-zuevo/', isActive: true }] }),
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
