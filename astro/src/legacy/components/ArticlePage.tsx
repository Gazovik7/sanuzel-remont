
import React, { useEffect, useMemo } from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { Calendar, Clock, UserCheck, Shield, AlertCircle, ArrowRight, CheckCircle2, ShieldCheck, Calculator, MessageSquare } from 'lucide-react';
import { BLOG_POSTS } from '../blogData';
import { renderArticleHtmlWithInserts } from '../../data/blog/shared/shortcodes';

interface ArticlePageProps {
  id: string;
  onNavigate: (mode: any, params?: any) => void;
  onCalculate: () => void;
}

export const ArticlePage: React.FC<ArticlePageProps> = ({ id, onNavigate, onCalculate }) => {
  const post = BLOG_POSTS.find(p => p.id === id);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Блог Ремонт Санузлов`;
      window.scrollTo(0, 0);
    }
  }, [post]);

  // Handle clicks from injected HTML (In-Article CTA)
  useEffect(() => {
    const handleInArticleClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('.js-article-calculator-btn')) {
            e.preventDefault();
            onCalculate();
        }
    };
    
    const articleContainer = document.getElementById('article-content-container');
    if (articleContainer) {
        articleContainer.addEventListener('click', handleInArticleClick);
    }

    return () => {
        if (articleContainer) {
            articleContainer.removeEventListener('click', handleInArticleClick);
        }
    };
  }, [onCalculate]);

  const processedContent = useMemo(() => {
    if (!post) return '';

    // HTML string for the In-Article CTA
    const ctaBlock = `
      </p>
      <div data-lead-open="callback" class="not-prose my-10 relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 p-8 shadow-lg group cursor-pointer js-article-calculator-btn">
          <div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
          <div class="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-md shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calculator"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>
              </div>
              <div class="flex-1">
                  <h4 class="text-xl font-heading font-bold text-slate-900 mb-2">Хотите узнать стоимость ремонта?</h4>
                  <p class="text-slate-600 font-sans text-sm">
                      Ответьте на 5 вопросов и получите 3 варианта сметы (Эконом, Стандарт, Премиум) специально под ваши размеры.
                  </p>
              </div>
              <button data-lead-open="callback" class="bg-blue-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-all transform group-hover:-translate-y-1">
                  Рассчитать смету
              </button>
          </div>
      </div>
      <p>
    `;

    // Inject CTA after the 2nd paragraph
    const paragraphs = post.content.split('</p>');
    if (paragraphs.length > 2) {
        paragraphs.splice(2, 0, ctaBlock); 
        return renderArticleHtmlWithInserts(post.content);
    }
    return renderArticleHtmlWithInserts(post.content);
  }, [post]);

  if (!post) return <div className="p-20 text-center font-bold text-xl font-heading">Статья не найдена</div>;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": [post.image],
    "datePublished": "2024-01-10T08:00:00+08:00",
    "dateModified": "2024-03-15T09:20:00+08:00",
    "author": [{
        "@type": "Person",
        "name": post.author.name,
        "jobTitle": post.author.role
    }],
    "publisher": {
        "@type": "Organization",
        "name": "Ремонт Санузлов",
        "logo": {
            "@type": "ImageObject",
            "url": "/img/logo.png"
        }
    }
  };

  return (
    <div className="min-h-screen bg-white animate-in fade-in duration-500 pb-12 font-sans text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="container mx-auto px-4 pt-6 max-w-5xl">
        <Breadcrumbs
            items={[
                { label: 'Главная', href: '/' },
                { label: 'Блог', href: '/blog/' },
                { label: post.title, isActive: true }
            ]}
            onNavigate={onNavigate}
        />

        {/* Title Section */}
        <div className="max-w-4xl mx-auto mb-8">
            <h1 className="text-3xl md:text-5xl font-extrabold font-heading text-slate-900 mb-8 leading-tight">
                {post.title}
            </h1>
            
            {/* Author Block */}
            <div className="py-6 border-t border-b border-gray-100 mb-10 flex flex-col xl:flex-row xl:items-center justify-between gap-6">
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 md:gap-8">
                    {/* Author */}
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <img src={post.author.image} alt={post.author.name} className="w-14 h-14 rounded-full object-cover ring-2 ring-white shadow-md" />
                            <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-1 rounded-full ring-2 ring-white">
                                <Shield className="w-3 h-3 fill-current" />
                            </div>
                        </div>
                        <div>
                            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Автор статьи</div>
                            <div className="font-bold text-slate-900 text-lg leading-none mb-1">{post.author.name}</div>
                            <div className="text-xs text-gray-500 font-medium">{post.author.role}</div>
                        </div>
                    </div>

                    {post.reviewer && (
                        <>
                            <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
                            {/* Reviewer */}
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center text-green-600 border border-green-100 ring-2 ring-white shadow-sm">
                                    <UserCheck className="w-7 h-7" />
                                </div>
                                <div>
                                    <div className="text-[10px] text-green-600 font-bold uppercase tracking-widest mb-1 flex items-center gap-1">
                                        Проверено <CheckCircle2 className="w-3 h-3" />
                                    </div>
                                    <div className="font-bold text-slate-900 text-lg leading-none mb-1">{post.reviewer.name}</div>
                                    <div className="text-xs text-gray-500 font-medium">{post.reviewer.role}</div>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* Meta Data */}
                <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-xs font-bold text-gray-600 border border-gray-100">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        {post.date}
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-xs font-bold text-gray-600 border border-gray-100">
                        <Clock className="w-4 h-4 text-gray-400" />
                        {post.readTime}
                    </div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
            
            {/* Left: Article Content */}
            <div className="lg:col-span-8" id="article-content-container">
                {/* Fixed height container for main image to prevent vertical stretch */}
                <div className="rounded-3xl overflow-hidden mb-10 shadow-lg ring-1 ring-gray-900/5 h-[300px] md:h-[400px] lg:h-[480px] relative">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>

                {/* Typography Enforcement */}
                <article className="prose prose-lg prose-slate max-w-none 
                    font-sans
                    prose-headings:font-heading prose-headings:font-bold prose-headings:text-slate-900 prose-headings:mb-6 prose-headings:mt-10
                    prose-p:font-sans prose-p:text-slate-600 prose-p:leading-8 prose-p:mb-6
                    prose-li:font-sans prose-li:text-slate-600 prose-li:marker:text-blue-600 prose-li:my-2
                    prose-ul:list-disc prose-ul:pl-6 prose-ul:my-6
                    prose-strong:font-bold prose-strong:text-slate-900
                    prose-a:text-blue-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                    prose-img:rounded-3xl prose-img:shadow-md prose-img:my-10
                    prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:bg-blue-50/50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:font-medium prose-blockquote:text-slate-800">
                    
                    <p className="lead text-xl md:text-2xl text-slate-700 mb-10 font-heading font-medium leading-relaxed border-l-4 border-blue-600 pl-6">
                        {post.excerpt}
                    </p>
                    
                    {/* Dynamic Content with Injected CTA */}
                    <div dangerouslySetInnerHTML={{ __html: processedContent }} />

                    {/* Styled Widgets */}
                    {false && (
                        <>
                            <div className="not-prose bg-blue-50 rounded-3xl p-6 md:p-8 my-10 border border-blue-100 shadow-sm relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/40 rounded-full blur-3xl -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700"></div>
                                <div className="relative z-10">
                                    <h4 className="flex items-center gap-3 font-bold font-heading text-xl text-slate-900 mb-4">
                                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                                            <ShieldCheck className="w-6 h-6" />
                                        </div>
                                        Совет главного инженера
                                    </h4>
                                    <p className="text-slate-700 font-sans leading-relaxed text-lg">
                                        Мы всегда используем ленту <span className="font-semibold text-blue-900 bg-blue-100/50 px-1 rounded">Кнауф Флэхендихтбанд</span> для углов. Без неё даже самая дорогая мастика со временем треснет в стыке "пол-стена" из-за усадки дома.
                                    </p>
                                </div>
                            </div>

                            <div className="not-prose bg-red-50 rounded-3xl p-6 md:p-8 my-10 border border-red-100 shadow-sm relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-red-200/40 rounded-full blur-3xl -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700"></div>
                                <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                                    <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center shrink-0 text-white shadow-lg shadow-red-600/20">
                                        <AlertCircle className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold font-heading text-xl text-slate-900 mb-2">Осторожно!</h4>
                                        <p className="text-slate-700 font-sans leading-relaxed text-lg">
                                            Никогда не используйте битумную мастику в жилых помещениях. Она токсична и имеет стойкий специфический запах, который невозможно вывести годами.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </article>

                <div className="mt-12 p-8 bg-gray-50 rounded-3xl border border-gray-100 font-sans">
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        Источники и стандарты
                    </h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-slate-600 group hover:text-blue-600 transition-colors cursor-default">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0"></div>
                            <span className="border-b border-gray-200 pb-0.5 group-hover:border-blue-300">СП 29.13330.2011 "Полы. Актуализированная редакция СНиП 2.03.13-88"</span>
                        </li>
                        <li className="flex items-start gap-3 text-slate-600 group hover:text-blue-600 transition-colors cursor-default">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0"></div>
                            <span className="border-b border-gray-200 pb-0.5 group-hover:border-blue-300">Техническая карта Knauf: "Гидроизоляция во влажных помещениях"</span>
                        </li>
                    </ul>
                </div>

                <div className="mt-8 flex gap-4 font-sans"></div>
            </div>

            {/* Right: Sticky Sidebar */}
            <div className="lg:col-span-4 space-y-8 font-sans h-full">
                
                {/* Enhanced Author Bio / CTA Sidebar */}
                <div className="sticky top-24 space-y-6">
                    
                    {/* Dark Premium Card */}
                    <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem] shadow-2xl relative overflow-hidden text-white group">
                        
                        {/* Abstract Decor */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600 rounded-full blur-[60px] opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-600 rounded-full blur-[60px] opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
                        
                        <div className="relative z-10 flex flex-col items-center text-center">
                             <div className="relative mb-6">
                                 <img src={post.author.image} className="w-24 h-24 rounded-full object-cover ring-4 ring-white/10 shadow-xl" alt={post.author.name} />
                                 <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-1.5 border-4 border-slate-900">
                                     <MessageSquare className="w-4 h-4 text-white fill-current" />
                                 </div>
                             </div>
                             
                             <h4 className="text-xl font-bold font-heading mb-2">{post.author.name}</h4>
                             <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-6 border-b border-white/10 pb-4 w-full">
                                 {post.author.role}
                             </p>

                             <h3 className="text-lg font-bold mb-3">Остались вопросы?</h3>
                             <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                 Не нашли ответ в статье? Я лично проконсультирую вас по вашему проекту. Это бесплатно.
                             </p>
                             
                             <button onClick={onCalculate} data-lead-open="callback" className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/40 transform hover:-translate-y-1">
                                 Задать вопрос инженеру
                             </button>
                             <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-gray-500">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                Обычно отвечаем за 15 минут
                             </div>
                        </div>
                    </div>

                    {/* Secondary Benefit Card */}
                    <div className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                                <Calculator className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">Точная смета</h4>
                                <p className="text-xs text-gray-500 mt-1">Рассчитаем стоимость работ и черновых материалов под ваш бюджет.</p>
                            </div>
                        </div>
                        <button onClick={onCalculate} data-lead-open="callback" className="w-full py-3 border-2 border-slate-100 text-slate-700 rounded-xl font-bold text-sm hover:border-slate-900 hover:text-slate-900 transition-colors">
                            Открыть калькулятор
                        </button>
                    </div>

                </div>

            </div>
        </div>
      </div>
    </div>
  );
};
