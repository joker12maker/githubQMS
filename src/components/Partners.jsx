import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Composant Partners - Section des partenaires de signalisation numérique
 * Affiche les logos des plateformes partenaires
 */
const Partners = () => {
  const { t } = useTranslation();

  const partners = [
    {
      name: "2B TRADING",
      logo: "2B TRADING",
      color: "from-red-500 to-red-600"
    },
    
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('partners_section_title_part1')}{' '}
            <span className="text-green-600">{t('partners_section_title_part2')}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('partners_section_description')}
          </p>
        </div>

        {/* Grille des partenaires */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="group flex items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300"
            >
              {/* Logo simulé */}
              <div className={`text-center group-hover:scale-110 transition-transform duration-300`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${partner.color} rounded-xl flex items-center justify-center mb-3 mx-auto shadow-lg`}>
                  <span className="text-white font-bold text-sm">
                    {partner.logo.substring(0, 2)}
                  </span>
                </div>
                <div className="text-sm font-semibold text-gray-700 group-hover:text-green-600 transition-colors">
                  {partner.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section d'intégration */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              {t('partners_integration_title')}
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              {t('partners_integration_description')}
            </p>
            
            {/* Fonctionnalités d'intégration */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold">API</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{t('partners_api_title')}</h4>
                <p className="text-sm text-gray-600">{t('partners_api_description')}</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold">SDK</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{t('partners_sdk_title')}</h4>
                <p className="text-sm text-gray-600">{t('partners_sdk_description')}</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold">24/7</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{t('partners_support_title')}</h4>
                <p className="text-sm text-gray-600">{t('partners_support_description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;


