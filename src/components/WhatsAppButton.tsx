import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WhatsAppButton: React.FC = () => {
  const { language } = useLanguage();
  
  const handleWhatsAppClick = () => {
    const phoneNumber = '213790702575'; // Algeria country code + phone number
    const message = language === 'fr' 
      ? 'Bonjour, je souhaite obtenir des informations sur vos services de réparation.'
      : 'مرحباً، أريد الحصول على معلومات حول خدمات الإصلاح الخاصة بكم.';
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      aria-label="Contact WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppButton;