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
  summaryTitle: 'Качественный ремонт санузла у метро Братиславская',
  paragraphsHtml: [
    'Район метро <strong>Братиславская</strong> в Марьино — это пример современной городской застройки с преобладанием качественных панельных домов серий П-44Т и КОПЭ. Ремонт санузла здесь требует профессионального подхода к использованию пространства и надежного монтажа всех инженерных узлов. Мы предлагаем жителям района комплексные услуги по созданию долговечных и стильных ванных комнат.',
    'Наши мастера постоянно работают на объектах у метро Братиславская, отлично зная специфику сантехкабин в этих домах. Мы выполняем весь спектр работ: от грамотной разводки труб до безупречной укладки плитки и керамогранита. Мы ценим доверие наших клиентов и гарантируем соблюдение технологий на каждом этапе ремонта.',
  ],
  listIntroHtml: '<strong>Наши преимущества для жителей района Братиславская:</strong>',
  listItemsHtml: [
    'Оперативный выезд инженера для замера и составления сметы.',
    'Использование долговечных материалов Rehau для систем водоснабжения.',
    'Профессиональный монтаж инсталляций, современных ванн и душевых.',
    'Соблюдение "закона о тишине" и чистоты в подъезде во время работ.',
    'Гарантия 2 года на все виды сантехнических и отделочных работ.',
  ],
  closingHtml:
    'Ремонт санузла на Братиславской с нашей командой — это залог вашего комфорта. Мы берем на себя все организационные вопросы, гарантируя превосходный результат. Закажите бесплатный замер и расчет стоимости вашего проекта уже сегодня.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли менять трубы в доме серии П-44Т?',
  answer:
    'В домах этой серии трубы часто имеют значительный износ. Мы рекомендуем замену на сшитый полиэтилен Rehau для обеспечения максимальной надежности.',
},
{
  question: 'Как быстро вы можете начать ремонт у метро Братиславская?',
  answer:
    'Обычно мы готовы выйти на объект в течение 3-5 дней после подписания договора и закупки необходимых материалов.',
},
{
  question: 'Помогаете ли вы с закупкой плитки и сантехники?',
  answer:
    'Да, мы консультируем по выбору материалов и можем помочь с их приобретением у наших партнеров со скидкой для наших клиентов.',
},
{
  question: 'Сколько времени занимает стандартный ремонт санузла?',
  answer:
    'В среднем комплексный ремонт "под ключ" занимает от 12 до 18 дней в зависимости от сложности отделки.',
},
{
  question: 'Бесплатен ли выезд мастера на замер?',
  answer:
    'Да, выезд нашего технического специалиста для осмотра помещения и консультации в районе Братиславская осуществляется бесплатно.',
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
  slug: 'remont-sanuzla-bratislavskaya',
  path: '/remont-sanuzla-bratislavskaya/',
  canonicalPath: '/remont-sanuzla-bratislavskaya/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Братиславская | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Братиславская | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-bratislavskaya',
        title: 'Ремонт санузла у станции метро Братиславская',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов у Братиславской', href: '/remont-sanuzla-bratislavskaya/', isActive: true }] }),
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

