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
  summaryTitle: 'Ремонт санузлов в Красногорске и Павшинской Пойме',
  paragraphsHtml: [
    'Ищете профессиональный ремонт ванной комнаты в <strong>Красногорске</strong>? Мы предлагаем комплексные решения для жителей административного центра Московской области. Наши бригады имеют огромный опыт работы в <strong>Павшинской Пойме</strong>, <strong>Опалихе</strong>, микрорайонах <strong>Чернево</strong> и <strong>Южный</strong>. Мы понимаем специфику как современных высоток, так и кирпичных домов старого фонда.',
    'Мы берем на себя все сложности: от согласования отключения стояков в местных управляющих компаниях до оперативной доставки плитки и сантехники через загруженное Волоколамское шоссе. Ваша ванная комната станет местом истинного комфорта благодаря нашему вниманию к деталям и соблюдению технологий.',
  ],
  listIntroHtml: '<strong>Преимущества работы с нами в Красногорске:</strong>',
  listItemsHtml: [
    'Опыт работы с планировками в ЖК "Арт", "Тетрис", "Изумрудные холмы" и др.',
    'Использование качественной гидроизоляции, критически важной для многоэтажных домов.',
    'Профессиональный монтаж инсталляций, душевых кабин и скрытых люков.',
    'Бесплатный выезд сметчика по всему Красногорскому округу, включая Нахабино.',
    'Гарантия 2 года на все виды работ по официальному договору.',
  ],
  closingHtml:
    'Закажите ремонт санузла в Красногорске у экспертов. Мы превратим даже самую маленькую ванную в функциональное и красивое пространство. Оставьте заявку на бесплатный расчет сметы!',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'Выезжаете ли вы на замер в Павшинскую Пойму?',
    answer: 'Да, Павшинская Пойма — один из наших приоритетных районов. Мы отлично знаем местную застройку и требования УК к проведению ремонтных работ.',
  },
  {
    question: 'Сколько стоит доставка материалов в Красногорск?',
    answer: 'Благодаря нашему расположению и оптимизированной логистике, доставка черновых материалов часто обходится дешевле, чем самостоятельный заказ. Точную сумму мы укажем в смете.',
  },
  {
    question: 'Можете ли вы сделать перепланировку санузла?',
    answer: 'Да, мы выполняем объединение или разделение санузлов, перенос дверных проемов и монтаж новых перегородок с соблюдением всех строительных норм.',
  },
  {
    question: 'Как решается вопрос с вывозом мусора в новостройках?',
    answer: 'Мы организуем вывоз строительного мусора на специализированные полигоны, предоставляя необходимые документы для УК, если это требуется.',
  },
  {
    question: 'Какие сроки ремонта в старом фонде Красногорска?',
    answer: 'Ремонт в кирпичных домах старой застройки обычно занимает чуть больше времени (20-25 дней) из-за необходимости тщательного демонтажа и выравнивания стен.',
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
  slug: 'remont-sanuzla-krasnogorsk',
  path: '/remont-sanuzla-krasnogorsk/',
  canonicalPath: '/remont-sanuzla-krasnogorsk/',
  seo: {
    title: 'Ремонт санузла в Красногорске под ключ | Цена от мастеров | Ремонт ванной комнаты',
    description:
      'Ремонт санузла в Красногорске под ключ | Бесплатный выезд мастера | Гарантия 2 года | Без предоплаты | Лучшие цены на ремонт санузлов ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-krasnogorsk',
        title: 'Ремонт санузла в Красногорске',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Красногорске', href: '/remont-sanuzla-krasnogorsk/', isActive: true }] }),
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
