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
  summaryTitle: 'Перепланировка санузла в Москве: что можно изменить и как проходит процесс',
  paragraphsHtml: [
    'Профессиональная <strong>перепланировка санузла</strong> позволяет увеличить полезное пространство, объединить или разделить ванную и туалет, а также сделать помещение более удобным и функциональным. Такие работы требуют соблюдения строительных норм и правильной подготовки проекта.',
    'Мы выполняем перепланировку санузлов в Москве с учетом требований БТИ и действующих нормативов. Помогаем определить допустимые изменения, подготовить техническое решение и реализовать перепланировку без рисков для конструкции дома и инженерных систем.',
  ],
  listIntroHtml: '<strong>Что может включать перепланировка санузла:</strong>',
  listItemsHtml: [
    'Объединение или разделение ванной и туалета с изменением конфигурации помещения.',
    'Перенос сантехнических приборов с корректной разводкой труб и канализации.',
    'Возведение или демонтаж перегородок без нарушения несущих конструкций.',
    'Расширение санузла за счет коридора или кладовой (при допустимости по нормам).',
    'Подготовка основания и инженерных систем под дальнейший ремонт и отделку.',
  ],
  closingHtml:
    'Стоимость перепланировки санузла зависит от сложности изменений, объема демонтажа и необходимости согласований. Для предварительного расчета достаточно плана квартиры или фото. После осмотра фиксируем объем работ и сроки выполнения.',
};


const PAGE_FAQ: FaqItem[] = [{
  question: 'Что считается перепланировкой санузла?',
  answer:
    'Перепланировкой санузла считаются любые изменения его конфигурации: объединение или разделение ванной и туалета, перенос сантехники, изменение перегородок или расширение площади. Такие работы требуют соблюдения строительных и санитарных норм.',
},
{
  question: 'Нужно ли согласовывать перепланировку санузла?',
  answer:
    'В большинстве случаев перепланировка санузла требует согласования, особенно если затрагиваются перегородки или меняется расположение сантехники. Мы заранее оцениваем допустимость изменений и подсказываем, какие работы можно выполнить без нарушений.',
},
{
  question: 'Можно ли объединить ванную и туалет в панельном доме?',
  answer:
    'Да, объединение ванной и туалета в панельном доме возможно, если не затрагиваются несущие конструкции. Все работы выполняются с учетом особенностей дома и действующих нормативов.',
},
{
  question: 'Сколько стоит перепланировка санузла в Москве?',
  answer:
    'Стоимость перепланировки санузла в Москве зависит от сложности работ, объема демонтажа, переноса коммуникаций и необходимости согласований. Точная цена рассчитывается после осмотра помещения или анализа планировки.',
},
{
  question: 'Сколько времени занимает перепланировка санузла?',
  answer:
    'Сроки перепланировки санузла обычно составляют от 1 до 3 недель в зависимости от объема работ и сложности изменений. График выполнения работ согласуется заранее.',
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
  slug: 'pereplanirovka-sanuzla',
  path: '/pereplanirovka-sanuzla/',
  canonicalPath: '/pereplanirovka-sanuzla/',
  seo: {
    title: 'Перепланировка санузла под ключ в Москве | Перепланировка ванной комнаты и туалета в квартире цена',
    description:
      'Перепланировка санузла в Москве | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-pereplanirovka-sanuzla',
        title: 'Перепланировка санузла под ключ',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Перепланировка санузла под ключ', href: '/pereplanirovka-sanuzla/', isActive: true }] }),
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

