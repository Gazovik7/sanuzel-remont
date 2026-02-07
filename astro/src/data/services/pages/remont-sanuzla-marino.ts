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
  summaryTitle: 'Профессиональный ремонт санузла в Марьино',
  paragraphsHtml: [
    'Район <strong>Марьино</strong> — один из крупнейших жилых массивов Москвы с преобладанием современной панельной застройки. Ремонт санузла в таких домах требует глубокого понимания особенностей сантехкабин и умения максимально эффективно использовать имеющуюся площадь. Мы предлагаем жителям Марьино качественные услуги по обновлению ванных комнат и туалетов под ключ.',
    'Наши бригады постоянно работают на объектах на Люблинской улице, Новомарьинской и улице Перерва. Мы отлично знакомы с планировками домов серий П-44Т, КОПЭ и других, предлагая проверенные решения по разводке коммуникаций и финишной отделке, которые прослужат десятилетия.',
  ],
  listIntroHtml: '<strong>Наши компетенции при ремонте санузлов в Марьино:</strong>',
  listItemsHtml: [
    'Бережный демонтаж и оперативный вывоз строительного мусора.',
    'Капитальная замена труб водоснабжения с использованием систем Rehau.',
    'Профессиональная укладка плитки и керамогранита любой сложности.',
    'Установка и подключение инсталляций, ванн и душевых ограждений.',
    'Монтаж систем защиты от протечек для безопасности вашей квартиры.',
  ],
  closingHtml:
    'Ремонт санузла в Марьино с нашей командой — это отсутствие хлопот и превосходный результат. Мы фиксируем итоговую стоимость в договоре и гарантируем высокое качество работ. Закажите бесплатный замер вашего санузла прямо сейчас!',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли сносить сантехкабину в доме серии П-44Т?',
  answer:
    'Снос сантехкабины позволяет увеличить высоту потолка и выиграть немного места по периметру. Мы оцениваем необходимость этого шага индивидуально, исходя из ваших пожеланий.',
},
{
  question: 'Как долго длится стандартный ремонт ванной и туалета в Марьино?',
  answer:
    'В среднем ремонт "под ключ" в типовом доме этого района занимает от 12 до 18 рабочих дней.',
},
{
  question: 'Помогаете ли вы с закупкой черновых материалов?',
  answer:
    'Да, мы полностью берем на себя подбор, закупку и доставку качественных черновых материалов, предоставляя все отчетные документы.',
},
{
  question: 'Какую гарантию вы даете на сантехнические работы?',
  answer:
    'На все виды скрытых сантехнических работ мы предоставляем официальную гарантию сроком 2 года.',
},
{
  question: 'Бесплатен ли выезд мастера на замер в Марьино?',
  answer:
    'Да, выезд нашего технического специалиста для осмотра и консультации в районе Марьино осуществляется абсолютно бесплатно.',
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
  slug: 'remont-sanuzla-marino',
  path: '/remont-sanuzla-marino/',
  canonicalPath: '/remont-sanuzla-marino/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Марьино | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Марьино | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-marino',
        title: 'Ремонт санузла у станции метро Марьино',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Марьино', href: '/remont-sanuzla-marino/', isActive: true }] }),
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

