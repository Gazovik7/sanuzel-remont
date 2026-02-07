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
  summaryTitle: 'Профессиональный ремонт ванных комнат в Балашихе',
  paragraphsHtml: [
    '<strong>Балашиха</strong> — крупнейший город Подмосковья, и мы активно работаем во всех его микрорайонах: от <strong>Поля Чудес</strong> и <strong>Нового Света</strong> до <strong>Железнодорожного</strong> и <strong>Авиаторов</strong>. Мы понимаем специфику местной застройки, будь то панельные дома 80-х или современные монолитные высотки.',
    'Ремонт санузла в Балашихе с нами — это отсутствие головной боли с доставкой. Мы организуем завоз материалов со складов на Горьковском шоссе или с местных строительных баз, что существенно экономит ваше время и деньги.',
  ],
  listIntroHtml: '<strong>Особенности нашего подхода в Балашихе:</strong>',
  listItemsHtml: [
    'Знание планировок в популярных ЖК: "Алексеевская роща", "Новое Измайлово", "Столичный" и др.',
    'Соблюдение закона о тишине Московской области (он отличается от московского!).',
    'Прямые контакты с многими УК для оперативного отключения стояков водоснабжения.',
    'Вывоз строительного мусора на легальные полигоны области, минуя московские пробки.',
    'Мастера, готовые работать в плотном графике, чтобы сдать объект вовремя.',
  ],
  closingHtml:
    'Доверьте ремонт своей ванной комнаты профессионалам, которые знают Балашиху как свои пять пальцев. Запишитесь на бесплатный замер уже сегодня.',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'Сколько стоит доставка материалов в Балашиху?',
    answer: 'Благодаря налаженной логистике по Горьковскому и Щелковскому направлениям, стоимость доставки у нас минимальна. Мы часто используем базы стройматериалов, расположенные рядом с городом, чтобы снизить транспортные расходы.',
  },
  {
    question: 'Работаете ли вы в микрорайоне Железнодорожный?',
    answer: 'Да, Железнодорожный теперь часть Балашихи, и мы активно там работаем. Наши бригады мобильны и обслуживают все удаленные микрорайоны округа.',
  },
  {
    question: 'Какие сроки ремонта санузла в новостройках Балашихи?',
    answer: 'В новых домах (без демонтажа старой отделки) ремонт "под ключ" обычно занимает 14-20 дней. Если требуется сложная перепланировка, сроки могут быть увеличены до 25-30 дней.',
  },
  {
    question: 'Нужно ли мне искать грузчиков на месте?',
    answer: 'Нет, в нашу услугу доставки включен подъем материалов на этаж. Вам не нужно искать местных грузчиков или носить мешки самостоятельно.',
  },
  {
    question: 'Соблюдаете ли вы "тихий час" в Подмосковье?',
    answer: 'Обязательно. Мы строго придерживаемся закона о тишине Московской области: шумные работы не проводятся с 13:00 до 15:00, а также в ночное время и выходные дни (согласно графику дома).',
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
  slug: 'remont-sanuzla-balashiha',
  path: '/remont-sanuzla-balashiha/',
  canonicalPath: '/remont-sanuzla-balashiha/',
  seo: {
    title: 'Ремонт санузла в Балашихе под ключ | Цена от мастеров | Ремонт ванной комнаты',
    description:
      'Ремонт санузла в Балашихе под ключ | Бесплатный выезд мастера | Гарантия 2 года | Без предоплаты | Лучшие цены на ремонт санузлов ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-balashiha',
        title: 'Ремонт санузла в Балашихе',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Балашихе', href: '/remont-sanuzla-balashiha/', isActive: true }] }),
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
