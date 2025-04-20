
export interface Language {
  value: string;
  label: string;
}

export type TranslationValue = string | string[];

export interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (languageValue: string) => void;
  t: (key: string) => TranslationValue;
}

export const languages: Language[] = [
  { value: "en-US", label: "English (US)" },
  { value: "es", label: "Español" },
  { value: "fr", label: "Français" },
  { value: "de", label: "Deutsch" },
  { value: "nl", label: "Nederlands" },
  { value: "af", label: "Afrikaans" },
];
