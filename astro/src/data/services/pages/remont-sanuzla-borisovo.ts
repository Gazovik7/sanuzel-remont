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
  summaryTitle: 'Профессиональный ремонт санузла в Борисово',
  paragraphsHtml: [
    'Район <strong>Борисово</strong> — это уютный жилой массив на юге Москвы со сложившейся застройкой и высокими требованиями жителей к качеству жилья. Ремонт санузла здесь часто предполагает профессиональное обновление коммуникаций в панельных и блочных домах, а также создание современного интерьера, обеспечивающего максимальный комфорт. Мы предлагаем жителям Братеево и Борисово надежные услуги по капитальной отделке ванных комнат.',
    'Наши мастера имеют большой опыт работы в домах на улице Борисовские Пруды и Наташинской. Мы знаем все нюансы работы с инженерными сетями в этом районе и предлагаем решения, которые позволят вам забыть о протечках и дискомфорте на долгие годы, обеспечив безупречный вид вашей ванной комнаты и туалета.',
  ],
  listIntroHtml: '<strong>Почему жители Борисово выбирают нас для ремонта санузла:</strong>',
  listItemsHtml: [
    'Тщательная диагностика состояния труб и проводки перед началом работ.',
    'Полная замена коммуникаций на современные системы Rehau или полипропилен.',
    'Высококачественная укладка керамической плитки и керамогранита.',
    'Монтаж надежной сантехники, инсталляций и мебели для ванной.',
    'Работа по договору с фиксированной ценой и гарантией 2 года.',
  ],
  closingHtml:
    'Надежный ремонт в уютном Борисово — это наша специализация. Мы берем на себя все хлопоты по организации процесса, гарантируя чистоту и соблюдение сроков. Закажите бесплатный выезд нашего замерщика для оценки состояния вашего санузла.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли менять полотенцесушитель при ремонте в Борисово?',
  answer:
    'В большинстве домов района мы рекомендуем замену старого водяного полотенцесушителя на новую модель или установку электрического варианта для повышения надежности.',
},
{
  question: 'Как быстро вы можете приехать на замер в ЮАО?',
  answer:
    'Наши специалисты работают в Борисово ежедневно, поэтому замер возможен в день обращения или в любое удобное для вас время.',
},
{
  question: 'Помогаете ли вы с закупкой черновых материалов?',
  answer:
    'Да, мы полностью берем на себя подбор, закупку и доставку качественных черновых материалов, предоставляя все отчетные документы.',
},
{
  question: 'Сколько времени занимает ремонт стандартной ванной комнаты?',
  answer:
    'В среднем ремонт "под ключ" в типовом доме Борисово занимает от 12 до 18 рабочих дней.',
},
{
  question: 'Бесплатен ли выезд мастера на замер?',
  answer:
    'Да, выезд нашего технического специалиста для проведения замеров и консультации в районе Борисово осуществляется бесплатно.',
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
  slug: 'remont-sanuzla-borisovo',
  path: '/remont-sanuzla-borisovo/',
  canonicalPath: '/remont-sanuzla-borisovo/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Борисово | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Борисово | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-borisovo',
        title: 'Ремонт санузла у станции метро Борисово',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Борисово', href: '/remont-sanuzla-borisovo/', isActive: true }] }),
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

