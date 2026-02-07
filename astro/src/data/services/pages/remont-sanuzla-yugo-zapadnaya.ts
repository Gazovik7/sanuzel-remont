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
  summaryTitle: 'Качественный ремонт санузла на Юго-Западной',
  paragraphsHtml: [
    'Район метро <strong>Юго-Западная</strong> отличается разнообразием жилого фонда: от добротных брежневок и экспериментальных домов советского периода до современных ЖК бизнес-класса. Мы учитываем специфику каждого типа здания при проведении ремонтных работ, будь то необходимость полной замены чугунной канализации или работа со сложными планировками в новостройках.',
    'Наши мастера, работающие в ЗАО, оперативно выезжают на объекты по проспекту Вернадского, Ленинскому проспекту и прилегающим улицам. Мы предлагаем комплексный подход: от разработки дизайн-проекта до клининга после ремонта, гарантируя высокое качество и соблюдение сроков.',
  ],
  listIntroHtml: '<strong>Почему жители Юго-Западной выбирают нас:</strong>',
  listItemsHtml: [
    'Знание особенностей инженерных сетей в домах района (серии П-3, КОПЭ, индивидуальные проекты).',
    'Оперативный выезд замерщика в день обращения.',
    'Соблюдение "закона о тишине" и чистоты в подъезде во время ремонта.',
    'Помощь в согласовании перепланировки (объединение санузла, перенос мокрых зон).',
    'Фиксированная стоимость работ, прописанная в договоре.',
  ],
  closingHtml:
    'Хотите узнать точную стоимость ремонта вашего санузла? Оставьте заявку на бесплатный выезд инженера-сметчика. Мы произведем замеры, обсудим ваши пожелания и составим детальную смету без скрытых платежей.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Работаете ли вы в выходные дни?',
  answer:
    'Да, мы можем проводить работы в субботу, соблюдая установленные законом часы тишины. Шумные работы (демонтаж, штробление) проводятся строго в разрешенное время по будням.',
},
{
  question: 'Можно ли заказать частичный ремонт санузла?',
  answer:
    'Мы специализируемся на комплексном ремонте "под ключ", так как это гарантирует качество и долговечность результата. Однако мы рассматриваем заявки на капитальные работы по отдельности (например, только разводка труб и укладка плитки) в зависимости от объема.',
},
{
  question: 'Сколько стоит выезд мастера на Юго-Западную?',
  answer:
    'Выезд специалиста для замера и консультации в пределах района метро Юго-Западная осуществляется бесплатно.',
},
{
  question: 'Как происходит оплата?',
  answer:
    'Оплата производится поэтапно. Вы платите за выполненные и принятые этапы работ. Аванс на работы не требуется, предоплата нужна только на закупку черновых материалов.',
},
{
  question: 'Даете ли вы гарантию на выполненные работы?',
  answer:
    'Да, мы предоставляем официальную гарантию по договору сроком до 2 лет на все виды выполненных нами работ.',
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
  slug: 'remont-sanuzla-yugo-zapadnaya',
  path: '/remont-sanuzla-yugo-zapadnaya/',
  canonicalPath: '/remont-sanuzla-yugo-zapadnaya/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Юго-Западная | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Юго-Западная | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-yugo-zapadnaya',
        title: 'Ремонт санузла у станции метро Юго-Западная',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов на Юго-Западной', href: '/remont-sanuzla-yugo-zapadnaya/', isActive: true }] }),
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

