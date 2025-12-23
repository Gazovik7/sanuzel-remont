
import React from 'react';
import { BLOG_POSTS } from '../landing/constants';
import { ArrowRight } from 'lucide-react';
import { BlogPost } from '../landing/types';

interface BlogProps {
  onNavigateToPost?: (post: BlogPost) => void;
}

const Blog: React.FC<BlogProps> = ({ onNavigateToPost }) => {
  
  const handlePostClick = (post: BlogPost) => {
     if (onNavigateToPost) {
        onNavigateToPost(post);
     } else {
        // Fallback if no handler is provided (e.g. external link logic if needed)
        console.log("Navigate to post", post.id);
     }
  };

  return (
    <section id="blog" className="py-16 md:py-24 px-4 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              Свежие статьи
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl">
              Делимся экспертизой, новостями маркетплейсов и стратегиями роста.
            </p>
          </div>
          <a href="#" className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">
            Все статьи <ArrowRight size={20} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.id} 
              onClick={() => handlePostClick(post)}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group cursor-pointer flex flex-col h-full"
            >
              <div className="h-52 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm ${post.colorClass.split(' ')[0]}`}>
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-sm text-gray-400 mb-3">{post.date}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="text-primary font-bold text-sm flex items-center gap-2 mt-auto">
                  Читать подробнее <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
