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
  summaryTitle: 'Профессиональный ремонт ванных комнат на Войковской',
  paragraphsHtml: [
    'Район метро <strong>Войковская</strong> славится своими сталинскими домами с высокими потолками и просторными планировками, а также качественными кирпичными домами советского периода. Ремонт санузлов в таких зданиях требует особого мастерства: часто необходимо укрепление перекрытий, замена нестандартных коммуникаций и бережное отношение к архитектурным особенностям.',
    'Мы специализируемся на ремонте в старом фонде и современных ЖК района Войковский (SAO). Наши мастера умеют работать с дранкой, габаритными чугунными ваннами и сложной геометрией помещений, создавая современные и комфортные интерьеры.',
  ],
  listIntroHtml: '<strong>Особенности ремонта на Войковской с нами:</strong>',
  listItemsHtml: [
    'Опыт капитального ремонта в "сталинках" и кирпичных домах.',
    'Аккуратный демонтаж старой отделки с сохранением (по желанию) исторических элементов.',
    'Выравнивание высоких стен (до 3-3.2 м) с соблюдением геометрии.',
    'Монтаж современной вентиляции в старые вентканалы.',
    'Индивидуальные дизайн-проекты, подчеркивающие статус жилья.',
  ],
  closingHtml:
    'Ремонт в историческом районе требует профессионализма. Доверьте свою ванную комнату экспертам. Закажите выезд инженера на Войковскую для детальной оценки состояния помещения и расчета точной сметы.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Сложно ли делать ремонт в сталинском доме?',
  answer:
    'Ремонт в сталинке технически сложнее из-за деревянных или смешанных перекрытий, старых коммуникаций и толстого слоя штукатурки. Мы имеем большой опыт таких работ и знаем все нюансы.',
},
{
  question: 'Сколько стоит ремонт ванной в сталинке на Войковской?',
  answer:
    'Стоимость выше, чем в панельном доме, из-за объема демонтажных и черновых работ. Ориентировочно — от 110 000 рублей за комплексный ремонт. Точную цену назовет замерщик.',
},
{
  question: 'Меняете ли вы газовую колонку в ванной?',
  answer:
    'Мы выполняем подготовку стен и труб, но перенос и подключение газового оборудования должны выполнять сертифицированные специалисты газовой службы. Мы работаем в связке с ними.',
},
{
  question: 'Как быть с соседями при шумных работах?',
  answer:
    'Мы строго соблюдаем закон о тишине г. Москвы и всегда стараемся минимизировать дискомфорт для соседей. Шумные работы планируются на середину дня.',
},
{
  question: 'Какие сроки ремонта в старом фонде?',
  answer:
    'Из-за необходимости тщательной подготовки поверхностей и сохнущих слоев штукатурки, ремонт может занять от 25 до 35 дней.',
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
  slug: 'remont-sanuzla-voykovskaya',
  path: '/remont-sanuzla-voykovskaya/',
  canonicalPath: '/remont-sanuzla-voykovskaya/',
  seo: {
    title: 'Ремонт санузла под ключ у станции метро Войковская | Вызов мастера цена | Ремонт ванной комнаты',
    description:
      'Ремонт санузла у станции метро Войковская | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-voykovskaya',
        title: 'Ремонт санузла у станции метро Войковская',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов на Войковской', href: '/remont-sanuzla-voykovskaya/', isActive: true }] }),
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

