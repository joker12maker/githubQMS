import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Clock, Users, TrendingUp, Monitor, Smartphone, BarChart3, Settings, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const benefits = [
    {
      icon: Clock,
      percentage: '50%',
      title: 'Réduction du temps d\'attente',
      description: 'Diminuez significativement les temps d\'attente de vos clients'
    },
    {
      icon: Users,
      percentage: '97%',
      title: 'Satisfaction client améliorée',
      description: 'Augmentez la satisfaction de vos clients avec une expérience fluide'
    },
    {
      icon: TrendingUp,
      percentage: '75%',
      title: 'Optimisation des opérations',
      description: 'Optimisez vos processus et réduisez les coûts opérationnels'
    }
  ];

  const products = [
    {
      id: 'kiosks',
      icon: Monitor,
      title: 'Kiosques en Libre-Service',
      description: 'Kiosques interactifs avec scanner QR, imprimante et interface multilingue',
      image: '/src/assets/images/kiosk_product.png'
    },
    {
      id: 'agent-apps',
      icon: Settings,
      title: 'Applications Agent',
      description: 'Interface de contrôle de file d\'attente pour vos agents',
      image: '/src/assets/images/dashboard.webp'
    },
    {
      id: 'displays',
      icon: Monitor,
      title: 'Écrans de Salle d\'Attente',
      description: 'Affichage des numéros de ticket et signalétique dynamique',
      image: '/src/assets/images/hero_waiting_room.png'
    },
    {
      id: 'dashboard',
      icon: BarChart3,
      title: 'Tableau de Bord Admin',
      description: 'KPIs, alertes et gestion des rôles d\'accès',
      image: '/src/assets/images/dashboard.webp'
    },
    {
      id: 'mobile-app',
      icon: Smartphone,
      title: 'Application Mobile',
      description: 'Réservation, suivi d\'attente et feedback client',
      image: '/src/assets/images/mobile_app.png'
    }
  ];

  const testimonials = [
    {
      name: 'Anwer AJILI',
      position: 'Directrice Opérationnelle',
      company: 'Banque Centrale',
      content: 'SmartQueue a révolutionné notre gestion de file d\'attente. Nos clients sont plus satisfaits et nos opérations plus efficaces.',
      rating: 5
    },
    {
      name: 'Anwer AJILI',
      position: 'Responsable IT',
      company: 'Hôpital Sahloul',
      content: 'L\'implémentation a été simple et les résultats immédiats. Nous recommandons vivement SmartQueue.',
      rating: 5
    },
    {
      name: 'Anwer AJILI',
      position: 'Chef de Projet',
      company: 'Mairie de Gafsa',
      content: 'Une solution complète qui s\'adapte parfaitement à nos besoins. Le support client est exceptionnel.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Optimisez l'expérience client avec des solutions{' '}
                <span className="text-primary">intelligentes</span> de gestion de file d'attente
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transformez votre gestion de file d'attente avec nos solutions innovantes. 
                Réduisez les temps d'attente, améliorez la satisfaction client et optimisez vos opérations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Demander une Démo Gratuite
                </Button>
                <Button size="lg" variant="outline">
                  Voir Nos Produits en Action
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/src/assets/images/hero_waiting_room.png" 
                alt="Salle d'attente moderne avec écrans digitaux"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Des résultats mesurables
            </h2>
            <p className="text-xl text-gray-600">
              Nos clients constatent des améliorations significatives dès la première semaine
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{benefit.percentage}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Notre écosystème complet
            </h2>
            <p className="text-xl text-gray-600">
              Des kiosques aux applications mobiles, découvrez toutes nos solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              const IconComponent = product.icon;
              return (
                <Card key={product.id} className="hover:shadow-lg transition-shadow group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <Link 
                      to={`/products/${product.id}`}
                      className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                    >
                      En savoir plus →
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-gray-600">
              Plus de 500 entreprises nous font confiance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.position}</div>
                    <div className="text-sm text-primary">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Prêt à transformer votre expérience client ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Rejoignez des centaines d'entreprises qui ont déjà optimisé leur gestion de file d'attente
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Demander une Démo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Essai Gratuit 14 Jours
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

