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
  summaryTitle: 'Профессиональный ремонт санузла в Люблино под ключ',
  paragraphsHtml: [
    'Район <strong>Люблино</strong> — это крупный жилой массив на юго-востоке столицы с преобладанием типовой застройки 80-90-х годов. Ремонт санузла в этом районе часто требует профессионального подхода к обновлению инженерных систем и грамотного использования пространства типовых ванных комнат. Мы предлагаем жителям Люблино качественные услуги по капитальной отделке санузлов.',
    'Наши мастера имеют большой опыт работы в домах на улице Люблинская, Краснодарская и Ставропольская. Мы знаем все нюансы работы с коммуникациями в панельках популярных серий и предлагаем решения, которые позволят вам забыть о протечках и дискомфорте на долгие годы, обеспечив безупречный вид вашей ванной комнаты.',
  ],
  listIntroHtml: '<strong>Почему ремонт санузла в Люблино заказывают у нас:</strong>',
  listItemsHtml: [
    'Полная замена труб водоснабжения на современные системы (Rehau, полипропилен).',
    'Профессиональная укладка керамической плитки и керамогранита.',
    'Монтаж систем инсталляции, ванн и душевых ограждений.',
    'Установка влагозащищенных потолков со встроенным освещением.',
    'Работа по официальному договору с фиксированной ценой и гарантией 2 года.',
  ],
  closingHtml:
    'Сделайте свой санузел в Люблино современным и функциональным. Мы берем на себя все этапы: от демонтажа до финальной уборки. Закажите бесплатный выезд замерщика для оценки состояния вашего санузла прямо сегодня.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли менять полотенцесушитель при ремонте в Люблино?',
  answer:
    'В домах района мы рекомендуем замену старых водяных полотенцесушителей на новые или установку электрических моделей для повышения надежности системы.',
},
{
  question: 'Как быстро вы можете начать ремонт?',
  answer:
    'Обычно выход бригады на объект в Люблино возможен в течение 3-5 дней после подписания договора и закупки необходимых материалов.',
},
{
  question: 'Помогаете ли вы с закупкой черновых материалов?',
  answer:
    'Да, мы полностью берем на себя подбор, закупку и доставку качественных черновых материалов, предоставляя все отчетные документы.',
},
{
  question: 'Сколько времени занимает ремонт стандартной ванной комнаты?',
  answer:
    'В среднем ремонт "под ключ" в типовом доме Люблино занимает от 12 до 18 рабочих дней.',
},
{
  question: 'Бесплатен ли выезд мастера на замер в Люблино?',
  answer:
    'Да, выезд нашего технического специалиста для осмотра и консультации в районе Люблино осуществляется бесплатно.',
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
  slug: 'remont-sanuzla-lyublino',
  path: '/remont-sanuzla-lyublino/',
  canonicalPath: '/remont-sanuzla-lyublino/',
  seo: {
    title: 'Ремонт санузла в Москве у станции метро Люблино | Ремонт ванной комнаты и туалета под ключ',
    description:
      'Ремонт санузла в Москве у станции метро Люблино | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-lyublino',
        title: 'Ремонт санузла у станции метро Люблино',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Люблино', href: '/remont-sanuzla-lyublino/', isActive: true }] }),
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

