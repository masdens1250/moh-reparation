import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LazyImage from '../components/LazyImage';
import LazySection from '../components/LazySection';

const About: React.FC = () => {
  const { t, language } = useLanguage();

  const stats = [
    { number: '+15', label: t('yearsExperience') },
    { number: '+5000', label: t('successfulRepairs') },
    { number: language === 'ar' ? '%98' : '98%', label: t('satisfiedClients') },
    { number: language === 'ar' ? '48 ' : '48h', label: t('averageTime') }
  ];

  const features = [
    {
      icon: Award,
      title: t('experienceTitle'),
      description: t('experienceDesc')
    },
    {
      icon: Shield,
      title: t('qualityTitle'),
      description: t('qualityDesc')
    },
    {
      icon: Clock,
      title: t('fastRepair'),
      description: t('fastRepairDesc')
    },
    {
      icon: Users,
      title: t('technicalExpertise'),
      description: t('technicalExpertiseDesc')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">{t('aboutTitle')}</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              {t('aboutDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <LazyImage
                src="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Workshop"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">{t('ourStory')}</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {t('storyDesc1')}
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('storyDesc2')}
              </p>
              <div className="bg-blue-100 p-4 rounded-lg">
                <p className="text-blue-800 font-semibold">
                  {t('mohamedQuote')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            {t('whyChooseUs')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workshop Section */}
      <LazySection className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('workshopTitle')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('workshopDesc')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <LazyImage
              src="https://img1.wsimg.com/isteam/stock/w6p6a9q/:/rs=w:984,h:656"
              alt="Workshop 1"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <LazyImage
              src="https://www.smartfixlv.com/wp-content/uploads/2024/03/DALL%C2%B7E-2024-03-30-18.49.05-Create-a-landscape-oriented-image-showcasing-a-phone-repair-service.-The-scene-should-feature-a-technicians-workbench-in-a-modern-repair-shop-with-v.webp"
              alt="Workshop 2"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <LazyImage
              src="https://www.smartfixlv.com/wp-content/uploads/2024/03/Why-Choose-Us-For-Your-Samsung-Galaxy-Repair.jpg"
              alt="Workshop 3"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </LazySection>
    </div>
  );
};

export default About;