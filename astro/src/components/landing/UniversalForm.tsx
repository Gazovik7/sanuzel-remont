
import React, { useState } from 'react';
import { User, Phone, MessageCircle, Send, ArrowRight, CheckCircle, Link, Briefcase, BarChart3, MessageSquare, HelpCircle, ChevronDown } from 'lucide-react';
import { BUDGET_OPTIONS } from './constants';

export type FormVariant = 'default' | 'embedded' | 'row';
export type MessengerType = 'whatsapp' | 'telegram' | 'phone' | 'max';

interface UniversalFormProps {
  source: string;
  title?: string;
  subtitle?: string;
  initialData?: {
    name?: string;
    phone?: string;
    url?: string;
    comment?: string;
  };
  variant?: FormVariant;
  showMessengerSelector?: boolean;
  showUrlField?: boolean;
  showBudgetField?: boolean;
  isDark?: boolean;
  extraFields?: Record<string, any>;
  onSuccess?: () => void;
  onNavigate?: (path: string) => void;
  buttonText?: string;
  buttonClassName?: string;
  inputClassName?: string;
  iconClassName?: string;
  className?: string;
  bottomText?: React.ReactNode;
}

function getCookie(name: string) {
  if (typeof document === 'undefined') return '';
  const match = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/[$()*+.?[\\\\]^{|}]/g, '\\$&')}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : '';
}

function getUtmParams() {
    if (typeof window === 'undefined') return {};
    const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
    const params = new URLSearchParams(window.location.search);
    const result: Record<string, string> = {};
    keys.forEach(k => {
        const v = params.get(k);
        if (v) result[k] = v;
    });
    if (Object.keys(result).length === 0) {
        try {
            const stored = localStorage.getItem('lead:utm');
            if (stored) return JSON.parse(stored);
        } catch {}
    } else {
        try {
             localStorage.setItem('lead:utm', JSON.stringify(result));
        } catch {}
    }
    return result;
}

