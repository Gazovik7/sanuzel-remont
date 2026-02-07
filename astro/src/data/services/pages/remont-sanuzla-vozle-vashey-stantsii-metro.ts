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
  summaryTitle: 'Ремонт санузла с выездом к вашей станции метро',
  paragraphsHtml: [
    'Ищете надежную бригаду для <strong>ремонта санузла возле дома</strong>? Мы работаем по всей Москве, обеспечивая одинаково высокий стандарт качества в любом районе города. Вам не нужно искать "местных" частников — наши мобильные бригады укомплектованы всем необходимым и готовы приступить к работе рядом с вашей станцией метро.',
    'Наша логистика выстроена так, чтобы минимизировать время на дорогу и доставку материалов. Независимо от того, живете ли вы в центре или за МКАД, вы получаете фиксированную смету и официальную гарантию.',
  ],
  listIntroHtml: '<strong>Ваш комфорт — наш приоритет:</strong>',
  listItemsHtml: [
    'Бесплатный выезд замерщика к любой станции метро в пределах Москвы и ближайшего Подмосковья.',
    'Единые расценки на работы для всех округов: ЦАО, ЗАО, ЮВАО и других.',
    'Централизованная служба снабжения: привезем черновые материалы точно в срок.',
    'Работаем во всех типах домов: от сталинок и хрущевок до современных ЖК.',
    'Контроль качества прорабом, закрепленным за вашим объектом, независимо от локации.',
  ],
  closingHtml:
    'Качественный ремонт теперь доступен в каждом районе Москвы. Позвоните нам или оставьте заявку, чтобы узнать ближайшее свободное время для замера у вашей станции метро.',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'Влияет ли удаленность от центра на стоимость ремонта?',
    answer: 'Нет, наши цены фиксированы и не зависят от того, находится ли ваша квартира у метро Охотный Ряд или в Бутово. Вы платите только за выполненные работы по смете.',
  },
  {
    question: 'Как быстро вы сможете приехать на замер к моей станции метро?',
    answer: 'У нас работает несколько выездных инженеров в разных округах Москвы. Обычно мы готовы приехать в день обращения или на следующий день в удобное для вас время.',
  },
  {
    question: 'Вы работаете в зонах платной парковки?',
    answer: 'Да, мы работаем во всех районах, включая зоны платной парковки в центре. Логистика доставки материалов планируется с учетом особенностей подъезда к вашему дому.',
  },
  {
    question: 'Можно ли посмотреть ваши работы рядом с моим метро?',
    answer: 'Мы выполнили сотни ремонтов по всей Москве. Спросите у менеджера — возможно, мы прямо сейчас заканчиваем объект в соседнем квартале, и (по согласованию с заказчиком) сможем его показать.',
  },
  {
    question: 'Берете ли вы заказы в Новой Москве?',
    answer: 'Да, мы обслуживаем все станции метро, включая новые линии в ТиНАО (Коммунарка, Румянцево, Саларьево и др.). Условия работы остаются стандартными.',
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
  slug: 'remont-sanuzla-vozle-vashey-stantsii-metro',
  path: '/remont-sanuzla-vozle-vashey-stantsii-metro/',
  canonicalPath: '/remont-sanuzla-vozle-vashey-stantsii-metro/',
  seo: {
    title: 'Ремонт санузла под ключ рядом у станции метро Возле вашей станции метро | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Возле вашей станции метро | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-vozle-vashey-stantsii-metro',
        title: 'Ремонт санузла возле вашей станции метро',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов рядом', href: '/remont-sanuzla-vozle-vashey-stantsii-metro/', isActive: true }] }),
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

