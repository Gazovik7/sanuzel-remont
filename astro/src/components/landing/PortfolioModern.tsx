
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ModalProvider } from './Modal';
import RequestModal from './RequestModal';
import CasesPage from '../islands/CasesPage';

function PortfolioModern() {
  return (
    <ModalProvider>
      <div className="font-sans text-[#09090b] bg-white selection:bg-[#D4AF37] selection:text-white">
        <Header />
        <main><CasesPage /></main>
        <Footer />
        <RequestModal />
      </div>
    </ModalProvider>
  );
}

export default PortfolioModern;
