import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, X, Send, Home, Phone, Calendar, HelpCircle, Zap } from 'lucide-react';
import { generateBotResponse, welcomeMessages, faqData } from './RobotResponses';

const ReceptionRobot = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Options de navigation rapide
  const quickActions = [
    { icon: Home, key: 'home', labelKey: 'home', action: () => window.location.href = '/' },
    { icon: Calendar, key: 'demo', labelKey: 'book_demo', action: () => window.location.href = '/book-a-demo' },
    { icon: Phone, key: 'contact', labelKey: 'contact_us', action: () => window.location.href = '/contact-us' },
    { icon: HelpCircle, key: 'faq', labelKey: 'faq', action: () => handleFAQ() },
    { icon: Zap, key: 'features', labelKey: 'features', action: () => handleFeatures() }
  ];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Ajouter les messages d'accueil avec un délai
      const currentLang = localStorage.getItem('i18nextLng') || 'en';
      const welcomeMsgs = welcomeMessages[currentLang] || welcomeMessages.en;
      
      setTimeout(() => {
        setMessages([
          { type: 'bot', content: welcomeMsgs[0], timestamp: new Date() }
        ]);
        
        setTimeout(() => {
          setMessages(prev => [...prev, 
            { type: 'bot', content: welcomeMsgs[1], timestamp: new Date() }
          ]);
        }, 1000);
      }, 500);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const userMessage = { type: 'user', content: inputMessage, timestamp: new Date() };
      setMessages(prev => [...prev, userMessage]);
      setInputMessage('');
      
      // Simuler une réponse du bot
      setIsTyping(true);
      setTimeout(() => {
        const botResponse = generateBotResponse(inputMessage);
        setMessages(prev => [...prev, { type: 'bot', content: botResponse, timestamp: new Date() }]);
        setIsTyping(false);
      }, 1500);
    }
  };

  const handleFAQ = () => {
    const currentLang = localStorage.getItem('i18nextLng') || 'en';
    const faqs = faqData[currentLang] || faqData.en;
    
    setMessages(prev => [...prev, 
      { type: 'bot', content: "Here are some frequently asked questions:", timestamp: new Date() }
    ]);
    
    faqs.forEach((faq, index) => {
      setTimeout(() => {
        setMessages(prev => [...prev, 
          { type: 'bot', content: `**${faq.q}**\n${faq.a}`, timestamp: new Date() }
        ]);
      }, (index + 1) * 800);
    });
  };

  const handleFeatures = () => {
    const currentLang = localStorage.getItem('i18nextLng') || 'en';
    const featuresMsg = {
      en: "🚀 **SMARTQ-TECH Features:**\n• Digital & Paper Ticketing\n• Real-time Analytics\n• WhatsApp Integration\n• Appointment Scheduling\n• Multi-language Support\n• Cloud-based Platform",
      fr: "🚀 **Fonctionnalités SMARTQ-TECH :**\n• Tickets numériques et papier\n• Analyses en temps réel\n• Intégration WhatsApp\n• Planification de rendez-vous\n• Support multilingue\n• Plateforme cloud",
      ar: "🚀 **ميزات SMARTQ-TECH:**\n• التذاكر الرقمية والورقية\n• التحليلات في الوقت الفعلي\n• تكامل واتساب\n• جدولة المواعيد\n• الدعم متعدد اللغات\n• منصة سحابية"
    };
    
    setMessages(prev => [...prev, 
      { type: 'bot', content: featuresMsg[currentLang] || featuresMsg.en, timestamp: new Date() }
    ]);
  };

  const handleQuickAction = (action) => {
    action.action();
  };

  return (
    <div className="fixed bottom-20 right-7 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col animate-in slide-in-from-bottom-2 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-t-lg">
            <div className="flex items-center space-x-3">
              <img 
                src="/smartq-robot-avatar.png" 
                alt="SMARTQ Assistant" 
                className="w-8 h-8 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-sm">SMARTQ Assistant</h3>
                <p className="text-xs opacity-90">{t('online')}</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                  message.type === 'user' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {message.content.includes('**') ? (
                    <div dangerouslySetInnerHTML={{
                      __html: message.content
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\n/g, '<br>')
                    }} />
                  ) : (
                    message.content
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 px-3 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-2 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {quickActions.map((action) => (
                <button
                  key={action.key}
                  onClick={() => handleQuickAction(action)}
                  className="flex items-center space-x-1 px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-md text-xs transition-colors"
                >
                  <action.icon size={12} />
                  <span>{t(action.labelKey)}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={t('type_message')}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                onClick={handleSendMessage}
                className="px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Robot Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <div className="relative">
            <img 
              src="/smartq-robot-avatar.png" 
              alt="SMARTQ Assistant" 
              className="w-8 h-8 rounded-full"
            />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        )}
      </button>
    </div>
  );
};

export default ReceptionRobot;

