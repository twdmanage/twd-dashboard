
import { createContext, useContext, useState, ReactNode } from "react";
import { languages, Language, LanguageContextType, TranslationValue } from "./types";
import { translations } from "./translations";

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: languages[0],
  setLanguage: () => {},
  t: () => "",
});

// Export the useLanguage hook for components to access the language context
export const useLanguage = () => useContext(LanguageContext);

// Export the languages array for use in components
export { languages };

// Language Provider component to wrap the app with
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // State to track the current language
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    // Try to get the language from localStorage
    const savedLanguage = localStorage.getItem("language");
    
    // If a language was saved and it exists in our languages array, use it
    if (savedLanguage) {
      const found = languages.find(lang => lang.value === savedLanguage);
      if (found) {
        return found;
      }
    }
    
    // Otherwise default to the first language (English)
    return languages[0];
  });

  // Function to set a new language
  const setLanguage = (languageValue: string) => {
    const newLanguage = languages.find(lang => lang.value === languageValue);
    if (newLanguage) {
      setCurrentLanguage(newLanguage);
      localStorage.setItem("language", languageValue);
    }
  };

  // Translation function that returns the translation for a given key
  const t = (key: string): TranslationValue => {
    const currentTranslations = translations[currentLanguage.value] || translations["en-US"];
    // Check if the translation exists in the current language
    if (key in currentTranslations) {
      return currentTranslations[key];
    }
    
    // If not found in current language, try to get from English as fallback
    if (currentLanguage.value !== "en-US" && key in translations["en-US"]) {
      return translations["en-US"][key];
    }
    
    // If still not found, return the key itself as fallback
    return key;
  };

  // Provide the language context to the app
  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Helper function for rendering TranslationValue (exported for use in components)
export const renderTranslation = (translation: TranslationValue): React.ReactNode => {
  if (Array.isArray(translation)) {
    return (
      <ul className="list-disc pl-6 space-y-2">
        {translation.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
  return translation;
};
