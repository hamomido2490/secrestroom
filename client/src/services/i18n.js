import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ar from '../i18n/ar.json'
import en from '../i18n/en.json'

i18n.use(initReactI18next).init({
  resources: {
    ar: { translation: ar },
    en: { translation: en }
  },
  lng: 'ar',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
})

export default i18n