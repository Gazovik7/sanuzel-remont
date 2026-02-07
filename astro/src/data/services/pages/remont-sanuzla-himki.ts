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
  summaryTitle: 'Ремонт ванных комнат в Химках: Старые и Новые Химки',
  paragraphsHtml: [
    'Город <strong>Химки</strong> — наш ключевой регион работы на севере Подмосковья. Мы выполняем ремонт санузлов во всех микрорайонах: <strong>Старые Химки</strong>, <strong>Новые Химки</strong>, <strong>Левобережный</strong>, <strong>Сходня</strong> и <strong>Подрезково</strong>. Отличное знание транспортной доступности (Ленинградское шоссе, платная трасса М-11) позволяет нам четко соблюдать сроки поставок.',
    'Мы имеем богатый опыт работы в новостройках Химок (ЖК "Солнечная система", "Две столицы", "Маяк") и знаем все требования местных управляющих компаний к проведению шумных работ и гидроизоляции.',
  ],
  listIntroHtml: '<strong>Почему в Химках выбирают нас:</strong>',
  listItemsHtml: [
    'Быстрый старт работ: мастер может приехать на замер в день обращения.',
    'Максимально быстрая доставка материалов из Леруа Мерлен и ОБИ (находятся рядом).',
    'Работаем с любыми бюджетами: от эконом-вариантов под сдачу до дизайнерских проектов.',
    'Помощь в приемке квартиры у застройщика (проверка ровности стен и выводов труб).',
    'Гарантия 2 года на все виды работ, прописанная в договоре.',
  ],
  closingHtml:
    'Ремонт в Химках без нервов и переплат — это к нам. Запишитесь на бесплатный замер, и мы подробно расскажем, как сделать вашу ванную комнату идеальной.',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'Работаете ли вы в Куркино и Новогорске?',
    answer: 'Да, хотя Куркино административно относится к Москве, для нас это единая зона с Химками. Мы также выезжаем в Новогорск и другие прилегающие коттеджные поселки и ЖК.',
  },
  {
    question: 'Есть ли скидки для жителей новостроек в Химках?',
    answer: 'Мы часто предлагаем специальные условия при коллективных заявках из одного ЖК. Следите за акциями или спросите у менеджера при звонке.',
  },
  {
    question: 'Сможете ли вы сделать душевой поддон в строительном исполнении?',
    answer: 'Да, это одна из наших специализаций. Мы делаем надежную гидроизоляцию, устанавливаем трап и укладываем мозаику или плитку с правильным уклоном.',
  },
  {
    question: 'Как быть с пропуском в закрытые ЖК (например, "Олимпийская деревня")?',
    answer: 'Наши мастера — граждане РФ с полным комплектом документов. Мы заранее предоставим паспортные данные для оформления пропусков на территорию и для рабочих.',
  },
  {
    question: 'Можно ли сделать ремонт поэтапно?',
    answer: 'Технически это возможно, но не всегда целесообразно. Лучше делать ремонт санузла целиком, чтобы избежать стыков плитки и грязи в уже готовых зонах. Но мы готовы обсудить индивидуальный график оплат.',
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
  slug: 'remont-sanuzla-himki',
  path: '/remont-sanuzla-himki/',
  canonicalPath: '/remont-sanuzla-himki/',
  seo: {
    title: 'Ремонт санузла в Химках под ключ | Цена от мастеров | Ремонт ванной комнаты',
    description:
      'Ремонт санузла в Химках под ключ | Бесплатный выезд мастера | Гарантия 2 года | Без предоплаты | Лучшие цены на ремонт санузлов ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-himki',
        title: 'Ремонт санузла в Химках',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Химках', href: '/remont-sanuzla-himki/', isActive: true }] }),
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
