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
  summaryTitle: 'Профессиональный ремонт санузла в Сокольниках',
  paragraphsHtml: [
    'Район <strong>Сокольники</strong> — это один из старейших и престижных районов Москвы с богатой историей и уникальной архитектурой. Ремонт санузла в этом районе требует особого внимания к деталям, особенно в домах с историческим прошлым, где важно сочетать современные технологии комфорта с уважением к конструктивным особенностям зданий.',
    'Мы предлагаем жителям Сокольников услуги по капитальному ремонту ванных комнат и туалетов под ключ. Наши мастера имеют опыт работы в различных типах домов на Русаковской и Стромынке. Мы выполняем бережный демонтаж, замену инженерных сетей и высококачественную отделку, превращая ваш санузел в современное и функциональное пространство.',
  ],
  listIntroHtml: '<strong>Особенности наших работ в Сокольниках:</strong>',
  listItemsHtml: [
    'Тщательный демонтаж в домах с многолетней историей.',
    'Использование долговечных материалов и комплектующих от ведущих брендов.',
    'Профессиональный монтаж сантехники и электрооборудования.',
    'Выравнивание стен и полов с соблюдением строгих геометрических параметров.',
    'Индивидуальный подход к планировке в нестандартных помещениях.',
  ],
  closingHtml:
    'Ремонт санузла в Сокольниках должен быть безупречным. Мы гарантируем высокое качество исполнения на каждом этапе и строгое соблюдение оговоренных сроков. Закажите бесплатную консультацию и выезд замерщика для оценки вашего проекта.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли согласовывать перепланировку в старых домах Сокольников?',
  answer:
    'Любые серьезные изменения в планировке санузла требуют согласования. Мы консультируем наших клиентов по вопросам соответствия работ строительным нормам.',
},
{
  question: 'Работаете ли вы с эксклюзивной плиткой и мозаикой?',
  answer:
    'Да, наши плиточники обладают высокой квалификацией и опытом работы с дорогостоящими материалами, гарантируя идеальный стык и швы.',
},
{
  question: 'Какую систему труб вы рекомендуете для старого фонда?',
  answer:
    'Для максимальной надежности в Сокольниках мы рекомендуем использовать систему сшитого полиэтилена Rehau, которая не подвержена коррозии и выдерживает высокое давление.',
},
{
  question: 'Как долго длится ремонт санузла "под ключ"?',
  answer:
    'В зависимости от сложности и состояния помещения, ремонт занимает от 15 до 25 рабочих дней.',
},
{
  question: 'Бесплатен ли выезд мастера на замер в Сокольники?',
  answer:
    'Да, наш специалист приедет к вам в Сокольники для проведения замеров и составления предварительной сметы совершенно бесплатно.',
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
  slug: 'remont-sanuzla-sokolniki',
  path: '/remont-sanuzla-sokolniki/',
  canonicalPath: '/remont-sanuzla-sokolniki/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Сокольники | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Сокольники | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-sokolniki',
        title: 'Ремонт санузла у станции метро Сокольники',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов у Сокольников', href: '/remont-sanuzla-sokolniki/', isActive: true }] }),
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

