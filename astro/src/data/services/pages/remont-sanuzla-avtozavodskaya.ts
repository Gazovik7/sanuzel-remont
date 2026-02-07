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
  summaryTitle: 'Качественный ремонт санузла на Автозаводской',
  paragraphsHtml: [
    'Район метро <strong>Автозаводская</strong> — это уникальное место, где монументальная сталинская застройка гармонично переплетается с современными жилыми кварталами на территории бывшего ЗИЛа. Ремонт санузла здесь часто предполагает реализацию смелых дизайнерских идей, от классики до лофта, при этом требуя надежной инженерной базы. Мы предлагаем жителям Даниловского района профессиональные услуги по ремонту ванных комнат под ключ.',
    'Наши мастера имеют опыт работы в домах на улице Автозаводская, Велозаводская и в новых ЖК на набережной. Мы выполняем капитальную замену коммуникаций, выравнивание высоких стен и укладку современных покрытий, создавая пространство, которое будет радовать вас комфортом и стилем долгие годы.',
  ],
  listIntroHtml: '<strong>Почему жители Автозаводской выбирают нас:</strong>',
  listItemsHtml: [
    'Профессиональный ремонт в "сталинках" и кирпичных домах 50-60-х годов.',
    'Опыт работы с современными планировками в новостройках бизнес-класса.',
    'Использование надежных систем водоснабжения Rehau и Tece.',
    'Монтаж стильной сантехники, душевых зон и инсталляций.',
    'Гарантия 2 года на все работы и фиксированная смета в договоре.',
  ],
  closingHtml:
    'Ремонт санузла на Автозаводской с нашей командой — это надежность и качество. Мы берем на себя все этапы: от демонтажа до клининга. Оставьте заявку на бесплатный замер и получите профессиональную консультацию по вашему проекту.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли менять старые трубы в "сталинке" на Автозаводской?',
  answer:
    'Да, в домах старой постройки трубы часто находятся в аварийном состоянии. Мы рекомендуем их полную замену на современные материалы для вашей безопасности.',
},
{
  question: 'Работаете ли вы с крупноформатным керамогранитом?',
  answer:
    'Да, наши мастера обладают высокой квалификацией и оборудованием для качественной укладки плитки любого формата.',
},
{
  question: 'Как долго длится ремонт ванной комнаты под ключ?',
  answer:
    'В зависимости от сложности и состояния помещения, ремонт занимает от 18 до 25 рабочих дней.',
},
{
  question: 'Помогаете ли вы с закупкой материалов?',
  answer:
    'Да, мы можем полностью скомплектовать объект черновыми и чистовыми материалами, предоставив наши партнерские скидки.',
},
{
  question: 'Бесплатен ли выезд мастера на замер?',
  answer:
    'Да, выезд нашего технического специалиста для замеров и консультации в районе Автозаводская осуществляется бесплатно.',
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
  slug: 'remont-sanuzla-avtozavodskaya',
  path: '/remont-sanuzla-avtozavodskaya/',
  canonicalPath: '/remont-sanuzla-avtozavodskaya/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Автозаводская | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Автозаводская | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-avtozavodskaya',
        title: 'Ремонт санузла у станции метро Автозаводская',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов на Автозаводской', href: '/remont-sanuzla-avtozavodskaya/', isActive: true }] }),
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

