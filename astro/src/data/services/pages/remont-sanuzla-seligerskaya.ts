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
  summaryTitle: 'Профессиональный ремонт санузла у метро Селигерская',
  paragraphsHtml: [
    'Район метро <strong>Селигерская</strong> — один из самых динамично развивающихся в Москве. Здесь активно возводятся современные жилые комплексы, требующие качественной отделки ванных комнат "с нуля", а также сохраняется жилой фонд, нуждающийся в обновлении коммуникаций. Мы предлагаем комплексный подход к ремонту санузлов, учитывая особенности как новостроек, так и обжитых кварталов.',
    'Наши мастера выполняют весь спектр работ: от проектирования разводки труб и электрики в новых квартирах до капитальной замены изношенных сетей в старом фонде. Мы используем только проверенные материалы и современные технологии, что гарантирует долговечность и эстетичность вашего санузла.',
  ],
  listIntroHtml: '<strong>Наши преимущества для жителей района Селигерская:</strong>',
  listItemsHtml: [
    'Бесплатный выезд инженера для замера и составления детальной сметы.',
    'Опыт работы в популярных ЖК района (Селигер Сити, Любовь и Мир и др.).',
    'Использование эластичных материалов, устойчивых к усадке новых домов.',
    'Строгое соблюдение сроков и фиксированная стоимость в договоре.',
    'Гарантия 2 года на все виды сантехнических и отделочных работ.',
  ],
  closingHtml:
    'Ремонт санузла на Селигерской с нашей командой — это отсутствие хлопот и превосходный результат. Мы берем на себя все этапы: от закупки материалов до финальной уборки. Закажите консультацию технолога прямо сейчас!',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Когда лучше начинать ремонт в новостройке у Селигерской?',
  answer:
    'К ремонту в новостройке можно приступать сразу после получения ключей. Мы используем технологии, которые учитывают возможную усадку здания, сохраняя целостность плитки и коммуникаций.',
},
{
  question: 'Сколько стоит ремонт стандартного санузла под ключ?',
  answer:
    'Стоимость зависит от площади и сложности работ. В среднем комплексный ремонт санузла в этом районе начинается от 90 000 рублей за работы.',
},
{
  question: 'Помогаете ли вы с закупкой плитки и сантехники?',
  answer:
    'Да, мы консультируем по выбору материалов и можем помочь с их закупкой у наших партнеров со скидкой, а также обеспечим бережную доставку.',
},
{
  question: 'Как долго длится ремонт ванной и туалета?',
  answer:
    'В среднем ремонт "под ключ" занимает от 14 до 22 дней, в зависимости от объема демонтажных и инженерных работ.',
},
{
  question: 'Выполняете ли вы перепланировку санузла?',
  answer:
    'Да, мы выполняем снос перегородок и объединение ванной с туалетом, соблюдая все строительные нормы и правила безопасности.',
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
  slug: 'remont-sanuzla-seligerskaya',
  path: '/remont-sanuzla-seligerskaya/',
  canonicalPath: '/remont-sanuzla-seligerskaya/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Селигерская | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Селигерская | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-seligerskaya',
        title: 'Ремонт санузла у станции метро Селигерская',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов на Селигерской', href: '/remont-sanuzla-seligerskaya/', isActive: true }] }),
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

