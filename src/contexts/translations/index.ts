
import { TranslationValue } from "../types";
import { enTranslations } from "./en";
import { esTranslations } from "./es";
import { frTranslations } from "./fr";
import { deTranslations } from "./de";
import { nlTranslations } from "./nl";
import { afTranslations } from "./af";

export const translations: Record<string, Record<string, TranslationValue>> = {
  "en-US": enTranslations,
  "es": esTranslations,
  "fr": frTranslations,
  "de": deTranslations,
  "nl": nlTranslations,
  "af": afTranslations,
};
