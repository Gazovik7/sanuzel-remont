
import React from 'react';
import { BLOG_POSTS } from '../landing/constants';
import { ArrowRight, FileText, Clock, Send } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';

const BlogPage: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 bg-[#09090b] text-white overflow-hidden min-h-screen animate-fade-in">
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#D4AF37]/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/5 rounded-full blur-[150px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-20">
          <Breadcrumbs 
            items={[{ label: 'Блог', href: '/blog' }]} 
            theme="light" 
          />
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 backdrop-blur-sm text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest mb-8">
             <FileText size={14} />
             <span>Экспертиза Smirnov Marketing</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-sans font-bold text-white mb-8 leading-[1.1] tracking-tight">
            Полезные <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">материалы</span>
          </h1>
          <p className="text-xl md:text-2xl font-serif italic text-[#D4AF37] opacity-90">
            Делимся экспертизой, разборами алгоритмов и стратегиями масштабирования.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {BLOG_POSTS.map((post) => (
            <a 
              key={post.id} 
              href={`/article/${post.id}`}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] overflow-hidden hover:border-[#D4AF37]/30 transition-all duration-500 flex flex-col h-full"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 opacity-70" 
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-black/60 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/20">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 md:p-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-6">
                    <span>{post.date}</span>
                    {post.readTime && (
                        <span className="flex items-center gap-1.5"><Clock size={12} className="text-[#D4AF37]" /> {post.readTime}</span>
                    )}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-[#D4AF37] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-8 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="text-[10px] font-black text-white uppercase tracking-[0.2em] flex items-center gap-2 mt-auto pt-8 border-t border-white/5">
                  Читать статью <ArrowRight size={14} className="text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Telegram CTA */}
        <div className="bg-white/5 backdrop-blur-2xl rounded-[3rem] border border-white/10 p-12 md:p-16 text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-[80px]"></div>
           <div className="relative z-10">
               <h2 className="text-3xl md:text-4xl font-serif font-medium text-white mb-6">Получайте материалы <span className="italic text-[#D4AF37]">первыми</span></h2>
               <p className="text-gray-400 text-lg font-light mb-10 max-w-xl mx-auto leading-relaxed">
                   Подпишитесь на наш Telegram-канал. Анонсы новых кейсов, разборы обновлений и практические советы по SEO.
               </p>
               <a 
                 href="https://t.me/mpagencyru" 
                 target="_blank" 
                 rel="noreferrer"
                 className="inline-flex items-center gap-3 bg-[#D4AF37] hover:bg-white text-black px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-xl shadow-[#D4AF37]/10"
               >
                  <Send size={16} /> <span>Перейти в Telegram</span>
               </a>
           </div>
        </div>

      </div>
    </section>
  );
};

export default BlogPage;
