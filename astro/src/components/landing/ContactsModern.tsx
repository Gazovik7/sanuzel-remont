import Header from './Header';
import Footer from './Footer';
import { ModalProvider } from './Modal';
import RequestModal from './RequestModal';
import ContactsPage from '../islands/ContactsPage';

function ContactsModern() {
  return (
    <ModalProvider>
      <div className="font-sans text-[#09090b] bg-white selection:bg-[#D4AF37] selection:text-white">
        <Header />
        
        <main>
           <ContactsPage />
        </main>

        <Footer />
        <RequestModal />
      </div>
    </ModalProvider>
  );
}

export default ContactsModern;
