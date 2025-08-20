import React from 'react';
import { Ticket, Smartphone, MessageSquare, Calendar, Monitor, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

/**
 * Composant Products - Section des produits Customer Journey
 * Affiche les 6 produits principaux de SMARTQ-TECH
 */
const Products = () => {
  const { t, i18n } = useTranslation();

  const products = [
    {
      icon: Ticket,
      title: t('product_paper_ticket_title'),
      description: t('product_paper_ticket_description'),
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Smartphone,
      title: t('product_digital_ticket_title'),
      description: t('product_digital_ticket_description'),
      color: "from-green-500 to-green-600"
    },
    {
      icon: MessageSquare,
      title: t('product_whatsapp_ticket_title'),
      description: t('product_whatsapp_ticket_description'),
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Calendar,
      title: t('product_appointments_title'),
      description: t('product_appointments_description'),
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Monitor,
      title: t('product_signage_player_title'),
      description: t('product_signage_player_description'),
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: MessageCircle,
      title: t('product_surveys_title'),
      description: t('product_surveys_description'),
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
            {t('products_section_tag')}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('products_section_title_part1')}{' '}
            <span className="text-green-600">
              {t('products_section_title_part2')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('products_section_description')}
          </p>
        </div>

        {/* Grille des produits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300"
              >
                {/* Icône */}
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Contenu */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Indicateur hover */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-1 bg-gradient-to-r from-green-400 to-teal-400 rounded-full"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Robot de Réception */}
        <div className="mt-20 bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contenu textuel */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium">
                🤖 Innovation
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {t('robot_reception_title')}
              </h3>
              
              <div 
                className="text-lg text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: t('robot_reception_description').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                }}
              />
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">
                  {t('robot_features_title')}
                </h4>
                <ul className="space-y-3">
                  {[
                    'robot_feature_greeting',
                    'robot_feature_guidance', 
                    'robot_feature_faq',
                    'robot_feature_presentation',
                    'robot_feature_patrol',
                    'robot_feature_display',
                    'robot_feature_integration'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span 
                        className="text-gray-700"
                        dangerouslySetInnerHTML={{
                          __html: t(feature).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              
              <div 
                className="text-gray-600 italic border-l-4 border-green-400 pl-4"
                dangerouslySetInnerHTML={{
                  __html: t('robot_conclusion').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                }}
              />
            </div>

            {/* Image du robot */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/smartq-reception-robot-in-action.png" 
                  alt="Robot de Réception SMARTQ-TECH en action"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay avec logo */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <span className="text-sm font-semibold text-gray-800">SMARTQ-TECH</span>
                </div>
              </div>
              
              {/* Éléments décoratifs */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;


