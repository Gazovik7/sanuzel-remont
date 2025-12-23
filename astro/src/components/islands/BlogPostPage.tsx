
import React, { useEffect, useState } from 'react';
import { 
  ArrowLeft, Calendar, Clock, User, ChevronRight, Share2, Send, 
  ArrowRight as ArrowRightIcon, FileText, CheckCircle2, Bookmark, 
  ShieldCheck, Eye, List, Youtube, Info, Scale, ExternalLink
} from 'lucide-react';
import { BlogPost } from '../landing/types';
import UniversalForm from './UniversalForm';
import { BLOG_POSTS } from '../landing/constants';
import { useModal } from '../landing/Modal';
import { motion } from 'framer-motion';
import Breadcrumbs from './Breadcrumbs';

interface BlogPostPageProps {
  post: BlogPost;
}

const parseRussianDate = (dateStr: string) => {
  const months: { [key: string]: string } = {
    'января': '01', 'февраля': '02', 'марта': '03', 'апреля': '04', 'мая': '05', 'июня': '06',
    'июля': '07', 'августа': '08', 'сентября': '09', 'октября': '10', 'ноября': '11', 'декабря': '12'
  };
  const parts = dateStr.replace(',', '').split(' ');
  if (parts.length < 3) return new Date().toISOString(); 
  const day = parts[0].padStart(2, '0');
  const month = months[parts[1].toLowerCase()] || '01';
  const year = parts[2];
  return `${year}-${month}-${day}`;
};

const stripHtml = (html: string) => {
   let text = html.replace(/<[^>]*>?/gm, ' ');
   text = text.replace(/\[\[.*?\]\]/g, '');
   return text.replace(/\s+/g, ' ').trim();
};

const TableOfContents: React.FC<{ content: string }> = ({ content }) => {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const elements = Array.from(doc.querySelectorAll('h2, h3'));
    const items = elements.map((el, i) => {
      const id = el.id || `heading-${i}`;
      return { id, text: el.textContent || '', level: parseInt(el.tagName[1]) };
    });
    setHeadings(items);
  }, [content]);
  if (headings.length === 0) return null;
  return (
    <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-8 relative overflow-hidden">
      <div className="flex items-center gap-3 font-bold text-[#09090b] mb-6 uppercase tracking-widest text-[10px]">
        <List size={14} className="text-[#D4AF37]" /> Содержание
      </div>
      <nav className="space-y-3">
        {headings.map((h) => (
          <a key={h.id} href={`#${h.id}`} className={`block text-xs transition-all hover:text-[#D4AF37] leading-relaxed ${h.level === 3 ? 'pl-4 text-gray-400' : 'text-gray-600 font-medium'}`}>{h.text}</a>
        ))}
      </nav>
    </div>
  );
};

