import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const { t } = useLanguage();

  return (
    <header className="bg-gray-800 text-white py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-2 md:space-y-0">
          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center space-x-8 rtl:space-x-reverse text-sm w-full md:w-auto">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>{t('address')}</span>
            </div>
            
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>{t('phone')}</span>
            </div>
            
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>mohamed.mosta.reparation@gmail.com</span>
            </div>
            
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>{t('hours')}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;