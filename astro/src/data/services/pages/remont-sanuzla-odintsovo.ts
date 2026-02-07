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
  summaryTitle: 'Профессиональный ремонт ванных комнат в Одинцово',
  paragraphsHtml: [
    'Город <strong>Одинцово</strong> — один из самых престижных и динамично развивающихся районов Подмосковья. Мы предлагаем услуги по ремонту санузлов для жителей всех микрорайонов: от исторического центра до <strong>Новой Трехгорки</strong>, <strong>Гусарской Баллады</strong> и <strong>Сколковского квартала</strong>. Наша команда понимает высокие требования к качеству отделки, привычные для жителей этого направления.',
    'Благодаря удобной логистике по Минскому и Можайскому шоссе, а также платной трассе Северный обход Одинцова, мы гарантируем соблюдение сроков поставки материалов и выполнения работ. Мы работаем как в современных новостройках комфорт- и бизнес-класса, так и во вторичном жилом фонде.',
  ],
  listIntroHtml: '<strong>Почему в Одинцово выбирают нас:</strong>',
  listItemsHtml: [
    'Бесплатный выезд сметчика в любой микрорайон, включая Трехгорку и Баковку.',
    'Опыт работы с дорогими отделочными материалами (мрамор, оникс, крупноформатный керамогранит).',
    'Строгое соблюдение закона о тишине, что критично для густонаселенных ЖК.',
    'Возможность дистанционного контроля хода работ через WhatsApp/Telegram.',
    'Гарантия 2 года, закрепленная в официальном договоре.',
  ],
  closingHtml:
    'Ремонт санузла в Одинцово — это инвестиция в комфорт вашей семьи. Доверьте эту задачу профессионалам, которые ценят ваше время и деньги. Запишитесь на замер уже сегодня!',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'Выезжаете ли вы в ЖК "Гусарская Баллада"?',
    answer: 'Да, мы активно работаем в "Гусарской Балладе", "Одинбурге", "Сколковском" и других крупных жилых комплексах. Нам хорошо знакомы планировки этих домов.',
  },
  {
    question: 'Где вы закупаете материалы?',
    answer: 'Мы сотрудничаем с крупными строительными гипермаркетами на МКАД и Минском шоссе. Также у нас есть прямые контракты с поставщиками сантехники, что позволяет предлагать вам выгодные цены.',
  },
  {
    question: 'Работаете ли вы с дизайн-проектами?',
    answer: 'Да, мы умеем читать чертежи и строго следуем технической документации. Если у вас есть дизайн-проект, мы реализуем его с точностью до миллиметра.',
  },
  {
    question: 'Можно ли сделать душевой трап в пол в квартире?',
    answer: 'В многоквартирных домах трап в пол (заливка стяжки) запрещена нормами, если это не предусмотрено застройщиком. Мы предлагаем законное решение — душевой подиум в строительном исполнении.',
  },
  {
    question: 'Сколько стоит выезд мастера в Лесной Городок или ВНИИССОК?',
    answer: 'Выезд инженера-сметчика по всему Одинцовскому городскому округу (в разумных пределах от города) осуществляется бесплатно.',
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
  slug: 'remont-sanuzla-odintsovo',
  path: '/remont-sanuzla-odintsovo/',
  canonicalPath: '/remont-sanuzla-odintsovo/',
  seo: {
    title: 'Ремонт санузла в Одинцово под ключ | Цена от мастеров | Ремонт ванной комнаты',
    description:
      'Ремонт санузла в Одинцово под ключ | Бесплатный выезд мастера | Гарантия 2 года | Без предоплаты | Лучшие цены на ремонт санузлов ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-odintsovo',
        title: 'Ремонт санузла в Одинцово',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Одинцово', href: '/remont-sanuzla-odintsovo/', isActive: true }] }),
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
