
import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate?: (mode: any, params?: any) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : undefined;
  const canNavigate = typeof onNavigate === 'function' && typeof window !== 'undefined';
  const normalizedItems = items.filter((item) => item.href !== '/' && item.href !== '/index.html');
  return (
    <nav aria-label="Breadcrumb" className="py-4 mb-4">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500" itemScope itemType="https://schema.org/BreadcrumbList">
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="flex items-center gap-2">
         <a 
            href="/" 
             onClick={(e) => {
               if (!canNavigate) return;
               e.preventDefault();
               onNavigate('landing', { forceTop: true });
               window.scrollTo({ top: 0, behavior: 'auto' });
             }}
            className="hover:text-blue-600 transition-colors flex items-center gap-1"
            itemProp="item"
          >
             <Home className="w-4 h-4" />
             <span itemProp="name">Главная</span>
           </a>
           <meta itemProp="position" content="1" />
           <ChevronRight className="w-4 h-4 text-gray-400" />
        </li>
        {normalizedItems.map((item, index) => (
          <li key={index} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="flex items-center gap-2">
            {item.href && !item.isActive ? (
                <>
                  <a 
                    href={item.href}
                    onClick={(e) => { 
                      if (!canNavigate) return;
                      e.preventDefault();
                      if (item.href?.includes('praj')) onNavigate('prices', { forceTop: true });
                      else if (item.href?.includes('contact')) onNavigate('contacts', { forceTop: true });
                      else if (item.href?.includes('blog')) onNavigate('blog', { forceTop: true });
                      else if (item.href?.includes('about')) onNavigate('about', { forceTop: true });
                      else onNavigate('landing', { forceTop: true });
                      window.scrollTo({ top: 0, behavior: 'auto' });
                    }} 
                    className="hover:text-blue-600 transition-colors"
                    itemProp="item"
                  >
                    <span itemProp="name">{item.label}</span>
                  </a>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </>
            ) : (
                <span className="font-semibold text-slate-900" itemProp="name" aria-current="page">{item.label}</span>
            )}
            {(item.href || currentUrl) ? <meta itemProp="item" content={item.href ? item.href : currentUrl} /> : null}
            <meta itemProp="position" content={(index + 2).toString()} />
          </li>
        ))}
      </ol>
    </nav>
  );
};
