import React, { useEffect, useState } from 'react';
import { X, Sparkles } from 'lucide-react';

export default function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if already shown in this session
    const sessionShown = sessionStorage.getItem('exit-intent-shown');
    if (sessionShown) {
      setHasShown(true);
      return;
    }

    let lastY = 0;
    let isMouseOutside = false;

    const handleMouseMove = (e: MouseEvent) => {
      lastY = e.clientY;
      isMouseOutside = false;
    };

    const handleMouseLeave = (e: MouseEvent) => {
      // Detect if mouse is moving to top of viewport (likely to close tab/window)
      if (e.clientY <= 0 && !hasShown && !isOpen) {
        isMouseOutside = true;

        // Add small delay to avoid false positives
        setTimeout(() => {
          if (isMouseOutside && !hasShown) {
            setIsOpen(true);
            setHasShown(true);
            sessionStorage.setItem('exit-intent-shown', 'true');
          }
        }, 100);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown, isOpen]);

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-4 animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-3xl p-8 max-w-lg w-full relative shadow-2xl animate-in zoom-in-95 duration-300 border border-white/20">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
          type="button"
          aria-label="Закрыть"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 ring-8 ring-blue-50/50">
            <Sparkles className="w-10 h-10 text-white" />
          </div>

          <h3 className="text-3xl font-bold font-heading mb-3 text-slate-900">
            Подождите!
          </h3>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Получите <span className="font-bold text-blue-600">бесплатный дизайн-проект</span> и{' '}
            <span className="font-bold text-blue-600">скидку 10%</span> на ремонт ванной комнаты
          </p>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 mb-6 border border-blue-100">
            <ul className="text-left space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-lg">✓</span>
                <span>Профессиональный 3D-дизайн вашей ванной</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-lg">✓</span>
                <span>Смета с точными расчётами стоимости</span>
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

          <form
            className="space-y-4"
            data-lead-form="exit-intent"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              Получить дизайн-проект и скидку
            </button>

            <p className="text-center text-xs text-gray-400 leading-tight">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
