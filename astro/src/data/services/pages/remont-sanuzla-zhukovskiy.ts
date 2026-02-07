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
  summaryTitle: 'Профессиональный ремонт санузлов в Жуковском',
  paragraphsHtml: [
    'Город <strong>Жуковский</strong> — наукоград, где ценят интеллект и качество. Мы предлагаем жителям города ремонт санузлов, основанный на инженерной точности и современных дизайнерских решениях. Наша команда работает во всех частях города: от сложившихся кварталов в центре до новых жилых комплексов на <strong>улице Гудкова</strong> и <strong>Баженова</strong>.',
    'Благодаря удобному доступу по Новорязанскому шоссе, мы обеспечиваем бесперебойное снабжение объектов и четкое соблюдение графика работ. Мы понимаем специфику домов "авиационного" фонда и современных монолитных зданий Жуковского, гарантируя надежность каждой детали.',
  ],
  listIntroHtml: '<strong>Наши преимущества при работе в Жуковском:</strong>',
  listItemsHtml: [
    'Бесплатный выезд инженера для консультации и точного замера.',
    'Профессиональное проектирование и монтаж систем водоснабжения и канализации.',
    'Безупречная укладка плитки любого формата, включая крупноформатный керамогранит.',
    'Монтаж систем защиты от протечек и скрытых ревизионных люков.',
    'Фиксированная стоимость работ и гарантия 2 года по договору.',
  ],
  closingHtml:
    'Сделайте свою ванную в Жуковском образцом комфорта и стиля. Оставьте заявку на бесплатный замер, и мы подготовим для вас оптимальный расчет стоимости вашего проекта.',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'Работаете ли вы в соседнем Раменском?',
    answer: 'Да, Раменское и Жуковский — наша постоянная зона работы. Мы обслуживаем оба города на одинаково выгодных условиях.',
  },
  {
    question: 'Можно ли заказать ремонт санузла в старом доме на ул. Чкалова?',
    answer: 'Да, мы имеем большой опыт работы в домах старого фонда Жуковского и умеем проводить качественный демонтаж и замену коммуникаций.',
  },
  {
    question: 'Помогаете ли вы с подбором сантехники в Жуковском?',
    answer: 'Да, мы проконсультируем вас по выбору моделей и брендов, а также подскажем, где их можно выгодно приобрести с доставкой в город.',
  },
  {
    question: 'Сколько стоит выезд мастера на замер в Жуковский?',
    answer: 'Выезд нашего специалиста для осмотра и составления сметы в Жуковском осуществляется совершенно бесплатно.',
  },
  {
    question: 'Какие материалы вы используете для разводки воды?',
    answer: 'Мы рекомендуем и используем надежные системы из сшитого полиэтилена Rehau или качественного полипропилена.',
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
  slug: 'remont-sanuzla-zhukovskiy',
  path: '/remont-sanuzla-zhukovskiy/',
  canonicalPath: '/remont-sanuzla-zhukovskiy/',
  seo: {
    title: 'Ремонт санузла в Жуковском под ключ | Цена от мастеров | Ремонт ванной комнаты',
    description:
      'Ремонт санузла в Жуковском под ключ | Бесплатный выезд мастера | Гарантия 2 года | Без предоплаты | Лучшие цены на ремонт санузлов ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-zhukovskiy',
        title: 'Ремонт санузла в Жуковском',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Жуковском', href: '/remont-sanuzla-zhukovskiy/', isActive: true }] }),
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
