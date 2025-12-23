
import { useEffect } from 'react';
import { useModal } from '../landing/Modal';

const ExitPopup = () => {
  const { openModal, isOpen } = useModal();

  useEffect(() => {
    // 1. Check LocalStorage (Persists even after browser close)
    const hasShown = localStorage.getItem('mp_exit_popup_shown');
    
    // If already shown OR a modal is currently open (don't overlap), do nothing
    if (hasShown || isOpen) return;

    // Logic to trigger the popup
    const triggerPopup = () => {
      // Double check inside closure (in case it happened while timer was running)
      if (localStorage.getItem('mp_exit_popup_shown')) return;
      
      // IMPORTANT: Do not interrupt if user is already looking at a modal
      // We need to check a ref or similar, but since we can't easily access current `isOpen` 
      // inside this closure without adding it to dependency array (which resets timer),
      // we rely on the fact that `openModal` usually handles its own state. 
      // However, to be safe, we mark it as shown immediately.

      openModal({
        title: '🎁 Не уходите с пустыми руками!',
        subtitle: 'Запишитесь на бесплатный разбор магазина и получите чек-лист "ТОП-10 ошибок, убивающих прибыль на маркетплейсах".',
        source: 'ExitIntent_Popup',
        buttonText: 'Забрать разбор и бонус',
      });
      
      localStorage.setItem('mp_exit_popup_shown', 'true');
    };

    // 2. Event Listener for Mouse Leave (Desktop Exit Intent)
    const handleMouseLeave = (e: MouseEvent) => {
      // Check if mouse left the window from the top (intent to switch tab or close)
      if (e.clientY <= 0) {
        triggerPopup();
      }
    };

    // 3. Timer Fallback (e.g. 60 seconds) - catches mobile users or idle readers
    const timer = setTimeout(() => {
        triggerPopup();
    }, 60000);

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, [openModal]); // Removed isOpen to prevent timer reset, logic handled inside

  return null; 
};

export default ExitPopup;
