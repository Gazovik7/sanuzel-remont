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
  summaryTitle: 'Качественный ремонт санузла на Рязанском проспекте',
  paragraphsHtml: [
    'Район <strong>Рязанского проспекта</strong> характеризуется разнообразием жилого фонда: от кирпичных пятиэтажек до панельных многоэтажек различных серий. Ремонт санузла в таких домах часто сопряжен с необходимостью полной модернизации старых коммуникаций и грамотного использования пространства малогабаритных ванных комнат.',
    'Мы специализируемся на капитальном ремонте санузлов в ЮВАО, предлагая жителям района надежные решения. Наши мастера знают все нюансы работы с инженерными сетями в домах на Рязанском проспекте, улице Паперника и прилегающих кварталах, обеспечивая высокое качество отделки и долговечность сантехники.',
  ],
  listIntroHtml: '<strong>Почему ремонт санузла доверяют именно нам:</strong>',
  listItemsHtml: [
    'Глубокое знание особенностей типовых планировок района.',
    'Полная замена старых труб на современные системы из сшитого полиэтилена.',
    'Профессиональное выравнивание стен и полов для идеальной укладки плитки.',
    'Установка современной сантехники, инсталляций и душевых зон.',
    'Чистота и порядок: вывоз мусора и уборка после завершения работ.',
  ],
  closingHtml:
    'Ремонт санузла на Рязанском проспекте — это инвестиция в ваш комфорт. Мы работаем по договору с фиксированной ценой, что исключает любые неприятные сюрпризы в процессе. Оставьте заявку на бесплатный замер уже сегодня!',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли менять полотенцесушитель в старом доме?',
  answer:
    'В домах старой постройки мы рекомендуем замену водяного полотенцесушителя на новый или установку электрического, чтобы избежать протечек и зависимости от сезонного отключения горячей воды.',
},
{
  question: 'Как быстро мастер может приехать на замер?',
  answer:
    'Наши специалисты работают в ЮВАО ежедневно, поэтому выезд замерщика на Рязанский проспект возможен в день обращения или на следующий день.',
},
{
  question: 'Можно ли сделать ремонт в ванной, если мы в ней живем?',
  answer:
    'Да, мы минимизируем дискомфорт, поддерживаем чистоту и стараемся как можно быстрее завершить этапы, связанные с отключением воды.',
},
{
  question: 'Какую гарантию вы предоставляете на работы?',
  answer:
    'На все виды отделочных и сантехнических работ мы даем официальную гарантию сроком 2 года.',
},
{
  question: 'Сколько стоит вызов замерщика на Рязанский проспект?',
  answer:
    'Выезд технолога для проведения замеров и консультации в районе Рязанского проспекта абсолютно бесплатен.',
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
  slug: 'remont-sanuzla-ryazanskiy-prospekt',
  path: '/remont-sanuzla-ryazanskiy-prospekt/',
  canonicalPath: '/remont-sanuzla-ryazanskiy-prospekt/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Рязанский проспект | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Рязанский проспект | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-ryazanskiy-prospekt',
        title: 'Ремонт санузла у станции метро Рязанский проспект',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов на Рязанском проспекте', href: '/remont-sanuzla-ryazanskiy-prospekt/', isActive: true }] }),
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

