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
  summaryTitle: 'Ремонт ванной комнаты в хрущёвке: особенности, этапы и практичные решения',
  paragraphsHtml: [
    'Профессиональный <strong>ремонт ванной комнаты в хрущёвке</strong> требует особого подхода из-за небольшой площади, старых коммуникаций и типовой планировки. Важно не просто обновить отделку, а устранить износ инженерных систем и сделать помещение максимально удобным.',
    'Мы выполняем ремонт ванных комнат в хрущёвках под ключ: меняем трубы и электрику, подбираем компактную сантехнику, выполняем гидроизоляцию и отделку с учетом ограниченного пространства. Все решения заранее согласуются, чтобы ремонт прошёл без лишних рисков.',
  ],
  listIntroHtml: '<strong>Что обычно включает ремонт ванной комнаты в хрущёвке:</strong>',
  listItemsHtml: [
    'Полный демонтаж старой отделки и сантехники с подготовкой помещения.',
    'Замена изношенных труб водоснабжения и канализации.',
    'Обновление электропроводки с учетом современных требований безопасности.',
    'Гидроизоляция и выравнивание стен и пола под отделку.',
    'Чистовая отделка и установка компактной сантехники и мебели.',
  ],
  closingHtml:
    'Стоимость ремонта ванной комнаты в хрущёвке зависит от состояния помещения, объема работ и выбранных материалов. Для точного расчета достаточно замеров или фото. После согласования фиксируем состав работ, сроки и стоимость в договоре.',
};


const PAGE_FAQ: FaqItem[] = [{
  question: 'В чем особенности ремонта ванной комнаты в хрущёвке?',
  answer:
    'Основные особенности — небольшая площадь, изношенные коммуникации и ограниченные возможности перепланировки. Поэтому важно заранее продумать планировку и заменить инженерные системы.',
},
{
  question: 'Можно ли увеличить пространство ванной в хрущёвке?',
  answer:
    'Частично увеличить пространство можно за счет объединения с туалетом или использования компактной сантехники и душевых вместо ванны. Все изменения должны соответствовать нормативам.',
},
{
  question: 'Нужно ли менять трубы при ремонте в хрущёвке?',
  answer:
    'Да, в большинстве случаев замена труб обязательна, так как старые коммуникации имеют высокий износ и могут привести к протечкам после ремонта.',
},
{
  question: 'Сколько стоит ремонт ванной комнаты в хрущёвке?',
  answer:
    'Стоимость ремонта ванной в хрущёвке зависит от объема демонтажных работ, замены коммуникаций и выбранных материалов. Точная цена определяется после осмотра помещения или анализа фото.',
},
{
  question: 'Сколько времени занимает ремонт ванной в хрущёвке?',
  answer:
    'В среднем ремонт ванной комнаты в хрущёвке занимает от 3 до 5 недель. Сроки зависят от состояния помещения и сложности работ.',
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
  slug: 'remont-vannoj-komnaty-v-hrushchevke',
  path: '/remont-vannoj-komnaty-v-hrushchevke/',
  canonicalPath: '/remont-vannoj-komnaty-v-hrushchevke/',
  seo: {
    title: 'Ремонт ванной комнаты в хрущевке в Москве | Цена на ремонт санузла под ключ в пятиэтажке',
    description:'Ремонт ванной комнаты в хрущевке | Бесплатный выезд сантехника | Гарантия до 3 лет | Быстрый ремонт от 1 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-vannoj-komnaty-v-hrushchevke',
        title: 'Ремонт ванной комнаты в хрущевке под ключ',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов', href: '/remont-vannoj-komnaty-v-hrushchevke/', isActive: true }] }),
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

