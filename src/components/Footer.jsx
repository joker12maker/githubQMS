import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Youtube } from 'lucide-react';
import { useTranslation } from 'react-i18next';

/**Pied de page du site
 * Composant Footer - Pied de page du site
 * Contient les liens, informations de contact et newsletter
 */
const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <footer className="bg-gray-900 text-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        {/* Section principale du footer */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Colonne Logo et Description */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SQ</span>
                </div>
                <span className="text-2xl font-bold">SMARTQ-TECH</span>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                {t('agile_queue_management')}
              </p>
              
              {/* Réseaux sociaux */}
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Colonne Products */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">{t('products_footer')}</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">{t('product_paper_ticket_title')}</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">{t('product_digital_ticket_title')}</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">{t('product_whatsapp_ticket_title')}</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">{t('product_appointments_title')}</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">{t('product_signage_player_title')}</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">{t('product_surveys_title')}</a></li>
              </ul>
            </div>

            {/* Colonne Industries */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">{t('industries')}</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">{t('industry_retail_title')}</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">{t('industry_healthcare_title')}</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">{t('industry_banking_title')}</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">{t('industry_telecom_title')}</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">{t('industry_airports_title')}</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">{t('industry_public_title')}</a></li>
              </ul>
            </div>

            {/* Colonne Newsletter et Contact */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">{t('stay_updated')}</h3>
              <p className="text-gray-300">
                {t('subscribe_newsletter')}
              </p>
              
              {/* Formulaire newsletter */}
              <div className="space-y-3">
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder={t('enter_your_email')}
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-green-500 text-white placeholder-gray-400"
                  />
                  <Button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-r-lg">
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-400">
                  {t('by_subscribing_you_agree')}
                </p>
              </div>

              {/* Informations de contact */}
              <div className="space-y-3 pt-4">
                <h4 className="font-semibold text-white">{t('contact_info')}</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">{t('phone_number_value')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">{t('email_address_value')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">{t('address_value')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        {/* Copyright */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 SMARTQ-TECH. {t('all_rights_reserved')}
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">{t('privacy_policy')}</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">{t('terms_of_service')}</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">{t('cookie_policy')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


