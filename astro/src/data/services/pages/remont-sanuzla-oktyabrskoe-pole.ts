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
  summaryTitle: 'Премиальный ремонт санузла у метро Октябрьское поле',
  paragraphsHtml: [
    'Район <strong>Октябрьского поля</strong> — это престижная локация Северо-Западного округа с высокими требованиями к качеству жизни. Ремонт санузла здесь часто предполагает использование премиальных материалов, инсталляций и сложных дизайнерских решений. Мы предлагаем жителям района профессиональный подход, соответствующий статусу их жилья.',
    'Наши мастера имеют большой опыт работы в домах на улице Маршала Бирюзова, Народного Ополчения и в новых ЖК района. Мы специализируемся на высококачественной отделке, монтаже скрытых систем и установке элитной сантехники, гарантируя безупречный результат и долговечность каждой детали.',
  ],
  listIntroHtml: '<strong>Особенности наших работ на Октябрьском поле:</strong>',
  listItemsHtml: [
    'Разработка эргономичных планировок с учетом особенностей жилья.',
    'Использование долговечных инженерных систем (Rehau, Tece).',
    'Идеальная укладка крупноформатного керамогранита и мозаики.',
    'Монтаж систем защиты от протечек и "умного" освещения.',
    'Полная чистота на объекте и строгое соблюдение графиков работ.',
  ],
  closingHtml:
    'Ваш санузел на Октябрьском поле заслуживает профессионального исполнения. Мы работаем по прозрачному договору с фиксированной ценой, обеспечивая высочайший уровень сервиса. Закажите бесплатный выезд инженера для консультации и замера.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Работаете ли вы с дизайн-проектами на Октябрьском поле?',
  answer:
    'Да, мы имеем большой опыт реализации сложных дизайнерских решений, строго соблюдая все технические параметры и визуальные требования проекта.',
},
{
  question: 'Как долго длится ремонт санузла бизнес-класса?',
  answer:
    'В зависимости от сложности и используемых материалов, такой ремонт занимает от 18 до 28 рабочих дней.',
},
{
  question: 'Какую гарантию вы предоставляете на работы?',
  answer:
    'Мы даем расширенную официальную гарантию сроком 2 года на все виды сантехнических и отделочных работ.',
},
{
  question: 'Помогаете ли вы с закупкой чистовой сантехники?',
  answer:
    'Да, мы консультируем по выбору брендов и моделей, а также можем помочь с приобретением материалов у наших партнеров со скидкой.',
},
{
  question: 'Сколько стоит вызов замерщика на Октябрьское поле?',
  answer:
    'Выезд нашего технического специалиста для проведения замеров и составления сметы в этом районе абсолютно бесплатен.',
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
  slug: 'remont-sanuzla-oktyabrskoe-pole',
  path: '/remont-sanuzla-oktyabrskoe-pole/',
  canonicalPath: '/remont-sanuzla-oktyabrskoe-pole/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Октябрьское поле | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Октябрьское поле | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-oktyabrskoe-pole',
        title: 'Ремонт санузла у станции метро Октябрьское поле',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов у метро Октябрьское поле', href: '/remont-sanuzla-oktyabrskoe-pole/', isActive: true }] }),
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

