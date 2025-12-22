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
  summaryTitle: 'Ремонт совмещённого санузла: удобство, функциональность и продуманная планировка',
  paragraphsHtml: [
    'Грамотный <strong>ремонт совмещённого санузла</strong> позволяет рационально использовать пространство, особенно в квартирах с небольшой площадью. Объединение ванной и туалета дает больше свободы для размещения сантехники, систем хранения и удобного зонирования.',
    'Мы выполняем ремонт совмещённых санузлов под ключ: продумываем планировку, заменяем коммуникации, выполняем гидроизоляцию и отделку с учетом повышенной влажности. Все этапы работ и сроки согласуются заранее, чтобы результат был комфортным и долговечным.',
  ],
  listIntroHtml: '<strong>Что обычно включает ремонт совмещённого санузла:</strong>',
  listItemsHtml: [
    'Демонтаж старой отделки и сантехники с подготовкой помещения к ремонту.',
    'Замена или модернизация труб водоснабжения, канализации и электропроводки.',
    'Гидроизоляция пола и стен с последующим выравниванием поверхностей.',
    'Чистовая отделка: укладка плитки, монтаж потолка и освещения.',
    'Установка сантехнического оборудования, мебели и аксессуаров.',
  ],
  closingHtml:
    'Стоимость ремонта совмещённого санузла зависит от площади помещения, сложности работ и выбранных материалов. Для расчёта цены достаточно замеров или фото. После согласования фиксируем объем работ, сроки и итоговую стоимость в договоре.',
};


const PAGE_FAQ: FaqItem[] = [{
  question: 'В чем преимущества ремонта совмещённого санузла?',
  answer:
    'Совмещённый санузел позволяет более рационально использовать пространство, установить полноценную ванну или душевую и удобные системы хранения. Такой формат особенно подходит для небольших квартир.',
},
{
  question: 'Нужно ли согласовывать ремонт совмещённого санузла?',
  answer:
    'Если совмещённый санузел уже предусмотрен планировкой, согласование не требуется. При объединении ванной и туалета согласование необходимо, и все работы должны соответствовать действующим нормативам.',
},
{
  question: 'Можно ли установить душевую вместо ванны в совмещённом санузле?',
  answer:
    'Да, установка душевой вместо ванны — популярное решение для совмещённых санузлов. Оно позволяет освободить место и сделать помещение более функциональным.',
},
{
  question: 'Сколько стоит ремонт совмещённого санузла?',
  answer:
    'Стоимость ремонта совмещённого санузла зависит от объема работ, состояния коммуникаций и выбранных материалов. Точная цена рассчитывается после осмотра помещения или анализа фото и видео.',
},
{
  question: 'Сколько времени занимает ремонт совмещённого санузла?',
  answer:
    'В среднем ремонт совмещённого санузла занимает от 3 до 5 недель. Сроки зависят от сложности работ и этапов отделки.',
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
  slug: 'remont-sovmeschennogo-sanuzla',
  path: '/remont-sovmeschennogo-sanuzla/',
  canonicalPath: '/remont-sovmeschennogo-sanuzla/',
  seo: {
    title: 'Ремонт совмещенного санузла в Москве под ключ | Цена на ремонт совмещенного туалета и ванной',
    description:'Ремонт совмещенного санузла в Москве | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sovmeschennogo-sanuzla',
        title: 'Ремонт совмещенного санузла под ключ в Москве',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт совмещённого санузла', href: '/remont-sovmeschennogo-sanuzla/', isActive: true }] }),
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

