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
  summaryTitle: 'Ремонт санузлов в Мурино — специалисты по новостройкам',
  paragraphsHtml: [
    '<strong>Мурино</strong> — один из самых быстрорастущих городов Ленинградской области, расположенный у северной границы Санкт-Петербурга рядом со станцией метро «Девяткино». Тысячи новых квартир ежегодно сдаются с черновой или предчистовой отделкой, и наша команда специализируется на ремонте санузлов именно в таких объектах.',
    'Мы работаем в большинстве жилых комплексов Мурино и знаем типовые планировки санузлов в них. Это позволяет нам точно рассчитывать расход материалов, предлагать оптимальные решения и укладываться в сроки.',
  ],
  listIntroHtml: '<strong>Наш опыт ремонта в Мурино:</strong>',
  listItemsHtml: [
    'Ремонт санузлов с нуля в новостройках: стяжка, гидроизоляция, разводка, плитка, сантехника.',
    'Знание типовых планировок ЖК Мурино — точные сметы без переплат.',
    'Подъём материалов на этаж и вывоз мусора включены в стоимость.',
    'Быстрый старт работ — близость к Петербургу позволяет начать в течение нескольких дней.',
    'Фотоотчёт по каждому этапу работ в мессенджере.',
  ],
  closingHtml:
    'Получили ключи от квартиры в Мурино? Закажите бесплатный замер — мы рассчитаем стоимость ремонта санузла и предложим три варианта по бюджету.',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'В каких ЖК Мурино вы уже делали ремонт?',
    answer: 'Мы работали в большинстве крупных ЖК Мурино. Наши мастера знакомы с типовыми планировками санузлов и могут предложить оптимальные решения для каждого проекта.',
  },
  {
    question: 'Сколько стоит ремонт санузла в новостройке Мурино?',
    answer: 'Стоимость ремонта «под ключ» зависит от площади и выбранных материалов. Мы составим бесплатную смету в трёх вариантах: Эконом, Стандарт и Премиум.',
  },
  {
    question: 'Можно ли сделать ремонт, пока соседи тоже делают ремонт?',
    answer: 'Да, это частая ситуация в новостройках Мурино. Мы координируем работы с управляющей компанией и соблюдаем все правила проведения шумных работ.',
  },
  {
    question: 'Помогаете ли вы с выбором материалов?',
    answer: 'Да, наш инженер поможет подобрать плитку, сантехнику и другие материалы под ваш бюджет. Мы работаем с проверенными поставщиками и можем предложить скидки.',
  },
  {
    question: 'Какие гарантии вы предоставляете?',
    answer: 'На все виды работ мы даем официальную гарантию 2 года по договору. Если что-то пойдет не так — приедем и исправим за свой счёт.',
  },
];

const QUALITY = use('quality');
const INCLUDED = use('included');
const GEOGRAPHY = use('geography');

export const page: ServicePage = {
  slug: 'spb-remont-sanuzla-murino',
  path: '/spb/remont-sanuzla-murino/',
  canonicalPath: '/spb/remont-sanuzla-murino/',
  seo: {
    title: 'Ремонт санузла в Мурино под ключ | Цена от мастеров | Ремонт ванной комнаты',
    description:
      'Ремонт санузла в Мурино под ключ | Бесплатный выезд мастера | Гарантия 2 года | Без предоплаты | Фиксированная смета на ремонт санузлов',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-spb-remont-sanuzla-murino',
        title: 'Ремонт санузла в Мурино',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Санкт-Петербург', href: '/spb/' }, { label: 'Ремонт санузлов в Мурино', href: '/spb/remont-sanuzla-murino/', isActive: true }] }),
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
