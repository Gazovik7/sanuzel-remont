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
  summaryTitle: 'Ремонт санузла в Ивантеевке: надежно и в срок',
  paragraphsHtml: [
    'Предлагаем профессиональный ремонт ванных комнат в городе <strong>Ивантеевка</strong>. Мы ценим уют и спокойствие этого зеленого города, поэтому наши бригады работают максимально аккуратно и тихо. Обслуживаем все районы: от центра и улицы Толмачева до новых кварталов на Бережке.',
    'Благодаря удобному выезду на Ярославское шоссе, мы оперативно доставляем материалы из московских строительных центров, а также активно работаем с местными поставщиками в Пушкино и Ивантеевке.',
  ],
  listIntroHtml: '<strong>Почему жители Ивантеевки рекомендуют нас:</strong>',
  listItemsHtml: [
    'Бесплатный выезд инженера для точного расчета сметы.',
    'Опыт работы с газовым оборудованием (колонки), часто встречающимся в старом фонде города.',
    'Соблюдение чистоты: убираем за собой строительный мусор каждый день.',
    'Помощь в выборе плитки и сантехники, подходящей под вашу площадь.',
    'Честные цены без скрытых накруток "за область".',
  ],
  closingHtml:
    'Качественный ремонт санузла в Ивантеевке — это просто. Позвоните нам, и мы возьмем все заботы на себя: от демонтажа до установки зеркала.',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'Выезжаете ли вы в соседние города (Пушкино, Щелково)?',
    answer: 'Да, мы работаем по всему кусту городов вдоль Ярославского и Щелковского шоссе. Ивантеевка, Пушкино, Щелково, Королев — это зона нашей постоянной активности.',
  },
  {
    question: 'Что делать с полотенцесушителем?',
    answer: 'Мы можем перенести водяной полотенцесушитель (с переваркой стояка через ЖЭК) или заменить его на электрический, что часто удобнее и безопаснее с точки зрения протечек.',
  },
  {
    question: 'Сколько стоит укладка мозаики?',
    answer: 'Укладка мозаики — трудоемкий процесс, поэтому он стоит дороже обычной плитки. Точная цена зависит от площади и типа основания. Инженер рассчитает это при замере.',
  },
  {
    question: 'Можно ли жить в квартире во время ремонта?',
    answer: 'Если у вас есть второй санузел — да. Если санузел один, то на время самых грязных работ и отключения унитаза (1-2 дня) лучше найти временное жилье. В остальное время — можно, но будет пыльно.',
  },
  {
    question: 'Предоставляете ли вы дизайн-проект?',
    answer: 'Мы делаем технический дизайн-проект (раскладка плитки, расстановка сантехники) в подарок при заключении договора на ремонт под ключ.',
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
  slug: 'remont-sanuzla-ivanteevka',
  path: '/remont-sanuzla-ivanteevka/',
  canonicalPath: '/remont-sanuzla-ivanteevka/',
  seo: {
    title: 'Ремонт санузла в Ивантеевке под ключ | Цена от мастеров | Ремонт ванной комнаты',
    description:
      'Ремонт санузла в Ивантеевке под ключ | Бесплатный выезд мастера | Гарантия 2 года | Без предоплаты | Лучшие цены на ремонт санузлов ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-ivanteevka',
        title: 'Ремонт санузла в Ивантеевке',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Ивантеевке', href: '/remont-sanuzla-ivanteevka/', isActive: true }] }),
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
