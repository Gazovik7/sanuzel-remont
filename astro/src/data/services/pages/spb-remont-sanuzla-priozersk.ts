import { buildBlocks, unique, use } from '../builder';
import {
  FAQ_BLOCK_CONTENT,
  HERO_LEAD_PARAGRAPH_DEFAULT,
  HERO_OFFERS_DEFAULT,
} from '../shared/blockContent';
import { INCLUDED_WORKS, QUALITY_CHECKLIST } from '../shared/datasets';
import { SPB_GEOGRAPHY_BLOCK_CONTENT } from './spb-home';
import type { FaqItem } from '../../../legacy/types';
import type { SeoTextBlockConfig, ServicePage } from '../types';

const PAGE_SEO_TEXT_BLOCK_CONTENT: SeoTextBlockConfig = {
  summaryTitle: 'Ремонт ванных комнат в Приозерске на Карельском перешейке',
  paragraphsHtml: [
    '<strong>Приозерск</strong> — живописный город на Карельском перешейке, расположенный на берегу Ладожского озера и реки Вуоксы. Здесь сочетаются исторические постройки, типовые многоквартирные дома и загородные коттеджи. Мы выполняем ремонт санузлов во всех типах жилья, учитывая особенности каждого объекта.',
    'Благодаря близости к природным водоёмам, вопрос качественной гидроизоляции в Приозерске особенно актуален. Наши мастера используют проверенные материалы и технологии, обеспечивающие надёжную защиту от влаги на долгие годы.',
  ],
  listIntroHtml: '<strong>Наши услуги по ремонту санузлов в Приозерске:</strong>',
  listItemsHtml: [
    'Полный ремонт «под ключ» в квартирах и загородных домах.',
    'Усиленная гидроизоляция с учётом близости водоёмов и высокой влажности.',
    'Демонтаж старой отделки и вывоз строительного мусора.',
    'Замена водопроводных труб и канализации на современные материалы.',
    'Установка тёплого пола, вентиляции и систем защиты от протечек.',
  ],
  closingHtml:
    'Запишитесь на бесплатный замер в Приозерске — наш инженер приедет, составит смету и ответит на все вопросы по ремонту вашего санузла.',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'Делаете ли вы ремонт в загородных домах Приозерского района?',
    answer: 'Да, мы работаем как в многоквартирных домах Приозерска, так и в загородных коттеджах и дачных домах по всему Приозерскому району.',
  },
  {
    question: 'Учитываете ли вы повышенную влажность в районе?',
    answer: 'Обязательно. Мы применяем усиленную двухслойную гидроизоляцию пола и стен, а также рекомендуем влагостойкие отделочные материалы для долговечного результата.',
  },
  {
    question: 'Какие сроки ремонта санузла в Приозерске?',
    answer: 'Стандартный ремонт «под ключ» занимает 14–21 день. В загородных домах с нестандартными планировками сроки могут быть увеличены до 25–30 дней.',
  },
  {
    question: 'Откуда вы доставляете материалы?',
    answer: 'Материалы доставляем со складов Санкт-Петербурга. При необходимости помогаем с выбором и закупкой — наши специалисты подберут оптимальные материалы под ваш бюджет.',
  },
  {
    question: 'Нужно ли мне быть на объекте во время ремонта?',
    answer: 'Нет, ваше постоянное присутствие не требуется. Мы присылаем фотоотчёты по каждому этапу, а вы приезжаете только на приемку выполненных работ.',
  },
];

const QUALITY = use('quality');
const INCLUDED = use('included');
const GEOGRAPHY = use('geography');

export const page: ServicePage = {
  slug: 'spb-remont-sanuzla-priozersk',
  path: '/spb/remont-sanuzla-priozersk/',
  canonicalPath: '/spb/remont-sanuzla-priozersk/',
  seo: {
    title: 'Ремонт санузла в Приозерске под ключ | Цена от мастеров | Ремонт ванной комнаты',
    description:
      'Ремонт санузла в Приозерске под ключ | Бесплатный выезд мастера | Гарантия 2 года | Без предоплаты | Фиксированная смета на ремонт санузлов',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-spb-remont-sanuzla-priozersk',
        title: 'Ремонт санузла в Приозерске',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Санкт-Петербург', href: '/spb/' }, { label: 'Ремонт санузлов в Приозерске', href: '/spb/remont-sanuzla-priozersk/', isActive: true }] }),
    use('comparison'),
    use('portfolioDefault'),
    unique({ ...QUALITY, checklist: QUALITY_CHECKLIST }),
    use('whyUs'),
    use('calculatorDefault'),
    use('packagesDefault'),
    unique({ ...INCLUDED, works: INCLUDED_WORKS }),
    use('workflow'),
    use('team'),
    use('guarantee'),
    use('reviews'),
    unique({ type: 'seoText', config: PAGE_SEO_TEXT_BLOCK_CONTENT }),
    unique({ type: 'faq', variant: 'default', config: FAQ_BLOCK_CONTENT, items: PAGE_FAQ }),
    unique({ ...GEOGRAPHY, config: SPB_GEOGRAPHY_BLOCK_CONTENT }),
  ]),
};
