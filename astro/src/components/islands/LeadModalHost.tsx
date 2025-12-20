import React, { useEffect, useMemo, useState } from 'react';
import { X } from 'lucide-react';

type LeadModalType = 'callback';

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
      capture: (payload: Omit<LeadCapturePayload, 'pageUrl' | 'timestamp'>) => Promise<boolean>;
    };
  }
}

function nowIso() {
  return new Date().toISOString();
}

const METRIKA_COUNTER_ID = 87695701;

function getCookieValue(name: string) {
  if (typeof document === 'undefined') return '';
  const match = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/[$()*+.?[\\\]^{|}]/g, '\\$&')}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : '';
}

function getLocalStorageValue(key: string) {
  try {
    return window.localStorage.getItem(key) || '';
  } catch {
    return '';
  }
}

function waitForCookieValue(name: string, timeoutMs = 1500, intervalMs = 100) {
  if (typeof window === 'undefined') return Promise.resolve('');
  return new Promise<string>((resolve) => {
    const start = Date.now();
    const tick = () => {
      const value = getCookieValue(name) || getLocalStorageValue(name);
      if (value) {
        resolve(value);
        return;
      }
      if (Date.now() - start >= timeoutMs) {
        resolve('');
        return;
      }
      window.setTimeout(tick, intervalMs);
    };
    tick();
  });
}

function firstNonEmpty(promises: Promise<string>[], timeoutMs = 1500) {
  if (typeof window === 'undefined') return Promise.resolve('');
  return new Promise<string>((resolve) => {
    let settled = false;
    const timer = window.setTimeout(() => {
      if (!settled) resolve('');
      settled = true;
    }, timeoutMs);

    const onValue = (value: string) => {
      if (settled || !value) return;
      settled = true;
      window.clearTimeout(timer);
      resolve(value);
    };

    promises.forEach((promise) => {
      promise.then(onValue).catch(() => {
        // ignore
      });
    });
  });
}

function withTimeout<T>(promise: Promise<T>, timeoutMs: number, fallback: T) {
  let timeoutId: number | undefined;
  const timeoutPromise = new Promise<T>((resolve) => {
    timeoutId = window.setTimeout(() => resolve(fallback), timeoutMs);
  });
  return Promise.race([promise, timeoutPromise]).finally(() => {
    if (timeoutId !== undefined) window.clearTimeout(timeoutId);
  });
}

