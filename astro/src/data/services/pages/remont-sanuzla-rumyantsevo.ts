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
  summaryTitle: 'Современный ремонт санузла в Румянцево под ключ',
  paragraphsHtml: [
    'Район метро <strong>Румянцево</strong> — это территория новых возможностей и современных жилых комплексов в Новой Москве. Ремонт санузла в новостройках этого района требует высокого уровня инженерной подготовки, использования технологичных материалов и соблюдения актуальных дизайнерских трендов. Мы предлагаем жителям Румянцево профессиональный сервис по созданию идеальных ванных комнат.',
    'Наша команда специализируется на работе с современными инженерными системами: скрытый монтаж, инсталляции, душевые зоны в строительном исполнении и сложные сценарии освещения. Мы учитываем специфику новых домов, применяя решения, устойчивые к возможным деформациям в период усадки здания.',
  ],
  listIntroHtml: '<strong>Наши компетенции для объектов в Румянцево:</strong>',
  listItemsHtml: [
    'Проектирование и монтаж надежных систем водоснабжения и канализации.',
    'Идеальная укладка керамогранита, в том числе крупного формата.',
    'Установка и настройка систем защиты от протечек и "умного" освещения.',
    'Монтаж стильных душевых ограждений и подвесной сантехники.',
    'Полное сопровождение: от помощи в выборе материалов до клининга.',
  ],
  closingHtml:
    'Сделайте свой санузел в Румянцево образцом стиля и надежности. Мы гарантируем профессиональный подход и безупречное качество на каждом этапе работ. Запишитесь на бесплатный замер и получите расчет стоимости вашего проекта.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Нужна ли гидроизоляция в ванной в новостройке Румянцево?',
  answer:
    'Да, качественная гидроизоляция обязательна для защиты конструкции дома и предотвращения протечек к соседям. Мы выполняем её согласно всем строительным нормам.',
},
{
  question: 'Работаете ли вы с дизайн-проектами?',
  answer:
    'Да, мы имеем большой опыт реализации сложных проектов любой сложности, в точности соблюдая все указания дизайнера и технические параметры.',
},
{
  question: 'Как долго длится ремонт санузла в новостройке?',
  answer:
    'В зависимости от сложности проекта, ремонт занимает от 15 до 25 рабочих дней.',
},
{
  question: 'Какую систему труб вы рекомендуете для новых домов?',
  answer:
    'Для максимальной надежности в современных ЖК мы рекомендуем использовать сшитый полиэтилен Rehau или аналоги, подходящие для скрытого монтажа.',
},
{
  question: 'Предоставляете ли вы скидки при ремонте сразу нескольких помещений?',
  answer:
    'Да, для владельцев квартир в Румянцево у нас действуют специальные условия при заказе комплексного ремонта нескольких санузлов или всей квартиры.',
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
  slug: 'remont-sanuzla-rumyantsevo',
  path: '/remont-sanuzla-rumyantsevo/',
  canonicalPath: '/remont-sanuzla-rumyantsevo/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Румянцево | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Румянцево | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-rumyantsevo',
        title: 'Ремонт санузла у станции метро Румянцево',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Румянцево', href: '/remont-sanuzla-rumyantsevo/', isActive: true }] }),
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

