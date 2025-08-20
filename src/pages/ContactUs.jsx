import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

/**
 * Page ContactUs - Permet aux utilisateurs de contacter SMARTQ-TECH Tunisie. 
 * Inclut un formulaire de contact, les coordonnées de l'entreprise et les informations de support.
 */
function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 bg-gray-50">
        <section className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 mb-12">Let's get in touch</p>
          <p className="text-lg text-gray-700 mb-8">Request more information about SMARTQ-TECH’s products & technology. Drop us a line through the form below and we'll get back to you.</p>

          <div className="flex justify-center space-x-4 mb-12">
            <Button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full text-lg">Talk to Sales</Button>
            <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg">Book a Demo</Button>
            <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-lg">Become a Partner</Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg">Contact Support</Button>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="solution" className="block text-left text-lg font-medium text-gray-700 mb-2">What type of solution are you looking for? *</label>
                <select id="solution" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500">
                  <option>-Select-</option>
                  <option>Queue Management</option>
                  <option>Customer Journey</option>
                  <option>Digital Signage</option>
                  <option>Appointments</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-left text-lg font-medium text-gray-700 mb-2">Please tell us more about the solution(s) you're looking for so we can help you. *</label>
                <Textarea id="message" rows="5" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"></Textarea>
              </div>
              <div>
                <label htmlFor="name" className="block text-left text-lg font-medium text-gray-700 mb-2">Name *</label>
                <Input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-left text-lg font-medium text-gray-700 mb-2">Email *</label>
                <Input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-left text-lg font-medium text-gray-700 mb-2">Phone *</label>
                <Input type="tel" id="phone" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500" />
              </div>
              <div>
                <label htmlFor="company" className="block text-left text-lg font-medium text-gray-700 mb-2">Company *</label>
                <Input type="text" id="company" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500" />
              </div>
              <div>
                <label htmlFor="country" className="block text-left text-lg font-medium text-gray-700 mb-2">Country *</label>
                <select id="country" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500">
                  <option>-Select-</option>
                  {/* Ajouter d'autres pays si nécessaire */}
                </select>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="terms" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">I accept the <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a>.</label>
              </div>
              <Button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg w-full">Submit</Button>
            </form>
          </div>

          <div className="mt-16 text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">If you need to contact us for any other matters, please use the following contact channels:</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center md:items-start">
                <MapPin className="text-green-500 mb-2" size={32} />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">HQ</h3>
                <p className="text-gray-700">IMMEUBLE EL MOEZ, P04</p>
                <p className="text-gray-700">Sousse - Tunisia</p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <Mail className="text-green-500 mb-2" size={32} />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-700">hello@smartq-tech.com</p>
                <p className="text-gray-700">marketing@smartq-tech.com</p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <Phone className="text-green-500 mb-2" size={32} />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
                <p className="text-gray-700">+216 97 405 460</p>
              </div>
            </div>

            <div className="mt-16 bg-green-100 p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Customer Support</h2>
              <p className="text-gray-700 mb-4">Have a question or need assistance? Our support team is ready to provide the help you need. Reach out to us and get fast, reliable support tailored to your needs.</p>
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg">Contact Support</Button>
              <div className="flex justify-center items-center mt-4 text-gray-600 text-sm">
                <span className="mx-2">⦿ human live chat support, no bots</span>
                <span className="mx-2">|</span>
                <span className="mx-2">⦿ 98% satisfaction rate</span>
                <span className="mx-2">|</span>
                <span className="mx-2">15 minutes ticket first response</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ContactUs;


