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
  summaryTitle: 'Профессиональный ремонт санузла в Новогиреево',
  paragraphsHtml: [
    'Район <strong>Новогиреево</strong> славится своей зеленью и сложившимся жилым фондом, включающим как кирпичные пятиэтажки, так и более современные многоэтажные дома. Ремонт санузла в этом районе часто требует бережного отношения к старым коммуникациям и их грамотной замены для обеспечения надежности на долгие годы.',
    'Мы предлагаем жителям Новогиреево услуги по качественному ремонту ванных комнат под ключ. Наши специалисты хорошо знают особенности домов на Свободном проспекте, Федеративном и улице Перовская. Мы создаем функциональные и красивые интерьеры, превращая даже небольшие санузлы в современные зоны комфорта.',
  ],
  listIntroHtml: '<strong>Почему жители Новогиреево выбирают нас для ремонта санузла:</strong>',
  listItemsHtml: [
    'Глубокая диагностика состояния инженерных сетей перед началом работ.',
    'Полная замена труб на долговечные системы Rehau или полипропилен.',
    'Высококачественная укладка керамической плитки и керамогранита.',
    'Монтаж систем инсталляции, ванн и душевых кабин любой сложности.',
    'Гарантия 2 года на все выполненные работы и материалы.',
  ],
  closingHtml:
    'Надежный ремонт в уютном Новогиреево — это наша специализация. Мы работаем прозрачно, соблюдаем сроки и поддерживаем чистоту на объекте. Закажите бесплатный выезд нашего мастера для замера и получения детальной сметы.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли менять проводку в санузле в старом доме?',
  answer:
    'Да, мы настоятельно рекомендуем замену старой алюминиевой проводки на новую медную с обязательной установкой влагозащищенных розеток.',
},
{
  question: 'Как долго длится ремонт совмещенного санузла в Новогиреево?',
  answer:
    'В среднем ремонт "под ключ" занимает от 14 до 21 дня в зависимости от состояния стен и объема работ.',
},
{
  question: 'Помогаете ли вы с выбором и доставкой плитки?',
  answer:
    'Да, наш технолог поможет подобрать оптимальный формат плитки и может организовать доставку материалов на объект.',
},
{
  question: 'Работаете ли вы в выходные в Новогиреево?',
  answer:
    'Мы выполняем тихие работы в субботу, строго соблюдая московский закон о тишине, чтобы не беспокоить ваших соседей.',
},
{
  question: 'Бесплатен ли выезд мастера на замер?',
  answer:
    'Да, выезд специалиста для осмотра помещения и составления предварительной сметы в Новогиреево бесплатен.',
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
  slug: 'remont-sanuzla-novogireevo',
  path: '/remont-sanuzla-novogireevo/',
  canonicalPath: '/remont-sanuzla-novogireevo/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Новогиреево | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Новогиреево | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-novogireevo',
        title: 'Ремонт санузла у станции метро Новогиреево',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Новогиреево', href: '/remont-sanuzla-novogireevo/', isActive: true }] }),
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

