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
  summaryTitle: 'Ремонт санузлов в Мытищах: качество выше ожиданий',
  paragraphsHtml: [
    'Выполняем ремонт ванных комнат и туалетов любой сложности в городе <strong>Мытищи</strong>. Наши бригады хорошо знакомы с местной застройкой — от престижных ЖК в районе <strong>Перловки</strong> и улицы <strong>Мира</strong> до новостроек на <strong>Ярославском шоссе</strong> (ЖК "Ярославский", "Скандинавский"). Мы гарантируем профессиональный подход и соблюдение всех строительных норм.',
    'Для жителей Мытищ мы предлагаем не просто укладку плитки, а комплексное решение: проектирование инженерных систем, грамотную разводку сантехники и установку современного оборудования. Благодаря отлаженной логистике, доставка материалов с Ярославского шоссе осуществляется в кратчайшие сроки.',
  ],
  listIntroHtml: '<strong>Преимущества ремонта в Мытищах с нашей командой:</strong>',
  listItemsHtml: [
    'Бесплатный выезд инженера для замера и консультации (работаем ежедневно).',
    'Опыт реализации проектов с душевыми поддонами в строительном исполнении.',
    'Профессиональная укладка керамогранита любого формата (до 120х60 и выше).',
    'Работаем без посредников — только штатные бригады с опытом от 7 лет.',
    'Полный фото- и видеоотчет о скрытых работах для вашего спокойствия.',
  ],
  closingHtml:
    'Сделайте первый шаг к идеальному санузлу в Мытищах. Оставьте заявку на замер, и наш специалист приедет к вам совершенно бесплатно в удобное для вас время.',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'Как быстро вы можете начать ремонт в Мытищах?',
    answer: 'Обычно мы готовы выйти на объект в течение 3-5 дней после подписания договора и закупки материалов.',
  },
  {
    question: 'Где в Мытищах лучше покупать сантехнику?',
    answer: 'Мы можем посоветовать проверенные магазины в районе ТЦ "Июнь" или организовать доставку напрямую со складов наших партнеров со скидкой.',
  },
  {
    question: 'Делаете ли вы технический шкаф за унитазом?',
    answer: 'Да, это одна из самых востребованных услуг. Мы делаем удобный доступ к коммуникациям с помощью рольставней или скрытых люков под плитку.',
  },
  {
    question: 'Можете ли вы установить теплый пол в ванной?',
    answer: 'Обязательно. Мы монтируем как электрические маты, так и инфракрасные полы с установкой терморегулятора в удобном для вас месте.',
  },
  {
    question: 'Работаете ли вы в Пироговском?',
    answer: 'Да, мы обслуживаем весь городской округ Мытищи, включая Пироговский и другие прилегающие населенные пункты.',
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
  slug: 'remont-sanuzla-mytishchi',
  path: '/remont-sanuzla-mytishchi/',
  canonicalPath: '/remont-sanuzla-mytishchi/',
  seo: {
    title: 'Ремонт санузла в Мытищах под ключ | Цена от мастеров | Ремонт ванной комнаты',
    description:
      'Ремонт санузла в Мытищах под ключ | Бесплатный выезд мастера | Гарантия 2 года | Без предоплаты | Лучшие цены на ремонт санузлов ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-mytishchi',
        title: 'Ремонт санузла в Мытищах',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Мытищах', href: '/remont-sanuzla-mytishchi/', isActive: true }] }),
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
