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
  summaryTitle: 'Качественный ремонт санузла в Коньково',
  paragraphsHtml: [
    'Район <strong>Коньково</strong> — это благоустроенный жилой массив на юго-западе Москвы со сложившейся застройкой различных периодов. Ремонт санузла здесь часто предполагает профессиональное обновление изношенных коммуникаций в панельных и блочных домах, а также создание современного интерьера, отвечающего высоким требованиям комфорта. Мы предлагаем жителям района надежные услуги по капитальной отделке ванных комнат.',
    'Наши мастера имеют большой опыт работы в домах на Профсоюзной улице, улице Островитянова и Академика Капицы. Мы знаем все нюансы работы с инженерными сетями в этом районе и предлагаем решения, которые позволят вам забыть о протечках на долгие годы, обеспечив безупречный вид вашей ванной комнаты и туалета.',
  ],
  listIntroHtml: '<strong>Почему жители Коньково выбирают нас для ремонта санузла:</strong>',
  listItemsHtml: [
    'Тщательная диагностика состояния труб и проводки перед началом работ.',
    'Полная замена коммуникаций на современные системы Rehau или полипропилен.',
    'Высококачественная укладка керамической плитки и керамогранита.',
    'Монтаж надежной сантехники, инсталляций и мебели для ванной.',
    'Работа по договору с фиксированной ценой и гарантией 2 года.',
  ],
  closingHtml:
    'Надежный ремонт в уютном Коньково — это наша специализация. Мы берем на себя все хлопоты по организации процесса, гарантируя чистоту и соблюдение сроков. Закажите бесплатный выезд нашего замерщика для оценки состояния вашего санузла.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли менять полотенцесушитель при ремонте в Коньково?',
  answer:
    'В большинстве домов района мы рекомендуем замену старого водяного полотенцесушителя на новый или установку электрической модели для исключения риска протечек.',
},
{
  question: 'Как быстро вы можете приехать на замер в ЮЗАО?',
  answer:
    'Наши специалисты работают в Коньково и Беляево ежедневно, поэтому замер возможен в день обращения или в любое удобное для вас время.',
},
{
  question: 'Помогаете ли вы с закупкой черновых материалов?',
  answer:
    'Да, мы полностью берем на себя подбор, закупку и доставку качественных черновых материалов, предоставляя все необходимые чеки.',
},
{
  question: 'Сколько времени занимает ремонт стандартной ванной комнаты?',
  answer:
    'В среднем ремонт "под ключ" в типовом доме Коньково занимает от 12 до 18 рабочих дней.',
},
{
  question: 'Бесплатен ли выезд мастера на замер?',
  answer:
    'Да, выезд нашего технического специалиста для проведения замеров и консультации в районе Коньково осуществляется бесплатно.',
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
  slug: 'remont-sanuzla-konkovo',
  path: '/remont-sanuzla-konkovo/',
  canonicalPath: '/remont-sanuzla-konkovo/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Коньково | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Коньково | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-konkovo',
        title: 'Ремонт санузла у станции метро Коньково',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Коньково', href: '/remont-sanuzla-konkovo/', isActive: true }] }),
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

