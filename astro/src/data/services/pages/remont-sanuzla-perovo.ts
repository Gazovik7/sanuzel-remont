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
  summaryTitle: 'Профессиональный ремонт санузла в Перово',
  paragraphsHtml: [
    'Район <strong>Перово</strong> — это один из самых уютных и зеленых районов Восточного округа с богатым выбором жилья различных периодов постройки. Ремонт санузла в Перово требует внимательного отношения к состоянию инженерных сетей, особенно в домах, где давно не проводился капитальный ремонт. Мы предлагаем жителям ВАО качественные услуги по обновлению ванных комнат.',
    'Наши мастера отлично знакомы с особенностями домов на Зеленом проспекте, 1-й и 2-й Владимирских улицах. Мы выполняем весь цикл работ: от демонтажа изношенной отделки до финишной установки современной сантехники, создавая комфортное и долговечное пространство.',
  ],
  listIntroHtml: '<strong>Наши преимущества при ремонте санузлов в Перово:</strong>',
  listItemsHtml: [
    'Тщательная диагностика и полная замена старых коммуникаций.',
    'Индивидуальный подбор отделочных материалов под ваш бюджет.',
    'Высокое качество укладки плитки и керамогранита.',
    'Монтаж надежных систем водоснабжения и водоотведения.',
    'Официальная гарантия 2 года и работа строго по договору.',
  ],
  closingHtml:
    'Ремонт санузла в Перово с нашей командой — это залог качества и отсутствия стресса. Мы фиксируем итоговую стоимость и сроки, гарантируя превосходный результат. Закажите бесплатный выезд замерщика для оценки состояния вашей ванной.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли менять полотенцесушитель при ремонте в Перово?',
  answer:
    'В большинстве случаев мы рекомендуем замену старого водяного полотенцесушителя на новый или установку электрической модели для повышения надежности и эстетики.',
},
{
  question: 'Как быстро вы можете приехать на замер в ВАО?',
  answer:
    'Наши специалисты работают в Перово и Новогиреево ежедневно, поэтому замер возможен в день обращения или в любое удобное для вас время.',
},
{
  question: 'Помогаете ли вы с закупкой черновых материалов?',
  answer:
    'Да, мы берем на себя подбор, закупку и доставку качественных черновых материалов, предоставляя все необходимые чеки и отчетность.',
},
{
  question: 'Сколько времени занимает ремонт совмещенного санузла?',
  answer:
    'В зависимости от сложности работ, ремонт совмещенного санузла в Перово занимает от 14 до 21 дня.',
},
{
  question: 'Выполняете ли вы объединение ванны и туалета?',
  answer:
    'Да, мы выполняем демонтаж перегородок и создание единого пространства санузла с соблюдением всех строительных норм.',
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
  slug: 'remont-sanuzla-perovo',
  path: '/remont-sanuzla-perovo/',
  canonicalPath: '/remont-sanuzla-perovo/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Перово | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Перово | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-perovo',
        title: 'Ремонт санузла у станции метро Перово',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Перово', href: '/remont-sanuzla-perovo/', isActive: true }] }),
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

