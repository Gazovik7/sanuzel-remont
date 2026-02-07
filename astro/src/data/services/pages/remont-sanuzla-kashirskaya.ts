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
  summaryTitle: 'Качественный ремонт санузла у метро Каширская',
  paragraphsHtml: [
    'Район метро <strong>Каширская</strong> — это развитый жилой массив Южного округа со сложившейся застройкой. Ремонт санузла в этом районе часто требует вдумчивого подхода к замене коммуникаций в кирпичных и панельных домах, а также оптимального планирования пространства для максимального удобства жильцов. Мы предлагаем жителям Каширского шоссе профессиональные услуги по капитальному обновлению ванных комнат.',
    'Наши мастера имеют большой опыт работы в домах на Каширском шоссе, улице Москворечье и прилегающих кварталах. Мы выполняем полный цикл работ: от демонтажа изношенной отделки до финишной установки сантехники, обеспечивая надежность инженерных систем и эстетичный вид вашего санузла на долгие годы.',
  ],
  listIntroHtml: '<strong>Почему ремонт санузла на Каширской заказывают у нас:</strong>',
  listItemsHtml: [
    'Оперативный выезд технолога для замера и составления сметы.',
    'Полная замена труб на современные долговечные системы.',
    'Высокое качество укладки керамической плитки и керамогранита.',
    'Монтаж надежной сантехники, инсталляций и смесителей.',
    'Гарантия 2 года на все выполненные работы по официальному договору.',
  ],
  closingHtml:
    'Ремонт санузла на Каширской с нашей командой — это залог вашего спокойствия. Мы берем на себя все хлопоты по организации процесса, гарантируя чистоту и соблюдение сроков. Закажите бесплатный замер и получите расчет стоимости вашего ремонта сегодня.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли менять электропроводку в ванной в старом доме?',
  answer:
    'В домах старой застройки района Каширская мы настоятельно рекомендуем замену проводки на новую медную с обязательной установкой влагозащищенных розеток.',
},
{
  question: 'Как быстро мастер может приехать на замер на Каширскую?',
  answer:
    'Наши специалисты работают в ЮАО ежедневно, поэтому выезд замерщика возможен в день обращения или на следующий день.',
},
{
  question: 'Помогаете ли вы с закупкой черновых материалов?',
  answer:
    'Да, мы полностью берем на себя подбор, закупку и доставку качественных черновых материалов, предоставляя все необходимые чеки.',
},
{
  question: 'Сколько времени занимает стандартный ремонт санузла?',
  answer:
    'В среднем ремонт "под ключ" занимает от 14 до 20 дней в зависимости от объема работ и состояния стен.',
},
{
  question: 'Бесплатен ли выезд мастера на замер?',
  answer:
    'Да, выезд нашего технического специалиста для осмотра помещения и составления сметы на Каширской осуществляется бесплатно.',
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
  slug: 'remont-sanuzla-kashirskaya',
  path: '/remont-sanuzla-kashirskaya/',
  canonicalPath: '/remont-sanuzla-kashirskaya/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Каширская | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Каширская | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-kashirskaya',
        title: 'Ремонт санузла у станции метро Каширская',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов у Каширской', href: '/remont-sanuzla-kashirskaya/', isActive: true }] }),
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

