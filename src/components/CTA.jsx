import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';

/**
 * Composant CTA - Section d'appel à l'action finale
 * Encourage les utilisateurs à réserver une démo
 */
const CTA = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  return (
    <section className="py-20 bg-gradient-to-br from-green-600 to-teal-600">
      <div className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Contenu textuel */}
          <div className="space-y-8 text-white" dir={isRTL ? 'rtl' : 'ltr'}>
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium">
                {t('ready_to_transform')}
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                {t('see_smartq_tech')}{' '}
                <span className="text-green-200">{t('in_action')}</span>
              </h2>
              
              <p className="text-xl text-green-100 leading-relaxed">
                {t('cta_description')}
              </p>
            </div>

            {/* Avantages de la démo */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4" style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                <div className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-700 text-xs font-bold">✓</span>
                </div>
                <div style={{ textAlign: isRTL ? 'right' : 'left' }}>
                  <h4 className="font-semibold text-white mb-1">{t('personalized_demo_title')}</h4>
                  <p className="text-green-100">{t('personalized_demo_description')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4" style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                <div className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-700 text-xs font-bold">✓</span>
                </div>
                <div style={{ textAlign: isRTL ? 'right' : 'left' }}>
                  <h4 className="font-semibold text-white mb-1">{t('expert_consultation_title')}</h4>
                  <p className="text-green-100">{t('expert_consultation_description')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4" style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                <div className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-700 text-xs font-bold">✓</span>
                </div>
                <div style={{ textAlign: isRTL ? 'right' : 'left' }}>
                  <h4 className="font-semibold text-white mb-1">{t('implementation_roadmap_title')}</h4>
                  <p className="text-green-100">{t('implementation_roadmap_description')}</p>
                </div>
              </div>
            </div>

            {/* Boutons d'action */}
            <div className={`flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} sm:flex-row gap-4 pt-4`}>
              <Button 
                size="lg" 
                className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg group font-semibold"
              >
                <Calendar className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t('book_a_demo_button')}
                <ArrowRight className={`h-5 w-5 group-hover:${isRTL ? '-translate-x-1' : 'translate-x-1'} transition-transform ${isRTL ? 'mr-2' : 'ml-2'}`} />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg group"
              >
                <Play className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t('watch_video_button')}
              </Button>
            </div>
          </div>

          {/* Illustration/Mockup */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              {/* Logo SMARTQ-TECH */}
              <div className="text-center mb-8" dir={isRTL ? 'rtl' : 'ltr'}>
                <div className="inline-flex items-center space-x-3 mb-4" style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <span className="text-green-600 font-bold text-lg">SQ</span>
                  </div>
                  <span className="text-2xl font-bold text-white">SMARTQ-TECH</span>
                </div>
                <p className="text-green-100">
                  {t('agile_queue_management')}
                </p>
              </div>

              {/* Formulaire de démo simulé */}
              <div className="bg-white rounded-2xl p-6 shadow-xl" dir={isRTL ? 'rtl' : 'ltr'}>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {t('book_your_demo_title')}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('choose_day_time')}
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Mon', 'Tue', 'Wed'].map((day) => (
                        <button 
                          key={day}
                          className="py-2 px-3 text-sm border border-gray-200 rounded-lg hover:border-green-500 hover:text-green-600 transition-colors"
                        >
                          {t(day.toLowerCase())}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('preferred_time')}
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {['10:00 AM', '2:00 PM'].map((time) => (
                        <button 
                          key={time}
                          className="py-2 px-3 text-sm border border-gray-200 rounded-lg hover:border-green-500 hover:text-green-600 transition-colors"
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors">
                    {t('schedule_demo_button')}
                  </button>
                </div>
              </div>
            </div>

            {/* Éléments décoratifs */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-white/20 rounded-full animate-pulse delay-1000"></div>
            
            {/* Icônes flottantes */}
            <div className="absolute top-10 left-10 w-8 h-8 bg-white/30 rounded-lg flex items-center justify-center animate-bounce">
              <Calendar className="w-4 h-4 text-white" />
            </div>
            <div className="absolute bottom-20 right-10 w-8 h-8 bg-white/30 rounded-lg flex items-center justify-center animate-bounce delay-500">
              <Play className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Statistiques de confiance */}
        <div className="mt-20 text-center" dir={isRTL ? 'rtl' : 'ltr'}>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{t('demo_duration_value')}</div>
              <div className="text-green-200">{t('demo_duration_label')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{t('no_cost_value')}</div>
              <div className="text-green-200">{t('no_cost_label')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{t('support_available_value')}</div>
              <div className="text-green-200">{t('support_available_label')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{t('happy_clients_value')}</div>
              <div className="text-green-200">{t('happy_clients_label')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;



