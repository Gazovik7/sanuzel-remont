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
  summaryTitle: 'Ремонт санузлов в Кингисеппе: надежно и с гарантией',
  paragraphsHtml: [
    '<strong>Кингисепп</strong> — западный форпост Ленинградской области на реке Луге. Город с богатой историей и разнообразным жилым фондом: от кирпичных домов советской эпохи до современных новостроек. Мы знаем особенности местной застройки и выполняем ремонт санузлов любой сложности — от замены плитки в хрущёвке до полной перепланировки в новом доме.',
    'Наша команда работает в Кингисеппе и ближайших населённых пунктах, включая Ивангород и Усть-Лугу. Материалы доставляем со складов Санкт-Петербурга или закупаем на месте, выбирая оптимальный вариант по цене и срокам для каждого заказчика.',
  ],
  listIntroHtml: '<strong>Преимущества работы с нами в Кингисеппе:</strong>',
  listItemsHtml: [
    'Опыт работы с типовыми планировками домов Кингисеппского района.',
    'Бесплатный выезд инженера на замер и составление детальной сметы.',
    'Доставка материалов из СПб и с местных строительных баз.',
    'Гарантия 2 года на все виды работ по договору.',
    'Работа без предоплаты — оплата только после приемки этапа.',
  ],
  closingHtml:
    'Закажите ремонт санузла в Кингисеппе у профессионалов. Мы приедем на замер, составим фиксированную смету и выполним работу точно в срок.',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'Работаете ли вы в Ивангороде и Усть-Луге?',
    answer: 'Да, мы обслуживаем весь Кингисеппский район, включая Ивангород, Усть-Лугу и прилегающие посёлки.',
  },
  {
    question: 'Сколько времени занимает ремонт санузла в Кингисеппе?',
    answer: 'Стандартный ремонт «под ключ» занимает 14–21 день. Точные сроки зависят от объёма работ и согласовываются до начала ремонта.',
  },
  {
    question: 'Как происходит доставка материалов в Кингисепп?',
    answer: 'Мы организуем доставку со складов Санкт-Петербурга или с местных строительных баз. Стоимость доставки включается в смету заранее, сюрпризов не будет.',
  },
  {
    question: 'Нужно ли вносить предоплату?',
    answer: 'Нет, мы работаем без предоплаты. Оплата производится поэтапно, после приемки каждого выполненного этапа работ.',
  },
  {
    question: 'Какую гарантию вы даёте на ремонт?',
    answer: 'На все виды работ предоставляется официальная гарантия 2 года по договору. Если возникнут замечания — устраним за свой счёт.',
  },
];

const QUALITY = use('quality');
const INCLUDED = use('included');
const GEOGRAPHY = use('geography');

export const page: ServicePage = {
  slug: 'spb-remont-sanuzla-kingisepp',
  path: '/spb/remont-sanuzla-kingisepp/',
  canonicalPath: '/spb/remont-sanuzla-kingisepp/',
  seo: {
    title: 'Ремонт санузла в Кингисеппе под ключ | Цена от мастеров | Ремонт ванной комнаты',
    description:
      'Ремонт санузла в Кингисеппе под ключ | Бесплатный выезд мастера | Гарантия 2 года | Без предоплаты | Фиксированная смета на ремонт санузлов',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-spb-remont-sanuzla-kingisepp',
        title: 'Ремонт санузла в Кингисеппе',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Санкт-Петербург', href: '/spb/' }, { label: 'Ремонт санузлов в Кингисеппе', href: '/spb/remont-sanuzla-kingisepp/', isActive: true }] }),
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
