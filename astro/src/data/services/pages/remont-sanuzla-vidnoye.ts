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
  summaryTitle: 'Ремонт санузлов в Видном под ключ',
  paragraphsHtml: [
    'Город <strong>Видное</strong> заслуженно считается одним из самых благоустроенных городов Подмосковья. Мы предлагаем жителям Видного услуги по ремонту санузлов, соответствующие высокому статусу города. Наша команда работает во всех районах: от уютного <strong>Расторгуево</strong> до современных жилых комплексов <strong>"Завидное"</strong>, <strong>"Эко Видное"</strong> и <strong>"Зеленые аллеи"</strong>.',
    'Максимальная близость к МКАД и удобный доступ по трассе М-4 "Дон" позволяют нам оперативно снабжать объекты материалами и гарантировать быстрый старт работ. Мы специализируемся на создании современных и надежных санузлов, используя только проверенные технологии и материалы.',
  ],
  listIntroHtml: '<strong>Почему ремонт санузла в Видном стоит заказать у нас:</strong>',
  listItemsHtml: [
    'Бесплатный выезд инженера для точного замера и составления сметы в день обращения.',
    'Огромный опыт работы в новостройках города Видное различных серий.',
    'Высококачественная отделка: от безупречной укладки плитки до монтажа сложной сантехники.',
    'Полная комплектация объекта материалами со скидками от наших поставщиков.',
    'Гарантия 2 года и строгое соблюдение оговоренных сроков.',
  ],
  closingHtml:
    'Ваш идеальный санузел в Видном начинается с профессионального подхода. Оставьте заявку на бесплатный замер, и получите расчет стоимости ремонта уже сегодня.',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'Работаете ли вы в микрорайоне Купелинка?',
    answer: 'Да, Купелинка — один из самых активных районов нашей работы в Видном. Мы отлично знаем все типы домов в этом микрорайоне.',
  },
  {
    question: 'Как быстро вы можете приехать на замер в Расторгуево?',
    answer: 'Наши специалисты ежедневно находятся в Видном, поэтому выезд в Расторгуево возможен в кратчайшие сроки, часто прямо в день обращения.',
  },
  {
    question: 'Делаете ли вы звукоизоляцию труб в панельных домах Видного?',
    answer: 'Да, мы рекомендуем качественную шумоизоляцию канализационных стояков для повышения комфорта в санузле.',
  },
  {
    question: 'Сколько стоит черновой материал для стандартного санузла?',
    answer: 'Точная стоимость зависит от состояния стен и необходимости замены труб. Примерный расчет мы предоставим вам сразу после замера.',
  },
  {
    question: 'Можно ли посмотреть ваши готовые работы в Видном?',
    answer: 'Мы выполнили десятки ремонтов в Видном. По согласованию с текущими заказчиками мы иногда можем организовать показ объекта на стадии завершения.',
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
  slug: 'remont-sanuzla-vidnoye',
  path: '/remont-sanuzla-vidnoye/',
  canonicalPath: '/remont-sanuzla-vidnoye/',
  seo: {
    title: 'Ремонт санузла в Видном под ключ | Цена от мастеров | Ремонт ванной комнаты',
    description:
      'Ремонт санузла в Видном под ключ | Бесплатный выезд мастера | Гарантия 2 года | Без предоплаты | Лучшие цены на ремонт санузлов ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-vidnoye',
        title: 'Ремонт санузла в Видном',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Видном', href: '/remont-sanuzla-vidnoye/', isActive: true }] }),
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
