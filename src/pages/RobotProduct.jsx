import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Check, Star, Shield, Zap, Users, Navigation, Mic, Eye, Info, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useTranslation } from 'react-i18next';

/**
 * Page RobotProduct - Page produit dédiée au Robot de Réception SMARTQ-TECH
 * Inspirée de la structure de la page Timo AI avec un design moderne
 */
function RobotProduct() {
  const { i18n } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(0);

  const productImages = [
    '/smartq-reception-robot-in-action.png',
    '/smartq-robot-avatar.png'
  ];

  const features = [
    {
      icon: Mic,
      title: 'Interaction vocale intelligente',
      description: 'IA vocale développée en interne avec compréhension sémantique naturelle et communication efficace',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Accueil intelligent',
      description: 'Porte-parole promotionnel basé sur l\'intelligence artificielle avec vidéo promotionnelle intégrée',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Navigation,
      title: 'Service de visite guidée',
      description: 'Guide les visiteurs vers des emplacements désignés et fournit des explications détaillées',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Évitement d\'obstacles autonome',
      description: 'Technologie Lidar SLAM avancée pour contourner facilement les obstacles et replanifier le chemin',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const specifications = [
    { label: 'Modèle', value: 'SMARTQ Robot de Réception' },
    { label: 'Matériau', value: 'ABS écologique' },
    { label: 'Poids', value: '19KG' },
    { label: 'Taille d\'écran', value: '13.3 pouces' },
    { label: 'Vitesse', value: '0-1.2m/s' },
    { label: 'Précision de positionnement', value: '±50mm' },
    { label: 'Capacité de batterie', value: '15Ah' },
    { label: 'Temps de charge', value: '2-3h' },
    { label: 'Autonomie', value: '8-10h' },
    { label: 'Méthode de navigation', value: 'Navigation laser autonome' },
    { label: 'Système de contrôle', value: 'Android' }
  ];

  return (
    <div className="min-h-screen flex flex-col" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <Header />
      
      <main className="flex-grow">
        {/* Section Hero */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Images du produit */}
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src={productImages[selectedImage]} 
                    alt="Robot de Réception SMARTQ-TECH"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Nouveau
                  </div>
                </div>
                
                {/* Miniatures */}
                <div className="flex space-x-4">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index 
                          ? 'border-green-500 shadow-lg' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img src={image} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Informations produit */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Robot de Réception Intelligent SMARTQ-TECH
                  </h1>
                  <p className="text-xl text-gray-600 mb-6">
                    Élevez l'expérience client dans les hôtels, aéroports et au-delà
                  </p>
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600">(4.8/5 - 127 avis)</span>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-green-600">8 100,00 €</span>
                    <div className="text-sm text-gray-600">
                      <div>✓ Livraison gratuite</div>
                      <div>✓ 7-10 jours + 5-6 semaines de transit</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg">
                      Demander un devis
                    </Button>
                    <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50 py-3">
                      Réserver une démonstration
                    </Button>
                  </div>
                </div>

                {/* Points clés */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">Navigation autonome</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">Reconnaissance vocale</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">Reconnaissance faciale</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">Services d'information</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Description */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Description du produit
              </h2>
              
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Robot de Service IA SMARTQ-TECH
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Conçu pour guider de manière transparente les clients à travers toute expérience en planifiant 
                  de manière indépendante les itinéraires de visite et en répondant aux questions des clients en temps réel.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Fonctionnalités principales</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="w-4 h-4 text-green-500" />
                        <span>Navigation autonome</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="w-4 h-4 text-green-500" />
                        <span>Reconnaissance vocale</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="w-4 h-4 text-green-500" />
                        <span>Reconnaissance faciale</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="w-4 h-4 text-green-500" />
                        <span>Services d'information</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Services clés</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="w-4 h-4 text-green-500" />
                        <span>Service client personnalisé</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="w-4 h-4 text-green-500" />
                        <span>Ventes améliorées</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ArrowRight className="w-4 h-4 text-green-500" />
                        <span>Services de consultation professionnelle</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Spécifications */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Paramètres techniques
              </h2>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-blue-600 text-white p-4">
                  <h3 className="text-xl font-bold">Spécifications</h3>
                </div>
                
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                        <span className="font-medium text-gray-700">{spec.label}</span>
                        <span className="text-gray-900 font-semibold">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Fonctionnalités */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Fonctionnalités avancées
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-3">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Section CTA */}
        <section className="py-16 bg-gradient-to-br from-green-600 to-teal-600">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Prêt à transformer votre accueil ?
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Découvrez comment notre robot de réception peut révolutionner l'expérience de vos visiteurs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg">
                  Demander un devis personnalisé
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg">
                  Voir une démonstration
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default RobotProduct;

