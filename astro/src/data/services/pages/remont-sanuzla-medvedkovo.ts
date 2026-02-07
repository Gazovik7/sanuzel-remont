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
  summaryTitle: 'Качественный ремонт санузла в Медведково под ключ',
  paragraphsHtml: [
    'Район <strong>Медведково</strong> — это благоустроенный жилой массив на северо-востоке Москвы со сложившейся застройкой различных периодов. Ремонт санузла здесь часто требует профессионального обновления изношенных коммуникаций и создания современного интерьера в квартирах с историей. Мы предлагаем жителям СВАО надежные услуги по реконструкции и отделке ванных комнат.',
    'Наши мастера обладают огромным опытом работы в домах на улице Широкая, Полярная и проезде Шокальского. Мы выполняем бережный демонтаж, грамотную разводку инженерных сетей и безупречную финишную отделку плиткой, превращая даже небольшие санузлы в функциональные и эстетичные пространства.',
  ],
  listIntroHtml: '<strong>Почему ремонт санузла в Медведково заказывают у нас:</strong>',
  listItemsHtml: [
    'Полная замена труб на современные системы Rehau или полипропилен.',
    'Профессиональное выравнивание стен и полов под плитку любой сложности.',
    'Установка современной сантехники, инсталляций и смесителей.',
    'Монтаж практичных натяжных потолков с влагозащищенным освещением.',
    'Соблюдение "закона о тишине" и чистота на каждом этапе работ.',
  ],
  closingHtml:
    'Ремонт санузла в Медведково с нашей командой — это гарантия качества и соблюдения сроков. Мы работаем по прозрачному договору с фиксированной ценой. Закажите бесплатный выезд замерщика для оценки вашего проекта уже сегодня!',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли менять старую электропроводку в ванной?',
  answer:
    'В домах старой постройки мы настоятельно рекомендуем замену проводки на новую медную с установкой УЗО для обеспечения вашей безопасности во влажной среде.',
},
{
  question: 'Как быстро мастер может приехать на замер в Медведково?',
  answer:
    'Наши специалисты работают в СВАО ежедневно, поэтому выезд замерщика в Медведково возможен в день обращения или на следующий день.',
},
{
  question: 'Помогаете ли вы с закупкой плитки и сантехники?',
  answer:
    'Да, мы консультируем по выбору материалов и можем помочь с их приобретением у наших партнеров со скидкой.',
},
{
  question: 'Сколько времени занимает ремонт совмещенного санузла?',
  answer:
    'В среднем комплексный ремонт "под ключ" занимает от 14 до 21 дня в зависимости от объема демонтажных работ.',
},
{
  question: 'Бесплатен ли выезд мастера на замер?',
  answer:
    'Да, выезд нашего технического специалиста для консультации и замера в районе Медведково осуществляется абсолютно бесплатно.',
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
  slug: 'remont-sanuzla-medvedkovo',
  path: '/remont-sanuzla-medvedkovo/',
  canonicalPath: '/remont-sanuzla-medvedkovo/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Медведково | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Медведково | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ 8 (495) 137-52-39',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-medvedkovo',
        title: 'Ремонт санузла у станции метро Медведково',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Медведково', href: '/remont-sanuzla-medvedkovo/', isActive: true }] }),
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

