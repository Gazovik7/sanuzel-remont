
import { 
  Rocket, Search, Users, BarChart3, Zap, 
  Globe, Layout, Smartphone, Target, PenTool, 
  CheckCircle, Briefcase, Award, TrendingUp,
  Settings, MonitorPlay, FileText, PieChart,
  ShieldCheck, Database, ShoppingBag, Phone,
  Truck, CreditCard, Filter, Video, Camera,
  Image as ImageIcon, Layers, Play, CheckCircle2,
  AlertTriangle, AlertCircle, MessageSquare,
  Store, Factory, Laptop, Code, MousePointer,
  HelpCircle, ChevronDown, Check, Mouse, Bot,
  Box, FileCode, ShoppingCart, Command
} from 'lucide-react';
import type { NavItem, StatItem, AdvantageItem, ServiceItem, CaseItem, FAQItem, TeamMember, PricingItem, ReviewItem, ClientItem, AwardItem, BlogPost, CaseStudyData, InfographicItem, InfographicProcessStep, InfographicPriceItem, TickerItem, TargetAudienceItem } from './types';

// Types definition (inlined for simplicity since we can't easily copy types.ts yet)
// In a real scenario, we'd copy types.ts too.
// I will just export these interfaces here to make it self-contained if types.ts is missing.

export const LOGO_URL = '/img/logo/black/1.png';

export const BUDGET_OPTIONS = [
  { value: '0-100k', label: 'До 100 000 ₽' },
  { value: '100k-500k', label: '100 000 - 500 000 ₽' },
  { value: '500k-1.5m', label: '500 000 - 1.5 млн ₽' },
  { value: '1.5m-3m', label: '1.5 млн - 3 млн ₽' },
  { value: '3m+', label: 'Более 3 млн ₽' },
];

export const NAV_ITEMS = [
  { 
    label: 'О компании', 
    href: '/about-us/', 
    isPage: true,
    children: [
        { label: 'Об агентстве', href: '/about-us/' },
        { label: 'Партнёрская программа', href: '/partnership/' },
        { label: 'Блог', href: '/blog/' },
        { label: 'Отзывы', href: '/otzyvy-klientov/' }
    ]
  },
  { 
    label: 'SEO', 
    href: '/seo', 
    isPage: true,
    children: [
      {
        label: 'По типу сайта',
        href: '/seo/types',
        children: [
          { label: 'Интернет-магазины', href: '/seo/ecommerce' },
          { label: 'Сайты услуг', href: '/seo/services' },
          { label: 'B2B порталы', href: '/seo/b2b' },
          { label: 'Молодые сайты', href: '/seo/new' },
        ]
      },
      {
        label: 'По регионам',
        href: '/seo/regions',
        children: [
          { label: 'Москва', href: '/seo/moscow' },
          { label: 'Санкт-Петербург', href: '/seo/spb' },
          { label: 'Екатеринбург', href: '/seo/ekb' },
          { label: 'Краснодар', href: '/seo/krasnodar' },
          { label: 'Вся Россия', href: '/seo/russia' },
          { label: 'Международное SEO', href: '/seo/global' },
        ]
      },
      {
        label: 'По CMS',
        href: '/seo/cms',
        children: [
          { label: '1С-Битрикс', href: '/seo/bitrix' },
          { label: 'Tilda', href: '/seo/tilda' },
          { label: 'WordPress', href: '/seo/wordpress' },
          { label: 'OpenCart', href: '/seo/opencart' },
        ]
      },
      {
        label: 'Аудит',
        href: '/services/seo-audit/',
        children: [
            { label: 'SEO-аудит (Технический)', href: '/services/seo-audit/' },
            { label: 'Юзабилити-аудит (UX)', href: '/audit/ux' },
            { label: 'Коммерческий аудит', href: '/audit/commercial' },
            { label: 'Экспресс-аудит', href: '/audit/express' },
        ]
      },
    ]
  },
  {
    label: 'Разработка',
    href: '/services/web-dev/',
    children: [
        { label: 'Корпоративные сайты', href: '/services/web-dev/' },
        { label: 'Интернет-магазины', href: '/services/web-dev/' },
        { label: 'Landing Page', href: '/services/web-dev/' },
        { label: 'Техническая поддержка', href: '/services/web-dev/' },
        { label: 'SERM (Репутация)', href: '/services/web-dev/' },
    ]
  },
  {
    label: 'Реклама',
    href: '/services/context-ads/',
    children: [
        { label: 'Контекстная реклама', href: '/services/context-ads/' },
        { label: 'Таргетированная реклама', href: '/services/target-ads/' },
        { label: 'Реклама в Telegram', href: '/services/target-ads/' },
        { label: 'Продвижение на Авито', href: '/services/avito-promo/' },
    ]
  },
  {
    label: 'GEO / AI',
    href: '/services/geo-ai/',
    children: [
        { label: 'Продвижение в ChatGPT', href: '/services/geo-ai/' },
        { label: 'Оптимизация под Gemini', href: '/services/geo-ai/' },
        { label: 'Вывод в Perplexity', href: '/services/geo-ai/' },
        { label: 'Bing Chat (Copilot)', href: '/services/geo-ai/' },
        { label: 'Управление выдачей AI', href: '/services/geo-ai/' },
    ]
  },
  { label: 'Кейсы', href: '/portfolio/', isPage: true },
  { label: 'Блог', href: '/blog/', isPage: true },
  { label: 'Контакты', href: '/contacts/', isPage: true },
];

