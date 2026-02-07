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
  summaryTitle: 'Профессиональный ремонт ванных комнат в Волхове',
  paragraphsHtml: [
    '<strong>Волхов</strong> — промышленный город на одноименной реке, известный первой крупной ГЭС России. Жилой фонд Волхова представлен преимущественно кирпичными и панельными домами советской постройки, в которых санузлы давно требуют обновления. Мы специализируемся на ремонте ванных комнат в домах с такими планировками и учитываем все их особенности.',
    'Работаем в Волхове и Новой Ладоге. Обеспечиваем полный цикл ремонта: от демонтажа старой отделки и замены коммуникаций до финишной укладки плитки и установки сантехники. Все материалы доставляем организованно, подъём на этаж включён.',
  ],
  listIntroHtml: '<strong>Что мы предлагаем жителям Волхова:</strong>',
  listItemsHtml: [
    'Ремонт санузлов в кирпичных и панельных домах с учётом типовых планировок.',
    'Полная замена труб водоснабжения и канализации.',
    'Качественная гидроизоляция пола и стен — защита от протечек к соседям.',
    'Укладка плитки и керамогранита с выверенной геометрией.',
    'Фиксированная смета без скрытых доплат и работа строго по договору.',
  ],
  closingHtml:
    'Доверьте ремонт ванной комнаты в Волхове нашей команде — мы приведём ваш санузел в порядок быстро, качественно и с гарантией 2 года.',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'Работаете ли вы в Новой Ладоге?',
    answer: 'Да, мы выезжаем на объекты в Волхове, Новой Ладоге и других населённых пунктах Волховского района.',
  },
  {
    question: 'Можете ли вы заменить старые чугунные трубы?',
    answer: 'Конечно. Полная замена стояков и разводки водоснабжения — одна из наших стандартных услуг. Мы устанавливаем современные полипропиленовые трубы с гарантией герметичности.',
  },
  {
    question: 'Сколько стоит ремонт санузла в Волхове?',
    answer: 'Стоимость зависит от площади и объёма работ. Мы бесплатно рассчитаем смету в трёх вариантах: Эконом, Стандарт и Премиум, чтобы вы могли выбрать подходящий бюджет.',
  },
  {
    question: 'Как быстро вы сможете приехать на замер?',
    answer: 'Обычно выезд инженера на замер происходит в течение 2–3 дней после заявки. Замер и составление сметы — бесплатно.',
  },
  {
    question: 'Предоставляете ли вы рассрочку?',
    answer: 'Мы работаем без предоплаты с поэтапной оплатой. Вы платите только за выполненный и принятый этап, что фактически является рассрочкой на весь срок ремонта.',
  },
];

const QUALITY = use('quality');
const INCLUDED = use('included');
const GEOGRAPHY = use('geography');

export const page: ServicePage = {
  slug: 'spb-remont-sanuzla-volhov',
  path: '/spb/remont-sanuzla-volhov/',
  canonicalPath: '/spb/remont-sanuzla-volhov/',
  seo: {
    title: 'Ремонт санузла в Волхове под ключ | Цена от мастеров | Ремонт ванной комнаты',
    description:
      'Ремонт санузла в Волхове под ключ | Бесплатный выезд мастера | Гарантия 2 года | Без предоплаты | Фиксированная смета на ремонт санузлов',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-spb-remont-sanuzla-volhov',
        title: 'Ремонт санузла в Волхове',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Санкт-Петербург', href: '/spb/' }, { label: 'Ремонт санузлов в Волхове', href: '/spb/remont-sanuzla-volhov/', isActive: true }] }),
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
