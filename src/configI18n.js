import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languages from './locales';

/**
 * Multilingual setup.
 */
i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: languages,
        lng: "en",
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
