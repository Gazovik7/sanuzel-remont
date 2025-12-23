
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ModalProvider } from './Modal';
import RequestModal from './RequestModal';
import PartnersPage from '../islands/PartnersPage';

function PartnersModern() {
  return (
    <ModalProvider>
      <div className="font-sans text-[#09090b] bg-[#09090b] selection:bg-[#D4AF37] selection:text-white">
        <Header />
        <main><PartnersPage /></main>
        <Footer />
        <RequestModal />
      </div>
    </ModalProvider>
  );
}

export default PartnersModern;
