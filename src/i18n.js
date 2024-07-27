import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "ge",
    resources: {
      ge: {
        translation: {
          greeting: "გამარჯობა",
          navbar: {
            about: "ჩვენს შესახებ",
            news: "სიახლეები",
            bottle: "ბოთლი",
            cocktails: "კოქტეილები",
            mobileBar: "მობილური ბარი",
            contact: "კონტაქტი",
          },
        },
      },
      en: {
        translation: {
          greeting: "Hello",
          navbar: {
            about: "About Us",
            news: "News",
            bottle: "Bottle",
            cocktails: "Cocktails",
            mobileBar: "Mobile Bar",
            contact: "Contact",
          },
        },
      },
    },
  });

export default i18n;
