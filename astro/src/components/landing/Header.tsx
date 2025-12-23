
import React, { useEffect, useState, useRef } from 'react';
import { NAV_ITEMS, LOGO_URL } from './constants';
import { Menu, X, ChevronDown, Phone, Send, MessageCircle, Mail, Globe } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useModal } from './Modal';

const Link = ({href, children, ...props}: any) => <a href={href} {...props}>{children}</a>;
const usePathname = () => '/'; // Mock for Astro

interface HeaderProps {
  onNavigateHome?: () => void;
  pathname?: string;
}

const VKIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zM17.6 12.5c.4.4.8.8 1.2 1.2.3.3.5.6.2 1-.2.3-.5.3-.8.3h-2.3c-.6 0-1-.2-1.4-.6-.2-.2-.4-.4-.6-.6-.1-.1-.2-.2-.3-.2-.1 0-.2.1-.2.3v.6c0 .6-.2.8-.8.8-1.8 0-3.7-1.1-5.5-3.7 0 0-.1-.2-.1-.2-.1-.1-.1 0-.1.1-.2.2-.2h2.3c.3 0 .5.1.6.4.2.5 1 1 1.5.1.1.2.2.3.2.1 0 .2-.1.2-.3V10.6c0-1-.3-1.1-1.1-1.1-.2 0-.2-.1-.2-.2 0-.2.4-.4 1.2-.4.4 0 .6.1.7.3.1.2.1.5.1.9v1.3c0 .2 0 .3.1.4.1.1.2.1.3 0 .5-.6.9-1.2 1.3-1.9.1-.2.3-.3.5-.3h2.3c.3 0 .5.1.6.3 0 .3-.3.7-.5 1-.3.4-.6.8-1 1.2-.1.1-.1.2-.1.3 0 .1.1.2.2.3z"/>
  </svg>
);

