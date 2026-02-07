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
  summaryTitle: 'Ремонт ванных комнат в Кудрово — рядом с Петербургом',
  paragraphsHtml: [
    '<strong>Кудрово</strong> — крупный город-спутник у восточной границы Санкт-Петербурга, расположенный вблизи станции метро «Улица Дыбенко». Это один из крупнейших центров новой жилой застройки в Ленинградской области. Ежегодно здесь сдаются тысячи квартир, и мы помогаем новосёлам обустроить ванные комнаты и санузлы с нуля.',
    'Наши мастера регулярно работают в жилых комплексах Кудрово и прекрасно знают типовые планировки местных застройщиков. Это позволяет точно рассчитать стоимость, закупить нужное количество материалов и уложиться в оговоренные сроки.',
  ],
  listIntroHtml: '<strong>Что мы предлагаем жителям Кудрово:</strong>',
  listItemsHtml: [
    'Ремонт санузла «под ключ» в новостройках — от черновой отделки до финиша.',
    'Знание планировок ЖК Кудрово — минимум непредвиденных расходов.',
    'Полная замена или первичная разводка коммуникаций: водоснабжение, канализация, электрика.',
    'Укладка плитки с лазерной разметкой — идеальная геометрия.',
    'Установка современной сантехники: ванны, душевые кабины, инсталляции.',
  ],
  closingHtml:
    'Планируете ремонт санузла в Кудрово? Оставьте заявку на бесплатный замер — мы приедем, всё замерим и предоставим фиксированную смету без скрытых доплат.',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'Работаете ли вы во всех ЖК Кудрово?',
    answer: 'Да, мы работаем во всех жилых комплексах Кудрово. У наших мастеров большой опыт работы с типовыми планировками санузлов от местных застройщиков.',
  },
  {
    question: 'Можно ли заказать только укладку плитки без полного ремонта?',
    answer: 'Да, мы выполняем как полный ремонт «под ключ», так и отдельные виды работ: укладку плитки, замену сантехники, установку душевой кабины и другие.',
  },
  {
    question: 'Сколько времени занимает ремонт санузла в новостройке?',
    answer: 'Ремонт «под ключ» в новостройке обычно занимает 14–21 день. Мы всегда согласовываем сроки заранее и фиксируем их в договоре.',
  },
  {
    question: 'Входит ли подъём материалов на этаж в стоимость?',
    answer: 'Да, доставка материалов на объект и подъём на этаж включены в стоимость работ. Вам не нужно заказывать грузчиков отдельно.',
  },
  {
    question: 'Как я буду контролировать ход ремонта?',
    answer: 'Мы отправляем фотоотчёты по каждому этапу в мессенджер. Вы в курсе каждого шага, а на приемку приезжаете лично.',
  },
];

const QUALITY = use('quality');
const INCLUDED = use('included');
const GEOGRAPHY = use('geography');

export const page: ServicePage = {
  slug: 'spb-remont-sanuzla-kudrovo',
  path: '/spb/remont-sanuzla-kudrovo/',
  canonicalPath: '/spb/remont-sanuzla-kudrovo/',
  seo: {
    title: 'Ремонт санузла в Кудрово под ключ | Цена от мастеров | Ремонт ванной комнаты',
    description:
      'Ремонт санузла в Кудрово под ключ | Бесплатный выезд мастера | Гарантия 2 года | Без предоплаты | Фиксированная смета на ремонт санузлов',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-spb-remont-sanuzla-kudrovo',
        title: 'Ремонт санузла в Кудрово',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Санкт-Петербург', href: '/spb/' }, { label: 'Ремонт санузлов в Кудрово', href: '/spb/remont-sanuzla-kudrovo/', isActive: true }] }),
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
