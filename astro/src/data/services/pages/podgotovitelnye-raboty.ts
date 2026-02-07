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
  summaryTitle: 'Подготовительные и демонтажные работы в ванной комнате',
  paragraphsHtml: [
    'Качественный ремонт начинается с грамотной подготовки. <strong>Подготовительные работы</strong> в санузле — это фундамент, от которого зависит надежность будущих коммуникаций и долговечность чистовой отделки. Небрежность на этом этапе может привести к отслоению плитки, трещинам и проблемам с геометрией помещения.',
    'Мы выполняем полный комплекс демонтажных и черновых работ: от сноса старой плитки и сантехкабин до выравнивания стен и устройства стяжки. Наши мастера работают профессиональным инструментом, соблюдая технологии и минимизируя уровень шума и пыли. Мы также берем на себя упаковку и вывоз строительного мусора, освобождая вас от тяжелого труда.',
  ],
  listIntroHtml: '<strong>Что входит в подготовительные работы:</strong>',
  listItemsHtml: [
    'Демонтаж старой плитки, штукатурки, краски и напольных покрытий.',
    'Снос перегородок и сантехкабин (при перепланировке).',
    'Демонтаж старых труб водоснабжения, канализации и сантехники.',
    'Грунтовка поверхностей бетоноконтактом или проникающими составами.',
    'Штукатурка стен по маякам и устройство ровной стяжки пола.',
  ],
  closingHtml:
    'Начните ремонт правильно с профессиональной подготовки помещения. Мы гарантируем скорость, аккуратность и соблюдение строительных норм. Закажите выезд специалиста для оценки объема работ и составления сметы.',
};

const PAGE_FAQ: FaqItem[] = [{
  question: 'Как происходит вывоз мусора?',
  answer:
    'Мы собираем строительный мусор в прочные мешки, выносим их из квартиры и организуем вывоз контейнером на специализированный полигон. Вам не нужно об этом беспокоиться.',
},
{
  question: 'Нужно ли сносить сантехкабину в панельном доме?',
  answer:
    'Снос сантехкабины часто позволяет выиграть 5-10 см пространства по периметру и увеличить высоту потолка. Решение принимается индивидуально, но это эффективный способ расширить санузел.',
},
{
  question: 'Сколько времени занимает демонтаж ванной комнаты?',
  answer:
    'Полный демонтаж "под бетон" в стандартном раздельном санузле обычно занимает 1-2 рабочих дня.',
},
{
  question: 'Шумные ли это работы?',
  answer:
    'Да, демонтаж — это шумный процесс. Мы строго соблюдаем закон о тишине г. Москвы, прерываясь на "тихий час" и не работая в запрещенное время.',
},
{
  question: 'Нужно ли грунтовать стены после демонтажа?',
  answer:
    'Обязательно. Грунтовка обеспыливает поверхность и улучшает адгезию (сцепление) штукатурки со стеной, предотвращая её отслоение в будущем.',
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
  slug: 'podgotovitelnye-raboty',
  path: '/podgotovitelnye-raboty/',
  canonicalPath: '/podgotovitelnye-raboty/',
  seo: {
    title: 'Подготовительные работы в ванной комнате и санузле в Москве | Цена на подготовку санузла под ремонт',
    description:
      'Подготовительные работы в ванной комнате и санузле в Москве | Бесплатный выезд сантехника | Гарантия до 2 лет | Быстрый ремонт от 21 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-podgotovitelnye-raboty',
        title: 'Подготовительные работы в ванной комнате',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Подготовительные работы по ремонту ванной', href: '/podgotovitelnye-raboty/', isActive: true }] }),
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

