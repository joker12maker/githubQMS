import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@smartqueue.fr',
      description: 'Réponse sous 24h'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+216 97 40 54 60 ',
      description: 'Lun-Ven 9h-18h'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'IMM ELMOEZ B4 SAHLOUL 1\n 4054 SOUSSE, Tunisie',
      description: 'Siège social'
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: 'Lundi - Vendredi\n9h00 - 18h00',
      description: 'Support technique'
    }
  ];

  const offices = [
    {
      city: 'Tunisie',
      address: '123 Avenue des Champs-Élysées\n75008 Paris',
      phone: '+00 23 45 67 89',
      email: 'sousse@smartqueue.fr'
    },
    {
      city: 'Europe',
      address: '45 Rue de la République\n69002 Lyon',
      phone: '+00 78 90 12 34',
      email: 'europe@smartqueue.fr'
    },
    {
      city: 'Qatar',
      address: '78 La Canebière\n13001 Qatar',
      phone: '+4 91 23 45 67',
      email: 'qatar@smartqueue.qr'
    }
  ];

  const faqs = [
    {
      question: 'Combien de temps faut-il pour installer SmartQueue ?',
      answer: 'L\'installation complète prend généralement entre 2 et 5 jours selon la taille de votre établissement et la complexité de votre configuration.'
    },
    {
      question: 'Proposez-vous une formation pour nos équipes ?',
      answer: 'Oui, nous incluons une formation complète pour vos équipes dans tous nos packages. Nous proposons également un support continu.'
    },
    {
      question: 'SmartQueue peut-il s\'intégrer à nos systèmes existants ?',
      answer: 'Absolument. Nos solutions sont conçues pour s\'intégrer facilement à la plupart des systèmes existants via nos APIs robustes.'
    },
    {
      question: 'Quel est le coût de maintenance ?',
      answer: 'Nos contrats de maintenance commencent à partir de 200€/mois et incluent le support technique, les mises à jour et la maintenance préventive.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4">Contact</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Parlons de votre projet
          </h1>
          <p className="text-xl text-gray-600">
            Notre équipe d'experts est là pour vous accompagner dans la transformation 
            de votre gestion de file d'attente. Contactez-nous pour une consultation gratuite.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Demander une démonstration
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email professionnel *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="votre.email@entreprise.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Entreprise *
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+216 23 45 67 89"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet de votre demande
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez un sujet" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="demo">Demande de démonstration</SelectItem>
                      <SelectItem value="quote">Demande de devis</SelectItem>
                      <SelectItem value="support">Support technique</SelectItem>
                      <SelectItem value="partnership">Partenariat</SelectItem>
                      <SelectItem value="other">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Décrivez votre projet et vos besoins..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="h-5 w-5 mr-2" />
                  Envoyer ma demande
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  En soumettant ce formulaire, vous acceptez notre politique de confidentialité. 
                  Nous nous engageons à ne pas partager vos données.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Nos coordonnées
              </h2>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={index} className="p-6">
                      <CardContent className="pt-0">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                            <p className="text-gray-700 whitespace-pre-line">{info.content}</p>
                            <p className="text-sm text-gray-500 mt-1">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Chat Support */}
              <Card className="p-6 bg-primary text-white">
                <CardContent className="pt-0">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Chat en direct</h3>
                      <p className="text-blue-100 mb-3">
                        Besoin d'aide immédiate ? Chattez avec notre équipe support.
                      </p>
                      <Button variant="secondary" size="sm" className="bg-white text-primary hover:bg-gray-100">
                        Démarrer le chat
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos bureaux</h2>
            <p className="text-xl text-gray-600">
              Retrouvez-nous dans nos différents bureaux en Tunisie
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="p-6 text-center">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{office.city}</h3>
                  <div className="space-y-3 text-gray-600">
                    <p className="whitespace-pre-line">{office.address}</p>
                    <p>{office.phone}</p>
                    <p className="text-primary">{office.email}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions fréquentes</h2>
            <p className="text-xl text-gray-600">
              Trouvez rapidement les réponses à vos questions
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Vous ne trouvez pas la réponse à votre question ?</p>
            <Button variant="outline">
              Voir toutes les FAQ
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à commencer ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Planifiez une démonstration personnalisée et découvrez comment SmartQueue 
            peut transformer votre entreprise dès aujourd'hui.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Planifier une démo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Appeler maintenant
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

