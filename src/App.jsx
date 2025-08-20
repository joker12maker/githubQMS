import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Resources from './pages/Resources';
import BookADemo from './pages/BookADemo';
import ContactUs from './pages/ContactUs';
import './App.css';
import Products from './components/Products';
import Industries from './pages/Industries';

/**
 * Composant App principal - Clone de Moviik.com rebrandé SMARTQ-TECH
 * Gère le routage des différentes pages du site.
 */
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={< Products/>} />
          <Route path="/industries" element={< Industries/>} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/book-a-demo" element={<BookADemo />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


