import React from 'react';
import { ChevronLeft, ChevronRight, Smartphone, Tablet, ShoppingCart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LazyImage from '../components/LazyImage';
import LazySection from '../components/LazySection';

// Lazy load components
const EstimateCalculator = React.lazy(() => import('../components/EstimateCalculator'));

interface HomeProps {
  onPageChange?: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onPageChange }) => {
  const { t, language } = useLanguage();

  const handleContactClick = () => {
    if (onPageChange) {
      onPageChange('contact');
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '213790702575'; // Algeria country code + phone number
    const message = language === 'fr' 
      ? 'Bonjour, je souhaite réserver un service de réparation.'
      : 'مرحباً، أريد حجز خدمة إصلاح.';
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    {
      icon: Smartphone,
      title: t('smartPhoneRepair'),
      description: t('smartPhoneDesc'),
      image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Tablet,
      title: t('tabletRepair'),
      description: t('tabletDesc'),
      image: 'https://pcpraha.cz/wp-content/uploads/2022/10/servis-a-oprava-tabletu.jpg'
    },
    {
      icon: Smartphone,
      title: t('desktopRepair'),
      description: t('desktopDesc'),
      image: 'https://www.diyfixtool.com/cdn/shop/articles/05qOG26wzVLHG2nlWpelvCF-1..v1683302270_jpg_JPEG_1600x900_71.png?v=1701080915&width=900'
    },
    {
      icon: ShoppingCart,
      title: t('repriseAchat'),
      description: t('repriseDesc'),
      image: 'https://wp-pa.phonandroid.com/uploads/2022/06/smartphone-ecran-casse-1200x800.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {t('heroTitle')}
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-6">
                {t('heroSubtitle')}
              </p>
              <p className="text-lg mb-8 text-blue-100 leading-relaxed">
                {t('heroDescription')}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 rtl:sm:space-x-reverse">
                <button 
                  onClick={handleContactClick}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  {t('contactUs')}
                </button>
                <button 
                  onClick={handleWhatsAppClick}
                  className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  {t('buyNow')}
                </button>
              </div>
            </div>
            
            <div className="hidden lg:block flex-1 max-w-md">
              <LazyImage
                src="https://www.allgsmtips.com/wp-content/uploads/2015/10/free-cell-phone-repair-2-990x500.jpg"
                alt="Phone Repair"
                className="w-full h-auto rounded-lg shadow-2xl scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            {t('servicesTitle')}
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <LazyImage
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Estimate Calculator Section */}
      <LazySection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <React.Suspense fallback={
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-1/3 mb-6"></div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    <div className="grid grid-cols-2 gap-3">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-20 bg-gray-200 rounded-lg"></div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-12 bg-gray-200 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          }>
            <EstimateCalculator />
          </React.Suspense>
        </div>
      </LazySection>

      {/* Quality Promise Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="hidden lg:block flex-1 max-w-md">
              <LazyImage
                src="https://www.diyfixtool.com/cdn/shop/articles/Jonathan_Strange.png?v=1703329370&width=900"
                alt="Quality Repair"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
            
            <div className="flex-1 max-w-2xl lg:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('qualityPromise')}
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                {t('heroDescription')}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 rtl:sm:space-x-reverse">
                <button 
                  onClick={handleContactClick}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  {t('contactUs')}
                </button>
                <button 
                  onClick={handleWhatsAppClick}
                  className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  {t('buyNow')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;