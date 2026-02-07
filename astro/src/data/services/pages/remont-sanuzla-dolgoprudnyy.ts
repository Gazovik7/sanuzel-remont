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
  summaryTitle: 'Ремонт санузла в Долгопрудном: быстро и качественно',
  paragraphsHtml: [
    'Выполняем профессиональный ремонт ванных комнат и туалетов в <strong>Долгопрудном</strong>. Мы ценим время жителей северного пригорода, поэтому наши логистические маршруты по Дмитровскому и Лихачевскому шоссе отработаны до мелочей. Это позволяет нам не затягивать сроки и вовремя доставлять все необходимые материалы.',
    'Работаем во всех микрорайонах города: от старого центра и <strong>Гранита</strong> до <strong>Новых Водников</strong> и <strong>Центрального</strong>. Знаем особенности инженерных коммуникаций в местных новостройках и вторичном фонде.',
  ],
  listIntroHtml: '<strong>Почему жители Долгопрудного выбирают нас:</strong>',
  listItemsHtml: [
    'Оперативный выезд сметчика: не нужно ждать мастера из Москвы полдня.',
    'Опыт работы с планировками в ЖК "Московские Водники", "Бригантина" и др.',
    'Аккуратное выполнение работ в жилых квартирах с минимальным дискомфортом для соседей.',
    'Помощь в приемке материалов и проверка их качества на месте.',
    'Фиксированная цена в договоре, которая не меняется в процессе ремонта.',
  ],
  closingHtml:
    'Качественный ремонт санузла рядом с домом — это реально. Позвоните нам, и мы превратим вашу ванную комнату в идеальное место для отдыха.',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'Выезжаете ли вы в Новые Водники?',
    answer: 'Да, мы активно работаем в микрорайоне Новые Водники. Нам хорошо знакомы планировки санузлов в этих домах, что позволяет быстрее составлять смету и приступать к работам.',
  },
  {
    question: 'Сколько времени занимает ремонт совмещенного санузла?',
    answer: 'Стандартный капитальный ремонт совмещенного санузла "под ключ" занимает около 15-20 дней. Сроки зависят от площади помещения и выбранной плитки (крупный формат укладывается быстрее мозаики).',
  },
  {
    question: 'Как быть с отключением воды в Долгопрудном?',
    answer: 'Мы подскажем, как правильно оформить заявку в вашу управляющую компанию (УК) для отключения стояков. Обычно это занимает 1-2 дня.',
  },
  {
    question: 'Включен ли вывоз мусора в стоимость?',
    answer: 'Мы можем включить вывоз мусора в смету как дополнительную услугу. В Долгопрудном мы сотрудничаем с местными операторами, поэтому цены на вывоз контейнером вполне доступны.',
  },
  {
    question: 'Можно ли начать ремонт в выходные?',
    answer: 'Шумные работы в выходные дни ограничены законом, но мы можем выполнять тихие подготовительные работы, закупку материалов или демонтаж без использования перфоратора, чтобы не терять время.',
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
  slug: 'remont-sanuzla-dolgoprudnyy',
  path: '/remont-sanuzla-dolgoprudnyy/',
  canonicalPath: '/remont-sanuzla-dolgoprudnyy/',
  seo: {
    title: 'Ремонт санузла в Долгопрудном под ключ | Цена от мастеров | Ремонт ванной комнаты',
    description:
      'Ремонт санузла в Долгопрудном под ключ | Бесплатный выезд мастера | Гарантия 2 года | Без предоплаты | Лучшие цены на ремонт санузлов ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-dolgoprudnyy',
        title: 'Ремонт санузла в Долгопрудном',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Долгопрудном', href: '/remont-sanuzla-dolgoprudnyy/', isActive: true }] }),
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
