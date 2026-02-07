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
  summaryTitle: 'Современный ремонт санузлов в Котельниках',
  paragraphsHtml: [
    'Город <strong>Котельники</strong> — это территория масштабного строительства, где каждый новый дом требует особого внимания к инженерным коммуникациям. Мы специализируемся на ремонте санузлов в жилых комплексах <strong>"Белая Дача Парк"</strong>, <strong>"Оранж Парк"</strong>, <strong>"Кузьминский лес"</strong> и других. Наши мастера знают все тонкости работы с современными материалами, которые не боятся усадки новых зданий.',
    'Благодаря близости к крупнейшим строительным гипермаркетам, таким как <strong>"Леруа Мерлен"</strong> и <strong>"Петрович"</strong> в районе Белой Дачи, мы обеспечиваем максимально быструю доставку материалов и комплектацию объекта всем необходимым. Мы создаем функциональные интерьеры, в которых каждый сантиметр пространства используется с умом.',
  ],
  listIntroHtml: '<strong>Наши преимущества при работе в Котельниках:</strong>',
  listItemsHtml: [
    'Глубокое знание планировок в новостройках ГК ПИК и ГК Самолет в этом районе.',
    'Профессиональный монтаж систем защиты от протечек и коллекторных узлов.',
    'Идеальная укладка широкоформатного керамогранита с запилом углов под 45 градусов.',
    'Соблюдение всех регламентов управляющих компаний по шумным работам и вывозу мусора.',
    'Бесплатный выезд инженера-сметчика в день обращения.',
  ],
  closingHtml:
    'Ремонт санузла в Котельниках с нашей командой — это гарантия спокойствия и безупречного результата. Позвоните нам сегодня, чтобы записаться на бесплатный замер и начать путь к ванной вашей мечты.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужна ли гидроизоляция в новостройке Котельников?',
  answer:
    'Да, качественная гидроизоляция обязательна для защиты конструкции дома и предотвращения протечек к соседям. Мы выполняем её согласно всем строительным нормам.',
},
{
  question: 'Как быстро мастер может приехать на замер в Котельники?',
  answer:
    'Наши специалисты работают в этом направлении ежедневно. Выезд замерщика возможен в день обращения или на следующий день.',
},
{
  question: 'Помогаете ли вы со скидками на сантехнику и плитку?',
  answer:
    'Да, наши клиенты могут воспользоваться партнерскими скидками на покупку материалов в крупнейших сетях, расположенных в Котельниках.',
},
{
  question: 'Сколько времени занимает ремонт санузла под ключ?',
  answer:
    'В среднем ремонт ванной комнаты и туалета в новостройке занимает от 14 до 20 рабочих дней.',
},
{
  question: 'Бесплатен ли выезд мастера на замер?',
  answer:
    'Да, выезд нашего технического специалиста для осмотра и консультации в Котельниках осуществляется совершенно бесплатно.',
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
  slug: 'remont-sanuzla-kotelniki',
  path: '/remont-sanuzla-kotelniki/',
  canonicalPath: '/remont-sanuzla-kotelniki/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Котельники | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Котельники | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-kotelniki',
        title: 'Ремонт санузла у станции метро Котельники',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Котельниках', href: '/remont-sanuzla-kotelniki/', isActive: true }] }),
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

