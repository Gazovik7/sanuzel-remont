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
  summaryTitle: 'Профессиональный ремонт санузла у метро Речной вокзал',
  paragraphsHtml: [
    'Район <strong>Речного вокзала</strong> — это благоустроенный жилой массив со сложившейся застройкой и высокими требованиями к комфорту. Ремонт санузла здесь часто предполагает обновление инженерных систем и создание современного интерьера в квартирах с историей. Мы предлагаем жителям САО качественные услуги по реконструкции и отделке ванных комнат.',
    'Наши мастера обладают огромным опытом работы в домах на Фестивальной улице, Беломорской и Ленинградском шоссе. Мы выполняем бережный демонтаж, грамотную разводку коммуникаций и безупречную финишную отделку, превращая даже небольшие санузлы в функциональные и эстетичные пространства.',
  ],
  listIntroHtml: '<strong>Преимущества работы с нами на Речном вокзале:</strong>',
  listItemsHtml: [
    'Бесплатный выезд технолога для детального осмотра и замера.',
    'Использование долговечных материалов, устойчивых к влажности.',
    'Профессиональная укладка плитки и керамогранита любой сложности.',
    'Монтаж современной сантехники и систем защиты от протечек.',
    'Гарантия 24 месяца на все виды сантехнических и отделочных работ.',
  ],
  closingHtml:
    'Ремонт санузла на Речном вокзале с нашей командой — это гарантия спокойствия и отличного результата. Мы работаем прозрачно, соблюдаем сроки и фиксируем цену в договоре. Закажите бесплатную консультацию и замер уже сегодня!',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли менять старую проводку в ванной?',
  answer:
    'В домах старой постройки района Речной вокзал мы настоятельно рекомендуем замену электропроводки на новую, медную, с установкой УЗО для обеспечения вашей безопасности.',
},
{
  question: 'Как долго длится ремонт ванной и туалета "под ключ"?',
  answer:
    'В среднем комплексный ремонт занимает от 14 до 20 дней, в зависимости от состояния стен и сложности разводки труб.',
},
{
  question: 'Помогаете ли вы с закупкой черновых материалов?',
  answer:
    'Да, мы полностью берем на себя подбор, закупку и доставку качественных черновых материалов, предоставляя отчетные документы.',
},
{
  question: 'Можно ли заменить ванну на душевой уголок?',
  answer:
    'Да, это частое решение для оптимизации пространства. Мы поможем выбрать подходящую модель и выполним качественный монтаж сливной системы.',
},
{
  question: 'Вывозите ли вы строительный мусор после демонтажа?',
  answer:
    'Конечно, сбор и вывоз строительного мусора в специализированные контейнеры входит в наш стандартный пакет услуг.',
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
  slug: 'remont-sanuzla-rechnoy-vokzal',
  path: '/remont-sanuzla-rechnoy-vokzal/',
  canonicalPath: '/remont-sanuzla-rechnoy-vokzal/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Речной вокзал | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Речной вокзал | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-rechnoy-vokzal',
        title: 'Ремонт санузла у станции метро Речной вокзал',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов у Речного Вокзала', href: '/remont-sanuzla-rechnoy-vokzal/', isActive: true }] }),
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

