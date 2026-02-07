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
  summaryTitle: 'Качественный ремонт ванных в Сергиевом Посаде',
  paragraphsHtml: [
    'Город <strong>Сергиев Посад</strong> — жемчужина Золотого кольца, и мы гордимся тем, что делаем дома его жителей уютнее. Мы работаем во всех районах: от <strong>Центра</strong> и <strong>Фермы</strong> до <strong>Звездочки</strong> и <strong>Клементьевки</strong>. Наша команда понимает, как важно сохранить дух старого города, но при этом внедрить современные технологии комфорта.',
    'Мы наладили логистику поставок материалов по Ярославскому шоссе, чтобы минимизировать расходы клиентов на доставку. Также мы активно сотрудничаем с местными базами стройматериалов для оперативного решения текущих задач.',
  ],
  listIntroHtml: '<strong>Почему в Сергиевом Посаде нас рекомендуют:</strong>',
  listItemsHtml: [
    'Бесплатный выезд инженера в любую точку города и района.',
    'Бережное отношение к коммуникациям в домах исторической застройки.',
    'Опыт работы в частном секторе (монтаж септиков, скважин, бойлеров).',
    'Прозрачная смета без скрытых доплат "за дальность".',
    'Мастера, которые убирают за собой мусор каждый день.',
  ],
  closingHtml:
    'Ремонт санузла в Сергиевом Посаде — это наша профессия. Мы гарантируем высокое качество работ и соблюдение сроков. Позвоните нам для консультации!',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'Выезжаете ли вы в Хотьково?',
    answer: 'Да, мы работаем по всему Сергиево-Посадскому городскому округу, включая Хотьково, Пересвет и Краснозаводск.',
  },
  {
    question: 'Сколько стоит доставка плитки из Москвы?',
    answer: 'Мы комплектуем машины сборными грузами, поэтому доставка обходится значительно дешевле индивидуального заказа. Точную стоимость рассчитает менеджер.',
  },
  {
    question: 'Работаете ли вы с деревянными перекрытиями?',
    answer: 'Да, в старых домах мы выполняем усиление перекрытий и делаем облегченную стяжку, чтобы не перегружать конструкцию.',
  },
  {
    question: 'Можно ли установить душевую кабину вместо ванны?',
    answer: 'Конечно. Это отличное решение для небольших санузлов. Мы поможем выбрать качественную кабину или смонтируем душевой уголок.',
  },
  {
    question: 'Как долго ждать мастера на замер?',
    answer: 'Обычно мы готовы приехать на следующий день после заявки. В сезон (лето) срок может увеличиться до 2-3 дней.',
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
  slug: 'remont-sanuzla-sergiev-posad',
  path: '/remont-sanuzla-sergiev-posad/',
  canonicalPath: '/remont-sanuzla-sergiev-posad/',
  seo: {
    title: 'Ремонт санузла в Сергиевом Посаде под ключ | Цена от мастеров | Ремонт ванной комнаты',
    description:
      'Ремонт санузла в Сергиевом Посаде под ключ | Бесплатный выезд мастера | Гарантия 2 года | Без предоплаты | Лучшие цены на ремонт санузлов ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-sergiev-posad',
        title: 'Ремонт санузла в Сергиевом Посаде',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Сергиевом Посаде', href: '/remont-sanuzla-sergiev-posad/', isActive: true }] }),
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
