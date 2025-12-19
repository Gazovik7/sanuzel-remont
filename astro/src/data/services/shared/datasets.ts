import type {
  TeamMember,
  Package,
  FaqItem,
  PortfolioItem,
  Review,
  VideoReview,
  PaperReview,
} from '../../../legacy/types';

export const TEAM: TeamMember[] = [
  {
    name: 'Алексей Смирнов',
    role: 'Руководитель / Прораб',
    description: 'Гражданин РФ. Опыт 12 лет. Лично контролирует каждый объект и соблюдение СНиП.',
    image: '/img/master-1.png',
  },
  {
    name: 'Дмитрий Иванов',
    role: 'Плиточник 6 разряда',
    description: 'Гражданин РФ. Опыт 15 лет. Мастер по укладке крупноформата и мозаики.',
    image: '/img/master-2.png',
  },
  {
    name: 'Сергей Петров',
    role: 'Сантехник-монтажник',
    description: 'Гражданин РФ. Опыт 10 лет. Сертифицированный специалист Rehau.',
    image: '/img/master-3.png',
  },
  {
    name: 'Михаил Сидоров',
    role: 'Электрик',
    description: 'Гражданин РФ. Допуск до 1000В. Монтаж теплых полов и сложного освещения.',
    image: '/img/master-4.png',
  },
  {
    name: 'Антон Ковалевич',
    role: 'Маляр/штукатур',
    description: 'Гражданин РБ. Опыт 9 лет. Знает все о фактурных покрытиях и сложных примыканиях.',
    image: '/img/master-5.png',
  },
  {
    name: 'Илья Романов',
    role: 'Замерщик / инженер',
    description: 'Гражданин РФ. Опыт 11 лет. Замеры, сметы, подбор материалов под бюджет.',
    image: '/img/master-6.png',
  },
];

export const PACKAGES: Package[] = [
  {
    title: 'Эконом',
    subtitle: 'Для сдачи или продажи',
    price: 'от 120 000 ₽',
    time: '10-12 дней',
    features: [
      'Демонтаж плитки',
      'Выравнивание стен',
      'Укладка плитки',
      'Установка сантехники',
      'Монтаж потолка',
    ],
  },
  {
    title: 'Комфорт',
    subtitle: 'Капитальный ремонт для себя',
    price: 'от 200 000 ₽',
    time: '16-21 день',
    features: [
      'Всё из Эконом',
      'Гидроизоляция (2 слоя)',
      'Замена труб (Rehau)',
      'Скрытый люк',
      'Укладка керамогранита',
    ],
  },
  {
    title: 'Премиум',
    subtitle: 'Дизайнерский ремонт',
    price: 'от 320 000 ₽',
    time: '25-35 дней',
    features: [
      'Всё из Комфорт',
      'Запил под 45°',
      'Теплый пол',
      'Защита от протечек',
      'Инсталляция премиум',
    ],
  },
];

