import { 
  renderCallout, 
  renderCalculatorCta, 
  ARTICLE_INSERTS,
  escapeHtml 
} from '../shared/inserts';
import type { 
  QuoteTemplateConfig, 
  ComparisonTemplateConfig, 
 SectionTemplateConfig, 
  GalleryTemplateConfig, 
  VideoTemplateConfig, 
  ChecklistTemplateConfig, 
  PriceTableTemplateConfig,
  CalloutTemplateConfig,
  CalculatorCtaTemplateConfig
} from './types';

// Рендеринг цитаты
export function renderQuote(config: QuoteTemplateConfig, bodyHtml: string): string {
  const styleClass = config.style === 'highlight' ? 'bg-yellow-50 border-l-4 border-yellow-400' : 'bg-gray-50';
  return `
<div class="not-prose my-8 p-6 rounded-xl ${styleClass}">
  <blockquote class="text-lg italic text-gray-700">
    ${bodyHtml}
  </blockquote>
  <div class="mt-4 text-right">
    <cite class="text-gray-600 font-medium">— ${escapeHtml(config.author)}</cite>
  </div>
</div>
`.trim();
}

// Рендеринг сравнительного блока
export function renderComparison(config: ComparisonTemplateConfig, bodyHtml: string): string {
  return `
<div class="not-prose my-10 rounded-2xl border-gray-200 overflow-hidden">
  <div class="bg-gray-100 px-6 py-4">
    <h4 class="font-bold font-heading text-lg text-gray-900">${escapeHtml(config.title)}</h4>
  </div>
  <div class="p-6">
    ${bodyHtml}
  </div>
</div>
`.trim();
}

// Рендеринг раздела статьи
export function renderSection(config: SectionTemplateConfig, bodyHtml: string): string {
  return `
<section class="not-prose my-12">
  <h3 class="font-heading text-2xl font-bold text-gray-900 border-b pb-3 mb-6">${escapeHtml(config.title)}</h3>
 <div class="prose prose-lg max-w-none">
    ${bodyHtml}
  </div>
</section>
`.trim();
}

// Рендеринг галереи
export function renderGallery(config: GalleryTemplateConfig, bodyHtml: string): string {
  return `
<div class="not-prose my-10">
  <h4 class="font-heading text-xl font-bold text-center mb-6">${escapeHtml(config.title)}</h4>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    ${bodyHtml}
  </div>
</div>
`.trim();
}

// Рендеринг видео
export function renderVideo(config: VideoTemplateConfig, _bodyHtml: string): string {
  return `
<div class="not-prose my-10 aspect-w-16 aspect-h-9">
  <iframe 
    class="w-full h-96 rounded-xl shadow-lg" 
    src="${escapeHtml(config.src)}" 
    frameborder="0" 
    allowfullscreen
    title="${escapeHtml(config.title)}"
  ></iframe>
</div>
`.trim();
}

// Рендеринг чек-листа
export function renderChecklist(config: ChecklistTemplateConfig, bodyHtml: string): string {
  return `
<div class="not-prose my-10 bg-blue-50 rounded-xl p-6">
  <h4 class="font-heading font-bold text-lg text-gray-900 mb-4">${escapeHtml(config.title || 'Чек-лист')}</h4>
  <div class="space-y-3">
    ${bodyHtml}
  </div>
</div>
`.trim();
}

// Рендеринг таблицы цен
export function renderPriceTable(config: PriceTableTemplateConfig, bodyHtml: string): string {
  return `
<div class="not-prose my-10 overflow-x-auto">
 <h4 class="font-heading font-bold text-xl text-center mb-6">${escapeHtml(config.title)}</h4>
  <table class="min-w-full bg-white rounded-lg overflow-hidden">
    <thead class="bg-gray-100">
      <tr>
        ${bodyHtml}
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
    </tbody>
  </table>
</div>
`.trim();
}

// Рендеринг кастомизированного callout
export function renderCalloutTemplate(config: CalloutTemplateConfig, bodyHtml: string): string {
  return renderCallout({
    variant: config.variant,
    title: config.title,
    bodyHtml: bodyHtml
 });
}

// Рендеринг кастомизированного CTA
export function renderCalculatorCtaTemplate(config: CalculatorCtaTemplateConfig): string {
  return renderCalculatorCta(config);
}

// Объект с функциями рендеринга шаблонов
export const TEMPLATE_RENDERERS: Record<string, Function> = {
  quote: renderQuote,
  comparison: renderComparison,
  section: renderSection,
  gallery: renderGallery,
  video: renderVideo,
  checklist: renderChecklist,
  priceTable: renderPriceTable,
  callout: renderCalloutTemplate,
  calculatorCta: renderCalculatorCtaTemplate
};