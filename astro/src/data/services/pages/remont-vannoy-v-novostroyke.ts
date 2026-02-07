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
  summaryTitle: 'Качественный ремонт ванной в новостройке: от голых стен до идеального результата',
  paragraphsHtml: [
    'Ремонт санузла в <strong>новостройке</strong> — это чистый лист, который дает возможность реализовать любые дизайнерские задумки. Однако работа с новым домом требует учета усадки здания и отсутствия базовых коммуникаций. Мы специализируемся на черновом и чистовом ремонте ванных комнат в ЖК любого класса — от комфорта до премиума.',
    'Наши инженеры разрабатывают схему разводки труб и электрики с нуля, учитывая расположение стояков и ваши пожелания по расстановке сантехники. Мы используем эластичные материалы и специальные технологии компенсации усадки, чтобы плитка не треснула, а трубы не деформировались в первые годы эксплуатации дома.',
  ],
  listIntroHtml: '<strong>Что мы предлагаем владельцам квартир в новых домах:</strong>',
  listItemsHtml: [
    'Разработка индивидуального плана расстановки сантехники и мебели.',
    'Монтаж надежных инженерных систем (Rehau, Tece) с защитой от протечек.',
    'Профессиональная гидроизоляция пола и зон прямого попадания воды.',
    'Выравнивание стен и полов с соблюдением идеальной геометрии под плитку.',
    'Укладка любого типа покрытий: от классического кафеля до крупноформатного керамогранита.',
  ],
  closingHtml:
    'Начинайте жизнь в новой квартире с комфорта. Мы фиксируем сроки и смету до начала работ, предоставляем фотоотчеты на каждом этапе и даем гарантию 2 года. Закажите консультацию технолога прямо сейчас — это бесплатно и ни к чему вас не обязывает.',
};


const PAGE_FAQ: FaqItem[] = [{
  question: 'Когда можно начинать ремонт в ванной после получения ключей?',
  answer:
    'К работам можно приступать сразу. Мы используем материалы и технологии, которые учитывают неизбежную усадку новостройки, что гарантирует сохранность отделки.',
},
{
  question: 'Нужна ли гидроизоляция, если застройщик ее уже сделал?',
  answer:
    'Как правило, "базовая" гидроизоляция от застройщика не отличается высоким качеством или повреждается при монтаже труб. Мы настоятельно рекомендуем делать профессиональную гидроизоляцию "мокрой зоны" заново.',
},
{
  question: 'Какие трубы лучше использовать в новостройке?',
  answer:
    'Мы рекомендуем сшитый полиэтилен (например, Rehau). Это самые долговечные и надежные трубы, которые не боятся перепадов давления и скрытого монтажа в стяжку или стены.',
},
{
  question: 'Сколько стоит ремонт ванной в новостройке под ключ?',
  answer:
    'Стоимость работ в новостройке начинается от 95 000 рублей. Итоговая цена зависит от сложности инженерных систем, необходимости возведения перегородок и выбранного формата плитки.',
},
{
  question: 'Помогаете ли вы с закупкой материалов?',
  answer:
    'Да, мы берем на себя подбор, закупку и доставку всех черновых материалов. Также мы можем помочь с выбором чистовой сантехники и плитки у наших партнеров со скидкой.',
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
  slug: 'remont-vannoy-v-novostroyke',
  path: '/remont-vannoy-v-novostroyke/',
  canonicalPath: '/remont-vannoy-v-novostroyke/',
  seo: {
    title: 'Ремонт ванной в новостройке под ключ в Москве | Ремонт санузла в новостройке под ключ цена',
    description:   'Ремонт ванной в новостройке | Бесплатный выезд сантехника | Гарантия до 3 лет | Быстрый ремонт от 1 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-vannoy-v-novostroyke',
        title: 'Ремонт ванной в новостройке под ключ',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в новостройках под ключ', href: '/remont-vannoy-v-novostroyke/', isActive: true }] }),
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

