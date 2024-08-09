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
            paragraphOne:
              "ქორფა ჟუჯუნა უამრავ კაფე-ბარში შეგხვდება და შენთვის საყვარელ კოქტეილებს ააცქრიალებს. ცივი და ჩქრიალა ჟუჟუ კოქტეილში პირდაპირ ონკანიდან ეშვება.",
            paragraphTwo:
              "ჩამოსასხმელი ჟუჟუნა კაფე-ბარებს მრავალჯერადი გამოყენების კეგებში მიეწოდება და დამატებით შეფუთვას არ საჭიროებს, რის გამოც გარემოსთან განსაკუთრებით მეგობრობს და არც მის დაბინძურებას იწვევს.",
          },
          toast: {
            success: "მესიჯი წარმატებით გაიგზავნა!",
            error: "ვერ გაიგზავნა მესიჯი. გთხოვთ ცადოთ ხელახლა.",
            hardError: "ვერ ხერხდება მესიჯის გაგზავნა",
          },
          pageNotFound: {
            title1: "404 შეცდომა",
            title2: "უუპს.....",
            subtitle: "გვერდი ვერ მოიძებნა",
            message:
              "გვერდი, რომელსაც ეძებთ ვერ მოიძებნა. გთხოვთ შეამოწმოთ URL ან დაბრუნდეთ მთავარ გვერდზე.",
            buttonText: "მთავარ გვერდზე დაბრუნება",
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
            send: "Send",
            paragraphOne:
              "Fresh Jujuna can be found in many cafes and bars and will make your favorite cocktails. Cold and sparkling juju cocktail straight from the tap.",
            paragraphTwo:
              "Bottling Zhuzhuna is supplied to cafes and bars in reusable kegs and does not require additional packaging, which is why it is particularly friendly to the environment and does not cause pollution.",
          },
          toast: {
            success: "Message sent successfully!",
            error: "Failed to send the message. Please try again.",
            hardError: "Form reference is null",
          },
          pageNotFound: {
            title1: "404 Error",
            title2: "Ooops.....",
            subtitle: "Page not found",
            message:
              "The page you’re looking for can’t be found. Please check the URL or go back to the homepage.",
            buttonText: "Back To Home",
          },
        },
      },
    },
  });

export default i18n;
