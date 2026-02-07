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
  summaryTitle: 'Особенности ремонта ванной в панельном доме',
  paragraphsHtml: [
    'Ремонт ванной комнаты в <strong>панельном доме</strong> имеет свою специфику, связанную с наличием типовой сантехкабины, ограниченным пространством и сложностью штробления армированных стен. Мы обладаем огромным опытом работы с сериями П-44, П-44Т, И-155, КОПЭ и другими популярными панельками.',
    'При выполнении ремонта "под ключ" мы уделяем особое внимание качественной гидроизоляции и рациональному использованию каждого сантиметра. Наши специалисты помогут определиться, стоит ли демонтировать сантехкабину для увеличения площади или достаточно грамотной перепланировки и замены коммуникаций в существующих габаритах.',
  ],
  listIntroHtml: '<strong>Ключевые этапы ремонта в панельке:</strong>',
  listItemsHtml: [
    'Профессиональный демонтаж старой плитки, краски и изношенной сантехники.',
    'Замена стояков и разводка новых труб (Rehau, полипропилен) в стесненных условиях.',
    'Усиление и выравнивание стен с учетом особенностей бетонных панелей.',
    'Устройство скрытых люков для доступа к счетчикам и коммуникациям.',
    'Монтаж современной сантехники, бойлеров и инсталляций в штатные ниши.',
  ],
  closingHtml:
    'Ремонт в панельном доме может быть быстрым и качественным. Мы фиксируем итоговую стоимость в договоре и гарантируем соблюдение "закона о тишине", что особенно важно в многоквартирных домах. Закажите бесплатный замер, чтобы узнать возможности трансформации вашей ванной!',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли сносить сантехкабину в панельном доме?',
  answer:
    'Демонтаж сантехкабины позволяет выиграть от 5 до 15 см пространства по каждой стене и увеличить высоту потолка. Однако это увеличивает стоимость и сроки. Мы оцениваем целесообразность сноса индивидуально для каждого объекта.',
},
{
  question: 'Можно ли штробить стены в ванной панельного дома?',
  answer:
    'В панельных домах запрещено горизонтальное штробление несущих стен и глубокое вертикальное штробление, повреждающее арматуру. Мы используем накладной монтаж в коробах или фальшстены, чтобы не нарушать конструктив дома.',
},
{
  question: 'Как долго длится ремонт ванной в панельке?',
  answer:
    'Стандартный ремонт без сноса кабины занимает 12-18 дней. Со сносом кабины и возведением новых перегородок — от 20 до 30 дней.',
},
{
  question: 'Сколько стоит базовый ремонт ванной в типовом панельном доме?',
  answer:
    'Цена зависит от серии дома и площади. Например, ремонт ванной в доме серии П-44 "под ключ" начинается от 85 000 рублей за работу. Точная смета составляется после замера.',
},
{
  question: 'Делаете ли вы совмещение ванны и туалета в панельных домах?',
  answer:
    'Да, это одно из самых популярных решений. Мы помогаем грамотно организовать пространство, чтобы в одном помещении поместились и стиральная машина, и удобная сантехника.',
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
  slug: 'remont-vannoy-v-panelnom-dome',
  path: '/remont-vannoy-v-panelnom-dome/',
  canonicalPath: '/remont-vannoy-v-panelnom-dome/',
  seo: {
    title: 'Ремонт ванной в панельном доме в Москве | Ремонт санузла в панельке цена под ключ',
    description:    'Ремонт ванной в панельном доме | Бесплатный выезд сантехника | Гарантия до 3 лет | Быстрый ремонт от 1 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-vannoy-v-panelnom-dome',
        title: 'Ремонт ванной в панельном доме под ключ',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в панельных домах', href: '/remont-vannoy-v-panelnom-dome/', isActive: true }] }),
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

