import {
  ARTICLE_INSERTS,
  DEFAULT_SOURCES_AND_STANDARDS,
  renderCalculatorCta,
  renderCallout,
  renderSourcesAndStandards,
  type CalloutVariant,
} from './inserts';

function parseAttributes(raw: string): Record<string, string> {
  const attrs: Record<string, string> = {};
  const input = raw.trim();
  if (!input) return attrs;

  const re = /(\w+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s]+))/g;
  let match: RegExpExecArray | null = null;
  while ((match = re.exec(input))) {
    const key = match[1];
    const value = match[2] ?? match[3] ?? match[4] ?? '';
    attrs[key] = value;
  }
  return attrs;
}

export function renderArticleHtmlWithInserts(contentHtml: string): string {
  let rendered = contentHtml;
  let hasCta = false;
  let hasSourcesAndStandards = false;

  const escapeHtml = (value: string): string =>
    value
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');

  const parseItemsText = (raw: string): string[] =>
    raw
      .split(/\r?\n|\s*\|\|\s*|\s*\|\s*/g)
      .map((part) => part.trim())
      .filter(Boolean);

  const renderSourcesAndStandardsRaw = (title: string, itemsHtml: string): string => `
<div class="not-prose mt-12 p-8 bg-gray-50 rounded-3xl border border-gray-100 font-sans">
  <h4 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6 flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle-2 w-4 h-4">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <path d="m9 11 3 3L22 4"></path>
    </svg>
    ${escapeHtml(title)}
  </h4>
  <ul class="space-y-4">
    ${itemsHtml}
  </ul>
</div>
<p></p>
`.trim();

  rendered = rendered.replace(/\[!INSERT([^\]]*)\]/g, (_full, rawAttrs: string) => {
    const attrs = parseAttributes(rawAttrs);
    const key = attrs.key;

    // Обработка специфической вставки warningBitumenMastic с возможностью передачи параметров
    if (key === 'warningBitumenMastic') {
      const title = attrs.title || 'Осторожно!';
      const bodyHtml = attrs.body || attrs.bodyHtml || 'Никогда не используйте битумную мастику в жилых помещениях. Она токсична и имеет стойкий специфический запах, который невозможно вывести годами.';
      return renderCallout({ variant: 'warning', title, bodyHtml });
    }

    // Обработка специфической вставки engineerTipDefault с возможностью передачи параметров
    if (key === 'engineerTipDefault') {
      const title = attrs.title || 'Совет главного инженера';
      const bodyHtml = attrs.body || attrs.bodyHtml || 'Мы всегда используем ленту <span class="font-semibold text-blue-900 bg-blue-100/50 px-1 rounded">Кнауф Флэхендихтбанд</span> для углов. Без неё даже самая дорогая мастика со временем треснет в стыке &quot;пол-стена&quot; из-за усадки дома.';
      return renderCallout({ variant: 'tip', title, bodyHtml });
    }

    // Обработка специфической вставки sourcesAndStandardsDefault с возможностью передачи параметров
    if (key === 'sourcesAndStandardsDefault') {
      hasSourcesAndStandards = true;
      const title = attrs.title || DEFAULT_SOURCES_AND_STANDARDS.title;
      const rawItems = attrs.itemsHtml || attrs.items || attrs.bodyHtml || attrs.body || '';

      if (rawItems && rawItems.includes('<li')) {
        return renderSourcesAndStandardsRaw(title, rawItems);
      }

      const items = rawItems ? parseItemsText(rawItems) : DEFAULT_SOURCES_AND_STANDARDS.items;
      return renderSourcesAndStandards({ title, items });
    }

    if (!key || !(key in ARTICLE_INSERTS)) return '';
    if (key === 'calculatorCtaDefault') hasCta = true;
    return ARTICLE_INSERTS[key as keyof typeof ARTICLE_INSERTS];
  });

  rendered = rendered.replace(/\[!CTA_CALCULATOR([^\]]*)\]/g, (_full, rawAttrs: string) => {
    const attrs = parseAttributes(rawAttrs);
    hasCta = true;
    return renderCalculatorCta({
      title: attrs.title,
      description: attrs.description,
      buttonText: attrs.buttonText,
    });
  });

  rendered = rendered.replace(/\[!CALLOUT([^\]]*)\]([\s\S]*?)\[\/!CALLOUT\]/g, (_full, rawAttrs: string, body: string) => {
    const attrs = parseAttributes(rawAttrs);
    const variant = (attrs.variant || 'tip') as CalloutVariant;
    const title = attrs.title || '';
    return renderCallout({ variant, title, bodyHtml: body.trim() });
  });

  let disableCta = false;
  if (rendered.includes('[!CTA_OFF]')) {
    rendered = rendered.replaceAll('[!CTA_OFF]', '');
    disableCta = true;
  }

  let disableSources = false;
  if (rendered.includes('[!SOURCES_OFF]')) {
    rendered = rendered.replaceAll('[!SOURCES_OFF]', '');
    disableSources = true;
  }

  if (!disableCta && !hasCta) {
    // Backward-compatible CTA injection after the 2nd paragraph (if possible).
    const paragraphs = rendered.split('</p>');
    if (paragraphs.length > 2) {
      // This injected fragment intentionally closes/reopens <p> to keep HTML valid after join().
      const injected = `</p>\n${renderCalculatorCta()}\n<p>`;
      paragraphs.splice(2, 0, injected);
      rendered = paragraphs.join('</p>');
    } else {
      rendered = `${rendered}\n${renderCalculatorCta()}`;
    }
  }

  if (!disableSources && !hasSourcesAndStandards) {
    rendered = `${rendered}\n${renderSourcesAndStandards()}`;
  }

  return rendered;
}

