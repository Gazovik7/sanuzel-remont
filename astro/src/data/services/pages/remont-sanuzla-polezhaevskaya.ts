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
  summaryTitle: 'Профессиональный ремонт санузла на Полежаевской',
  paragraphsHtml: [
    'Район метро <strong>Полежаевская</strong> и Хорошёвское шоссе — это уникальное сочетание солидной сталинской застройки, кирпичных домов 70-х годов и ультрасовременных жилых комплексов. Ремонт санузла в этом районе требует гибкого подхода: от глубокой реконструкции инженерных систем в старом фонде до высокотехнологичной отделки в новостройках.',
    'Мы предлагаем жителям Хорошёво-Мневников качественные услуги по ремонту ванных комнат под ключ. Наши мастера обладают опытом работы с любыми типами перекрытий и инженерных сетей, гарантируя надежность и эстетичный вид вашего санузла на долгие годы.',
  ],
  listIntroHtml: '<strong>Почему жители района Полежаевской выбирают нас:</strong>',
  listItemsHtml: [
    'Индивидуальный подход к планировке в зависимости от серии дома.',
    'Использование качественных материалов, устойчивых к влажной среде.',
    'Профессиональный монтаж сантехники любой сложности.',
    'Строгое соблюдение графиков шумных работ и чистоты в подъезде.',
    'Прозрачное ценообразование и отсутствие скрытых платежей.',
  ],
  closingHtml:
    'Ремонт санузла на Полежаевской — это залог уюта и функциональности вашего дома. Мы берем на себя все этапы: от замеров до финального клининга. Закажите бесплатный выезд инженера для консультации и составления сметы.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Сложно ли делать ремонт в сталинском доме у Полежаевской?',
  answer:
    'Ремонт в сталинках требует особого внимания к демонтажу и замене старых коммуникаций. Мы имеем большой опыт таких работ и гарантируем надежность всех инженерных узлов.',
},
{
  question: 'Как быстро вы можете начать ремонт?',
  answer:
    'Обычно выход бригады на объект возможен в течение 3-5 дней после согласования сметы и подписания договора.',
},
{
  question: 'Выполняете ли вы объединение ванной и туалета?',
  answer:
    'Да, мы выполняем демонтаж перегородок и создание единого пространства санузла с соблюдением всех строительных норм.',
},
{
  question: 'Какие материалы вы используете для разводки воды?',
  answer:
    'Мы рекомендуем и используем проверенные системы из сшитого полиэтилена (например, Rehau), которые обеспечивают максимальную долговечность и надежность.',
},
{
  question: 'Бесплатен ли замер в районе Полежаевской?',
  answer:
    'Да, наш специалист приедет для проведения замеров и составления предварительной сметы совершенно бесплатно.',
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
  slug: 'remont-sanuzla-polezhaevskaya',
  path: '/remont-sanuzla-polezhaevskaya/',
  canonicalPath: '/remont-sanuzla-polezhaevskaya/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Площадь Героев | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Площадь Героев | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-polezhaevskaya',
        title: 'Ремонт санузла у станции метро Площадь Героев',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов у Полежаевской', href: '/remont-sanuzla-polezhaevskaya/', isActive: true }] }),
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

