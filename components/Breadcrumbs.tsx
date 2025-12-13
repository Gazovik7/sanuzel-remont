
import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (mode: 'landing' | 'prices' | 'contacts' | 'budget' | 'premium') => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4 mb-4">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500" itemScope itemType="https://schema.org/BreadcrumbList">
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="flex items-center gap-2">
           <a 
             href="/" 
             onClick={(e) => { e.preventDefault(); onNavigate('landing'); }}
             className="hover:text-blue-600 transition-colors flex items-center gap-1"
             itemProp="item"
           >
             <Home className="w-4 h-4" />
             <span itemProp="name">Главная</span>
           </a>
           <meta itemProp="position" content="1" />
           <ChevronRight className="w-4 h-4 text-gray-400" />
        </li>
        {items.map((item, index) => (
          <li key={index} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="flex items-center gap-2">
            {item.href && !item.isActive ? (
                <>
                  <a 
                    href={item.href}
                    onClick={(e) => { 
                      e.preventDefault(); 
                      // Simple mapping for demo purposes based on href usually being simple
                      if (item.href === '/?page=prices') onNavigate('prices');
                      else if (item.href === '/?page=contacts') onNavigate('contacts');
                      else onNavigate('landing');
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
            <meta itemProp="item" content={item.href ? item.href : window.location.href} />
            <meta itemProp="position" content={(index + 2).toString()} />
          </li>
        ))}
      </ol>
    </nav>
  );
};
