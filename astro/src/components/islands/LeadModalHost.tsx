import React, { useEffect, useMemo, useState } from 'react';
import { Check, X } from 'lucide-react';

type LeadModalType = 'callback' | 'success';

type LeadCapturePayload = {
  source: string;
  data: Record<string, unknown>;
  pageUrl: string;
  timestamp: string;
};

declare global {
  interface Window {
    lead?: {
      open: (type?: LeadModalType) => void;
      close: () => void;
      success: () => void;
      capture: (payload: Omit<LeadCapturePayload, 'pageUrl' | 'timestamp'>) => void;
    };
  }
}

function nowIso() {
  return new Date().toISOString();
}

function getPageUrl() {
  try {
    return window.location.href;
  } catch {
    return '';
  }
}

function normalizeFormData(form: HTMLFormElement) {
  const data: Record<string, unknown> = {};
  const formData = new FormData(form);
  for (const [key, value] of formData.entries()) {
    if (key in data) continue;
    data[key] = typeof value === 'string' ? value : value.name;
  }
  return data;
}

export default function LeadModalHost() {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<LeadModalType>('callback');
  const repairTypeOptions = ['Ремонт ванной комнаты', 'Ремонт + дизайн', 'Евроремонт', 'Черновой ремонт'];

  const api = useMemo(
    () => ({
      open: (nextType: LeadModalType = 'callback') => {
        setType(nextType);
        setIsOpen(true);
      },
      close: () => setIsOpen(false),
      success: () => {
        setType('success');
        setIsOpen(true);
      },
      capture: (payload: Omit<LeadCapturePayload, 'pageUrl' | 'timestamp'>) => {
        const full: LeadCapturePayload = {
          ...payload,
          pageUrl: getPageUrl(),
          timestamp: nowIso(),
        };

        try {
          localStorage.setItem('lead:last', JSON.stringify(full));
        } catch {
          // ignore
        }

        // eslint-disable-next-line no-console
        console.info('[lead] captured', full);
      },
    }),
    []
  );

  useEffect(() => {
    window.lead = api;
    return () => {
      if (window.lead === api) delete window.lead;
    };
  }, [api]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setIsOpen(false);
    };

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const trigger = target.closest<HTMLElement>('[data-lead-open]');
      if (!trigger) return;

      const openType = (trigger.getAttribute('data-lead-open') || 'callback') as LeadModalType;
      e.preventDefault();
      api.open(openType);
    };

    const onSubmit = (e: Event) => {
      const form = e.target as HTMLFormElement | null;
      if (!form || form.tagName !== 'FORM') return;
      if (!form.hasAttribute('data-lead-form')) return;

      e.preventDefault();

      const source = form.getAttribute('data-lead-form') || 'form';
      api.capture({ source, data: normalizeFormData(form) });
      api.success();

      try {
        form.reset();
      } catch {
        // ignore
      }
    };

    document.addEventListener('click', onClick);
    document.addEventListener('submit', onSubmit, true);
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('submit', onSubmit, true);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [api]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-4 animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl animate-in zoom-in-95 duration-300 border border-white/20">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
          type="button"
          aria-label="Закрыть"
        >
          <X className="w-6 h-6" />
        </button>

        {type === 'success' ? (
          <div className="text-center py-6">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 ring-8 ring-green-50/50">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold font-heading mb-3 text-slate-900">Заявка принята!</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Наш менеджер свяжется с вами выбранным способом в течение 15 минут.
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors"
              type="button"
            >
              Отлично
            </button>
          </div>
        ) : (
          <form
            className="space-y-6"
            data-lead-form="modal"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold font-heading text-slate-900 mb-2">Обсудить проект</h3>
              <p className="text-sm text-gray-500">Оставьте контакты для связи с инженером.</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wide ml-1">Имя</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Алексей"
                  required
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-medium text-slate-900"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wide ml-1">Телефон</label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+7 (999) 000-00-00"
                  inputMode="tel"
                  autoComplete="tel"
                  maxLength={18}
                  pattern="\\+7 \\(\\d{3}\\) \\d{3}-\\d{2}-\\d{2}"
                  data-phone-mask="ru"
                  required
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-medium text-slate-900"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wide ml-1">Тип ремонта</label>
                <select
                  name="repairType"
                  defaultValue={repairTypeOptions[0]}
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-medium text-slate-900"
                >
                  {repairTypeOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wide ml-1">Как ответить?</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'call', label: 'Звонок' },
                    { id: 'whatsapp', label: 'WhatsApp' },
                    { id: 'telegram', label: 'Telegram' },
                    { id: 'max', label: 'MAX' },
                  ].map((m) => (
                    <label
                      key={m.id}
                      className="cursor-pointer select-none"
                    >
                      <input
                        type="radio"
                        name="replyTo"
                        value={m.id}
                        defaultChecked={m.id === 'call'}
                        className="sr-only peer"
                      />
                      <div className="py-3 px-2 border border-gray-200 rounded-xl text-xs font-bold text-gray-500 hover:border-gray-400 hover:bg-gray-50 transition-all uppercase text-center peer-checked:bg-blue-600 peer-checked:text-white peer-checked:border-blue-600">
                        {m.label}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              Отправить заявку
            </button>
            <p className="text-center text-xs text-gray-400 leading-tight">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
