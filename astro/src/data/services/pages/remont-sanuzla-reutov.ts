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
  summaryTitle: 'Профессиональный ремонт санузла в Реутове',
  paragraphsHtml: [
    'Город <strong>Реутов</strong> — наукоград, который фактически слился с Москвой. Мы предлагаем ремонт ванных комнат, соответствующий столичным стандартам, для жителей <strong>Южной</strong> и <strong>Северной</strong> частей города. Мы работаем в новостройках у метро Новокосино и в сложившихся районах на улице Ленина и Победы.',
    'Благодаря идеальной транспортной доступности (МКАД, Носовихинское шоссе), мы обеспечиваем молниеносную доставку материалов и оперативный выезд мастеров. Ремонт в Реутове с нами — это быстро, качественно и без лишних переплат.',
  ],
  listIntroHtml: '<strong>Наши преимущества для жителей Реутова:</strong>',
  listItemsHtml: [
    'Выезд сметчика в день обращения или на следующий день.',
    'Опыт работы в высотных домах (ЖК "Маяк", "Рациональ", "Новокосино-2").',
    'Использование современных технологий гидроизоляции для защиты от протечек.',
    'Помощь в согласовании перепланировки (объединение санузла).',
    'Работаем чисто: защита общих коридоров и лифтов от пыли.',
  ],
  closingHtml:
    'Живете в Реутове? Закажите ремонт санузла у профессионалов, которые находятся рядом. Оставьте заявку, и мы бесплатно рассчитаем стоимость работ.',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'Работаете ли вы в выходные дни?',
    answer: 'Мы проводим замеры и консультации в выходные. Шумные работы выполняются строго по закону о тишине, принятому в Реутове (будни с 9 до 19 с перерывом).',
  },
  {
    question: 'Где купить плитку рядом?',
    answer: 'Рядом с Реутовым находится строительный рынок "Владимирский тракт" и гипермаркет "Леруа Мерлен" (Никольское). Мы можем организовать доставку оттуда.',
  },
  {
    question: 'Сколько стоит ремонт ванной в новостройке?',
    answer: 'В новостройках (бетонные стены) ремонт выходит дешевле за счет отсутствия демонтажа. Точная смета составляется после замера.',
  },
  {
    question: 'Выносите ли вы строительный мусор?',
    answer: 'Да, мы выносим мусор в контейнер заказчика или организуем вывоз собственными силами (заказ контейнера).',
  },
  {
    question: 'Устанавливаете ли вы системы защиты от протечек?',
    answer: 'Да, в высотных домах Реутова это особенно актуально. Мы монтируем автоматические системы перекрытия воды при аварии.',
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
  slug: 'remont-sanuzla-reutov',
  path: '/remont-sanuzla-reutov/',
  canonicalPath: '/remont-sanuzla-reutov/',
  seo: {
    title: 'Ремонт санузла в Реутове под ключ | Цена от мастеров | Ремонт ванной комнаты',
    description:
      'Ремонт санузла в Реутове под ключ | Бесплатный выезд мастера | Гарантия 2 года | Без предоплаты | Лучшие цены на ремонт санузлов ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-reutov',
        title: 'Ремонт санузла в Реутове',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Реутове', href: '/remont-sanuzla-reutov/', isActive: true }] }),
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
