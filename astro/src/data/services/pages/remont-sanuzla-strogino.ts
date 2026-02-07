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
  summaryTitle: 'Современный ремонт санузла в Строгино',
  paragraphsHtml: [
    'Район <strong>Строгино</strong> — один из самых экологически чистых и комфортных районов Москвы с просторными квартирами и современными планировками. Ремонт санузла здесь часто предполагает создание стильного и технологичного пространства, которое будет радовать глаз и обеспечивать максимальный уют.',
    'Мы предлагаем жителям Строгино услуги по высококачественному ремонту ванных комнат и туалетов. Наши специалисты имеют большой опыт работы в домах на Строгинском бульваре, улице Исаковского и Таллинской. Мы следим за последними тенденциями в дизайне интерьеров и предлагаем лучшие решения по зонированию и освещению вашего санузла.',
  ],
  listIntroHtml: '<strong>Наши услуги для жителей района Строгино:</strong>',
  listItemsHtml: [
    'Разработка эргономичных планировок с учетом особенностей современных домов.',
    'Укладка керамогранита, мозаики и плитки любой сложности.',
    'Монтаж систем инсталляции и подвесной сантехники.',
    'Установка душевых зон со стеклянными перегородками и трапами.',
    'Организация скрытых ниш и систем хранения для бытовой химии.',
  ],
  closingHtml:
    'Живите в комфорте в лучшем районе города. Мы гарантируем аккуратность, соблюдение всех строительных технологий и превосходный результат. Оставьте заявку на бесплатный замер в Строгино, и мы подготовим для вас выгодное коммерческое предложение.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Можно ли установить душевую кабину вместо ванны в Строгино?',
  answer:
    'Да, это популярное решение. Мы поможем грамотно организовать слив и подберем душевое ограждение, которое идеально впишется в пространство.',
},
{
  question: 'Какую гарантию вы даете на сантехнические работы?',
  answer:
    'На все виды скрытых сантехнических работ мы предоставляем официальную гарантию сроком 2 года.',
},
{
  question: 'Работаете ли вы с материалами заказчика?',
  answer:
    'Да, мы можем выполнить ремонт из ваших материалов. Также мы готовы предложить закупку черновых материалов по оптовым ценам.',
},
{
  question: 'Как защитить ремонт от протечек?',
  answer:
    'Мы рекомендуем установку современных систем (например, "Нептун" или "Аквасторож"), которые автоматически перекрывают воду при обнаружении влаги на полу.',
},
{
  question: 'Сколько стоит вызов замерщика в Строгино?',
  answer:
    'Выезд нашего специалиста для проведения замеров и консультации в районе Строгино абсолютно бесплатен.',
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
  slug: 'remont-sanuzla-strogino',
  path: '/remont-sanuzla-strogino/',
  canonicalPath: '/remont-sanuzla-strogino/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Строгино | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Строгино | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-strogino',
        title: 'Ремонт санузла у станции метро Строгино',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Строгино', href: '/remont-sanuzla-strogino/', isActive: true }] }),
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

