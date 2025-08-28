import React, { useState } from 'react';
import { Calculator, Smartphone, Tablet, Laptop } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const EstimateCalculator: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedDevice, setSelectedDevice] = useState('');
  const [selectedIssue, setSelectedIssue] = useState('');
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);

  const devices = [
    { value: 'iphone', label: t('iphone'), icon: Smartphone },
    { value: 'android', label: t('android'), icon: Smartphone },
    { value: 'tablet', label: t('tablet'), icon: Tablet },
    { value: 'smartphone', label: t('smartphone'), icon: Smartphone },
  ];

  const issues = [
    { value: 'screen', label: t('screenBroken') },
    { value: 'battery', label: t('batteryIssue') },
    { value: 'charging', label: t('chargePort') },
    { value: 'water', label: t('waterDamage') },
    { value: 'speaker', label: t('speakerIssue') },
  ];

  const calculateEstimate = () => {
    if (!selectedDevice || !selectedIssue) return;

    const basePrices = {
      iphone: { screen: 4000, battery: 1500, charging: 800, water: 'variable', speaker: 1500 },
      android: { screen: 4000, battery: 1200, charging: 800, water: 'variable', speaker: 600 },
      tablet: { screen: 6000, battery: 1500, charging: 800, water: 'variable', speaker: 600 },
      smartphone: { screen: 4000, battery: 1200, charging: 800, water: 'variable', speaker: 600 },
    };

    const price = basePrices[selectedDevice as keyof typeof basePrices][selectedIssue as keyof typeof basePrices.iphone];
    setEstimatedCost(price);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center space-x-2 rtl:space-x-reverse mb-6">
        <Calculator className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-bold text-gray-800">{t('estimateTitle')}</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('deviceType')}
          </label>
          <div className="grid grid-cols-2 gap-3">
            {devices.map((device) => {
              const IconComponent = device.icon;
              return (
                <button
                  key={device.value}
                  onClick={() => setSelectedDevice(device.value)}
                  className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                    selectedDevice === device.value
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <IconComponent className="w-6 h-6 mx-auto mb-1" />
                  <div className="text-sm font-medium">{device.label}</div>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('issueType')}
          </label>
          <select
            value={selectedIssue}
            onChange={(e) => setSelectedIssue(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">{t('selectIssue')}</option>
            {issues.map((issue) => (
              <option key={issue.value} value={issue.value}>
                {issue.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
        <button
          onClick={calculateEstimate}
          disabled={!selectedDevice || !selectedIssue}
          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          {t('getEstimate')}
        </button>

        {estimatedCost && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex-1">
            <div className="text-sm text-green-600 font-medium">{t('estimatedCost')}</div>
            <div className="text-2xl font-bold text-green-700">
              {estimatedCost === 'variable' 
                ? t('followingDamage')
                : `${t('startingFrom')} ${estimatedCost.toLocaleString()} ${language === 'ar' ? 'دج' : 'DA'}`
              }
            </div>
            <div className="text-xs text-green-600 mt-1">{t('indicativePrice')}</div>
          </div>
        )}
      </div>
      
      <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>{t('importantNote')}:</strong> {t('estimateNote')}
        </p>
      </div>
    </div>
  );
};

export default EstimateCalculator;