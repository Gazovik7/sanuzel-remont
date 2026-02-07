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
  summaryTitle: 'Профессиональный ремонт санузла в Бутово',
  paragraphsHtml: [
    'Район <strong>Бутово</strong> — один из крупнейших жилых массивов Москвы со сложившейся застройкой и развитой инфраструктурой. Ремонт санузла в таких домах требует глубокого понимания особенностей типовых планировок и умения максимально эффективно использовать имеющуюся площадь. Мы предлагаем жителям Северного и Южного Бутово качественные услуги по обновлению ванных комнат и туалетов под ключ.',
    'Наши бригады постоянно работают на объектах в Бутово, отлично зная нюансы домов серий П-44, П-3 и других. Мы предлагаем проверенные решения по разводке коммуникаций, установке современной сантехники и финишной отделке, которые прослужат десятилетия, обеспечивая комфорт для всей семьи.',
  ],
  listIntroHtml: '<strong>Наши преимущества при ремонте санузлов в Бутово:</strong>',
  listItemsHtml: [
    'Глубокое знание технических особенностей типовых домов района.',
    'Полная замена труб на современные системы (Rehau, полипропилен).',
    'Высококачественная укладка керамической плитки и керамогранита.',
    'Монтаж систем инсталляции, ванн и душевых ограждений любой сложности.',
    'Официальная гарантия 2 года на все виды работ по договору.',
  ],
  closingHtml:
    'Ремонт санузла в Бутово с нашей командой — это залог качества и отсутствия стресса. Мы берем на себя все хлопоты: от демонтажа до финальной уборки. Закажите бесплатный замер и получите детальную смету вашего ремонта прямо сейчас!',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужно ли менять полотенцесушитель в типовом доме Бутово?',
  answer:
    'В большинстве случаев мы рекомендуем замену старого водяного полотенцесушителя на новую модель или установку электрического варианта для повышения надежности системы.',
},
{
  question: 'Как быстро вы можете приехать на замер в ЮЗАО?',
  answer:
    'Наши специалисты работают в Бутово ежедневно, поэтому замер возможен в день обращения или в любое удобное для вас время.',
},
{
  question: 'Помогаете ли вы с закупкой материалов?',
  answer:
    'Да, мы полностью берем на себя подбор, закупку и доставку качественных черновых материалов, предоставляя всю необходимую отчетность.',
},
{
  question: 'Сколько времени занимает ремонт стандартной ванной комнаты?',
  answer:
    'В среднем ремонт "под ключ" в типовом доме Бутово занимает от 12 до 18 рабочих дней.',
},
{
  question: 'Бесплатен ли выезд мастера на замер?',
  answer:
    'Да, выезд нашего технического специалиста для осмотра помещения и составления сметы в Бутово осуществляется совершенно бесплатно.',
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
  slug: 'remont-sanuzla-butovo',
  path: '/remont-sanuzla-butovo/',
  canonicalPath: '/remont-sanuzla-butovo/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Бутово | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Бутово | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-butovo',
        title: 'Ремонт санузла у станции метро Бутово',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Бутово', href: '/remont-sanuzla-butovo/', isActive: true }] }),
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

