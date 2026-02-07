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
  summaryTitle: 'Профессиональный ремонт ванной у метро Тимирязевская',
  paragraphsHtml: [
    'Район <strong>Тимирязевский</strong> — это сочетание уютных зеленых зон и сложившейся застройки разных лет. Ремонт санузла в этом районе часто требует вдумчивого подхода к замене изношенных инженерных сетей в кирпичных домах и бережной работы с типовыми планировками панельных зданий.',
    'Мы предлагаем жителям Тимирязевской комплексные услуги по ремонту санузлов под ключ. Наши мастера хорошо знакомы с особенностями домов на улице Тимирязевская, Яблочкова и Дмитровском шоссе. Мы выполняем все этапы: от демонтажа старой плитки до установки современной сантехники и подключения бытовой техники.',
  ],
  listIntroHtml: '<strong>Почему ремонт санузла в Тимирязевском районе доверяют нам:</strong>',
  listItemsHtml: [
    'Капитальная замена труб водоснабжения и канализации с использованием материалов Rehau.',
    'Профессиональная гидроизоляция пола и стен для защиты от протечек.',
    'Выравнивание поверхностей под плитку любой сложности.',
    'Монтаж натяжных потолков с влагозащищенным освещением.',
    'Помощь в подборе и доставке качественных черновых и чистовых материалов.',
  ],
  closingHtml:
    'Сделайте свою ванную комнату местом истинного отдыха. Мы фиксируем итоговую стоимость в договоре и гарантируем соблюдение сроков. Закажите бесплатный замер на Тимирязевской прямо сейчас и получите детальную консультацию нашего технолога.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли менять полотенцесушитель при ремонте в кирпичном доме?',
  answer:
    'В старом жилом фонде Тимирязевского района мы рекомендуем менять водяной полотенцесушитель на новый или устанавливать электрический для повышения надежности системы.',
},
{
  question: 'Как быстро вы можете начать ремонт на Тимирязевской?',
  answer:
    'Обычно мы готовы выйти на объект в течение 3-5 дней после подписания договора и закупки необходимых материалов.',
},
{
  question: 'Делаете ли вы перепланировку (объединение санузла)?',
  answer:
    'Да, мы выполняем снос перегородок и возведение новых стен, соблюдая все строительные нормы и правила безопасности.',
},
{
  question: 'Сколько времени занимает ремонт стандартной ванной комнаты?',
  answer:
    'В среднем ремонт "под ключ" занимает от 15 до 22 рабочих дней, в зависимости от объема работ и состояния коммуникаций.',
},
{
  question: 'Предоставляете ли вы скидки для жителей района?',
  answer:
    'Да, для жителей Тимирязевского района у нас действуют специальные сезонные предложения и скидки на комплексные работы.',
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
  slug: 'remont-sanuzla-timiryazevskaya',
  path: '/remont-sanuzla-timiryazevskaya/',
  canonicalPath: '/remont-sanuzla-timiryazevskaya/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Тимирязевская | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Тимирязевская | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-timiryazevskaya',
        title: 'Ремонт санузла у станции метро Тимирязевская',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов у Тимирязевской', href: '/remont-sanuzla-timiryazevskaya/', isActive: true }] }),
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

