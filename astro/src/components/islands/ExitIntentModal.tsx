import React, { useEffect, useRef, useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import ConsentCheckboxes from './ConsentCheckboxes';

export default function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [isCompactMode, setIsCompactMode] = useState(false);
  const startTsRef = useRef<number>(Date.now());
  const maxScrollRef = useRef(0);
  const scrollTriggerRef = useRef(0);
  const hasShownRef = useRef(false);
  const isOpenRef = useRef(false);

  useEffect(() => {
    hasShownRef.current = hasShown;
  }, [hasShown]);

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    // Check if already shown in this session
    const sessionShown = sessionStorage.getItem('exit-intent-shown');
    if (sessionShown) {
      setHasShown(true);
      return;
    }

    const isThankYou = window.location.pathname.startsWith('/spasibo');
    if (isThankYou) {
      setHasShown(true);
      return;
    }

    const leadSubmitted = localStorage.getItem('lead:submitted');
    if (leadSubmitted) {
      setHasShown(true);
      return;
    }

    const minEngagementMs = 8000;
    const minScrollPx = 200;
    const scrollTrigger = 0.5 + Math.random() * 0.2;
    scrollTriggerRef.current = scrollTrigger;

    let isMouseOutside = false;

    const hasEngagement = () => {
      const elapsed = Date.now() - startTsRef.current;
      return elapsed >= minEngagementMs || maxScrollRef.current >= minScrollPx;
    };

    const markShown = () => {
      setIsOpen(true);
      setHasShown(true);
      sessionStorage.setItem('exit-intent-shown', 'true');
    };

    const tryShow = () => {
      if (hasShownRef.current || isOpenRef.current) return;
      if (!hasEngagement()) return;
      markShown();
    };

    const handleMouseMove = (e: MouseEvent) => {
      void e;
      isMouseOutside = false;
    };

    const handleMouseLeave = (e: MouseEvent) => {
      // Detect if mouse is moving to top of viewport (likely to close tab/window)
      if (e.clientY <= 0) {
        isMouseOutside = true;

        // Add small delay to avoid false positives
        setTimeout(() => {
          if (!isMouseOutside) return;
          tryShow();
        }, 100);
      }
    };

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > maxScrollRef.current) maxScrollRef.current = scrollY;

      const doc = document.documentElement;
      const maxScroll = Math.max(doc.scrollHeight - window.innerHeight, 1);
      const progress = scrollY / maxScroll;
      if (progress >= scrollTriggerRef.current) {
        tryShow();
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState !== 'hidden') return;
      tryShow();
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('scroll', handleScroll, { passive: true });

    const timerDelay = 20000 + Math.random() * 20000;
    const timerId = window.setTimeout(() => {
      tryShow();
    }, timerDelay);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('scroll', handleScroll);
      window.clearTimeout(timerId);
    };
  }, []);

  useEffect(() => {
    const updateSizeMode = () => {
      const prefersTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
      const isSmallScreen = window.innerWidth <= 768;
      setIsCompactMode(prefersTouch || isSmallScreen);
    };

    updateSizeMode();
    window.addEventListener('resize', updateSizeMode);
    return () => window.removeEventListener('resize', updateSizeMode);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex ${isCompactMode ? 'items-end pb-6' : 'items-center'} justify-center bg-slate-900/80 backdrop-blur-md ${isCompactMode ? 'px-4' : 'p-4'} animate-in fade-in duration-300`}
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        setIsOpen(false);
      }}
    >
      <div
        className={`bg-white relative shadow-2xl animate-in zoom-in-95 duration-300 border border-white/20 ${isCompactMode ? 'w-full max-w-sm rounded-t-3xl px-6 pt-6 pb-5 sm:rounded-3xl sm:px-8 sm:pb-8' : 'rounded-3xl p-8 max-w-lg w-full'}`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 transition-colors"
          type="button"
          aria-label="Закрыть"
        >
          <X className="w-6 h-6" />
        </button>

        <div className={`text-center ${isCompactMode ? 'space-y-3' : ''}`}>
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 ring-8 ring-blue-50/50">
            <Sparkles className="w-10 h-10 text-white" />
          </div>

          <h3 className="text-3xl font-bold font-heading mb-1 text-slate-900">
            Подождите!
          </h3>
          <p className={`text-gray-600 leading-relaxed ${isCompactMode ? 'text-base font-medium mb-3' : 'text-lg mb-6'}`}>
            Получите <span className="font-bold text-blue-600">бесплатный дизайн-проект</span> и{' '}
            <span className="font-bold text-blue-600">скидку 10%</span>
          </p>

          {!isCompactMode && (
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 mb-6 border border-blue-100">
              <ul className="text-left space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-lg">✓</span>
                  <span>Профессиональный 3D-дизайн вашей ванной</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-lg">✓</span>
                  <span>Смета с точными расчетами стоимости</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-lg">✓</span>
                  <span>Консультация инженера по телефону</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-lg">✓</span>
                  <span>Гарантия 2 года на все работы</span>
                </li>
              </ul>
            </div>
          )}

          <form
            className={`${isCompactMode ? 'space-y-3' : 'space-y-4'}`}
            data-lead-form="exit-intent"
          >
            <div className={`grid grid-cols-1 ${isCompactMode ? '' : 'sm:grid-cols-2'} gap-3`}>
              <input
                name="name"
                type="text"
                placeholder="Ваше имя"
                required
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-medium text-slate-900"
              />
              <input
                name="phone"
                type="tel"
                placeholder="+7 (999) 000-00-00"
                inputMode="tel"
                autoComplete="tel"
                maxLength={18}
                data-phone-mask="ru"
                required
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-medium text-slate-900"
              />
            </div>

            <ConsentCheckboxes />

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              Получить дизайн-проект и скидку
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
