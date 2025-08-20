// Réponses intelligentes du Robot de Réception SMARTQ
export const generateBotResponse = (userInput) => {
  const currentLang = localStorage.getItem('i18nextLng') || 'en';
  const input = userInput.toLowerCase();
  
  // Réponses basiques basées sur des mots-clés
  const responses = {
    en: {
      greeting: "Hello! How can I assist you today? 😊",
      pricing: "💰 You can find our pricing plans on the Pricing page. We offer Free (1,000 tickets/month), Business (50,000 tickets/month), and Enterprise (unlimited) plans.",
      demo: "🎯 I'd be happy to help you book a demo! Click the 'Book a Demo' button or visit our demo page. Our demos are free and last 30 minutes.",
      contact: "📞 You can contact us through our Contact page or call us at +351 253 111 122. We're here to help!",
      features: "🚀 SMARTQ-TECH offers queue management, digital ticketing, real-time analytics, WhatsApp integration, appointment scheduling, and much more!",
      industries: "🏢 We serve various industries: Retail, Healthcare, Banking, Telecom, Airports, Government, and Public Services.",
      thanks: "You're welcome! Is there anything else I can help you with?",
      bye: "Goodbye! Feel free to reach out anytime. Have a great day! 👋",
      help: "🤖 I'm here to help! You can ask me about:\n• Our services and features\n• Pricing plans\n• Booking a demo\n• Contact information\n• Industries we serve\n\nOr use the quick action buttons below!",
      default: "I'm here to help! You can ask me about our services, pricing, or use the quick actions below. What would you like to know? 🤔"
    },
    fr: {
      greeting: "Bonjour ! Comment puis-je vous aider aujourd'hui ? 😊",
      pricing: "💰 Vous pouvez trouver nos plans tarifaires sur la page Tarifs. Nous offrons des plans Gratuit (1 000 tickets/mois), Affaires (50 000 tickets/mois) et Entreprise (illimité).",
      demo: "🎯 Je serais ravi de vous aider à réserver une démo ! Cliquez sur 'Réserver une démo' ou visitez notre page de démo. Nos démos sont gratuites et durent 30 minutes.",
      contact: "📞 Vous pouvez nous contacter via notre page Contact ou nous appeler au +351 253 111 122. Nous sommes là pour vous aider !",
      features: "🚀 SMARTQ-TECH offre la gestion des files d'attente, les tickets numériques, les analyses en temps réel, l'intégration WhatsApp, la planification de rendez-vous et bien plus !",
      industries: "🏢 Nous servons diverses industries : Commerce de détail, Santé, Banque, Télécoms, Aéroports, Gouvernement et Services publics.",
      thanks: "De rien ! Y a-t-il autre chose avec quoi je peux vous aider ?",
      bye: "Au revoir ! N'hésitez pas à nous contacter à tout moment. Bonne journée ! 👋",
      help: "🤖 Je suis là pour vous aider ! Vous pouvez me poser des questions sur :\n• Nos services et fonctionnalités\n• Plans tarifaires\n• Réserver une démo\n• Informations de contact\n• Industries que nous servons\n\nOu utilisez les boutons d'action rapide ci-dessous !",
      default: "Je suis là pour vous aider ! Vous pouvez me poser des questions sur nos services, tarifs, ou utiliser les actions rapides ci-dessous. Que souhaitez-vous savoir ? 🤔"
    },
    ar: {
      greeting: "مرحباً! كيف يمكنني مساعدتك اليوم؟ 😊",
      pricing: "💰 يمكنك العثور على خطط التسعير في صفحة التسعير. نقدم خطط مجانية (1000 تذكرة/شهر) وتجارية (50000 تذكرة/شهر) ومؤسسية (غير محدود).",
      demo: "🎯 سأكون سعيداً لمساعدتك في حجز عرض تجريبي! انقر على 'احجز عرضاً تجريبياً' أو زر صفحة العرض التجريبي. عروضنا التجريبية مجانية وتستغرق 30 دقيقة.",
      contact: "📞 يمكنك الاتصال بنا عبر صفحة الاتصال أو الاتصال بنا على +351 253 111 122. نحن هنا للمساعدة!",
      features: "🚀 يقدم SMARTQ-TECH إدارة قوائم الانتظار والتذاكر الرقمية والتحليلات في الوقت الفعلي وتكامل واتساب وجدولة المواعيد وأكثر من ذلك بكثير!",
      industries: "🏢 نخدم صناعات مختلفة: التجزئة والرعاية الصحية والمصارف والاتصالات والمطارات والحكومة والخدمات العامة.",
      thanks: "على الرحب والسعة! هل هناك أي شيء آخر يمكنني مساعدتك به؟",
      bye: "وداعاً! لا تتردد في التواصل معنا في أي وقت. أتمنى لك يوماً رائعاً! 👋",
      help: "🤖 أنا هنا للمساعدة! يمكنك سؤالي عن:\n• خدماتنا وميزاتنا\n• خطط التسعير\n• حجز عرض تجريبي\n• معلومات الاتصال\n• الصناعات التي نخدمها\n\nأو استخدم أزرار الإجراءات السريعة أدناه!",
      default: "أنا هنا للمساعدة! يمكنك سؤالي عن خدماتنا أو الأسعار أو استخدام الإجراءات السريعة أدناه. ماذا تريد أن تعرف؟ 🤔"
    }
  };

  const langResponses = responses[currentLang] || responses.en;

  // Détection intelligente des intentions
  if (input.includes('hello') || input.includes('hi') || input.includes('hey') || input.includes('bonjour') || input.includes('salut') || input.includes('مرحبا') || input.includes('أهلا')) {
    return langResponses.greeting;
  } else if (input.includes('price') || input.includes('cost') || input.includes('plan') || input.includes('prix') || input.includes('tarif') || input.includes('سعر') || input.includes('خطة')) {
    return langResponses.pricing;
  } else if (input.includes('demo') || input.includes('demonstration') || input.includes('démonstration') || input.includes('عرض') || input.includes('تجريبي')) {
    return langResponses.demo;
  } else if (input.includes('contact') || input.includes('phone') || input.includes('call') || input.includes('téléphone') || input.includes('appeler') || input.includes('اتصال') || input.includes('هاتف')) {
    return langResponses.contact;
  } else if (input.includes('feature') || input.includes('service') || input.includes('what') || input.includes('fonctionnalité') || input.includes('que') || input.includes('خدمة') || input.includes('ميزة') || input.includes('ماذا')) {
    return langResponses.features;
  } else if (input.includes('industry') || input.includes('sector') || input.includes('industrie') || input.includes('secteur') || input.includes('صناعة') || input.includes('قطاع')) {
    return langResponses.industries;
  } else if (input.includes('thank') || input.includes('merci') || input.includes('شكرا') || input.includes('شكراً')) {
    return langResponses.thanks;
  } else if (input.includes('bye') || input.includes('goodbye') || input.includes('au revoir') || input.includes('salut') || input.includes('وداعا') || input.includes('مع السلامة')) {
    return langResponses.bye;
  } else if (input.includes('help') || input.includes('aide') || input.includes('مساعدة') || input.includes('ساعد')) {
    return langResponses.help;
  } else {
    return langResponses.default;
  }
};

