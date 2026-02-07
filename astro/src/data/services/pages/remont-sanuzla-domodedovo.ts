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
  summaryTitle: 'Профессиональный ремонт ванных комнат в Домодедово',
  paragraphsHtml: [
    'Выполняем ремонт санузлов любой сложности в городском округе <strong>Домодедово</strong>. Мы работаем не только в центре города, но и в микрорайонах <strong>Авиационный</strong>, <strong>Востряково</strong>, <strong>Барыбино</strong>, а также в новых жилых комплексах "Домодедово Парк" и "Южное Домодедово".',
    'Наша логистика оптимизирована под трафик трассы М-4 "Дон" и Каширского шоссе, что позволяет нам доставлять материалы без задержек. Мы учитываем особенности местных водопроводных сетей (в том числе высокую жесткость воды) при монтаже сантехники.',
  ],
  listIntroHtml: '<strong>Почему жители Домодедово выбирают нас:</strong>',
  listItemsHtml: [
    'Бесплатный выезд сметчика в любой уголок округа, включая частный сектор.',
    'Опыт работы с планировками в новостройках от застройщика ЛСР и ПИК.',
    'Помощь в выборе фильтров для воды, актуальных для домодедовской воды.',
    'Соблюдение графика шумных работ, принятого в Московской области.',
    'Возможность дистанционного контроля хода работ для клиентов, работающих в Москве.',
  ],
  closingHtml:
    'Сделайте свою ванную комнату удобной и современной. Закажите бесплатный замер, и мы предложим лучшее решение для вашего бюджета с учетом всех технических нюансов.',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'Работаете ли вы в микрорайоне Белые Столбы?',
    answer: 'Да, наши бригады выезжают во все отдаленные микрорайоны Домодедово, включая Белые Столбы, Барыбино и Гальчино. На стоимость работ удаленность от центра города не влияет.',
  },
  {
    question: 'Сколько стоит черновая сантехника с доставкой?',
    answer: 'Мы закупаем трубы и фитинги у проверенных поставщиков (Rehau, Tece) с оптовыми скидками. Точную стоимость материалов инженер рассчитает после осмотра объекта, но обычно это выходит дешевле, чем самостоятельная покупка на строительных рынках.',
  },
  {
    question: 'Можете ли вы установить систему защиты от протечек?',
    answer: 'Обязательно. Мы рекомендуем установку систем (например, Нептун или Аквасторож) во всех квартирах, особенно в новостройках, чтобы избежать проблем с соседями и ремонтом.',
  },
  {
    question: 'Как решается вопрос с вывозом строительного мусора?',
    answer: 'В Домодедово мы сотрудничаем с лицензированными перевозчиками. Мы организуем подачу контейнера и погрузку мусора, чтобы у вас не возникло проблем с управляющей компанией.',
  },
  {
    question: 'Нужно ли мне быть дома во время ремонта?',
    answer: 'Не обязательно. Мы можем работать автономно, предоставляя вам фото- и видеоотчеты о каждом этапе работ в WhatsApp или Telegram.',
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
  slug: 'remont-sanuzla-domodedovo',
  path: '/remont-sanuzla-domodedovo/',
  canonicalPath: '/remont-sanuzla-domodedovo/',
  seo: {
    title: 'Ремонт санузла в Домодедово под ключ | Цена от мастеров | Ремонт ванной комнаты',
    description:
      'Ремонт санузла в Домодедово под ключ | Бесплатный выезд мастера | Гарантия 2 года | Без предоплаты | Лучшие цены на ремонт санузлов ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-domodedovo',
        title: 'Ремонт санузла в Домодедово',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Домодедово', href: '/remont-sanuzla-domodedovo/', isActive: true }] }),
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
