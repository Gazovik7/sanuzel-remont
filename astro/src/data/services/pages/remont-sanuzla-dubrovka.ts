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
  summaryTitle: 'Качественный ремонт санузла на Дубровке',
  paragraphsHtml: [
    'Район метро <strong>Дубровка</strong> — это сочетание развитой промышленной зоны в прошлом и современных жилых кварталов сегодня. Ремонт санузла здесь часто требует профессионального подхода к замене изношенных коммуникаций в кирпичных и панельных домах, а также реализации стильных решений в новостройках. Мы предлагаем жителям Южнопортового района надежные услуги по обновлению ванных комнат.',
    'Наши мастера имеют большой опыт работы в домах на Шарикоподшипниковской улице, улице Симоновский Вал и в новых ЖК у метро Дубровка. Мы выполняем полный цикл работ: от демонтажа до финишной отделки, гарантируя высокое качество и долговечность каждого реализованного проекта в этой престижной локации вблизи центра.',
  ],
  listIntroHtml: '<strong>Почему ремонт санузла на Дубровке заказывают у нас:</strong>',
  listItemsHtml: [
    'Оперативный выезд технолога для замера и детальной консультации.',
    'Полная модернизация инженерных сетей с использованием современных материалов.',
    'Высококачественная укладка плитки и керамогранита любой сложности.',
    'Установка и подключение инсталляций, современных ванн и душевых систем.',
    'Работа по официальному договору с гарантией на все услуги 2 года.',
  ],
  closingHtml:
    'Ремонт санузла на Дубровке с нашей командой — это отсутствие лишних хлопот и превосходный результат. Мы фиксируем итоговую стоимость и строго соблюдаем сроки. Закажите бесплатный замер вашего санузла уже сегодня!',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли менять электропроводку в санузле в старом доме?',
  answer:
    'В домах старой постройки у Дубровки мы настоятельно рекомендуем замену проводки на новую медную с установкой влагозащищенных розеток для вашей безопасности.',
},
{
  question: 'Как быстро мастер может приехать на замер на Дубровку?',
  answer:
    'Наши специалисты работают по всему ЮВАО ежедневно. Выезд замерщика на Шарикоподшипниковскую или соседние улицы возможен в день обращения.',
},
{
  question: 'Помогаете ли вы с закупкой черновых материалов?',
  answer:
    'Да, мы полностью берем на себя подбор, закупку и доставку качественных черновых материалов, предоставляя все необходимые чеки.',
},
{
  question: 'Сколько времени занимает стандартный ремонт санузла?',
  answer:
    'В среднем ремонт "под ключ" занимает от 14 до 20 дней в зависимости от объема работ и состояния коммуникаций.',
},
{
  question: 'Бесплатен ли выезд мастера на замер?',
  answer:
    'Да, выезд нашего технического специалиста для осмотра помещения и составления сметы на Дубровке осуществляется бесплатно.',
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
  slug: 'remont-sanuzla-dubrovka',
  path: '/remont-sanuzla-dubrovka/',
  canonicalPath: '/remont-sanuzla-dubrovka/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Дубровка | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Дубровка | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-dubrovka',
        title: 'Ремонт санузла у станции метро Дубровка',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов на Дубровке', href: '/remont-sanuzla-dubrovka/', isActive: true }] }),
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

