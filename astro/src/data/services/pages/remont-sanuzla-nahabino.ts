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
  summaryTitle: 'Качественный ремонт санузла в Нахабино под ключ',
  paragraphsHtml: [
    'Район <strong>Нахабино</strong> — это активно развивающийся пригород Москвы с современными жилыми комплексами и уютной атмосферой. Ремонт санузла здесь часто предполагает создание комфортного и стильного пространства, которое станет местом отдыха после рабочего дня. Мы предлагаем жителям Нахабино профессиональные услуги по комплексной отделке ванных комнат.',
    'Наши бригады регулярно работают на объектах в ЖК "Красногорский", "Нахабино Ясное" и других. Мы отлично знакомы с планировками квартир в этом районе и предлагаем оптимальные решения по разводке коммуникаций, установке современной сантехники и финишной отделке плиткой и керамогранитом.',
  ],
  listIntroHtml: '<strong>Почему ремонт санузла в Нахабино доверяют нам:</strong>',
  listItemsHtml: [
    'Профессиональный монтаж инженерных систем любой сложности.',
    'Использование долговечных материалов, подходящих для загородных условий.',
    'Высокое качество укладки плитки с гарантией идеальных швов.',
    'Установка душевых зон, инсталляций и мебели для ванных комнат.',
    'Соблюдение сроков и фиксированная цена, прописанная в договоре.',
  ],
  closingHtml:
    'Ремонт в Нахабино — это отсутствие лишних хлопот с нашей командой. Мы берем на себя все этапы: от замеров до клининга. Оставьте заявку на бесплатный выезд замерщика и получите детальный расчет вашего проекта.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли устанавливать фильтры для очистки воды в Нахабино?',
  answer:
    'Да, мы настоятельно рекомендуем установку фильтров грубой и тонкой очистки для защиты смесителей и бытовой техники от возможных примесей в воде.',
},
{
  question: 'Как долго длится ремонт стандартной ванной комнаты?',
  answer:
    'В среднем ремонт "под ключ" занимает от 12 до 18 рабочих дней, в зависимости от объема работ.',
},
{
  question: 'Помогаете ли вы с доставкой материалов в Нахабино?',
  answer:
    'Да, мы можем полностью взять на себя закупку и доставку черновых и чистовых материалов на ваш объект.',
},
{
  question: 'Выполняете ли вы монтаж теплых полов в санузле?',
  answer:
    'Да, мы выполняем монтаж электрических теплых полов с установкой терморегулятора для вашего максимального комфорта.',
},
{
  question: 'Бесплатен ли выезд мастера на замер в Нахабино?',
  answer:
    'Да, выезд нашего технического специалиста для осмотра и консультации в районе Нахабино осуществляется бесплатно.',
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
  slug: 'remont-sanuzla-nahabino',
  path: '/remont-sanuzla-nahabino/',
  canonicalPath: '/remont-sanuzla-nahabino/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Нахабино | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Нахабино | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ 8 (495) 137-52-39',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-nahabino',
        title: 'Ремонт санузла у станции метро Нахабино',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Нахабино', href: '/remont-sanuzla-nahabino/', isActive: true }] }),
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

