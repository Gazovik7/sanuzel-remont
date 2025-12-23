
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link as LinkIcon, ArrowRight, Trophy, Star, Award, CheckCircle2 } from 'lucide-react';
import Breadcrumbs, { BreadcrumbItem } from './Breadcrumbs';
import { useModal } from './Modal';

export interface HeroColors {
  bg: string; // Tailwind bg class
  text: string; // Tailwind text class for body
  headingGradient: string; // Tailwind class for text-transparent bg-clip-text
  spotlight: string; // RGB string "r, g, b"
  blob1: string; // Tailwind bg class
  blob2: string; // Tailwind bg class
  formBg: string; // Tailwind bg class for form container
  inputIcon: string; // Tailwind text class
  buttonGradient: string; // e.g. "from-purple-600 to-pink-600"
}

interface ServiceHeroProps {
  breadcrumbs: BreadcrumbItem[];
  badge: {
    icon: React.ElementType;
    text: string;
    className: string; // Combined tailwind classes for the badge container
  };
  title: React.ReactNode;
  description: string;
  visual: React.ReactNode; // Right side dashboard/graphic
  bottomContent?: React.ReactNode; // Ticker or extra content
  form: {
    placeholder: string;
    buttonText?: string;
    source: string;
    modalTitle: string;
    modalSubtitle: string;
  };
  colors: HeroColors;
  isLight?: boolean; // Toggle for text colors (dark/light mode)
  paddingTop?: string; // Custom top padding for alignment
}

const ServiceHero: React.FC<ServiceHeroProps> = ({
  breadcrumbs,
  badge,
  title,
  description,
  visual,
  bottomContent,
  form,
  colors,
  isLight = false,
  paddingTop = 'pt-36 md:pt-56', // Default increased to 56 (Audit baseline)
}) => {
  const { openModal } = useModal();
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [storeUrl, setStoreUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mouse Move Effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!storeUrl) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      openModal({
        title: form.modalTitle,
        subtitle: form.modalSubtitle,
        url: storeUrl,
        source: form.source
      });
    }, 600);
  };

  return (
    <section 
      ref={sectionRef}
      className={`relative overflow-hidden ${colors.bg} ${isLight ? 'text-gray-900' : 'text-white'} min-h-screen ${paddingTop} pb-20 flex flex-col`}
    >
       {/* Spotlight Effect (Dark Mode Only) */}
       {!isLight && (
         <div 
            className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-500"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(${colors.spotlight}, 0.3), transparent 40%)`
            }}
         />
       )}

       {/* Background Elements */}
       <div className={`absolute top-0 right-0 w-[800px] h-[800px] ${colors.blob1} rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/4`}></div>
       <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] ${colors.blob2} rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3`}></div>
       
       {/* Noise & Grid Overlay */}
       {!isLight ? (
         <>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
            <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
         </>
       ) : (
         <div className="absolute inset-0 bg-grid pointer-events-none opacity-60"></div>
       )}

       <div className="container mx-auto max-w-[1440px] px-4 relative z-10 flex-grow">
          
          <Breadcrumbs 
              items={breadcrumbs} 
              theme={isLight ? 'dark' : 'light'} 
              className="mb-8"
          />

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
             
             {/* Left Content */}
             <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
             >
                {/* Badge */}
                <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold shadow-lg animate-fade-in-up border ${badge.className}`}>
                   <badge.icon size={16} className="shrink-0" />
                   <span>{badge.text}</span>
                </div>
                
                {/* Title & Desc */}
                <div>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-6">
                      {title}
                  </h1>
                  <p className={`text-xl leading-relaxed max-w-2xl ${colors.text}`}>
                      {description}
                  </p>
                </div>
                
                {/* Input Form */}
                <div className="pt-2 max-w-2xl relative z-20">
                  <form onSubmit={handleUrlSubmit} className={`${colors.formBg} backdrop-blur-md p-2 rounded-2xl shadow-xl border border-white/10 flex flex-col sm:flex-row gap-2`}>
                      <div className="flex-1 relative flex items-center">
                        <LinkIcon className={`absolute left-4 ${colors.inputIcon}`} size={20} />
                        <input 
                            type="url" 
                            placeholder={form.placeholder}
                            className={`w-full pl-12 pr-4 py-3 rounded-xl bg-transparent focus:outline-none placeholder:text-opacity-60 font-medium ${isLight ? 'text-gray-900 placeholder:text-gray-400' : 'text-white placeholder:text-white/60'}`}
                            value={storeUrl}
                            onChange={(e) => setStoreUrl(e.target.value)}
                        />
                      </div>
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className={`relative overflow-hidden bg-gradient-to-r ${colors.buttonGradient} text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-70 group`}
                      >
                        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                        <span className="relative z-10 flex items-center gap-2">
                            {isSubmitting ? 'Загрузка...' : (
                            <>
                                {form.buttonText || 'Рассчитать бюджет'} <ArrowRight size={18} />
                            </>
                            )}
                        </span>
                      </button>
                  </form>
                  <div className={`flex items-center gap-4 mt-4 px-2 text-xs ${isLight ? 'text-gray-500' : 'text-white/50'}`}>
                      {isLight ? (
                         <>
                            <div className="flex items-center gap-1"><CheckCircle2 size={12} className="text-green-500"/> Работаем по договору</div>
                            <div className="flex items-center gap-1"><CheckCircle2 size={12} className="text-green-500"/> Команда экспертов</div>
                         </>
                      ) : (
                         <>
                            <div className="flex -space-x-2">
                                {['HAVIT', 'NUCEX', 'EXT'].map((text, i) => (
                                    <div key={i} className={`w-6 h-6 rounded-full border flex items-center justify-center text-[8px] font-bold overflow-hidden ${isLight ? 'bg-white border-gray-200 text-gray-700' : 'bg-white/10 border-white/20 text-white'}`}>
                                        {text[0]}
                                    </div>
                                ))}
                            </div>
                            <p>Нам доверяют 1000+ брендов</p>
                         </>
                      )}
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="pt-4 border-t border-white/10">
                  <div className={`flex flex-wrap items-center gap-6 text-sm font-medium ${isLight ? 'text-gray-500' : 'text-white/60'}`}>
                      <div className="flex items-center gap-2">
                          <Trophy className="text-yellow-400" size={18} /> <span>ТОП-1 Google</span>
                      </div>
                      <div className="flex items-center gap-2">
                          <Star className="text-orange-400" size={18} /> <span>Sostav.ru</span>
                      </div>
                      <div className="flex items-center gap-2">
                          <Award className="text-green-400" size={18} /> <span>Klerk.ru</span>
                      </div>
                  </div>
                </div>
             </motion.div>

             {/* Right Content (Visuals) */}
             <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative flex flex-col items-center justify-center hidden lg:flex"
             >
                {/* Background Circles */}
                <div className={`absolute w-[500px] h-[500px] border rounded-full opacity-50 animate-[spin_20s_linear_infinite] ${isLight ? 'border-primary/10' : 'border-white/10'}`}></div>
                <div className={`absolute w-[350px] h-[350px] border border-dashed rounded-full opacity-50 animate-[spin_15s_linear_infinite_reverse] ${isLight ? 'border-primary/20' : 'border-white/20'}`}></div>

                <div className="w-full max-w-[520px] flex flex-col gap-4 relative z-10">
                   {visual}
                </div>
             </motion.div>
          </div>
       </div>

       {bottomContent && bottomContent}
    </section>
  );
};

export default ServiceHero;
