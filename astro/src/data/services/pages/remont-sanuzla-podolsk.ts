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
  summaryTitle: 'Качественный ремонт санузла в Подольске',
  paragraphsHtml: [
    'Город <strong>Подольск</strong> — крупнейший промышленный и жилой центр области. Мы выполняем профессиональный ремонт ванных комнат во всех районах Большого Подольска: <strong>Центральном</strong>, <strong>Силикатной</strong>, <strong>Кузнечиках</strong>, а также в микрорайонах <strong>Климовск</strong> и <strong>Львовский</strong>. Мы знаем, как работать и в старых "сталинках" на проспекте Ленина, и в панельных новостройках.',
    'Благодаря расположению наших баз на юге области и удобному выезду на Варшавское и Симферопольское шоссе, мы обеспечиваем бесперебойную поставку материалов. Вам не придется ждать доставки неделями.',
  ],
  listIntroHtml: '<strong>Преимущества работы с нами в Подольске:</strong>',
  listItemsHtml: [
    'Оперативный выезд сметчика в любую точку городского округа.',
    'Опыт работы с ветхими коммуникациями в старом фонде (замена стояков через перекрытие).',
    'Укладка плитки любой сложности: от мозаики до широкоформатного керамогранита.',
    'Монтаж систем инсталляции Geberit, Grohe и других брендов.',
    'Фиксированные цены и оплата по факту выполненных этапов.',
  ],
  closingHtml:
    'Ремонт санузла в Подольске — наша профильная задача. Мы сделаем вашу ванную комнату современной и безопасной. Оставьте заявку на бесплатный замер прямо сейчас.',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'Вы работаете в Кузнечиках?',
    answer: 'Да, микрорайон Кузнечики — один из самых активных районов нашей работы. Мы отлично знаем планировки в домах серии П-44Т, И-155 и других, построенных для военных.',
  },
  {
    question: 'Сколько стоит ремонт в Климовске?',
    answer: 'Климовск — это часть Подольска, поэтому цены там такие же, как и в центре города. Никаких наценок за удаленность.',
  },
  {
    question: 'Где покупать плитку в Подольске?',
    answer: 'В Подольске много хороших магазинов, например, "Молоток" или строительный рынок "Покров". Мы поможем с выбором и организацией доставки.',
  },
  {
    question: 'Делаете ли вы гидроизоляцию в новостройках?',
    answer: 'Обязательно. В новых домах возможна усадка, поэтому мы используем эластичную гидроизоляцию и демпферные ленты, чтобы защитить вас от протечек.',
  },
  {
    question: 'Можно ли перенести полотенцесушитель?',
    answer: 'Да, мы выполняем перенос водяных полотенцесушителей с применением сварки или резьбовых соединений (по согласованию с УК), а также монтаж электрических моделей.',
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
  slug: 'remont-sanuzla-podolsk',
  path: '/remont-sanuzla-podolsk/',
  canonicalPath: '/remont-sanuzla-podolsk/',
  seo: {
    title: 'Ремонт санузла в Подольске под ключ | Цена от мастеров | Ремонт ванной комнаты',
    description:
      'Ремонт санузла в Подольске под ключ | Бесплатный выезд мастера | Гарантия 2 года | Без предоплаты | Лучшие цены на ремонт санузлов ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-podolsk',
        title: 'Ремонт санузла в Подольске',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Подольске', href: '/remont-sanuzla-podolsk/', isActive: true }] }),
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
