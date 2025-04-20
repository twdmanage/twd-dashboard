import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Language {
  value: string;
  label: string;
}

export const languages: Language[] = [
  { value: "en-US", label: "English (US)" },
  { value: "es", label: "Español" },
  { value: "fr", label: "Français" },
  { value: "de", label: "Deutsch" },
  { value: "nl", label: "Nederlands" },
  { value: "af", label: "Afrikaans" },
];

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (languageValue: string) => void;
  t: (key: string) => string | string[];
}

type TranslationValue = string | string[];

const translations: Record<string, Record<string, TranslationValue>> = {
  "en-US": {
    // App
    "app.title": "Finance",
    
    // User
    "user.name": "John Doe",
    "user.role": "Premium User",
    
    // Sidebar
    "sidebar.dashboard": "Dashboard",
    "sidebar.analytics": "Analytics",
    "sidebar.transactions": "Transactions",
    "sidebar.notifications": "Notifications",
    "sidebar.profile": "Profile",
    "sidebar.guide": "User Guide",
    "sidebar.settings": "Settings",
    "sidebar.tasks": "Tasks",
    
    // Tasks
    "tasks.title": "Task Manager",
    "tasks.comingSoon": "Task management functionality coming soon...",
    
    // Settings
    "settings.title": "Settings",
    "settings.subtitle": "Customize your account preferences",
    "settings.preferences": "Preferences",
    "settings.notifications": "Notifications",
    "settings.notifications.desc": "Receive app notifications",
    "settings.darkMode": "Dark Mode",
    "settings.darkMode.desc": "Toggle dark mode theme",
    "settings.language": "Language",
    "settings.language.desc": "Choose your preferred language",
    "settings.security": "Security",
    "settings.twoFactor": "Two-Factor Authentication",
    "settings.twoFactor.desc": "Add an extra layer of security",
    "settings.passwordProtection": "Password Protection",
    "settings.passwordProtection.desc": "Require password for sensitive actions",
    
    // Analytics Translations
    "analytics.title": "Analytics Overview",
    "analytics.subtitle": "Track your financial performance",
    "analytics.performanceTrends": "Performance Trends",

    // Transactions Translations
    "transactions.title": "Transactions",
    "transactions.subtitle": "Recent financial activity",
    "transactions.recentTransactions": "Recent Transactions",
    "transactions.shopping": "Shopping",
    "transactions.timeAgo": "2 hours ago",

    // Notifications Translations
    "notifications.title": "Notifications",
    "notifications.subtitle": "Stay updated with your account activity",
    "notifications.recentNotifications": "Recent Notifications",
    "notifications.paymentSuccessful": "Payment Successful",
    "notifications.paymentSuccessDesc": "Your last payment was processed successfully",
    "notifications.twoHoursAgo": "2 hours ago",
    "notifications.failedTransaction": "Failed Transaction",
    "notifications.transactionFailedDesc": "Unable to process transaction #12345",
    "notifications.fiveHoursAgo": "5 hours ago",
    "notifications.accountUpdate": "Account Update",
    "notifications.accountUpdateDesc": "Your account details have been updated",
    "notifications.oneDay": "1 day ago",

    // Profile Translations
    "profile.title": "Profile",
    "profile.subtitle": "Manage your account information",
    "profile.personalInfo": "Personal Information",
    "profile.personalInfoDesc": "Your basic profile details",
    "profile.fullName": "Full Name",
    "profile.email": "Email",
    "profile.phone": "Phone",
    "profile.location": "Location",
    "profile.accountStats": "Account Statistics",
    "profile.memberSince": "Member Since",
    "profile.lastLogin": "Last Login",
    "profile.accountStatus": "Account Status",

    // User specific translations
    "user.email": "john.doe@example.com",
    "user.phone": "+1 (555) 123-4567",
    "user.location": "San Francisco, CA",
    "user.memberSince": "January 2024",
    "user.lastLogin": "2 hours ago",
    "user.accountStatus": "Active",

    // Dashboard translations
    "dashboard.title": "Thys Wood Design Dashboard",
    "dashboard.subtitle": "Balancing Business & Life",
    "dashboard.calendar.title": "Google Calendar",
    "dashboard.calendar.description": "Color-coded calendar integration for business and family time management",
    "dashboard.calendar.button": "Open Calendar",
    "dashboard.taskManager.title": "Task Manager",
    "dashboard.taskManager.description": "Organize and track daily tasks for both business and personal life",
    "dashboard.taskManager.button": "View Tasks",
    "dashboard.quickLinks.title": "Quick Links",
    "dashboard.quickLinks.analytics": "📊 Business Analytics",
    "dashboard.quickLinks.social": "📷 Social Media Manager",
    "dashboard.quickLinks.workshop": "📅 Workshop Schedule",

    // User Guide translations
    "guide.title": "Thys Wood Design Dashboard - User Guide",
    "guide.subtitle": "A comprehensive guide to using your dashboard effectively",
    "guide.overview.title": "1. Weekly Overview Section",
    "guide.overview.description": "The Weekly Overview provides a quick snapshot of all key areas of your business and personal life:",
    "guide.overview.items": [
      "Sales/Orders: Track your online order goals and progress",
      "Production: Monitor production tasks like jewelry creation",
      "Marketing: Keep track of social media and marketing tasks",
      "Retail/Partnerships: Follow up on business relationships",
      "Workshops: Track workshop planning and execution",
      "Finances: Monitor financial tasks and updates",
      "Family/Personal: Track family time commitments",
      "Self-care: Monitor personal wellness activities"
    ],
    "guide.overview.card.shows": "Each card shows:",
    "guide.overview.card.items": [
      "Area name",
      "Current focus/goal",
      "Progress status",
      "Visual icon for quick recognition"
    ],
    "guide.metrics.title": "2. Key Metrics Dashboard",
    "guide.metrics.graphs": "Performance Graphs",
    "guide.metrics.graphs.items": [
      "Revenue trend over weeks",
      "Website visitor statistics",
      "Easy-to-read charts with weekly comparisons"
    ],
    "guide.metrics.kpi": "Key Performance Indicators",
    "guide.metrics.kpi.items": [
      "Revenue",
      "Orders Fulfilled",
      "Website Visitors",
      "Social Media Following",
      "Workshop Registrations",
      "Business Hours",
      "Family Time"
    ],
    "guide.planning.title": "3. Weekly Planning Section",
    "guide.usage.title": "Tips for Best Use",
    "guide.usage.updates": "Regular Updates",
    "guide.usage.updates.items": [
      "Review the Weekly Overview daily",
      "Update Key Metrics weekly",
      "Conduct planning and reflection sessions at week's start/end"
    ],
    "guide.usage.balance": "Balance Tracking",
    "guide.usage.balance.items": [
      "Use the color coding (wood and sage tones) to distinguish between business and personal items",
      "Monitor the balance between work hours and family time",
      "Pay attention to self-care metrics"
    ],
    "guide.usage.progress": "Progress Monitoring",
    "guide.usage.progress.items": [
      "Use status indicators to track progress",
      "Review trends in the metrics charts",
      "Adjust goals based on performance data"
    ],
    "guide.usage.reflection": "Reflection Practice",
    "guide.usage.reflection.items": [
      "Regularly update the \"What Went Well\" section",
      "Address items in \"Needs Attention\" promptly",
      "Use insights to adjust next week's priorities"
    ],
    "guide.footer": "This dashboard is designed to help you maintain a healthy balance between business success and personal well-being while running your wood design business."
  },
  "es": {
    // App
    "app.title": "Finanzas",
    
    // User
    "user.name": "John Doe",
    "user.role": "Usuario Premium",
    
    // Sidebar
    "sidebar.dashboard": "Panel",
    "sidebar.analytics": "Analítica",
    "sidebar.transactions": "Transacciones",
    "sidebar.notifications": "Notificaciones",
    "sidebar.profile": "Perfil",
    "sidebar.guide": "Guía de Usuario",
    "sidebar.settings": "Configuración",
    "sidebar.tasks": "Tareas",
    
    // Tasks
    "tasks.title": "Gestor de Tareas",
    "tasks.comingSoon": "Funcionalidad de gestión de tareas próximamente...",
    
    // Settings
    "settings.title": "Configuración",
    "settings.subtitle": "Personaliza tus preferencias de cuenta",
    "settings.preferences": "Preferencias",
    "settings.notifications": "Notificaciones",
    "settings.notifications.desc": "Recibir notificaciones de la aplicación",
    "settings.darkMode": "Modo Oscuro",
    "settings.darkMode.desc": "Activar tema de modo oscuro",
    "settings.language": "Idioma",
    "settings.language.desc": "Elige tu idioma preferido",
    "settings.security": "Seguridad",
    "settings.twoFactor": "Autenticación de dos factores",
    "settings.twoFactor.desc": "Añadir una capa extra de seguridad",
    "settings.passwordProtection": "Protección con contraseña",
    "settings.passwordProtection.desc": "Requerir contraseña para acciones sensibles",
    "analytics.title": "Resumen de Analítica",
    "analytics.subtitle": "Sigue tu rendimiento financiero",
    "analytics.performanceTrends": "Tendencias de Rendimiento",
    "transactions.title": "Transacciones",
    "transactions.subtitle": "Actividad financiera reciente",
    "transactions.recentTransactions": "Transacciones Recientes",
    "transactions.shopping": "Compras",
    "transactions.timeAgo": "hace 2 horas",
    "notifications.title": "Notificaciones",
    "notifications.subtitle": "Mantente al día con la actividad de tu cuenta",
    "notifications.recentNotifications": "Notificaciones Recientes",
    "notifications.paymentSuccessful": "Pago Exitoso",
    "notifications.paymentSuccessDesc": "Tu último pago se procesó con éxito",
    "notifications.twoHoursAgo": "hace 2 horas",
    "notifications.failedTransaction": "Transacción Fallida",
    "notifications.transactionFailedDesc": "No se pudo procesar la transacción #12345",
    "notifications.fiveHoursAgo": "hace 5 horas",
    "notifications.accountUpdate": "Actualización de Cuenta",
    "notifications.accountUpdateDesc": "Los detalles de tu cuenta han sido actualizados",
    "notifications.oneDay": "hace 1 día",
    "profile.title": "Perfil",
    "profile.subtitle": "Administra la información de tu cuenta",
    "profile.personalInfo": "Información Personal",
    "profile.personalInfoDesc": "Los detalles básicos de tu perfil",
    "profile.fullName": "Nombre Completo",
    "profile.email": "Correo Electrónico",
    "profile.phone": "Teléfono",
    "profile.location": "Ubicación",
    "profile.accountStats": "Estadísticas de la Cuenta",
    "profile.memberSince": "Miembro Desde",
    "profile.lastLogin": "Último Inicio de Sesión",
    "profile.accountStatus": "Estado de la Cuenta",
    "user.email": "john.doe@example.com",
    "user.phone": "+1 (555) 123-4567",
    "user.location": "San Francisco, CA",
    "user.memberSince": "Enero 2024",
    "user.lastLogin": "hace 2 horas",
    "user.accountStatus": "Activa",
  },
  "fr": {
    // App
    "app.title": "Finance",
    
    // User
    "user.name": "John Doe",
    "user.role": "Utilisateur Premium",
    
    // Sidebar
    "sidebar.dashboard": "Tableau de bord",
    "sidebar.analytics": "Analytique",
    "sidebar.transactions": "Transactions",
    "sidebar.notifications": "Notifications",
    "sidebar.profile": "Profil",
    "sidebar.guide": "Guide d'utilisateur",
    "sidebar.settings": "Paramètres",
    "sidebar.tasks": "Tâches",
    
    // Tasks
    "tasks.title": "Gestionnaire de Tâches",
    "tasks.comingSoon": "Fonctionnalité de gestion des tâches à venir...",
    
    // Settings
    "settings.title": "Paramètres",
    "settings.subtitle": "Personnalisez vos préférences de compte",
    "settings.preferences": "Préférences",
    "settings.notifications": "Notifications",
    "settings.notifications.desc": "Recevoir des notifications de l'application",
    "settings.darkMode": "Mode Sombre",
    "settings.darkMode.desc": "Activer le thème du mode sombre",
    "settings.language": "Langue",
    "settings.language.desc": "Choisissez votre langue préférée",
    "settings.security": "Sécurité",
    "settings.twoFactor": "Authentification à Deux Facteurs",
    "settings.twoFactor.desc": "Ajouter une couche de sécurité supplémentaire",
    "settings.passwordProtection": "Protection par Mot de Passe",
    "settings.passwordProtection.desc": "Demander un mot de passe pour les actions sensibles",
    "analytics.title": "Aperçu Analytique",
    "analytics.subtitle": "Suivez vos performances financières",
    "analytics.performanceTrends": "Tendances de Performance",
    "transactions.title": "Transactions",
    "transactions.subtitle": "Activité financière récente",
    "transactions.recentTransactions": "Transactions Récentes",
    "transactions.shopping": "Achats",
    "transactions.timeAgo": "il y a 2 heures",
    "notifications.title": "Notifications",
    "notifications.subtitle": "Bleiver informé de l'activité de votre compte",
    "notifications.recentNotifications": "Notifications Récentes",
    "notifications.paymentSuccessful": "Paiement Réussi",
    "notifications.paymentSuccessDesc": "Votre dernier paiement a été traité avec succès",
    "notifications.twoHoursAgo": "il y a 2 heures",
    "notifications.failedTransaction": "Transaction Échouée",
    "notifications.transactionFailedDesc": "Impossible de traiter la transaction #12345",
    "notifications.fiveHoursAgo": "il y a 5 heures",
    "notifications.accountUpdate": "Mise à Jour du Compte",
    "notifications.accountUpdateDesc": "Les détails de votre compte ont été mis à jour",
    "notifications.oneDay": "il y a 1 jour",
    "profile.title": "Profil",
    "profile.subtitle": "Gérez les informations de votre compte",
    "profile.personalInfo": "Informations Personnelles",
    "profile.personalInfoDesc": "Les détails de base de votre profil",
    "profile.fullName": "Nom Complet",
    "profile.email": "Courriel",
    "profile.phone": "Téléphone",
    "profile.location": "Emplacement",
    "profile.accountStats": "Statistiques du Compte",
    "profile.memberSince": "Membre Depuis",
    "profile.lastLogin": "Dernière Connexion",
    "profile.accountStatus": "État du Compte",
    "user.email": "john.doe@example.com",
    "user.phone": "+1 (555) 123-4567",
    "user.location": "San Francisco, CA",
    "user.memberSince": "Janvier 2024",
    "user.lastLogin": "il y a 2 heures",
    "user.accountStatus": "Actif",
  },
  "de": {
    // App
    "app.title": "Finanzen",
    
    // User
    "user.name": "John Doe",
    "user.role": "Premium Benutzer",
    
    // Sidebar
    "sidebar.dashboard": "Dashboard",
    "sidebar.analytics": "Analytik",
    "sidebar.transactions": "Transaktionen",
    "sidebar.notifications": "Benachrichtigungen",
    "sidebar.profile": "Profil",
    "sidebar.guide": "Benutzerhandbuch",
    "sidebar.settings": "Einstellungen",
    "sidebar.tasks": "Aufgaben",
    
    // Tasks
    "tasks.title": "Aufgabenmanager",
    "tasks.comingSoon": "Aufgabenverwaltungsfunktionalität in Kürze verfügbar...",
    
    // Settings
    "settings.title": "Einstellungen",
    "settings.subtitle": "Passen Sie Ihre Kontoeinstellungen an",
    "settings.preferences": "Präferenzen",
    "settings.notifications": "Benachrichtigungen",
    "settings.notifications.desc": "App-Benachrichtigungen erhalten",
    "settings.darkMode": "Dunkelmodus",
    "settings.darkMode.desc": "Dunkelmodus-Theme umschalten",
    "settings.language": "Sprache",
    "settings.language.desc": "Wählen Sie Ihre bevorzugte Sprache",
    "settings.security": "Sicherheit",
    "settings.twoFactor": "Zwei-Faktor-Authentifizierung",
    "settings.twoFactor.desc": "Fügen Sie eine zusätzliche Sicherheitsebene hinzu",
    "settings.passwordProtection": "Passwortschutz",
    "settings.passwordProtection.desc": "Wachtwort für sensible Aktionen anfordern",
    "analytics.title": "Analytische Übersicht",
    "analytics.subtitle": "Verfolgen Sie Ihre finanzielle Leistung",
    "analytics.performanceTrends": "Leistungstrends",
    "transactions.title": "Transaktionen",
    "transactions.subtitle": "Letzte finanzielle Aktivitäten",
    "transactions.recentTransactions": "Letzte Transaktionen",
    "transactions.shopping": "Einkaufen",
    "transactions.timeAgo": "vor 2 Stunden",
    "notifications.title": "Benachrichtigungen",
    "notifications.subtitle": "Bleiben Sie über Ihre Kontoaktivitäten auf dem Laufenden",
    "notifications.recentNotifications": "Letzte Benachrichtigungen",
    "notifications.paymentSuccessful": "Zahlung Erfolgreich",
    "notifications.paymentSuccessDesc": "Ihre letzte Zahlung wurde erfolgreich verarbeitet",
    "notifications.twoHoursAgo": "vor 2 Stunden",
    "notifications.failedTransaction": "Fehlgeschlagene Transaktion",
    "notifications.transactionFailedDesc": "Transaktion #12345 konnte nicht verarbeitet werden",
    "notifications.fiveHoursAgo": "vor 5 Stunden",
    "notifications.accountUpdate": "Mise à Jour du Compte",
    "notifications.accountUpdateDesc": "Ihre Kontodetails wurden aktualisiert",
    "notifications.oneDay": "vor 1 Tag",
    "profile.title": "Profil",
    "profile.subtitle": "Verwalten Sie Ihre Kontoinformationen",
    "profile.personalInfo": "Persönliche Informationen",
    "profile.personalInfoDesc": "Ihre grundlegenden Profildetails",
    "profile.fullName": "Vollständiger Name",
    "profile.email": "E-Mail",
    "profile.phone": "Telefon",
    "profile.location": "Standort",
    "profile.accountStats": "Kontostatistiken",
    "profile.memberSince": "Mitglied Seit",
    "profile.lastLogin": "Letzte Anmeldung",
    "profile.accountStatus": "Kontostatus",
    "user.email": "john.doe@example.com",
    "user.phone": "+1 (555) 123-4567",
    "user.location": "San Francisco, CA",
    "user.memberSince": "Januar 2024",
    "user.lastLogin": "vor 2 Stunden",
    "user.accountStatus": "Aktiv",
  },
  "nl": {
    // App
    "app.title": "Financiën",
    
    // User
    "user.name": "John Doe",
    "user.role": "Premium Gebruiker",
    
    // Sidebar
    "sidebar.dashboard": "Dashboard",
    "sidebar.analytics": "Analyse",
    "sidebar.transactions": "Transacties",
    "sidebar.notifications": "Meldingen",
    "sidebar.profile": "Profiel",
    "sidebar.guide": "Gebruikersgids",
    "sidebar.settings": "Instellingen",
    "sidebar.tasks": "Taken",
    
    // Tasks
    "tasks.title": "Taakbeheer",
    "tasks.comingSoon": "Taakbeheerfunctionaliteit binnenkort beschikbaar...",
    
    // Settings
    "settings.title": "Instellingen",
    "settings.subtitle": "Pas je accountvoorkeuren aan",
    "settings.preferences": "Voorkeuren",
    "settings.notifications": "Meldingen",
    "settings.notifications.desc": "Ontvang toepassingskennisgewings",
    "settings.darkMode": "Donkere modus",
    "settings.darkMode.desc": "Skakel donker modus tema",
    "settings.language": "Taal",
    "settings.language.desc": "Kies je voorkeurstaal",
    "settings.security": "Beveiliging",
    "settings.twoFactor": "Tweefactorauthenticatie",
    "settings.twoFactor.desc": "Voeg een extra beveiligingslaag toe",
    "settings.passwordProtection": "Wachtwoordbeveiliging",
    "settings.passwordProtection.desc": "Vereis wagwoord voor sensitiewe aksies",
    "analytics.title": "Analyse-overzicht",
    "analytics.subtitle": "Volg je financiële prestaties",
    "analytics.performanceTrends": "Prestatie trends",
    "transactions.title": "Transacties",
    "transactions.subtitle": "Recente financiële activiteit",
    "transactions.recentTransactions": "Recente transacties",
    "transactions.shopping": "Winkelen",
    "transactions.timeAgo": "2 uur geleden",
    "notifications.title": "Meldingen",
    "notifications.subtitle": "Bly op hoogte van je accountactiviteit",
    "notifications.recentNotifications": "Recente meldingen",
    "notifications.paymentSuccessful": "Betaling succesvol",
    "notifications.paymentSuccessDesc": "Je laatste betaling is succesvol verwerkt",
    "notifications.twoHoursAgo": "2 uur geleden",
    "notifications.failedTransaction": "Mislukte transactie",
    "notifications.transactionFailedDesc": "Kon nie transactie #12345 verwerken nie",
    "notifications.fiveHoursAgo": "5 uur geleden",
    "notifications.accountUpdate": "Accountupdate",
    "notifications.accountUpdateDesc": "Je accountgegevens zijn bijgewerkt",
    "notifications.oneDay": "1 dag geleden",
    "profile.title": "Profiel",
    "profile.subtitle": "Bestuur jou rekeninginligting",
    "profile.personalInfo": "Persoonlijke informatie",
    "profile.personalInfoDesc": "Je basisprofielgegevens",
    "profile.fullName": "Volledige naam",
    "profile.email": "E-mail",
    "profile.phone": "Telefoon",
    "profile.location": "Locatie",
    "profile.accountStats": "Accountstatistieken",
    "profile.memberSince": "Lid sinds",
    "profile.lastLogin": "Laatste aanmelding",
    "profile.accountStatus": "Accountstatus",
    "user.email": "john.doe@example.com",
    "user.phone": "+1 (555) 123-4567",
    "user.location": "San Francisco, CA",
    "user.memberSince": "Januari 2024",
    "user.lastLogin": "2 uur geleden",
    "user.accountStatus": "Actief",
  },
  "af": {
    // App
    "app.title": "Finansies",
    
    // User
    "user.name": "John Doe",
    "user.role": "Premium Gebruiker",
    
    // Sidebar
    "sidebar.dashboard": "Paneelbord",
    "sidebar.analytics": "Analise",
    "sidebar.transactions": "Transaksies",
    "sidebar.notifications": "Kennisgewings",
    "sidebar.profile": "Profiel",
    "sidebar.guide": "Gebruikersgids",
    "sidebar.settings": "Instellings",
    "sidebar.tasks": "Take",
    
    // Tasks
    "tasks.title": "Taakbestuurder",
    "tasks.comingSoon": "Taakbestuursfunksionaliteit kom binnekort...",
    
    // Settings
    "settings.title": "Instellings",
    "settings.subtitle": "Pas jou rekeningstvoorkeure aan",
    "settings.preferences": "Voorkeure",
    "settings.notifications": "Kennisgewings",
    "settings.notifications.desc": "Ontvang toepassingskennisgewings",
    "settings.darkMode": "Donker Modus",
    "settings.darkMode.desc": "Skakel donker modus tema",
    "settings.language": "Taal",
    "settings.language.desc": "Kies jou voorkeurstaal",
    "settings.security": "Sekuriteit",
    "settings.twoFactor": "Twee-faktor Verifikasie",
    "settings.twoFactor.desc": "Voeg 'n ekstra laag sekuriteit by",
    "settings.passwordProtection": "Wagwoordbeskerming",
    "settings.passwordProtection.desc": "Vereis wagwoord vir sensitiewe aksies",
    "analytics.title": "Analitiese Oorsig",
    "analytics.subtitle": "Volg jou finansiële prestasie",
    "analytics.performanceTrends": "Prestasie tendense",
    "transactions.title": "Transaksies",
    "transactions.subtitle": "Onlangse finansiële aktiwiteit",
    "transactions.recentTransactions": "Onlangse transaksies",
    "transactions.shopping": "Inkopies",
    "transactions.timeAgo": "2 uur gelede",
    "notifications.title": "Kennisgewings",
    "notifications.subtitle": "Bly op hoogte van jou rekeningaktiwiteit",
    "notifications.recentNotifications": "Onlangse kennisgewings",
    "notifications.paymentSuccessful": "Betaling suksesvol",
    "notifications.paymentSuccessDesc": "Jou laaste betaling is suksesvol verwerk",
    "notifications.twoHoursAgo": "2 uur gelede",
    "notifications.failedTransaction": "Mislukte transaksie",
    "notifications.transactionFailedDesc": "Kon nie transactie #12345 verwerk nie",
    "notifications.fiveHoursAgo": "5 uur gelede",
    "notifications.accountUpdate": "Rekeningopdatering",
    "notifications.accountUpdateDesc": "Jou rekeningbesonderhede is opgedateer",
    "notifications.oneDay": "1 dag gelede",
    "profile.title": "Profiel",
    "profile.subtitle": "Bestuur jou rekeninginligting",
    "profile.personalInfo": "Persoonlike inligting",
    "profile.personalInfoDesc": "Jou basiese profielbesonderhede",
    "profile.fullName": "Volle naam",
    "profile.email": "E-pos",
    "profile.phone": "Foon",
    "profile.location": "Ligging",
    "profile.accountStats": "Rekeningstatistieke",
    "profile.memberSince": "Lid sedert",
    "profile.lastLogin": "Laaste aanteken",
    "profile.accountStatus": "Rekeningstatus",
    "user.email": "john.doe@example.com",
    "user.phone": "+1 (555) 123-4567",
    "user.location": "San Francisco, CA",
    "user.memberSince": "Januarie 2024",
    "user.lastLogin": "2 uur gelede",
    "user.accountStatus": "Aktief",
  }
};

const defaultLanguageContext: LanguageContextType = {
  currentLanguage: languages[0],
  setLanguage: () => {},
  t: (key: string) => key,
};

export const LanguageContext = createContext<LanguageContextType>(defaultLanguageContext);

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  const setLanguage = (languageValue: string) => {
    const language = languages.find(lang => lang.value === languageValue);
    if (language) {
      setCurrentLanguage(language);
      localStorage.setItem('appLanguage', languageValue);
      console.log("Language changed to:", language.label);
    }
  };

  React.useEffect(() => {
    const savedLanguage = localStorage.getItem('appLanguage');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const t = (key: string): string | string[] => {
    const langTranslations = translations[currentLanguage.value];
    return langTranslations && langTranslations[key] ? langTranslations[key] : key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
