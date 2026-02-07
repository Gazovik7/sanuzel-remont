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
  summaryTitle: 'Надежный ремонт санузла в Аннино',
  paragraphsHtml: [
    'Район метро <strong>Аннино</strong> — это комфортный спальный район на юге Москвы с плотной панельной застройкой. Ремонт санузла в таких домах требует практичных решений, позволяющих обновить коммуникации и освежить интерьер без лишних затрат. Мы предлагаем жителям Чертаново Южное качественные услуги по ремонту ванных комнат и туалетов под ключ.',
    'Наши бригады отлично знают особенности домов серий П-44, КОПЭ и П-3 на Варшавском шоссе и улице Газопровод. Мы предлагаем проверенные временем варианты планировки и отделки, которые помогут сделать даже небольшой санузел максимально удобным и функциональным.',
  ],
  listIntroHtml: '<strong>Наши преимущества для жителей района Аннино:</strong>',
  listItemsHtml: [
    'Оперативный выезд замерщика и быстрый расчет стоимости.',
    'Полная замена труб на долговечный полипропилен или сшитый полиэтилен.',
    'Качественная укладка плитки с ровными швами и надежной затиркой.',
    'Установка современной сантехники, ванн и душевых кабин.',
    'Доступные цены и отсутствие скрытых доплат в процессе работы.',
  ],
  closingHtml:
    'Ремонт санузла в Аннино с нашей командой — это просто и выгодно. Мы берем на себя все хлопоты, гарантируя чистоту и соблюдение сроков. Закажите бесплатный выезд мастера для оценки вашего ремонта прямо сейчас!',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли менять полотенцесушитель в панельном доме?',
  answer:
    'В большинстве случаев мы рекомендуем замену старого змеевика на новый из нержавеющей стали или установку электрического для надежности и эстетики.',
},
{
  question: 'Как быстро вы можете приступить к работе в Аннино?',
  answer:
    'Обычно мы готовы выйти на объект в течение 2-4 дней после согласования сметы и подписания договора.',
},
{
  question: 'Вывозите ли вы старую ванну и мусор?',
  answer:
    'Да, демонтаж и вывоз строительного мусора, включая старую сантехнику, входит в наш перечень услуг.',
},
{
  question: 'Сколько времени занимает ремонт раздельного санузла?',
  answer:
    'Капитальный ремонт ванной и туалета в типовом доме Аннино занимает в среднем от 14 до 18 дней.',
},
{
  question: 'Бесплатен ли выезд замерщика?',
  answer:
    'Да, выезд нашего специалиста в любую точку района Аннино для замера и консультации абсолютно бесплатен.',
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
  slug: 'remont-sanuzla-annino',
  path: '/remont-sanuzla-annino/',
  canonicalPath: '/remont-sanuzla-annino/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Аннино | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Аннино | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-annino',
        title: 'Ремонт санузла у станции метро Аннино',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов у метро Аннино', href: '/remont-sanuzla-annino/', isActive: true }] }),
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

