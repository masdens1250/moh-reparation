import React, { createContext, useContext, useState } from 'react';

export type Language = 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    home: 'Accueil',
    services: 'Services',
    about: 'À Propos',
    contact: 'Contact',
    
    // Header
    address: 'Rue Abed Mohamed Pépinière Mostaganem 27000',
    addressNote: 'à côté du cabinet Dr. Derbal',
    openingHours: 'Heures d\'Ouverture',
    hours: 'Sam - Jeu: 09:00 - 19:00',
    fridayClosed: 'Vendredi: Fermé',
    mailUs: 'Nous Écrire',
    phone: '07.90.70.25.75',
    
    // Hero Section
    heroTitle: 'Bienvenue Chez Mohamed',
    heroSubtitle: 'Votre réparateur Android/IPhone/Tablette/Autre',
    heroDescription: 'Utilisant des pièces d\'origine manufacturées et des composants, nous sommes capables de restaurer vos téléphones portables ou iPhone à un état quasi neuf.',
    contactUs: 'Nous Contacter',
    buyNow: 'Appelez Nous',
    
    // Services
    servicesTitle: 'Nos Services',
    smartPhoneRepair: 'Réparation Smartphone',
    smartPhoneDesc: 'Nous nous spécialisons dans les réparations de téléphones pour Apple (iPhone), iPad, Samsung, Galaxy, Sony, HTC, Nexus, Motorola, Blackberry et Tablettes.',
    tabletRepair: 'Réparations Tablettes',
    tabletDesc: 'Nous réparons tous types de tablettes et iPad avec expertise professionnelle. Écran cassé, batterie défaillante, port de charge endommagé - nous résolvons tous vos problèmes de tablettes rapidement et efficacement avec des pièces de qualité.',
    desktopRepair: 'Réparation Android & iPhone',
    desktopDesc: 'Nous nous spécialisons dans la réparation de tous types de smartphones Android et iPhone avec des pièces d\'origine et une garantie complète.',
    repriseAchat: 'android cassé',
    repriseDesc: 'Nous rachetons des appareils de smartphones cassés.',
    
    // About
    aboutTitle: 'À Propos de Nous',
    aboutDescription: 'Mohamed-Reparation est votre expert local en réparation des smartphones, android, iphones, tablettes et autre. Avec des années d\'expériences, nous offrons des services de qualités professionnelles.',
    whyChooseUs: 'Pourquoi Nous Choisir',
    experienceTitle: 'Expérience Professionnelle',
    experienceDesc: 'Plus de 15 ans d\'expérience dans la réparation électronique',
    qualityTitle: 'Pièces de Qualité',
    qualityDesc: 'Nous utilisons uniquement des pièces d\'origine ou de qualité équivalente',
    warrantyTitle: 'Garantie Service',
    warrantyDesc: 'Tous nos services sont garantis pour votre tranquillité d\'esprit',
    
    // Contact
    contactTitle: 'Nous Contacter',
    contactInfo: 'Informations de Contact',
    getInTouch: 'Prenez Contact',
    name: 'Nom',
    email: 'Email',
    message: 'Message',
    sendMessage: 'Envoyer le Message',
    
    // Estimate Calculator
    estimateTitle: 'Calculateur de Devis',
    deviceType: 'Type d\'Appareil',
    issueType: 'Type de Problème',
    estimatedCost: 'Coût Estimé',
    getEstimate: 'Obtenir un Devis',
    selectDevice: 'Sélectionnez l\'appareil',
    selectIssue: 'Sélectionnez le problème',
    
    // Device Types
    iphone: 'iPhone',
    android: 'Android',
    tablet: 'Tablette', 
    smartphone: 'Smartphone',
    
    // Issue Types
    screenBroken: 'Écran Cassé',
    batteryIssue: 'Problème Batterie',
    chargePort: 'Port de Charge',
    waterDamage: 'Dégât des Eaux',
    speakerIssue: 'Problème Haut-parleur',
    
    // Footer
    followUs: 'Suivez-Nous',
    
    // Additional translations
    qualityPromise: 'Nous remplaçons les accessoires de qualité',
    workshopTitle: 'Notre Atelier',
    workshopDesc: 'Équipé des outils et technologies les plus modernes pour diagnostiquer et réparer efficacement tous types d\'appareils électroniques.',
    ourStory: 'Notre Histoire',
    storyDesc1: 'Mohamed a commencé son parcours dans la réparation électronique il y a plus de 10 ans. Passionné par la technologie et déterminé à offrir un service de qualité, il a ouvert MOH-Reparation pour servir la communauté de Mostaganem.',
    storyDesc2: 'Aujourd\'hui, nous sommes fiers d\'être le centre de réparation de confiance pour des milliers de clients, offrant des services professionnels pour tous types d\'appareils électroniques avec des pièces de qualité et une garantie complète chez Mohamed-Reparation.',
    mohamedQuote: '"Notre mission est de redonner vie à vos appareils avec un service professionnel et des prix équitables." - Mohamed',
    yearsExperience: 'Années d\'Expériences',
    successfulRepairs: 'Réparations Réussies',
    satisfiedClients: 'Clients Satisfaits',
    averageTime: 'Délai Moyen',
    technicalExpertise: 'Expertise Technique',
    technicalExpertiseDesc: 'Techniciens certifiés avec plus de 15 ans d\'expérience',
    warrantyService: 'Garantie Service',
    warrantyServiceDesc: 'Tous nos services sont garantis pour votre tranquillité d\'esprit',
    fastRepair: 'Réparation Rapide',
    fastRepairDesc: 'La plupart des réparations terminées dans les délais',
    servicesDescription: 'Services professionnels de réparation pour tous vos appareils électroniques',
    whyChooseUsServices: 'Pourquoi choisir nos services ?',
    screenRepair: 'Réparation d\'écran',
    batteryReplacement: 'Remplacement de batterie',
    chargingProblems: 'Problèmes de charge',
    cameraRepair: 'Réparation de caméra',
    touchScreen: 'Écran tactile',
    chargingPort: 'Port de charge',
    systemProblems: 'Problèmes système',
    softwareUpdate: 'Mise à jour logiciel',
    screenRepairGeneral: 'Réparation écran',
    batteryChange: 'Changement batterie',
    networkUnlock: 'Déblocage réseau',
    systemUpdate: 'Mise à jour système',
    contactResponse: 'Réponse rapide',
    contactResponseDesc: 'Nous répondons généralement dans les 2 heures pendant nos heures d\'ouverture.',
    sendUsMessage: 'Envoyez-nous un Message',
    fullName: 'Votre nom complet',
    emailPlaceholder: 'votre@email.com',
    messagePlaceholder: 'Décrivez votre problème ou votre demande...',
    interactiveMap: 'Carte Interactive',
    whatsappAvailable: 'WhatsApp disponible',
    messageSent: 'Message envoyé! Nous vous répondrons bientôt.',
    importantNote: 'Note importante',
    estimateNote: 'Ces coûts sont des estimations basées sur les prix du marché. Le prix final peut varier selon l\'état de l\'appareil et la complexité de la réparation. Un diagnostic gratuit sera effectué pour vous donner un devis précis.',
    indicativePrice: '*Prix indicatif, devis final après diagnostic',
    followingDamage: 'Suivant les dégâts',
    startingFrom: 'À partir de',
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    services: 'الخدمات',
    about: 'نبذة عنا',
    contact: 'اتصل بنا',
    
    // Header
    address: 'شارع عابد محمد المشتلة مستغانم 27000',
    addressNote: 'بجانب عيادة د. دربال',
    openingHours: 'ساعات العمل',
    hours: 'السبت - الخميس: 09:00 - 19:00',
    fridayClosed: 'الجمعة: مغلق',
    mailUs: 'راسلنا',
    phone: '07.90.70.25.75',
    
    // Hero Section
    heroTitle: 'مرحباً بكم عند محمد',
    heroSubtitle: 'خبير إصلاح أندرويد/آيفون',
    heroDescription: 'باستخدام قطع الغيار الأصلية والمكونات المصنعة، نحن قادرون على استعادة هواتفكم المحمولة أو آيفون إلى حالة شبه جديدة.',
    contactUs: 'اتصل بنا',
    buyNow: 'احجز الآن',
    
    // Services
    servicesTitle: 'خدماتنا',
    smartPhoneRepair: 'إصلاح الهواتف الذكية',
    smartPhoneDesc: 'نحن متخصصون في إصلاح الهواتف لأبل (آيفون)، آيباد، سامسونغ، غالاكسي، سوني، إتش تي سي، نيكسوس، موتورولا، بلاكبيري والأجهزة اللوحية.',
    tabletRepair: 'إصلاح الأجهزة اللوحية',
    tabletDesc: 'إذا كنت تواجه أي مشكلة مع أجهزتك اللوحية/آيباد، يرجى الاتصال بنا',
    desktopRepair: 'إصلاح أندرويد وآيفون',
    desktopDesc: 'نحن متخصصون في إصلاح جميع أنواع الهواتف الذكية أندرويد وآيفون بقطع أصلية وضمان كامل.',
    repriseAchat: 'الهواتف المكسورة',
    repriseDesc: 'نشتري اجهزتكم من الهواتف المكسورة',
    
    // About
    aboutTitle: 'نبذة عنا',
    aboutDescription: 'محمد-إصلاح هو خبيرك المحلي في إصلاح الهواتف الذكية والأجهزة اللوحية وأخرى. مع سنوات من الخبرة، نقدم خدمات بجودة مهنية.',
    whyChooseUs: 'لماذا تختارنا',
    experienceTitle: 'خبرة مهنية',
    experienceDesc: 'أكثر من 10 سنوات من الخبرة في إصلاح الإلكترونيات',
    qualityTitle: 'قطع ذات جودة',
    qualityDesc: 'نستخدم فقط قطع الغيار الأصلية أو المعادلة في الجودة',
    warrantyTitle: 'ضمان الخدمة',
    warrantyDesc: 'جميع خدماتنا مضمونة لراحة بالكم',
    
    // Contact
    contactTitle: 'اتصل بنا',
    contactInfo: 'معلومات الاتصال',
    getInTouch: 'تواصل معنا',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    message: 'الرسالة',
    sendMessage: 'إرسال الرسالة',
    
    // Estimate Calculator
    estimateTitle: 'حاسبة التكلفة',
    deviceType: 'نوع الجهاز',
    issueType: 'نوع المشكلة',
    estimatedCost: 'التكلفة المقدرة',
    getEstimate: 'احصل على تقدير',
    selectDevice: 'اختر الجهاز',
    selectIssue: 'اختر المشكلة',
    
    // Device Types
    iphone: 'آيفون',
    android: 'أندرويد',
    tablet: 'جهاز لوحي',
    smartphone: 'هاتف ذكي',
    
    // Issue Types
    screenBroken: 'شاشة مكسورة',
    batteryIssue: 'مشكلة البطارية',
    chargePort: 'منفذ الشحن',
    waterDamage: 'ضرر المياه',
    speakerIssue: 'مشكلة السماعة',
    
    // Footer
    followUs: 'تابعنا',
    
    // Additional translations
    qualityPromise: 'نحن نستبدل الملحقات عالية الجودة',
    workshopTitle: 'ورشتنا',
    workshopDesc: 'مجهزة بأحدث الأدوات والتقنيات لتشخيص وإصلاح جميع أنواع الأجهزة الإلكترونية بكفاءة.',
    ourStory: 'قصتنا',
    storyDesc1: 'بدأ محمد رحلته في إصلاح الإلكترونيات منذ أكثر من 10 سنوات. شغوف بالتكنولوجيا وعازم على تقديم خدمة عالية الجودة، افتتح محمد-إصلاح لخدمة مجتمع مستغانم.',
    storyDesc2: 'اليوم، نحن فخورون بكوننا مركز الإصلاح الموثوق لآلاف العملاء، نقدم خدمات مهنية لجميع أنواع الأجهزة الإلكترونية بقطع عالية الجودة وضمان كامل في محمد-إصلاح.',
    mohamedQuote: '"مهمتنا هي إعادة الحياة لأجهزتكم بخدمة مهنية وأسعار عادلة." - محمد',
    yearsExperience: 'سنوات الخبرة',
    successfulRepairs: 'إصلاحات ناجحة',
    satisfiedClients: 'عملاء راضون',
    averageTime: 'الوقت المتوسط',
    technicalExpertise: 'خبرة تقنية',
    technicalExpertiseDesc: 'فنيون معتمدون بخبرة أكثر من 15 سنة',
    warrantyService: 'ضمان الخدمة',
    warrantyServiceDesc: 'جميع خدماتنا مضمونة لمدة 6 أشهر',
    fastRepair: 'إصلاح سريع',
    fastRepairDesc: 'معظم الإصلاحات تكتمل في الأجال المحددة',
    whyChooseUsServices: 'لماذا تختار خدماتنا؟',
    servicesDescription: 'خدمات إصلاح مهنية لجميع أجهزتكم الإلكترونية',
    screenRepair: 'إصلاح الشاشة',
    batteryReplacement: 'استبدال البطارية',
    chargingProblems: 'مشاكل الشحن',
    cameraRepair: 'إصلاح الكاميرا',
    touchScreen: 'شاشة لمس',
    chargingPort: 'منفذ الشحن',
    systemProblems: 'مشاكل النظام',
    softwareUpdate: 'تحديث البرمجيات',
    screenRepairGeneral: 'إصلاح الشاشة',
    batteryChange: 'تغيير البطارية',
    networkUnlock: 'إلغاء قفل الشبكة',
    systemUpdate: 'تحديث النظام',
    contactResponse: 'استجابة سريعة',
    contactResponseDesc: 'نحن نرد عادة خلال ساعتين أثناء ساعات العمل.',
    sendUsMessage: 'أرسل لنا رسالة',
    fullName: 'اسمك الكامل',
    emailPlaceholder: 'your@email.com',
    messagePlaceholder: 'صف مشكلتك أو طلبك...',
    interactiveMap: 'خريطة تفاعلية',
    whatsappAvailable: 'واتساب متاح',
    messageSent: 'تم إرسال الرسالة! سنرد عليك قريباً.',
    importantNote: 'ملاحظة مهمة',
    estimateNote: 'هذه التكاليف تقديرات مبنية على أسعار السوق. السعر النهائي قد يختلف حسب حالة الجهاز وتعقيد الإصلاح. سيتم إجراء تشخيص مجاني لإعطائك عرض سعر دقيق.',
    indicativePrice: '*سعر إرشادي، عرض السعر النهائي بعد التشخيص',
    followingDamage: 'حسب الأضرار',
    startingFrom: 'ابتداءً من',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'font-arabic' : 'font-latin'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};