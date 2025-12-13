
import type { TeamMember, Package, FaqItem, PortfolioItem, Review } from './types';

export const COMPANY_PHONE = "8 (495) 137-52-39";
export const COMPANY_ADDRESS = "г. Москва, Большой Саввинский пер., 9С1";
export const COMPANY_EMAIL = "info@remont-sanuzlov.ru";
export const COMPANY_LOGO = "https://remont-sanuzlov.ru/wp-content/uploads/2022/02/9545814_transparent-3.png";

// Phone masking utility
export const formatPhone = (value: string): string => {
  const input = value.replace(/\D/g, '');
  if (!input) return '';
  
  if (['7', '8', '9'].includes(input[0])) {
    // RU format logic
    let nums = input;
    if (input[0] === '9') nums = '7' + input;
    if (input[0] === '8') nums = '7' + input.slice(1);
    
    let res = '+7';
    if (nums.length > 1) res += ` (${nums.slice(1, 4)}`;
    if (nums.length >= 5) res += `) ${nums.slice(4, 7)}`;
    if (nums.length >= 8) res += `-${nums.slice(7, 9)}`;
    if (nums.length >= 10) res += `-${nums.slice(9, 11)}`;
    return res;
  } else {
    // Other formats
    return '+' + input.slice(0, 15);
  }
};

export const TEAM: TeamMember[] = [
  {
    name: "Алексей Смирнов",
    role: "Руководитель / Прораб",
    description: "Гражданин РФ. Опыт 12 лет. Лично контролирует каждый объект и соблюдение СНиП.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    name: "Дмитрий Иванов",
    role: "Плиточник 6 разряда",
    description: "Гражданин РФ. Опыт 15 лет. Мастер по укладке крупноформата и мозаики.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    name: "Сергей Петров",
    role: "Сантехник-монтажник",
    description: "Гражданин РФ. Опыт 10 лет. Сертифицированный специалист Rehau.",
    image: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    name: "Михаил Сидоров",
    role: "Электрик",
    description: "Гражданин РФ. Допуск до 1000В. Монтаж теплых полов и сложного освещения.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
  }
];

export const PACKAGES: Package[] = [
  {
    title: "Эконом",
    subtitle: "Для сдачи или продажи",
    price: "от 85 000 ₽",
    time: "7-10 дней",
    features: ["Демонтаж плитки", "Выравнивание стен", "Укладка плитки", "Установка сантехники", "Монтаж потолка"]
  },
  {
    title: "Стандарт",
    subtitle: "Капитальный ремонт для себя",
    price: "от 145 000 ₽",
    time: "14-18 дней",
    features: ["Всё из Эконом", "Гидроизоляция (2 слоя)", "Замена труб (Rehau)", "Скрытый люк", "Укладка керамогранита"]
  },
  {
    title: "Премиум",
    subtitle: "Дизайнерское решение",
    price: "от 220 000 ₽",
    time: "21-25 дней",
    features: ["Всё из Стандарт", "Запил под 45°", "Теплый пол", "Защита от протечек", "Бойлер / Инсталляция"]
  }
];

