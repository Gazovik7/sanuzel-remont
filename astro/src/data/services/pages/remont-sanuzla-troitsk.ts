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
  summaryTitle: 'Ремонт санузлов в Троицке: научный подход к качеству',
  paragraphsHtml: [
    'Город <strong>Троицк</strong> — уникальный наукоград в составе Новой Москвы, где ценят профессионализм и точность. Мы предлагаем жителям Троицка качественный ремонт санузлов, основанный на строгом соблюдении технологий и современных инженерных стандартах. Мы работаем во всех микрорайонах города: от исторической части до <strong>микрорайона В</strong> и новых жилых комплексов.',
    'Благодаря удобному доступу по Калужскому шоссе, мы обеспечиваем оперативную доставку материалов и работу высококвалифицированных бригад. Мы понимаем специфику как кирпичных домов "академического" фонда, так и современных монолитных зданий Троицка.',
  ],
  listIntroHtml: '<strong>Наши стандарты ремонта в Троицке:</strong>',
  listItemsHtml: [
    'Бесплатный инженерный замер и составление детальной сметы.',
    'Применение надежных систем разводки труб (Rehau, Stout) и качественной гидроизоляции.',
    'Профессиональная укладка керамогранита и мозаики любой сложности.',
    'Монтаж современных систем инсталляций и душевых зон в строительном исполнении.',
    'Официальная гарантия 2 года на все виды работ по договору.',
  ],
  closingHtml:
    'Сделайте свой санузел в Троицке эталоном комфорта и функциональности. Оставьте заявку на бесплатный замер, и мы подготовим для вас расчет стоимости вашего идеального ремонта.',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'Работаете ли вы в новых ЖК Троицка (например, "Солнечный", "Троицк Сити")?',
    answer: 'Да, мы имеем большой опыт работы в новостройках Троицка и знаем требования местных управляющих компаний к проведению ремонтных работ.',
  },
  {
    question: 'Влияет ли статус "Новой Москвы" на стоимость ваших услуг?',
    answer: 'Нет, наши цены фиксированы для всей территории Москвы и области. Мы предлагаем единый прайс-лист без "географических" наценок.',
  },
  {
    question: 'Можно ли сделать перепланировку санузла в Троицке?',
    answer: 'Да, мы выполняем работы по объединению или разделению санузлов с соблюдением всех строительных норм и правил.',
  },
  {
    question: 'Как решается вопрос с вывозом мусора в Троицке?',
    answer: 'Мы берем на себя организацию вывоза и утилизации строительного мусора, чтобы у вас не возникло проблем с чистотой в подъезде и дворе.',
  },
  {
    question: 'Предоставляете ли вы скидки пенсионерам или научным сотрудникам?',
    answer: 'У нас действуют различные сезонные акции. Пожалуйста, уточните наличие актуальных скидок у нашего специалиста во время замера.',
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
  slug: 'remont-sanuzla-troitsk',
  path: '/remont-sanuzla-troitsk/',
  canonicalPath: '/remont-sanuzla-troitsk/',
  seo: {
    title: 'Ремонт санузла в Троицке под ключ | Цена от мастеров | Ремонт ванной комнаты',
    description:
      'Ремонт санузла в Троицке под ключ | Бесплатный выезд мастера | Гарантия 2 года | Без предоплаты | Лучшие цены на ремонт санузлов ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-troitsk',
        title: 'Ремонт санузла в Троицке',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Троицке', href: '/remont-sanuzla-troitsk/', isActive: true }] }),
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
