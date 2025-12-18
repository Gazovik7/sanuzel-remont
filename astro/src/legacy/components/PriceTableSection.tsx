import React from 'react';
import { ChevronDown, FileText } from 'lucide-react';
import { COMPANY_PHONE_TEL } from '../constants';
import type { PriceTableCategory, PriceTableConfig } from '../../data/services';

export const PriceTableSection = ({
  onShowPriceList,
  content,
  categories,
}: {
  onShowPriceList?: () => void;
  content: PriceTableConfig;
  categories: PriceTableCategory[];
}) => {
  if (onShowPriceList) {
    return (
      <div className="mt-12">
        <button
          onClick={onShowPriceList}
          className="w-full text-left group flex items-center justify-between gap-4 select-none"
          type="button"
        >
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-blue-600" />
            <span className="text-lg font-bold font-heading text-slate-900 group-hover:text-blue-600 transition-colors">
              {content.ctaText}
            </span>
          </div>
          <div className="p-2 rounded-full bg-gray-50 group-hover:bg-blue-50 transition-colors shrink-0 border border-gray-100 group-hover:border-blue-100">
            <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-blue-600" />
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className="mt-12">
      <details className="price-details">
        <summary className="w-full text-left group flex items-center justify-between gap-4 select-none cursor-pointer">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-blue-600" />
            <span className="text-lg font-bold font-heading text-slate-900 group-hover:text-blue-600 transition-colors">
              {content.ctaText}
            </span>
          </div>
          <div className="p-2 rounded-full bg-gray-50 group-hover:bg-blue-50 transition-colors shrink-0 border border-gray-100 group-hover:border-blue-100">
            <ChevronDown className="price-chevron w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-transform duration-300" />
          </div>
        </summary>

        <div className="mt-8">
          <div className="space-y-8">
            {categories.map((category, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-slate-50 p-6 border-b border-gray-200 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-blue-600" />
                  <h2 className="text-xl md:text-2xl font-bold font-heading text-slate-900">{category.title}</h2>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50/50 text-xs font-bold text-gray-500 uppercase tracking-wide">
                      <tr>
                        <th className="p-4 pl-6 w-[60%]">Наименование работы</th>
                        <th className="p-4 text-center">Ед. изм.</th>
                        <th className="p-4 pr-6 text-right">Цена</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {category.items.map((item, i) => (
                        <tr key={i} className="hover:bg-blue-50/30 transition-colors group">
                          <td className="p-4 pl-6 text-slate-700 font-medium group-hover:text-slate-900">{item.name}</td>
                          <td className="p-4 text-center text-gray-500 whitespace-nowrap">{item.unit}</td>
                          <td className="p-4 pr-6 text-right font-bold text-slate-900 whitespace-nowrap">
                            {item.price.trim().toLowerCase().startsWith('от') ? item.price : `от ${item.price}`}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-8 bg-blue-600 rounded-3xl text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 font-heading">{content.notFoundTitle}</h3>
              <p className="text-blue-100 mb-6 max-w-xl mx-auto">{content.notFoundDescription}</p>
              <a
                href={`tel:${COMPANY_PHONE_TEL}`}
                className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-50 transition-all shadow-lg"
              >
                {content.callButtonText}
              </a>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 opacity-20 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>
          </div>
        </div>
      </details>
    </div>
  );
};
