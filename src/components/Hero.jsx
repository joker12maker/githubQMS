import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

/**
 * Composant Hero - Section principale d'accueil
 * Présente le message principal de SMARTQ-TECH avec CTA
 */
const Hero = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="relative pt-24 pb-16 bg-gradient-to-br from-green-50 to-teal-50 overflow-hidden" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu textuel */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t('queue_management')}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
                  {t('customer_journey')}
                </span>{' '}
                {t('solutions')}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('hero_description')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg group"
              >
                {t('discover_solutions')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-green-500 text-green-600 hover:bg-green-50 px-8 py-4 text-lg"
              >
                {t('watch_demo')}
              </Button>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-green-100 to-teal-100 rounded-3xl p-8 shadow-2xl">
              {/* Simulation d'écrans et dispositifs */}
              <div className="space-y-6">
                {/* Écran principal */}
                <div className="bg-white rounded-xl shadow-lg p-6 transform rotate-2">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-500">{t('smartq_tech_dashboard')}</div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-20 bg-gradient-to-r from-green-100 to-teal-100 rounded"></div>
                  </div>
                </div>

                {/* Ticket mobile */}
                <div className="bg-white rounded-lg shadow-lg p-4 transform -rotate-1 w-48 ml-auto">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">A001</div>
                    <div className="text-sm text-gray-600">{t('your_ticket_number')}</div>
                    <div className="mt-3 h-2 bg-green-200 rounded-full">
                      <div className="h-2 bg-green-600 rounded-full w-2/3"></div>
                    </div>
                  </div>
                </div>

                {/* Statistiques */}
                <div className="bg-white rounded-lg shadow-lg p-4 transform rotate-1 w-56">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">45%</div>
                      <div className="text-xs text-gray-600">{t('wait_time_reduction')}</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-teal-600">70%</div>
                      <div className="text-xs text-gray-600">{t('no_show_decrease')}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Éléments décoratifs */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-teal-200 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Éléments de fond décoratifs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-teal-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default Hero;