export const BUDGET_PACKAGES: Package[] = [
  {
    title: 'Косметический',
    subtitle: 'Чисто и свежо',
    price: 'от 90 000 ₽',
    time: '8-10 дней',
    features: [
      'Демонтаж старой плитки',
      'Укладка новой плитки',
      'Замена смесителей',
      'Реечный потолок',
      'Установка унитаза',
    ],
  },
  {
    title: 'Эконом',
    subtitle: 'Под сдачу в аренду',
    price: 'от 120 000 ₽',
    time: '10-12 дней',
    features: [
      'Выравнивание стен',
      'Укладка плитки (эконом)',
      'Трубы полипропилен',
      'Установка ванны',
      'Новая электрика',
    ],
  },
  {
    title: 'Оптимальный',
    subtitle: 'Капитальный недорого',
    price: 'от 160 000 ₽',
    time: '14-18 дней',
    features: [
      'Гидроизоляция пола',
      'Скрытая разводка',
      'Короб для стояка',
      'Укладка керамогранита',
      'Принудительная вытяжка',
    ],
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    before: '/img/do1.jpg',
    after: '/img/posle1.jpg',
    title: 'Современный стиль в новостройке',
    desc: 'Лаконичный дизайн с бежевым керамогранитом и хромированной сантехникой.',
    workList: 'Выравнивание стен, гидроизоляция, укладка керамогранита 30x60, установка акриловой ванны, подвесная раковина, натяжной потолок.',
    time: '18 дней',
    price: '200 000 ₽',
  },
  {
    before: '/img/do2.jpg',
    after: '/img/posle2.jpg',
    title: 'Люкс с отдельностоящей ванной',
    desc: 'Дизайнерский проект с отдельностоящей ванной из искусственного камня и медной сантехникой.',
    workList: 'Широкоформатный керамогранит под бетон 120x60, душевая зона со стеклом, многоуровневое LED-освещение, ванна из литьевого мрамора, сантехника медь.',
    time: '32 дня',
    price: '520 000 ₽',
  },
  {
    before: '/img/do3.jpg',
    after: '/img/posle3.jpg',
    title: 'Премиум с мраморным эффектом',
    desc: 'Элегантный санузел с керамогранитом под травертин и современной сантехникой.',
    workList: 'Керамогранит под мрамор 60x120, душевая со стеклянной перегородкой, встроенные ниши с LED-подсветкой, круглое зеркало с подсветкой, подвесная мебель, инсталляция.',
    time: '28 дней',
    price: '380 000 ₽',
  },
  {
    before: '/img/do4.jpg',
    after: '/img/posle4.jpg',
    title: 'Минимализм в светлых тонах',
    desc: 'Функциональный дизайн с акцентом на освещение и качественные материалы.',
    workList: 'Широкоформатный керамогранит под мрамор, душевая кабина, скрытая LED-подсветка, подвесная тумба с интегрированной раковиной, инсталляция Grohe.',
    time: '25 дней',
    price: '340 000 ₽',
  },
];

export const BUDGET_PORTFOLIO: PortfolioItem[] = [
  // Временно пусто - будут добавлены реальные фото бюджетных ремонтов
];

export const STEPS = [
  { title: 'Заявка или звонок', desc: 'Оставьте контакты на сайте или позвоните нам.' },
  { title: 'Быстрый расчёт', desc: 'Предварительная оценка стоимости по телефону.' },
  { title: 'Выезд замерщика', desc: 'Бесплатно в Москве и области. Точный замер.' },
  { title: 'Смета и договор', desc: 'Фиксируем цены и сроки. Никаких доплат.' },
  { title: 'Закупка материалов', desc: 'По желанию клиента всё закупаем и доставляем мы.' },
  { title: 'Демонтаж и подготовка', desc: 'Снос, вывоз мусора, выравнивание стен.' },
  { title: 'Отделка и монтаж', desc: 'Плиточные работы, сантехника, электрика.' },
  { title: 'Уборка и сдача', desc: 'Полный клининг и финальная проверка узлов.' },
  { title: 'Акт и гарантия', desc: 'Подписание акта приема-передачи работ.' },
];


export const INCLUDED_WORKS: string[] = [
  'Демонтаж старой отделки',
  'Выравнивание стен и пола',
  'Гидроизоляция',
  'Разводка труб',
  'Электромонтаж',
  'Укладка плитки',
  'Установка сантехники',
  'Вывоз мусора',
];

export const INCLUDED_DOCS: string[] = [
  'Договор подряда',
  'Смета работ',
  'Акт скрытых работ',
  'Акт приемки-передачи',
  'Гарантийный талон',
];

export const REVIEWS: Review[] = [
  { name: 'Ольга', location: 'Москва', avatar: '/img/logo.png', screenshot: '/img/review-1.jpg' },
  { name: 'Дмитрий', location: 'Химки', avatar: '/img/logo.png', screenshot: '/img/review-2.jpg' },
  { name: 'Анна', location: 'Мытищи', avatar: '/img/logo.png', screenshot: '/img/review-3.jpg' },
  { name: 'Мария', location: 'WhatsApp', avatar: '/img/logo.png', screenshot: '/img/review-4.jpg' },
  { name: 'Сергей', location: 'WhatsApp', avatar: '/img/logo.png', screenshot: '/img/review-5.jpg' },
];