async function getYandexIds() {
  const cookieClientId = getCookieValue('_ym_uid');
  const storageClientId = typeof window === 'undefined' ? '' : getLocalStorageValue('_ym_uid');
  const cachedClientId = cookieClientId || storageClientId || '';
  const fallback = { clientId: cachedClientId, userId: '', cookieClientId, storageClientId };

  if (typeof window === 'undefined') return fallback;

  const counter = (window as Record<string, unknown>)[`yaCounter${METRIKA_COUNTER_ID}`] as
    | { getClientID?: () => string }
    | undefined;
  const counterClientId = counter?.getClientID ? counter.getClientID() : '';

  if (cachedClientId || counterClientId) {
    const userIdPromise = new Promise<string>((resolve) => {
      if (typeof window.ym !== 'function') return resolve('');
      try {
        window.ym(METRIKA_COUNTER_ID, 'getUserID', (id: string) => resolve(id || ''));
      } catch {
        resolve('');
      }
    });
    const userId = await withTimeout(userIdPromise, 200, '');
    return { clientId: cachedClientId || counterClientId || '', userId, cookieClientId, storageClientId };
  }

  const clientIdPromise = new Promise<string>((resolve) => {
    if (typeof window.ym !== 'function') return resolve('');
    try {
      window.ym(METRIKA_COUNTER_ID, 'getClientID', (id: string) => resolve(id || ''));
    } catch {
      resolve('');
    }
  });

  const userIdPromise = new Promise<string>((resolve) => {
    if (typeof window.ym !== 'function') return resolve('');
    try {
      window.ym(METRIKA_COUNTER_ID, 'getUserID', (id: string) => resolve(id || ''));
    } catch {
      resolve('');
    }
  });

  const cookiePromise = waitForCookieValue('_ym_uid', 2000, 100);
  const clientId = await firstNonEmpty([cookiePromise, withTimeout(clientIdPromise, 2000, '')], 2000);
  const userId = await withTimeout(userIdPromise, 800, '');

  return { clientId: clientId || counterClientId || cachedClientId || '', userId, cookieClientId, storageClientId };
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

function normalizePhone(raw: unknown) {
  const digits = String(raw ?? '').replace(/\D+/g, '');
  if (!digits) return '';
  if (digits.startsWith('8')) return `7${digits.slice(1)}`;
  if (digits.startsWith('7')) return digits;
  if (digits.length === 10) return `7${digits}`;
  return digits;
}

function buildMessage(payload: LeadCapturePayload) {
  const lines: string[] = [];
  const data = payload.data || {};

  const name = data.name ? String(data.name) : '';
  const repairType = data.repairType ? String(data.repairType) : '';
  const type = data.type ? String(data.type) : '';
  const replyToRaw = data.replyTo ? String(data.replyTo) : '';
  const methodRaw = data.method ? String(data.method) : '';
  const message = data.message ? String(data.message) : '';
  const ymClientId = data.ymClientId ? String(data.ymClientId) : '';
  const ymUserId = data.ymUserId ? String(data.ymUserId) : '';

  // Преобразование значений способа связи в читаемый вид
  const formatReplyTo = (value: string) => {
    const map: Record<string, string> = {
      call: 'Звонок',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      max: 'MAX',
    };
    return map[value.toLowerCase()] || value;
  };

  const replyTo = replyToRaw ? formatReplyTo(replyToRaw) : '';
  const method = methodRaw ? formatReplyTo(methodRaw) : '';

  lines.push(`Источник: ${payload.source}`);
  if (name) lines.push(`Имя: ${name}`);
  if (repairType) lines.push(`Тип ремонта: ${repairType}`);
  if (type && type !== repairType) lines.push(`Тип ремонта (форма): ${type}`);
  if (replyTo) lines.push(`Способ связи: ${replyTo}`);
  if (method && method !== replyTo) lines.push(`Способ связи (форма): ${method}`);
  if (message) lines.push(`Сообщение: ${message}`);
  if (ymClientId) lines.push(`YM ClientID: ${ymClientId}`);
  if (ymUserId) lines.push(`YM UserID: ${ymUserId}`);
  if (payload.pageUrl) lines.push(`Страница: ${payload.pageUrl}`);
  if (payload.timestamp) lines.push(`Время: ${payload.timestamp}`);

  return lines.join('\n');
}

async function sendLead(payload: LeadCapturePayload) {
  const phone = normalizePhone(payload.data.phone);
  if (!phone) throw new Error('Телефон не указан');

  const body = new URLSearchParams();
  body.set('phone', phone);
  const message = buildMessage(payload);
  if (message) body.set('message', message);

  const response = await fetch('/lead.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: body.toString(),
  });

  const text = await response.text();
  if (response.ok) return;

  let details = text;
  try {
    const json = JSON.parse(text);
    details = json?.phone?.[0] || json?.non_field_errors?.[0] || json?.error || text;
  } catch {
    // ignore parse errors
  }

  throw new Error(details || 'Ошибка отправки заявки');
}

export default function LeadModalHost() {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<LeadModalType>('callback');
  const repairTypeOptions = ['Ванная комната', 'Ванная + туалет', 'Совмещённый санузел', 'Туалет'];

  const api = useMemo(
    () => ({
      open: (nextType: LeadModalType = 'callback') => {
        setType(nextType);
        setIsOpen(true);
      },
      close: () => setIsOpen(false),
      success: () => {
        // Redirect to thank you page instead of showing modal
        window.location.href = '/spasibo/';
      },
      capture: async (payload: Omit<LeadCapturePayload, 'pageUrl' | 'timestamp'>) => {
        const yandexIds = await getYandexIds();
        const enrichedData = {
          ...payload.data,
          ymClientId: yandexIds.clientId || undefined,
          ymUserId: yandexIds.userId || undefined,
        };
        const full: LeadCapturePayload = {
          ...payload,
          pageUrl: getPageUrl(),
          timestamp: nowIso(),
          data: enrichedData,
        };

        try {
          localStorage.setItem('lead:last', JSON.stringify(full));
        } catch {
          // ignore
        }

        // eslint-disable-next-line no-console
        console.info('[lead] captured', full);

        try {
          await sendLead(full);
          api.success();
          return true;
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('[lead] send failed', error);
          window.alert('Не удалось отправить заявку. Попробуйте еще раз.');
          return false;
        }
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

    const onSubmit = async (e: Event) => {
      const form = e.target as HTMLFormElement | null;
      if (!form || form.tagName !== 'FORM') return;
      if (!form.hasAttribute('data-lead-form')) return;

      e.preventDefault();

      const source = form.getAttribute('data-lead-form') || 'form';
      const ok = await api.capture({ source, data: normalizeFormData(form) });

      try {
        if (ok) form.reset();
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
      </div>
    </div>
  );
}
