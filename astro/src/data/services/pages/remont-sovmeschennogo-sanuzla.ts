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
  summaryTitle: 'Идеальный ремонт совмещённого санузла: пространство и комфорт',
  paragraphsHtml: [
    'Ремонт <strong>совмещённого санузла</strong> требует особого внимания к эргономике. Главная задача — разместить всё необходимое на небольшой площади, сохранив ощущение простора. Мы знаем, как грамотно зонировать помещение, чтобы пользоваться им было удобно всем членам семьи.',
    'Наши специалисты разрабатывают индивидуальные планировочные решения: переносят дверные проемы, монтируют инсталляции и душевые в строительном исполнении, организуют ниши для стиральных машин. Мы превращаем тесный санузел в функциональную и стильную ванную комнату, используя каждый сантиметр площади.',
  ],
  listIntroHtml: '<strong>Ключевые моменты при ремонте совмещённого санузла:</strong>',
  listItemsHtml: [
    'Эффективное зонирование: визуальное разделение зоны туалета и ванной.',
    'Использование подвесной сантехники для облегчения уборки и визуального расширения пространства.',
    'Мощная принудительная вентиляция для быстрого удаления влаги и запахов.',
    'Многоуровневое освещение для создания разных сценариев (яркий свет для уборки, мягкий — для релакса).',
    'Продуманные системы хранения: шкафы над инсталляцией, скрытые люки и полки.',
  ],
  closingHtml:
    'Стоимость ремонта зависит от выбранных решений и материалов. Мы поможем оптимизировать бюджет, предложив лучшие варианты планировки и отделки. Закажите бесплатный замер, чтобы узнать точную цену вашего идеального санузла.',
};


const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли узаконивать объединение ванной и туалета?',
  answer:
    'Да, объединение санузла является перепланировкой и требует согласования в Мосжилинспекции. Мы консультируем по всем вопросам законности перепланировки и соблюдаем все строительные нормы (СНиП и СП).',
},
{
  question: 'Что лучше для совмещённого санузла: ванна или душевая кабина?',
  answer:
    'Для экономии места лучше подходит душевая кабина или душевой уголок с трапом. Однако, если в семье есть маленькие дети или любители полежать в воде, мы поможем подобрать компактную, но удобную ванну.',
},
{
  question: 'Как избавиться от запахов в совмещённом санузле?',
  answer:
    'Ключ к свежести — правильная вентиляция. Мы устанавливаем мощные, но тихие вытяжные вентиляторы с обратным клапаном и таймером, которые эффективно удаляют влагу и запахи.',
},
{
  question: 'Где разместить стиральную машину в маленьком санузле?',
  answer:
    'Популярные решения: под раковиной (со специальной плоской моделью), в нише над инсталляцией (если позволяет глубина) или в специально возведенном хозяйственном шкафу.',
},
{
  question: 'Сколько времени занимает объединение и ремонт санузла?',
  answer:
    'Полный цикл работ, включая снос перегородки, возведение новых стен, разводку коммуникаций и отделку, обычно занимает от 20 до 28 дней.',
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

