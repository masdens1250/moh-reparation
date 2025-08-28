import React from 'react';
import { Phone, Languages, Smartphone, Wrench } from 'lucide-react';
import { useLanguage, Language } from '../contexts/LanguageContext';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  const { t, language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'ar' : 'fr');
  };

  const navItems = [
    { key: 'home', label: t('home') },
    { key: 'services', label: t('services') },
    { key: 'about', label: t('about') },
    { key: 'contact', label: t('contact') },
  ];

  return (
    <nav className="bg-blue-900 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="bg-cyan-400 p-2 rounded-lg relative">
              <Smartphone className="w-6 h-6 text-white" />
              <div className="absolute -bottom-1 -right-1 bg-orange-500 p-1 rounded-full">
                <Wrench className="w-3 h-3 text-white" />
              </div>
            </div>
            <span className="text-white text-xl font-bold">Mohamed-Reparation</span>
          </div>
          
          {/* Navigation Menu */}
          <div className="flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => onPageChange(item.key)}
                className={`text-white hover:text-cyan-400 transition-colors font-medium ${
                  currentPage === item.key ? 'text-cyan-400' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Customer Care & Language Toggle */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="flex items-center space-x-2 rtl:space-x-reverse text-white">
              <Phone className="w-4 h-4" />
              <div>
                <div className="text-sm">{t('phone')}</div>
              </div>
            </div>
            
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 rtl:space-x-reverse bg-cyan-400 hover:bg-cyan-500 text-white px-3 py-2 rounded transition-colors"
            >
              <Languages className="w-4 h-4" />
              <span className="text-sm font-medium">{language === 'fr' ? 'عربي' : 'FR'}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;