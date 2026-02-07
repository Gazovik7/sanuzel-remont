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
  summaryTitle: 'Космическое качество ремонта санузлов в Королёве',
  paragraphsHtml: [
    'Выполняем ремонт ванных комнат в наукограде <strong>Королёв</strong>. Мы гордимся тем, что соответствуем высоким требованиям жителей космической столицы. Работаем во всех микрорайонах: <strong>Юбилейный</strong>, <strong>Текстильщик</strong>, <strong>Костино</strong> и центральной части города.',
    'Наши мастера учитывают особенности застройки Королёва: от "сталинок" на улице Циолковского до современных ЖК "Золотые ворота" и "Ривер Парк". Логистика по Ярославскому шоссе позволяет оперативно доставлять материалы.',
  ],
  listIntroHtml: '<strong>Наши стандарты работы в Королёве:</strong>',
  listItemsHtml: [
    'Бесплатный выезд инженера-сметчика в удобное для вас время.',
    'Строгое соблюдение геометрии помещений (углы 90 градусов под мебель).',
    'Использование профессионального оборудования для пылеудаления.',
    'Помощь в согласовании перепланировок (объединение санузла).',
    'Фиксированные цены и поэтапная оплата работ.',
  ],
  closingHtml:
    'Ремонт санузла в Королёве — это наша специализация. Мы сделаем вашу ванную комнату современной, удобной и безопасной. Оставьте заявку на замер!',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'Выезжаете ли вы в Валентиновку и Загорянку?',
    answer: 'Да, мы работаем не только в многоквартирных домах, но и в частном секторе в черте Королёва, включая Валентиновку, Загорянку и другие дачные поселки.',
  },
  {
    question: 'Как решается вопрос с отключением воды в Юбилейном?',
    answer: 'В микрорайоне Юбилейный свои управляющие компании. Мы знаем порядок подачи заявок и поможем вам оперативно согласовать отключение стояков ХВС и ГВС.',
  },
  {
    question: 'Сколько стоит установка ванной с гидромассажем?',
    answer: 'Монтаж джакузи требует особых навыков (подключение электрики, заземление, усиление каркаса). Стоимость выше стандартной ванны и рассчитывается индивидуально.',
  },
  {
    question: 'Можно ли сделать люк-невидимку под плитку?',
    answer: 'Да, мы устанавливаем ревизионные люки скрытого монтажа под плитку любого размера. Это обеспечивает удобный доступ к счетчикам и кранам, не нарушая дизайн.',
  },
  {
    question: 'Работаете ли вы с крупноформатным керамогранитом?',
    answer: 'Да, у нас есть оборудование для резки и укладки широкоформатного керамогранита (120х60 и более). Это тренд последних лет, и мы умеем с ним работать.',
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
  slug: 'remont-sanuzla-korolyov',
  path: '/remont-sanuzla-korolyov/',
  canonicalPath: '/remont-sanuzla-korolyov/',
  seo: {
    title: 'Ремонт санузла в Королёве под ключ | Цена от мастеров | Ремонт ванной комнаты',
    description:
      'Ремонт санузла в Королёве под ключ | Бесплатный выезд мастера | Гарантия 2 года | Без предоплаты | Лучшие цены на ремонт санузлов ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-korolyov',
        title: 'Ремонт санузла в Королёве',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Королёве', href: '/remont-sanuzla-korolyov/', isActive: true }] }),
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
