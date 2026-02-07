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
  summaryTitle: 'Профессиональная укладка плитки в ванной комнате в Москве',
  paragraphsHtml: [
    'Качественная <strong>укладка плитки в ванной комнате</strong> — это залог долговечности ремонта и эстетической привлекательности помещения. От мастерства плиточника зависит не только внешний вид стен и пола, но и герметичность покрытия, что критически важно во влажных зонах. Мы предлагаем профессиональные услуги по облицовке санузлов любой сложности.',
    'Наши специалисты работают со всеми видами материалов: от классической керамики и кафеля до крупноформатного керамогранита, мозаики, клинкера и натурального камня. Мы строго соблюдаем технологию подготовки основания, гидроизоляции и нанесения клея, гарантируя идеальную плоскость и ровные швы, которые не потемнеют и не растрескаются со временем.',
  ],
  listIntroHtml: '<strong>Этапы работ по укладке плитки в ванной:</strong>',
  listItemsHtml: [
    'Тщательная подготовка поверхности: демонтаж, грунтовка, выравнивание штукатуркой.',
    'Нанесение надежной гидроизоляции в мокрых зонах и углах.',
    'Предварительная раскладка для минимизации подрезок и симметрии рисунка.',
    'Укладка плитки на профессиональный клей с использованием систем выравнивания (СВП).',
    'Затирка швов цементной или эпоксидной затиркой для защиты от влаги и грибка.',
  ],
  closingHtml:
    'Доверьте укладку плитки профессионалам. Мы работаем аккуратно, быстро и с гарантией качества. Закажите выезд мастера для замера и расчета стоимости работ прямо сейчас, и получите идеально облицованную ванную комнату!',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Сколько стоит укладка квадратного метра плитки?',
  answer:
    'Стоимость зависит от размера плитки, типа материала (керамика, керамогранит, мозаика) и сложности раскладки. Базовая цена начинается от 1200 руб./м². Точную смету мастер назовет после замера.',
},
{
  question: 'Нужно ли выравнивать стены перед укладкой плитки?',
  answer:
    'Да, идеально ровные стены — обязательное условие для качественной укладки. Мы выполняем штукатурные работы по маякам для достижения геометрии 90 градусов.',
},
{
  question: 'Какую затирку лучше выбрать: цементную или эпоксидную?',
  answer:
    'Для ванной комнаты мы рекомендуем эпоксидную затирку. Она абсолютно водонепроницаема, не впитывает грязь, не меняет цвет и защищает от плесени, хотя и сложнее в работе.',
},
{
  question: 'Работаете ли вы с крупноформатным керамогранитом?',
  answer:
    'Да, у нас есть специализированное оборудование и опыт для резки и укладки широкоформатных плит (120х60, 240х120 и более).',
},
{
  question: 'Делаете ли вы запил плитки под 45 градусов?',
  answer:
    'Да, мы выполняем заусовку (запил) внешних углов под 45 градусов. Это выглядит намного эстетичнее и современнее, чем использование пластиковых уголков.',
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
  slug: 'ukladka-plitki-v-vannoy-komnate',
  path: '/ukladka-plitki-v-vannoy-komnate/',
  canonicalPath: '/ukladka-plitki-v-vannoy-komnate/',
  seo: {
    title: 'Положить плитку в ванной комнате цена | Мастер по укладке плитки в Москве | Укладка кафеля в санузле',
    description:  'Укладка плитки в ванной | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-ukladka-plitki-v-vannoy-komnate',
        title: 'Укладка плитки в ванной комнате',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Укладка плитки в ванной', href: '/ukladka-plitki-v-vannoy-komnate/', isActive: true }] }),
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