export const HERO_BULLETS = [
  'Комплекс SEO работ от 47 000 руб. в месяц',
  'Финансовые гарантии в договоре на продвижение',
  'Новые клиенты через 2-5 месяцев после старта',
  'Рост трафика до 500% в год благодаря комплексному подходу'
];

export const SERVICES_INCLUDED = [
  { title: 'АНАЛИЗ КОНКУРЕНТОВ', desc: 'Проводим анализ конкурентов больше, чем по 15 метрикам. Полученные данные мы используем в стратегии продвижения в поисковых системах.', image: '/img/work/1.webp' },
  { title: 'СЕМАНТИЧЕСКОЕ ЯДРО', desc: 'Собираем максимально полное семантическое ядро (без ограничения по количеству запросов), чистим его и кластеризуем согласно данным из ТОП-10.', image: '/img/work/2.webp' },
  { title: 'ТЕХНИЧЕСКИЙ АУДИТ', desc: 'Проводим всесторонний аудит вашего сайта по собственному чек-листу из 21 направления технической оптимизации и проверяем результаты.', image: '/img/work/3.webp' },
  { title: 'ВНЕШНЯЯ ОПТИМИЗАЦИЯ', desc: 'Анализируем ссылочную стратегию лидеров и дорабатываем её под продвигаемый проект, затем реализуем посредством закупки ссылок.', image: '/img/work/4.webp' },
  { title: 'РАБОТА С КОНТЕНТОМ', desc: 'Проводим текстовый анализ сайтов из ТОП Яндекс и Google по ключевым запросам, пишем ТЗ для копирайтера и внедряем контент.', image: '/img/work/5.webp' },
  { title: 'АНАЛИЗ ЮЗАБИЛИТИ', desc: 'Повышаем конверсию и юзабилити, оптимизируем текстовое наполнение и код сайта. Учитываем особенности каждой сферы.', image: '/img/work/6.webp' },
  { title: 'РАБОТА С ПФ', desc: 'Для улучшения поведенческих факторов мы привлекаем маркетолога и аналитика, которые улучшают Last-клик на сайте.', image: '/img/work/7.webp' },
  { title: 'АНАЛИТИКА', desc: 'По окончанию месяца мы делаем отчет. Регулярная аналитика помогает вам понимать результаты нашей деятельности, а нам делать проверку гипотез.', image: '/img/work/8.webp' },
];

export const ADVANTAGES_GRID = [
  { icon: CheckCircle, title: 'ЭКСПЕРТНОСТЬ И РЕЗУЛЬТАТИВНОСТЬ', desc: 'Мы — ведущая команда профессионалов с более чем 8-летним опытом в сфере поискового продвижения бизнеса. Наша цель — сделать сайт первым в ТОП-3.' },
  { icon: Layout, title: 'КОМПЛЕКСНЫЙ ПОДХОД', desc: 'Начинаем с глубокого анализа вашего сайта, включающего технический аудит, оптимизацию контента и usability аудит. Это позволяет нам разработать эффективную стратегию.' },
  { icon: Award, title: 'ГАРАНТИРОВАННЫЕ РЕЗУЛЬТАТЫ', desc: 'Гордимся тем, что помогли более чем 500 сайтам достичь высоких позиций в поисковой выдаче. Наша команда знает все этапы SEO продвижения.' },
  { icon: Users, title: 'УНИКАЛЬНЫЙ ПОДХОД К КАЖДОМУ', desc: 'Разрабатываем индивидуальный план продвижения по поисковым запросам для каждого клиента, учитывая особенности ниши.' },
  { icon: ShieldCheck, title: 'ПРОЗРАЧНОСТЬ И ЧЕСТНОСТЬ', desc: 'Предлагаем бесплатный аудит сайта перед началом работ. Устанавливаем четкие цены. Работаем по принципу «оплата за результат».' },
  { icon: TrendingUp, title: 'ПОСТОЯННОЕ РАЗВИТИЕ', desc: 'Мы следим за всеми изменениями в алгоритмах поисковых систем и постоянно совершенствуем наши методы для обеспечения эффективности.' },
];

export const REVIEWS_DATA = [
  { text: "У нас интернет-магазин итальянской одежды. Сразу скажу, что опыт в продвижении сайта у нас впервые и он оказался очень удачно. Ребята формируют предложения четко и по делу. Доводят дело до конца и обеспечивают информативную поддержку...", author: 'Гранкин Артем Викторович', role: 'Индивидуальный предприниматель', rating: 5 },
  { text: "От лица компании Scrile выражаю благодарность лично Ивану и всей его команде. Хочу рекомендовать Ивана, как замечательного специалиста по SEO-продвижению, который очень тонко чувствует все поисковые алгоритмы...", author: 'Шоцкий Родион', role: 'Исполнительный директор Scrile', rating: 5 },
  { text: "During the cooperation, the team of SEO specialists showed first-class experts. The team really understands all the subtleties of search engine promotion in the English-speaking market...", author: 'Aisulu Murzabekova', role: 'Project Manager Makini.Inc', rating: 5 },
];

