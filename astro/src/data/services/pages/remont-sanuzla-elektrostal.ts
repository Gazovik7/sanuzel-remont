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
  summaryTitle: 'Ремонт санузлов в Электростали под ключ',
  paragraphsHtml: [
    'Предлагаем качественный ремонт ванных комнат в городе <strong>Электросталь</strong>. Несмотря на удаленность от Москвы, мы обеспечиваем здесь тот же высокий уровень сервиса и соблюдение технологий. Мы работаем во всех районах города: <strong>Центральном</strong>, <strong>Северном</strong>, <strong>Восточном</strong> и <strong>Южном</strong>.',
    'Наши логистические процессы настроены так, чтобы минимизировать транспортные расходы при доставке материалов по Горьковскому шоссе. Также мы активно сотрудничаем с местными базами стройматериалов для оперативного решения текущих задач.',
  ],
  listIntroHtml: '<strong>Особенности ремонта в Электростали с нашей компанией:</strong>',
  listItemsHtml: [
    'Выезд инженера для замера и консультации — бесплатно, даже в отдаленные районы.',
    'Опыт работы со старым жилым фондом ("сталинки" на проспекте Ленина) и новостройками.',
    'Полная комплектация объекта черновыми материалами без участия заказчика.',
    'Профессиональный инструмент и соблюдение чистоты в подъезде и квартире.',
    'Официальный договор с гарантией 2 года на все выполненные работы.',
  ],
  closingHtml:
    'Вам не нужно искать московских мастеров, которые согласятся поехать в Электросталь, или рисковать с местными "шабашниками". Мы уже работаем в вашем городе. Звоните!',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'Берете ли вы доплату за удаленность от МКАД?',
    answer: 'Нет, наши расценки на работы едины для всей Москвы и Московской области, включая Электросталь. Вы платите только за результат, а не за километры.',
  },
  {
    question: 'Работаете ли вы в Ногинске?',
    answer: 'Да, Электросталь и Ногинск для нас — это единый кластер. Мы с радостью возьмем заказ в соседнем городе на тех же условиях.',
  },
  {
    question: 'Где вы покупаете материалы?',
    answer: 'Мы комбинируем доставку редких позиций из Москвы с закупкой общестроительных материалов (смеси, клей, блоки) на крупных базах в Электростали и Ногинске, чтобы сэкономить на доставке.',
  },
  {
    question: 'Можно ли сделать ремонт без отселения?',
    answer: 'Ремонт санузла — это пыльный и шумный процесс, часто связанный с отключением воды. Мы настоятельно рекомендуем, если есть возможность, не проживать в квартире во время активной фазы работ (первые 7-10 дней).',
  },
  {
    question: 'Сколько стоит замена труб в ванной?',
    answer: 'Стоимость зависит от количества точек водоразбора и способа монтажа (коллекторная или тройниковая разводка). Точную сумму назовет инженер после осмотра.',
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
  slug: 'remont-sanuzla-elektrostal',
  path: '/remont-sanuzla-elektrostal/',
  canonicalPath: '/remont-sanuzla-elektrostal/',
  seo: {
    title: 'Ремонт санузла в Электростали под ключ | Цена от мастеров | Ремонт ванной комнаты',
    description:
      'Ремонт санузла в Электростали под ключ | Бесплатный выезд мастера | Гарантия 2 года | Без предоплаты | Лучшие цены на ремонт санузлов ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-elektrostal',
        title: 'Ремонт санузла в Электростали',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Электростали', href: '/remont-sanuzla-elektrostal/', isActive: true }] }),
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
