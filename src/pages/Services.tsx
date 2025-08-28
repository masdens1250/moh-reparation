import React from 'react';
import { Smartphone, Tablet, Monitor, Wrench, Shield, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LazyImage from '../components/LazyImage';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Smartphone,
      title: t('smartPhoneRepair'),
      description: t('smartPhoneDesc'),
      image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [t('screenRepair'), t('batteryReplacement'), t('chargingProblems'), t('cameraRepair')]
    },
    {
      icon: Tablet,
      title: t('tabletRepair'),
      description: t('tabletDesc'),
      image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [t('touchScreen'), t('chargingPort'), t('systemProblems'), t('softwareUpdate')]
    },
    {
      icon: Monitor,
      title: t('desktopRepair'),
      description: t('desktopDesc'),
      image: 'https://images.pexels.com/photos/1388947/technology-telephone-mobile-smart-1388947.jpeg',
      features: [t('screenRepairGeneral'), t('batteryChange'), t('networkUnlock'), t('systemUpdate')]
    }
  ];

  const whyChooseUs = [
    {
      icon: Wrench,
      title: t('technicalExpertise'),
      description: t('technicalExpertiseDesc')
    },
    {
      icon: Shield,
      title: t('warrantyService'),
      description: t('warrantyServiceDesc')
    },
    {
      icon: Clock,
      title: t('fastRepair'),
      description: t('fastRepairDesc')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">{t('servicesTitle')}</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              {t('servicesDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className={`flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/2">
                    <LazyImage
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 lg:h-80 object-cover"
                    />
                  </div>
                  <div className="lg:w-1/2 p-8">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <IconComponent className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 rtl:space-x-reverse">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            {t('whyChooseUsServices')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;