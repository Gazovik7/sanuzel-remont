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
  summaryTitle: 'Качественный ремонт санузла в Люберцах: от классики до лофта',
  paragraphsHtml: [
    'Город <strong>Люберцы</strong> — один из самых активно застраивающихся районов Подмосковья, и мы рады предложить свои услуги жителям как старого фонда, так и современных кварталов. Наши бригады постоянно работают в <strong>Люберцах-2015/2024</strong>, <strong>Красной Горке</strong>, микрорайонах <strong>Городок А</strong> и <strong>Б</strong>. Мы знаем специфику домов от ГК "Самолет", ПИК и других застройщиков.',
    'Ремонт санузла в Люберцах с нами — это сочетание московских стандартов качества и глубокого понимания местной специфики. Мы поможем сэкономить на материалах благодаря партнерству с крупными базами в <strong>Котельниках</strong> и организуем работу так, чтобы вы могли въехать в обновленную квартиру точно в срок.',
  ],
  listIntroHtml: '<strong>Почему нас выбирают в Люберцах:</strong>',
  listItemsHtml: [
    'Опыт работы с коллекторной разводкой и современными системами отопления.',
    'Бесплатный замер и консультация в любой точке города в удобное время.',
    'Мастера-славяне с профильным образованием и опытом от 7 лет.',
    'Соблюдение тишины и чистоты, что критично в заселенных новостройках.',
    'Помощь в приемке квартиры и выявлении скрытых дефектов застройщика в санузле.',
  ],
  closingHtml:
    'Ваша идеальная ванная в Люберцах начинается с одного звонка. Оставьте заявку, и мы бесплатно рассчитаем стоимость ремонта в трех вариантах исполнения.',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'Вы работаете в районе Некрасовка?',
    answer: 'Да, хотя Некрасовка — это Москва, территориально она плотно прилегает к Люберцам, и мы обслуживаем этот район на стандартных условиях без наценок.',
  },
  {
    question: 'С какими управляющими компаниями Люберец вы взаимодействуете?',
    answer: 'Мы имеем опыт работы с УК "Самолет-Сервис", "ПИК-Комфорт", "ЛГЖТ" и другими. Мы подскажем, как правильно оформить заявку на отключение воды.',
  },
  {
    question: 'Можете ли вы посоветовать, где купить плитку в Люберцах?',
    answer: 'Мы рекомендуем шоу-румы в Котельниках или на Октябрьском проспекте, где у нас есть партнерские скидки для клиентов.',
  },
  {
    question: 'Делаете ли вы звукоизоляцию труб в санузле?',
    answer: 'Да, это очень актуально для панельных новостроек Люберец. Мы используем специальные материалы для шумоизоляции стояков канализации.',
  },
  {
    question: 'Как долго сохнет штукатурка перед укладкой плитки?',
    answer: 'В зависимости от слоя и влажности — от 7 до 14 дней. Мы строго соблюдаем технологию, чтобы плитка не отвалилась через год.',
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
  slug: 'remont-sanuzla-lubertsy',
  path: '/remont-sanuzla-lubertsy/',
  canonicalPath: '/remont-sanuzla-lubertsy/',
  seo: {
    title: 'Ремонт санузла в Люберцах под ключ | Цена от мастеров | Ремонт ванной комнаты',
    description:
      'Ремонт санузла в Люберцах под ключ | Бесплатный выезд мастера | Гарантия 2 года | Без предоплаты | Лучшие цены на ремонт санузлов ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-lubertsy',
        title: 'Ремонт санузла в Люберцах',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Люберцах', href: '/remont-sanuzla-lubertsy/', isActive: true }] }),
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
