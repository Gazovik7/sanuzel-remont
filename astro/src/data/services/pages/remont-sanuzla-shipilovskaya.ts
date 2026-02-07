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
  summaryTitle: 'Доступный ремонт санузла на Шипиловской',
  paragraphsHtml: [
    'Район метро <strong>Шипиловская</strong> — это крупный жилой массив на юге Москвы с типовой панельной застройкой. Ремонт санузла здесь часто требует практичных и долговечных решений, которые позволят обновить интерьер ванной комнаты без лишних затрат, при этом обеспечив полную надежность всех коммуникаций.',
    'Мы предлагаем жителям Зябликово и Шипиловской качественный ремонт санузлов под ключ. Наши бригады отлично знают особенности домов серий П-44 и КОПЭ, которые преобладают в этом районе. Мы поможем вам оптимально использовать пространство маленькой ванной, установим современную сантехнику и выполним аккуратную отделку в кратчайшие сроки.',
  ],
  listIntroHtml: '<strong>Почему жители Шипиловской выбирают нас:</strong>',
  listItemsHtml: [
    'Честные цены и прозрачная смета без скрытых доплат.',
    'Быстрая замена труб водоснабжения и канализации.',
    'Аккуратная укладка плитки с ровными швами.',
    'Монтаж практичных натяжных потолков с точечным освещением.',
    'Гарантия качества на все выполненные работы 2 года.',
  ],
  closingHtml:
    'Ремонт санузла на Шипиловской — это удобно и выгодно с нашей командой. Мы берем на себя весь процесс: от закупки материалов до вывоза мусора. Позвоните нам прямо сейчас, чтобы заказать бесплатный замер и расчет стоимости вашего ремонта.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли менять старую проводку в ванной на Шипиловской?',
  answer:
    'В домах старой постройки мы рекомендуем замену электропроводки на новую, медную, с обязательной установкой влагозащищенных розеток и УЗО.',
},
{
  question: 'Как долго длится ремонт ванной в панельном доме?',
  answer:
    'Типовой ремонт ванной комнаты на Шипиловской занимает от 12 до 18 дней в зависимости от состояния стен и коммуникаций.',
},
{
  question: 'Помогаете ли вы с доставкой материалов в Зябликово?',
  answer:
    'Да, мы можем полностью взять на себя закупку, доставку и подъем всех необходимых строительных материалов.',
},
{
  question: 'Можно ли использовать пластиковые панели для отделки туалета?',
  answer:
    'Да, это бюджетный и быстрый вариант. Однако для долговечного результата мы рекомендуем укладку керамической плитки.',
},
{
  question: 'Бесплатен ли выезд замерщика на Шипиловскую?',
  answer:
    'Да, наш специалист приедет в любую точку района метро Шипиловская для проведения замеров бесплатно.',
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
  slug: 'remont-sanuzla-shipilovskaya',
  path: '/remont-sanuzla-shipilovskaya/',
  canonicalPath: '/remont-sanuzla-shipilovskaya/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Шипиловская | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Шипиловская | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-shipilovskaya',
        title: 'Ремонт санузла у станции метро Шипиловская',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов на Шипиловской', href: '/remont-sanuzla-shipilovskaya/', isActive: true }] }),
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

