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
  summaryTitle: 'Премиальный ремонт санузла у метро Белорусская',
  paragraphsHtml: [
    'Район метро <strong>Белорусская</strong> — это одна из самых престижных локаций в центре Москвы, сочетающая в себе величие сталинской архитектуры, исторические кирпичные дома и современные жилые комплексы бизнес-класса. Ремонт санузла здесь требует особого мастерства, глубокого понимания инженерных особенностей старого фонда и умения работать с эксклюзивными отделочными материалами.',
    'Мы предлагаем жителям Тверского и Бегового районов профессиональные услуги по ремонту ванных комнат под ключ. Наши мастера имеют огромный опыт работы в "сталинках" на 1-й Тверской-Ямской и Ленинградском проспекте, где требуется бережный демонтаж, укрепление перекрытий и замена антикварных коммуникаций на современные премиальные системы Rehau и Tece.',
  ],
  listIntroHtml: '<strong>Особенности наших работ в районе Белорусской:</strong>',
  listItemsHtml: [
    'Сложный демонтаж в домах с деревянными и смешанными перекрытиями.',
    'Идеальное выравнивание высоких стен (до 3.5-4 метров) с соблюдением геометрии.',
    'Укладка крупноформатного керамогранита, натурального камня и мозаики.',
    'Монтаж систем инсталляции, скрытых смесителей и дизайнерской сантехники.',
    'Строгое соблюдение регламента шумных работ и полная чистота в подъездах.',
  ],
  closingHtml:
    'Ваш санузел на Белорусской должен соответствовать статусу вашего жилья. Мы гарантируем безупречное качество исполнения и внимание к каждой детали. Закажите бесплатный выезд инженера для экспертной оценки вашего проекта.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли согласовывать перепланировку в старых домах у Белорусской?',
  answer:
    'Любые изменения в конфигурации санузла в историческом фонде требуют консультации и часто согласования. Мы работаем строго в рамках СНиП и СП.',
},
{
  question: 'Работаете ли вы с материалами заказчика из премиум-сегмента?',
  answer:
    'Да, наши мастера обладают высочайшей квалификацией для работы с дорогостоящей плиткой, сантехникой ведущих мировых брендов и сложными инженерными узлами.',
},
{
  question: 'Как долго длится капитальный ремонт в "сталинке"?',
  answer:
    'Из-за необходимости тщательной подготовки поверхностей и сложности коммуникаций, ремонт "под ключ" в старом фонде занимает от 25 до 35 рабочих дней.',
},
{
  question: 'Какую гарантию вы предоставляете на элитный ремонт?',
  answer:
    'Мы предоставляем официальную гарантию 2 года на все виды работ, подтверждая надежность каждого реализованного нами узла.',
},
{
  question: 'Бесплатен ли выезд инженера на замер в ЦАО?',
  answer:
    'Да, наш технический специалист приедет к вам в район метро Белорусская для проведения детального осмотра и составления сметы совершенно бесплатно.',
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
  slug: 'remont-sanuzla-belorusskaya',
  path: '/remont-sanuzla-belorusskaya/',
  canonicalPath: '/remont-sanuzla-belorusskaya/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Белорусская | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Белорусская | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-belorusskaya',
        title: 'Ремонт санузла у станции метро Белорусская',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов у Белорусской', href: '/remont-sanuzla-belorusskaya/', isActive: true }] }),
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

