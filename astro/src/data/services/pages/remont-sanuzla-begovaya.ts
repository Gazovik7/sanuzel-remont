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
  summaryTitle: 'Качественный ремонт санузла у метро Беговая',
  paragraphsHtml: [
    'Район метро <strong>Беговая</strong> — это динамично развивающаяся локация на границе центра Москвы, где соседствуют фундаментальные сталинские дома, кирпичные пятиэтажки и ультрасовременные жилые комплексы. Ремонт санузла здесь требует универсальности и профессионализма: от замены изношенных сетей в старом фонде до высокотехнологичной отделки в новостройках с использованием современных материалов.',
    'Наши мастера имеют большой опыт работы в домах на Хорошёвском шоссе, улице Беговая и Беговой аллее. Мы предлагаем комплексные решения по ремонту ванных комнат под ключ, обеспечивая надежность инженерных систем и безупречный вид финишной отделки, соответствующий престижному статусу района.',
  ],
  listIntroHtml: '<strong>Почему жители Беговой выбирают нас для ремонта санузла:</strong>',
  listItemsHtml: [
    'Глубокое знание особенностей как старого фонда, так и современных ЖК района.',
    'Полная модернизация систем водоснабжения с использованием Rehau и Tece.',
    'Профессиональная укладка плитки, керамогранита и мозаики любой сложности.',
    'Монтаж систем защиты от протечек, инсталляций и дизайнерской сантехники.',
    'Соблюдение регламента шумных работ и полная чистота на объекте.',
  ],
  closingHtml:
    'Ремонт санузла на Беговой с нашей командой — это гарантия качества и долговечности. Мы берем на себя все этапы процесса, обеспечивая превосходный результат без лишних хлопот для вас. Закажите бесплатный выезд замерщика уже сегодня!',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли менять старые трубы в кирпичных домах у Беговой?',
  answer:
    'Да, мы настоятельно рекомендуем полную замену старых коммуникаций на современные долговечные материалы, чтобы исключить риск протечек и улучшить напор воды.',
},
{
  question: 'Как быстро вы можете начать ремонт после проведения замера?',
  answer:
    'Обычно выход бригады на объект в районе Беговой возможен в течение 3-5 рабочих дней после подписания договора.',
},
{
  question: 'Помогаете ли вы с закупкой элитной сантехники?',
  answer:
    'Да, мы консультируем по выбору брендов и можем помочь с приобретением материалов у наших партнеров со скидкой для клиентов.',
},
{
  question: 'Сколько времени занимает капитальный ремонт санузла?',
  answer:
    'В зависимости от сложности и объема работ, ремонт "под ключ" занимает от 15 до 25 рабочих дней.',
},
{
  question: 'Бесплатен ли выезд инженера на замер в район Беговой?',
  answer:
    'Да, выезд нашего технического специалиста для осмотра помещения и составления сметы осуществляется бесплатно.',
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
  slug: 'remont-sanuzla-begovaya',
  path: '/remont-sanuzla-begovaya/',
  canonicalPath: '/remont-sanuzla-begovaya/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Беговая | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Беговая | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-begovaya',
        title: 'Ремонт санузла у станции метро Беговая',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов у Беговой', href: '/remont-sanuzla-begovaya/', isActive: true }] }),
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

