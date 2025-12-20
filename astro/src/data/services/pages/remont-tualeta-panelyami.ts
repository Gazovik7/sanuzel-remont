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
  summaryTitle: 'Ремонт туалета панелями: быстрый и практичный вариант отделки',
  paragraphsHtml: [
    'Практичный <strong>ремонт туалета панелями</strong> — это быстрый способ обновить помещение без сложных мокрых процессов. Панели подходят для помещений с высокой влажностью, позволяют скрыть неровности стен и инженерные коммуникации.',
    'Мы выполняем ремонт туалетов панелями под ключ: подбираем влагостойкие материалы, монтируем каркас или клеевую систему, устанавливаем панели, потолок и освещение. Все этапы работ планируются заранее, чтобы ремонт прошёл быстро и аккуратно.',
  ],
  listIntroHtml: '<strong>Что обычно включает ремонт туалета панелями:</strong>',
  listItemsHtml: [
    'Подготовка основания: демонтаж старой отделки и обработка поверхностей.',
    'Монтаж каркаса или клеевой основы под панели с учетом геометрии помещения.',
    'Установка влагостойких панелей на стены с аккуратной стыковкой.',
    'Монтаж потолка, освещения и декоративных элементов.',
    'Установка унитаза, полок и аксессуаров после завершения отделки.',
  ],
  closingHtml:
    'Стоимость ремонта туалета панелями зависит от типа панелей, площади помещения и сложности монтажа. Для предварительного расчета достаточно замеров или фото. После согласования фиксируем объем работ, сроки и стоимость в договоре.',
};


const PAGE_FAQ: FaqItem[] = [{
  question: 'Какие панели подходят для ремонта туалета?',
  answer:
    'Для ремонта туалета используются влагостойкие ПВХ-панели или панели с защитным покрытием. Они устойчивы к влаге, просты в уходе и подходят для небольших помещений.',
},
{
  question: 'Нужно ли выравнивать стены перед монтажом панелей?',
  answer:
    'При монтаже панелей на каркас выравнивание стен не требуется. При клеевом способе основание должно быть относительно ровным, чтобы панели легли аккуратно.',
},
{
  question: 'Сколько времени занимает ремонт туалета панелями?',
  answer:
    'В среднем ремонт туалета панелями занимает от 2 до 5 дней. Сроки зависят от состояния помещения и выбранного способа монтажа.',
},
{
  question: 'Насколько долговечна отделка туалета панелями?',
  answer:
    'При правильном монтаже и использовании влагостойких материалов панели служат 10 и более лет, не теряя внешний вид и функциональность.',
},
{
  question: 'Сколько стоит ремонт туалета панелями?',
  answer:
    'Стоимость ремонта туалета панелями зависит от площади помещения, типа панелей и объема дополнительных работ. Точная цена рассчитывается после осмотра или анализа фото и видео.',
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
  slug: 'remont-tualeta-panelyami',
  path: '/remont-tualeta-panelyami/',
  canonicalPath: '/remont-tualeta-panelyami/',
  seo: {
    title: 'Отделать туалет панелями цена в Москве | Обшить санузел пвх панелями под ключ | Ремонт туалета пластиковыми панелями',
    description:  'Ремонт туалета панелям | Бесплатный выезд сантехника | Гарантия до 3 лет | Быстрый ремонт от 1 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-tualeta-panelyami',
        title: 'Ремонт ванной комнаты и туалета ПВХ панелями',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов', href: '/remont-tualeta-panelyami/', isActive: true }] }),
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

