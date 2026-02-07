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
  summaryTitle: 'Ремонт санузлов в Сертолово — качество петербургских мастеров',
  paragraphsHtml: [
    '<strong>Сертолово</strong> — динамично развивающийся город-спутник Санкт-Петербурга с населением более 70 тысяч человек. Активная застройка жилыми комплексами создаёт постоянный спрос на качественный ремонт санузлов — как в новостройках с черновой отделкой, так и в домах более ранней постройки.',
    'Наша команда регулярно работает в Сертолово и отлично знает особенности местных ЖК. Близость к Санкт-Петербургу позволяет нам оперативно доставлять материалы и обеспечивать тот же уровень сервиса, что и в центре города.',
  ],
  listIntroHtml: '<strong>Почему жители Сертолово выбирают нас:</strong>',
  listItemsHtml: [
    'Знание планировок в новых ЖК Сертолово: типовые санузлы с готовой разводкой.',
    'Быстрый выезд на объект — всего 30–40 минут от нашей базы.',
    'Ремонт «под ключ» в новостройках: от стяжки до установки сантехники.',
    'Работа с любыми материалами: от бюджетной плитки до премиального керамогранита.',
    'Чистая сдача объекта: вывоз мусора и уборка включены в стоимость.',
  ],
  closingHtml:
    'Живёте в Сертолово и планируете ремонт ванной? Оставьте заявку — мы приедем на замер, покажем примеры наших работ и рассчитаем стоимость ремонта.',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'Работаете ли вы в новостройках Сертолово?',
    answer: 'Да, большая часть наших заказов в Сертолово — именно новостройки. Мы выполняем ремонт с нуля: стяжка, гидроизоляция, разводка труб, укладка плитки и установка сантехники.',
  },
  {
    question: 'Сколько стоит ремонт санузла в Сертолово?',
    answer: 'Стоимость зависит от площади и выбранных материалов. Оставьте заявку — мы бесплатно рассчитаем смету в трёх вариантах: Эконом, Стандарт и Премиум.',
  },
  {
    question: 'Как быстро вы можете начать работу?',
    answer: 'Обычно мы начинаем через 3–5 дней после подписания договора и закупки материалов. В сезон этот срок может увеличиться до 7–10 дней.',
  },
  {
    question: 'Включён ли вывоз мусора в стоимость?',
    answer: 'Да, вывоз строительного мусора и финальная уборка помещения включены в стоимость работ.',
  },
  {
    question: 'Работаете ли вы в Сертолово-1 и Сертолово-2?',
    answer: 'Да, мы работаем во всех микрорайонах Сертолово, включая Сертолово-1, Сертолово-2 и прилегающие территории.',
  },
];

const QUALITY = use('quality');
const INCLUDED = use('included');
const GEOGRAPHY = use('geography');

export const page: ServicePage = {
  slug: 'spb-remont-sanuzla-sertolovo',
  path: '/spb/remont-sanuzla-sertolovo/',
  canonicalPath: '/spb/remont-sanuzla-sertolovo/',
  seo: {
    title: 'Ремонт санузла в Сертолово под ключ | Цена от мастеров | Ремонт ванной комнаты',
    description:
      'Ремонт санузла в Сертолово под ключ | Бесплатный выезд мастера | Гарантия 2 года | Без предоплаты | Фиксированная смета на ремонт санузлов',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-spb-remont-sanuzla-sertolovo',
        title: 'Ремонт санузла в Сертолово',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Санкт-Петербург', href: '/spb/' }, { label: 'Ремонт санузлов в Сертолово', href: '/spb/remont-sanuzla-sertolovo/', isActive: true }] }),
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
