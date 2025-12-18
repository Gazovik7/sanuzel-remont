import { buildBlocks, unique, use } from '../builder';
import { FAQ_BLOCK_CONTENT, HERO_LEAD_PARAGRAPH_DEFAULT, HERO_OFFERS_DEFAULT } from '../shared/blockContent';
import type { IncludedBlockConfig, PriceTableCategory, PriceTableConfig, SeoTextBlockConfig, ServicePage } from '../types';
import type { FaqItem } from '../../../legacy/types';

const EVROREMON_TSEO_TEXT_BLOCK_CONTENT: SeoTextBlockConfig = {
  summaryTitle: '',
  paragraphsHtml: [],
  listIntroHtml: '',
  listItemsHtml: [],
  closingHtml: '',
};

const EVROREMONT_FAQ: FaqItem[] = [];

const EVROREMONT_QUALITY_CHECKLIST = [
  { day: 'День 1', title: 'Герметичность', desc: 'Проверка основания пола с красителем на микротрещины.' },
  { day: 'День 3', title: 'Гидроизоляция', desc: "Пролив водой под давлением (создаем 'бассейн')." },
  { day: 'День 5', title: 'Ровность стен', desc: 'Контроль лазерным уровнем. Допуск не более 1мм.' },
  { day: 'День 10', title: 'Сантехника', desc: 'Опрессовка труб под давлением 10 атмосфер.' },
  { day: 'День 14', title: 'Финал', desc: 'Полная инспекция всех узлов и генеральная уборка.' },
];

const EVROREMONT_PRICE_TABLE_CATEGORIES: PriceTableCategory[] = [
  {
    title: 'Демонтажные и подготовительные работы',
    items: [
      { name: 'Удаление старой краски или клея с потолка', unit: 'м?', price: '150 руб.' },
      { name: 'Демонтирование (замена) стеновых панелей', unit: 'м?', price: '140 руб.' },
      { name: 'Демонтирование цементной стяжки до 5 см.', unit: 'м?', price: '420 руб.' },
      { name: 'Демонтаж плитки (пол, стены) без сохранения', unit: 'м?', price: '360 руб.' },
      { name: 'Демонтирование бетонного бортика поддона', unit: 'м?', price: '860 руб.' },
      { name: 'Демонтирование плинтуса', unit: 'п.м.', price: '70 руб.' },
      { name: 'Демонтирование штукатурного покрытия', unit: 'м?', price: '220 руб.' },
      { name: 'Замена ванны чугун', unit: 'шт.', price: '900 руб.' },
      { name: 'Замена ванны акрил', unit: 'шт.', price: '800 руб.' },
      { name: 'Замена ванны сталь', unit: 'шт.', price: '900 руб.' },
      { name: 'Замена ванны др. мат-лы', unit: 'шт.', price: '900 руб.' },
      { name: 'Демонтаж (замена) душевой кабины', unit: 'от', price: '1 200 руб.' },
      { name: 'Демонтаж (замена) унитаза, биде', unit: 'шт.', price: '500 руб.' },
      { name: 'Демонтаж (замена) раковины', unit: 'шт.', price: '450 руб.' },
      { name: 'Демонтаж (замена) смесителя', unit: 'шт.', price: '400 руб.' },
      { name: 'Демонтаж (замена) полотенцесушителя', unit: 'от', price: '700 руб.' },
      { name: 'Демонтирование труб водопроводных метал (пластик)', unit: 'точка', price: '400(300) руб.' },
      { name: 'Вычеканивание труб', unit: 'шт. от', price: '1 000 руб.' },
      { name: 'Демонтаж керамической плитки (пол, стены)', unit: 'м?', price: '250 руб.' },
      { name: 'Сбивка бетонного наплыва на полу', unit: 'шт.', price: '1 000 руб.' },
    ],
  },
];

