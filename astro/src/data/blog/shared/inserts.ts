function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export type ArticleInsertKey = 'calculatorCtaDefault' | 'engineerTipDefault' | 'sourcesAndStandardsDefault';

export type SourcesAndStandardsConfig = {
  title: string;
  items: string[];
};

export const DEFAULT_SOURCES_AND_STANDARDS: SourcesAndStandardsConfig = {
  title: 'Источники и стандарты',
  items: [
    'СП 29.13330.2011 "Полы. Актуализированная редакция СНиП 2.03.13-88"',
    'Техническая карта Knauf: "Гидроизоляция во влажных помещениях"',
  ],
};

export function renderSourcesAndStandards(config: Partial<SourcesAndStandardsConfig> = {}): string {
  const merged: SourcesAndStandardsConfig = { ...DEFAULT_SOURCES_AND_STANDARDS, ...config };
  const title = escapeHtml(merged.title);
  const items = merged.items
    .map((item) => escapeHtml(item))
    .map(
      (item) => `
<li class="flex items-start gap-3 text-slate-600 group hover:text-blue-600 transition-colors cursor-default">
  <div class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0"></div>
  <span class="border-b border-gray-200 pb-0.5 group-hover:border-blue-300">${item}</span>
</li>`.trim(),
    )
    .join('\n');

  return `
<div class="not-prose mt-12 p-8 bg-gray-50 rounded-3xl border border-gray-100 font-sans">
  <h4 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6 flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle-2 w-4 h-4">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <path d="m9 11 3 3L22 4"></path>
    </svg>
    ${title}
  </h4>
  <ul class="space-y-4">
    ${items}
  </ul>
</div>
<p></p>
`.trim();
}

export type CalculatorCtaConfig = {
  title: string;
  description: string;
  buttonText: string;
};

export const DEFAULT_CALCULATOR_CTA: CalculatorCtaConfig = {
  title: 'Хотите узнать стоимость ремонта?',
  description: 'Ответьте на 5 вопросов и получите 3 варианта сметы (Эконом, Стандарт, Премиум) специально под ваши размеры.',
  buttonText: 'Рассчитать смету',
};

export function renderCalculatorCta(config: Partial<CalculatorCtaConfig> = {}): string {
  const merged: CalculatorCtaConfig = { ...DEFAULT_CALCULATOR_CTA, ...config };

  return `
<div data-lead-open="callback" class="not-prose my-10 relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 p-8 shadow-lg group cursor-pointer js-article-calculator-btn">
  <div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
  <div class="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
    <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-md shrink-0 group-hover:scale-110 transition-transform duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calculator">
        <rect width="16" height="20" x="4" y="2" rx="2"></rect>
        <line x1="8" x2="16" y1="6" y2="6"></line>
        <line x1="16" x2="16" y1="14" y2="18"></line>
        <path d="M16 10h.01"></path>
        <path d="M12 10h.01"></path>
        <path d="M8 10h.01"></path>
        <path d="M12 14h.01"></path>
        <path d="M8 14h.01"></path>
        <path d="M12 18h.01"></path>
        <path d="M8 18h.01"></path>
      </svg>
    </div>
    <div class="flex-1">
      <h4 class="text-xl font-heading font-bold text-slate-900 mb-2">${escapeHtml(merged.title)}</h4>
      <p class="text-slate-600 font-sans text-sm">${escapeHtml(merged.description)}</p>
    </div>
    <button data-lead-open="callback" class="bg-blue-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-all transform group-hover:-translate-y-1">${escapeHtml(
      merged.buttonText,
    )}</button>
  </div>
</div>
<p></p>
`.trim();
}

export type CalloutVariant = 'tip' | 'warning';

export type CalloutConfig = {
  variant: CalloutVariant;
  title: string;
  bodyHtml: string;
};

export function renderCallout(config: CalloutConfig): string {
  if (config.variant === 'tip') {
    return `
<div class="not-prose bg-blue-50 rounded-3xl p-6 md:p-8 my-10 border border-blue-100 shadow-sm relative overflow-hidden group">
  <div class="absolute top-0 right-0 w-32 h-32 bg-blue-200/40 rounded-full blur-3xl -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700"></div>
  <div class="relative z-10">
    <h4 class="flex items-center gap-3 font-bold font-heading text-xl text-slate-900 mb-4">
      <div class="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check w-6 h-6">
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
      </div>
      ${escapeHtml(config.title)}
    </h4>
    <p class="text-slate-700 font-sans leading-relaxed text-lg">${config.bodyHtml}</p>
  </div>
</div>
`.trim();
  }

  return `
<div class="not-prose bg-red-50 rounded-3xl p-6 md:p-8 my-10 border border-red-100 shadow-sm relative overflow-hidden group">
  <div class="absolute top-0 right-0 w-32 h-32 bg-red-200/40 rounded-full blur-3xl -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700"></div>
  <div class="relative z-10 flex flex-col md:flex-row gap-6 items-start">
    <div class="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center shrink-0 text-white shadow-lg shadow-red-600/20">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alert-circle w-7 h-7">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" x2="12" y1="8" y2="12"></line>
        <line x1="12" x2="12.01" y1="16" y2="16"></line>
      </svg>
    </div>
    <div>
      <h4 class="font-bold font-heading text-xl text-slate-900 mb-2">${escapeHtml(config.title)}</h4>
      <p class="text-slate-700 font-sans leading-relaxed text-lg">${config.bodyHtml}</p>
    </div>
  </div>
</div>
`.trim();
}

export const ARTICLE_INSERTS: Record<ArticleInsertKey, string> = {
  calculatorCtaDefault: renderCalculatorCta(),
  engineerTipDefault: renderCallout({
    variant: 'tip',
    title: 'Совет главного инженера',
    bodyHtml:
      'Мы всегда используем ленту <span class="font-semibold text-blue-900 bg-blue-100/50 px-1 rounded">Кнауф Флэхендихтбанд</span> для углов. Без неё даже самая дорогая мастика со временем треснет в стыке &quot;пол-стена&quot; из-за усадки дома.',
  }),
  sourcesAndStandardsDefault: renderSourcesAndStandards(),
};

