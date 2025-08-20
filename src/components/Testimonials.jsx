import React from 'react';
import { Quote, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

/**
 * Composant Testimonials - Section des témoignages clients
 * Affiche les avis et retours d'expérience des utilisateurs
 */
const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      quote: t("testimonial_quote_1"),
      author: t("testimonial_author_1"),
      position: t("testimonial_position_1"),
      company: t("testimonial_company_1"),
      rating: 5,
      avatar: "DH"
    },
    {
      quote: t("testimonial_quote_2"),
      author: t("testimonial_author_2"),
      position: t("testimonial_position_2"),
      company: t("testimonial_company_2"),
      rating: 5,
      avatar: "SF"
    },
    {
      quote: t("testimonial_quote_3"),
      author: t("testimonial_author_3"),
      position: t("testimonial_position_3"),
      company: t("testimonial_company_3"),
      rating: 5,
      avatar: "MM"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
            {t("testimonials_section_tag")}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t("testimonials_section_title_part1")}{' '}
            <span className="text-green-600">{t("testimonials_section_title_part2")}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("testimonials_section_description")}
          </p>
        </div>

        {/* Grille des témoignages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200"
            >
              {/* Icône de citation */}
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Étoiles */}
              <div className="flex space-x-1 mb-4">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Citation */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 text-lg">
                "{testimonial.quote}"
              </blockquote>

              {/* Auteur */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-700 font-semibold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.position}
                  </div>
                  <div className="text-sm text-green-600 font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section de statistiques de satisfaction */}
        <div className="mt-16">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                {t("testimonials_trusted_by_leaders")}
              </h3>
              <p className="text-lg text-gray-600">
                {t("testimonials_join_thousands_businesses")}
              </p>
            </div>

            {/* Statistiques */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-sm text-gray-600">{t("testimonials_customer_satisfaction")}</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">2M+</div>
                <div className="text-sm text-gray-600">{t("testimonials_tickets_processed")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">{t("testimonials_support_available")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


