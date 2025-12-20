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
  summaryTitle: 'Ремонт ванной комнаты в рассрочку: удобный формат без переплат',
  paragraphsHtml: [
    'Современный <strong>ремонт ванной комнаты в рассрочку</strong> позволяет обновить помещение без единовременных крупных затрат. Такой формат особенно удобен, когда ремонт необходим срочно, а откладывать его на потом не хочется.',
    'Мы выполняем ремонт ванных комнат в рассрочку в Москве с понятными условиями и фиксированной сметой. Все этапы работ и график платежей согласуются заранее, чтобы вы понимали, за что и когда платите.',
  ],
  listIntroHtml: '<strong>Что включает ремонт ванной комнаты в рассрочку:</strong>',
  listItemsHtml: [
    'Составление детальной сметы и графика платежей до начала работ.',
    'Полный комплекс ремонтных работ: демонтаж, замена коммуникаций и отделка.',
    'Подбор материалов и сантехники под согласованный бюджет.',
    'Поэтапное выполнение работ с контролем качества.',
    'Фиксация сроков и условий рассрочки в договоре.',
  ],
  closingHtml:
    'Условия рассрочки и итоговая стоимость ремонта зависят от объема работ и выбранных материалов. Для расчета достаточно замеров или фото помещения. После согласования фиксируем стоимость, сроки и график платежей в договоре.',
};


const PAGE_FAQ: FaqItem[] = [{
  question: 'Как работает рассрочка на ремонт ванной комнаты?',
  answer:
    'Рассрочка предполагает поэтапную оплату ремонта согласно согласованному графику. Стоимость и сроки фиксируются заранее, без скрытых платежей и изменения цены в процессе работ.',
},
{
  question: 'Есть ли переплата при ремонте ванной в рассрочку?',
  answer:
    'В большинстве случаев рассрочка предоставляется без переплаты. Все условия заранее прописываются в договоре, чтобы исключить дополнительные расходы.',
},
{
  question: 'Можно ли выбрать любые материалы при ремонте в рассрочку?',
  answer:
    'Да, вы можете выбрать материалы и сантехнику в рамках согласованного бюджета. Мы помогаем подобрать оптимальные решения по цене и качеству.',
},
{
  question: 'Какие документы нужны для оформления рассрочки?',
  answer:
    'Перечень документов зависит от условий рассрочки. Как правило, требуется минимальный набор данных для оформления договора.',
},
{
  question: 'Сколько времени занимает ремонт ванной в рассрочку?',
  answer:
    'Сроки ремонта ванной комнаты в рассрочку не отличаются от стандартного формата и обычно составляют от 3 до 5 недель в зависимости от объема работ.',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов', href: '/remont-vannoy-komnaty-v-rassrochku/', isActive: true }] }),
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

