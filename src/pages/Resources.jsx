import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BookOpen, Video, FileText, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

/**
 * Page Resources - Fournit des ressources utiles pour les utilisateurs de SMARTQ-TECH.
 * Inclut des liens vers des études de cas, des webinaires, des livres blancs et des articles de blog.
 */
function Resources() {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <Header />
      <main className="flex-grow py-16 bg-gray-50">
        <section className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{t('our_resources')}</h1>
          <p className="text-xl text-gray-600 mb-12">{t('explore_resources')}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Resource Card: Case Studies */}
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
              <BookOpen className="text-green-500 mb-4" size={48} />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('case_studies')}</h2>
              <p className="text-gray-700 mb-4">{t('case_studies_description')}</p>
              <a href="#" className="text-blue-600 hover:underline">{t('read_more')}</a>
            </div>

            {/* Resource Card: Webinars */}
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
              <Video className="text-green-500 mb-4" size={48} />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('webinars')}</h2>
              <p className="text-gray-700 mb-4">{t('webinars_description')}</p>
              <a href="#" className="text-blue-600 hover:underline">{t('watch_now')}</a>
            </div>

            {/* Resource Card: Whitepapers */}
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
              <FileText className="text-green-500 mb-4" size={48} />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('whitepapers')}</h2>
              <p className="text-gray-700 mb-4">{t('whitepapers_description')}</p>
              <a href="#" className="text-blue-600 hover:underline">{t('download')}</a>
            </div>

            {/* Resource Card: Blog */}
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
              <Users className="text-green-500 mb-4" size={48} />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('blog')}</h2>
              <p className="text-gray-700 mb-4">{t('blog_description')}</p>
              <a href="#" className="text-blue-600 hover:underline">{t('read_articles')}</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Resources;


