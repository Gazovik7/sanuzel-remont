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
  summaryTitle: 'Ремонт санузлов в Раменском под ключ',
  paragraphsHtml: [
    'Город <strong>Раменское</strong> — уютный и зеленый город, где мы с удовольствием помогаем жителям создавать комфорт в их квартирах. Мы работаем во всех районах: <strong>Холодово</strong>, <strong>Залинейном</strong>, в центре у озера и в новых микрорайонах на <strong>Северном шоссе</strong>. Наши мастера учитывают особенности местной воды (повышенное содержание железа) при монтаже систем фильтрации.',
    'Мы оперативно доставляем материалы по Новорязанскому и Егорьевскому шоссе. Также активно сотрудничаем с местными поставщиками на рынках "Радуга" и других, чтобы ускорить процесс ремонта.',
  ],
  listIntroHtml: '<strong>Особенности работы в Раменском:</strong>',
  listItemsHtml: [
    'Бесплатный замер в черте города и ближайших поселках (Кратово, Ильинский).',
    'Установка магистральных фильтров для очистки жесткой и железистой воды.',
    'Опыт работы в домах улучшенной планировки и современных ЖК.',
    'Аккуратный демонтаж старой отделки с минимальным количеством пыли.',
    'Гарантия 2 года и постгарантийное обслуживание.',
  ],
  closingHtml:
    'Ремонт санузла в Раменском — это наша работа, которую мы делаем на совесть. Позвоните нам, и мы бесплатно рассчитаем стоимость вашего ремонта.',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'Выезжаете ли вы в Жуковский?',
    answer: 'Да, Раменское и Жуковский для нас — единая рабочая зона. Мы выезжаем на замеры в Жуковский бесплатно.',
  },
  {
    question: 'Что делать с плохой водой в Раменском?',
    answer: 'Мы настоятельно рекомендуем установку фильтров грубой и тонкой очистки (например, Honeywell или Гейзер Тайфун) на входе в квартиру, чтобы защитить дорогую сантехнику.',
  },
  {
    question: 'Работаете ли вы в новостройках на Северном шоссе?',
    answer: 'Да, мы сделали уже много ремонтов в новых микрорайонах Раменского. Знаем особенности планировок и требования местных УК.',
  },
  {
    question: 'Сколько стоит установка инсталляции?',
    answer: 'Цена зависит от сложности монтажа короба и типа унитаза. Стандартная установка инсталляции с обшивкой ГКЛ и укладкой плитки входит в наш прайс-лист.',
  },
  {
    question: 'Можно ли сделать ремонт без отселения жильцов?',
    answer: 'Если санузел раздельный, это возможно, но будет дискомфортно (пыль, шум, временные отключения воды). Если совмещенный — мы рекомендуем найти временное жилье на 5-7 дней.',
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
  slug: 'remont-sanuzla-ramenskoye',
  path: '/remont-sanuzla-ramenskoye/',
  canonicalPath: '/remont-sanuzla-ramenskoye/',
  seo: {
    title: 'Ремонт санузла в Раменском под ключ | Цена от мастеров | Ремонт ванной комнаты',
    description:
      'Ремонт санузла в Раменском под ключ | Бесплатный выезд мастера | Гарантия 2 года | Без предоплаты | Лучшие цены на ремонт санузлов ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-ramenskoye',
        title: 'Ремонт санузла в Раменском',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Раменском', href: '/remont-sanuzla-ramenskoye/', isActive: true }] }),
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
