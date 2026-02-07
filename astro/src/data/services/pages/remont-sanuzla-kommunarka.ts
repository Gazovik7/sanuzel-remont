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
  summaryTitle: 'Профессиональный ремонт санузла в Коммунарке',
  paragraphsHtml: [
    'Район <strong>Коммунарка</strong> — это сердце Новой Москвы, где активно создается современная городская среда. Ремонт санузла в этом районе требует использования новейших технологий и материалов, соответствующих высокому классу новых жилых комплексов. Мы предлагаем жителям Коммунарки профессиональный сервис по созданию идеальных ванных комнат, сочетающих эстетику и безупречную инженерию.',
    'Наши мастера специализируются на работе в новостройках Коммунарки, выполняя полный спектр работ: от первичной разводки труб и электрики до высококачественной укладки крупноформатного керамогранита. Мы применяем решения, которые учитывают специфику новых домов, обеспечивая надежность и долговечность каждого элемента вашего санузла.',
  ],
  listIntroHtml: '<strong>Что мы предлагаем владельцам квартир в Коммунарке:</strong>',
  listItemsHtml: [
    'Проектирование и монтаж инженерных систем (Rehau, Tece) с защитой от протечек.',
    'Идеальная укладка любого типа плитки и керамогранита.',
    'Монтаж стильных душевых зон в строительном исполнении и инсталляций.',
    'Профессиональная гидроизоляция зон прямого попадания воды.',
    'Соблюдение всех строительных норм и помощь в выборе материалов.',
  ],
  closingHtml:
    'Ремонт санузла в Коммунарке с нашей командой — это гарантия современного и долговечного результата. Мы работаем по прозрачному договору с фиксированной ценой. Закажите бесплатный выезд инженера для замера и консультации уже сегодня.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужна ли гидроизоляция в ванной в новостройке Коммунарки?',
  answer:
    'Да, качественная гидроизоляция обязательна для защиты конструкции дома и предотвращения протечек к соседям. Мы выполняем её согласно всем актуальным стандартам.',
},
{
  question: 'Как быстро вы можете выйти на объект в Новой Москве?',
  answer:
    'Обычно мы готовы начать работы в течение 3-5 рабочих дней после подписания договора и закупки материалов.',
},
{
  question: 'Работаете ли вы с дизайн-проектами?',
  answer:
    'Да, мы имеем большой опыт реализации сложных дизайнерских решений, в точности соблюдая все указанные параметры и визуальные требования.',
},
{
  question: 'Какую гарантию вы предоставляете на работы?',
  answer:
    'На все виды сантехнических и отделочных работ мы даем официальную гарантию сроком 2 года.',
},
{
  question: 'Бесплатен ли выезд мастера на замер в Коммунарку?',
  answer:
    'Да, выезд нашего технического специалиста для осмотра и консультации в районе Коммунарка осуществляется бесплатно.',
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
  slug: 'remont-sanuzla-kommunarka',
  path: '/remont-sanuzla-kommunarka/',
  canonicalPath: '/remont-sanuzla-kommunarka/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Коммунарка | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Коммунарка | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-kommunarka',
        title: 'Ремонт санузла у станции метро Коммунарка',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Коммунарке', href: '/remont-sanuzla-kommunarka/', isActive: true }] }),
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

