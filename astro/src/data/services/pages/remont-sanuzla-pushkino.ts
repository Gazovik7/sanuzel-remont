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
  summaryTitle: 'Ремонт ванных комнат в Пушкино: качество и стиль',
  paragraphsHtml: [
    'Город <strong>Пушкино</strong> активно застраивается и обновляется, и мы готовы предложить его жителям современный ремонт санузлов. Мы работаем во всех микрорайонах: <strong>Центральном</strong>, <strong>Дзержинце</strong>, <strong>Серебрянке</strong>, <strong>Мамонтовке</strong> и <strong>Заветах Ильича</strong>. Наша команда понимает специфику работы как в старых пятиэтажках, так и в высотных новостройках.',
    'Близость Ярославского шоссе позволяет нам оперативно доставлять материалы из московских гипермаркетов и местного "Леруа Мерлен". Мы гарантируем, что ваш ремонт пройдет гладко, без простоев и лишних нервов.',
  ],
  listIntroHtml: '<strong>Почему в Пушкино выбирают нас:</strong>',
  listItemsHtml: [
    'Бесплатный выезд инженера в любую точку города и ближайшие поселки.',
    'Помощь в приемке квартиры у застройщика (проверка вентиляции, стояков).',
    'Качественная укладка плитки на сложные поверхности (короба, ниши).',
    'Установка систем "Аквасторож" или "Нептун" для защиты от протечек.',
    'Соблюдение сроков и фиксированная цена в договоре.',
  ],
  closingHtml:
    'Доверьте ремонт санузла в Пушкино профессионалам. Мы сделаем вашу ванную комнату местом для релаксации. Позвоните нам прямо сейчас!',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'Работаете ли вы в частных домах в Заветах Ильича?',
    answer: 'Да, мы выполняем ремонт санузлов в частном секторе, коттеджах и дачных домах. У нас есть опыт работы с автономными системами канализации (септиками).',
  },
  {
    question: 'Можно ли закупить все в "Леруа Мерлен" в Пушкино?',
    answer: 'Да, наличие гипермаркета в городе — большой плюс. Мы можем составить список всего необходимого, а вы оплатите доставку прямо до подъезда.',
  },
  {
    question: 'Выезжаете ли вы в Софрино?',
    answer: 'Да, мы обслуживаем весь Пушкинский городской округ, включая Софрино, Правдинский и Ашукино.',
  },
  {
    question: 'Как быть с сезонным отключением воды?',
    answer: 'Мы всегда предусматриваем установку проточного или накопительного водонагревателя, чтобы вы не зависели от графиков отключения горячей воды.',
  },
  {
    question: 'Сколько времени занимает ремонт туалета?',
    answer: 'Косметический ремонт туалета занимает 5-7 дней. Капитальный ремонт с заменой труб и выравниванием стен — 10-12 дней.',
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
  slug: 'remont-sanuzla-pushkino',
  path: '/remont-sanuzla-pushkino/',
  canonicalPath: '/remont-sanuzla-pushkino/',
  seo: {
    title: 'Ремонт санузла в Пушкино под ключ | Цена от мастеров | Ремонт ванной комнаты',
    description:
      'Ремонт санузла в Пушкино под ключ | Бесплатный выезд мастера | Гарантия 2 года | Без предоплаты | Лучшие цены на ремонт санузлов ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-pushkino',
        title: 'Ремонт санузла в Пушкино',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Пушкино', href: '/remont-sanuzla-pushkino/', isActive: true }] }),
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
