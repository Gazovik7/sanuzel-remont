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
  summaryTitle: 'Качественный ремонт санузла в Тёплом Стане',
  paragraphsHtml: [
    'Район <strong>Тёплый Стан</strong> известен своей сложившейся застройкой из панельных домов популярных серий (П-44, П-3, И-209А). Ремонт ванной комнаты в таких домах имеет свои стандарты и проверенные временем решения, которые позволяют сделать помещение максимально функциональным даже при ограниченной площади.',
    'Мы предлагаем жителям Тёплого Стана услуги по капитальному и косметическому ремонту санузлов. Наши бригады регулярно работают на Профсоюзной улице и улице Островитянова, отлично зная нюансы демонтажа сантехкабин и особенности прокладки труб в стесненных условиях типовых квартир.',
  ],
  listIntroHtml: '<strong>Наши преимущества для жителей района Тёплый Стан:</strong>',
  listItemsHtml: [
    'Оптимальные цены на ремонт санузлов в типовых панельных домах.',
    'Соблюдение всех норм по гидроизоляции и вентиляции помещений.',
    'Аккуратный демонтаж и оперативный вывоз строительного мусора.',
    'Гарантия на все сантехнические работы и отделку.',
    'Индивидуальный подбор материалов под ваш бюджет.',
  ],
  closingHtml:
    'Ремонт в Тёплом Стане может быть быстрым и доступным. Мы берем на себя все хлопоты — от закупки труб до финальной установки смесителей. Закажите бесплатный выезд замерщика, чтобы узнать точную стоимость вашего ремонта.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли сносить сантехкабину в доме серии П-44?',
  answer:
    'Снос сантехкабины позволяет выиграть несколько сантиметров пространства и увеличить высоту потолка. Мы оцениваем необходимость этого шага индивидуально для каждого клиента.',
},
{
  question: 'Как долго длится ремонт ванной в Тёплом Стане?',
  answer:
    'Стандартный ремонт в панельном доме занимает 12-18 дней, в зависимости от необходимости сноса перегородок и сложности отделки.',
},
{
  question: 'Помогаете ли вы с выбором плитки?',
  answer:
    'Да, наш технолог даст рекомендации по выбору формата и типа плитки, которые лучше всего подойдут для вашего санузла.',
},
{
  question: 'Выполняете ли вы замену стояков?',
  answer:
    'Мы выполняем замену разводки труб внутри квартиры. Замену общих стояков мы рекомендуем согласовывать с управляющей компанией района.',
},
{
  question: 'Нужно ли вносить предоплату за работу?',
  answer:
    'Мы работаем без авансов на услуги. Оплата производится поэтапно за фактически выполненные и принятые вами работы.',
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
  slug: 'remont-sanuzla-teplyy-stan',
  path: '/remont-sanuzla-teplyy-stan/',
  canonicalPath: '/remont-sanuzla-teplyy-stan/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Тёплый Стан | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Тёплый Стан | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-teplyy-stan',
        title: 'Ремонт санузла у станции метро Тёплый Стан',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов у Тплого Стана', href: '/remont-sanuzla-teplyy-stan/', isActive: true }] }),
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

