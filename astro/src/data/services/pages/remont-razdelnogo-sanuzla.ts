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
  summaryTitle: 'Ремонт раздельного санузла: особенности работ и удобная планировка',
  paragraphsHtml: [
    'Качественный <strong>ремонт раздельного санузла</strong> позволяет обновить ванную и туалет без изменения их конфигурации, сохранив привычную планировку и удобство использования. Такой формат ремонта особенно актуален для семей и квартир с ограниченным пространством.',
    'Мы выполняем ремонт раздельных санузлов под ключ: отдельно планируем работы в ванной комнате и туалете, заменяем коммуникации, выполняем отделку и устанавливаем сантехнику. Все этапы согласуются заранее, чтобы ремонт прошёл без лишних неудобств.',
  ],
  listIntroHtml: '<strong>Что обычно включает ремонт раздельного санузла:</strong>',
  listItemsHtml: [
    'Демонтаж старой отделки и сантехники в ванной комнате и туалете.',
    'Замена или обновление труб водоснабжения, канализации и электропроводки.',
    'Гидроизоляция и выравнивание поверхностей в обоих помещениях.',
    'Чистовая отделка: укладка плитки, монтаж потолков и установка освещения.',
    'Установка сантехнического оборудования, мебели и аксессуаров.',
  ],
  closingHtml:
    'Стоимость ремонта раздельного санузла зависит от площади помещений, состояния коммуникаций и выбранных материалов. Для расчета цены достаточно замеров или фото. После согласования фиксируем объем работ, сроки и итоговую стоимость в договоре.',
};


const PAGE_FAQ: FaqItem[] = [{
  question: 'В чем преимущества ремонта раздельного санузла?',
  answer:
    'Раздельный санузел позволяет одновременно пользоваться ванной и туалетом, что удобно для семей. Ремонт без объединения помещений сохраняет привычную планировку и не требует перепланировки.',
},
{
  question: 'Можно ли делать ремонт ванной и туалета поэтапно?',
  answer:
    'Да, ремонт раздельного санузла можно выполнять поэтапно — сначала в одном помещении, затем в другом. Такой подход снижает неудобства и позволяет частично пользоваться санузлом во время работ.',
},
{
  question: 'Нужно ли менять коммуникации при ремонте раздельного санузла?',
  answer:
    'Замена коммуникаций рекомендуется при их износе или планировании нового оборудования. Это повышает надежность системы и предотвращает протечки после завершения ремонта.',
},
{
  question: 'Сколько стоит ремонт раздельного санузла?',
  answer:
    'Стоимость ремонта раздельного санузла зависит от объема работ, площади ванной и туалета, а также выбранных материалов. Точная цена определяется после осмотра или анализа фото и видео.',
},
{
  question: 'Сколько времени занимает ремонт раздельного санузла?',
  answer:
    'В среднем ремонт раздельного санузла занимает от 3 до 5 недель. Сроки зависят от состояния помещений и сложности отделочных работ.',
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
  slug: 'remont-razdelnogo-sanuzla',
  path: '/remont-razdelnogo-sanuzla/',
  canonicalPath: '/remont-razdelnogo-sanuzla/',
  seo: {
    title: 'Ремонт раздельного санузла в Москве под ключ | Цена на ремонт раздельного туалета и ванной',
    description:
      'Ремонт раздельного санузла в Москве | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-razdelnogo-sanuzla',
        title: 'Ремонт раздельного санузла под ключ в Москве',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов', href: '/remont-razdelnogo-sanuzla/', isActive: true }] }),
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

