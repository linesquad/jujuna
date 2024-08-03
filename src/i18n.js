import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: localStorage.getItem("lng") || "ge",
    resources: {
      ge: {
        translation: {
          navbar: {
            about: "ჩვენზე",
            cocktail: "კოქტეილი",
            wines: "ღვინო",
            news: "სიახლეები",
            enter: "შესვლა",
          },
          connectForm: {
            tel: "ტელეფონი",
            mail: "ელ.ფოსტა",
            message: "მესიჯი",
            enterPhoneNumber: "მიუთითეთ ნომერი...",
            enterEmail: "მიუთითეთ მაილი...",
            writeMessage: "დაწერეთ მესიჯი...",
            send: "გაგზავნა",
          },
        },
      },
      en: {
        translation: {
          navbar: {
            about: "About Us",
            cocktail: "Cocktail",
            wines: "Wine",
            news: "News",
            enter: "Enter",
          },
          connectForm: {
            tel: "Mobile Number",
            mail: "Email",
            message: "Message",
            enterPhoneNumber: "Enter a phone number...",
            enterEmail: "Enter a email address...",
            writeMessage: "Write a message...",
            send: "Submit",
          },
        },
      },
    },
  });

export default i18n;
