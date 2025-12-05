
import React, { useState, useEffect, useRef } from 'react';
import { Phone, MessageCircle, MapPin, X, Menu, ArrowUp, Check } from 'lucide-react';
import { Hero } from './components/Hero';
import Calculator from './components/Calculator';
import { 
  ComparisonSection, PackagesSection, PortfolioSection, 
  WhyUsSection, WorkflowSection, VisualizationSection,
  MaterialsSection, TeamSection, GuaranteeSection,
  ReviewsSection, FaqSection, GeographySection, IncludedSection, QualityControlSection
} from './components/ContentSections';
import { COMPANY_PHONE, COMPANY_LOGO, formatPhone } from './constants';

// Animation Wrapper Component
const RevealOnScroll = ({ children, id, className }: { children?: React.ReactNode, id?: string, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div id={id} ref={ref} className={`reveal ${isVisible ? 'active' : ''} ${className || ''}`}>
      {children}
    </div>
  );
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'callback' | 'success'>('callback');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Form states
  const [footerForm, setFooterForm] = useState({ name: '', phone: '', method: 'call' });
  const [modalForm, setModalForm] = useState({ name: '', phone: '', method: 'call' });

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
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const Modal = () => {
    if (!isModalOpen) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-4 animate-in fade-in duration-300">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl animate-in zoom-in-95 duration-300 border border-white/20">
          <button 
            onClick={() => setIsModalOpen(false)} 
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          {modalType === 'success' ? (
            <div className="text-center py-6">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 ring-8 ring-green-50/50">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-3 text-slate-900">Заявка принята!</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">Наш менеджер свяжется с вами выбранным способом в течение 15 минут.</p>
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors"
              >
                Отлично
              </button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); handleFormSubmit(modalForm); }} className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold font-heading text-slate-900 mb-2">Обсудить проект</h3>
                <p className="text-sm text-gray-500">Оставьте контакты для связи с инженером.</p>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wide ml-1">Имя</label>
                    <input 
                        type="text" 
                        placeholder="Алексей" 
                        required 
                        value={modalForm.name}
                        onChange={(e) => setModalForm({...modalForm, name: e.target.value})}
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-medium text-slate-900" 
                    />
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wide ml-1">Телефон</label>
                    <input 
                        type="tel" 
                        placeholder="+7 (999) 000-00-00" 
                        required 
                        value={modalForm.phone}
                        onChange={(e) => setModalForm({...modalForm, phone: formatPhone(e.target.value)})}
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-medium text-slate-900" 
                    />
                </div>
                
                <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wide ml-1">Как ответить?</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {['call', 'whatsapp', 'telegram', 'max'].map((m) => (
                            <button 
                                key={m}
                                type="button" 
                                onClick={() => setModalForm({...modalForm, method: m})}
                                className={`py-3 px-2 border rounded-xl text-xs font-bold transition-all ${
                                    modalForm.method === m 
                                    ? 'bg-slate-900 text-white border-slate-900 shadow-md transform scale-105' 
                                    : 'border-gray-200 text-gray-500 hover:border-gray-400 hover:bg-gray-50'
                                }`}
                            >
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

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Modal />
      
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setMobileMenuOpen(false)}>
        <div className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-white shadow-2xl transition-transform duration-300 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={e => e.stopPropagation()}>
           <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <span className="font-heading font-bold text-xl text-slate-900">Меню</span>
              <button onClick={() => setMobileMenuOpen(false)}><X className="w-6 h-6 text-gray-400 hover:text-gray-900" /></button>
           </div>
           <div className="flex flex-col p-6 space-y-6">
              <nav className="flex flex-col space-y-4 font-heading">
                <button onClick={() => scrollToSection('portfolio')} className="text-left font-bold text-lg text-gray-600 hover:text-blue-600 transition-colors">Примеры работ</button>
                <button onClick={() => scrollToSection('why-us')} className="text-left font-bold text-lg text-gray-600 hover:text-blue-600 transition-colors">Преимущества</button>
                <button onClick={() => scrollToSection('calculator-section')} className="text-left font-bold text-lg text-gray-600 hover:text-blue-600 transition-colors">Калькулятор</button>
                <button onClick={() => scrollToSection('packages')} className="text-left font-bold text-lg text-gray-600 hover:text-blue-600 transition-colors">Стоимость</button>
                <button onClick={() => scrollToSection('reviews')} className="text-left font-bold text-lg text-gray-600 hover:text-blue-600 transition-colors">Отзывы</button>
              </nav>
              
              <div className="pt-8 border-t border-gray-100 mt-auto">
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
      <header className={`fixed top-0 w-full z-40 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-gradient-to-b from-slate-900/90 to-transparent py-6'}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
             {/* Logo */}
             <a href="/" className="flex-shrink-0 flex items-center gap-2 group">
                <img 
                    src={COMPANY_LOGO} 
                    alt="Логотип" 
                    className={`h-10 md:h-12 w-auto object-contain transition-all duration-300 ${!scrolled ? 'brightness-0 invert drop-shadow-md' : ''}`} 
                />
             </a>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 font-heading">
            <button onClick={() => scrollToSection('portfolio')} className={`text-sm font-bold tracking-wide hover:text-blue-500 transition-all ${scrolled ? 'text-slate-800' : 'text-white'}`}>ПОРТФОЛИО</button>
            <button onClick={() => scrollToSection('calculator-section')} className={`text-sm font-bold tracking-wide hover:text-blue-500 transition-all ${scrolled ? 'text-slate-800' : 'text-white'}`}>КАЛЬКУЛЯТОР</button>
            <button onClick={() => scrollToSection('packages')} className={`text-sm font-bold tracking-wide hover:text-blue-500 transition-all ${scrolled ? 'text-slate-800' : 'text-white'}`}>ЦЕНЫ</button>
            <button onClick={() => scrollToSection('reviews')} className={`text-sm font-bold tracking-wide hover:text-blue-500 transition-all ${scrolled ? 'text-slate-800' : 'text-white'}`}>ОТЗЫВЫ</button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="hidden md:block text-right">
              <a href={`tel:${COMPANY_PHONE}`} className={`block font-heading font-bold text-xl tracking-tight hover:text-blue-600 transition-colors ${scrolled ? 'text-slate-900' : 'text-white drop-shadow-sm'}`}>
                {COMPANY_PHONE}
              </a>
            </div>
            
            <button 
              onClick={() => { setModalType('callback'); setIsModalOpen(true); }}
              className={`hidden lg:block px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg transform hover:-translate-y-0.5 ${
                  scrolled 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-600/30' 
                  : 'bg-white text-slate-900 hover:bg-gray-100 hover:shadow-white/20'
              }`}
            >
              Перезвоните мне
            </button>

            {/* Mobile Controls */}
            <div className="flex lg:hidden items-center gap-3">
              <a href={`tel:${COMPANY_PHONE}`} className={`w-10 h-10 backdrop-blur border rounded-full flex items-center justify-center transition-all ${
                  scrolled 
                  ? 'bg-blue-600 border-blue-600 text-white shadow-md' 
                  : 'bg-white/10 border-white/20 text-white'
              }`}>
                  <Phone className="w-5 h-5" />
              </a>
              <button 
                onClick={() => setMobileMenuOpen(true)} 
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    scrolled 
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
      <main>
        <Hero onFormSubmit={handleFormSubmit} />
        
        {/* REORDERED SECTIONS FOR BETTER FUNNEL */}
        
        <RevealOnScroll id="comparison" className="bg-white">
          <ComparisonSection onAction={() => { setModalType('callback'); setIsModalOpen(true); }} />
        </RevealOnScroll>

        {/* Portfolio Moved Up: Build desire early */}
        <RevealOnScroll id="portfolio" className="bg-slate-100">
          <PortfolioSection onAction={() => { setModalType('callback'); setIsModalOpen(true); }} />
        </RevealOnScroll>

        {/* Quality Standards: Prove reliability before price */}
        <RevealOnScroll id="quality" className="bg-white">
          <QualityControlSection />
        </RevealOnScroll>
        
        {/* Why Us / Standards: Reinforce trust */}
        <RevealOnScroll id="why-us" className="bg-slate-100">
          <WhyUsSection />
        </RevealOnScroll>

        {/* Materials: Show brand authority */}
        <RevealOnScroll className="bg-white">
          <MaterialsSection />
        </RevealOnScroll>
        
        {/* Calculator: Engage user */}
        <RevealOnScroll id="calculator-section" className="bg-slate-100">
          <section className="py-24">
            <div className="container mx-auto px-4 text-center mb-16">
              <span className="text-blue-600 font-bold tracking-wider uppercase text-xs mb-3 block">Планирование бюджета</span>
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6 text-slate-900">Рассчитайте стоимость ремонта</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg">Ответьте на 6 вопросов, и мы сформируем 3 варианта сметы (Эконом, Стандарт, Премиум) специально под ваши размеры.</p>
            </div>
            <div className="container mx-auto px-4">
              <Calculator onComplete={handleFormSubmit} />
            </div>
          </section>
        </RevealOnScroll>

        {/* Pricing: Finally show the price */}
        <RevealOnScroll id="packages" className="bg-white">
          <PackagesSection onSelect={(pkg) => { setModalType('callback'); setIsModalOpen(true); }} />
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
          <ReviewsSection />
        </RevealOnScroll>

        <RevealOnScroll id="faq" className="bg-slate-100">
          <FaqSection />
        </RevealOnScroll>

        <RevealOnScroll className="bg-white">
          <GeographySection />
        </RevealOnScroll>
      </main>

      {/* --- FOOTER --- */}
      <RevealOnScroll>
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600 rounded-full blur-[100px] opacity-10 pointer-events-none"></div>

          <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">Давайте сделаем ванную<br/>вашей мечты</h2>
            <p className="mb-12 text-blue-100 text-lg leading-relaxed max-w-2xl mx-auto">
              Оставьте заявку сейчас, и мы закрепим за вами скидку 10% на материалы и бесплатный дизайн-проект.
            </p>
            
            <form onSubmit={(e) => { e.preventDefault(); handleFormSubmit(footerForm); }} className="glass rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl flex flex-col gap-6 text-left border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wide mb-2 ml-1">Как вас зовут?</label>
                    <input 
                      type="text" 
                      placeholder="Иван" 
                      value={footerForm.name}
                      onChange={(e) => setFooterForm({...footerForm, name: e.target.value})}
                      className="w-full p-4 rounded-xl border-0 bg-white/80 text-slate-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all shadow-inner" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wide mb-2 ml-1">Номер телефона</label>
                    <input 
                      type="tel" 
                      placeholder="+7 (___) ___-__-__" 
                      value={footerForm.phone}
                      onChange={(e) => setFooterForm({...footerForm, phone: formatPhone(e.target.value)})}
                      className="w-full p-4 rounded-xl border-0 bg-white/80 text-slate-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all shadow-inner" 
                      required 
                    />
                  </div>
              </div>

              <div>
                  <label className="block text-xs font-bold text-gray-800 uppercase tracking-wide mb-2 ml-1">Как удобнее ответить?</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {['call', 'whatsapp', 'telegram', 'max'].map((m) => (
                      <button 
                        key={m}
                        type="button"
                        onClick={() => setFooterForm({...footerForm, method: m})}
                        className={`py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                          footerForm.method === m 
                            ? 'bg-slate-900 text-white shadow-lg transform scale-105 ring-2 ring-slate-900/20' 
                            : 'bg-white/50 text-slate-700 hover:bg-white'
                        }`}
                      >
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

      <footer className="bg-slate-950 text-gray-400 py-12 border-t border-slate-900">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
             <img src={COMPANY_LOGO} alt="Логотип" className="h-10 w-auto object-contain brightness-0 invert opacity-50 mb-4 mx-auto md:mx-0" />
            <p className="text-sm max-w-xs leading-relaxed text-gray-500">
              Профессиональный ремонт ванных комнат и санузлов под ключ в Москве и МО.
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
          onClick={() => { document.getElementById('calculator-section')?.scrollIntoView({ behavior: 'smooth' }) }}
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
