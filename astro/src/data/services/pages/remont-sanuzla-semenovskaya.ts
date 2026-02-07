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
  summaryTitle: 'Профессиональный ремонт санузла на Семёновской',
  paragraphsHtml: [
    'Район метро <strong>Семёновская</strong> в Восточном округе Москвы — это район с богатой промышленной историей и множеством крепких кирпичных домов середины прошлого века. Ремонт санузла в таких домах часто требует основательного подхода: от выравнивания толстых слоев старой штукатурки до полной замены инженерных систем, которые служили десятилетиями.',
    'Мы предлагаем жителям Соколиной горы профессиональный ремонт ванных комнат под ключ. Наши мастера имеют большой опыт работы в домах на Щербаковской и Измайловском валу. Мы гарантируем надежность всех сантехнических узлов и безупречную чистовую отделку, которая подчеркнет солидность вашего жилья.',
  ],
  listIntroHtml: '<strong>Особенности наших работ в районе Семёновской:</strong>',
  listItemsHtml: [
    'Тщательная подготовка и выравнивание стен в кирпичных домах.',
    'Полная замена труб водоснабжения и канализации на современные аналоги.',
    'Монтаж скрытых сантехнических шкафов и инсталляций.',
    'Качественная укладка плитки, мозаики или декоративного камня.',
    'Соблюдение всех норм безопасности при работе с электрикой и вентиляцией.',
  ],
  closingHtml:
    'Надежный ремонт на десятилетия — это то, что мы предлагаем жителям района Семёновская. Мы работаем по договору и предоставляем полную гарантию на все виды работ. Оставьте заявку на бесплатный замер, и наш мастер приедет к вам в удобное время.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли менять полотенцесушитель в кирпичном доме на Семёновской?',
  answer:
    'Да, замена старого водяного полотенцесушителя значительно повышает надежность системы и исключает риск протечек в будущем.',
},
{
  question: 'Как долго длится ремонт ванной в старом кирпичном доме?',
  answer:
    'Из-за необходимости тщательного выравнивания стен ремонт может занять от 15 до 22 рабочих дней.',
},
{
  question: 'Можно ли сделать душевую зону в строительном исполнении?',
  answer:
    'Да, в большинстве кирпичных домов это технически возможно. Мы выполним качественную гидроизоляцию и монтаж трапа.',
},
{
  question: 'Работаете ли вы по выходным в районе Семёновской?',
  answer:
    'Мы можем проводить некоторые виды тихих работ в субботу, строго соблюдая московский закон о тишине.',
},
{
  question: 'Бесплатен ли выезд инженера на замер?',
  answer:
    'Да, выезд нашего специалиста на Семёновскую для замера и консультации осуществляется совершенно бесплатно.',
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
  slug: 'remont-sanuzla-semenovskaya',
  path: '/remont-sanuzla-semenovskaya/',
  canonicalPath: '/remont-sanuzla-semenovskaya/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Семёновская | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Семёновская | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-semenovskaya',
        title: 'Ремонт санузла у станции метро Семёновская',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов на Семёновской', href: '/remont-sanuzla-semenovskaya/', isActive: true }] }),
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

