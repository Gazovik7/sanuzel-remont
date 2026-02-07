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
  summaryTitle: 'Качественный ремонт санузлов в Ногинске',
  paragraphsHtml: [
    'Ищете надежную бригаду для ремонта ванной в <strong>Ногинске</strong>? Мы предлагаем профессиональный подход к отделке санузлов в Богородском городском округе. Наши специалисты работают во всех районах города: от <strong>улицы III Интернационала</strong> и <strong>Глухово</strong> до <strong>Заречья</strong> и <strong>Истомкино</strong>. Мы ценим традиции города и предлагаем современные решения для любого типа жилья.',
    'Несмотря на удаленность от Москвы, мы обеспечиваем в Ногинске сервис высшего уровня. Мы сами организуем доставку материалов по Горьковскому шоссе и работу штатных бригад без привлечения случайных людей. Ваша ванная комната будет радовать вас долгие годы благодаря нашему опыту и строгому соблюдению технологий.',
  ],
  listIntroHtml: '<strong>Почему жители Ногинска выбирают нас:</strong>',
  listItemsHtml: [
    'Бесплатный выезд инженера для замера и детальной консультации.',
    'Опыт работы со сталинским жилым фондом и кирпичными домами советского периода.',
    'Профессиональная разводка труб полипропиленом или сшитым полиэтиленом (Rehau).',
    'Укладка плитки любой сложности с идеальными швами и углами под 45 градусов.',
    'Официальный договор, фиксированная цена и гарантия 2 года.',
  ],
  closingHtml:
    'Ремонт санузла в Ногинске с нами — это просто и надежно. Оставьте заявку сегодня, и мы поможем вам рассчитать оптимальный бюджет на преображение вашей ванной комнаты.',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'Вы работаете в Электростали?',
    answer: 'Да, Электросталь и Ногинск — это смежные для нас территории. Мы активно работаем в обоих городах без каких-либо наценок за выезд.',
  },
  {
    question: 'Где вы закупаете материалы для ремонта в Ногинске?',
    answer: 'Мы сотрудничаем с крупными строительными центрами на Горьковском шоссе и можем организовать доставку напрямую от дилеров по оптовым ценам.',
  },
  {
    question: 'Сможете ли вы сделать ремонт в частном доме в черте города?',
    answer: 'Да, мы выполняем ремонт санузлов в частном секторе, включая монтаж автономного водопровода и канализации внутри дома.',
  },
  {
    question: 'Нужно ли мне закупать клей для плитки и штукатурку?',
    answer: 'Мы рекомендуем доверить закупку черновых материалов нам. Это гарантирует их совместимость и качество, а также избавляет вас от хлопот с логистикой.',
  },
  {
    question: 'Как долго длится ремонт стандартной ванной в Ногинске?',
    answer: 'Капитальный ремонт "под ключ" в типовом доме обычно занимает от 18 до 22 рабочих дней.',
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
  slug: 'remont-sanuzla-noginsk',
  path: '/remont-sanuzla-noginsk/',
  canonicalPath: '/remont-sanuzla-noginsk/',
  seo: {
    title: 'Ремонт санузла в Ногинске под ключ | Цена от мастеров | Ремонт ванной комнаты',
    description:
      'Ремонт санузла в Ногинске под ключ | Бесплатный выезд мастера | Гарантия 2 года | Без предоплаты | Лучшие цены на ремонт санузлов ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-noginsk',
        title: 'Ремонт санузла в Ногинске',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Ногинске', href: '/remont-sanuzla-noginsk/', isActive: true }] }),
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
