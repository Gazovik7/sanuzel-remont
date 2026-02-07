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
  summaryTitle: 'Ремонт ванной комнаты у метро Волгоградский проспект',
  paragraphsHtml: [
    'Живете в районе <strong>Волгоградского проспекта</strong>? Мы предлагаем профессиональный ремонт санузлов и ванных комнат в вашем округе. Наши бригады отлично знают специфику жилого фонда ЮВАО: от сталинских домов на проспекте до типовых панельных многоэтажек в Текстильщиках и Кузьминках.',
    'Благодаря оптимизированной логистике по Волгоградскому шоссе, мы гарантируем оперативный завоз материалов и соблюдение сроков. Вы получаете качество московского уровня без переплат за удаленность или сложность доставки.',
  ],
  listIntroHtml: '<strong>Преимущества работы с нами на Волгоградском проспекте:</strong>',
  listItemsHtml: [
    'Быстрый выезд сметчика: наш специалист может быть у вас уже через пару часов.',
    'Опыт работы с планировками домов серий II-18, И-209А и П-44, распространенных в районе.',
    'Строгое соблюдение закона о тишине, актуального для густонаселенных кварталов.',
    'Помощь с отключением стояков через местные управляющие компании (Жилищник района).',
    'Организация вывоза строительного мусора на специализированные полигоны.',
  ],
  closingHtml:
    'Закажите ремонт санузла у профессионалов, работающих рядом с вами. Оставьте заявку, и мы бесплатно рассчитаем смету с учетом всех особенностей вашей квартиры.',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'Вы работаете только у самого метро или по всему району?',
    answer: 'Мы работаем по всему протяжению Волгоградского проспекта, а также в прилегающих районах: Текстильщики, Кузьминки, Дубровка. Локация не влияет на стоимость работ.',
  },
  {
    question: 'Есть ли наценка за выезд мастера в ЮВАО?',
    answer: 'Нет, выезд инженера-сметчика к метро Волгоградский проспект и в соседние районы абсолютно бесплатный и ни к чему вас не обязывает.',
  },
  {
    question: 'Где вы закупаете материалы для ремонта в этом районе?',
    answer: 'Мы сотрудничаем с крупными поставщиками и можем организовать доставку напрямую со складов. Также нам удобно работать с гипермаркетами, расположенными на ТТК и МКАД, что ускоряет логистику.',
  },
  {
    question: 'Как решается вопрос с парковкой у дома?',
    answer: 'Наши мастера самостоятельно решают вопросы с парковкой. Если двор закрыт шлагбаумом, мы заранее обсудим возможность временного заезда для разгрузки материалов.',
  },
  {
    question: 'Сколько времени займет капитальный ремонт раздельного санузла?',
    answer: 'В типовых домах этого района полный комплекс работ обычно занимает от 15 до 25 дней, в зависимости от сложности плиточных работ и состояния коммуникаций.',
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
  slug: 'remont-sanuzla-volgogradskiy-prospekt',
  path: '/remont-sanuzla-volgogradskiy-prospekt/',
  canonicalPath: '/remont-sanuzla-volgogradskiy-prospekt/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Волгоградский проспект | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Волгоградский проспект | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-volgogradskiy-prospekt',
        title: 'Ремонт санузла у станции метро Волгоградский проспект',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов у Волгоградского проспекта', href: '/remont-sanuzla-volgogradskiy-prospekt/', isActive: true }] }),
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

