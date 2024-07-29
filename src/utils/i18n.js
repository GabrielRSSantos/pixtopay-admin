import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import br from './br.json';
import pt from './pt.json';

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'br',
    resources: {
        en: en,
        br: br,
        pt: pt,
    },
    react: {
        useSuspense: false,
    },
    interpolation: {
        escapeValue: false,
    }
})

export default i18n;