
import React, { useState, useEffect, useRef } from 'react';
import { Phone, MessageCircle, Menu, ArrowUp, Check, X, ChevronDown, MapPin, Users, Briefcase, FileText, Star, Paintbrush, Wrench, Home } from 'lucide-react';
import { Hero } from './components/Hero';
import Calculator from './components/Calculator';
import { PriceList } from './components/PriceList';
import { ContactsPage } from './components/ContactsPage';
import { PortfolioPage } from './components/PortfolioPage';
import { AboutPage } from './components/AboutPage';
import { ReviewsPage } from './components/ReviewsPage';
import { Breadcrumbs } from './components/Breadcrumbs';
import { 
  ComparisonSection, PackagesSection, PortfolioSection, 
  WhyUsSection, WorkflowSection, VisualizationSection,
  MaterialsSection, TeamSection, GuaranteeSection,
  ReviewsSection, FaqSection, GeographySection, IncludedSection, QualityControlSection,
  SeoTextSection
} from './components/ContentSections';
import { COMPANY_PHONE, COMPANY_LOGO, COMPANY_ADDRESS, BUDGET_PACKAGES, BUDGET_PORTFOLIO, BUDGET_FAQ, PACKAGES, PORTFOLIO, FAQ } from './constants';

// Animation Wrapper Component
const RevealOnScroll = ({ children, id, className }: { children?: React.ReactNode, id?: string, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(element);
      }
    }, { threshold: 0.1 });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div id={id} ref={ref} className={`reveal ${isVisible ? 'active' : ''} ${className || ''}`}>
      {children}
    </div>
  );
};

