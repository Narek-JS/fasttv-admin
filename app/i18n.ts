import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "./locales/en.json";
import i18n from "i18next";

i18n
  .use(LanguageDetector) // Detects language from browser settings
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already escapes
    },
    resources: {
      en: enTranslation,
    },
  });

export default i18n;
