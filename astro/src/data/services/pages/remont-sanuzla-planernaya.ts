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
  summaryTitle: 'Качественный ремонт санузла на Планерной',
  paragraphsHtml: [
    'Район метро <strong>Планерная</strong> и Северное Тушино — это зеленый и комфортный район со сложившейся застройкой, где многие квартиры требуют качественного обновления ванных комнат. Мы предлагаем жителям района профессиональный ремонт санузлов, направленный на повышение комфорта, надежности и эстетики вашего жилья.',
    'Наши мастера имеют большой опыт работы в домах на улице Свободы, Планерной и Вилиса Лациса. Мы выполняем капитальный ремонт санузлов под ключ, учитывая особенности типовых серий домов района и предлагая лучшие решения по выбору материалов и сантехнического оборудования.',
  ],
  listIntroHtml: '<strong>Преимущества ремонта санузла с нашей командой на Планерной:</strong>',
  listItemsHtml: [
    'Комплексный подход: от демонтажа до установки аксессуаров.',
    'Полная замена труб на современные долговечные системы.',
    'Профессиональная укладка плитки и керамогранита.',
    'Монтаж влагозащищенных потолков и систем освещения.',
    'Гарантия 2 года на все виды работ и прозрачный договор.',
  ],
  closingHtml:
    'Сделайте свой санузел на Планерной современным и функциональным. Мы берем на себя все заботы по организации процесса, гарантируя чистоту и соблюдение сроков. Закажите бесплатный выезд замерщика для оценки вашего проекта.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли менять старые трубы на Планерной?',
  answer:
    'В большинстве домов района трубы уже выработали свой ресурс. Мы рекомендуем полную замену на современные материалы (Rehau, полипропилен), чтобы избежать протечек в будущем.',
},
{
  question: 'Сколько стоит ремонт ванной в типовом доме в Тушино?',
  answer:
    'Стоимость зависит от объема работ и выбранных материалов. В среднем капитальный ремонт санузла начинается от 85 000 рублей за работы.',
},
{
  question: 'Вы помогаете с выбором и доставкой плитки?',
  answer:
    'Да, наш технолог проконсультирует по выбору материалов, и мы можем организовать доставку всего необходимого на объект.',
},
{
  question: 'Как долго длится ремонт санузла "под ключ"?',
  answer:
    'В зависимости от сложности, ремонт занимает от 12 до 20 рабочих дней.',
},
{
  question: 'Можно ли сделать ремонт санузла частями?',
  answer:
    'Мы специализируемся на комплексном ремонте "под ключ", так как это гарантирует целостность всех инженерных систем и высокое качество финишной отделки.',
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
  slug: 'remont-sanuzla-planernaya',
  path: '/remont-sanuzla-planernaya/',
  canonicalPath: '/remont-sanuzla-planernaya/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Планерная | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Планерная | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-planernaya',
        title: 'Ремонт санузла у станции метро Планерная',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов на Планерной', href: '/remont-sanuzla-planernaya/', isActive: true }] }),
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

