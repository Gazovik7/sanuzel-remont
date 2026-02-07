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
  summaryTitle: 'Качественный ремонт санузлов в Щёлково под ключ',
  paragraphsHtml: [
    'Город <strong>Щёлково</strong> — один из ключевых центров северо-востока Подмосковья, где мы предлагаем профессиональные услуги по ремонту санузлов. Мы работаем во всех районах города: от современных жилых комплексов в <strong>Богородском</strong> и <strong>Финском</strong> до сложившихся кварталов на улице Талсинская и в микрорайоне <strong>Чкаловский</strong>.',
    'Наша команда отлично знает специфику домов различных серий в Щёлково. Благодаря удобному расположению и налаженной логистике по Щёлковскому шоссе, мы обеспечиваем оперативную доставку материалов и соблюдение сроков. Мы создаем интерьеры, которые сочетают в себе эстетику и долговечность инженерных решений.',
  ],
  listIntroHtml: '<strong>Почему ремонт санузла в Щёлково доверяют нам:</strong>',
  listItemsHtml: [
    'Бесплатный выезд инженера-сметчика для замера и консультации в день обращения.',
    'Профессиональный монтаж коллекторных узлов и систем защиты от протечек.',
    'Идеальная укладка плитки любого формата с гарантией 2 года.',
    'Помощь в выборе и закупке материалов со скидками от наших партнеров.',
    'Соблюдение регламента шумных работ и чистоты в местах общего пользования.',
  ],
  closingHtml:
    'Ремонт санузла в Щёлково с нашей командой — это отсутствие хлопот и результат, которым вы будете гордиться. Оставьте заявку на бесплатный замер, и мы подготовим детальный расчет стоимости вашего проекта.',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'Выезжаете ли вы в микрорайон Чкаловский?',
    answer: 'Да, мы работаем во всех районах Щёлково, включая Чкаловский, Бахчиванджи и ближайшие поселки. Локация не влияет на стоимость работ.',
  },
  {
    question: 'Можно ли заказать ремонт санузла в новостройке ЖК "Богородский"?',
    answer: 'Конечно. Мы имеем большой опыт работы в ЖК "Богородский", "Финский", "Солнечный парк" и знаем особенности инженерных систем в этих домах.',
  },
  {
    question: 'Помогаете ли вы с отключением стояков через УК?',
    answer: 'Да, мы проконсультируем вас, как правильно подать заявку в вашу управляющую компанию для временного отключения водоснабжения.',
  },
  {
    question: 'Сколько времени занимает стандартный ремонт раздельного санузла?',
    answer: 'В среднем капитальный ремонт ванной комнаты и туалета "под ключ" занимает от 15 до 22 рабочих дней, в зависимости от сложности работ.',
  },
  {
    question: 'Где в Щёлково лучше покупать плитку и сантехнику?',
    answer: 'Мы можем посоветовать проверенные магазины и шоу-румы в Щёлково или Королёве, где наши клиенты часто получают дополнительные скидки.',
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
  slug: 'remont-sanuzla-shchyolkovo',
  path: '/remont-sanuzla-shchyolkovo/',
  canonicalPath: '/remont-sanuzla-shchyolkovo/',
  seo: {
    title: 'Ремонт санузла в Щёлково под ключ | Цена от мастеров | Ремонт ванной комнаты',
    description:
      'Ремонт санузла в Щёлково под ключ | Бесплатный выезд мастера | Гарантия 2 года | Без предоплаты | Лучшие цены на ремонт санузлов ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-shchyolkovo',
        title: 'Ремонт санузла в Щёлково',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Щёлково', href: '/remont-sanuzla-shchyolkovo/', isActive: true }] }),
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
