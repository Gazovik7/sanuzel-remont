import type { ServicePageData } from '../../../types';

export const SEO_GLOBAL_DATA: ServicePageData = {
  slug: 'seo-prodvizhenie-angloyazychnyh-saytov',
  template: 'seo',
  caseIds: ['1', '2', '3', '4', '5', '6'],
  seo: {
    title: "Продвижение сайтов в США и Европе (Burzh) | Smirnov Marketing",
    description: "Профессиональное SEO продвижение на английском языке. Линкбилдинг, Outreach, Native контент и вывод в ТОП-1 Google США, Великобритании, ОАЭ.",
  },
  breadcrumbs: [
    { label: 'Главная', href: '/' },
    { label: 'SEO Global', href: '/seo-prodvizhenie-angloyazychnyh-saytov/' },
  ],
  hero: {
    h1: "SEO продвижение на | западных рынках",
    description: "Масштабируем ваш бизнес на весь мир. Выводим в ТОП Google США, Европы и ОАЭ с использованием стратегий, которые реально работают в бурж-нете в 2025 году.",
    founderQuote: "В Бурже нельзя просто 'купить ссылок'. Здесь побеждает только безупречная техничка, мощный Outreach и контент, написанный носителями языка.",
    bullets: [
      "Собственная сеть PBN (150+ доменов) под USA/EU",
      "Native-копирайтеры (USA, UK, Canada)",
      "Гарантированная защита от Google Spam Update",
      "Опыт в сложнейших нишах: Crypto, FinTech, SaaS"
    ]
  },
  whyUs: {
    title: "Почему нам доверяют",
    subtitle: "выход на мир",
    items: [
      { 
        icon: 'Globe', 
        title: 'Глубокая локализация', 
        desc: 'Мы не просто переводим тексты. Мы адаптируем ваш продукт под менталитет и поисковые привычки пользователей в конкретной стране.' 
      },
      { 
        icon: 'Link2', 
        title: 'Elite Outreach', 
        desc: 'Добываем ссылки с живых, посещаемых ресурсов, которые ваши конкуренты никогда не купят на обычных биржах.' 
      },
      { 
        icon: 'ShieldCheck', 
        title: 'Безопасность и White Hat', 
        desc: 'Работаем по гайдлайнам Google. Никакого черного SEO — только планомерный рост авторитета вашего домена.' 
      }
    ]
  },
  methodology: {
    title: "Наш подход к",
    subtitle: "Global SEO",
    description: [
      "Рынок Буржа — это игра вдолгую. Мы используем авторскую методику 'Link & Content Synergy', которая позволяет обходить местных игроков за счет качества проработки.",
      "Особое внимание уделяем факторам E-E-A-T (Экспертность и Доверие), которые являются фундаментом ранжирования в Google во всем мире."
    ]
  },
  comparison: {
    title: "Как работают 'конвейеры' и",
    subtitle: "как работаем мы",
    bad: [
      'Тексты, сгенерированные ИИ без правок',
      'Дешевые ссылки из Индии и Пакистана',
      'Игнорирование локальных интентов',
      'Отсутствие работы с Google Search Console'
    ],
    good: [
      'Контент от носителей языка (Proofreading)',
      'Ручной Outreach и PR на авторитетных СМИ',
      'Локализация под конкретные штаты и города',
      'Ежедневный мониторинг апдейтов Google'
    ]
  },
  funnel: {
    title: "Строим воронку",
    subtitle: "мирового уровня",
    description: "Мы превращаем холодный западный трафик в лояльных клиентов, выстраивая доверие к вашему бренду с первого клика."
  },
  servicesIncluded: {
    title: "Что входит в",
    subtitle: "International SEO",
    description: "Комплекс работ, необходимый для захвата лидерства в Google.",
    items: [
      { title: 'Market Analysis', desc: 'Изучаем спрос, CPC и силу конкурентов в целевом ГЕО.', image: '/img/work/1.webp' },
      { title: 'Technical SEO', desc: 'Оптимизация под Core Web Vitals и мультиязычность.', image: '/img/work/3.webp' },
      { title: 'Keyword Research', desc: 'Сбор семантики с учетом LSI и локального сленга.', image: '/img/work/2.webp' },
      { title: 'Link Building', desc: 'Аутрич, гостевые посты и построение PBN сетей.', image: '/img/work/4.webp' },
      { title: 'Native Content', desc: 'Написание статей экспертами-носителями языка.', image: '/img/work/5.webp' },
      { title: 'Conversion (CRO)', desc: 'Адаптация UX под западные стандарты дизайна.', image: '/img/work/6.webp' },
      { title: 'E-E-A-T Signals', desc: 'Работа над авторитетностью авторов и бренда.', image: '/img/work/7.webp' },
      { title: 'Growth Strategy', desc: 'Масштабирование на новые страны и языковые зоны.', image: '/img/work/8.webp' },
    ]
  },
  pricing: {
    title: "Инвестиции в",
    subtitle: "западный трафик",
    description: "Стоимость продвижения в Бурже выше из-за цен на ссылки и контент, но окупаемость в валюте оправдывает каждый цент.",
    plans: [
      { 
        title: 'Entry Global', 
        price: 'от $1500', 
        description: 'Для малых ниш и локальных услуг', 
        features: ['Аудит и стратегия', 'Native тексты (5к слов)', '10 качественных ссылок/мес'] 
      },
      { 
        title: 'Pro Strategy', 
        price: 'от $3500', 
        description: 'Оптимально для SaaS и E-commerce', 
        isPopular: true, 
        features: ['Глубокий линкбилдинг', 'PR на отраслевых сайтах', 'Анализ ROI воронки'] 
      },
      { 
        title: 'Enterprise', 
        price: 'от $7000', 
        description: 'Захват рынка в конкурентных нишах', 
        features: ['Личное сопровождение', 'Масштабный Outreach', 'Собственная PBN сеть'] 
      }
    ]
  },
  process: {
    title: "Как мы выводим",
    subtitle: "сайты в мир",
    description: "Четкий алгоритм действий для достижения результатов в Google.",
    stages: [
      { num: '01', title: 'Deep Audit', desc: 'Находим барьеры, мешающие росту в конкретном ГЕО.' },
      { num: '02', title: 'Content Base', desc: 'Создаем базу экспертного контента на английском.' },
      { num: '03', title: 'Link Explosion', desc: 'Наращиваем ссылочный вес через Outreach и PR.' },
      { num: '04', title: 'Domination', desc: 'Удерживаем позиции и масштабируем успех.' }
    ]
  },
  leadMagnet: {
    title: "Как продвигаться в США",
    subtitle: "в 2025 году?",
    image: "/img/lm-seo.png",
    botLink: "https://t.me/mpagencyru",
    benefits: [
      { title: 'Budget', desc: 'Как не слить $10k на ссылки за месяц' },
      { title: 'Updates', desc: 'Что делать с новыми фильтрами Google' },
      { title: 'Native', desc: 'Где искать авторов, которые умеют продавать' }
    ],
    buttonText: "Получить гайд в Telegram"
  },
  seoBenefits: {
    title: "Что даст вам",
    subtitle: "выход на Бурж?",
    description: "Перестаньте зависеть от одного рынка — работайте на весь мир.",
    items: [
      { title: 'Твердая валютная выручка', icon: 'DollarSign' },
      { title: 'Доступ к 1.5 млрд аудитории', icon: 'Globe' },
      { title: 'Капитализация в долларах', icon: 'TrendingUp' },
      { title: 'Устойчивость бизнеса', icon: 'ShieldCheck' }
    ]
  },
  faq: [
    { question: "Сколько времени ждать первых лидов?", answer: "В Бурже результат обычно виден на 4-6 месяц работы из-за высокой инертности Google." },
    { question: "Вы гарантируете позиции?", answer: "Мы гарантируем выполнение всех этапов стратегии и рост целевых показателей, зафиксированных в договоре." }
  ],
  seoText: {
    title: "Особенности SEO продвижения на английском языке",
    preview: "Бурж-нет — это не просто другой язык, это совсем другие правила игры.",
    fullText: "<p>Продвижение англоязычных сайтов требует глубокого понимания специфики западного интернета. В США и Европе Google является практически монополистом, а его алгоритмы (SpamBrain, Helpful Content Update) работают жестче, чем в рунете.</p><h3>Ключевые факторы успеха</h3><p>Главным отличием является стоимость ссылок. Качественный Outreach-линк может стоить от $200 до $1500 за одну ссылку. Поэтому мы делаем упор на точечную работу с авторитетными донорами.</p>"
  },
  showCalculator: false,
  showUrgency: true,
  showQuiz: true
};

export const servicePage = SEO_GLOBAL_DATA;