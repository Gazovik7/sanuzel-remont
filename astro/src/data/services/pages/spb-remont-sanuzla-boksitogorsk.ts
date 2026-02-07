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
  summaryTitle: 'Ремонт санузлов в Бокситогорске — качественно и по договору',
  paragraphsHtml: [
    '<strong>Бокситогорск</strong> — небольшой город на востоке Ленинградской области с преимущественно советской жилой застройкой. Панельные и кирпичные дома 60–80-х годов нуждаются в капитальном обновлении санузлов: замене изношенных труб, устаревшей плитки и сантехники. Наша команда выполняет весь спектр работ по ремонту ванных комнат в таких домах.',
    'Несмотря на удалённость от Санкт-Петербурга, мы организуем выезд бригады и доставку материалов в Бокситогорск. Все условия — сроки, стоимость, объём работ — фиксируются в договоре до начала ремонта.',
  ],
  listIntroHtml: '<strong>Что мы предлагаем жителям Бокситогорска:</strong>',
  listItemsHtml: [
    'Капитальный ремонт санузлов в панельных и кирпичных домах советской постройки.',
    'Полная замена труб водоснабжения и канализации на современные материалы.',
    'Качественная гидроизоляция — защита от протечек и грибка.',
    'Укладка плитки, установка ванны, душевой кабины и другой сантехники.',
    'Организованная доставка материалов из Санкт-Петербурга по фиксированной стоимости.',
  ],
  closingHtml:
    'Хотите обновить ванную комнату в Бокситогорске? Оставьте заявку — мы организуем выезд инженера для замера, составим подробную смету и выполним ремонт с гарантией 2 года.',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'Действительно ли вы выезжаете в Бокситогорск?',
    answer: 'Да, мы работаем по всей Ленинградской области, включая Бокситогорск и Бокситогорский район. Выезд бригады организуем после согласования сметы и подписания договора.',
  },
  {
    question: 'Как организована доставка материалов в Бокситогорск?',
    answer: 'Мы организуем комплексную доставку всех необходимых материалов из Санкт-Петербурга одной машиной. Стоимость доставки фиксируется в смете заранее.',
  },
  {
    question: 'Сколько времени занимает ремонт санузла?',
    answer: 'Стандартный ремонт «под ключ» — 14–21 день. Мы стараемся организовать работу так, чтобы бригада жила на месте и выполняла ремонт без перерывов.',
  },
  {
    question: 'Можно ли заменить только трубы без полного ремонта?',
    answer: 'Да, мы выполняем как полный ремонт, так и отдельные виды работ: замену труб, укладку плитки, установку сантехники.',
  },
  {
    question: 'Дороже ли ремонт из-за удалённости от Петербурга?',
    answer: 'Стоимость самих работ не отличается от петербургских расценок. Дополнительно оплачивается только доставка материалов, которая фиксируется в смете заранее.',
  },
];

const QUALITY = use('quality');
const INCLUDED = use('included');
const GEOGRAPHY = use('geography');

export const page: ServicePage = {
  slug: 'spb-remont-sanuzla-boksitogorsk',
  path: '/spb/remont-sanuzla-boksitogorsk/',
  canonicalPath: '/spb/remont-sanuzla-boksitogorsk/',
  seo: {
    title: 'Ремонт санузла в Бокситогорске под ключ | Цена от мастеров | Ремонт ванной комнаты',
    description:
      'Ремонт санузла в Бокситогорске под ключ | Бесплатный выезд мастера | Гарантия 2 года | Без предоплаты | Фиксированная смета на ремонт санузлов',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-spb-remont-sanuzla-boksitogorsk',
        title: 'Ремонт санузла в Бокситогорске',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Санкт-Петербург', href: '/spb/' }, { label: 'Ремонт санузлов в Бокситогорске', href: '/spb/remont-sanuzla-boksitogorsk/', isActive: true }] }),
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
