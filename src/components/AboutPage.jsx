import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Users, Target, Award, Globe, Calendar, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { number: '50+', label: 'Clients satisfaits' },
    { number: '2M+', label: 'Tickets traités par mois' },
    { number: '50%', label: 'Réduction moyenne du temps d\'attente' },
    { number: '99.9%', label: 'Disponibilité du service' }
  ];

  const team = [
    {
      name: 'Nabil Blel',
      position: 'CEO & Fondateur',
      description: '15 ans d\'expérience dans les solutions d\'entreprise',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Anwer AJILI',
      position: 'CTO',
      description: 'Experte en systèmes distribués et intelligence artificielle',
      image: '/api/placeholder/150/150'
    },
    {
      name: '2B Trading',
      position: 'Directeur Commercial',
      description: 'Spécialiste de la transformation digitale des entreprises',
      image: '/api/placeholder/150/150'
    },
    {
      name: '2B Trading',
      position: 'Directrice Produit',
      description: 'Passionnée d\'UX et d\'innovation technologique',
      image: '/api/placeholder/150/150'
    }
  ];

  const values = [
    {
      icon: Users,
      title: 'Centré Client',
      description: 'Nous plaçons l\'expérience client au cœur de toutes nos innovations'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque solution que nous développons'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Nous innovons constamment pour anticiper les besoins de demain'
    },
    {
      icon: Globe,
      title: 'Accessibilité',
      description: 'Nos solutions sont conçues pour être accessibles à tous'
    }
  ];

  const milestones = [
    {
      year: '2024',
      title: 'Création de SmartQueue',
      description: 'Lancement de la première version de notre système de gestion de file d\'attente'
    },
    {
      year: '2024',
      title: 'Expansion européenne',
      description: 'Déploiement de nos solutions dans 5 pays européens'
    },
    {
      year: '2024',
      title: 'Intelligence Artificielle',
      description: 'Intégration de l\'IA pour la prédiction des flux et l\'optimisation automatique'
    },
    {
      year: '2025',
      title: 'Application Mobile',
      description: 'Lancement de notre application mobile pour une expérience client complète'
    },
    {
      year: '2025',
      title: 'Leader du marché',
      description: 'Plus de 500 clients et 2 millions de tickets traités mensuellement'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4">À Propos</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nous révolutionnons l'expérience d'attente
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Depuis 2023, SmartQueue transforme la façon dont les entreprises gèrent leurs files d'attente. 
            Notre mission est de créer des expériences fluides et efficaces pour tous.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre Mission</h2>
                <p className="text-gray-600 mb-6">
                  Transformer l'expérience d'attente en créant des solutions intelligentes qui optimisent 
                  le temps de vos clients et améliorent l'efficacité de vos opérations.
                </p>
                <p className="text-gray-600">
                  Nous croyons que chaque minute compte et que la technologie peut rendre l'attente 
                  plus agréable et productive pour tous.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre Vision</h2>
                <p className="text-gray-600 mb-6">
                  Devenir la référence mondiale en matière de gestion intelligente de file d'attente, 
                  en proposant des solutions innovantes qui s'adaptent aux besoins de chaque secteur.
                </p>
                <p className="text-gray-600">
                  Nous imaginons un monde où l'attente devient une expérience positive, 
                  informative et personnalisée.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-xl text-gray-600">
              Les principes qui guident notre action au quotidien
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center p-6">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Histoire</h2>
            <p className="text-xl text-gray-600">
              Les étapes clés de notre développement
            </p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center space-x-4 mb-2">
                    <Badge variant="secondary">{milestone.year}</Badge>
                    <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                  </div>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Équipe</h2>
            <p className="text-xl text-gray-600">
              Les experts qui donnent vie à nos solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Rejoignez notre aventure
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Découvrez comment SmartQueue peut transformer votre entreprise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Nous Contacter
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Voir Nos Solutions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

