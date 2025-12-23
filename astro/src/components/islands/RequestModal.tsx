
import React from 'react';
import { X } from 'lucide-react';
import { useModal } from '../landing/Modal';
import { AnimatePresence, motion } from 'framer-motion';
import UniversalForm from './UniversalForm';

interface RequestModalProps {
  onNavigate?: (path: string) => void;
}

const RequestModal: React.FC<RequestModalProps> = ({ onNavigate }) => {
  const { isOpen, closeModal, modalData } = useModal();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
          >
             <div 
                className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden pointer-events-auto relative flex flex-col max-h-[90vh]"
             >
                {/* Close Button */}
                <button 
                    onClick={closeModal}
                    className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors z-20"
                >
                    <X size={20} />
                </button>

                <div className="overflow-y-auto custom-scrollbar flex flex-col h-full">
                    {/* Header */}
                    <div className="bg-gradient-to-br from-primary to-secondary p-8 pb-10 text-white text-center relative shrink-0">
                            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2"></div>
                            </div>
                        <h3 className="text-2xl font-bold mb-2 relative z-10">
                            {modalData?.title || 'Оставить заявку'}
                        </h3>
                        <p className="text-white/90 text-sm relative z-10 max-w-xs mx-auto leading-relaxed">
                            {modalData?.subtitle || 'Заполните форму, и мы свяжемся с вами для обсуждения проекта.'}
                        </p>
                    </div>

                    <div className="p-8 -mt-4 bg-white rounded-t-3xl relative z-10 flex-1">
                        <UniversalForm 
                            source={modalData?.source || "Modal"}
                            variant="default"
                            initialData={{
                                url: modalData?.url,
                                name: modalData?.name,
                                phone: modalData?.phone
                            }}
                            extraFields={modalData?.extraFields}
                            buttonText={modalData?.buttonText || 'Отправить заявку'}
                            showUrlField={modalData?.showUrlField}
                            onNavigate={(path) => {
                                closeModal();
                                if (onNavigate) onNavigate(path);
                            }}
                        />
                    </div>
                </div>
             </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default RequestModal;
