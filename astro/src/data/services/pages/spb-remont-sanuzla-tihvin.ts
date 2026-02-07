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
import { SPB_GEOGRAPHY_BLOCK_CONTENT } from './spb-home';
import type { FaqItem } from '../../../legacy/types';
import type { IncludedBlockConfig, PriceTableCategory, PriceTableConfig, SeoTextBlockConfig, ServicePage } from '../types';

const PAGE_SEO_TEXT_BLOCK_CONTENT: SeoTextBlockConfig = {
  summaryTitle: 'Качественный ремонт санузла в Тихвине под ключ',
  paragraphsHtml: [
    'Город <strong>Тихвин</strong> — исторический и культурный центр Ленинградской области, где мы предлагаем полный спектр услуг по ремонту санузлов. Наши мастера с опытом от 7 лет выполняют все виды работ: от демонтажа до чистовой отделки.',
    'Мы работаем в Тихвине и окрестностях, обеспечивая высокие стандарты качества. Бесплатный выезд инженера на замер, фиксированная смета и гарантия 2 года на все работы.',
  ],
  listIntroHtml: '<strong>Почему ремонт санузла в Тихвине доверяют нам:</strong>',
  listItemsHtml: [
    'Бесплатный выезд инженера для замера и составления сметы.',
    'Использование долговечных материалов, подходящих для местных условий.',
    'Профессиональная укладка плитки и керамогранита с гарантией.',
    'Монтаж систем защиты от протечек и надежной гидроизоляции.',
    'Соблюдение оговоренных сроков и фиксированная стоимость работ.',
  ],
  closingHtml:
    'Ремонт санузла в Тихвине с нашей командой — это отсутствие хлопот и превосходный результат. Оставьте заявку на бесплатный замер и получите расчет стоимости вашего ремонта.',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'Сколько стоит ремонт санузла в Тихвине?',
    answer: 'Стоимость зависит от площади, выбранных материалов и сложности работ. Оставьте заявку — мы бесплатно рассчитаем смету в трех вариантах: Эконом, Стандарт и Премиум.',
  },
  {
    question: 'Как быстро мастер может приехать на замер в Тихвин?',
    answer: 'Мы организуем выезд специалиста в Тихвин по предварительной договоренности, стараясь подобрать максимально удобное для вас время.',
  },
  {
    question: 'Какую гарантию вы предоставляете на работы в Тихвине?',
    answer: 'На все виды работ мы даем официальную гарантию сроком 2 года по договору.',
  },
  {
    question: 'Нужно ли вносить предоплату за ремонт?',
    answer: 'Нет, мы работаем без предоплаты. Вы оплачиваете каждый этап работ только после его приемки.',
  },
  {
    question: 'Помогаете ли вы с доставкой материалов в Тихвин?',
    answer: 'Да, мы можем полностью взять на себя закупку, доставку и подъем всех необходимых строительных материалов на ваш объект.',
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

const PAGE_GEOGRAPHY_SEO_TEXT_HTML = SPB_GEOGRAPHY_BLOCK_CONTENT.seoTextHtml;

const QUALITY = use('quality');
const PACKAGES = use('packagesDefault');
const INCLUDED = use('included');
const GEOGRAPHY = use('geography');

export const page: ServicePage = {
  slug: 'spb-remont-sanuzla-tihvin',
  path: '/spb/remont-sanuzla-tihvin/',
  canonicalPath: '/spb/remont-sanuzla-tihvin/',
  seo: {
    title: 'Ремонт санузла в Тихвине под ключ | Цена от мастеров | Ремонт ванной комнаты',
    description:
      'Ремонт санузла в Тихвине под ключ | Бесплатный выезд мастера | Гарантия 2 года | Без предоплаты | Лучшие цены на ремонт санузлов ☎ +7(812)XXX-XX-XX',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-tihvin',
        title: 'Ремонт санузла в Тихвине',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Санкт-Петербург', href: '/spb/' }, { label: 'Ремонт санузлов в Тихвине', href: '/spb/remont-sanuzla-tihvin/', isActive: true }] }),
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
    unique({ ...GEOGRAPHY, config: SPB_GEOGRAPHY_BLOCK_CONTENT }),
  ]),
};
