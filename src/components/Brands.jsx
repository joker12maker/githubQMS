import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Composant Brands - Section des marques utilisant SMARTQ-TECH
 * Affiche les logos des entreprises clientes
 */
const Brands = () => {
  const { t } = useTranslation();

  const brands = [
    
    {
      name: "2B TRADING",
      logo: "2B TRADING",
      color: "from-yellow-500 to-orange-500",
      center: true
    }
    
    
    
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
            {t("brands_section_tag")}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t("brands_section_title_part1")}{" "}
            <span className="text-green-600">{t("brands_section_title_part2")}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("brands_section_description")}
          </p>
        </div>

        {/* Grille des marques */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="group flex items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300"
            >
              {/* Logo simulé */}
              <div className="text-center group-hover:scale-110 transition-transform duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${brand.color} rounded-xl flex items-center justify-center mb-3 mx-auto shadow-lg`}>
                  <span className="text-white font-bold text-sm">
                    {brand.logo.substring(0, 3)}
                  </span>
                </div>
                <div className="text-sm font-semibold text-gray-700 group-hover:text-green-600 transition-colors">
                  {brand.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section de cas d'usage */}
        <div className="mt-20">
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t("brands_success_stories_title")}
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {t("brands_success_stories_description")}
              </p>
            </div>

            {/* Grille des cas d'usage */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Retail */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-sm">RT</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{t("brands_retail_title")}</h4>
                <p className="text-gray-600 mb-4">
                  {t("brands_retail_description")}
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-xs">45%</span>
                  </div>
                  <span className="text-sm text-gray-600">{t("brands_wait_time_reduction")}</span>
                </div>
              </div>

              {/* Healthcare */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-sm">HC</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{t("brands_healthcare_title")}</h4>
                <p className="text-gray-600 mb-4">
                  {t("brands_healthcare_description")}
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xs">70%</span>
                  </div>
                  <span className="text-sm text-gray-600">{t("brands_patient_satisfaction")}</span>
                </div>
              </div>

              {/* Banking */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-sm">BK</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{t("brands_banking_title")}</h4>
                <p className="text-gray-600 mb-4">
                  {t("brands_banking_description")}
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-bold text-xs">35%</span>
                  </div>
                  <span className="text-sm text-gray-600">{t("brands_efficiency_increase")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;


