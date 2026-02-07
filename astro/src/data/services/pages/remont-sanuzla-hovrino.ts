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
  summaryTitle: 'Профессиональный ремонт санузла в Ховрино',
  paragraphsHtml: [
    'Район <strong>Ховрино</strong> на севере Москвы получил новый импульс развития с открытием одноименной станции метро. Здесь соседствуют уютные дома советского периода и современные жилые комплексы. Ремонт санузла в Ховрино требует учета специфики каждого типа жилья: от капитальной замены изношенных сетей в старом фонде до высококачественной отделки новостроек "с нуля".',
    'Мы предлагаем жителям Ховрино услуги по комплексному ремонту ванных комнат и туалетов. Наши мастера отлично знакомы со спецификой домов на Фестивальной улице, улице Дыбенко и в новых ЖК района. Мы обеспечиваем надежность инженерных систем и безупречный вид финишной отделки, создавая комфортное пространство для жизни.',
  ],
  listIntroHtml: '<strong>Почему ремонт санузла в Ховрино доверяют нам:</strong>',
  listItemsHtml: [
    'Опыт работы как в типовых панельных домах, так и в современных ЖК.',
    'Полная замена труб на долговечные материалы (Rehau, полипропилен).',
    'Идеальная укладка плитки и керамогранита любого формата.',
    'Монтаж современной сантехники, систем защиты от протечек и инсталляций.',
    'Соблюдение оговоренных сроков и фиксированная цена по договору.',
  ],
  closingHtml:
    'Сделайте свой санузел в Ховрино современным и надежным. Мы берем на себя все этапы: от проектирования до финальной уборки. Закажите бесплатный выезд инженера-замерщика для оценки состояния вашего санузла уже сегодня.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли менять полотенцесушитель при ремонте в Ховрино?',
  answer:
    'В старом жилом фонде района мы рекомендуем замену водяного полотенцесушителя на новый или установку электрической модели для повышения надежности системы.',
},
{
  question: 'Как быстро вы можете начать ремонт после замера?',
  answer:
    'Обычно выход бригады на объект в Ховрино возможен в течение 3-5 рабочих дней после подписания договора.',
},
{
  question: 'Выполняете ли вы перепланировку (объединение санузла)?',
  answer:
    'Да, мы выполняем демонтаж перегородок и создание единого пространства ванной комнаты с соблюдением всех строительных норм.',
},
{
  question: 'Какую гарантию вы предоставляете на работы?',
  answer:
    'На все виды сантехнических и отделочных работ мы даем официальную гарантию сроком 2 года.',
},
{
  question: 'Бесплатен ли выезд мастера на замер в Ховрино?',
  answer:
    'Да, выезд нашего технического специалиста для осмотра и консультации в районе Ховрино осуществляется абсолютно бесплатно.',
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
  slug: 'remont-sanuzla-hovrino',
  path: '/remont-sanuzla-hovrino/',
  canonicalPath: '/remont-sanuzla-hovrino/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Ховрино | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Ховрино | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-hovrino',
        title: 'Ремонт санузла у станции метро Ховрино',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Ховрино', href: '/remont-sanuzla-hovrino/', isActive: true }] }),
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

