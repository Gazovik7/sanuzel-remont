
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ModalProvider } from './Modal';
import RequestModal from './RequestModal';

interface PageModernWrapperProps {
  children: React.ReactNode;
}

function PageModernWrapper({ children }: PageModernWrapperProps) {
  return (
    <ModalProvider>
      <div className="font-sans text-[#09090b] bg-white selection:bg-[#D4AF37] selection:text-white">
        <Header />
        <main>
           {children}
        </main>
        <Footer />
        <RequestModal />
      </div>
    </ModalProvider>
  );
}

export default PageModernWrapper;
