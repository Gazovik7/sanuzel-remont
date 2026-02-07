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
  summaryTitle: 'Ремонт санузлов в Шушарах — южные ворота Петербурга',
  paragraphsHtml: [
    '<strong>Шушары</strong> — активно застраивающийся район на юге Санкт-Петербурга, вдоль Московского и Витебского проспектов. Здесь сочетаются крупные жилые комплексы-новостройки и более старая застройка. Мы выполняем ремонт санузлов в любом типе жилья: от студий в новых ЖК до просторных квартир в кирпичных домах.',
    'Удобное расположение Шушар вблизи КАД и Московского шоссе позволяет нам быстро доставлять материалы со складов и оперативно начинать работы. Наши бригады регулярно работают в этом районе и знают особенности местных новостроек.',
  ],
  listIntroHtml: '<strong>Наши преимущества при ремонте в Шушарах:</strong>',
  listItemsHtml: [
    'Опыт работы в новостройках Шушар — знаем планировки и особенности застройщиков.',
    'Быстрая доставка материалов благодаря близости к КАД и складским зонам.',
    'Полный цикл работ: от демонтажа до установки зеркал и аксессуаров.',
    'Гидроизоляция пола и стен — обязательный этап каждого ремонта.',
    'Работа по договору с фиксированной сметой и сроками.',
  ],
  closingHtml:
    'Живёте в Шушарах? Закажите бесплатный замер — наш инженер приедет, оценит объём работ и рассчитает стоимость ремонта санузла за 1 день.',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'Работаете ли вы во всех ЖК Шушар?',
    answer: 'Да, мы работаем во всех жилых комплексах Шушар, включая новостройки вдоль Московского шоссе и Витебского проспекта.',
  },
  {
    question: 'Есть ли ограничения по шумным работам в Шушарах?',
    answer: 'Мы соблюдаем все нормы Санкт-Петербурга по проведению шумных работ: с 8:00 до 22:00 в будни и с 12:00 до 22:00 в выходные, с перерывом на тихий час с 13:00 до 15:00.',
  },
  {
    question: 'Сколько стоит ремонт санузла в новостройке в Шушарах?',
    answer: 'Стоимость зависит от площади и выбранных материалов. Мы предоставим бесплатный расчёт сметы в трёх вариантах бюджета.',
  },
  {
    question: 'Можете ли вы сделать перепланировку санузла?',
    answer: 'Да, мы выполняем объединение ванной и туалета, а также другие виды перепланировки. Поможем с оформлением документации.',
  },
  {
    question: 'Как организована оплата работ?',
    answer: 'Работаем без предоплаты. Оплата поэтапная: вы платите за каждый выполненный и принятый этап работ. Все условия фиксируются в договоре.',
  },
];

const QUALITY = use('quality');
const INCLUDED = use('included');
const GEOGRAPHY = use('geography');

export const page: ServicePage = {
  slug: 'spb-remont-sanuzla-shushary',
  path: '/spb/remont-sanuzla-shushary/',
  canonicalPath: '/spb/remont-sanuzla-shushary/',
  seo: {
    title: 'Ремонт санузла в Шушарах под ключ | Цена от мастеров | Ремонт ванной комнаты',
    description:
      'Ремонт санузла в Шушарах под ключ | Бесплатный выезд мастера | Гарантия 2 года | Без предоплаты | Фиксированная смета на ремонт санузлов',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-spb-remont-sanuzla-shushary',
        title: 'Ремонт санузла в Шушарах',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Санкт-Петербург', href: '/spb/' }, { label: 'Ремонт санузлов в Шушарах', href: '/spb/remont-sanuzla-shushary/', isActive: true }] }),
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
