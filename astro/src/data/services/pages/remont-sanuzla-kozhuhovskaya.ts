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
  summaryTitle: 'Качественный ремонт санузла у метро Кожуховская',
  paragraphsHtml: [
    'Район метро <strong>Кожуховская</strong> характеризуется сложившейся застройкой с преобладанием кирпичных и панельных домов различных периодов. Ремонт санузла здесь часто требует профессионального подхода к замене изношенных коммуникаций и грамотного выравнивания стен в условиях ограниченного пространства. Мы предлагаем жителям Южнопортового района надежные решения по обновлению ванных комнат.',
    'Наши мастера имеют большой опыт работы в домах на улице Трофимова, Петра Романова и Южнопортовой. Мы выполняем капитальный ремонт санузлов под ключ, обеспечивая высокую функциональность и эстетичный вид даже в самых компактных помещениях. Мы используем только качественные материалы, устойчивые к повышенной влажности, что гарантирует долговечность отделки.',
  ],
  listIntroHtml: '<strong>Почему жители Кожуховской выбирают нас:</strong>',
  listItemsHtml: [
    'Бесплатный выезд технолога для замера и составления сметы.',
    'Полная замена старых труб на современные системы Rehau или полипропилен.',
    'Профессиональная укладка плитки и керамогранита с гарантией.',
    'Монтаж современной сантехники, инсталляций и душевых кабин.',
    'Соблюдение сроков и фиксированная стоимость работ в договоре.',
  ],
  closingHtml:
    'Ремонт санузла на Кожуховской с нашей командой — это отсутствие хлопот и превосходный результат. Мы берем на себя все этапы: от демонтажа до финальной уборки. Закажите консультацию и бесплатный замер вашего санузла уже сегодня.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли менять проводку в санузле в старом доме?',
  answer:
    'В домах старой постройки у Кожуховской мы настоятельно рекомендуем замену алюминиевой проводки на медную с установкой влагозащищенных розеток для вашей безопасности.',
},
{
  question: 'Как быстро вы можете приехать на замер в Южнопортовый район?',
  answer:
    'Наши специалисты работают по всему ЮВАО. Обычно мастер готов приехать для замера в течение 24 часов после вашего обращения.',
},
{
  question: 'Сколько времени занимает ремонт стандартной ванной комнаты?',
  answer:
    'В среднем ремонт "под ключ" занимает от 14 до 20 дней в зависимости от объема демонтажных работ и состояния стен.',
},
{
  question: 'Помогаете ли вы с закупкой черновых материалов?',
  answer:
    'Да, мы полностью берем на себя подбор, закупку и доставку качественных черновых материалов, предоставляя все отчетные документы.',
},
{
  question: 'Даете ли вы гарантию на выполненные работы?',
  answer:
    'Да, мы предоставляем официальную гарантию по договору сроком до 2 лет на все виды выполненных нами работ.',
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
  slug: 'remont-sanuzla-kozhuhovskaya',
  path: '/remont-sanuzla-kozhuhovskaya/',
  canonicalPath: '/remont-sanuzla-kozhuhovskaya/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Кожуховская | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Кожуховская | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-kozhuhovskaya',
        title: 'Ремонт санузла у станции метро Кожуховская',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов у Кожуховской', href: '/remont-sanuzla-kozhuhovskaya/', isActive: true }] }),
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

