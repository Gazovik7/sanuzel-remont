
import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface ModalContextType {
  isOpen: boolean;
  openModal: (initialData?: any) => void;
  closeModal: () => void;
  modalData: any;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<any>(null);

  const openModal = (data?: any) => {
    setModalData(data || null);
    setIsOpen(true);
    if (typeof document !== 'undefined') {
       document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalData(null);
    if (typeof document !== 'undefined') {
        document.body.style.overflow = 'unset';
    }
  };

  // Integration with global window.lead for legacy components (ExitIntentModal)
  useEffect(() => {
    if (typeof window !== 'undefined') {
        window.lead = {
            open: (type: string = 'callback') => {
                 openModal({ 
                    title: type === 'calculate' ? 'Рассчитать стоимость' : 'Заказать звонок',
                    subtitle: 'Оставьте заявку, и мы свяжемся с вами.',
                    source: 'Legacy/ExitIntent'
                 });
            },
            close: closeModal,
            success: () => {
                 window.location.href = '/spasibo/';
            },
            capture: async () => true
        };
    }
  }, []);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, modalData }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
