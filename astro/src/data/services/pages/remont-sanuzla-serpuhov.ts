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
  summaryTitle: 'Профессиональный ремонт ванных комнат в Серпухове',
  paragraphsHtml: [
    'Город <strong>Серпухов</strong> — один из древнейших и красивейших городов Подмосковья на берегах Оки. Мы предлагаем жителям города качественный ремонт санузлов, сочетающий современные технологии и бережное отношение к архитектурным особенностям зданий. Наша команда работает во всех районах: от <strong>Ивановских Двориков</strong> и <strong>Ногинки</strong> до исторического центра и района <strong>Красный Текстильщик</strong>.',
    'Благодаря отлаженной логистике по Симферопольскому шоссе, мы обеспечиваем бесперебойную поставку материалов и соблюдение жестких графиков работ. Мы понимаем специфику как кирпичных домов середины прошлого века, так и современных монолитных новостроек Серпухова.',
  ],
  listIntroHtml: '<strong>Преимущества ремонта с нашей командой в Серпухове:</strong>',
  listItemsHtml: [
    'Бесплатный выезд инженера для замера и составления сметы в любую точку города.',
    'Опыт работы со сложными инженерными сетями в исторической части города.',
    'Профессиональный монтаж сантехники ведущих мировых брендов.',
    'Строгий контроль качества на каждом этапе: от демонтажа до затирки швов.',
    'Фиксированная стоимость работ, которая не меняется в процессе ремонта.',
  ],
  closingHtml:
    'Ваша ванная комната в Серпухове может стать настоящим произведением искусства. Доверьте ремонт профессионалам с многолетним опытом. Оставьте заявку, и мы подготовим для вас индивидуальное предложение.',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'Работаете ли вы в частном секторе в черте Серпухова?',
    answer: 'Да, мы выполняем ремонт санузлов в частных домах и коттеджах. Наши специалисты имеют опыт монтажа автономных систем канализации и водоснабжения внутри помещения.',
  },
  {
    question: 'Как быстро вы можете начать работы в Ивановских Двориках?',
    answer: 'После замера и подписания договора мы обычно готовы выйти на объект в течение 3-5 рабочих дней. Материалы закупаются и доставляются параллельно с подготовительными работами.',
  },
  {
    question: 'Где вы закупаете материалы для ремонта в Серпухове?',
    answer: 'Мы сотрудничаем с крупными строительными гипермаркетами на Симферопольском шоссе и местными базами. Это позволяет нам предлагать клиентам выгодные цены на черновую и чистовую отделку.',
  },
  {
    question: 'Сможете ли вы заменить старые трубы в "сталинке" на Ногинке?',
    answer: 'Безусловно. Мы выполняем полную замену старых коммуникаций на современные трубы из сшитого полиэтилена (Rehau) или полипропилена, что гарантирует отсутствие протечек на десятилетия.',
  },
  {
    question: 'Выезжаете ли вы в Протвино или Пущино?',
    answer: 'Да, мы обслуживаем не только Серпухов, но и соседние города — Протвино, Пущино, Чехов и прилегающие населенные пункты.',
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
  slug: 'remont-sanuzla-serpuhov',
  path: '/remont-sanuzla-serpuhov/',
  canonicalPath: '/remont-sanuzla-serpuhov/',
  seo: {
    title: 'Ремонт санузла в Серпухове под ключ | Цена от мастеров | Ремонт ванной комнаты',
    description:
      'Ремонт санузла в Серпухове под ключ | Бесплатный выезд мастера | Гарантия 2 года | Без предоплаты | Лучшие цены на ремонт санузлов ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-serpuhov',
        title: 'Ремонт санузла в Серпухове',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Серпухове', href: '/remont-sanuzla-serpuhov/', isActive: true }] }),
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
