import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Store, Plane, Heart, Phone, Building, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

/**
 * Composant Industries - Section des industries servies
 * Navigation par onglets avec contenu dynamique pour chaque secteur
 */
const Industries = () => {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState('retail');

  const industries = {
    retail: {
      icon: Store,
      title: t('industry_retail_title'),
      description: t('industry_retail_description'),
      features: [
        t('industry_retail_feature1'),
        t('industry_retail_feature2'),
        t('industry_retail_feature3'),
        t('industry_retail_feature4')
      ],
      color: "from-orange-500 to-red-500"
    },
    healthcare: {
      icon: Heart,
      title: t('industry_healthcare_title'),
      description: t('industry_healthcare_description'),
      features: [
        t('industry_healthcare_feature1'),
        t('industry_healthcare_feature2'),
        t('industry_healthcare_feature3'),
        t('industry_healthcare_feature4')
      ],
      color: "from-blue-500 to-cyan-500"
    },
    banking: {
      icon: Building,
      title: t('industry_banking_title'),
      description: t('industry_banking_description'),
      features: [
        t('industry_banking_feature1'),
        t('industry_banking_feature2'),
        t('industry_banking_feature3'),
        t('industry_banking_feature4')
      ],
      color: "from-green-500 to-emerald-500"
    },
    telecom: {
      icon: Phone,
      title: t('industry_telecom_title'),
      description: t('industry_telecom_description'),
      features: [
        t('industry_telecom_feature1'),
        t('industry_telecom_feature2'),
        t('industry_telecom_feature3'),
        t('industry_telecom_feature4')
      ],
      color: "from-purple-500 to-violet-500"
    },
    airports: {
      icon: Plane,
      title: t('industry_airports_title'),
      description: t('industry_airports_description'),
      features: [
        t('industry_airports_feature1'),
        t('industry_airports_feature2'),
        t('industry_airports_feature3'),
        t('industry_airports_feature4')
      ],
      color: "from-indigo-500 to-blue-500"
    },
    public: {
      icon: Users,
      title: t('industry_public_title'),
      description: t('industry_public_description'),
      features: [
        t('industry_public_feature1'),
        t('industry_public_feature2'),
        t('industry_public_feature3'),
        t('industry_public_feature4')
      ],
      color: "from-teal-500 to-green-500"
    }
  };

  const tabOrder = ['retail', 'healthcare', 'banking', 'telecom', 'airports', 'public'];

  return (
    <section id="industries" className="py-20 bg-white" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
            {t('industries_section_tag')}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('industries_section_title_part1')}{' '}
            <span className="text-green-600">
              {t('industries_section_title_part2')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('industries_section_description')}
          </p>
        </div>

        {/* Navigation par onglets */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabOrder.map((key) => {
              const industry = industries[key];
              const IconComponent = industry.icon;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{industry.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Contenu de l'onglet actif */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contenu textuel */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${industries[activeTab].color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    {React.createElement(industries[activeTab].icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    {industries[activeTab].title}
                  </h3>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {industries[activeTab].description}
                </p>
              </div>

              {/* Liste des fonctionnalités */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">{t('industries_key_features_title')}</h4>
                <ul className="space-y-3">
                  {industries[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg group"
                >
                  {t('industries_learn_more_button')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Illustration/Image */}
            <div className="relative">
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                {/* Simulation d'interface spécifique à l'industrie */}
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <h5 className="text-lg font-semibold text-gray-900">
                      {industries[activeTab].title} {t('industries_dashboard_suffix')}
                    </h5>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Contenu spécifique à l'industrie */}
                  <div className="space-y-4">
                    {/* Métriques */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-gray-50 rounded-xl">
                        <div className={`text-2xl font-bold bg-gradient-to-r ${industries[activeTab].color} bg-clip-text text-transparent`}>
                          {activeTab === 'retail' ? '89' : 
                           activeTab === 'healthcare' ? '156' :
                           activeTab === 'banking' ? '42' :
                           activeTab === 'telecom' ? '73' :
                           activeTab === 'airports' ? '234' : '67'}
                        </div>
                        <div className="text-sm text-gray-600">
                          {activeTab === 'retail' ? t('industries_customers_metric') : 
                           activeTab === 'healthcare' ? t('industries_patients_metric') :
                           activeTab === 'banking' ? t('industries_clients_metric') :
                           activeTab === 'telecom' ? t('industries_customers_metric') :
                           activeTab === 'airports' ? t('industries_passengers_metric') : t('industries_citizens_metric')}
                        </div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-xl">
                        <div className={`text-2xl font-bold bg-gradient-to-r ${industries[activeTab].color} bg-clip-text text-transparent`}>
                          {activeTab === 'retail' ? '4.2m' : 
                           activeTab === 'healthcare' ? '12m' :
                           activeTab === 'banking' ? '8.5m' :
                           activeTab === 'telecom' ? '6.1m' :
                           activeTab === 'airports' ? '15m' : '9.3m'}
                        </div>
                        <div className="text-sm text-gray-600">{t('industries_avg_wait_metric')}</div>
                      </div>
                    </div>

                    {/* Liste des files d'attente */}
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-700 mb-3">{t('industries_active_queues_title')}</div>
                      {[
                        activeTab === 'retail' ? t('industries_retail_queue1') : 
                        activeTab === 'healthcare' ? t('industries_healthcare_queue1') :
                        activeTab === 'banking' ? t('industries_banking_queue1') :
                        activeTab === 'telecom' ? t('industries_telecom_queue1') :
                        activeTab === 'airports' ? t('industries_airports_queue1') : t('industries_public_queue1'),
                        
                        activeTab === 'retail' ? t('industries_retail_queue2') : 
                        activeTab === 'healthcare' ? t('industries_healthcare_queue2') :
                        activeTab === 'banking' ? t('industries_banking_queue2') :
                        activeTab === 'telecom' ? t('industries_telecom_queue2') :
                        activeTab === 'airports' ? t('industries_airports_queue2') : t('industries_public_queue2'),
                        
                        activeTab === 'retail' ? t('industries_retail_queue3') : 
                        activeTab === 'healthcare' ? t('industries_healthcare_queue3') :
                        activeTab === 'banking' ? t('industries_banking_queue3') :
                        activeTab === 'telecom' ? t('industries_telecom_queue3') :
                        activeTab === 'airports' ? t('industries_airports_queue3') : t('industries_public_queue3')
                      ].map((queue, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm text-gray-700">{queue}</span>
                          <span className={`text-sm font-medium bg-gradient-to-r ${industries[activeTab].color} bg-clip-text text-transparent`}>
                            {Math.floor(Math.random() * 20) + 5}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Éléments décoratifs */}
              <div className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${industries[activeTab].color} rounded-full opacity-20 animate-pulse`}></div>
              <div className={`absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br ${industries[activeTab].color} rounded-full opacity-20 animate-pulse delay-1000`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;


