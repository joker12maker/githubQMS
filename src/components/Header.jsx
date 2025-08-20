import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

/**
 * Composant Header - Navigation principale du site
 * Inclut le logo SMARTQ-TECH, le menu de navigation, les boutons d'action et le sélecteur de langue.
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { i18n, t } = useTranslation();

  // Effet pour détecter le scroll et ajouter une classe sticky
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effet pour gérer la direction du texte (RTL/LTR) en fonction de la langue
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">SQ</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">SMARTQ-TECH</span>
          </Link>

          {/* Sélecteur de langue (Haut à droite) */}
          <div className="absolute top-4 right-4">
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              value={i18n.language}
              className="bg-gray-100 border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="ar">العربية</option>
            </select>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              {t('home')}
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              {t('products')}
            </Link>
            <Link to="/industries" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              {t('industries')}
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              {t('pricing')}
            </Link>
            <Link to="/resources" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              {t('resources')}
            </Link>
          </nav>

          {/* Boutons d'action Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/book-a-demo">
              <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                {t('book_a_demo')}
              </Button>
            </Link>
            <Link to="/contact-us">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                {t('contact_us')}
              </Button>
            </Link>
          </div>

          {/* Menu Mobile */}
          <button 
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <nav className="flex flex-col p-4 space-y-4">
              <Link to="/" className="text-gray-700 hover:text-green-600 font-medium py-2" onClick={toggleMenu}>
                {t('home')}
              </Link>
              <Link to="/products" className="text-gray-700 hover:text-green-600 font-medium py-2" onClick={toggleMenu}>
                {t('products')}
              </Link>
              <Link to="/industries" className="text-gray-700 hover:text-green-600 font-medium py-2" onClick={toggleMenu}>
                {t('industries')}
              </Link>
              <Link to="/pricing" className="text-gray-700 hover:text-green-600 font-medium py-2" onClick={toggleMenu}>
                {t('pricing')}
              </Link>
              <Link to="/resources" className="text-gray-700 hover:text-green-600 font-medium py-2" onClick={toggleMenu}>
                {t('resources')}
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Link to="/book-a-demo" onClick={toggleMenu}>
                  <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50 w-full">
                    {t('book_a_demo')}
                  </Button>
                </Link>
                <Link to="/contact-us" onClick={toggleMenu}>
                  <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                    {t('contact_us')}
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;