export const BUDGET_PACKAGES: Package[] = [
  {
    title: "Косметический",
    subtitle: "Чисто и свежо",
    price: "от 45 000 ₽",
    time: "3-5 дней",
    features: ["Демонтаж старой плитки", "Укладка новой плитки", "Замена смесителей", "Реечный потолок", "Установка унитаза"]
  },
  {
    title: "Эконом",
    subtitle: "Под сдачу в аренду",
    price: "от 75 000 ₽",
    time: "7-9 дней",
    features: ["Выравнивание стен", "Укладка плитки (эконом)", "Трубы полипропилен", "Установка ванны", "Новая электрика"]
  },
  {
    title: "Оптимальный",
    subtitle: "Капитальный недорого",
    price: "от 95 000 ₽",
    time: "10-12 дней",
    features: ["Гидроизоляция пола", "Скрытая разводка", "Короб для стояка", "Укладка керамогранита", "Принудительная вытяжка"]
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
    after: "https://images.unsplash.com/photo-1552321988-30f0ef923029?auto=format&fit=crop&q=80&w=600",
    title: "ЖК 'Сердце Столицы'",
    desc: "Объединение ванной и туалета. Использовали керамогранит под мрамор и черную сантехнику.",
    workList: "Демонтаж кабины, возведение стен, гидроизоляция, теплый пол, укладка 60x60.",
    time: "18 дней",
    price: "156 000 ₽"
  },
  {
    before: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=600",
    after: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=600",
    title: "Вторичка на Ленинском",
    desc: "Капитальный ремонт в сталинке. Замена всех коммуникаций и перекрытий.",
    workList: "Усиление перекрытий, шумоизоляция, коллекторная разводка, ванна из литьевого мрамора.",
    time: "25 дней",
    price: "210 000 ₽"
  },
  {
    before: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=600",
    after: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=600",
    title: "Мраморный шик",
    desc: "Премиальный ремонт с использованием итальянского керамогранита под мрамор.",
    workList: "Укладка широкоформатного керамогранита, запил под 45 градусов, подсветка ниш, безободковый унитаз.",
    time: "24 дня",
    price: "240 000 ₽"
  }
];

export const BUDGET_PORTFOLIO: PortfolioItem[] = [
  {
    before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
    after: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600&blur=2", 
    title: "Квартира под сдачу",
    desc: "Быстрый ремонт в новостройке. Задача: сделать чисто, аккуратно и максимально бюджетно.",
    workList: "Плитка Cersanit, натяжной потолок, акриловая ванна, внешняя разводка труб.",
    time: "8 дней",
    price: "72 000 ₽"
  },
  {
    before: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=600",
    after: "https://images.unsplash.com/photo-1564540586988-aa4e53c3d003?auto=format&fit=crop&q=80&w=600",
    title: "Панельный дом",
    desc: "Замена советской плитки на современную недорогую керамику.",
    workList: "Выравнивание стен, замена труб на полипропилен, укладка плитки 30x30, установка унитаза.",
    time: "9 дней",
    price: "85 000 ₽"
  },
  {
    before: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=600",
    after: "https://images.unsplash.com/photo-1595408796414-b6c8673a76e9?auto=format&fit=crop&q=80&w=600",
    title: "Студия в области",
    desc: "Бюджетный санузел 'под ключ' в новой студии.",
    workList: "Душевой поддон, шторка, недорогая инсталляция, покраска стен над плиткой.",
    time: "7 дней",
    price: "68 000 ₽"
  }
];

export const STEPS = [
  { title: "Заявка или звонок", desc: "Оставьте контакты на сайте или позвоните нам." },
  { title: "Быстрый расчёт", desc: "Предварительная оценка стоимости по телефону." },
  { title: "Выезд замерщика", desc: "Бесплатно в Москве и области. Точный замер." },
  { title: "Смета и договор", desc: "Фиксируем цены и сроки. Никаких доплат." },
  { title: "Закупка материалов", desc: "По желанию клиента всё закупаем и доставляем мы." },
  { title: "Демонтаж и подготовка", desc: "Снос, вывоз мусора, выравнивание стен." },
  { title: "Отделка и монтаж", desc: "Плиточные работы, сантехника, электрика." },
  { title: "Уборка и сдача", desc: "Полный клининг и финальная проверка узлов." },
  { title: "Акт и гарантия", desc: "Подписание акта приема-передачи работ." }
];

export const FAQ: FaqItem[] = [
  { question: "Сколько стоит выезд замерщика?", answer: "Выезд замерщика и составление сметы — бесплатно, даже если вы не закажете ремонт." },
  { question: "Кто закупает материалы?", answer: "Черновые материалы закупаем мы со скидкой до 20%. Чистовые выбираете вы, мы помогаем с доставкой." },
  { question: "Какая гарантия?", answer: "Гарантия на все работы 10 лет, прописана в договоре." },
  { question: "Можно ли жить в квартире?", answer: "Мы стараемся минимизировать дискомфорт, но рекомендуем освободить помещение на время грязных работ." },
  { question: "Как происходит оплата?", answer: "Поэтапно. Вы платите только за выполненный и принятый этап работ." }
];

