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
  summaryTitle: 'Ремонт ванной комнаты в новостройке в Москве: с нуля и без переделок',
  paragraphsHtml: [
    'Профессиональный <strong>ремонт ванной комнаты в новостройке</strong> начинается с подготовки помещения без готовой отделки. Важно правильно выполнить разводку коммуникаций, гидроизоляцию и выравнивание поверхностей, чтобы избежать переделок в будущем.',
    'Мы выполняем ремонт ванных комнат в новостройках Москвы под ключ: работаем с черновыми помещениями, подготавливаем инженерные системы, выполняем отделку и устанавливаем сантехнику. Все этапы и сроки согласуются заранее, смета фиксируется до начала работ.',
  ],
  listIntroHtml: '<strong>Что обычно включает ремонт ванной комнаты в новостройке:</strong>',
  listItemsHtml: [
    'Разводка труб водоснабжения и канализации с нуля под выбранную сантехнику.',
    'Прокладка электропроводки и установка влагозащищенных розеток и освещения.',
    'Гидроизоляция пола и стен с соблюдением строительных норм.',
    'Выравнивание поверхностей и подготовка под чистовую отделку.',
    'Укладка плитки, монтаж сантехники, мебели и аксессуаров.',
  ],
  closingHtml:
    'Стоимость ремонта ванной комнаты в новостройке зависит от площади помещения, выбранных материалов и сложности инженерных работ. Для точного расчета достаточно планировки, замеров или фото. После согласования фиксируем состав работ, сроки и стоимость в договоре.',
};


const PAGE_FAQ: FaqItem[] = [{
  question: 'С чего начинается ремонт ванной комнаты в новостройке?',
  answer:
    'Ремонт ванной в новостройке начинается с проектирования и разводки коммуникаций: труб, электрики и вентиляции. Это позволяет избежать переделок после завершения отделки.',
},
{
  question: 'Нужно ли делать гидроизоляцию в ванной новостройки?',
  answer:
    'Да, гидроизоляция обязательна даже в новых домах. Она защищает от протечек и соответствует требованиям строительных норм.',
},
{
  question: 'Можно ли сразу делать чистовую отделку в новостройке?',
  answer:
    'Перед чистовой отделкой необходимо выполнить все инженерные работы, выравнивание и гидроизоляцию. Только после этого приступают к укладке плитки и монтажу сантехники.',
},
{
  question: 'Сколько стоит ремонт ванной комнаты в новостройке в Москве?',
  answer:
    'Стоимость ремонта ванной в новостройке зависит от площади, сложности разводки коммуникаций и выбранных материалов. Точная цена рассчитывается после замеров или анализа планировки.',
},
{
  question: 'Сколько времени занимает ремонт ванной в новостройке?',
  answer:
    'В среднем ремонт ванной комнаты в новостройке занимает от 3 до 6 недель. Сроки зависят от объема работ и выбранных решений.',
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
  slug: 'remont-vannoy-v-novostroyke',
  path: '/remont-vannoy-v-novostroyke/',
  canonicalPath: '/remont-vannoy-v-novostroyke/',
  seo: {
    title: 'Ремонт ванной в новостройке под ключ в Москве | Ремонт санузла в новостройке под ключ цена',
    description:   'Ремонт ванной в новостройке | Бесплатный выезд сантехника | Гарантия до 3 лет | Быстрый ремонт от 1 дня! Лучшие цены на ремонт санузлов в Москве ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-vannoy-v-novostroyke',
        title: 'Ремонт ванной в новостройке под ключ',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в новостройках под ключ', href: '/remont-vannoy-v-novostroyke/', isActive: true }] }),
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

