import React, { useState } from 'react';
import ConsentCheckboxes from '../ConsentCheckboxes';

const REPAIR_OPTIONS = ['Ванная комната', 'Ванная + туалет', 'Совмещённый санузел', 'Туалет'] as const;

export default function LegacyContactsCtaForm() {
  const [consented, setConsented] = useState(false);
  return (
    <form
      className="glass rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl flex flex-col gap-6 text-left border border-white/10"
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data: Record<string, unknown> = {};
        const fd = new FormData(form);
        for (const [key, value] of fd.entries()) {
          if (key in data) continue;
          data[key] = typeof value === 'string' ? value : value.name;
        }
        const ok = (await window.lead?.capture({ source: 'contacts-cta', data })) ?? false;
        if (ok) {
          form.reset();
        }
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold text-gray-800 uppercase tracking-wide mb-2 ml-1">
            Как вас зовут?
          </label>
          <input
            name="name"
            type="text"
            placeholder="Иван"
            className="w-full p-4 rounded-xl border-0 bg-white/80 text-slate-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all shadow-inner"
            required
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-800 uppercase tracking-wide mb-2 ml-1">
            Номер телефона
          </label>
          <input
            name="phone"
            type="tel"
            placeholder="+7 (999) 000-00-00"
            inputMode="tel"
            autoComplete="tel"
            maxLength={18}
            data-phone-mask="ru"
            className="w-full p-4 rounded-xl border-0 bg-white/80 text-slate-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all shadow-inner"
            required
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-800 uppercase tracking-wide mb-2 ml-1">
            Тип ремонта
          </label>
          <select
            name="repairType"
            className="w-full p-4 rounded-xl border-0 bg-white/80 text-slate-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all shadow-inner"
          >
            {REPAIR_OPTIONS.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-gray-800 uppercase tracking-wide mb-2 ml-1">
          Как удобнее ответить?
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { id: 'call', label: 'Звонок' },
            { id: 'whatsapp', label: 'WhatsApp' },
            { id: 'telegram', label: 'Telegram' },
            { id: 'max', label: 'MAX' },
          ].map((m) => (
            <label key={m.id} className="cursor-pointer select-none">
              <input
                type="radio"
                name="replyTo"
                value={m.id}
                defaultChecked={m.id === 'call'}
                className="sr-only peer"
              />
              <div className="py-3 rounded-xl border border-transparent bg-white/50 text-slate-700 font-bold text-sm hover:bg-white transition-all shadow-sm text-center peer-checked:bg-blue-600 peer-checked:text-white peer-checked:shadow-lg peer-checked:shadow-blue-600/20">
                {m.label}
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-2 pt-4 border-t border-gray-200/20 space-y-4">
        <ConsentCheckboxes onChange={setConsented} />
        <button
          type="submit"
          className={`w-full md:w-auto bg-blue-600 text-white font-bold py-5 px-8 rounded-xl transition-all shadow-xl shadow-blue-600/30 text-lg transform ${consented ? 'hover:bg-blue-500 hover:-translate-y-1' : 'opacity-40 cursor-not-allowed'}`}
        >
          Получить смету и дизайн-проект
        </button>
      </div>
    </form>
  );
}
