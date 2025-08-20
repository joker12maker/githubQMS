import React from 'react';
import { QrCode, Smartphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

/** PARTIE MOBILE
 * Composant Experience - Section d'expérience du ticketing digital
 * Présente le QR code et l'expérience mobile
 */
const Experience = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenu textuel */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium">
                {t('experience_digital_experience_tag')}
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {t('experience_title_part1')}{' '}
                <span className="text-green-600">{t('experience_title_part2')}</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('experience_description')}
              </p>
            </div>

            {/* Avantages du ticketing digital */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/50">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{t('experience_contactless_title')}</h4>
                  <p className="text-gray-600">{t('experience_contactless_description')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/50">
                <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <QrCode className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{t('experience_real_time_updates_title')}</h4>
                  <p className="text-gray-600">{t('experience_real_time_updates_description')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/50">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">24/7</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{t('experience_always_available_title')}</h4>
                  <p className="text-gray-600">{t('experience_always_available_description')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* QR Code et simulation mobile */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
              {/* QR Code principal */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{t('experience_scan_to_experience_title')}</h3>
                
                {/* QR Code simulé */}
                <div className="inline-block p-6 bg-gray-50 rounded-2xl">
                  <div className="w-48 h-48 bg-white border-2 border-gray-200 rounded-xl relative overflow-hidden">
                    {/* Pattern QR Code simulé */}
                    <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-px p-2">
                      {Array.from({ length: 144 }, (_, i) => (
                        <div
                          key={i}
                          className={`${
                            Math.random() > 0.5 ? 'bg-gray-900' : 'bg-white'
                          } rounded-sm`}
                        ></div>
                      ))}
                    </div>
                    
                    {/* Coins de positionnement */}
                    <div className="absolute top-2 left-2 w-8 h-8 border-4 border-gray-900 rounded">
                      <div className="w-2 h-2 bg-gray-900 rounded m-1"></div>
                    </div>
                    <div className="absolute top-2 right-2 w-8 h-8 border-4 border-gray-900 rounded">
                      <div className="w-2 h-2 bg-gray-900 rounded m-1"></div>
                    </div>
                    <div className="absolute bottom-2 left-2 w-8 h-8 border-4 border-gray-900 rounded">
                      <div className="w-2 h-2 bg-gray-900 rounded m-1"></div>
                    </div>
                    
                    {/* Logo SMARTQ-TECH au centre */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">SQ</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mt-4">
                  {t('experience_scan_qr_description')}
                </p>
              </div>

              {/* Simulation d'écran mobile */}
              <div className="relative mx-auto w-64">
                <div className="bg-gray-900 rounded-3xl p-2 shadow-xl">
                  <div className="bg-white rounded-2xl overflow-hidden">
                    {/* Status bar */}
                    <div className="bg-gray-50 px-4 py-2 flex justify-between items-center text-xs">
                      <span className="font-medium">9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                        <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                        <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* App content */}
                    <div className="p-4 space-y-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-green-600 rounded-xl mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white font-bold">SQ</span>
                        </div>
                        <h4 className="font-bold text-gray-900">SMARTQ-TECH</h4>
                      </div>
                      
                      <div className="bg-green-50 rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-green-600 mb-1">A042</div>
                        <div className="text-sm text-gray-600 mb-2">{t('experience_your_ticket_number')}</div>
                        <div className="text-xs text-green-600 font-medium">{t('experience_people_ahead')}</div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">{t('experience_estimated_wait')}:</span>
                          <span className="font-medium text-gray-900">{t('experience_wait_time')}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full w-3/4 transition-all duration-1000"></div>
                        </div>
                      </div>
                      
                      <button className="w-full bg-green-600 text-white py-3 rounded-xl font-medium">
                        {t('experience_get_directions_button')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Éléments décoratifs */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-200 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-teal-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
            
            {/* Icônes flottantes */}
            <div className="absolute top-10 left-10 w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center animate-bounce">
              <Smartphone className="w-4 h-4 text-white" />
            </div>
            <div className="absolute bottom-20 right-10 w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center animate-bounce delay-500">
              <QrCode className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;


