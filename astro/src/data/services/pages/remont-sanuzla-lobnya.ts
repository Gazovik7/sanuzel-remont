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
  summaryTitle: 'Профессиональный ремонт санузлов в Лобне под ключ',
  paragraphsHtml: [
    'Планируете ремонт ванной комнаты в <strong>Лобне</strong>? Наша компания предлагает услуги экспертного уровня для жителей всех районов города: от <strong>Депо</strong> и <strong>Красной Поляны</strong> до <strong>Катюшек</strong> и микрорайона <strong>Южный</strong>. Мы понимаем логистические особенности города и всегда четко соблюдаем оговоренные сроки выполнения работ.',
    'Наши мастера специализируются на качественной отделке санузлов в домах различных серий, отлично зная нюансы местных инженерных сетей. Мы поможем вам создать стильный и долговечный интерьер, используя только проверенные материалы и современное оборудование.',
  ],
  listIntroHtml: '<strong>Почему ремонт в Лобне заказывают у нас:</strong>',
  listItemsHtml: [
    'Оперативный выезд инженера-сметчика (живем и работаем рядом).',
    'Опыт работы в популярных ЖК города: "Лобня Сити", "Победа", "Катюшки".',
    'Профессиональный монтаж сантехники Rehau и Stout для максимальной надежности.',
    'Чистота и порядок на объекте: регулярный вывоз мусора и влажная уборка.',
    'Фиксированная смета: цена не изменится в процессе ремонта.',
  ],
  closingHtml:
    'Ремонт санузла в Лобне — это инвестиция в ваш комфорт. Мы берем на себя всё: от демонтажа до установки последнего крючка. Запишитесь на бесплатный замер прямо сейчас!',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли устанавливать магистральные фильтры в Лобне?',
  answer:
    'Да, мы настоятельно рекомендуем установку фильтров очистки воды для защиты смесителей и бытовой техники от возможных примесей в водопроводной сети города.',
},
{
  question: 'Как быстро мастер может приехать на замер в Лобню?',
  answer:
    'Обычно мы можем организовать выезд нашего специалиста в Лобню в течение 24 часов после вашего обращения.',
},
{
  question: 'Работаете ли вы с крупноформатным керамогранитом?',
  answer:
    'Да, наши мастера обладают необходимой квалификацией и инструментом для качественной укладки керамогранита любого формата.',
},
{
  question: 'Какую гарантию вы предоставляете на сантехнические работы?',
  answer:
    'На все виды скрытых сантехнических работ мы даем официальную гарантию сроком 2 года по договору.',
},
{
  question: 'Помогаете ли вы с доставкой материалов в Лобню?',
  answer:
    'Да, мы можем полностью взять на себя закупку, доставку и подъем всех необходимых строительных материалов на ваш объект.',
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
  slug: 'remont-sanuzla-lobnya',
  path: '/remont-sanuzla-lobnya/',
  canonicalPath: '/remont-sanuzla-lobnya/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Лобня | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Лобня | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-lobnya',
        title: 'Ремонт санузла у станции метро Лобня',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Лобне', href: '/remont-sanuzla-lobnya/', isActive: true }] }),
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

