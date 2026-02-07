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
  summaryTitle: 'Профессиональный ремонт санузла в Беляево',
  paragraphsHtml: [
    'Район <strong>Беляево</strong> — это признанный академический и жилой центр на юго-западе Москвы. Ремонт санузла здесь часто предполагает вдумчивый подход к обновлению коммуникаций в панельных домах и создание современного интерьера в квартирах со сложившейся историей. Мы предлагаем жителям Коньково и Беляево качественные услуги по реконструкции ванных комнат.',
    'Наши мастера имеют богатый опыт работы в домах на улице Миклухо-Маклая, Профсоюзной и Академика Волгина. Мы выполняем капитальный ремонт санузлов под ключ, обеспечивая надежность инженерных узлов и безупречное качество финишной отделки плиткой, чтобы ваша ванная комната радовала вас долгие годы.',
  ],
  listIntroHtml: '<strong>Наши компетенции при ремонте санузлов в Беляево:</strong>',
  listItemsHtml: [
    'Капитальная замена труб с использованием долговечных материалов Rehau.',
    'Профессиональное выравнивание поверхностей и гидроизоляция помещений.',
    'Качественная укладка керамической плитки и керамогранита.',
    'Монтаж современной сантехники, инсталляций и смесителей любой сложности.',
    'Официальная гарантия 2 года и работа строго по договору.',
  ],
  closingHtml:
    'Ремонт в академическом районе требует профессионализма. Доверьте свою ванную комнату экспертам. Закажите бесплатный выезд технолога в Беляево для оценки состояния помещения и расчета точной сметы.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли менять полотенцесушитель при ремонте в кирпичном доме?',
  answer:
    'В домах старого фонда района Беляево мы рекомендуем замену водяного полотенцесушителя на новый или установку электрической модели для повышения надежности системы.',
},
{
  question: 'Как быстро вы можете начать ремонт после замера?',
  answer:
    'Обычно выход бригады на объект в Беляево возможен в течение 3-5 рабочих дней после подписания договора и закупки материалов.',
},
{
  question: 'Помогаете ли вы с закупкой черновых материалов?',
  answer:
    'Да, мы полностью берем на себя подбор, закупку и доставку качественных черновых материалов, предоставляя всю необходимую отчетность.',
},
{
  question: 'Сколько времени занимает ремонт стандартной ванной?',
  answer:
    'В среднем ремонт "под ключ" в типовом доме Беляево занимает от 14 до 20 дней в зависимости от объема работ.',
},
{
  question: 'Бесплатен ли замер в районе Беляево?',
  answer:
    'Да, выезд нашего технического специалиста для осмотра помещения и составления сметы в Беляево осуществляется бесплатно.',
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
  slug: 'remont-sanuzla-belyaevo',
  path: '/remont-sanuzla-belyaevo/',
  canonicalPath: '/remont-sanuzla-belyaevo/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Беляево | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Беляево | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-belyaevo',
        title: 'Ремонт санузла у станции метро Беляево',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Беляево', href: '/remont-sanuzla-belyaevo/', isActive: true }] }),
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

