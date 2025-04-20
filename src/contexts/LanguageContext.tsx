
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
  t: (key: string) => string;
}

// Simple translations object
const translations: Record<string, Record<string, string>> = {
  "en-US": {
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
    "settings.passwordProtection.desc": "Require password for sensitive actions"
  },
  "es": {
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
    "settings.twoFactor.desc": "Añade una capa extra de seguridad",
    "settings.passwordProtection": "Protección con contraseña",
    "settings.passwordProtection.desc": "Requerir contraseña para acciones sensibles"
  },
  "fr": {
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
    "settings.passwordProtection.desc": "Demander un mot de passe pour les actions sensibles"
  },
  "de": {
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
    "settings.passwordProtection.desc": "Passwort für sensible Aktionen anfordern"
  },
  "nl": {
    "settings.title": "Instellingen",
    "settings.subtitle": "Pas je accountvoorkeuren aan",
    "settings.preferences": "Voorkeuren",
    "settings.notifications": "Meldingen",
    "settings.notifications.desc": "Ontvang app-meldingen",
    "settings.darkMode": "Donkere modus",
    "settings.darkMode.desc": "Donkere modusthema in-/uitschakelen",
    "settings.language": "Taal",
    "settings.language.desc": "Kies je voorkeurstaal",
    "settings.security": "Beveiliging",
    "settings.twoFactor": "Tweefactorauthenticatie",
    "settings.twoFactor.desc": "Voeg een extra beveiligingslaag toe",
    "settings.passwordProtection": "Wachtwoordbeveiliging",
    "settings.passwordProtection.desc": "Wachtwoord vereisen voor gevoelige acties"
  },
  "af": {
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
    "settings.passwordProtection.desc": "Vereis wagwoord vir sensitiewe aksies"
  }
};

// Default language context
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

  // Initialize language from localStorage if available
  React.useEffect(() => {
    const savedLanguage = localStorage.getItem('appLanguage');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Translate function
  const t = (key: string): string => {
    const langTranslations = translations[currentLanguage.value];
    return langTranslations && langTranslations[key] ? langTranslations[key] : key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