const UniversalForm: React.FC<UniversalFormProps> = ({
  source,
  title,
  subtitle,
  initialData,
  variant = 'default',
  showMessengerSelector = true,
  showUrlField = true,
  showBudgetField = true,
  isDark = false,
  extraFields = {},
  onSuccess,
  onNavigate,
  buttonText = 'Отправить заявку',
  buttonClassName,
  inputClassName,
  iconClassName,
  className = '',
  bottomText,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [messenger, setMessenger] = useState<MessengerType>('whatsapp');
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    phone: initialData?.phone || '',
    url: initialData?.url || '',
    budget: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isUrlLocked = !!initialData?.url;

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;
    if (!input) {
        setFormData(prev => ({ ...prev, phone: '' }));
        return;
    }
    let numbers = input.replace(/\D/g, '');
    if (['7', '8', '9'].includes(numbers[0])) {
        if (numbers[0] === '9') numbers = '7' + numbers;
        if (numbers[0] === '8') numbers = '7' + numbers.slice(1);
    } else {
        numbers = '7' + numbers;
    }
    numbers = numbers.substring(0, 11);
    let formatted = '';
    if (numbers.length > 0) formatted += '+7';
    if (numbers.length > 1) formatted += ' (' + numbers.substring(1, 4);
    if (numbers.length >= 5) formatted += ') ' + numbers.substring(4, 7);
    if (numbers.length >= 8) formatted += '-' + numbers.substring(7, 9);
    if (numbers.length >= 10) formatted += '-' + numbers.substring(9, 11);

    setFormData(prev => ({ ...prev, phone: formatted }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const utm = getUtmParams();
    const ym_uid = getCookie('_ym_uid');
    const plainPhone = formData.phone.replace(/\D/g, '');

    const body = new URLSearchParams();
    body.set('phone', plainPhone);
    if (formData.name) body.set('name', formData.name);
    if (ym_uid) body.set('ym_client_id', ym_uid);
    
    // Build complex message
    const messageLines = [
        `Источник: ${source}`,
        `Мессенджер: ${messenger}`,
        formData.url ? `Сайт: ${formData.url}` : '',
        formData.budget ? `Бюджет: ${formData.budget}` : '',
        `Страница: ${window.location.href}`,
        extraFields && Object.keys(extraFields).length ? `Доп. данные: ${JSON.stringify(extraFields)}` : ''
    ].filter(Boolean);

    Object.entries(utm).forEach(([k, v]) => {
        if (typeof v === 'string') {
             body.set(k, v);
             messageLines.push(`${k}: ${v}`);
        }
    });

    body.set('message', messageLines.join('\n'));
    body.set('repair_type', 'SEO'); // Default type
    body.set('reply_to', messenger);

    try {
        const response = await fetch('/lead.php', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
            body: body.toString(),
        });

        if (response.ok) {
            if (onNavigate) {
                onNavigate('thank-you'); // Handle internal navigation if prop provided
                // But typically for Astro we redirect:
                window.location.href = '/spasibo/';
            } else {
                window.location.href = '/spasibo/';
            }
            if (onSuccess) onSuccess();
        } else {
            console.error('Submission failed');
            alert('Ошибка отправки. Пожалуйста, попробуйте еще раз.');
        }
    } catch (err) {
        console.error(err);
        alert('Ошибка сети. Пожалуйста, проверьте соединение.');
    } finally {
        setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`flex flex-col items-center justify-center text-center animate-fade-in h-full min-h-[300px] ${className}`}>
        <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-xl animate-bounce-slow ${isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600 shadow-green-500/20'}`}>
          <CheckCircle size={40} />
        </div>
        <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Заявка принята!</h3>
      </div>
    );
  }

  const defaultInputBgClass = isDark ? 'bg-white/5 border-white/10 focus:bg-white/10 focus:border-white/30 text-white placeholder:text-gray-500' : 'bg-gray-50 border-gray-200 focus:bg-white focus:border-primary text-gray-900 placeholder:text-gray-400';
  const computedInputBgClass = inputClassName || defaultInputBgClass;

  const defaultIconColorClass = isDark ? 'text-gray-500 group-focus-within:text-white' : 'text-gray-400 group-focus-within:text-primary';
  const computedIconColorClass = iconClassName || defaultIconColorClass;
  const labelColorClass = isDark ? 'text-gray-400' : 'text-gray-500';
  
  const getMessengerClass = (m: MessengerType) => {
    if (messenger === m) {
      if (m === 'whatsapp') return isDark ? 'bg-green-900/40 border-green-500 text-green-400 ring-1 ring-green-500' : 'bg-green-50 border-green-500 text-green-700 ring-1 ring-green-500';
      if (m === 'telegram') return isDark ? 'bg-blue-900/40 border-blue-500 text-blue-400 ring-1 ring-blue-500' : 'bg-blue-50 border-blue-500 text-blue-700 ring-1 ring-blue-500';
      if (m === 'max') return isDark ? 'bg-pink-900/40 border-pink-500 text-pink-400 ring-1 ring-pink-500' : 'bg-pink-50 border-pink-500 text-pink-700 ring-1 ring-pink-500';
      return isDark ? 'bg-white border-white text-gray-900 ring-1 ring-white' : 'bg-gray-900 border-gray-900 text-white ring-1 ring-gray-900';
    } else {
      return isDark ? 'border-white/10 text-gray-400 hover:bg-white/5 hover:text-white hover:border-white/30' : 'border-gray-200 text-gray-500 hover:bg-gray-50';
    }
  };

  const getSubmitBtnClass = () => {
    if (buttonClassName) return buttonClassName;
    if (variant === 'embedded') {
        return isDark 
            ? 'bg-white text-gray-900 hover:bg-gray-200' 
            : 'bg-gray-900 hover:bg-black hover:shadow-gray-900/20 text-white';
    }
    return 'bg-gradient-to-r from-primary to-secondary shadow-primary/20 hover:shadow-primary/40 text-white';
  };

  const BudgetTooltip = () => (
    <div className="absolute right-9 top-1/2 -translate-y-1/2 z-20 group/tooltip">
        <HelpCircle size={16} className={`${isDark ? 'text-gray-600 hover:text-[#D4AF37]' : 'text-gray-300 hover:text-gray-500'} cursor-help transition-colors`} />
        <div className="absolute bottom-full right-0 mb-3 w-64 bg-gray-900 text-white text-xs p-3 rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none z-50 font-medium normal-case shadow-xl border border-gray-700">
            Укажите текущие среднемесячные инвестиции во весь маркетинг, а не только бюджет на продвижение сайта.
            <div className="absolute top-full right-1 -mt-1 mr-1 border-4 border-transparent border-t-gray-900"></div>
        </div>
    </div>
  );

  if (variant === 'row') {
    const defaultRowInputClass = isDark 
        ? "w-full pl-10 pr-10 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 focus:outline-none transition-all text-base font-medium placeholder:text-white/30"
        : "w-full pl-10 pr-10 py-3 rounded-xl border-2 border-gray-100 bg-white text-base focus:border-red-500 focus:ring-4 focus:ring-red-500/10 focus:outline-none transition-all font-medium placeholder:text-gray-400 focus:shadow-lg";
    
    const rowInputClass = inputClassName || defaultRowInputClass;
    const defaultRowBtnClass = isDark
        ? "bg-[#D4AF37] hover:bg-[#b5952f] text-black shadow-[#D4AF37]/20"
        : "bg-red-600 hover:bg-red-700 text-white shadow-red-600/30 hover:shadow-red-600/40";
    const rowBtnClass = buttonClassName || defaultRowBtnClass;
    const defaultRowIconClass = isDark
        ? "text-white/40 group-focus-within:text-[#D4AF37]"
        : "text-gray-400 group-focus-within:text-red-500";
    const rowIconClass = iconClassName || defaultRowIconClass;

    const messengerBtnClass = (m: MessengerType) => {
        const isActive = messenger === m;
        if (isDark) {
            return isActive 
                ? 'bg-white/10 text-[#D4AF37] border-[#D4AF37]' 
                : 'text-gray-400 border-transparent hover:text-white hover:bg-white/5';
        }
        return isActive 
            ? 'bg-red-50 text-red-600 border-red-200' 
            : 'text-gray-500 border-transparent hover:bg-gray-100';
    };

    return (
      <form onSubmit={handleSubmit} className={`flex flex-col gap-4 relative z-10 ${className}`}>
        {showMessengerSelector && (
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <span className={`text-xs font-bold uppercase tracking-wider whitespace-nowrap ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Где ответить:</span>
                <div className="flex flex-wrap gap-2">
                    {(['whatsapp', 'telegram', 'phone', 'max'] as const).map((m) => (
                        <button
                            key={m}
                            type="button"
                            onClick={() => setMessenger(m)}
                            className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition-all flex items-center gap-1.5 ${messengerBtnClass(m)}`}
                        >
                            {m === 'whatsapp' && <MessageCircle size={14} />}
                            {m === 'telegram' && <Send size={14} />}
                            {m === 'phone' && <Phone size={14} />}
                            {m === 'max' && <MessageSquare size={14} />}
                            <span className="capitalize">{m === 'phone' ? 'Звонок' : m === 'max' ? 'MAX' : m}</span>
                        </button>
                    ))}
                </div>
            </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:items-stretch gap-3">
            <div className="relative group flex-1">
                <User className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${rowIconClass}`} size={18} />
                <input 
                    type="text" 
                    name="name"
                    autoComplete="name"
                    placeholder="Ваше имя" 
                    className={rowInputClass}
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
            </div>
            <div className="relative group flex-1">
                <Phone className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${rowIconClass}`} size={18} />
                <input 
                    type="tel" 
                    name="phone"
                    autoComplete="tel"
                    placeholder="+7 (___) ___-__-__" 
                    className={rowInputClass}
                    required
                    value={formData.phone}
                    onChange={handlePhoneInput}
                    maxLength={18}
                />
            </div>
            {showUrlField && (
                <div className="relative group flex-1">
                    <Link className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${rowIconClass}`} size={18} />
                    <input 
                        type="url" 
                        name="url"
                        placeholder="Ваш сайт" 
                        className={rowInputClass}
                        value={formData.url}
                        onChange={(e) => setFormData({...formData, url: e.target.value})}
                    />
                </div>
            )}
            {showBudgetField && (
                <div className="relative group flex-1">
                    <BarChart3 className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${rowIconClass}`} size={18} />
                    <select
                        className={`${rowInputClass} appearance-none cursor-pointer ${formData.budget ? '' : 'text-opacity-60'}`}
                        value={formData.budget}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    >
                        <option value="" disabled>Бюджет на маркетинг</option>
                        {BUDGET_OPTIONS.map((opt) => (
                            <option key={opt.value} value={opt.value} className="text-gray-900">
                                {opt.label}
                            </option>
                        ))}
                    </select>
                    <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none transition-colors ${rowIconClass}`} size={16} />
                </div>
            )}
            <button 
                type="submit"
                disabled={isSubmitting}
                className={`md:col-span-2 lg:flex-1 px-6 py-3 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-0.5 text-base flex items-center justify-center gap-2 group disabled:opacity-70 whitespace-nowrap ${rowBtnClass}`}
            >
                {isSubmitting ? '...' : buttonText}
                {!isSubmitting && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
            </button>
        </div>
        
        {bottomText && (
            <div className={`text-center text-[11px] font-medium opacity-70 ${isDark ? 'text-white' : 'text-gray-600'}`}>
                {bottomText}
            </div>
        )}
      </form>
    );
  }

  return (
    <div className={`${className}`}>
      {(title || subtitle) && (
        <div className="mb-8 text-center">
           {title && <h2 className={`text-2xl md:text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h2>}
           {subtitle && <p className={isDark ? 'text-gray-400' : 'text-gray-500'}>{subtitle}</p>}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {showMessengerSelector && (
          <div>
            <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${labelColorClass}`}>Где ответить?</label>
            <div className="grid grid-cols-4 gap-2">
              {(['whatsapp', 'telegram', 'phone', 'max'] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMessenger(m)}
                  className={`py-2.5 rounded-xl border flex items-center justify-center gap-1.5 text-sm font-bold transition-all ${getMessengerClass(m)}`}
                >
                  {m === 'whatsapp' && <MessageCircle size={16} />}
                  {m === 'telegram' && <Send size={16} />}
                  {m === 'phone' && <Phone size={16} />}
                  {m === 'max' && <MessageSquare size={16} />}
                  <span className="capitalize hidden sm:inline">{m === 'phone' ? 'Звонок' : m === 'max' ? 'MAX' : m}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-3">
          <div className="relative group">
            <User className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${computedIconColorClass}`} size={18} />
            <input 
              type="text" 
              name="name"
              autoComplete="name"
              placeholder="Ваше имя"
              required
              className={`w-full pl-10 pr-4 py-3.5 rounded-xl border focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium ${computedInputBgClass}`}
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>
          
          <div className="relative group">
            <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${computedIconColorClass}`} size={18} />
            <input 
              type="tel" 
              name="phone"
              autoComplete="tel"
              placeholder="+7 (999) 000-00-00"
              required
              className={`w-full pl-10 pr-4 py-3.5 rounded-xl border focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium ${computedInputBgClass}`}
              value={formData.phone}
              onChange={handlePhoneInput}
              maxLength={18}
            />
          </div>

          <>
            {isUrlLocked ? (
                <div className={`p-3 rounded-xl border flex items-start gap-2 animate-fade-in ${isDark ? 'bg-blue-900/30 border-blue-500/30 text-blue-200' : 'bg-blue-50 border-blue-100 text-blue-800'}`}>
                    <Briefcase className="shrink-0 mt-0.5" size={14} />
                    <div className="overflow-hidden">
                        <div className="font-bold mb-0.5">Магазин для аудита:</div> 
                        <div className={`truncate ${isDark ? 'text-blue-300' : 'text-blue-600/80'}`}>{formData.url}</div>
                    </div>
                </div>
            ) : showUrlField ? (
                <div className="relative group">
                    <Link className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${computedIconColorClass}`} size={18} />
                    <input 
                        type="url" 
                        name="url"
                        placeholder="Ссылка на магазин (если есть)" 
                        className={`w-full pl-10 pr-4 py-3.5 rounded-xl border focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium ${computedInputBgClass}`}
                        value={formData.url}
                        onChange={e => setFormData({...formData, url: e.target.value})}
                    />
                </div>
            ) : null}

            {showBudgetField && (
                <div className="relative group">
                <BarChart3 className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${computedIconColorClass}`} size={18} />
                <select
                    className={`w-full pl-10 pr-10 py-3.5 rounded-xl border focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium appearance-none cursor-pointer ${computedInputBgClass} ${formData.budget ? (isDark ? 'text-white' : 'text-gray-900') : (isDark ? 'text-gray-500' : 'text-gray-400')}`}
                    value={formData.budget}
                    onChange={e => setFormData({...formData, budget: e.target.value})}
                >
                    <option value="" disabled>Текущий бюджет на маркетинг</option>
                    {BUDGET_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value} className="text-gray-900">
                            {opt.label}
                        </option>
                    ))}
                </select>
                <ChevronDown className={`absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none transition-colors ${computedIconColorClass}`} size={16} />
                
                <BudgetTooltip />
                </div>
            )}
          </>

        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`w-full py-4 rounded-xl font-bold text-lg shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 hover:-translate-y-0.5 group ${getSubmitBtnClass()}`}
        >
          {isSubmitting ? 'Отправка...' : (
              <>
                {buttonText} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </>
          )}
        </button>
        
        <p className={`text-center text-[10px] px-4 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
          Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
        </p>
      </form>
    </div>
  );
};

export default UniversalForm;
