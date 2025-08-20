import React from 'react';
import { Zap, Cloud, Globe, Wrench, Shield, Headphones, Code, Monitor } from 'lucide-react';
import { useTranslation } from 'react-i18next';

/**
 * Composant Features - Section des fonctionnalités principales
 * Affiche les 8 avantages clés de SMARTQ-TECH
 */
const Features = () => {
  const { t, i18n } = useTranslation();

  const features = [
    {
      icon: Zap,
      title: t('feature_fast_deployment_title'),
      description: t('feature_fast_deployment_description')
    },
    {
      icon: Cloud,
      title: t('feature_saas_cloud_title'),
      description: t('feature_saas_cloud_description')
    },
    {
      icon: Monitor,
      title: t('feature_web_based_title'),
      description: t('feature_web_based_description')
    },
    {
      icon: Shield,
      title: t('feature_aws_performance_title'),
      description: t('feature_aws_performance_description')
    },
    {
      icon: Globe,
      title: t('feature_globally_available_title'),
      description: t('feature_globally_available_description')
    },
    {
      icon: Wrench,
      title: t('feature_customizable_title'),
      description: t('feature_customizable_description')
    },
    {
      icon: Code,
      title: t('feature_rest_api_title'),
      description: t('feature_rest_api_description')
    },
    {
      icon: Headphones,
      title: t('feature_dedicated_support_title'),
      description: t('feature_dedicated_support_description')
    }
  ];

  return (
    <section className="py-20 bg-white" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('features_section_title_part1')}{' '}
            <span className="text-green-600">
              {t('features_section_title_part2')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features_section_description')}
          </p>
        </div>

        {/* Grille des fonctionnalités */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300"
              >
                {/* Icône */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Contenu */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;


