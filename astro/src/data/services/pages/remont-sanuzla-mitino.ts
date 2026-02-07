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
  summaryTitle: 'Профессиональный ремонт санузла в Митино',
  paragraphsHtml: [
    'Район <strong>Митино</strong> — это один из самых благоустроенных и современных районов Северо-Запада Москвы с развитой инфраструктурой и качественным жилым фондом. Ремонт санузла здесь часто предполагает создание эргономичного пространства, удобного для всей семьи, с использованием современных технологий и стильных дизайнерских решений.',
    'Наши мастера имеют большой опыт работы в домах на Митинской улице, Пятницком шоссе и улице Барышиха. Мы предлагаем комплексные услуги по ремонту ванных комнат и туалетов под ключ, гарантируя надежность инженерных систем и безупречное качество финишной отделки плиткой и керамогранитом.',
  ],
  listIntroHtml: '<strong>Наши преимущества для жителей района Митино:</strong>',
  listItemsHtml: [
    'Использование долговечных материалов Rehau для разводки водоснабжения.',
    'Профессиональная гидроизоляция и монтаж систем защиты от протечек.',
    'Высококачественная укладка плитки с соблюдением всех технологических норм.',
    'Монтаж современной сантехники, инсталляций и душевых ограждений.',
    'Работа по договору с фиксированной ценой и гарантией 2 года.',
  ],
  closingHtml:
    'Сделайте свой санузел в Митино местом истинного комфорта. Мы берем на себя все заботы по организации процесса, обеспечивая чистоту и соблюдение сроков. Закажите бесплатный выезд инженера для замера и консультации уже сегодня.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли менять полотенцесушитель при ремонте в Митино?',
  answer:
    'В большинстве случаев мы рекомендуем замену старого водяного полотенцесушителя на новый или установку электрической модели для повышения надежности системы.',
},
{
  question: 'Как быстро вы можете приехать на замер в Митино?',
  answer:
    'Наши специалисты работают в СЗАО ежедневно, поэтому выезд замерщика на Митинскую или соседние улицы возможен в день обращения.',
},
{
  question: 'Помогаете ли вы с закупкой черновых материалов?',
  answer:
    'Да, мы полностью берем на себя подбор, закупку и доставку качественных черновых материалов, предоставляя всю отчетность.',
},
{
  question: 'Сколько времени занимает ремонт стандартной ванной комнаты?',
  answer:
    'В среднем ремонт "под ключ" в типовом доме Митино занимает от 12 до 18 рабочих дней.',
},
{
  question: 'Бесплатен ли выезд мастера на замер в Митино?',
  answer:
    'Да, выезд нашего технического специалиста для проведения замеров и консультации в районе Митино осуществляется бесплатно.',
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
  slug: 'remont-sanuzla-mitino',
  path: '/remont-sanuzla-mitino/',
  canonicalPath: '/remont-sanuzla-mitino/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Митино | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Митино | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ 8 (495) 137-52-39',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-mitino',
        title: 'Ремонт санузла у станции метро Митино',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Митино', href: '/remont-sanuzla-mitino/', isActive: true }] }),
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

