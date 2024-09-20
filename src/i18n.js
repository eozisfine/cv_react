import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import enJSON from './locale/en.json'
import itaJSON from './locale/ita.json'

i18n.use(initReactI18next).init({
    resources: {
        en: { ...enJSON },
        ita: { ...itaJSON },
    }, // Where we're gonna put translations' files
    lng: "ita",     // Set the initial language of the App
});