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
  summaryTitle: 'Ремонт ванной и туалета в городе Дзержинский',
  paragraphsHtml: [
    'Предлагаем услуги по ремонту санузлов в городе <strong>Дзержинский</strong>. Благодаря близости к МКАД и налаженной логистике, мы работаем здесь так же оперативно, как и в Москве. Наши мастера знакомы с жилым фондом города: от домов на улице Ленина и Угрешской до новостроек у карьера.',
    'Мы понимаем, что многие жители Дзержинского работают в столице, поэтому готовы подстраиваться под ваш график для проведения замеров и встреч. Все шумные работы проводятся строго в разрешенное время.',
  ],
  listIntroHtml: '<strong>Преимущества ремонта в Дзержинском с нами:</strong>',
  listItemsHtml: [
    'Оперативная доставка материалов из гипермаркетов "Мега Белая Дача" и строительных рынков поблизости.',
    'Опыт работы в домах серий П-44Т и индивидуальных проектах, распространенных в городе.',
    'Взаимодействие с местными управляющими компаниями для отключения воды.',
    'Фиксированная стоимость работ, не зависящая от пробок на МКАД.',
    'Комплексный подход: от дизайна до подключения стиральной машины.',
  ],
  closingHtml:
    'Живете в Дзержинском и планируете ремонт? Доверьтесь профессионалам, которые находятся рядом. Вызовите замерщика бесплатно и убедитесь в нашем серьезном подходе к делу.',
};

const PAGE_FAQ: FaqItem[] = [
  {
    question: 'Выезжаете ли вы в Котельники и Капотню?',
    answer: 'Да, мы работаем не только в Дзержинском, но и в соседних районах — Котельниках, Капотне, Люблино. Для нас это единая зона обслуживания с бесплатным выездом сметчика.',
  },
  {
    question: 'Можно ли закупить материалы в Леруа Мерлен или Петрович?',
    answer: 'Конечно. Близость крупных строительных гипермаркетов позволяет нам быстро комплектовать объекты черновыми и чистовыми материалами. Мы можем составить список покупок или закупить все сами.',
  },
  {
    question: 'Как долго длится ремонт в "панельке"?',
    answer: 'Капитальный ремонт раздельного санузла в панельном доме обычно занимает 15–18 дней. Если требуется объединение ванной и туалета — около 20–22 дней.',
  },
  {
    question: 'Делаете ли вы гидроизоляцию пола?',
    answer: 'Гидроизоляция мокрых зон — обязательный этап наших работ. Мы используем качественные обмазочные материалы (например, Knauf Флэхендихт) с проклейкой углов лентой.',
  },
  {
    question: 'Нужно ли согласовывать перепланировку санузла?',
    answer: 'Если вы планируете объединение санузла или расширение за счет коридора, это требует согласования. Мы подскажем, какие изменения допустимы, а какие могут вызвать проблемы в будущем.',
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
  slug: 'remont-sanuzla-dzerzhinskiy',
  path: '/remont-sanuzla-dzerzhinskiy/',
  canonicalPath: '/remont-sanuzla-dzerzhinskiy/',
  seo: {
    title: 'Ремонт санузла в Дзержинском под ключ | Цена от мастеров | Ремонт ванной комнаты',
    description:
      'Ремонт санузла в Дзержинском под ключ | Бесплатный выезд мастера | Гарантия 2 года | Без предоплаты | Лучшие цены на ремонт санузлов ☎ +7(499)348-97-42',
  },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-remont-sanuzla-dzerzhinskiy',
        title: 'Ремонт санузла в Дзержинском',
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
    unique({ type: 'breadcrumb', items: [{ label: 'Ремонт санузлов в Дзержинском', href: '/remont-sanuzla-dzerzhinskiy/', isActive: true }] }),
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
