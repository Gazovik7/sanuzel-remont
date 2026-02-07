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
  summaryTitle: 'Ремонт ванной комнаты в рассрочку: комфорт сегодня, оплата частями',
  paragraphsHtml: [
    'Желание обновить ванную часто упирается в необходимость крупных единовременных вложений. Мы предлагаем решение — <strong>ремонт ванной комнаты в рассрочку</strong>. Теперь вам не нужно копить годами или откладывать замену текущих труб на потом. Начните пользоваться обновленным и безопасным санузлом уже через 2-3 недели.',
    'Мы предлагаем прозрачные условия финансирования без скрытых комиссий и переплат. Весь процесс максимально прост: мы составляем подробную смету, фиксируем стоимость работ и материалов, и вы выплачиваете сумму комфортными платежами в течение согласованного срока. Это позволяет не экономить на качестве материалов и выбрать именно ту сантехнику, о которой вы мечтали.',
  ],
  listIntroHtml: '<strong>Почему ремонт в рассрочку — это выгодно:</strong>',
  listItemsHtml: [
    'Фиксация цены: стоимость ремонта не изменится из-за инфляции или роста цен на материалы.',
    'Возможность сделать капитальный ремонт сразу, не разбивая его на этапы.',
    'Отсутствие первого взноса или минимальный аванс (в зависимости от программы).',
    'Быстрое оформление договора и выход бригады на объект.',
    'Никаких справок о доходах и сложных банковских процедур.',
  ],
  closingHtml:
    'Ремонт в рассрочку — это инвестиция в ваш уют и спокойствие. Мы берем на себя все гарантийные обязательства в полном объеме, независимо от формы оплаты. Свяжитесь с нами, чтобы получить расчет ежемесячного платежа для вашей ванной комнаты.',
};


const PAGE_FAQ: FaqItem[] = [{
  question: 'На какой срок предоставляется рассрочка на ремонт?',
  answer:
    'Мы предлагаем различные программы рассрочки на срок от 3 до 12 месяцев. Вы можете выбрать наиболее комфортный для вас период и размер ежемесячного платежа.',
},
{
  question: 'Есть ли переплата при оплате ремонта частями?',
  answer:
    'В рамках нашей стандартной программы рассрочки переплата отсутствует. Вы платите ровно ту сумму, которая указана в итоговой смете и договоре.',
},
{
  question: 'Нужно ли ехать в банк для оформления рассрочки?',
  answer:
    'Нет, в большинстве случаев все документы оформляются прямо у вас дома при подписании договора на ремонт. Это экономит ваше время и делает процесс максимально удобным.',
},
{
  question: 'Можно ли погасить рассрочку досрочно?',
  answer:
    'Да, вы можете выплатить оставшуюся сумму в любой момент без каких-либо штрафов и дополнительных комиссий.',
},
{
  question: 'Распространяется ли рассрочка на стоимость материалов?',
  answer:
    'Да, рассрочка может покрывать как стоимость работ, так и стоимость черновых и чистовых материалов, если вы заказываете их через нашу компанию.',
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
  slug: 'remont-vannoy-komnaty-v-rassrochku',
  path: '/remont-vannoy-komnaty-v-rassrochku/',
  canonicalPath: '/remont-vannoy-komnaty-v-rassrochku/',
  seo: {
    title: 'Ремонт ванной комнаты в рассрочку в Москве | Ванная комната под ключ в рассрочку',
    description: 'Ремонт ванной комнаты в рассрочку | Бесплатный выезд сантехника | Гарантия до 3 лет | Быстрый ремонт от 1 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-vannoy-komnaty-v-rassrochku',
        title: 'Ремонт ванной комнаты в рассрочку под ключ в Москве',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов и ванных в рассрочку', href: '/remont-vannoy-komnaty-v-rassrochku/', isActive: true }] }),
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

