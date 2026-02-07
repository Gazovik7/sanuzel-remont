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
  summaryTitle: 'Ремонт санузлов в Солнцево: от новостроек до классики',
  paragraphsHtml: [
    'Район <strong>Солнцево</strong> активно развивается, сочетая в себе уютные старые кварталы и масштабные современные жилые комплексы. Ремонт санузла в этом районе требует профессионального подхода, будь то отделка ванной комнаты "с нуля" в новостройке или капитальное обновление коммуникаций в домах советского периода.',
    'Мы предлагаем жителям Солнцево надежный и качественный ремонт санузлов под ключ. Наши мастера хорошо знакомы со спецификой как новых ЖК на улице Авиаторов, так и панельных домов на улице Богданова. Мы гарантируем соблюдение строительных норм и использование только проверенных материалов для долговечного результата.',
  ],
  listIntroHtml: '<strong>Почему жители Солнцево выбирают нас:</strong>',
  listItemsHtml: [
    'Профессиональный ремонт в новостройках с учетом усадки здания.',
    'Капитальная замена старых труб на современные системы Rehau.',
    'Идеальная укладка плитки и керамогранита с гарантией.',
    'Монтаж сантехники любой сложности — от простых смесителей до джакузи.',
    'Прозрачная смета и работа без скрытых платежей.',
  ],
  closingHtml:
    'Ремонт санузла в Солнцево — это просто и надежно с нашей командой. Мы берем на себя все этапы работ, обеспечивая чистоту и порядок на объекте. Закажите бесплатный выезд технолога для замера и составления сметы прямо сегодня.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужна ли гидроизоляция в ванной комнате в новостройке?',
  answer:
    'Да, качественная гидроизоляция обязательна для предотвращения протечек к соседям и защиты стен от грибка, особенно в новых домах.',
},
{
  question: 'Как быстро вы делаете ремонт в Солнцево?',
  answer:
    'Сроки зависят от объема работ. Обычно ремонт ванной комнаты занимает от 12 до 20 рабочих дней.',
},
{
  question: 'Вывозите ли вы мусор после ремонта?',
  answer:
    'Да, мы берем на себя сбор, упаковку и вынос строительного мусора, оставляя объект готовым к эксплуатации.',
},
{
  question: 'Можно ли сделать ремонт санузла поэтапно?',
  answer:
    'Мы рекомендуем выполнять комплексный ремонт под ключ, так как это гарантирует целостность всех инженерных систем и отделки.',
},
{
  question: 'Как вызвать мастера на замер в Солнцево?',
  answer:
    'Просто оставьте заявку на нашем сайте или позвоните по телефону. Мастер приедет в удобное для вас время абсолютно бесплатно.',
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
  slug: 'remont-sanuzla-solntsevo',
  path: '/remont-sanuzla-solntsevo/',
  canonicalPath: '/remont-sanuzla-solntsevo/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Солнцево | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Солнцево | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-solntsevo',
        title: 'Ремонт санузла у станции метро Солнцево',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Солнцево', href: '/remont-sanuzla-solntsevo/', isActive: true }] }),
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

