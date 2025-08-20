import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Composant Stats - Section des statistiques
 * Affiche les métriques de performance avec animation de compteur
 */
const Stats = () => {
  const { t, i18n } = useTranslation();
  const [counters, setCounters] = useState({
    waitTime: 0,
    noShows: 0,
    efficiency: 0,
    costReduction: 0
  });

  const finalValues = {
    waitTime: 45,
    noShows: 70,
    efficiency: 35,
    costReduction: 25
  };

  // Animation des compteurs
  useEffect(() => {
    const duration = 2000; // 2 secondes
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalValues).map(key => {
      const finalValue = finalValues[key];
      const increment = finalValue / steps;
      let currentValue = 0;

      return setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
          currentValue = finalValue;
          clearInterval(intervals.find(interval => interval === this));
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(currentValue)
        }));
      }, stepDuration);
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  const stats = [
    {
      value: counters.waitTime,
      suffix: '%',
      label: t('stat_wait_time_reduction'),
      color: 'text-green-600'
    },
    {
      value: counters.noShows,
      suffix: '%',
      label: t('stat_no_shows_decrease'),
      color: 'text-blue-600'
    },
    {
      value: counters.efficiency,
      suffix: '%',
      label: t('stat_staff_efficiency_increase'),
      color: 'text-purple-600'
    },
    {
      value: counters.costReduction,
      suffix: '%',
      label: t('stat_operational_cost_reduction'),
      color: 'text-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('stats_section_title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {t('stats_section_description')}
          </p>
        </div>

        {/* Grille des statistiques */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Valeur principale */}
              <div className="mb-4">
                <span className={`text-6xl font-bold ${stat.color} group-hover:scale-110 transition-transform duration-300 inline-block`}>
                  {stat.value}
                </span>
                <span className={`text-4xl font-bold ${stat.color}`}>
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <p className="text-gray-600 font-medium leading-relaxed">
                {stat.label}
              </p>

              {/* Barre de progression décorative */}
              <div className="mt-6 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${
                    stat.color.includes('green') ? 'from-green-400 to-green-600' :
                    stat.color.includes('blue') ? 'from-blue-400 to-blue-600' :
                    stat.color.includes('purple') ? 'from-purple-400 to-purple-600' :
                    'from-orange-400 to-orange-600'
                  } transition-all duration-1000 ease-out`}
                  style={{ width: `${(stat.value / 100) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;


