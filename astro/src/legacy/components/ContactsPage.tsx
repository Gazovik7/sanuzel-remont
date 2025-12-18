import React from 'react';
import { Phone, MapPin, Clock, Mail, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';
import { COMPANY_PHONE, COMPANY_PHONE_TEL, COMPANY_ADDRESS, COMPANY_EMAIL } from '../constants';

const REPAIR_OPTIONS = ['Ремонт ванной комнаты', 'Ремонт + дизайн', 'Евроремонт', 'Черновой ремонт'] as const;

export const ContactsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 animate-in fade-in duration-500 pb-12">
      <div className="container mx-auto px-4 pt-6">
        <Breadcrumbs items={[{ label: 'Контакты', isActive: true }]} />

        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-4">Наши контакты</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 max-w-6xl mx-auto">
          {/* Info Side */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900">Всегда на связи</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Мы на связи каждый день. Оставьте заявку или позвоните — уточним детали и подскажем по срокам и стоимости.
            </p>

            <div className="grid grid-cols-1 gap-4">
              <a
                href={`tel:${COMPANY_PHONE_TEL}`}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex items-center gap-6 hover:shadow-md transition-shadow group"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-1">Телефон</div>
                  <div className="text-2xl font-bold text-slate-900">{COMPANY_PHONE}</div>
                </div>
              </a>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex items-center gap-6">
                <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center text-gray-600">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-1">Адрес</div>
                  <div className="text-lg font-bold text-slate-900 leading-tight">{COMPANY_ADDRESS}</div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-wide">График работы</span>
                  </div>
                  <div className="font-bold text-slate-900 text-lg">09:00 — 21:00</div>
                  <div className="text-sm text-gray-500">без выходных</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-wide">Email</span>
                  </div>
                  <a
                    href={`mailto:${COMPANY_EMAIL}`}
                    className="font-bold text-slate-900 text-lg hover:text-blue-600 truncate transition-colors"
                  >
                    {COMPANY_EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                  <ArrowRight className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-slate-900">Оставьте заявку</h3>
                  <p className="text-sm text-gray-500">Ответим в течение 15 минут</p>
                </div>
              </div>

              <form className="space-y-6" data-lead-form="contacts-page">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wide ml-1">Имя</label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Алексей"
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all font-medium text-slate-900"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wide ml-1">Телефон</label>
                    <input
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      maxLength={18}
                      pattern="\\+7 \\(\\d{3}\\) \\d{3}-\\d{2}-\\d{2}"
                      data-phone-mask="ru"
                      required
                      placeholder="+7 (999) 000-00-00"
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all font-medium text-slate-900"
                    />
                  </div>
                  <div className="space-y-1 md:col-span-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wide ml-1">Тип ремонта</label>
                    <select
                      name="repairType"
                      defaultValue={REPAIR_OPTIONS[0]}
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all font-medium text-slate-900"
                    >
                      {REPAIR_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1 md:col-span-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wide ml-1">Как ответить?</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
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
                          <div className="py-3 px-2 border border-gray-200 rounded-xl text-xs font-bold text-gray-500 hover:border-gray-400 hover:bg-gray-50 transition-all uppercase text-center peer-checked:bg-blue-600 peer-checked:text-white peer-checked:border-blue-600">
                            {m.label}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-1 md:col-span-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wide ml-1">
                      Сообщение (необязательно)
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Опишите задачу: площадь, сроки, пожелания"
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all font-medium text-slate-900 resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 bg-slate-900 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-slate-800 transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2"
                >
                  Отправить заявку <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-200 max-w-6xl mx-auto map-tabs">
          <div className="flex flex-wrap">
            <input id="map-yandex" type="radio" name="map" className="sr-only" defaultChecked />
            <label htmlFor="map-yandex" className="map-tab flex-1 py-4 font-bold text-sm uppercase tracking-wider">
              Яндекс карты
            </label>
            <input id="map-google" type="radio" name="map" className="sr-only" />
            <label htmlFor="map-google" className="map-tab flex-1 py-4 font-bold text-sm uppercase tracking-wider">
              Google Maps
            </label>
            <div className="w-full border-b border-gray-100"></div>

            <div className="h-[500px] w-full bg-gray-100 relative map-panels">
            <div className="h-full w-full map-panel map-panel-yandex">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.568461%2C55.743208&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjcxNDUzORJG0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINJ00L7Qu9GM0YjQvtC5INCh0LDQstCy0LjQvdGB0LrQuNC5INC_0LXRgNC10YPQu9C-0LosIDk!3D%3D&z=17"
                width="100%"
                height="100%"
                allowFullScreen={true}
                className="border-0"
              ></iframe>
            </div>
            <div className="h-full w-full map-panel map-panel-google">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.877372793766!2d37.56846067664366!3d55.74320797308064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a555909235d%3A0x62391030222718e2!2z0JHQvtC70YzRiNC-0Lkg0KHQsNCy0LLQuNC90YHQutC40Lkg0L_QtdGALiwgOSwg0YHRgtGA0L7QtdC90LjQtSAxLCDQnNC-0YHQutCy0LAsIDExOTQzNQ!5e0!3m2!1sru!2sru!4v1710000000000!5m2!1sru!2sru"
                width="100%"
                height="100%"
                allowFullScreen={true}
                loading="lazy"
                className="border-0"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
