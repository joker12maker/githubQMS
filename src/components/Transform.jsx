import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Zap, BarChart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

/**
 * Composant Transform - Section de transformation des expériences client
 * Met en avant les capacités de transformation de SMARTQ-TECH
 */
const Transform = () => {
  const { t, i18n } = useTranslation();

  const capabilities = [
    {
      icon: Users,
      title: t('transform_web_based_access_title'),
      description: t('transform_web_based_access_description')
    },
    {
      icon: Zap,
      title: t('transform_real_time_configurations_title'),
      description: t('transform_real_time_configurations_description')
    },
    {
      icon: BarChart,
      title: t('transform_comprehensive_analytics_title'),
      description: t('transform_comprehensive_analytics_description')
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenu textuel */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium">
                {t('transform_platform_features_tag')}
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {t("transform_title_part1")}{" "}
                <span className="text-green-600">
                  {t('transform_title_part2')}
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('transform_description')}
              </p>
            </div>

            {/* Sous-section Real-Time Control */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                {t('transform_real_time_control_title')}
              </h3>
              <p className="text-gray-600">
                {t('transform_real_time_control_description')}
              </p>
            </div>

            {/* Liste des capacités */}
            <div className="space-y-6">
              {capabilities.map((capability, index) => {
                const IconComponent = capability.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {capability.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg group"
              >
                {t('transform_get_started_button')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Illustration/Image */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
              {/* Simulation d'interface de contrôle */}
              <div className="space-y-6">
                {/* Header de l'interface */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900">{t('transform_dashboard_title')}</h4>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>

                {/* Métriques en temps réel */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <div className="text-2xl font-bold text-green-600">24</div>
                    <div className="text-sm text-gray-600">{t('transform_active_queues')}</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600">156</div>
                    <div className="text-sm text-gray-600">{t('transform_customers')}</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600">3.2m</div>
                    <div className="text-sm text-gray-600">{t('transform_avg_wait')}</div>
                  </div>
                </div>

                {/* Graphique simulé */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{t('transform_queue_performance')}</span>
                    <span>{t('transform_real_time')}</span>
                  </div>
                  <div className="h-32 bg-gradient-to-t from-green-100 to-transparent rounded-lg relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-between px-2">
                      {[40, 65, 45, 80, 60, 90, 75].map((height, i) => (
                        <div 
                          key={i}
                          className="bg-green-500 rounded-t w-6 transition-all duration-1000 ease-out"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contrôles */}
                <div className="flex space-x-3">
                  <button className="flex-1 py-2 px-4 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                    {t('transform_update_config_button')}
                  </button>
                  <button className="flex-1 py-2 px-4 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                    {t('transform_view_analytics_button')}
                  </button>
                </div>
              </div>
            </div>

            {/* Éléments décoratifs */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-200 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-teal-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {t('transform_cta_title')}
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              {t('transform_cta_description')}
            </p>
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 text-lg"
            >
              {t('transform_start_free_trial_button')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transform;


