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
  summaryTitle: 'Профессиональный ремонт санузла в Некрасовке',
  paragraphsHtml: [
    'Район <strong>Некрасовка</strong> — это один из самых быстрорастущих районов Москвы, где тысячи новоселов ежедневно решают задачи по обустройству своего жилья. Ремонт санузла в новых домах этого района требует знания специфики современных инженерных систем и использования технологий, устойчивых к возможной усадке здания. Мы предлагаем профессиональный подход к отделке ванных комнат "с нуля".',
    'Наши мастера специализируются на качественном ремонте в ЖК района Некрасовка. Мы выполняем проектирование и монтаж разводки труб, гидроизоляцию, выравнивание стен и финишную отделку любой сложности. Мы понимаем важность быстрых сроков и предлагаем решения, позволяющие заселиться в обновленную квартиру в кратчайшие сроки.',
  ],
  listIntroHtml: '<strong>Почему ремонт санузла в Некрасовке стоит заказать у нас:</strong>',
  listItemsHtml: [
    'Профессиональная разводка труб водоснабжения и канализации Rehau.',
    'Использование эластичных клеевых составов, предотвращающих трещины в плитке.',
    'Монтаж стильных душевых зон, инсталляций и гигиенических душей.',
    'Бесплатный выезд замерщика и оперативное составление сметы.',
    'Чистота на объекте и ответственное отношение к материалам заказчика.',
  ],
  closingHtml:
    'Сделайте свой первый ремонт в Некрасовке идеальным. Мы гарантируем высокое качество исполнения, прозрачные условия и надежность каждой детали. Закажите бесплатную консультацию технолога прямо сейчас!',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли переделывать гидроизоляцию от застройщика?',
  answer:
    'В большинстве случаев застройщики делают минимальную гидроизоляцию. Мы рекомендуем наносить полноценный защитный слой для обеспечения полной безопасности.',
},
{
  question: 'Как долго длится ремонт санузла в новостройке Некрасовки?',
  answer:
    'В среднем ремонт ванной комнаты и туалета "с нуля" занимает от 14 до 20 дней.',
},
{
  question: 'Помогаете ли вы со скидками на материалы?',
  answer:
    'Да, наши клиенты могут воспользоваться партнерскими скидками на покупку плитки, сантехники и черновых материалов в крупных сетях.',
},
{
  question: 'Выполняете ли вы монтаж систем защиты от протечек?',
  answer:
    'Да, мы настоятельно рекомендуем установку систем типа "Нептун" или "Аквасторож" для предотвращения заливов.',
},
{
  question: 'Бесплатен ли выезд инженера на замер в Некрасовку?',
  answer:
    'Да, выезд нашего технического специалиста для осмотра и замера в районе Некрасовка осуществляется совершенно бесплатно.',
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
  slug: 'remont-sanuzla-nekrasovka',
  path: '/remont-sanuzla-nekrasovka/',
  canonicalPath: '/remont-sanuzla-nekrasovka/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Некрасовка | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Некрасовка | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ 8 (495) 137-52-39',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-nekrasovka',
        title: 'Ремонт санузла у станции метро Некрасовка',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Некрасовке', href: '/remont-sanuzla-nekrasovka/', isActive: true }] }),
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

