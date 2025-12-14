
import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { Search, Calendar, Clock, User, ChevronRight, BookOpen, ShieldCheck } from 'lucide-react';
import { BLOG_POSTS } from '../blogData';

interface BlogPageProps {
  onNavigate: (mode: any, params?: any) => void;
  onCalculate: () => void;
}

const CATEGORIES = ["Все", "Технологии", "Выбор сантехники", "Бюджет", "Законы и нормы"];

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate, onCalculate }) => {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      const matchesCategory = activeCategory === "Все" || post.category === activeCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 animate-in fade-in duration-500 pb-12">
      <div className="container mx-auto px-4 pt-6 max-w-6xl">
        <Breadcrumbs 
            items={[{ label: 'Блог экспертов', isActive: true }]} 
            onNavigate={onNavigate} 
        />

        {/* Header Section */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-wider mb-6">
                <BookOpen className="w-4 h-4" />
                База знаний
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
                Честно о ремонте ванных комнат
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
                Делимся опытом 10+ лет. Разбираем сложные узлы, честно говорим о ценах и материалах. 
                Все статьи написаны нашими инженерами и проверены на соответствие СНиП.
            </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
            {/* Categories */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {CATEGORIES.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                            activeCategory === cat 
                            ? 'bg-slate-900 text-white shadow-lg' 
                            : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-400 hover:text-blue-600'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                    type="text" 
                    placeholder="Поиск по статьям..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                />
            </div>
        </div>

        {/* Grid */}
        {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                    <div 
                        key={post.id}
                        onClick={() => onNavigate('article', { id: post.id })}
                        className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all duration-300 cursor-pointer flex flex-col h-full"
                    >
                        {/* Image */}
                        <div className="relative h-56 overflow-hidden">
                            <img 
                                src={post.image} 
                                alt={post.title} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                            />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-slate-900 shadow-sm">
                                {post.category}
                            </div>
                            {post.reviewer && (
                                <div className="absolute bottom-4 left-4 bg-green-500/90 backdrop-blur px-2 py-1 rounded-lg text-[10px] font-bold text-white shadow-sm flex items-center gap-1">
                                    <ShieldCheck className="w-3 h-3" />
                                    Проверено экспертом
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="p-8 flex flex-col flex-1">
                            <div className="flex items-center gap-4 text-xs text-gray-400 font-medium mb-4">
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-3.5 h-3.5" />
                                    {post.date}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-3.5 h-3.5" />
                                    {post.readTime}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold font-heading text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                {post.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                {post.excerpt}
                            </p>

                            <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-6">
                                <div className="flex items-center gap-3">
                                    <img src={post.author.image} alt={post.author.name} className="w-8 h-8 rounded-full object-cover" />
                                    <div className="text-xs">
                                        <div className="font-bold text-slate-900">{post.author.name}</div>
                                        <div className="text-gray-400">{post.author.role}</div>
                                    </div>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <ChevronRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <div className="text-center py-20 bg-white rounded-[2rem] border border-gray-200">
                <p className="text-gray-500 text-lg">Статей по вашему запросу не найдено.</p>
                <button onClick={() => { setActiveCategory("Все"); setSearchQuery(""); }} className="mt-4 text-blue-600 font-bold hover:underline">
                    Сбросить фильтры
                </button>
            </div>
        )}

        {/* SEO Block */}
        <div className="mt-20 p-8 bg-slate-900 rounded-[2rem] relative overflow-hidden text-white">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
             <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                 <div>
                     <h2 className="text-2xl font-bold mb-4 font-heading">Не нашли ответ на свой вопрос?</h2>
                     <p className="text-gray-400 mb-6">
                         Наш главный инженер бесплатно проконсультирует вас по телефону. Разберем вашу ситуацию и подскажем, как избежать ошибок.
                     </p>
                     <button onClick={onCalculate} className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30">
                         Задать вопрос инженеру
                     </button>
                 </div>
                 <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                     <h3 className="font-bold mb-4 flex items-center gap-2">
                         <ShieldCheck className="w-5 h-5 text-green-400" />
                         Гарантия экспертности
                     </h3>
                     <p className="text-sm text-gray-400 leading-relaxed">
                         Весь контент на сайте проходит двойную проверку: сначала автором (прорабом), затем технологом компании. Мы не используем нейросети для написания текстов — только реальный опыт работы с материалами Knauf, Rehau, Ceresit в условиях московских новостроек и вторичного жилья.
                     </p>
                 </div>
             </div>
        </div>
      </div>
    </div>
  );
};
