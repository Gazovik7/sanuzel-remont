
import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

const Link = ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => (
  <a href={href} className={className}>{children}</a>
);

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  theme?: 'light' | 'dark'; // 'light' for dark backgrounds (white text), 'dark' for light backgrounds (dark text)
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, theme = 'dark', className = '' }) => {
  // Generate JSON-LD Schema
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Smirnov Marketing",
        "item": "https://mpagency.ru/"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": `https://mpagency.ru${item.href}`
      }))
    ]
  };

  const textColor = theme === 'light' ? 'text-white/70 hover:text-white' : 'text-gray-500 hover:text-primary';
  const activeColor = theme === 'light' ? 'text-white' : 'text-gray-900';
  const separatorColor = theme === 'light' ? 'text-white/40' : 'text-gray-300';

  return (
    <nav aria-label="Breadcrumb" className={`mb-6 relative z-20 ${className}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ol className="flex items-center flex-wrap gap-2 text-xs md:text-sm font-medium">
        <li>
          <Link 
            href="/" 
            className={`flex items-center gap-1 transition-colors ${textColor}`}
          >
            <Home size={14} className="mb-0.5" />
            <span className="hidden sm:inline">Smirnov Marketing</span>
          </Link>
        </li>
        
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              <ChevronRight size={14} className={separatorColor} />
              {isLast ? (
                <span className={`${activeColor} truncate max-w-[200px] md:max-w-none`} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link 
                  href={item.href} 
                  className={`transition-colors ${textColor}`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
