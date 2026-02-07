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
  summaryTitle: 'Качественный ремонт санузла в Бибирево',
  paragraphsHtml: [
    'Район <strong>Бибирево</strong> — это крупный жилой массив на севере Москвы с преобладанием типовой панельной застройки. Ремонт санузла в таких домах требует профессионального подхода к использованию пространства и надежной герметизации всех узлов. Мы предлагаем жителям СВАО услуги по созданию функциональных и современных ванных комнат, которые сделают вашу жизнь комфортнее.',
    'Наши мастера имеют большой опыт работы в домах на улице Плещеева, Корнейчука и Костромской. Мы знаем все нюансы работы с инженерными сетями в панельках популярных серий и предлагаем решения, которые позволят вам забыть о ремонте на долгие годы, обеспечив безупречную чистовую отделку и надежность коммуникаций.',
  ],
  listIntroHtml: '<strong>Что мы предлагаем жителям района Бибирево:</strong>',
  listItemsHtml: [
    'Полная замена труб водоснабжения и канализации на современные аналоги.',
    'Демонтаж старой отделки и сантехкабин с последующим вывозом мусора.',
    'Профессиональное выравнивание стен и полов под укладку плитки.',
    'Установка и подключение инсталляций, ванн и душевых кабин.',
    'Монтаж натяжных потолков с влагозащищенным освещением.',
  ],
  closingHtml:
    'Ремонт санузла в Бибирево с нашей бригадой — это отсутствие лишних хлопот и превосходный результат. Мы работаем по договору с фиксированной ценой и гарантией 2 года. Закажите бесплатный выезд замерщика прямо сейчас!',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли менять электропроводку в ванной при ремонте в Бибирево?',
  answer:
    'В большинстве домов района старая проводка не рассчитана на современные нагрузки. Мы настоятельно рекомендуем замену на новую медную с установкой УЗО.',
},
{
  question: 'Как долго длится ремонт ванной и туалета "под ключ"?',
  answer:
    'В среднем капитальный ремонт в типовом доме Бибирево занимает от 12 до 18 рабочих дней.',
},
{
  question: 'Помогаете ли вы с закупкой черновых материалов?',
  answer:
    'Да, мы полностью берем на себя подбор, закупку и доставку качественных черновых материалов, предоставляя все необходимые чеки.',
},
{
  question: 'Выполняете ли вы монтаж душевых трапов?',
  answer:
    'Да, мы выполняем монтаж современных душевых зон с трапом в пол, обеспечивая безупречную гидроизоляцию и правильный уклон слива.',
},
{
  question: 'Бесплатен ли выезд мастера на замер в Бибирево?',
  answer:
    'Да, выезд нашего технического специалиста для осмотра помещения и составления сметы в Бибирево осуществляется совершенно бесплатно.',
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
  slug: 'remont-sanuzla-bibirevo',
  path: '/remont-sanuzla-bibirevo/',
  canonicalPath: '/remont-sanuzla-bibirevo/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Бибирево | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Бибирево | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-bibirevo',
        title: 'Ремонт санузла у станции метро Бибирево',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Бибирево', href: '/remont-sanuzla-bibirevo/', isActive: true }] }),
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