// Modal Component
const Modal = ({ isOpen, onClose, type, onSubmit }: { isOpen: boolean, onClose: () => void, type: 'callback' | 'success', onSubmit: (data: any) => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl animate-in zoom-in-95 duration-300 border border-white/20">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        {type === 'success' ? (
          <div className="text-center py-6">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 ring-8 ring-green-50/50">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold font-heading mb-3 text-slate-900">Заявка принята!</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">Наш менеджер свяжется с вами выбранным способом в течение 15 минут.</p>
            <button 
              onClick={onClose} 
              className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors"
            >
              Отлично
            </button>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); onSubmit({}); }} className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold font-heading text-slate-900 mb-2">Обсудить проект</h3>
              <p className="text-sm text-gray-500">Оставьте контакты для связи с инженером.</p>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wide ml-1">Имя</label>
                  <input type="text" placeholder="Алексей" required className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-medium text-slate-900" />
              </div>
              <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wide ml-1">Телефон</label>
                  <input type="tel" placeholder="+7 (999) 000-00-00" required className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-medium text-slate-900" />
              </div>
              
              <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wide ml-1">Как ответить?</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['call', 'whatsapp', 'telegram', 'max'].map((m) => (
                          <button key={m} type="button" className="py-3 px-2 border border-gray-200 rounded-xl text-xs font-bold text-gray-500 hover:border-gray-400 hover:bg-gray-50 transition-all uppercase">
                              {m === 'call' && 'Звонок'}
                              {m === 'whatsapp' && 'WhatsApp'}
                              {m === 'telegram' && 'Telegram'}
                              {m === 'max' && 'MAX'}
                          </button>
                      ))}
                  </div>
              </div>
            </div>

            <button type="submit" className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 active:scale-95">
              Отправить заявку
            </button>
            <p className="text-center text-xs text-gray-400 leading-tight">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
          </form>
        )}
      </div>
    </div>
  );
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'callback' | 'success'>('callback');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileRepairsOpen, setMobileRepairsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // -- ROUTING LOGIC (Query Params) --
  const [isBudgetPage, setIsBudgetPage] = useState(false);
  const [view, setView] = useState<'landing' | 'prices' | 'contacts' | 'portfolio' | 'about' | 'reviews'>('landing');

  // Categorized Menu Data
  const REPAIR_MENU = [
    {
      title: "По типу ремонта",
      icon: Paintbrush,
      items: [
        { label: "Капитальный ремонт", action: 'premium' },
        { label: "Евроремонт", action: 'premium' },
        { label: "Косметический ремонт", action: 'budget' },
        { label: "Бюджетный ремонт", action: 'budget' },
        { label: "Дизайнерский ремонт", action: 'premium' },
      ]
    },
    {
      title: "По объекту",
      icon: Home,
      items: [
        { label: "Ванная в новостройке", action: 'premium' },
        { label: "Ванная в панельном доме", action: 'premium' },
        { label: "Ванная в хрущевке", action: 'premium' },
        { label: "Совмещенный санузел", action: 'premium' },
        { label: "Раздельный санузел", action: 'premium' },
        { label: "Маленькая ванная", action: 'premium' },
      ]
    },
    {
      title: "Отдельные услуги",
      icon: Wrench,
      items: [
        { label: "Укладка плитки", action: 'prices' },
        { label: "Сантехнические работы", action: 'prices' },
        { label: "Разводка труб", action: 'prices' },
        { label: "Демонтажные работы", action: 'prices' },
        { label: "Обшивка панелями ПВХ", action: 'budget' },
        { label: "Перепланировка", action: 'premium' },
      ]
    }
  ];

  useEffect(() => {
    // Check initial path
    const checkPath = () => {
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get('page');
      
      if (pageParam === 'prices') {
        setView('prices');
        setIsBudgetPage(false);
      } else if (pageParam === 'contacts') {
        setView('contacts');
        setIsBudgetPage(false);
      } else if (pageParam === 'portfolio') {
        setView('portfolio');
        setIsBudgetPage(false);
      } else if (pageParam === 'about') {
        setView('about');
        setIsBudgetPage(false);
      } else if (pageParam === 'reviews') {
        setView('reviews');
        setIsBudgetPage(false);
      } else if (pageParam === 'budget') {
        setView('landing');
        setIsBudgetPage(true);
      } else {
        setView('landing');
        setIsBudgetPage(false);
      }
    };
    checkPath();

    // Handle browser back/forward buttons
    const handlePopState = () => {
      checkPath();
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Function to handle navigation without page reload
  const navigate = (mode: 'premium' | 'budget' | 'prices' | 'contacts' | 'portfolio' | 'about' | 'reviews' | 'landing') => {
    try {
      const url = new URL(window.location.href);
      if (mode === 'prices') {
        url.searchParams.set('page', 'prices');
        setView('prices');
        setIsBudgetPage(false);
      } else if (mode === 'contacts') {
        url.searchParams.set('page', 'contacts');
        setView('contacts');
        setIsBudgetPage(false);
      } else if (mode === 'portfolio') {
        url.searchParams.set('page', 'portfolio');
        setView('portfolio');
        setIsBudgetPage(false);
      } else if (mode === 'about') {
        url.searchParams.set('page', 'about');
        setView('about');
        setIsBudgetPage(false);
      } else if (mode === 'reviews') {
        url.searchParams.set('page', 'reviews');
        setView('reviews');
        setIsBudgetPage(false);
      } else if (mode === 'budget') {
        url.searchParams.set('page', 'budget');
        setView('landing');
        setIsBudgetPage(true);
      } else if (mode === 'landing') {
        url.searchParams.delete('page');
        setView('landing');
        setIsBudgetPage(false);
      } else if (mode === 'premium') {
        url.searchParams.delete('page');
        setView('landing');
        setIsBudgetPage(false);
      } else {
        // default to premium landing
        url.searchParams.delete('page');
        setView('landing');
        setIsBudgetPage(false);
      }
      
      window.history.pushState({}, '', url.toString());
    } catch (e) {
      console.warn('URL update suppressed due to environment restrictions.');
      // Fallback state update if URL update fails
      if (mode === 'prices') setView('prices');
      else if (mode === 'contacts') setView('contacts');
      else if (mode === 'portfolio') setView('portfolio');
      else if (mode === 'about') setView('about');
      else if (mode === 'reviews') setView('reviews');
      else {
        setView('landing');
        setIsBudgetPage(mode === 'budget');
      }
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (data: any) => {
    console.log("Form Data:", data);
    setModalType('success');
    setIsModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    
    if (view !== 'landing') {
       // Navigate to landing first
       navigate(isBudgetPage ? 'budget' : 'premium');
       // Small delay to allow render
       setTimeout(() => {
         document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
       }, 100);
    } else {
       document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Define content based on the current route
  const pageData = isBudgetPage ? {
    heroTitle: "Бюджетный ремонт ванной",
    heroSubtitle: <><span className="text-blue-400">Сжатые сроки и низкая смета.</span> <br/><span className="text-white">Идеально под сдачу или продажу.</span></>,
    heroBadge: "Эконом-класс под ключ",
    heroImage: "https://images.unsplash.com/photo-1595408796414-b6c8673a76e9?auto=format&fit=crop&q=80&w=2000",
    packages: BUDGET_PACKAGES,
    portfolio: BUDGET_PORTFOLIO,
    faq: BUDGET_FAQ,
    calculatorDefault: "Эконом (Панели/Краска)"
  } : {
    heroTitle: "Ремонт ванной комнаты",
    heroSubtitle: <><span className="text-blue-400">Без авансов и скрытых доплат.</span> <br/><span className="text-white">Платите только за результат.</span></>,
    heroBadge: "Гарантия 10 лет по договору",
    heroImage: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=2000",
    packages: PACKAGES,
    portfolio: PORTFOLIO,
    faq: FAQ,
    calculatorDefault: "Стандарт (Капитальный)"
  };

  const isLanding = view === 'landing';
  // If we are not on landing page, header should always be solid white (scrolled style)
  const showSolidHeader = scrolled || !isLanding;

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        type={modalType} 
        onSubmit={handleFormSubmit}
      />
      
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setMobileMenuOpen(false)}>
        <div className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-white shadow-2xl transition-transform duration-300 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={e => e.stopPropagation()}>
           <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <span className="font-heading font-bold text-xl text-slate-900">Меню</span>
              <button onClick={() => setMobileMenuOpen(false)}><X className="w-6 h-6 text-gray-400 hover:text-gray-900" /></button>
           </div>
           <div className="flex flex-col p-6 space-y-4 overflow-y-auto max-h-[calc(100vh-100px)]">
              <nav className="flex flex-col space-y-4 font-heading">
                
                {/* Mobile Repair Types - Enhanced */}
                <div className="pb-4 border-b border-gray-100">
                   <button 
                      onClick={() => setMobileRepairsOpen(!mobileRepairsOpen)}
                      className="flex items-center justify-between w-full text-xs font-bold text-gray-400 uppercase tracking-widest mb-3"
                   >
                      Виды ремонта <ChevronDown className={`w-4 h-4 transition-transform ${mobileRepairsOpen ? 'rotate-180' : ''}`} />
                   </button>
                   
                   {mobileRepairsOpen && (
                      <div className="flex flex-col gap-6 pl-2 border-l-2 border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200 mt-4">
                          {REPAIR_MENU.map((cat, idx) => (
                            <div key={idx}>
                                <div className="flex items-center gap-2 mb-2 text-slate-900 font-bold text-sm">
                                    <cat.icon className="w-4 h-4 text-blue-600" />
                                    {cat.title}
                                </div>
                                <div className="flex flex-col gap-2 pl-6">
                                    {cat.items.map((item, i) => (
                                        <button 
                                            key={i}
                                            onClick={() => navigate(item.action as any)}
                                            className="text-left font-medium text-gray-500 hover:text-blue-600 py-1.5 text-sm"
                                        >
                                            {item.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                          ))}
                      </div>
                   )}
                </div>

                <button onClick={() => scrollToSection('geography')} className="text-left font-bold text-lg text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-3">
                   <MapPin className="w-5 h-5 text-gray-400" /> Районы
                </button>
                <button onClick={() => navigate('reviews')} className={`text-left font-bold text-lg transition-colors flex items-center gap-3 ${view === 'reviews' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-800'}`}>
                   <MessageCircle className={`w-5 h-5 ${view === 'reviews' ? 'text-blue-600' : 'text-gray-400'}`} /> Отзывы
                </button>
                <button onClick={() => navigate('about')} className={`text-left font-bold text-lg transition-colors flex items-center gap-3 ${view === 'about' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-800'}`}>
                   <Users className={`w-5 h-5 ${view === 'about' ? 'text-blue-600' : 'text-gray-400'}`} /> О компании
                </button>
                <button onClick={() => scrollToSection('packages')} className="text-left font-bold text-lg text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-3">
                   <FileText className="w-5 h-5 text-gray-400" /> Цены
                </button>
                <button onClick={() => navigate('portfolio')} className={`text-left font-bold text-lg transition-colors flex items-center gap-3 ${view === 'portfolio' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-800'}`}>
                   <Briefcase className={`w-5 h-5 ${view === 'portfolio' ? 'text-blue-600' : 'text-gray-400'}`} /> Портфолио
                </button>
                <button onClick={() => navigate('prices')} className={`text-left font-bold text-lg transition-colors flex items-center gap-3 ${view === 'prices' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-800'}`}>
                   <FileText className={`w-5 h-5 ${view === 'prices' ? 'text-blue-600' : 'text-gray-400'}`} /> Прайс-лист
                </button>
                <button onClick={() => navigate('contacts')} className={`text-left font-bold text-lg transition-colors flex items-center gap-3 ${view === 'contacts' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-800'}`}>
                   <Phone className={`w-5 h-5 ${view === 'contacts' ? 'text-blue-600' : 'text-gray-400'}`} /> Контакты
                </button>
              </nav>
              
              <div className="pt-6 mt-auto">
                <a href={`tel:${COMPANY_PHONE}`} className="flex items-center gap-3 text-xl font-heading font-bold text-slate-900 mb-6">
                  <Phone className="w-5 h-5 text-blue-600" /> {COMPANY_PHONE}
                </a>
                <button 
                  onClick={() => { setMobileMenuOpen(false); setModalType('callback'); setIsModalOpen(true); }}
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-center shadow-lg shadow-blue-600/20"
                >
                  Заказать звонок
                </button>
              </div>
           </div>
        </div>
      </div>

      {/* --- HEADER --- */}
      <header className={`fixed top-0 w-full z-40 transition-all duration-500 ${showSolidHeader ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-gradient-to-b from-slate-900/90 to-transparent py-6'}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
             {/* Logo Link to Root with interception */}
             <a 
               href="?" 
               onClick={(e) => { e.preventDefault(); navigate('landing'); }}
               className="flex-shrink-0 flex items-center gap-2 group"
             >
                <img 
                    src={COMPANY_LOGO} 
                    alt="Логотип" 
                    className={`h-10 md:h-12 w-auto object-contain transition-all duration-300 ${!showSolidHeader ? 'brightness-0 invert drop-shadow-md' : ''}`} 
                />
             </a>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6 font-heading">
            
            {/* Mega Menu Dropdown */}
            <div className="relative group">
              <button className={`flex items-center gap-1.5 text-sm font-extrabold tracking-wide px-3 py-2 rounded-lg transition-all ${
                  showSolidHeader 
                    ? 'text-slate-800 hover:bg-slate-50' 
                    : 'text-white hover:bg-white/10'
                }`}>
                ВИДЫ РЕМОНТА <ChevronDown className="w-4 h-4 opacity-70" />
              </button>
              
              {/* Invisible bridge to keep hover active */}
              <div className="absolute top-full left-0 w-full h-4"></div>

              {/* Mega Dropdown Content */}
              <div className="absolute top-full left-0 mt-4 w-[900px] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 p-8 grid grid-cols-3 gap-10 -translate-x-[20%] z-50">
                  {REPAIR_MENU.map((category, idx) => (
                    <div key={idx} className="flex flex-col">
                        <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-100">
                           <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                              <category.icon className="w-5 h-5" />
                           </div>
                           <h4 className="font-heading font-bold text-slate-900 text-lg">{category.title}</h4>
                        </div>
                        <ul className="space-y-3">
                           {category.items.map((item, i) => (
                              <li key={i}>
                                 <button 
                                   onClick={() => navigate(item.action as any)} 
                                   className="text-gray-500 hover:text-blue-600 font-medium text-sm transition-all text-left block w-full hover:translate-x-1 duration-200"
                                 >
                                    {item.label}
                                 </button>
                              </li>
                           ))}
                        </ul>
                    </div>
                  ))}
                  
                  {/* Banner in Menu */}
                  <div className="col-span-3 mt-4 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-4 flex items-center justify-between shadow-lg text-white">
                      <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/40">%</div>
                          <div>
                              <div className="text-sm font-bold text-white">Скидка 10% на материалы</div>
                              <div className="text-xs text-slate-400">При заказе комплексного ремонта под ключ</div>
                          </div>
                      </div>
                      <button onClick={() => navigate('landing')} className="text-sm font-bold bg-white text-slate-900 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                          Рассчитать стоимость
                      </button>
                  </div>
              </div>
            </div>

            <button onClick={() => scrollToSection('geography')} className={`text-sm font-bold tracking-wide hover:text-blue-500 transition-all ${showSolidHeader ? 'text-slate-800' : 'text-white'}`}>РАЙОНЫ</button>
            <button onClick={() => navigate('reviews')} className={`text-sm font-bold tracking-wide hover:text-blue-500 transition-all ${view === 'reviews' ? 'text-blue-600' : (showSolidHeader ? 'text-slate-800' : 'text-white')}`}>ОТЗЫВЫ</button>
            <button onClick={() => navigate('contacts')} className={`text-sm font-bold tracking-wide hover:text-blue-500 transition-all ${view === 'contacts' ? 'text-blue-600' : (showSolidHeader ? 'text-slate-800' : 'text-white')}`}>КОНТАКТЫ</button>
            <button onClick={() => navigate('about')} className={`text-sm font-bold tracking-wide hover:text-blue-500 transition-all ${view === 'about' ? 'text-blue-600' : (showSolidHeader ? 'text-slate-800' : 'text-white')}`}>О КОМПАНИИ</button>
            <button onClick={() => scrollToSection('packages')} className={`text-sm font-bold tracking-wide hover:text-blue-500 transition-all ${showSolidHeader ? 'text-slate-800' : 'text-white'}`}>ЦЕНЫ</button>
            <button onClick={() => navigate('prices')} className={`text-sm font-bold tracking-wide hover:text-blue-500 transition-all ${view === 'prices' ? 'text-blue-600' : (showSolidHeader ? 'text-slate-800' : 'text-white')}`}>ПРАЙС</button>
            <button onClick={() => navigate('portfolio')} className={`text-sm font-bold tracking-wide hover:text-blue-500 transition-all ${view === 'portfolio' ? 'text-blue-600' : (showSolidHeader ? 'text-slate-800' : 'text-white')}`}>ПОРТФОЛИО</button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="hidden md:block text-right">
              <a href={`tel:${COMPANY_PHONE}`} className={`block font-heading font-bold text-xl tracking-tight hover:text-blue-600 transition-colors ${showSolidHeader ? 'text-slate-900' : 'text-white drop-shadow-sm'}`}>
                {COMPANY_PHONE}
              </a>
            </div>
            
            <button 
              onClick={() => { setModalType('callback'); setIsModalOpen(true); }}
              className={`hidden lg:block px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg transform hover:-translate-y-0.5 ${
                  showSolidHeader 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-600/30' 
                  : 'bg-white text-slate-900 hover:bg-gray-100 hover:shadow-white/20'
              }`}
            >
              Перезвоните мне
            </button>

            {/* Mobile Controls */}
            <div className="flex xl:hidden items-center gap-3">
              <a href={`tel:${COMPANY_PHONE}`} className={`w-10 h-10 backdrop-blur border rounded-full flex items-center justify-center transition-all ${
                  showSolidHeader 
                  ? 'bg-blue-600 border-blue-600 text-white shadow-md' 
                  : 'bg-white/10 border-white/20 text-white'
              }`}>
                  <Phone className="w-5 h-5" />
              </a>
              <button 
                onClick={() => setMobileMenuOpen(true)} 
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    showSolidHeader 
                    ? 'bg-slate-900 text-white hover:bg-slate-800' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
            >
                  <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      {/* Key forces re-render when switching modes to reset animations and ensure clean state */}
      <main key={view} className={`flex-1 ${!isLanding ? 'pt-20 lg:pt-24' : ''}`}>
        {view === 'landing' && (
          <>
            <Hero 
              onFormSubmit={handleFormSubmit} 
              title={pageData.heroTitle}
              subtitle={pageData.heroSubtitle}
              badgeText={pageData.heroBadge}
              backgroundImage={pageData.heroImage}
            />

            {isBudgetPage && (
              <div className="bg-white">
                <div className="container mx-auto px-4">
                  <Breadcrumbs 
                    items={[{ label: 'Эконом ремонт', isActive: true }]} 
                    onNavigate={navigate} 
                  />
                </div>
              </div>
            )}
            
            <RevealOnScroll id="comparison" className="bg-white">
              <ComparisonSection onAction={() => { setModalType('callback'); setIsModalOpen(true); }} />
            </RevealOnScroll>

            <RevealOnScroll id="portfolio" className="bg-slate-100">
              <PortfolioSection 
                onAction={() => navigate('portfolio')} 
                portfolio={pageData.portfolio}
              />
            </RevealOnScroll>

            <RevealOnScroll id="quality" className="bg-white">
              <QualityControlSection />
            </RevealOnScroll>
            
            <RevealOnScroll id="why-us" className="bg-slate-100">
              <WhyUsSection />
            </RevealOnScroll>

            <RevealOnScroll className="bg-white">
              <MaterialsSection />
            </RevealOnScroll>
            
            <RevealOnScroll id="calculator-section" className="bg-slate-100">
              <section className="py-24">
                <div className="container mx-auto px-4 text-center mb-16">
                  <span className="text-blue-600 font-bold tracking-wider uppercase text-xs mb-3 block">Планирование бюджета</span>
                  <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6 text-slate-900">Рассчитайте стоимость ремонта</h2>
                  <p className="text-gray-500 max-w-2xl mx-auto text-lg">Ответьте на 6 вопросов, и мы сформируем 3 варианта сметы специально под ваши размеры.</p>
                </div>
                <div className="container mx-auto px-4">
                  <Calculator 
                    onComplete={handleFormSubmit} 
                    defaultFinish={pageData.calculatorDefault}
                  />
                </div>
              </section>
            </RevealOnScroll>

            <RevealOnScroll id="packages" className="bg-white">
              <PackagesSection 
                onSelect={(pkg) => { setModalType('callback'); setIsModalOpen(true); }} 
                onShowPriceList={() => navigate('prices')}
                packages={pageData.packages}
              />
            </RevealOnScroll>
            
            <RevealOnScroll>
              <WorkflowSection />
            </RevealOnScroll>

            <RevealOnScroll className="bg-white">
              <IncludedSection />
            </RevealOnScroll>

            <RevealOnScroll className="bg-slate-100">
              <VisualizationSection />
            </RevealOnScroll>
            
            <RevealOnScroll className="bg-white">
              <TeamSection />
            </RevealOnScroll>

            <RevealOnScroll className="bg-slate-100">
              <GuaranteeSection />
            </RevealOnScroll>

            <RevealOnScroll id="reviews" className="bg-white">
              <ReviewsSection onShowAllReviews={() => navigate('reviews')} />
            </RevealOnScroll>

            <RevealOnScroll className="bg-white">
                 <SeoTextSection />
            </RevealOnScroll>

            <RevealOnScroll id="faq" className="bg-slate-100">
              <FaqSection faqItems={pageData.faq} />
            </RevealOnScroll>

            <RevealOnScroll id="geography" className="bg-white">
              <GeographySection onAction={() => { setModalType('callback'); setIsModalOpen(true); }} />
            </RevealOnScroll>
          </>
        )}

        {view === 'prices' && <PriceList onNavigate={navigate} />}
        {view === 'contacts' && <ContactsPage onSubmit={handleFormSubmit} onNavigate={navigate} onBack={() => navigate('landing')} />}
        {view === 'portfolio' && <PortfolioPage onNavigate={navigate} onCalculate={() => { navigate('landing'); setTimeout(() => document.getElementById('calculator-section')?.scrollIntoView(), 100); }} />}
        {view === 'about' && <AboutPage onNavigate={navigate} onCalculate={() => { setModalType('callback'); setIsModalOpen(true); }} />}
        {view === 'reviews' && <ReviewsPage onNavigate={navigate} onCalculate={() => { setModalType('callback'); setIsModalOpen(true); }} />}
      </main>

      {/* --- FOOTER --- */}
      <RevealOnScroll id="contacts">
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600 rounded-full blur-[100px] opacity-10 pointer-events-none"></div>

          <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">Давайте сделаем ванную<br/>вашей мечты</h2>
            <p className="mb-12 text-blue-100 text-lg leading-relaxed max-w-2xl mx-auto">
              Оставьте заявку сейчас, и мы закрепим за вами скидку 10% на материалы и бесплатный дизайн-проект.
            </p>
            
            <form onSubmit={(e) => { e.preventDefault(); handleFormSubmit({}); }} className="glass rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl flex flex-col gap-6 text-left border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wide mb-2 ml-1">Как вас зовут?</label>
                    <input type="text" placeholder="Иван" className="w-full p-4 rounded-xl border-0 bg-white/80 text-slate-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all shadow-inner" required />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wide mb-2 ml-1">Номер телефона</label>
                    <input type="tel" placeholder="+7 (___) ___-__-__" className="w-full p-4 rounded-xl border-0 bg-white/80 text-slate-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all shadow-inner" required />
                  </div>
              </div>

              <div>
                  <label className="block text-xs font-bold text-gray-800 uppercase tracking-wide mb-2 ml-1">Как удобнее ответить?</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {['call', 'whatsapp', 'telegram', 'max'].map((m) => (
                      <button key={m} type="button" className="py-3 rounded-xl border border-transparent bg-white/50 text-slate-700 font-bold text-sm hover:bg-white transition-all shadow-sm">
                         {m === 'call' && 'Звонок'}
                         {m === 'whatsapp' && 'WhatsApp'}
                         {m === 'telegram' && 'Telegram'}
                         {m === 'max' && 'MAX'}
                      </button>
                    ))}
                  </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-6 mt-2 pt-4 border-t border-gray-200/20">
                 <button type="submit" className="w-full md:w-auto flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 px-8 rounded-xl transition-all shadow-xl shadow-blue-600/30 text-lg transform hover:-translate-y-1">
                    Получить смету и дизайн-проект
                 </button>
                 <div className="text-xs text-gray-600 max-w-xs text-center md:text-left leading-tight">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
                 </div>
              </div>
            </form>
          </div>
        </section>
      </RevealOnScroll>

      <footer className="bg-slate-950 text-gray-400 py-12 border-t border-slate-900 mt-auto">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
             <img src={COMPANY_LOGO} alt="Логотип" className="h-10 w-auto object-contain brightness-0 invert opacity-50 mb-4 mx-auto md:mx-0" />
            <p className="text-sm max-w-xs leading-relaxed text-gray-500">
              {COMPANY_ADDRESS} <br />
              Профессиональный ремонт ванных комнат и санузлов под ключ.
            </p>
          </div>
          
          <div className="text-center md:text-right">
             <a href={`tel:${COMPANY_PHONE}`} className="text-2xl font-bold text-white block hover:text-blue-500 mb-3 transition-colors font-heading">{COMPANY_PHONE}</a>
             <div className="flex justify-center md:justify-end gap-4 mb-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><MessageCircle className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Phone className="w-5 h-5" /></a>
             </div>
            <div className="text-xs text-gray-600">© {new Date().getFullYear()} Все права защищены</div>
          </div>
        </div>
      </footer>

      {/* --- MOBILE STICKY BOTTOM BAR --- */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur border-t border-gray-200 p-3 flex gap-3 z-30 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] pb-safe">
        <button 
          onClick={() => { 
             if (view !== 'landing') navigate('landing'); 
             setTimeout(() => document.getElementById('calculator-section')?.scrollIntoView({ behavior: 'smooth' }), 100); 
          }}
          className="flex-1 bg-slate-100 text-slate-700 py-3.5 rounded-xl font-bold text-sm active:scale-95 transition-transform"
        >
          Рассчитать цену
        </button>
        <button 
          onClick={() => { setModalType('callback'); setIsModalOpen(true); }}
          className="flex-1 bg-blue-600 text-white py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-blue-600/20 active:scale-95 transition-transform"
        >
          Вызвать замерщика
        </button>
      </div>

      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-24 right-4 lg:bottom-10 lg:right-10 bg-white text-slate-900 p-4 rounded-full shadow-2xl border border-gray-100 transition-all duration-500 z-40 group ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
      </button>

    </div>
  );
}

export default App;
