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
  summaryTitle: 'Недорогой и качественный ремонт ванной в Выхино',
  paragraphsHtml: [
    'Район <strong>Выхино-Жулебино</strong> — один из самых густонаселенных в Москве, с преобладанием типовой панельной застройки 70-80-х годов. Ремонт санузлов здесь часто сопряжен с необходимостью замены изношенных коммуникаций и выравнивания кривых стен сантехкабин. Мы имеем богатый опыт работы именно с таким жилым фондом.',
    'Мы предлагаем жителям Выхино оптимальное соотношение цены и качества. Понимая особенности местных домов (девятиэтажки, башни Вулыха и др.), мы подбираем надежные, но доступные материалы, позволяющие сделать капитальный ремонт без переплат.',
  ],
  listIntroHtml: '<strong>Наши преимущества для жителей Выхино:</strong>',
  listItemsHtml: [
    'Доступные цены на ремонт эконом и комфорт-класса.',
    'Скидки для пенсионеров и новоселов района.',
    'Опыт работы с малогабаритными санузлами в панельных домах.',
    'Помощь с доставкой и подъемом материалов (даже при отсутствии грузового лифта).',
    'Полная замена старых труб на современный полипропилен или Rehau.',
  ],
  closingHtml:
    'Живете в Выхино и планируете ремонт? Не откладывайте! Вызовите нашего замерщика бесплатно. Мы приедем в удобное время, оценим состояние ванной и предложим смету, которая впишется в ваш бюджет.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Сколько стоит ремонт ванной в "панельке" в Выхино?',
  answer:
    'Стоимость комплексного ремонта ванной комнаты и туалета в типовом панельном доме начинается от 80 000 рублей за работы. Точная сумма зависит от площади и ваших пожеланий по отделке.',
},
{
  question: 'Нужно ли менять полотенцесушитель?',
  answer:
    'В старых домах Выхино мы настоятельно рекомендуем менять старые водяные полотенцесушители на новые или устанавливать электрические, чтобы избежать протечек и зависимости от сезонных отключений воды.',
},
{
  question: 'Как долго ждать мастера на замер?',
  answer:
    'Наши мастера работают в ЮВАО ежедневно. Обычно мы можем организовать выезд замерщика в Выхино в день обращения или на следующий день.',
},
{
  question: 'Кто будет делать ремонт?',
  answer:
    'У нас работают постоянные бригады опытных мастеров-славян. Мы не привлекаем сезонных рабочих и несем полную ответственность за качество их работы.',
},
{
  question: 'Вывозите ли вы строительный мусор?',
  answer:
    'Да, в услугу "под ключ" входит сбор, упаковка и вывоз строительного мусора в специализированных контейнерах.',
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
  slug: 'remont-sanuzla-vyhino',
  path: '/remont-sanuzla-vyhino/',
  canonicalPath: '/remont-sanuzla-vyhino/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Выхино | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Выхино | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-vyhino',
        title: 'Ремонт санузла у станции метро Выхино',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Выхино', href: '/remont-sanuzla-vyhino/', isActive: true }] }),
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