export const BUDGET_FAQ: FaqItem[] = [
  { question: "Почему так дешево?", answer: "Мы используем проверенные бюджетные материалы, оптимизированную логистику и стандартные решения без сложных дизайнерских элементов." },
  { question: "Материалы входят в стоимость?", answer: "В пакетах 'Эконом' указана стоимость работ. Черновые материалы мы закупаем оптом, чистовые помогаем подобрать в Леруа Мерлен или Петровиче." },
  { question: "Сроки реальные?", answer: "Да, бюджетный ремонт делается быстрее (7-10 дней), так как отсутствуют сложные этапы вроде запила под 45 градусов или монтажа скрытых люков." },
  { question: "Есть ли гарантия на эконом?", answer: "Безусловно. Мы предоставляем официальную гарантию 3 года на все виды работ по договору." },
  { question: "Можно ли сэкономить на плитке?", answer: "Да, мы подскажем коллекции российской и белорусской плитки, которая выглядит дороже своей цены и имеет хорошую геометрию." }
];

export const INCLUDED_WORKS: string[] = [
  "Демонтаж старой отделки", "Выравнивание стен и пола", "Гидроизоляция", "Разводка труб", "Электромонтаж", "Укладка плитки", "Установка сантехники", "Вывоз мусора"
];

export const INCLUDED_DOCS: string[] = [
    "Договор подряда", "Смета работ", "Акт скрытых работ", "Акт приемки-передачи", "Гарантийный талон"
];

export const REVIEWS: Review[] = [
  {
    name: "Ольга",
    location: "Москва",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    chat: [
      { time: "10:00", isManager: false, text: "Добрый день! Хочу сказать спасибо за ванную, все супер!" },
      { time: "10:05", isManager: true, text: "Ольга, рады стараться! Обращайтесь." }
    ]
  },
  {
    name: "Дмитрий",
    location: "Химки",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    chat: [
       { time: "14:00", isManager: false, text: "Приветствую. Плитку положили отлично, швы ровные." },
       { time: "14:10", isManager: true, text: "Спасибо, Дмитрий! Завтра начнем затирку." }
    ]
  },
  {
    name: "Анна",
    location: "Мытищи",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    chat: [
       { time: "09:30", isManager: true, text: "Анна, доброе утро. Объект готов к сдаче." },
       { time: "11:15", isManager: false, text: "Только что посмотрела. Я в восторге! Спасибо вам огромное!" }
    ]
  }
];

export const CITIES_LIST: string[] = ["Москва", "Балашиха", "Химки", "Подольск", "Королев", "Мытищи", "Люберцы", "Красногорск"];

export const QUALITY_CHECKLIST = [
  { day: "День 1", title: "Герметичность", desc: "Проверка основания пола с красителем на микротрещины." },
  { day: "День 3", title: "Гидроизоляция", desc: "Пролив водой под давлением (создаем 'бассейн')." },
  { day: "День 5", title: "Ровность стен", desc: "Контроль лазерным уровнем. Допуск не более 1мм." },
  { day: "День 10", title: "Сантехника", desc: "Опрессовка труб под давлением 10 атмосфер." },
  { day: "День 14", title: "Финал", desc: "Полная инспекция всех узлов и генеральная уборка." }
];

export const MATERIAL_BRANDS = [
  { 
    category: "Плитка", 
    desc: "Только геометрия 1 сорта",
    brands: ["Porcelanosa", "Italon", "Kerama Marazzi", "Roca"] 
  },
  { 
    category: "Сантехника", 
    desc: "Латунь и фарфор",
    brands: ["Grohe", "Hansgrohe", "Villeroy & Boch", "Roca"] 
  },
  { 
    category: "Инженерия", 
    desc: "Сшитый полиэтилен",
    brands: ["Rehau", "Valtec", "Oventrop", "Far"] 
  },
  { 
    category: "Черновые", 
    desc: "Влагостойкие смеси",
    brands: ["Knauf", "Ceresit", "Weber.Vetonit", "Litokol"] 
  }
];
