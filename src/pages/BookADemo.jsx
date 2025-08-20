import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

/**
 * Page BookADemo - Permet aux utilisateurs de réserver une démonstration.
 * Inclut un formulaire de contact simple et des informations pour la prise de rendez-vous.
 */
function BookADemo() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 bg-gray-50">
        <section className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Book a Demo</h1>
          <p className="text-xl text-gray-600 mb-12">Choose the best day and time for you to book a free 30 minutes demo.</p>

          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-left text-lg font-medium text-gray-700 mb-2">Name</label>
                <Input type="text" id="name" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-left text-lg font-medium text-gray-700 mb-2">Email</label>
                <Input type="email" id="email" placeholder="Your Email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500" />
              </div>
              <div>
                <label htmlFor="company" className="block text-left text-lg font-medium text-gray-700 mb-2">Company (Optional)</label>
                <Input type="text" id="company" placeholder="Your Company" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-left text-lg font-medium text-gray-700 mb-2">Message</label>
                <Textarea id="message" placeholder="Tell us about your needs" rows="5" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"></Textarea>
              </div>
              <Button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg w-full">Submit Request</Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default BookADemo;


