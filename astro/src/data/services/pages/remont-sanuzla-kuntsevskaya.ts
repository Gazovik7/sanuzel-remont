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
  summaryTitle: 'Профессиональный ремонт санузла у метро Кунцевская',
  paragraphsHtml: [
    'Район метро <strong>Кунцевская</strong> — это престижная локация на западе Москвы с высокими требованиями к качеству жилья. Ремонт санузла здесь часто предполагает использование премиальных материалов, инсталляций и сложных дизайнерских решений. Мы предлагаем жителям Кунцево профессиональный подход, соответствующий статусу их недвижимости.',
    'Наши мастера имеют большой опыт работы в кирпичных домах на Рублёвском шоссе, улице Ивана Франко и Кастанаевской. Мы специализируемся на высококачественной отделке, монтаже скрытых инженерных систем и установке элитной сантехники, гарантируя безупречный результат и долговечность каждой детали вашего санузла.',
  ],
  listIntroHtml: '<strong>Особенности наших работ в районе Кунцевская:</strong>',
  listItemsHtml: [
    'Разработка эргономичных планировок с учетом особенностей современных и старых домов.',
    'Монтаж надежных инженерных систем с использованием материалов Rehau и Tece.',
    'Идеальная укладка керамогранита, мозаики и декоративного камня.',
    'Установка систем защиты от протечек и "умного" освещения в санузле.',
    'Соблюдение полной чистоты на объекте и строгое выполнение графиков работ.',
  ],
  closingHtml:
    'Ваша ванная комната на Кунцевской заслуживает профессионального исполнения. Мы работаем по прозрачному договору с фиксированной ценой, обеспечивая высочайший уровень сервиса. Закажите бесплатный выезд инженера для консультации и замера уже сегодня.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Сложно ли делать ремонт в старых кирпичных домах у Кунцевской?',
  answer:
    'Ремонт в таких домах требует внимательного отношения к состоянию перекрытий и инженерных стояков. Мы имеем большой опыт реконструкции таких объектов и гарантируем надежность всех работ.',
},
{
  question: 'Как быстро вы можете начать ремонт в Кунцево?',
  answer:
    'Обычно выход бригады на объект возможен в течение 3-5 дней после согласования сметы и подписания договора.',
},
{
  question: 'Работаете ли вы с дизайн-проектами?',
  answer:
    'Да, мы имеем большой опыт реализации сложных дизайнерских решений, в точности соблюдая все технические и визуальные параметры проекта.',
},
{
  question: 'Какую гарантию вы предоставляете на работы?',
  answer:
    'На все виды сантехнических и отделочных работ мы даем официальную гарантию сроком 2 года.',
},
{
  question: 'Бесплатен ли выезд мастера на замер в Кунцево?',
  answer:
    'Да, выезд нашего технического специалиста для проведения замеров и консультации в районе Кунцевская осуществляется бесплатно.',
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
  slug: 'remont-sanuzla-kuntsevskaya',
  path: '/remont-sanuzla-kuntsevskaya/',
  canonicalPath: '/remont-sanuzla-kuntsevskaya/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Кунцевская | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Кунцевская | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-kuntsevskaya',
        title: 'Ремонт санузла у станции метро Кунцевская',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов у Кунцевской', href: '/remont-sanuzla-kuntsevskaya/', isActive: true }] }),
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

