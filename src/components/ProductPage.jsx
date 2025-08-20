import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Play, Check, Star, Building, Hospital, Landmark, Users, Clock, Shield, Smartphone } from 'lucide-react';

const ProductPage = () => {
  const { productId } = useParams();

  const products = {
    'kiosks': {
      title: 'Kiosques en Libre-Service',
      subtitle: 'Solutions interactives pour l\'autonomie client',
      description: 'Nos kiosques en libre-service permettent à vos clients de s\'enregistrer, obtenir leur ticket et accéder aux services de manière autonome. Équipés de technologies avancées, ils offrent une expérience utilisateur intuitive et multilingue.',
      image: '/src/assets/images/kiosk_product.png',
      features: [
        'Scanner QR code intégré',
        'Imprimante thermique haute qualité',
        'Interface multilingue (10+ langues)',
        'Écran tactile 21.5" haute résolution',
        'Clavier physique optionnel',
        'Lecteur de cartes magnétiques',
        'Caméra pour identification',
        'Connectivité WiFi et Ethernet'
      ],
      useCases: [
        { icon: Building, title: 'Banques', description: 'Enregistrement client et sélection de services bancaires' },
        { icon: Hospital, title: 'Hôpitaux', description: 'Check-in patient et orientation vers les services' },
        { icon: Landmark, title: 'Administrations', description: 'Prise de rendez-vous et orientation citoyenne' }
      ],
      specifications: [
        { label: 'Dimensions', value: '180cm x 60cm x 40cm' },
        { label: 'Écran', value: '21.5" Full HD tactile capacitif' },
        { label: 'Processeur', value: 'Intel Core i5 8ème génération' },
        { label: 'Mémoire', value: '8GB RAM, 256GB SSD' },
        { label: 'Connectivité', value: 'WiFi 6, Ethernet, Bluetooth' },
        { label: 'Alimentation', value: '220V, consommation 150W' }
      ],
      testimonials: [
        {
          name: 'Anwer AJILI',
          position: 'Directeur Agence',
          company: 'Crédit Agricole',
          content: 'Les kiosques ont réduit notre temps d\'attente de 40% et amélioré l\'expérience client.',
          rating: 5
        }
      ]
    },
    'agent-apps': {
      title: 'Applications Agent',
      subtitle: 'Interface de contrôle pour vos équipes',
      description: 'Donnez à vos agents les outils nécessaires pour gérer efficacement les files d\'attente. Notre interface intuitive permet un contrôle complet du flux client avec des fonctionnalités avancées de priorisation et de gestion.',
      image: '/src/assets/images/dashboard.webp',
      features: [
        'Interface de contrôle de file intuitive',
        'Gestion des priorités client',
        'Appel de ticket personnalisé',
        'Statistiques en temps réel',
        'Gestion multi-services',
        'Notifications et alertes',
        'Mode pause et transfert',
        'Historique des transactions'
      ],
      useCases: [
        { icon: Users, title: 'Centres de Service', description: 'Gestion optimisée des files d\'attente multi-services' },
        { icon: Building, title: 'Bureaux d\'Accueil', description: 'Coordination des équipes et répartition des charges' },
        { icon: Clock, title: 'Services Express', description: 'Traitement rapide et priorisation intelligente' }
      ],
      specifications: [
        { label: 'Plateforme', value: 'Web responsive, iOS, Android' },
        { label: 'Compatibilité', value: 'Tous navigateurs modernes' },
        { label: 'Synchronisation', value: 'Temps réel via WebSocket' },
        { label: 'Sécurité', value: 'Authentification SSO, chiffrement AES-256' },
        { label: 'Langues', value: 'Interface multilingue (15+ langues)' },
        { label: 'API', value: 'REST API complète pour intégrations' }
      ],
      testimonials: [
        {
          name: 'Marie Leroy',
          position: 'Responsable Accueil',
          company: 'Pôle Emploi',
          content: 'L\'application agent nous a permis d\'optimiser notre organisation et de mieux servir nos usagers.',
          rating: 5
        }
      ]
    },
    'displays': {
      title: 'Écrans de Salle d\'Attente',
      subtitle: 'Affichage dynamique et informatif',
      description: 'Nos écrans de salle d\'attente offrent un affichage clair et dynamique des informations importantes. Ils guident vos clients et améliorent leur expérience d\'attente avec du contenu personnalisable et des mises à jour en temps réel.',
      image: '/src/assets/images/hero_waiting_room.png',
      features: [
        'Affichage des numéros de ticket en temps réel',
        'Signalétique dynamique personnalisable',
        'Contenu multimédia (vidéos, images)',
        'Messages d\'information et promotions',
        'Temps d\'attente estimé',
        'Orientation vers les guichets',
        'Gestion centralisée du contenu',
        'Programmation horaire automatique'
      ],
      useCases: [
        { icon: Hospital, title: 'Salles d\'Attente Médicales', description: 'Information patient et gestion des rendez-vous' },
        { icon: Building, title: 'Espaces Commerciaux', description: 'Promotion des services et gestion des files' },
        { icon: Landmark, title: 'Espaces Publics', description: 'Information citoyenne et orientation' }
      ],
      specifications: [
        { label: 'Tailles disponibles', value: '32", 43", 55", 65" et plus' },
        { label: 'Résolution', value: '4K Ultra HD (3840x2160)' },
        { label: 'Luminosité', value: '400-700 cd/m² selon modèle' },
        { label: 'Connectivité', value: 'HDMI, USB, WiFi, Ethernet' },
        { label: 'Montage', value: 'Mural, sur pied, suspendu' },
        { label: 'Garantie', value: '3 ans pièces et main d\'œuvre' }
      ],
      testimonials: [
        {
          name: 'Dr. Sophie Martin',
          position: 'Directrice Médicale',
          company: 'Clinique EL YOSER',
          content: 'Les écrans ont transformé notre salle d\'attente. Les patients sont mieux informés et plus détendus.',
          rating: 5
        }
      ]
    },
    'dashboard': {
      title: 'Tableau de Bord Admin',
      subtitle: 'Pilotage et analyse de performance',
      description: 'Notre tableau de bord administrateur vous donne une vue d\'ensemble complète de vos opérations. Analysez les performances, gérez les utilisateurs et optimisez vos processus grâce à des données en temps réel et des rapports détaillés.',
      image: '/src/assets/images/dashboard.webp',
      features: [
        'KPIs et métriques en temps réel',
        'Rapports détaillés et exportables',
        'Alertes et notifications automatiques',
        'Gestion des rôles et permissions',
        'Analyse des tendances et prévisions',
        'Monitoring multi-sites',
        'Configuration système centralisée',
        'Intégration avec systèmes existants'
      ],
      useCases: [
        { icon: Shield, title: 'Management', description: 'Supervision globale et prise de décision stratégique' },
        { icon: Users, title: 'Équipes Opérationnelles', description: 'Suivi des performances et optimisation continue' },
        { icon: Building, title: 'Multi-sites', description: 'Gestion centralisée de plusieurs établissements' }
      ],
      specifications: [
        { label: 'Accès', value: 'Interface web responsive' },
        { label: 'Données', value: 'Stockage sécurisé cloud/on-premise' },
        { label: 'Rapports', value: 'Export PDF, Excel, CSV' },
        { label: 'API', value: 'REST API pour intégrations tierces' },
        { label: 'Sécurité', value: 'Chiffrement bout en bout, audit trail' },
        { label: 'Support', value: '24/7 avec SLA garantie' }
      ],
      testimonials: [
        {
          name: 'Anwer AJILI',
          position: 'Directeur Opérations',
          company: 'Groupe Bancaire',
          content: 'Le dashboard nous permet de piloter efficacement nos 50 agences avec une vision globale.',
          rating: 5
        }
      ]
    },
    'mobile-app': {
      title: 'Application Mobile',
      subtitle: 'L\'expérience client dans la poche',
      description: 'Notre application mobile permet à vos clients de réserver, suivre leur attente et donner leur feedback depuis leur smartphone. Une solution complète pour moderniser l\'expérience client et réduire l\'attente physique.',
      image: '/src/assets/images/mobile_app.png',
      features: [
        'Réservation de créneaux en ligne',
        'Suivi du temps d\'attente en temps réel',
        'Notifications push personnalisées',
        'Système de feedback et évaluation',
        'Géolocalisation des points de service',
        'Historique des visites',
        'Partage de créneaux',
        'Mode hors ligne pour informations essentielles'
      ],
      useCases: [
        { icon: Smartphone, title: 'Clients Finaux', description: 'Réservation et suivi personnalisé de l\'attente' },
        { icon: Building, title: 'Entreprises', description: 'Réduction de l\'affluence et amélioration de l\'expérience' },
        { icon: Clock, title: 'Services Express', description: 'Optimisation des créneaux et réduction des no-shows' }
      ],
      specifications: [
        { label: 'Plateformes', value: 'iOS 12+, Android 8+' },
        { label: 'Taille', value: 'Moins de 50MB' },
        { label: 'Langues', value: '20+ langues supportées' },
        { label: 'Notifications', value: 'Push, SMS, Email' },
        { label: 'Sécurité', value: 'Authentification biométrique' },
        { label: 'Synchronisation', value: 'Temps réel avec le système central' }
      ],
      testimonials: [
        {
          name: 'Anwer AJILI',
          position: 'Responsable Expérience Client',
          company: 'Caisse d\'Épargne',
          content: 'L\'app mobile a révolutionné notre relation client. 85% de nos clients l\'utilisent régulièrement.',
          rating: 5
        }
      ]
    }
  };

  const product = products[productId];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Produit non trouvé</h1>
          <p className="text-gray-600">Le produit demandé n'existe pas.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Produit</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>
              <p className="text-xl text-primary mb-6">{product.subtitle}</p>
              <p className="text-lg text-gray-600 mb-8">{product.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Demander une Démo
                </Button>
                <Button size="lg" variant="outline">
                  Télécharger la Brochure
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.title}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Fonctionnalités principales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.features.map((feature, index) => (
              <Card key={index} className="p-4">
                <CardContent className="pt-4">
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Cas d'usage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.useCases.map((useCase, index) => {
              const IconComponent = useCase.icon;
              return (
                <Card key={index} className="text-center p-8">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                    <p className="text-gray-600">{useCase.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Voir {product.title} en action
          </h2>
          <div className="relative bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Play className="h-6 w-6 mr-2" />
              Lancer la Démonstration
            </Button>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Spécifications techniques
          </h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                    <span className="font-medium text-gray-900">{spec.label}</span>
                    <span className="text-gray-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Témoignage client
          </h2>
          {product.testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.position}</div>
                    <div className="text-sm text-primary">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à découvrir {product.title} ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contactez-nous pour une démonstration personnalisée et un devis sur mesure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Demander une Démo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Obtenir un Devis
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;