export const WHATSAPP_REVIEWS: Review[] = [
  { name: 'Артем', location: 'WhatsApp', avatar: '/img/logo.png', screenshot: '/img/review-1.jpg' },
  {
    name: 'Вера Васильевна',
    location: 'WhatsApp',
    avatar: '/img/logo.png',
    screenshot: '/img/review-2.jpg',
  },
  { name: 'Рустам', location: 'WhatsApp', avatar: '/img/logo.png', screenshot: '/img/review-3.jpg' },
  { name: 'Мария', location: 'WhatsApp', avatar: '/img/logo.png', screenshot: '/img/review-4.jpg' },
  { name: 'Сергей', location: 'WhatsApp', avatar: '/img/logo.png', screenshot: '/img/review-5.jpg' },
];

export const VIDEO_REVIEWS: VideoReview[] = [
  {
    id: 1,
    author: 'Михаил и Елена',
    location: "ЖК 'Зиларт'",
    preview:
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    duration: '1:45',
  },
  {
    id: 2,
    author: 'Константин',
    location: 'м. Раменки',
    preview:
      'https://images.unsplash.com/photo-1552321988-30f0ef923029?auto=format&fit=crop&q=80&w=800',
    duration: '2:10',
  },
  {
    id: 3,
    author: 'Светлана',
    location: 'г. Одинцово',
    preview:
      'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800',
    duration: '0:58',
  },
];

export const PAPER_REVIEWS: PaperReview[] = [
  {
    id: 1,
    author: 'Григорьев В.П.',
    date: '12.04.2023',
    image:
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 2,
    author: 'Семья Никитиных',
    date: '20.09.2023',
    image:
      'https://images.unsplash.com/photo-1628155930542-4d71b059f33b?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 3,
    author: "ООО 'Вектор'",
    date: '15.01.2024',
    image:
      'https://images.unsplash.com/photo-1635352723756-7494a50e4178?auto=format&fit=crop&q=80&w=600',
  },
];

export const CITIES_LIST: string[] = [
  'Москва',
  'Балашиха',
  'Химки',
  'Подольск',
  'Королев',
  'Мытищи',
  'Люберцы',
  'Красногорск',
];

export const QUALITY_CHECKLIST = [
  { day: 'День 1', title: 'Герметичность', desc: 'Проверка основания пола с красителем на микротрещины.' },
  { day: 'День 3', title: 'Гидроизоляция', desc: "Пролив водой под давлением (создаем 'бассейн')." },
  { day: 'День 5', title: 'Ровность стен', desc: 'Контроль лазерным уровнем. Допуск не более 1мм.' },
  { day: 'День 10', title: 'Сантехника', desc: 'Опрессовка труб под давлением 10 атмосфер.' },
  { day: 'День 14', title: 'Финал', desc: 'Полная инспекция всех узлов и генеральная уборка.' },
];

export const MATERIAL_BRANDS = [
  { category: 'Плитка', desc: 'Только геометрия 1 сорта', brands: ['Porcelanosa', 'Italon', 'Kerama Marazzi', 'Roca'] },
  {
    category: 'Сантехника',
    desc: 'Латунь и фарфор',
    brands: ['Grohe', 'Hansgrohe', 'Villeroy & Boch', 'Roca'],
  },
  { category: 'Инженерия', desc: 'Сшитый полиэтилен', brands: ['Rehau', 'Valtec', 'Oventrop', 'Far'] },
  {
    category: 'Черновые',
    desc: 'Влагостойкие смеси',
    brands: ['Knauf', 'Ceresit', 'Weber.Vetonit', 'Litokol'],
  },
];
