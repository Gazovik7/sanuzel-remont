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
  summaryTitle: 'Профессиональные сантехнические работы в Москве',
  paragraphsHtml: [
    'Качественные <strong>сантехнические работы</strong> — это основа комфорта и безопасности вашего дома. От правильного монтажа труб и сантехники зависит не только удобство использования ванной комнаты, но и отсутствие риска протечек, которые могут привести к дорогостоящему ремонту у вас и ваших соседей. Мы предлагаем полный спектр услуг по монтажу и замене инженерных систем любой сложности.',
    'Наши мастера обладают высокой квалификацией и работают с современными материалами: сшитым полиэтиленом (Rehau, Tece), полипропиленом, медью. Мы выполняем проектирование разводки водоснабжения, установку систем защиты от протечек, фильтров тонкой очистки, а также монтаж любого сантехнического оборудования — от смесителей до джакузи и душевых кабин.',
  ],
  listIntroHtml: '<strong>Что включают в себя наши сантехнические услуги:</strong>',
  listItemsHtml: [
    'Демонтаж старых труб и сантехники.',
    'Разводка труб водоснабжения и канализации (коллекторная или тройниковая).',
    'Установка систем защиты от протечек ("Нептун", "Аквасторож").',
    'Монтаж инсталляций для подвесных унитазов и биде.',
    'Установка ванн, душевых кабин, раковин, смесителей и полотенцесушителей.',
  ],
  closingHtml:
    'Не рискуйте своим ремонтом — доверьте сантехнику профессионалам. Мы предоставляем гарантию на все виды монтажных работ и используем только сертифицированные комплектующие. Закажите выезд мастера для консультации и расчета стоимости работ.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Какие трубы лучше использовать для разводки воды в квартире?',
  answer:
    'Мы рекомендуем трубы из сшитого полиэтилена (PEX), например, Rehau. Они надежны, долговечны, выдерживают высокое давление и температуру, и их можно монтировать в стяжку.',
},
{
  question: 'Что такое коллекторная разводка и зачем она нужна?',
  answer:
    'Коллекторная разводка предполагает отдельную трубу к каждому потребителю (раковина, ванна, унитаз). Это обеспечивает равномерное давление воды при одновременном включении нескольких точек и позволяет перекрывать воду локально.',
},
{
  question: 'Нужно ли устанавливать редуктор давления?',
  answer:
    'Да, редуктор давления необходим для защиты сантехники и бытовой техники от гидроударов и повышенного давления в городской сети, что продлевает срок их службы.',
},
{
  question: 'Устанавливаете ли вы системы защиты от протечек?',
  answer:
    'Да, мы настоятельно рекомендуем и устанавливаем автоматические системы защиты от протечек, которые самостоятельно перекрывают воду при обнаружении влаги на полу.',
},
{
  question: 'Даете ли вы гарантию на сантехнические работы?',
  answer:
    'Мы предоставляем официальную гарантию сроком 2 года на все выполненные нами работы по монтажу инженерных систем и сантехники.',
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
  slug: 'santekhnicheskie-raboty',
  path: '/santekhnicheskie-raboty/',
  canonicalPath: '/santekhnicheskie-raboty/',
  seo: {
    title: 'Сантехнические работы в санузле в Москве | Разобрать стены в ванной комнате цена |',
    description:
      'Сантехнические работы в санузле | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42"',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-santekhnicheskie-raboty',
        title: 'Сантехнические работы в ванной комнате',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Сантехнические работы в ванной', href: '/santekhnicheskie-raboty/', isActive: true }] }),
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

