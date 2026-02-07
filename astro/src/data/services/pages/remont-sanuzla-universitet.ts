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
  summaryTitle: 'Премиальный ремонт санузла у метро Университет',
  paragraphsHtml: [
    'Район метро <strong>Университет</strong> — это знаковое место Москвы с величественной сталинской архитектурой и современными жилыми комплексами бизнес-класса. Ремонт санузла здесь требует особого подхода, сочетающего уважение к классическим пропорциям и использование новейших инженерных решений.',
    'Мы предлагаем жителям Ломоносовского и Гагаринского районов профессиональный ремонт ванных комнат под ключ. Наши мастера имеют огромный опыт работы в "сталинках" на Ломоносовском проспекте и улице Вавилова, где требуется бережный демонтаж, укрепление перекрытий и замена антикварных коммуникаций на современные системы Rehau и Tece.',
  ],
  listIntroHtml: '<strong>Особенности наших работ в районе Университет:</strong>',
  listItemsHtml: [
    'Сложный демонтаж в домах с деревянными и смешанными перекрытиями.',
    'Выравнивание высоких стен (до 3.5 метров) с идеальной геометрией.',
    'Монтаж скрытых люков и систем защиты от протечек.',
    'Установка отдельно стоящих ванн и душевых ограждений из закаленного стекла.',
    'Соблюдение чистоты в подъездах и строгое выполнение графика шумных работ.',
  ],
  closingHtml:
    'Ремонт санузла в престижном районе должен соответствовать статусу жилья. Мы гарантируем безупречное качество исполнения и долговечность результата. Закажите бесплатный выезд инженера для оценки состояния вашего санузла уже сегодня.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли менять старые чугунные трубы в "сталинке" на Университете?',
  answer:
    'Да, мы настоятельно рекомендуем полную замену старых коммуникаций на современные полимерные материалы. Это исключает риск протечек и улучшает напор воды.',
},
{
  question: 'Сколько стоит элитный ремонт ванной комнаты?',
  answer:
    'Итоговая стоимость зависит от выбранных материалов и сложности инженерных систем. В среднем ремонт в данном районе начинается от 120 000 рублей за работы "под ключ".',
},
{
  question: 'Работаете ли вы с крупноформатным керамогранитом?',
  answer:
    'Да, наши плиточники обладают необходимой квалификацией и оборудованием для работы с плитами большого формата (120х60, 240х120 и более).',
},
{
  question: 'Помогаете ли вы с закупкой элитной сантехники?',
  answer:
    'Конечно. Мы сотрудничаем с ведущими поставщиками брендов Jacob Delafon, Villeroy & Boch, Hansgrohe и предоставляем нашим клиентам партнерские скидки.',
},
{
  question: 'Какая гарантия на ремонт в старом фонде?',
  answer:
    'Мы предоставляем официальную гарантию 2 года на все виды сантехнических и отделочных работ, независимо от года постройки дома.',
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
  slug: 'remont-sanuzla-universitet',
  path: '/remont-sanuzla-universitet/',
  canonicalPath: '/remont-sanuzla-universitet/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Университет | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Университет | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-universitet',
        title: 'Ремонт санузла у станции метро Университет',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов у метро Университет', href: '/remont-sanuzla-universitet/', isActive: true }] }),
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