const EVROREMONT_PRICE_TABLE_BLOCK_CONTENT: PriceTableConfig = {
  ctaText: 'Посмотреть подробный прайс-лист',
  notFoundTitle: 'Не нашли нужную услугу?',
  notFoundDescription:
    'В прайсе указаны самые популярные виды работ. Если у вас нестандартная задача, мы рассчитаем её индивидуально.',
  callButtonText: 'Позвонить менеджеру',
};

const EVROREMONT_INCLUDED_WORKS: string[] = [
  'Демонтаж старой отделки',
  'Выравнивание стен и пола',
  'Гидроизоляция',
  'Разводка труб',
  'Электромонтаж',
  'Укладка плитки',
  'Установка сантехники',
  'Вывоз мусора',
];

const EVROREMONT_INCLUDED_BLOCK_CONTENT: IncludedBlockConfig = {
  kicker: 'Под ключ',
  title: 'Что входит в стоимость ремонта?',
  description:
    'Мы берем на себя весь цикл работ по ремонту в ванной комнате: от демонтажа старой плитки до установки крючков для полотенец.',
  highlightIncludedCleaning: 'Вывоз мусора и клининг включены',
  highlightIncludedDocs: 'Полный пакет документов для УК',
};

const EVROREMONT_GEOGRAPHY_SEO_TEXT_HTML =
  'Осуществляем профессиональный <strong>ремонт ванных комнат под ключ</strong> во всех районах Москвы и городах Московской области. <span class="hidden sm:inline"> Наш инженер-сметчик бесплатно выезжает для замера и составления сметы как в пределах МКАД, так и до 50 км за его пределы. Мы работаем без предоплаты, гарантируем соблюдение сроков и фиксированную стоимость работ по договору.</span>';

const EVROREMONT_QUALITY = use('quality');
const EVROREMONT_PACKAGES = use('packagesDefault');
const EVROREMONT_INCLUDED = use('included');
const EVROREMONT_GEOGRAPHY = use('geography');

export const page: ServicePage = {
  slug: 'evroremont-vannoj-komnaty',
  path: '/evroremont-vannoj-komnaty/',
  seo: { title: '', description: '' },
  blocks: buildBlocks([
    unique({
      type: 'hero',
      variant: 'default',
      config: {
        leadSource: 'hero-evroremont-vannoj-komnaty',
        title: '',
        badgeText: '',
        backgroundImage: '/img/remont-vannoy-v-moskve.png',
        subtitleLines: [],
        leadParagraph: HERO_LEAD_PARAGRAPH_DEFAULT,
        offers: HERO_OFFERS_DEFAULT,
      },
    }),
    unique({ type: 'breadcrumb', items: [{ label: '', isActive: true }] }),
    use('comparison'),
    use('portfolioDefault'),
    unique({ ...EVROREMONT_QUALITY, checklist: EVROREMONT_QUALITY_CHECKLIST }),
    use('whyUs'),
    use('materials'),
    use('calculatorDefault'),
    unique({
      ...EVROREMONT_PACKAGES,
      config: {
        ...EVROREMONT_PACKAGES.config,
        priceTable: EVROREMONT_PRICE_TABLE_BLOCK_CONTENT,
        priceTableCategories: EVROREMONT_PRICE_TABLE_CATEGORIES,
      },
    }),
    use('workflow'),
    unique({ ...EVROREMONT_INCLUDED, config: EVROREMONT_INCLUDED_BLOCK_CONTENT, works: EVROREMONT_INCLUDED_WORKS }),
    use('visualization'),
    use('team'),
    use('guarantee'),
    use('reviews'),
    unique({ type: 'seoText', config: EVROREMON_TSEO_TEXT_BLOCK_CONTENT }),
    unique({ type: 'faq', variant: 'default', config: FAQ_BLOCK_CONTENT, items: EVROREMONT_FAQ }),
    unique({
      ...EVROREMONT_GEOGRAPHY,
      config: { ...EVROREMONT_GEOGRAPHY.config, seoTextHtml: EVROREMONT_GEOGRAPHY_SEO_TEXT_HTML },
    }),
  ]),
};
