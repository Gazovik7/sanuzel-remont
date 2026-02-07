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
  summaryTitle: 'Профессиональный ремонт ванных комнат в Лыткарино',
  paragraphsHtml: [
    'Жители <strong>Лыткарино</strong> часто сталкиваются со сложностями при поиске квалифицированных мастеров, готовых работать в городе. Мы предлагаем профессиональный ремонт санузлов под ключ для всех районов города: от <strong>улицы Степана Степанова</strong> и <strong>Квартала 3А</strong> до домов у леса и карьера. Наша команда обеспечивает столичный уровень отделки прямо в вашем городе.',
    'Мы хорошо знакомы с жилым фондом Лыткарино — от уютных сталинок и хрущевок до современных ЖК "Лыткарино Хит" и "Гармония". Мы берем на себя все заботы по логистике, доставке материалов по Новорязанскому шоссе и качественному исполнению каждого этапа работ.',
  ],
  listIntroHtml: '<strong>Почему ремонт в Лыткарино стоит доверить нам:</strong>',
  listItemsHtml: [
    'Бесплатный выезд сметчика в Лыткарино в удобное для вас время.',
    'Опыт работы с газовыми колонками (часто встречаются в старом фонде города).',
    'Профессиональный демонтаж старой сантехкабины для увеличения площади.',
    'Использование только сертифицированных материалов, устойчивых к влаге.',
    'Чистота на объекте и вывоз строительного мусора собственными силами.',
  ],
  closingHtml:
    'Ремонт санузла в Лыткарино может быть быстрым и безболезненным. Позвоните нам, и мы подготовим для вас индивидуальное предложение с учетом всех особенностей вашей квартиры.',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'Вы работаете в Лыткарино постоянно или выезжаете из Москвы?',
    answer: 'У нас есть мобильные бригады, которые специализируются на юго-восточном направлении, включая Лыткарино. Это позволяет нам быстро реагировать на заявки и не затягивать сроки.',
  },
  {
    question: 'Как быть с доставкой материалов в Лыткарино?',
    answer: 'Мы сами организуем закупку и доставку черновых материалов со складов. Вам не нужно переживать о логистике по Новорязанскому шоссе.',
  },
  {
    question: 'Сможете ли вы заменить старые трубы в хрущевке?',
    answer: 'Да, полная замена старых чугунных труб на современный полипропилен или сшитый полиэтилен — одна из наших базовых услуг.',
  },
  {
    question: 'Делаете ли вы ремонт в совмещенных санузлах?',
    answer: 'Конечно. Мы поможем грамотно расставить сантехнику, чтобы в маленьком помещении нашлось место и для стиральной машины, и для полноценной ванны.',
  },
  {
    question: 'Какую плитку лучше выбрать для небольшого санузла в Лыткарино?',
    answer: 'Наши мастера посоветуют оптимальные варианты плитки (светлые тона, средний формат), которые визуально расширят пространство.',
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
  slug: 'remont-sanuzla-lytkarino',
  path: '/remont-sanuzla-lytkarino/',
  canonicalPath: '/remont-sanuzla-lytkarino/',
  seo: {
    title: 'Ремонт санузла в Лыткарино под ключ | Цена от мастеров | Ремонт ванной комнаты',
    description:
      'Ремонт санузла в Лыткарино под ключ | Бесплатный выезд мастера | Гарантия 2 года | Без предоплаты | Лучшие цены на ремонт санузлов ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-lytkarino',
        title: 'Ремонт санузла в Лыткарино',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Лыткарино', href: '/remont-sanuzla-lytkarino/', isActive: true }] }),
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
