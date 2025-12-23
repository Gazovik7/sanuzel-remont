
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ModalProvider } from './Modal';
import RequestModal from './RequestModal';
import BlogPostPage from '../islands/BlogPostPage';
import { BlogPost } from './types';

interface ArticleModernProps {
  post: BlogPost;
  pathname?: string;
}

function ArticleModern({ post, pathname }: ArticleModernProps) {
  return (
    <ModalProvider>
      <div className="font-sans text-[#09090b] bg-white selection:bg-[#D4AF37] selection:text-white">
        <Header pathname={pathname} />
        <main>
           <BlogPostPage post={post} />
        </main>
        <Footer />
        <RequestModal />
      </div>
    </ModalProvider>
  );
}

export default ArticleModern;
