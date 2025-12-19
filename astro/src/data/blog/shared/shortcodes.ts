import { ARTICLE_INSERTS, renderCalculatorCta, renderCallout, type CalloutVariant } from './inserts';

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

  rendered = rendered.replace(/\[!INSERT([^\]]*)\]/g, (_full, rawAttrs: string) => {
    const attrs = parseAttributes(rawAttrs);
    const key = attrs.key;
    
    // Обработка специфической вставки warningBitumenMastic с возможностью передачи параметров
    if (key === 'warningBitumenMastic') {
      const title = attrs.title || 'Осторожно!';
      const bodyHtml = attrs.body || attrs.bodyHtml || 'Никогда не используйте битумную мастику в жилых помещениях. Она токсична и имеет стойкий специфический запах, который невозможно вывести годами.';
      return renderCallout({ variant: 'warning', title, bodyHtml });
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

  if (rendered.includes('[!CTA_OFF]')) {
    rendered = rendered.replaceAll('[!CTA_OFF]', '');
    return rendered;
  }

  if (hasCta) return rendered;

  // Backward-compatible CTA injection after the 2nd paragraph (if possible).
  const paragraphs = rendered.split('</p>');
  if (paragraphs.length > 2) {
    // This injected fragment intentionally closes/reopens <p> to keep HTML valid after join().
    const injected = `</p>\n${renderCalculatorCta()}\n<p>`;
    paragraphs.splice(2, 0, injected);
    return paragraphs.join('</p>');
  }

  return `${rendered}\n${renderCalculatorCta()}`;
}

