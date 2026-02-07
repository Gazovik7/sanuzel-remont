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
  summaryTitle: 'Профессиональный ремонт санузла в Ново-Переделкино',
  paragraphsHtml: [
    'Район <strong>Ново-Переделкино</strong> — это современный жилой массив на западе Москвы, где комфорт проживания напрямую зависит от качества отделки квартир. Мы предлагаем жителям района услуги по капитальному и косметическому ремонту санузлов под ключ, обеспечивая высокие стандарты качества и долговечность результата даже в условиях активной эксплуатации жилья.',
    'Наши мастера отлично знакомы со спецификой домов на Боровском шоссе, улице Лукинская и Шолохова. Мы выполняем полный цикл работ: от проектирования разводки труб до финишной установки сантехники и мебели. Мы ценим время наших клиентов и гарантируем соблюдение сроков, чтобы вы могли как можно быстрее наслаждаться обновленным интерьером.',
  ],
  listIntroHtml: '<strong>Почему ремонт санузла в Ново-Переделкино заказывают у нас:</strong>',
  listItemsHtml: [
    'Бесплатный выезд инженера-замерщика в день обращения или в удобное время.',
    'Использование современных материалов (Rehau, керамогранит), устойчивых к износу.',
    'Профессиональный монтаж систем защиты от протечек и принудительной вентиляции.',
    'Работа строго по договору с фиксированной сметой и гарантией 2 года.',
    'Аккуратный демонтаж и оперативный вывоз строительного мусора.',
  ],
  closingHtml:
    'Ремонт санузла в Ново-Переделкино с нашей командой — это залог вашего спокойствия. Мы берем на себя все хлопоты, включая закупку материалов. Закажите расчет стоимости вашего проекта прямо сейчас!',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли менять трубы в новостройках Ново-Переделкино?',
  answer:
    'Часто застройщики используют бюджетные материалы. Мы рекомендуем замену труб на сшитый полиэтилен Rehau для обеспечения максимальной надежности на десятилетия.',
},
{
  question: 'Как быстро вы можете начать ремонт?',
  answer:
    'После проведения замера и подписания договора мы готовы выйти на объект в течение 3-5 рабочих дней.',
},
{
  question: 'Выполняете ли вы объединение ванной и туалета?',
  answer:
    'Да, мы выполняем демонтаж перегородок и создание единого пространства санузла с соблюдением всех строительных норм.',
},
{
  question: 'Сколько времени занимает стандартный ремонт санузла?',
  answer:
    'В среднем ремонт "под ключ" занимает от 14 до 20 дней в зависимости от объема и сложности работ.',
},
{
  question: 'Бесплатен ли выезд мастера на замер в Ново-Переделкино?',
  answer:
    'Да, выезд нашего технического специалиста для консультации и замера в районе Ново-Переделкино осуществляется абсолютно бесплатно.',
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
  slug: 'remont-sanuzla-novoperedelkino',
  path: '/remont-sanuzla-novoperedelkino/',
  canonicalPath: '/remont-sanuzla-novoperedelkino/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Новопеределкино | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Новопеределкино | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-novoperedelkino',
        title: 'Ремонт санузла у станции метро Новопеределкино',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Новопеределкино', href: '/remont-sanuzla-novoperedelkino/', isActive: true }] }),
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