// Messages d'accueil multilingues
export const welcomeMessages = {
  en: [
    "👋 Hello! I'm SMARTQ Assistant, your virtual reception robot!",
    "How can I help you today? I can guide you through our services, answer questions, or help you navigate our website."
  ],
  fr: [
    "👋 Bonjour ! Je suis l'Assistant SMARTQ, votre robot de réception virtuel !",
    "Comment puis-je vous aider aujourd'hui ? Je peux vous guider à travers nos services, répondre à vos questions ou vous aider à naviguer sur notre site."
  ],
  ar: [
    "👋 مرحباً! أنا مساعد SMARTQ، روبوت الاستقبال الافتراضي الخاص بك!",
    "كيف يمكنني مساعدتك اليوم؟ يمكنني إرشادك عبر خدماتنا، أو الإجابة على الأسئلة، أو مساعدتك في التنقل في موقعنا."
  ]
};

// FAQ prédéfinies multilingues
export const faqData = {
  en: [
    { q: "What is SMARTQ-TECH?", a: "SMARTQ-TECH is an all-in-one SaaS platform for queue management and customer journey optimization." },
    { q: "How does the queue management work?", a: "Our system provides digital ticketing, real-time updates, and analytics to optimize customer flow." },
    { q: "Is there a free trial?", a: "Yes! We offer a free plan with 1,000 tickets per month to get you started." },
    { q: "What industries do you serve?", a: "We serve retail, healthcare, banking, telecom, airports, and public services." },
    { q: "How can I contact support?", a: "You can reach us via our Contact page, call +351 253 111 122, or chat with me right here!" }
  ],
  fr: [
    { q: "Qu'est-ce que SMARTQ-TECH ?", a: "SMARTQ-TECH est une plateforme SaaS tout-en-un pour la gestion des files d'attente et l'optimisation du parcours client." },
    { q: "Comment fonctionne la gestion des files d'attente ?", a: "Notre système fournit des tickets numériques, des mises à jour en temps réel et des analyses pour optimiser le flux de clients." },
    { q: "Y a-t-il un essai gratuit ?", a: "Oui ! Nous offrons un plan gratuit avec 1 000 tickets par mois pour commencer." },
    { q: "Quelles industries servez-vous ?", a: "Nous servons le commerce de détail, la santé, la banque, les télécoms, les aéroports et les services publics." },
    { q: "Comment contacter le support ?", a: "Vous pouvez nous joindre via notre page Contact, appeler le +351 253 111 122, ou discuter avec moi ici même !" }
  ],
  ar: [
    { q: "ما هو SMARTQ-TECH؟", a: "SMARTQ-TECH هي منصة SaaS شاملة لإدارة قوائم الانتظار وتحسين رحلة العميل." },
    { q: "كيف تعمل إدارة قوائم الانتظار؟", a: "يوفر نظامنا التذاكر الرقمية والتحديثات في الوقت الفعلي والتحليلات لتحسين تدفق العملاء." },
    { q: "هل هناك تجربة مجانية؟", a: "نعم! نقدم خطة مجانية مع 1000 تذكرة شهرياً للبدء." },
    { q: "ما هي الصناعات التي تخدمونها؟", a: "نخدم التجزئة والرعاية الصحية والمصارف والاتصالات والمطارات والخدمات العامة." },
    { q: "كيف يمكنني الاتصال بالدعم؟", a: "يمكنك الوصول إلينا عبر صفحة الاتصال، أو الاتصال على +351 253 111 122، أو الدردشة معي هنا مباشرة!" }
  ]
};

