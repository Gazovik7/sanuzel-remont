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
  summaryTitle: 'Качественный ремонт санузла в Новых Черёмушках',
  paragraphsHtml: [
    'Район <strong>Новые Черёмушки</strong> — это классика московской жилой застройки с высокими требованиями к надежности и качеству исполнения. Ремонт санузла здесь часто предполагает полную реконструкцию инженерных систем для обеспечения современного уровня комфорта. Мы предлагаем жителям Черемушек профессиональные услуги по созданию долговечных и эстетичных ванных комнат.',
    'Наши бригады имеют большой опыт работы в кирпичных и панельных домах на Профсоюзной улице, улице Гарибальди и Намёткина. Мы выполняем капитальный ремонт санузлов под ключ, используя только качественные комплектующие и строго соблюдая технологические процессы, что особенно важно в сложившемся жилом фонде.',
  ],
  listIntroHtml: '<strong>Преимущества ремонта с нами в Новых Черёмушках:</strong>',
  listItemsHtml: [
    'Бесплатный выезд опытного технолога для проведения замеров.',
    'Полная замена старых труб на современные системы Rehau или аналоги.',
    'Профессиональная укладка плитки с гарантией идеальных швов.',
    'Монтаж надежной сантехники и систем защиты от протечек.',
    'Чистота и порядок: бережное отношение к общедомовому имуществу.',
  ],
  closingHtml:
    'Ремонт санузла в Новых Черёмушках с нашей командой — это гарантия качества и отсутствие лишних забот. Мы работаем по прозрачному договору с фиксированной ценой. Закажите консультацию и бесплатный замер прямо сейчас!',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли менять проводку в ванной при ремонте?',
  answer:
    'В домах старой постройки в Новых Черёмушках мы настоятельно рекомендуем замену электропроводки на новую, медную, с обязательным заземлением и установкой УЗО.',
},
{
  question: 'Как долго длится ремонт ванной и туалета?',
  answer:
    'В среднем капитальный ремонт "под ключ" занимает от 15 до 22 рабочих дней, в зависимости от состояния стен и коммуникаций.',
},
{
  question: 'Помогаете ли вы с закупкой материалов в Черемушках?',
  answer:
    'Да, мы можем полностью взять на себя закупку, доставку и подъем всех необходимых черновых материалов.',
},
{
  question: 'Работаете ли вы по договору?',
  answer:
    'Да, мы заключаем официальный договор, в котором прописываются сроки, итоговая стоимость и наши гарантийные обязательства.',
},
{
  question: 'Бесплатен ли выезд мастера на замер в Новые Черёмушки?',
  answer:
    'Да, наш специалист приедет к вам для проведения замеров и консультации абсолютно бесплатно.',
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
  slug: 'remont-sanuzla-novye-cheryomushki',
  path: '/remont-sanuzla-novye-cheryomushki/',
  canonicalPath: '/remont-sanuzla-novye-cheryomushki/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Новые Черёмушки | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Новые Черёмушки | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-novye-cheryomushki',
        title: 'Ремонт санузла у станции метро Новые Черёмушки',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Новых Черёмушках', href: '/remont-sanuzla-novye-cheryomushki/', isActive: true }] }),
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

