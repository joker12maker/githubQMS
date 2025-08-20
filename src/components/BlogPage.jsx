import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const BlogPage = () => {
  const featuredPost = {
    id: 1,
    title: 'L\'avenir de la gestion de file d\'attente : Intelligence Artificielle et prédiction des flux',
    excerpt: 'Découvrez comment l\'IA révolutionne la gestion des files d\'attente en prédisant les affluences et en optimisant automatiquement les ressources.',
    author: 'Marie Lecomte',
    date: '15 Mars 2025',
    readTime: '8 min',
    category: 'Innovation',
    image: '/api/placeholder/600/300'
  };

  const posts = [
    {
      id: 2,
      title: '10 bonnes pratiques pour optimiser l\'expérience client en salle d\'attente',
      excerpt: 'Des conseils pratiques pour transformer votre salle d\'attente en un espace accueillant et efficace.',
      author: 'Pierre Martin',
      date: '10 Mars 2025',
      readTime: '5 min',
      category: 'Conseils',
      image: '/api/placeholder/400/200'
    },
    {
      id: 3,
      title: 'Étude de cas : Comment la Banque Centrale a réduit ses temps d\'attente de 60%',
      excerpt: 'Retour d\'expérience détaillé sur l\'implémentation de SmartQueue dans un environnement bancaire.',
      author: 'Sophie Laurent',
      date: '5 Mars 2025',
      readTime: '7 min',
      category: 'Étude de cas',
      image: '/api/placeholder/400/200'
    },
    {
      id: 4,
      title: 'Les tendances 2025 en matière de digitalisation des services publics',
      excerpt: 'Analyse des évolutions technologiques qui transforment l\'accueil dans les administrations.',
      author: 'Jean-Pierre Dubois',
      date: '1 Mars 2025',
      readTime: '6 min',
      category: 'Tendances',
      image: '/api/placeholder/400/200'
    },
    {
      id: 5,
      title: 'Intégration API : Connecter SmartQueue à votre système existant',
      excerpt: 'Guide technique pour intégrer nos solutions à votre infrastructure informatique actuelle.',
      author: 'Marie Lecomte',
      date: '25 Février 2025',
      readTime: '10 min',
      category: 'Technique',
      image: '/api/placeholder/400/200'
    },
    {
      id: 6,
      title: 'ROI et métriques : Mesurer l\'impact de votre système de gestion de file d\'attente',
      excerpt: 'Les indicateurs clés pour évaluer le retour sur investissement de votre solution.',
      author: 'Pierre Martin',
      date: '20 Février 2025',
      readTime: '4 min',
      category: 'Business',
      image: '/api/placeholder/400/200'
    },
    {
      id: 7,
      title: 'Accessibilité et inclusion : Concevoir des kiosques pour tous',
      excerpt: 'Comment nos solutions prennent en compte les besoins de tous les utilisateurs.',
      author: 'Sophie Laurent',
      date: '15 Février 2025',
      readTime: '6 min',
      category: 'Accessibilité',
      image: '/api/placeholder/400/200'
    }
  ];

  const categories = [
    'Tous',
    'Innovation',
    'Conseils',
    'Étude de cas',
    'Tendances',
    'Technique',
    'Business',
    'Accessibilité'
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Innovation': 'bg-purple-100 text-purple-800',
      'Conseils': 'bg-green-100 text-green-800',
      'Étude de cas': 'bg-blue-100 text-blue-800',
      'Tendances': 'bg-orange-100 text-orange-800',
      'Technique': 'bg-gray-100 text-gray-800',
      'Business': 'bg-red-100 text-red-800',
      'Accessibilité': 'bg-teal-100 text-teal-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4">Blog</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ressources et Actualités
          </h1>
          <p className="text-xl text-gray-600">
            Découvrez nos derniers articles, études de cas et conseils d'experts 
            pour optimiser votre gestion de file d'attente.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'Tous' ? 'default' : 'outline'}
                size="sm"
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Article à la une</h2>
          </div>
          
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-gray-200 aspect-video lg:aspect-auto"></div>
              <CardContent className="p-8">
                <Badge className={`mb-4 ${getCategoryColor(featuredPost.category)}`}>
                  {featuredPost.category}
                </Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-primary transition-colors cursor-pointer">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Lire la suite <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Derniers articles</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="bg-gray-200 aspect-video"></div>
                <CardContent className="p-6">
                  <Badge className={`mb-3 ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </Badge>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Restez informé de nos dernières actualités
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Recevez nos articles, études de cas et conseils d'experts directement dans votre boîte mail
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
            />
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              S'abonner
            </Button>
          </div>
          <p className="text-sm text-blue-100 mt-4">
            Pas de spam, désabonnement possible à tout moment
          </p>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ressources complémentaires</h2>
            <p className="text-xl text-gray-600">
              Explorez nos autres contenus pour approfondir vos connaissances
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Webinaires</h3>
                <p className="text-gray-600 mb-4">
                  Participez à nos sessions en ligne pour découvrir nos solutions en détail
                </p>
                <Button variant="outline">Voir les webinaires</Button>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Guides pratiques</h3>
                <p className="text-gray-600 mb-4">
                  Téléchargez nos guides détaillés pour optimiser votre gestion de file d'attente
                </p>
                <Button variant="outline">Télécharger</Button>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Études de cas</h3>
                <p className="text-gray-600 mb-4">
                  Découvrez comment nos clients ont transformé leur expérience client
                </p>
                <Button variant="outline">Lire les cas clients</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;

