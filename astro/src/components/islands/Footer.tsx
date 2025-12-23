
'use client';

import React from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { LOGO_URL } from '../landing/constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#09090b] text-white pt-32 pb-12 border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
            
            {/* Top Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
                
                {/* Brand Column */}
                <div className="md:col-span-4 space-y-8">
                    <img src={LOGO_URL} alt="Smirnov.Marketing" className="h-10 brightness-0 invert opacity-90" />
                    <p className="text-gray-400 font-light leading-relaxed max-w-sm">
                        Бутиковое агентство цифрового маркетинга. <br/>
                        Мы превращаем поисковый трафик в прибыль вашего бизнеса.
                    </p>
                    <div className="flex items-center gap-4 opacity-60 hover:opacity-100 transition-opacity pt-4">
                        <img src="/img/arda.webp" alt="ARDA" className="h-8 grayscale brightness-0 invert" />
                        <span className="text-[10px] uppercase tracking-wider font-bold leading-tight">Член ассоциации <br/> Digital-агентств России</span>
                    </div>
                </div>

                {/* Navigation Columns */}
                <div className="md:col-span-2">
                    <h4 className="font-bold text-[#D4AF37] mb-8 uppercase tracking-widest text-xs">Навигация</h4>
                    <ul className="space-y-4 text-sm text-gray-400 font-medium">
                        <li><a href="#services" className="hover:text-white transition-colors">Услуги</a></li>
                        <li><a href="#cases" className="hover:text-white transition-colors">Кейсы</a></li>
                        <li><a href="#pricing" className="hover:text-white transition-colors">Стоимость</a></li>
                        <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                    </ul>
                </div>

                <div className="md:col-span-3">
                    <h4 className="font-bold text-[#D4AF37] mb-8 uppercase tracking-widest text-xs">Услуги</h4>
                    <ul className="space-y-4 text-sm text-gray-400 font-medium">
                        <li><a href="#" className="hover:text-white transition-colors">SEO Продвижение</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Контекстная реклама</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Разработка сайтов</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">SERM (Репутация)</a></li>
                    </ul>
                </div>

                {/* Contacts Column */}
                <div className="md:col-span-3">
                    <h4 className="font-bold text-[#D4AF37] mb-8 uppercase tracking-widest text-xs">Контакты</h4>
                    <div className="space-y-6">
                       <a href="tel:+74993489777" className="block text-2xl font-serif text-white hover:text-[#D4AF37] transition-colors">+7 (499) 348-97-77</a>
                       <a href="mailto:account@smirnov.marketing" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm">
                           account@smirnov.marketing
                       </a>
                       <div className="text-gray-500 text-sm leading-relaxed">
                           г. Москва, ул. Автозаводская 23к2,<br/> БЦ "Парк Легенд"
                       </div>
                       <div className="flex gap-4 pt-2">
                            <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black transition-all duration-300">
                                <span className="font-bold text-[10px]">VK</span>
                            </a>
                            <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black transition-all duration-300">
                                <Send size={14} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-start md:items-center text-[10px] text-gray-600 gap-6 uppercase tracking-wider font-bold">
                <div className="flex flex-col gap-2">
                    <span>© 2016 - 2025 Smirnov.Marketing. Все права защищены.</span>
                    <span className="normal-case font-medium opacity-50 max-w-2xl">
                        Информация на сайте носит ознакомительный характер и не является публичной офертой, определяемой положениями статьи 437 Гражданского кодекса РФ
                    </span>
                </div>
                <div className="flex gap-8 shrink-0">
                    <a href="#" className="hover:text-gray-400 transition-colors">Политика конфиденциальности</a>
                    <a href="#" className="hover:text-gray-400 transition-colors">Оферта</a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