const SocialLink = ({ href, icon, title }: { href: string, icon: React.ReactNode, title?: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    title={title}
    className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#D4AF37] hover:text-black text-gray-400 transition-all duration-300 border border-white/10"
  >
    {icon}
  </a>
);

const Header: React.FC<HeaderProps> = ({ pathname: initialPathname }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  
  const { openModal } = useModal();
  const [pathname, setPathname] = useState(initialPathname || '/');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPathname(window.location.pathname);
    }
  }, []);

  // Reliable detection: dark background pages (where header can be transparent)
  const isHome = pathname === '/';
  const isService = pathname.includes('/services/');
  const isArticle = pathname.includes('/article/');
  const isCase = pathname.includes('/portfolio/') && pathname !== '/portfolio/';
  const isDarkBasePage = isHome || isService || isArticle || isCase;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setHoveredNav(label);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredNav(null);
    }, 150); 
  };

  const handleOpenAudit = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    openModal({
      title: 'Заказать звонок',
      subtitle: 'Оставьте номер, мы перезвоним и обсудим ваш проект.'
    });
  };

  // Only use transparent header on dark-themed pages when NOT scrolled
  const headerBgClass = (isDarkBasePage && !isScrolled && !hoveredNav) 
    ? 'bg-transparent py-3' 
    : 'bg-[#09090b]/95 backdrop-blur-md border-b border-white/5 py-3 shadow-xl';

  // Helper to determine menu type
  const getMenuType = (item: any) => {
    if (!item.children) return 'none';
    // If children have children -> Mega Menu (Grid)
    const isMega = item.children.some((child: any) => child.children?.length > 0);
    return isMega ? 'mega' : 'simple';
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${headerBgClass}`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1600px]">
        <div className="flex justify-between items-center h-10">
          
          {/* Logo */}
          <div className="flex items-center shrink-0 mr-12 relative z-50">
            <Link href="/" className="block group">
              <img src={LOGO_URL} alt="Smirnov Marketing" className="h-12 md:h-14 w-auto transition-transform duration-300 group-hover:scale-105" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center flex-1">
            <ul className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const menuType = getMenuType(item);
                
                return (
                  <li 
                    key={item.label} 
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                  >
                    <Link 
                      href={item.href}
                      className={`px-3 py-2 text-[13px] font-semibold tracking-wide transition-all flex items-center gap-1.5 rounded-md ${
                        hoveredNav === item.label 
                          ? 'text-white' 
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {item.label}
                      {menuType !== 'none' && (
                        <ChevronDown size={10} className={`transition-transform duration-300 opacity-50 ${hoveredNav === item.label ? 'rotate-180 opacity-100' : ''}`} />
                      )}
                    </Link>

                    {/* Dropdown Container */}
                    <AnimatePresence>
                      {hoveredNav === item.label && menuType !== 'none' && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute top-[calc(100%+10px)] left-0 bg-[#121214] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 p-6 ${
                            menuType === 'mega' ? 'w-[800px]' : 'w-[260px]'
                          }`}
                        >
                           {/* Decorative Top Arrow */}
                           <div className="absolute -top-1.5 left-8 w-3 h-3 bg-[#121214] border-t border-l border-white/10 transform rotate-45"></div>

                           {/* MEGA MENU (Grid Layout) */}
                           {menuType === 'mega' ? (
                              <div className="grid grid-cols-3 gap-8">
                                {item.children?.map((col, idx) => (
                                  <div key={idx} className="space-y-4">
                                     {/* Column Header */}
                                     <Link href={col.href} className="flex items-center gap-2 group/header">
                                        <div className="w-1 h-4 bg-[#D4AF37] rounded-full"></div>
                                        <span className="font-bold text-white text-sm group-hover/header:text-[#D4AF37] transition-colors">
                                          {col.label}
                                        </span>
                                     </Link>
                                     {/* Sub Items */}
                                     <ul className="space-y-2">
                                        {col.children?.map((sub, sIdx) => (
                                           <li key={sIdx}>
                                              <Link 
                                                href={sub.href}
                                                className="text-gray-400 hover:text-white text-sm block transition-colors hover:translate-x-1 duration-200 whitespace-nowrap"
                                              >
                                                {sub.label}
                                              </Link>
                                           </li>
                                        ))}
                                     </ul>
                                  </div>
                                ))}
                              </div>
                           ) : (
                              // SIMPLE DROPDOWN (List Layout)
                              <ul className="space-y-1">
                                {item.children?.map((child, idx) => (
                                   <li key={idx}>
                                      <Link 
                                         href={child.href}
                                         className="flex items-center justify-between text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg text-sm transition-all group/item whitespace-nowrap"
                                      >
                                         {child.label}
                                         <ChevronDown size={12} className="opacity-0 group-hover/item:opacity-50 -rotate-90" />
                                      </Link>
                                   </li>
                                ))}
                              </ul>
                           )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Desktop Contact Info (Compact & Clean) */}
          <div className="hidden lg:flex items-center gap-8 relative z-50">
             
             {/* Phone */}
             <div className="flex flex-col items-end">
                <a href="tel:+74993489777" className="text-white hover:text-[#D4AF37] font-bold text-base transition-colors leading-none mb-1">
                    +7 (499) 348-97-77
                </a>
                <div className="flex gap-3">
                    <a href="mailto:account@smirnov.marketing" className="text-[11px] text-gray-500 hover:text-white transition-colors">account@smirnov.marketing</a>
                </div>
             </div>

             {/* Social Icons */}
             <div className="flex items-center gap-2 border-l border-white/10 pl-6 h-8">
                <SocialLink href="https://vk.com/mp_agency" icon={<VKIcon />} title="VK" />
                <SocialLink href="https://t.me/mpagencyru" icon={<Send size={14} />} title="Telegram" />
                <SocialLink href="https://wa.me/74993017140" icon={<MessageCircle size={14} />} title="WhatsApp" />
                <SocialLink href="#" icon={<span className="font-extrabold text-[8px]">MAX</span>} title="MAX" />
             </div>

             {/* CTA */}
             <button 
                onClick={handleOpenAudit}
                className="bg-[#D4AF37] hover:bg-white text-black px-5 py-2.5 rounded-lg text-xs font-bold transition-all uppercase tracking-wider transform hover:-translate-y-0.5 shadow-lg"
             >
                Обсудить проект
             </button>

          </div>

          {/* Mobile Toggle */}
          <div className="xl:hidden flex items-center relative z-50 gap-4">
             <a href="tel:+74993489777" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#D4AF37]">
                <Phone size={18} />
             </a>
            <button 
              className="text-white p-2 hover:text-[#D4AF37] transition-colors" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-[#09090b] z-40 xl:hidden flex flex-col pt-24 px-6 h-screen overflow-y-auto pb-20"
          >
             <div className="flex flex-col gap-2">
               {NAV_ITEMS.map((item) => (
                  <div key={item.label} className="border-b border-white/5 pb-2">
                    <div className="flex justify-between items-center">
                      <Link 
                        href={item.href}
                        className="text-lg font-bold text-white hover:text-[#D4AF37] py-4 block"
                        onClick={() => !item.children && setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <button 
                          onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                          className={`p-4 text-white/50 hover:text-white transition-transform duration-300 ${mobileExpanded === item.label ? 'rotate-180 text-[#D4AF37]' : ''}`}
                        >
                          <ChevronDown size={20} />
                        </button>
                      )}
                    </div>

                    <AnimatePresence>
                      {item.children && mobileExpanded === item.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-4 space-y-4 mb-4"
                        >
                           {item.children.map((child, cIdx) => (
                             <div key={cIdx}>
                                <div className={`${child.children ? 'text-[#D4AF37] text-sm font-bold mb-2' : 'hidden'}`}>
                                  {child.label}
                                </div>
                                {child.children ? (
                                  <ul className="space-y-3 border-l border-white/10 pl-4 mb-4">
                                    {child.children.map((sub, sIdx) => (
                                      <li key={sIdx}>
                                        <Link 
                                          href={sub.href}
                                          className="text-gray-400 text-sm block hover:text-white"
                                          onClick={() => setMobileMenuOpen(false)}
                                        >
                                          {sub.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                ) : (
                                   <Link 
                                      href={child.href}
                                      className="text-gray-300 text-sm block py-1 hover:text-white"
                                      onClick={() => setMobileMenuOpen(false)}
                                   >
                                      {child.label}
                                   </Link>
                                )}
                             </div>
                           ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
               ))}
               
               <div className="mt-8 space-y-6 bg-white/5 p-6 rounded-2xl border border-white/5">
                  <a href="tel:+74993489777" className="block text-2xl font-serif text-white text-center">+7 (499) 348-97-77</a>
                  
                  <div className="flex justify-center items-center gap-4">
                        <SocialLink href="https://vk.com/mp_agency" icon={<VKIcon />} />
                        <SocialLink href="https://t.me/mpagencyru" icon={<Send size={16} />} />
                        <SocialLink href="https://wa.me/74993017140" icon={<MessageCircle size={16} />} />
                        <SocialLink href="#" icon={<span className="font-extrabold text-[10px]">MAX</span>} />
                  </div>

                  <button 
                    onClick={handleOpenAudit}
                    className="w-full bg-[#D4AF37] text-black py-4 rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors shadow-lg"
                  >
                    Заказать звонок
                  </button>
               </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
