
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ModalProvider } from './Modal';
import RequestModal from './RequestModal';
import ReviewsPage from '../islands/ReviewsPage';

function ReviewsModern() {
  return (
    <ModalProvider>
      <div className="font-sans text-[#09090b] bg-white selection:bg-[#D4AF37] selection:text-white">
        <Header />
        <main><ReviewsPage /></main>
        <Footer />
        <RequestModal />
      </div>
    </ModalProvider>
  );
}

export default ReviewsModern;
