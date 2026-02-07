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
  summaryTitle: 'Качественный ремонт санузла в Марьиной Роще',
  paragraphsHtml: [
    'Район <strong>Марьина Роща</strong> — это историческая локация вблизи центра Москвы с уникальным характером застройки. Ремонт санузла здесь часто требует профессионального подхода к замене коммуникаций в старых кирпичных домах и реализации современных интерьерных решений в новых жилых комплексах. Мы предлагаем жителям района услуги по созданию надежных и стильных ванных комнат.',
    'Наши мастера имеют опыт работы на объектах на Шереметьевской улице, Октябрьской и в современных ЖК района Марьина Роща. Мы выполняем весь спектр работ: от бережного демонтажа в домах с историей до высокотехнологичной отделки в новостройках, гарантируя безупречное качество и долговечность каждой детали.',
  ],
  listIntroHtml: '<strong>Наши преимущества для жителей района Марьина Роща:</strong>',
  listItemsHtml: [
    'Опыт капитального ремонта в домах различных периодов постройки.',
    'Полная замена инженерных сетей с использованием материалов ведущих брендов.',
    'Идеальное выравнивание стен и полов под укладку плитки и керамогранита.',
    'Монтаж современной сантехники, инсталляций и душевых систем.',
    'Прозрачное ценообразование и строгое соблюдение оговоренных сроков.',
  ],
  closingHtml:
    'Ремонт санузла в Марьиной Роще — это сочетание традиций и современных технологий с нашей командой. Мы берем на себя все этапы процесса, обеспечивая чистоту и порядок. Закажите бесплатный выезд инженера для консультации и замера уже сегодня.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли менять старые чугунные трубы в Марьиной Роще?',
  answer:
    'В большинстве старых домов района чугунные коммуникации уже изношены. Мы настоятельно рекомендуем замену на современный пластик или сшитый полиэтилен для предотвращения протечек.',
},
{
  question: 'Работаете ли вы с эксклюзивной плиткой и мозаикой?',
  answer:
    'Да, наши плиточники обладают высокой квалификацией и опытом работы с любыми типами материалов, включая дорогостоящую мозаику и крупноформатный керамогранит.',
},
{
  question: 'Как быстро вы можете приехать на замер в Марьину Рощу?',
  answer:
    'Наши специалисты работают в СВАО и ЦАО ежедневно, поэтому выезд замерщика на Шереметьевскую или Октябрьскую возможен в день обращения.',
},
{
  question: 'Выполняете ли вы объединение санузла?',
  answer:
    'Да, мы выполняем демонтаж перегородок и создание единого пространства ванной комнаты с соблюдением всех строительных норм.',
},
{
  question: 'Бесплатен ли замер в районе Марьина Роща?',
  answer:
    'Да, выезд нашего технического специалиста для проведения замеров и составления сметы в Марьиной Роще абсолютно бесплатен.',
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
  slug: 'remont-sanuzla-marina-roscha',
  path: '/remont-sanuzla-marina-roscha/',
  canonicalPath: '/remont-sanuzla-marina-roscha/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Марина Роща | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Марина Роща | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-marina-roscha',
        title: 'Ремонт санузла у станции метро Марина Роща',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов у Марьиной Рощи', href: '/remont-sanuzla-marina-roscha/', isActive: true }] }),
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

