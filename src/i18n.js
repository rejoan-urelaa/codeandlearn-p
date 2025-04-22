import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslations from './locales/en.json'
import arTranslations from './locales/ar.json'
import bnTranslations from './locales/bn.json'

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: enTranslations },
        ar: { translation: arTranslations },
        bn: { translation: bnTranslations }
    },
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
})

export default i18n
