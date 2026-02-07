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
  summaryTitle: 'Профессиональный ремонт санузла у метро Окская',
  paragraphsHtml: [
    'Район метро <strong>Окская</strong> — это молодая и перспективная часть города, где активно появляются новые жилые кварталы. Ремонт санузла в этом районе часто требует свежего взгляда, современных инженерных решений и качественной отделки "под ключ". Мы предлагаем жителям Рязанского района услуги по созданию современных и надежных ванных комнат.',
    'Наши мастера выполняют весь цикл работ: от первичной разводки труб в новостройках до капитального обновления санузлов в обжитых домах. Мы используем только проверенные материалы и следуем актуальным стандартам качества, чтобы ваш санузел радовал вас долгие годы.',
  ],
  listIntroHtml: '<strong>Почему ремонт санузла на Окской стоит доверить нам:</strong>',
  listItemsHtml: [
    'Оперативный выезд замерщика и составление сметы в день обращения.',
    'Опыт работы с современными материалами (керамогранит, сшитый полиэтилен).',
    'Прозрачное ценообразование и отсутствие скрытых доплат в процессе.',
    'Соблюдение всех строительных норм и технологических этапов.',
    'Гарантия 24 месяца на все виды выполненных работ.',
  ],
  closingHtml:
    'Ваша ванная комната на Окской станет образцом комфорта и стиля. Мы берем на себя все хлопоты по организации ремонта, гарантируя чистоту и точность исполнения. Закажите бесплатный выезд замерщика прямо сейчас!',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Как долго длится ремонт санузла в новостройке у Окской?',
  answer:
    'В зависимости от готовности стен и сложности разводки, ремонт занимает от 14 до 22 рабочих дней.',
},
{
  question: 'Нужно ли вносить предоплату за работу?',
  answer:
    'Нет, мы работаем без авансов на услуги. Оплата производится поэтапно, только после того как вы приняли выполненные работы.',
},
{
  question: 'Вы помогаете с доставкой материалов на Окскую?',
  answer:
    'Да, мы можем организовать полную комплектацию объекта всеми необходимыми материалами и их доставку.',
},
{
  question: 'Выполняете ли вы монтаж душевых трапов в пол?',
  answer:
    'Да, мы выполняем монтаж современных душевых зон с трапом, обеспечивая идеальную гидроизоляцию и правильный уклон.',
},
{
  question: 'Бесплатен ли замер в районе метро Окская?',
  answer:
    'Да, наш специалист приедет для проведения замеров и консультации абсолютно бесплатно.',
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
  slug: 'remont-sanuzla-okskaya',
  path: '/remont-sanuzla-okskaya/',
  canonicalPath: '/remont-sanuzla-okskaya/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Окская | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Окская | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-okskaya',
        title: 'Ремонт санузла у станции метро Окская',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов на Окской', href: '/remont-sanuzla-okskaya/', isActive: true }] }),
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

