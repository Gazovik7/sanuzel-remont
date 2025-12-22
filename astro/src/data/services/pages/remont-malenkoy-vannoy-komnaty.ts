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
  summaryTitle: 'Ремонт маленькой ванной комнаты: как сделать удобно и функционально',
  paragraphsHtml: [
    'Грамотный <strong>ремонт маленькой ванной комнаты</strong> позволяет эффективно использовать каждый метр пространства и избежать ощущения тесноты. В таких помещениях особенно важно продумать расположение сантехники, системы хранения и освещение.',
    'Мы выполняем ремонт небольших ванных комнат под ключ: подбираем компактную сантехнику, оптимальную плиточную раскладку и решения для визуального увеличения пространства. Все работы планируются заранее, чтобы даже маленькая ванная была удобной и практичной.',
  ],
  listIntroHtml: '<strong>Что обычно включает ремонт маленькой ванной комнаты:</strong>',
  listItemsHtml: [
    'Оптимизация планировки: компактное размещение ванны или душевой, раковины и стиральной машины.',
    'Замена коммуникаций: аккуратная разводка труб и электрики с учетом ограниченного пространства.',
    'Гидроизоляция и выравнивание поверхностей для надежной и долговечной отделки.',
    'Чистовая отделка: укладка плитки с визуальным расширением пространства за счет цвета и формата.',
    'Установка мебели и аксессуаров: зеркала, навесные шкафы и системы хранения.',
  ],
  closingHtml:
    'Стоимость ремонта маленькой ванной комнаты зависит от площади, выбранных материалов и сложности работ. Для предварительного расчета достаточно замеров или фото. После согласования фиксируем объем работ, сроки и стоимость в договоре.',
};


const PAGE_FAQ: FaqItem[] = [{
  question: 'Можно ли сделать ремонт маленькой ванной комнаты удобным?',
  answer:
    'Да, даже маленькую ванную комнату можно сделать удобной за счет грамотной планировки, компактной сантехники и продуманной системы хранения. Важно использовать каждый метр пространства без перегрузки помещения.',
},
{
  question: 'Что лучше выбрать для маленькой ванной — ванну или душевую?',
  answer:
    'Выбор зависит от ваших привычек и площади помещения. Душевая кабина экономит место и визуально расширяет пространство, а компактная ванна подойдет, если важно сохранить функциональность без ущерба комфорту.',
},
{
  question: 'Как визуально увеличить пространство маленькой ванной?',
  answer:
    'Для визуального увеличения пространства используются светлые оттенки плитки, крупные форматы без частых швов, зеркала и правильное освещение. Также важно минимизировать количество выступающих элементов.',
},
{
  question: 'Сколько стоит ремонт маленькой ванной комнаты?',
  answer:
    'Цена ремонта маленькой ванной комнаты зависит от состояния помещения, объема работ и выбранных материалов. Точная стоимость рассчитывается после замеров или анализа фото и видео.',
},
{
  question: 'Сколько времени занимает ремонт небольшой ванной?',
  answer:
    'В среднем ремонт маленькой ванной комнаты занимает от 2 до 4 недель. Сроки зависят от необходимости замены коммуникаций и сложности отделочных работ.',
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
  slug: 'remont-malenkoy-vannoy-komnaty',
  path: '/remont-malenkoy-vannoy-komnaty/',
  canonicalPath: '/remont-malenkoy-vannoy-komnaty/',
  seo: {
    title: 'Ремонт маленькой ванной комнаты и санузла в Москве | Цена на ремонт тесной ванной',
    description:
      'Ремонт маленькой ванной комнаты и санузла в Москве | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-malenkoy-vannoy-komnaty',
        title: 'Ремонт маленькой ванной комнаты под ключ',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт в маленькой ванной комнате', href: '/remont-malenkoy-vannoy-komnaty/', isActive: true }] }),
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

