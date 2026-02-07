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
  summaryTitle: 'Профессиональный ремонт санузла на Бауманской',
  paragraphsHtml: [
    'Район метро <strong>Бауманская</strong> — это исторический центр Москвы с богатым архитектурным наследием, где старинные особняки соседствуют с конструктивизмом и современными лофтами. Ремонт санузла здесь требует особого подхода, учитывающего состояние перекрытий и коммуникаций в домах с историей. Мы предлагаем жителям Басманного района услуги по деликатной реконструкции и ремонту ванных комнат.',
    'Наши мастера имеют большой опыт работы в домах на Бауманской, Ладожской и Спартаковской улицах. Мы выполняем полный цикл работ: от укрепления стен и замены изношенных стояков до монтажа премиальной сантехники и создания уникальных интерьеров, соответствующих духу этого престижного района.',
  ],
  listIntroHtml: '<strong>Особенности наших работ в районе Бауманской:</strong>',
  listItemsHtml: [
    'Бережный демонтаж и сохранение исторических элементов (по желанию).',
    'Профессиональная замена труб и электропроводки в старом фонде.',
    'Использование качественных материалов, устойчивых к влажности и времени.',
    'Монтаж систем инсталляции, ванн и душевых в нестандартных планировках.',
    'Соблюдение тишины и чистоты, уважение к соседям и общедомовому имуществу.',
  ],
  closingHtml:
    'Ремонт санузла на Бауманской — это задача для профессионалов. Мы гарантируем надежность, эстетику и долговечность результата. Закажите бесплатный выезд инженера для оценки состояния вашего помещения и составления сметы.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Сложно ли делать ремонт в дореволюционном доме?',
  answer:
    'Ремонт в историческом фонде требует опыта работы с дранкой, деревянными перекрытиями и нестандартными коммуникациями. Наши мастера обладают необходимой квалификацией для таких задач.',
},
{
  question: 'Нужно ли согласовывать перепланировку санузла?',
  answer:
    'Да, любые изменения в мокрых зонах требуют согласования. Мы помогаем нашим клиентам в подготовке необходимых технических решений.',
},
{
  question: 'Как быстро вы можете начать работы?',
  answer:
    'Обычно мы готовы выйти на объект в течение 3-5 дней после подписания договора и закупки материалов.',
},
{
  question: 'Работаете ли вы с дизайн-проектами?',
  answer:
    'Да, мы имеем большой опыт реализации сложных дизайнерских проектов, в точности соблюдая все чертежи и спецификации.',
},
{
  question: 'Бесплатен ли выезд замерщика на Бауманскую?',
  answer:
    'Да, выезд нашего специалиста для осмотра помещения и консультации в Басманном районе осуществляется бесплатно.',
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
  slug: 'remont-sanuzla-baumanskaya',
  path: '/remont-sanuzla-baumanskaya/',
  canonicalPath: '/remont-sanuzla-baumanskaya/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Бауманская | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Бауманская | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-baumanskaya',
        title: 'Ремонт санузла у станции метро Бауманская',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов на Бауманской', href: '/remont-sanuzla-baumanskaya/', isActive: true }] }),
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

