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
  summaryTitle: 'Качественный ремонт ванных комнат в Коломне',
  paragraphsHtml: [
    'Предлагаем услуги профессионального ремонта санузлов в одном из старейших городов Подмосковья — <strong>Коломне</strong>. Мы работаем во всех районах города: <strong>Колычево</strong>, <strong>Щурово</strong>, <strong>Старая Коломна</strong> и других. Несмотря на значительное удаление от МКАД, мы придерживаемся строгих столичных стандартов качества.',
    'Наша команда наладила эффективное взаимодействие с местными поставщиками строительных материалов в Коломне, что позволяет избегать дорогой доставки из Москвы. При этом эксклюзивную сантехнику и плитку мы можем привезти под заказ.',
  ],
  listIntroHtml: '<strong>Особенности работы с нами в Коломне:</strong>',
  listItemsHtml: [
    'Бесплатный выезд инженера для замера, даже в отдаленные районы округа.',
    'Опыт работы в историческом жилом фонде (бережное отношение к коммуникациям).',
    'Соблюдение сроков, несмотря на пробки на Новорязанском шоссе.',
    'Работаем официально: договор, гарантия 2 года, акты выполненных работ.',
    'Помощь в выборе материалов, оптимальных по соотношению цена/качество.',
  ],
  closingHtml:
    'Ремонт в Коломне может быть современным и комфортным. Доверьте свою ванную комнату профессионалам, которые ценят вашу историю и комфорт. Звоните!',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'Работаете ли вы в частном секторе Коломны?',
    answer: 'Да, мы выполняем ремонт санузлов в частных домах и коттеджах. У нас есть опыт монтажа автономных систем канализации и водоснабжения внутри дома.',
  },
  {
    question: 'Сколько стоит выезд мастера за Оку (в Щурово)?',
    answer: 'Выезд инженера-сметчика в пределах городского округа Коломна, включая Щурово, осуществляется бесплатно. Мост через Оку для нас не преграда.',
  },
  {
    question: 'Где покупать плитку в Коломне?',
    answer: 'Мы можем порекомендовать несколько проверенных магазинов в городе или организовать доставку из крупных московских шоу-румов, если вам нужен уникальный дизайн.',
  },
  {
    question: 'Как долго сохнет стяжка?',
    answer: 'Обычно пескобетонная стяжка сохнет из расчета 1 см толщины за 1 неделю. Но для санузлов мы часто используем быстротвердеющие наливные полы, по которым можно ходить уже через 4-6 часов, а укладывать плитку через 3-7 дней.',
  },
  {
    question: 'Устанавливаете ли вы инсталляции?',
    answer: 'Да, монтаж инсталляции для подвесного унитаза — стандартная услуга. Мы делаем надежный каркас и обшиваем его влагостойким гипсокартоном под укладку плитки.',
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
  slug: 'remont-sanuzla-kolomna',
  path: '/remont-sanuzla-kolomna/',
  canonicalPath: '/remont-sanuzla-kolomna/',
  seo: {
    title: 'Ремонт санузла в Коломне под ключ | Цена от мастеров | Ремонт ванной комнаты',
    description:
      'Ремонт санузла в Коломне под ключ | Бесплатный выезд мастера | Гарантия 2 года | Без предоплаты | Лучшие цены на ремонт санузлов ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-kolomna',
        title: 'Ремонт санузла в Коломне',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Коломне', href: '/remont-sanuzla-kolomna/', isActive: true }] }),
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