export const VIDEO_REVIEWS = [
  { title: "Продвинули сайт в нише Fin-Tech на рынке Европы", author: "Глеб", role: "Руководитель проекта Fin-Tech", rating: 5, image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800' },
  { title: "Клиенты стали приходить уже в первые недели", author: "Алексей", role: "Владелец интернет-магазина", rating: 5, image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800' },
  { title: "Рост продаж в 3 раза за полгода работы", author: "Мария", role: "Директор по маркетингу", rating: 5, image: 'https://images.unsplash.com/photo-1573496359-794d6a6c305d?auto=format&fit=crop&q=80&w=800' },
  { title: "Вышли в ТОП-3 по Москве за 4 месяца", author: "Сергей", role: "Основатель клиники", rating: 5, image: '/img/smirnov-ivan.jpg' },
  { title: "Комплексный подход: SEO + SERM", author: "Елена", role: "Бренд-менеджер", rating: 5, image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800' }
];

export const LETTERHEAD_REVIEWS = [
  { 
    company: 'ИП Гранкин', 
    author: 'Гранкин Артем Викторович',
    role: 'Индивидуальный предприниматель',
    rating: 5,
    image: '/img/otzyvy/otziv_italiya.jpg', 
    alt: 'Благодарственное письмо от ИП Гранкин (магазин итальянской одежды)' 
  },
  { 
    company: 'Makini.Inc', 
    author: 'Aisulu Murzabekova',
    role: 'Project Manager Makini Ink',
    rating: 5,
    image: '/img/otzyvy/review_makini_ins_eng.png', 
    alt: 'Отзыв от компании Makini.Inc (Fin-Tech)' 
  },
  { 
    company: 'Scrile', 
    author: 'Шоцкий Родион',
    role: 'Исполнительный директор Scrile',
    rating: 5,
    image: '/img/otzyvy/2023_01_18_11_39_37.png', 
    alt: 'Рекомендация от компании Scrile' 
  },
  { 
    company: 'SEO Отзыв', 
    author: 'Аверьянов Александр',
    role: 'Индивидуальный предприниматель',
    rating: 5,
    image: '/img/otzyvy/scan_page_0001_1.jpg', 
    alt: 'Официальная благодарность за продвижение' 
  },
];

export const CASES_DATA = [
  {
    title: 'ТОП-1 в Яндекс в сфере ремонта кофемашин',
    result: 'Рост в 10 раз',
    desc: 'Рост посещаемости более, чем в 10 раз в нише ремонт бытовой техники.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    niche: 'Бытовые услуги',
    geo: 'Москва',
    category: 'seo-ru'
  },
  {
    title: 'Рост посещаемости интернет-магазина женской одежды',
    result: 'x10 трафик',
    desc: 'Интернет-магазин женской одежды. Работа с широкой семантикой.',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800',
    niche: 'E-commerce',
    geo: 'РФ',
    category: 'seo-ru'
  },
  {
    title: 'Как вывести сайт строительной тематики из стагнации',
    result: '+3000 посетит.',
    desc: 'За 3 месяца работы вывели сайт строительной тематики из стагнации.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    niche: 'Строительство',
    geo: 'СПб',
    category: 'seo-ru'
  },
  {
    title: 'Запуск и продвижение интернет-магазина на OpenCart',
    result: 'с 0 до 11к',
    desc: 'Комплексное SEO продвижение магазина автозапчастей с нуля.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    niche: 'Автозапчасти',
    geo: 'РФ + СНГ',
    category: 'seo-ru'
  },
    { 
      title: 'Продвижение стоматологической клиники', 
      result: '+45% заявок', 
      desc: 'Локальное SEO для сети клиник. Работа с картами и репутацией.', 
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
      niche: 'Медицина',
      geo: 'Москва',
      category: 'seo-ru',
      slug: 'medical-seo-growth'
    },
  
  {
    title: 'SEO для юридической компании (B2B)',
    result: 'ТОП-3 Google',
    desc: 'Вывод сайта в топ по высокочастотным запросам в сфере арбитража.',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800',
    niche: 'Юриспруденция',
    geo: 'РФ',
    category: 'seo-ru'
  },
  {
    title: 'Лидогенерация для застройщика',
    result: 'x3 Лиды',
    desc: 'Комплексный маркетинг: SEO + Контекст для продажи элитной недвижимости.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800', // Using a generic city/building image
    niche: 'Недвижимость',
    geo: 'Москва / Дубай',
    category: 'ads'
  },
  {
    title: 'Интернет-магазин дизайнерской мебели',
    result: '+120% выручка',
    desc: 'Техническая оптимизация и контент-маркетинг для мебельного бренда.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    niche: 'E-commerce',
    geo: 'РФ',
    category: 'seo-ru'
  },
];
export const PRICING_PLANS = [
  { 
    title: 'ПОДДЕРЖКА', 
    price: 'от 47 000 руб', 
    description: 'Базовый тариф для поддержания позиций.',
    priceSuffix: '/ мес',
    features: ['Команда: 1 SEO-Junior специалист', 'Цель: Поддержка уровня SEO-трафика', 'Заметный результат: на 3-12 мес.'],
    buttonText: 'Выбрать тариф'
  },
  { 
    title: 'РОСТ', 
    price: 'от 65 000 руб', 
    isPopular: true,
    description: 'Оптимальный тариф для активного продвижения и роста позиций.',
    priceSuffix: '/ мес',
    features: ['Команда: 1 SEO-Junior и 1 SEO-Middle специалист', 'Цель: выход на показатель 80% запросов в ТОП-10', 'Заметный результат: на 2-9 мес.'],
    buttonText: 'Выбрать тариф'
  },
  { 
    title: 'ЛИДЕР', 
    price: 'от 150 000 руб', 
    description: 'Максимальный результат в сжатые сроки.',
    priceSuffix: '/ мес',
    features: ['Команда: 3 SEO-специалиста + основатель', 'Цель: Стать лидером рынка', 'Заметный результат: на 2-6 мес.'],
    buttonText: 'Выбрать тариф'
  }
];

export const ADDITIONAL_SERVICES = [
  { title: 'Таргетированная реклама', price: 'от 40 000 руб', items: ['Реклама в социальных сетях', 'Ремаркетинг и ретаргетинг', 'Таргетинг по интересам'] },
  { title: 'Комплексное продвижение в Яндекс', price: 'от 30 000 руб', items: ['Диагностика текущего состояния', 'Подбор ключевых слов', 'Внутренняя оптимизация'] },
  { title: 'Линкбилдинг', price: 'от 30 000 руб', items: ['Проверка ссылочного профиля', 'Разработка стратегии', 'Закупка ссылок'] },
  { title: 'Разработка и дизайн', price: 'от 40 000 руб', items: ['Редизайн сайта', 'Разработка landing page', 'Создание микросайтов'] },
  { title: 'Контекстная реклама', price: 'от 30 000 руб', items: ['Яндекс Директ', 'Google Ads', 'Поисковые системы'] },
  { title: 'Продвижение новых сайтов', price: 'от 30 000 руб', items: ['Продвижение, оптимизация в ПС'] },
];

export const DETAILED_STAGES = [
  { num: '01', title: 'Аудит сайта и анализ конкурентов', desc: 'На первом этапе проводим профессиональный анализ текущего состояния сайта. Это необходимо для того, чтобы определить сильные стороны.' },
  { num: '02', title: 'Сбор и составление семантического ядра', desc: 'Занимаемся подбором ключевых слов и фраз, по которым пользователей ищут ваши предложения в Яндекс, Google.' },
  { num: '03', title: 'Техническая оптимизация', desc: 'Выполняем настройку технических аспектов сайта: улучшаем скорость загрузки, оперативно исправляем ошибки.' },
  { num: '04', title: 'Контентная стратегия', desc: 'Написание и оптимизация контента – ключ к успешному продвижению. Создаем качественные статьи, уникализируем изображения.' },
  { num: '05', title: 'Внешняя оптимизация', desc: 'Наращиваем ссылочную массу через регистрацию в каталогах, размещение в социальных медиа и на популярных ресурсах.' },
  { num: '06', title: 'Мониторинг и корректировка', desc: 'Продвижение веб-сайтов – это непрерывный процесс. Мы постоянно отслеживаем позиции сайта, анализируем переходы.' },
];

export const SEO_BENEFITS = [
  { icon: ShoppingBag, title: 'Увеличение целевого трафика' },
  { icon: TrendingUp, title: 'Повышение узнаваемости бренда' },
  { icon: BarChart3, title: 'Экономия на рекламе' },
  { icon: Users, title: 'Улучшение пользовательского опыта' },
  { icon: Search, title: 'Аналитика и понимание аудитории' },
  { icon: Globe, title: 'Охват локального рынка' },
];

export const TOPICS_LIST = [
  'Пиломатериалы', 'Застройщики', 'SPA', 'Перевозка грузов', 'Автосервис', 'Автозапчасти',
  'Гостиницы', 'Недвижимость', 'Риелторы', 'Детские товары', 'Юридическая деятельность',
  'ЖБИ', 'Агрегаторы курсов', 'Финансы', 'Стоматология', 'Туризм и экскурсии',
  'Спецтехника', 'Ремонт техники', 'Медицина', 'Салон красоты', 'Маркетинг',
  'Выкуп авто', 'Бани', 'Адвокаты', 'Спортивные клубы', 'Магазины'
];

export const CITIES_LIST = [
  'Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань',
  'Нижний Новгород', 'Челябинск', 'Красноярск', 'Самара', 'Уфа',
  'Ростов-на-Дону', 'Омск', 'Краснодар', 'Воронеж', 'Пермь',
  'Волгоград', 'Саратов', 'Тюмень', 'Тольятти', 'Барнаул',
  'Ижевск', 'Махачкала', 'Хабаровск', 'Ульяновск', 'Иркутск',
  'Владивосток', 'Ярославль', 'Кемерово', 'Томск', 'Набережные Челны',
  'Севастополь', 'Ставрополь', 'Оренбург', 'Новокузнецк', 'Рязань',
  'Балашиха', 'Пенза', 'Чебоксары', 'Липецк', 'Калининград',
  'Астрахань', 'Тула', 'Киров', 'Сочи', 'Курск', 'Улан-Удэ', 'Тверь'
];

export const CMS_LIST = [
  { name: 'WordPress', icon: Globe },
  { name: '1С-Битрикс', icon: Database },
  { name: 'Joomla', icon: Layers },
  { name: 'OpenCart', icon: ShoppingCart },
  { name: 'MODX Revolution', icon: Box },
  { name: 'Laravel', icon: Code },
  { name: 'Drupal', icon: FileCode },
  { name: 'Tilda', icon: Layout },
  { name: 'Wix', icon: Command },
  { name: 'NetCat', icon: MousePointer },
  { name: '5CMS', icon: ShoppingBag },
  { name: 'Webasyst', icon: Settings },
];

export const TEAM_MEMBERS = [
  { 
    name: 'Иван Смирнов', 
    role: 'Руководитель агентства', 
    image: '/img/smirnov-ivan.jpg', 
    bio: ['Более 8 лет опыт в SEO', 'Преподаватель SkillBox', 'Автор системы "Колесо Баланса"'],
    socials: {
        telegram: 'https://t.me/mpagencyru',
        vk: 'https://vk.com/mp_agency'
    }
  },
  { name: 'Семен Шаталов', role: 'Руководитель SEO-отдела', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' },
  { name: 'Анна Чадромцева', role: 'Проджект Менеджер', image: 'https://images.unsplash.com/photo-1573496359-794d6a6c305d?auto=format&fit=crop&q=80&w=400' },
  { name: 'Никита Трошев', role: 'SEO-специалист', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
  { name: 'Настасья Печенкина', role: 'SEO-специалист', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400' },
];

export const MAIN_AWARDS = [
  { place: 47, title: '47 место в рейтинге известности SEO компаний', source: 'Рейтинг Рунета' },
  { place: 35, title: '35 место в рейтинге SEO агентств Москвы', source: 'Рейтинг Рунета' },
  { place: 6, title: '6 место в рейтинге SEO услуг для строительных компаний', source: 'Рейтинг Рунета' },
  { place: 15, title: '15 место в рейтинге SEO услуг для сферы IT', source: 'Рейтинг Рунета' },
  { place: 100, title: 'Топ-100 SEO агентств в РФ', source: 'Рейтинг Рунета' },
  { place: 7, title: '7 место в сфере Бьюти', source: 'Workspace' },
  { place: 9, title: '9 место для сферы Одежды и обуви', source: 'Workspace' },
  { place: 10, title: '10 место для сферы Мебели и интерьера', source: 'Workspace' },
  { place: 5, title: '5 место в сфере SEO для ниши сад и огород', source: 'Рейтинг Рунета' },
  { place: 5, title: '5 место для сферы строительство и ремонт', source: 'Рейтинг Рунета' },
  { place: 6, title: '6 место для сферы торговля оборудованием и запчастями', source: 'Рейтинг Рунета' },
  { place: 9, title: '9 место в нише переводов и редактуры', source: 'Рейтинг Рунета' },
  { place: 9, title: '9 место в сфере подарков и цветов', source: 'Рейтинг Рунета' },
  { place: 11, title: '11 место в сфере торговли алкогольной продукцией', source: 'Рейтинг Рунета' },
];

export const CERTIFICATES_2025 = [
  { image: '/img/awards/2025/seo-21-workspace-msk.png', title: 'SEO 21 место Москва Workspace' },
  { image: '/img/awards/2025/seo-40-workspace-ru.png', title: 'SEO 40 место РФ Workspace' },
  { image: '/img/awards/2025/seo-runet-100-ru.png', title: 'SEO 100 место РФ Рейтинг Рунета' },
  { image: '/img/awards/2025/seo-runet-35-msk.png', title: 'SEO 35 место Москва Рейтинг Рунета' },
];

export const FAQ_ITEMS = [
  { q: 'ЧТО ВКЛЮЧАЕТ SEO ПРОДВИЖЕНИЕ САЙТА?', a: 'Полный комплекс работ: технический аудит, семантическое ядро, оптимизация контента, работа со ссылочной массой и аналитика.' },
  { q: 'СМОГУ ЛИ Я ПОЛУЧИТЬ ОТЧЁТЫ О ВЫПОЛНЕННЫХ РАБОТАХ?', a: 'Да, мы предоставляем ежемесячные подробные отчеты о проделанных работах, позициях сайта и динамике трафика.' },
  { q: 'СКОЛЬКО ВРЕМЕНИ УЙДЁТ, ЧТОБЫ ПОЛУЧИТЬ РЕЗУЛЬТАТ?', a: 'Первые результаты видны через 2-3 месяца. Ощутимый рост трафика и продаж обычно происходит на 4-6 месяц работы.' },
  { q: 'КАК Я ПОЙМУ, ЧТО ЕСТЬ ПОЛОЖИТЕЛЬНЫЙ РЕЗУЛЬТАТ?', a: 'Вы увидите рост позиций в выдаче по целевым запросам, увеличение органического трафика и рост количества заявок.' },
  { q: 'У МЕНЯ НЕСТАНДАРТНАЯ СФЕРА, ПОДОЙДЁТ ЛИ МНЕ ПРОДВИЖЕНИЕ?', a: 'Мы работаем с разными нишами. Оставьте заявку, мы проведем анализ и скажем, эффективно ли SEO для вашего бизнеса.' },
  { q: 'ОТ ЧЕГО ЗАВИСИТ СТОИМОСТЬ ПРОДВИЖЕНИЯ САЙТА?', a: 'От объема сайта, конкуренции в нише, региона продвижения и текущего состояния ресурса.' },
];

export const CLIENT_LOGOS = [
  'APKWALLET', 'BESTMATERIALS', 'ЦБИ', 'CHAMPION', 'PRIAN', 'ARDA'
];

export const MEDIA_LOGOS = [
  'БИЗНЕС ИНСАЙТ', 'Банки Сегодня', 'vc.ru', 'ЭКСПО ЮВЕЛИР', 'НОВОСТИ МАРКЕТИНГА'
];

export const MEDIA_PUBLICATIONS = [
  { 
    source: 'vc.ru', 
    title: 'Как масштабировать SEO на западных рынках: опыт и ошибки', 
    link: '#', 
    logo: 'VC' 
  },
  { 
    source: 'РБК Компании', 
    title: 'Тренды поискового продвижения в 2025 году', 
    link: '#', 
    logo: 'РБК' 
  },
  { 
    source: 'Бизнес Инсайт', 
    title: 'Маркетинг как математика: почему важна аналитика', 
    link: '#', 
    logo: 'BI' 
  }
];

export const FAQS = FAQ_ITEMS.map(item => ({
  question: item.q,
  answer: item.a
}));

export const CLIENTS = CLIENT_LOGOS.map(logo => ({ logoText: logo }));
export const TARGET_AUDIENCE = [
  { icon: Store, title: 'Магазины', description: 'Интернет-магазины с широким ассортиментом', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8' },
  { icon: Factory, title: 'Производители', description: 'Заводы и фабрики, выходящие в онлайн', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158' },
  { icon: Briefcase, title: 'Услуги', description: 'Компании сферы услуг B2B и B2C', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174' }
];

export const ADVANTAGES = [
    { icon: CheckCircle, title: 'Системный подход', description: 'Мы не просто настраиваем рекламу, мы строим систему продаж.' },
    { icon: BarChart3, title: 'Сквозная аналитика', description: 'Видим каждый рубль: от клика до повторной покупки.' },
    { icon: Users, title: 'Команда экспертов', description: 'Над вашим проектом работают профильные специалисты.' },
    { icon: Zap, title: 'Быстрый старт', description: 'Запускаем продажи в течение 7 дней после старта работ.' },
    { icon: ShieldCheck, title: 'Гарантия результата', description: 'Фиксируем KPI в договоре. Нет результата — возвращаем деньги.' },
    { icon: TrendingUp, title: 'Масштабирование', description: 'Помогаем расти кратно, открывая новые каналы продаж.' },
];

export const SERVICES = [
    { icon: Search, title: 'SEO Продвижение', description: 'Вывод карточек в ТОП поиска Wildberries и Ozon.' },
    { icon: Zap, title: 'Реклама и Трафик', description: 'Настройка внутренней рекламы и внешнего трафика.' },
    { icon: PenTool, title: 'Дизайн и Контент', description: 'Продающая инфографика и Rich-контент.' },
    { icon: BarChart3, title: 'Аналитика', description: 'Аудит магазина, Unit-экономика и P&L отчеты.' },
];

export const CASES = [
    {
        id: 'case-1',
        title: 'Рост продаж одежды на Wildberries в 5 раз',
        result: 'x5 Оборот',
        description: 'Комплексное продвижение бренда женской одежды. SEO, реклама, работа с блогерами.',
        metrics: {
            before: ['Оборот: 500к', 'ДРР: 25%'],
            after: ['Оборот: 2.5млн', 'ДРР: 12%']
        },
        period: '4 месяца',
        image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'case-2',
        title: 'Запуск бренда косметики на Ozon с нуля',
        result: '0 -> 1.2млн',
        description: 'Вывод нового бренда уходовой косметики. Создание контента, запуск трафаретов.',
        metrics: {
            before: ['Старт с нуля'],
            after: ['Оборот: 1.2млн', 'ROI: 350%']
        },
        period: '3 месяца',
        image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'case-3',
        title: 'Оптимизация рекламы для магазина электроники',
        result: '-40% ДРР',
        description: 'Снижение доли рекламных расходов при сохранении объема продаж.',
        metrics: {
            before: ['ДРР: 18%'],
            after: ['ДРР: 10.8%']
        },
        period: '2 месяца',
        image: 'https://images.unsplash.com/photo-1593305841991-05c29736cec7?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'case-4',
        title: 'Масштабирование магазина товаров для дома',
        result: '+300% Прибыль',
        description: 'Внедрение сквозной аналитики и оптимизация логистики (FBO).',
        metrics: {
            before: ['Маржа: 15%'],
            after: ['Маржа: 28%']
        },
        period: '6 месяцев',
        image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&q=80&w=800'
    },
];

export const REVIEWS = [
    { title: 'Видеоотзыв о работе с WB', subtitle: 'Ниша: Одежда', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800' },
    { title: 'Результаты продвижения на Ozon', subtitle: 'Ниша: Косметика', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800' },
    { title: 'Отзыв о внешней рекламе', subtitle: 'Ниша: Электроника', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800' },
];

export const BLOG_POSTS = [
    {
        id: 1,
        date: '10 октября, 2024',
        category: 'Wildberries',
        title: 'Как работают автобиддеры на WB в 2025 году',
        excerpt: 'Полный разбор алгоритмов автоматической рекламы. Как настроить и не слить бюджет.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        colorClass: 'bg-purple-100 text-purple-800',
        author: 'Иван Смирнов',
        readTime: '5 мин',
        content: `
            <h2>Что такое автобиддеры?</h2>
            <p>Автобиддеры — это инструменты автоматического управления ставками в рекламных кампаниях...</p>
            [[CTA]]
            <h2>Преимущества использования</h2>
            <ul>
                <li>Экономия времени</li>
                <li>Оптимизация бюджета</li>
                <li>Удержание позиций</li>
            </ul>
        `
    },
    {
        id: 2,
        date: '5 ноября, 2024',
        category: 'Ozon',
        title: 'Трафареты Ozon: стратегия максимального охвата',
        excerpt: 'Секреты настройки трафаретов. Как получать дешевые клики и высокую конверсию.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800',
        colorClass: 'bg-blue-100 text-blue-800',
        author: 'Алексей Петров',
        readTime: '7 мин',
        content: '<p>Трафареты на Ozon...</p>'
    },
    {
        id: 3,
        date: '20 ноября, 2024',
        category: 'Аналитика',
        title: 'Unit-экономика: как не торговать в минус',
        excerpt: 'Пошаговое руководство по расчету юнит-экономики для маркетплейсов.',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600',
        colorClass: 'bg-green-100 text-green-800',
        author: 'Анна Иванова',
        readTime: '10 мин',
        content: '<p>Unit-экономика...</p>'
    },
];

export const NICHE_AWARDS = [
    { place: 1, category: 'Электроника', sub: 'Рейтинг Рунета', source: 'Рейтинг Рунета' },
    { place: 3, category: 'Одежда и обувь', sub: 'Workspace', source: 'Workspace' },
    { place: 1, category: 'Товары для дома', sub: 'Рейтинг Рунета', source: 'Рейтинг Рунета' },
    { place: 5, category: 'Красота', sub: 'Workspace', source: 'Workspace' },
];

export const TEAM = TEAM_MEMBERS;

export const STATS = [
    { value: 500, suffix: '+', label: 'Успешных проектов' },
    { value: 1.5, suffix: 'млрд', label: 'Оборот клиентов' },
    { value: 8, suffix: 'лет', label: 'Опыта в E-com' },
];

export const INFOGRAPHICS_PORTFOLIO = [
    { id: 1, title: 'Умная колонка', category: 'Электроника', image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&q=80&w=600' },
    { id: 2, title: 'Набор косметики', category: 'Красота', image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=600' },
    { id: 3, title: 'Спортивный костюм', category: 'Одежда', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600' },
    { id: 4, title: 'Детский конструктор', category: 'Детям', image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=600' },
    { id: 5, title: 'Витамины', category: 'Здоровье', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600' },
    { id: 6, title: 'Рюкзак городской', category: 'Аксессуары', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600' },
];

export const INFOGRAPHIC_PROCESS = [
    { number: '01', title: 'Анализ конкурентов', description: 'Изучаем ТОП выдачи, выделяем сильные и слабые стороны визуала конкурентов.' },
    { number: '02', title: 'Разработка концепции', description: 'Создаем структуру слайдов, пишем офферы и подбираем референсы.' },
    { number: '03', title: 'Дизайн и Верстка', description: 'Отрисовываем инфографику, обрабатываем фото, добавляем эффекты.' },
    { number: '04', title: 'Внесение правок', description: 'Согласуем макеты с вами и доводим до идеала.' },
];

export const INFOGRAPHIC_PRICING = [
    { title: 'Старт', price: '1 500 ₽', description: 'Для теста гипотез', features: ['1 слайд (Обложка)', 'Анализ конкурентов', '1 круг правок'] },
    { title: 'Стандарт', price: '4 500 ₽', description: 'Полноценная карточка', features: ['5 слайдов', 'Воронка продаж', '2 круга правок', 'Исходники'], isPopular: true },
    { title: 'Премиум', price: '9 000 ₽', description: 'Максимальная упаковка', features: ['7-10 слайдов', 'Rich-контент', 'Видеообложка', 'Безлимитные правки'] },
];

export const AI_SERVICES_PRICING = [
    { title: 'AI Фотосессия', price: 'от 900 ₽', description: 'Генерация фото товара на модели или в интерьере', features: ['Без аренды студии', 'Любая локация', 'Быстро'] },
    { title: 'AI Видеообложка', price: 'от 1 500 ₽', description: 'Анимация статичного фото', features: ['Привлекает внимание', 'Повышает CTR', 'Экономно'] },
];

export const HERO_TICKER = [
    { text: 'Зоотовары', change: 'ДРР -40%', isPositive: true },
    { text: 'Бренд одежды', change: 'x3 оборот за 4 мес', isPositive: true },
    { text: 'RussoLift', change: '+5.8 млн ₽', isPositive: true },
    { text: 'NUCEX (Электроника)', change: 'ТОП-1 выдачи', isPositive: true },
    { text: 'Косметика', change: 'ROI 450%', isPositive: true },
    { text: 'Строительство', change: '+150 заявок', isPositive: true },
];

export const PRICING = PRICING_PLANS; // Alias

export const CASE_STUDIES_DATA = {
    'case-1': {
        id: 'case-1',
        hero: {
            tags: ['Wildberries', 'Одежда'],
            title: 'Рост продаж одежды на Wildberries в 5 раз',
            subtitle: 'Как мы масштабировали бренд женской одежды с помощью комплексного подхода.',
            mainResult: 'x5',
            mainResultLabel: 'Рост выручки',
        },
        passport: {
            clientName: 'Brand N',
            niche: 'Женская одежда',
            service: 'Комплексное ведение',
            timeline: '4 месяца',
            teamSize: 4
        },
        challenge: {
            title: 'Проблема',
            description: 'Клиент уперся в потолок продаж. Реклама работала в ноль.',
            conditions: ['Высокая конкуренция', 'Ограниченный бюджет'],
            initialStats: [
                { label: 'Оборот', value: '500 000 ₽', isBad: true },
                { label: 'ДРР', value: '25%', isBad: true }
            ],
            problems: [
                { title: 'Слабое SEO', description: 'Карточки не ранжировались по ВЧ запросам.' },
                { title: 'Низкий CTR', description: 'Фотографии не выделялись в выдаче.' }
            ]
        },
        strategy: {
            title: 'Решение',
            description: 'Мы полностью переработали контент и стратегию рекламы.',
            steps: [
                { title: 'Новая инфографика', description: 'Сделали яркие обложки с крупными офферами.', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600' },
                { title: 'SEO Оптимизация', description: 'Собрали ядро из 3000 запросов.', artifactType: 'audit-table' },
                { title: 'Настройка рекламы', description: 'Запустили автокампании с биддером.', artifactType: 'ads-graph' }
            ]
        },
        results: {
            title: 'Результаты',
            beforePeriod: 'Март 2024',
            afterPeriod: 'Июль 2024',
            beforeChartData: [20, 25, 22, 28],
            afterChartData: [35, 50, 75, 100],
            finalRevenue: { before: '500к', after: '2.5млн', growthPercent: '+400%' },
            metrics: [
                { icon: 'chart', label: 'Заказы', value: '1200' },
                { icon: 'fire', label: 'CTR', value: '5.8%' },
                { icon: 'rocket', label: 'ROI', value: '450%' },
                { icon: 'check', label: 'ДРР', value: '12%' }
            ]
        },
        lessons: {
            businessTakeaways: ['Важно следить за CTR', 'SEO - база для органики']
        },
        author: {
            name: 'Виктория',
            role: 'Senior Manager',
            image: 'https://images.unsplash.com/photo-1573496359-794d6a6c305d?auto=format&fit=crop&q=80&w=200'
        }
    }
};

export const SCREENSHOT_REVIEWS = [
    { id: 1, title: 'Рост позиций', platform: 'telegram', image: '' },
    { id: 2, title: 'Успешный запуск', platform: 'whatsapp', image: '' },
    { id: 3, title: 'Отчет по рекламе', platform: 'telegram', image: '' },
];

export const TEXT_REVIEWS = [
    { id: 1, name: 'Александр', role: 'Собственник бренда', text: 'Отличная работа команды. Вывели новый товар в топ за 2 недели.', rating: 5, platform: 'Wildberries' },
    { id: 2, name: 'Мария', role: 'Маркетолог', text: 'Понравился системный подход и прозрачная отчетность.', rating: 5, platform: 'Ozon' },
];

export const SEO_CONTENT = {
  title: 'SEO продвижение сайтов в Москве и РФ',
  preview: 'Smirnov Marketing — это команда экспертов, специализирующаяся на комплексном поисковом продвижении бизнеса. Мы не просто выводим сайты в ТОП, а создаем стабильный поток целевого трафика, который конвертируется в реальную прибыль.',
  fullText: `
    <p>В современных условиях поисковая оптимизация (SEO) стала фундаментом для развития любого бизнеса в интернете. Алгоритмы Яндекс и Google постоянно совершенствуются, отдавая приоритет сайтам с качественным контентом, отличным пользовательским опытом (UX) и высокой степенью доверия (E-E-A-T).</p>
    
    <h3>Наш подход к продвижению</h3>
    <p>Мы используем авторскую методику «Колесо баланса», которая подразумевает одновременную работу по всем ключевым направлениям:</p>
    <ul>
      <li><strong>Технический аудит:</strong> Исправление ошибок кода, ускорение загрузки и настройка корректной индексации.</li>
      <li><strong>Семантическое ядро:</strong> Сбор максимально полного списка целевых запросов и их кластеризация.</li>
      <li><strong>Контент-маркетинг:</strong> Создание экспертных текстов, которые отвечают на вопросы пользователей и нравятся поисковикам.</li>
      <li><strong>Внешняя оптимизация:</strong> Построение качественного ссылочного профиля и работа с репутацией бренда (SERM).</li>
    </ul>

    <h3>Почему выбирают Smirnov Marketing?</h3>
    <p>Главное отличие нашего агентства — полная прозрачность и ориентация на бизнес-показатели (ROI, лиды, продажи). Мы глубоко погружаемся в вашу нишу, анализируем конкурентов и находим «точки роста», которые позволяют обойти даже лидеров рынка. Работая с нами, вы получаете не просто отчеты о позициях, а системное развитие вашего маркетинга.</p>
  `
};
