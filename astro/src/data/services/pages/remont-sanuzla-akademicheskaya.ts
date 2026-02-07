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
  summaryTitle: 'Профессиональный ремонт санузла у метро Академическая',
  paragraphsHtml: [
    'Жители района метро <strong>Академическая</strong> часто сталкиваются с необходимостью обновления санузлов как в домах старого фонда, так и в современных жилых комплексах. Мы предлагаем комплексный подход к ремонту, учитывая особенности планировок и состояние инженерных сетей в данном районе.',
    'Наши мастера оперативно выезжают на замер к станции Академическая, проводят детальный осмотр и составляют прозрачную смету. Мы берем на себя все хлопоты: от закупки качественных черновых материалов до финишной установки дорогостоящей сантехники, обеспечивая высокое качество исполнения на каждом этапе.',
  ],
  listIntroHtml: '<strong>Преимущества заказа ремонта у нас для жителей Академической:</strong>',
  listItemsHtml: [
    'Бесплатный выезд технолога для замера и консультации в день обращения.',
    'Работа строго по договору с фиксированной стоимостью и сроками.',
    'Опытные мастера-славяне со стажем работы более 7 лет.',
    'Использование проверенных материалов, устойчивых к влажной среде.',
    'Полная уборка и вывоз строительного мусора после завершения работ.',
  ],
  closingHtml:
    'Чтобы узнать точную стоимость ремонта вашего санузла на Академической, достаточно прислать фото помещения или заказать бесплатный выезд замерщика. Мы гарантируем индивидуальный подход и результат, который будет радовать вас долгие годы.',
};


const PAGE_FAQ: FaqItem[] = [{
  question: 'Как быстро мастер может приехать на замер к метро Академическая?',
  answer:
    'Наши специалисты работают по всему району. Обычно мастер готов приехать для замера и консультации в течение 2-3 часов после вашего звонка или в любое удобное для вас время.',
},
{
  question: 'Сколько стоит вызов замерщика на Академическую?',
  answer:
    'Выезд технолога, замер помещения и составление предварительной сметы для жителей района Академический осуществляются абсолютно бесплатно.',
},
{
  question: 'Работаете ли вы в старых кирпичных домах на Академической?',
  answer:
    'Да, у нас большой опыт ремонта санузлов в домах сталинской постройки и кирпичных пятиэтажках, характерных для этого района. Мы знаем специфику замены старых коммуникаций и укрепления перекрытий.',
},
{
  question: 'Какую гарантию вы даете на ремонт санузла?',
  answer:
    'На все виды отделочных и сантехнических работ мы предоставляем официальную гарантию сроком до 2 лет, зафиксированную в договоре.',
},
{
  question: 'Как долго длится ремонт стандартного санузла под ключ?',
  answer:
    'В среднем, комплексный ремонт санузла занимает от 14 до 25 дней, в зависимости от сложности работ и необходимости перепланировки.',
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
  slug: 'remont-sanuzla-akademicheskaya',
  path: '/remont-sanuzla-akademicheskaya/',
  canonicalPath: '/remont-sanuzla-akademicheskaya/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Академическая | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Академическая | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-akademicheskaya',
        title: 'Ремонт санузла у станции метро Академическая',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов на Академической', href: '/remont-sanuzla-akademicheskaya/', isActive: true }] }),
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

