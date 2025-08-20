import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useTranslation } from 'react-i18next';

/**
 * Page Pricing - Affiche les différents plans tarifaires de SMARTQ-TECH.
 * Inclut les fonctionnalités de chaque plan (Free, Business, Enterprise).
 */
function Pricing() {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <Header />
      <main className="flex-grow py-16 bg-gray-50">
        <section className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{t('simple_pricing')}</h1>
          <p className="text-xl text-gray-600 mb-12">{t('your_guests_define_plan')}</p>

          <div className="flex justify-center mb-12">
            {/* Toggle pour le cycle de facturation (Month/Year) - à implémenter si nécessaire */}
            <span className="text-gray-700">{t('billing_cycle')} - {t('month')} / {t('year')}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan Free */}
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('free')}</h2>
              <p className="text-green-600 text-lg mb-6">1.000 {t('tickets_per_month')}</p>
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg mb-8">{t('request_access')}</Button>
              <ul className="text-left w-full space-y-3">
                <li className="flex items-center text-gray-700"><Check className="text-green-500 mr-2" />{t('cloud_based_access')}</li>
                <li className="flex items-center text-gray-700"><Check className="text-green-500 mr-2" />{t('paper_ticket')}</li>
                <li className="flex items-center text-gray-700"><Check className="text-green-500 mr-2" />{t('digital_ticket')}</li>
                <li className="flex items-center text-gray-700"><Check className="text-green-500 mr-2" />{t('click_collect')}</li>
                <li className="flex items-center text-gray-700"><Check className="text-green-500 mr-2" />{t('surveys')}</li>
                <li className="flex items-center text-gray-700"><Check className="text-green-500 mr-2" />{t('signage_player')}</li>
                <li className="flex items-center text-gray-700"><Check className="text-green-500 mr-2" />{t('concierge')}</li>
                <li className="flex items-center text-gray-700"><Check className="text-green-500 mr-2" />{t('terminal')}</li>
              </ul>
            </div>

            {/* Plan Business */}
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center border-2 border-green-500">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('business')}</h2>
              <p className="text-green-600 text-lg mb-6">50.000 {t('tickets_per_month')}</p>
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg mb-8">{t('contact_sales')}</Button>
              <ul className="text-left w-full space-y-3">
                <li className="flex items-center text-gray-700"><Check className="text-green-500 mr-2" />{t('everything_included_free_plus')}</li>
                <li className="flex items-center text-gray-700"><Check className="text-green-500 mr-2" />{t('appointments_scheduling')}</li>
                <li className="flex items-center text-gray-700"><Check className="text-green-500 mr-2" />{t('sms_ticket')}</li>
                <li className="flex items-center text-gray-700"><Check className="text-green-500 mr-2" />{t('whatsapp_ticket')}</li>
                <li className="flex items-center text-gray-700"><Check className="text-green-500 mr-2" />{t('telegram_ticket')}</li>
                <li className="flex items-center text-gray-700"><Check className="text-green-500 mr-2" />{t('digital_signage_playlist')}</li>
                <li className="flex items-center text-gray-700"><Check className="text-green-500 mr-2" />{t('analytics_access_export')}</li>
                <li className="flex items-center text-gray-700"><Check className="text-green-500 mr-2" />{t('live_occupancy')}</li>
                <li className="flex items-center text-gray-700"><Check className="text-green-500 mr-2" />{t('external_software_integrations')}</li>
                <li className="flex items-center text-gray-700"><Check className="text-green-500 mr-2" />{t('api_full_access')}</li>
              </ul>
            </div>

            {/* Plan Enterprise */}
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('enterprise')}</h2>
              <p className="text-green-600 text-lg mb-6">{t('unlimited_tickets')}</p>
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg mb-8">{t('contact_sales')}</Button>
              <ul className="text-left w-full space-y-3">
                <li className="flex items-center text-gray-700"><Check className="text-green-500 mr-2" />{t('everything_included_business_plus')}</li>
                <li className="flex items-center text-gray-700"><Check className="text-green-500 mr-2" />{t('platform_customization')}</li>
                <li className="flex items-center text-gray-700"><Check className="text-green-500 mr-2" />{t('service_level_agreement')}</li>
                <li className="flex items-center text-gray-700"><Check className="text-green-500 mr-2" />{t('project_analysis')}</li>
                <li className="flex items-center text-gray-700"><Check className="text-green-500 mr-2" />{t('custom_add_ons')}</li>
                <li className="flex items-center text-gray-700"><Check className="text-green-500 mr-2" />{t('guaranteed_uptime')}</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-green-600 text-white py-16 mt-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">{t('join_partner_network')}</h2>
            <p className="text-xl mb-8">{t('discover_partnering')}</p>
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg">{t('become_a_partner')}</Button>
          </div>
        </section>
      </main>
      
    </div>
  );
}

export default Pricing;