const ExpertTip: React.FC = () => (
  <div className="my-12 bg-gray-50 border-l-4 border-[#D4AF37] rounded-r-3xl p-8 md:p-10 relative overflow-hidden shadow-sm">
    <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
            <img src="/img/smirnov-ivan.jpg" className="w-10 h-10 rounded-full border border-gray-200 shadow-sm" alt="Иван Смирнов" />
            <span className="text-[9px] font-black uppercase tracking-widest text-[#D4AF37]">Совет эксперта</span>
        </div>
        <p className="text-gray-700 font-light italic leading-relaxed mb-0">"SEO — это не только позиции, но и доверие. Мы строим контент так, чтобы он закрывал боли вашего клиента и конвертировал его в заявку."</p>
    </div>
  </div>
);

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(window.scrollY / totalScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cleanText = post.content ? stripHtml(post.content) : (post.excerpt || '');
  const wordCount = cleanText.trim().split(/\s+/).length;
  const readingTimeStr = `${Math.max(1, Math.ceil(wordCount / 180))} мин`;

  const renderContent = (htmlContent: string) => {
    const parts = htmlContent.split(/(\[\[.*?\]\])/);
    return parts.map((part, index) => {
      if (part === '[[TELEGRAM]]') return <div key={index} className="my-12 bg-gray-50 border border-gray-100 rounded-[2rem] p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm"><Send size={32} className="text-blue-500" /><div className="flex-1 text-center md:text-left"><h4 className="text-lg font-bold text-[#09090b] mb-1 uppercase tracking-tight">Telegram эксперта</h4><p className="text-gray-500 text-sm mb-0">Кейсы и разборы алгоритмов ежедневно.</p></div><a href="https://t.me/mpagencyru" target="_blank" className="bg-blue-600 px-8 py-3 rounded-xl text-white font-bold text-[10px] uppercase shadow-lg shadow-blue-600/20 transition-transform hover:scale-105">Подписаться</a></div>;
      if (part === '[[CTA]]') return <div key={index} className="my-16 bg-[#09090b] rounded-[2.5rem] p-12 text-white text-center shadow-2xl relative overflow-hidden"><div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-[80px]"></div><h3 className="text-3xl font-serif italic mb-8 relative z-10">Готовы к кратному <span className="text-[#D4AF37]">росту?</span></h3><button onClick={() => openModal({ title: 'Обсудить проект' })} className="bg-[#D4AF37] hover:bg-white text-black px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest relative z-10 transition-all">Обсудить проект</button></div>;
      if (part === '[[EXPERT_TIP]]') return <ExpertTip key={index} />;
      return <div key={index} className="prose-chunk" dangerouslySetInnerHTML={{ __html: part }} />;
    });
  };

  return (
    <div className="bg-white min-h-screen animate-fade-in">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BlogPosting", "headline": post.title }) }} />
      
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-white/10 backdrop-blur-sm">
        <motion.div className="h-full bg-[#D4AF37]" style={{ width: `${scrollProgress * 100}%` }} />
      </div>

      {/* 1. DARK HERO SECTION */}
      <section className="relative pt-40 pb-32 bg-[#09090b] text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
            <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[#D4AF37]/5 rounded-full blur-[120px]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        </div>

        <div className="container mx-auto max-w-6xl px-6 relative z-10">
            <div className="mb-12">
                <Breadcrumbs items={[{ label: 'Блог', href: '/blog' }, { label: post.category, href: '#' }]} theme="light" />
            </div>

            <div className="max-w-4xl">
                <div className="flex items-center gap-3 mb-8">
                    <span className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20">
                        {post.category}
                    </span>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400">
                        <ShieldCheck size={12} />
                        <span className="text-[9px] font-bold uppercase tracking-widest">Проверено экспертом</span>
                    </div>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-sans font-bold text-white mb-10 leading-[1.1] tracking-tight">
                    {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-8 text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">
                    <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-[#D4AF37]" />
                        <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock size={14} className="text-[#D4AF37]" />
                        <span>{readingTimeStr} чтения</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <User size={14} className="text-[#D4AF37]" />
                        <span>Иван Смирнов</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 2. CONTENT SECTION (White) */}
      <section className="relative bg-white pb-24">
        <div className="container mx-auto max-w-6xl px-6">
            
            {/* Featured Image - Overlapping Hero */}
            <div className="relative -mt-20 mb-20 z-20">
                <div className="w-full h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/20">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
            </div>

            <div className="grid lg:grid-cols-[1fr_320px] gap-20">
                {/* Article Body */}
                <article className="max-w-none text-lg text-gray-600 font-light leading-relaxed
                    [&_.prose-chunk>h2]:text-3xl [&_.prose-chunk>h2]:font-bold [&_.prose-chunk>h2]:text-[#09090b] [&_.prose-chunk>h2]:mt-16 [&_.prose-chunk>h2]:mb-8 [&_.prose-chunk>h2]:tracking-tight [&_.prose-chunk>h2]:scroll-mt-32
                    [&_.prose-chunk>h3]:text-2xl [&_.prose-chunk>h3]:font-bold [&_.prose-chunk>h3]:text-[#09090b] [&_.prose-chunk>h3]:mt-12 [&_.prose-chunk>h3]:mb-6
                    [&_.prose-chunk>p]:mb-8
                    [&_.prose-chunk>ul]:list-none [&_.prose-chunk>ul]:space-y-4 [&_.prose-chunk>ul]:mb-8
                    [&_.prose-chunk>ul>li]:pl-8 [&_.prose-chunk>ul>li]:relative
                    [&_.prose-chunk>ul>li]:before:content-[''] [&_.prose-chunk>ul>li]:before:absolute [&_.prose-chunk>ul>li]:before:left-0 [&_.prose-chunk>ul>li]:before:top-3 [&_.prose-chunk>ul>li]:before:w-2 [&_.prose-chunk>ul>li]:before:h-2 [&_.prose-chunk>ul>li]:before:rounded-full [&_.prose-chunk>ul>li]:before:bg-[#D4AF37]
                    [&_.prose-chunk>blockquote]:border-l-4 [&_.prose-chunk>blockquote]:border-[#D4AF37] [&_.prose-chunk>blockquote]:pl-10 [&_.prose-chunk>blockquote]:italic [&_.prose-chunk>blockquote]:text-[#09090b] [&_.prose-chunk>blockquote]:my-12 [&_.prose-chunk>blockquote]:bg-gray-50 [&_.prose-chunk>blockquote]:py-8 [&_.prose-chunk>blockquote]:pr-8 [&_.prose-chunk>blockquote]:rounded-r-3xl
                ">
                    <TableOfContents content={post.content || ''} />
                    {renderContent(post.content || `<p>\${post.excerpt}</p>`)}
                </article>

                {/* Sticky Sidebar */}
                <aside className="hidden lg:block">
                    <div className="sticky top-32 space-y-8">
                        <div className="bg-gray-50 border border-gray-100 rounded-[2.5rem] p-8 text-center shadow-sm group hover:border-[#D4AF37]/30 transition-all duration-500">
                            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white shadow-md group-hover:scale-105 transition-transform"><img src="/img/smirnov-ivan.jpg" alt="Иван Смирнов" className="w-full h-full object-cover" /></div>
                            <h4 className="text-xl font-bold text-[#09090b] mb-1">Иван Смирнов</h4>
                            <p className="text-[10px] text-[#D4AF37] font-black uppercase mb-6 tracking-widest">Основатель агентства</p>
                            <div className="flex justify-center gap-4"><a href="#" className="text-gray-400 hover:text-[#09090b] transition-colors"><Send size={18} /></a><a href="#" className="text-gray-400 hover:text-red-600 transition-colors"><Youtube size={18} /></a></div>
                        </div>
                        <div className="bg-[#09090b] rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl group"><div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl"></div><div className="relative z-10 text-center"><h4 className="text-xl font-bold mb-6 leading-tight">Нужен аудит <br/>вашего сайта?</h4><button onClick={() => openModal({ title: 'Бесплатный аудит' })} className="w-full bg-[#D4AF37] text-black py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-white transition-all shadow-lg shadow-[#D4AF37]/20">Записаться</button></div></div>
                    </div>
                </aside>
            </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;
