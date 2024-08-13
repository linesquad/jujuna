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
          home: {
            hero: {
              title: "ჟუჟუნა",
              heading: "ღვინო არც ისე წყნარი და არც ბოლომდე ცქრიალაა",
              description:
                "მას ადრეულ რთველზე მიღებული რქაწითელითა და მწვანეთი ვამზადებთ, ამიტომაც სახასიათო სიმჟავე აქვს. მეორადი დუღილისგან კი ბუნებრივ მსუბუქ გაზს იძენს.",
            },
            aboutUs: {
              title: "ჩვენ შესახებ",
              paragraph1:
                "ჟუჟუნა ძალიან მშრალი და მომჟავო ღვინო 2017 წელს შეიქმნა.",
              paragraph2:
                "ბევრი ფიქრისა და ღვინის მრავალწლიანი სიყვარულის შემდეგ, კომპანია, ჩვენივე სახსრებით, 6-მა მეგობარმა დავაარსეთ. ჩვენი მთავარი მიზანი, დალევის კულტურის განსხვავებული გამოცდილების შექმნა და აქამდე არარსებული თანამდეროვე ღვინის თანამედროვე კულტურაში პოპულარიზაცია იყო.",
              paragraph3:
                "ჩამოსასხმელი ჟუჟუნა საქართველოს უამრავ კაფე-ბარს მალევე დაუმეგობრდა და 2020 წელს ბოთლის ფორმითაც შეავსო მაღაზიათა ქსელი, რაც ასეთ მოკლე დროში, ჩვენთვის, მნიშვნელოვანი სიახლეა",
              paragraph4:
                "ჟუჟუს ისტორია საქართველოს ფარგლებსაც სცდება და ჩინეთსა და იაპონიაში ექსპორტით გააქვს თბილისური დალევის კულტურა.",
              contactForm: {
                title: "საკონტაქტო ინფორმაცია",
                name: "სახელი",
                inputName: "შეიყვანე სახელი",
                email: "ელ.ფოსტის მისამართი",
                emailInput: "შეიყვანეთ ელ.ფოსტა",
                article: "სტატიის შესახებ",
                articleInput: "შეიყვანეთ საგანი",
                message: "შეტყობინების ყუთი",
                messageInput: "შეიყვანეთ ტექსტი",
                button: "გაგზავნა",
              },
              contactDetails: {
                location: "წალკა, რუსთაველის 25, ქვემო ქართლი, საქართველო",
              },
            },
            bottle: {
              title: "ბოთლი",
              heading: "ჟუჟუნას ბოთლი",
              paragraph:
                "ჟუჟუს ბოთლი 250 მლ-იანია, რადგან სწორედ ეს პორცია ინარჩუნებს მისართმევად საუკეთესო ტემპერატურასა და გაზს.",
              volume: "მოცულობა",
              volumeQuantity: "250 მლ",
              alcohol: "ალკოჰოლი",
              alcoholQuantity: "11%",
              naturalWay: "ბუნებრივი გზა",
              naturalWayQuantity: "2.5 ბარი",
              price: "4.5₾",
            },
            mobileBar: {
              title: "მობილური ბარი",
              heading: "გავჩნდებით ყველგან, სადაც ისურვებ",
              paragraph:
                "ჟუჟუნას ბარი მოგაგნებს ყველგან, სადაც იქნები. თან მოიყვანს ბარმენს,  ქორფა ჟუჟუნას მაცივარს დააა შენი სტუმრების ჩაჟუჟუნებაზე უუამრავი კოქტეილით იზრუნებს.",
              moreBtn: "გაიგე მეტი",
            },
          },
          cocktails: {
            cocktailsHeader: {
              p1: "საწყისი გვერდი",
              p2: "კოქტეილები",
            },
            cocktailsSidebar: {
              alcohol: "ალკოჰოლური",
              country: "ქვეყანა",
              date: "გამოშვების წელი",
              volume: "ზომა/მოცულობა (მლ)",
            },
            cocktailDetails: {
              cart: "კალათაში დამატება",
              similarProducts: "მსგავსი პროდუქტები",
            },
            cocktailDetailsHeader: {
              homePage: "საწყისი გვერდი",
              cocktails: "კოქტეილები",
            },
          },
          news: {
            heroNews: {
              heading1: "ღვინოებს მიღმა",
              heading2: "აქ არანაირი პრეტენზია - მხოლოდ კარგი რამ.",
              text1: "აღმოაჩინეთ საქართველოს სული",
              text2: "მისი განსაკუთრებული ღვინოებით",
            },
            filterCategory: {
              wineClub: "ღვინის კლუბი",
              wineCocktail: "ღვინის კოქტეილი",
              inspiration: "ინსპირაცია",
              vineYard: "ვენახი",
              latestNews: "სიახლეები",
            },
            blogDisplay: {
              latestNews: "სიახლეები",
              moreBtn: "გაიგე მეტი",
            },
            newsDetails: {
              heading: "ბლოგები",
              share: "გააზიარე",
            },
          },
          winePage: {
            list: {
              li1: "ყველა",
              li2: "წითელი",
              li3: "თეთრი და როზე",
              li4: "საჩუქრები",
            },
            title: "ჩვენი პროდუქცია",
            filter: "გაფილტრვა",
            options: {
              price: "ფასი",
            },
            cart: "დამატება",
          },
          footer: {
            number: "ტელეფონი",
            numberValue: "+995579760006",
            email: "ელ.ფოსტა",
            emailValue: "Hello@jujuna.ge",
            adress: "მისამართი",
            adressValue: "ნინოშვილი #8 თბილისი,საქართველო",
            personalPol: "პერსონალური მონაცემების დაცვის პოლიტიკა",
            security: "უსაფრთხოების ცენტრი",
          },
          newsDetails: {
            backButton: "უკან",
            introduction: "შესავალი",
            share: "გაზიარება",
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
              "Fresh Zhuzhuna can be found in many cafes and bars and will make your favorite cocktails. Cold and sparkling Zhuzhu cocktail straight from the tap.",
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
          home: {
            hero: {
              title: "Zhuzhuna",
              heading: "The wine is neither still nor fully sparkling",
              description:
                "We prepare it with Rkatsiteli and green grapes obtained in the early harvest, that's why it has a characteristic acidity. Natural light gas is obtained from secondary fermentation.",
            },
            aboutUs: {
              title: "About us",
              paragraph1:
                "Zhuzhuna very dry and sour wine was created in 2017.",
              paragraph2:
                "After much thought and many years of love for wine, 6 friends founded the company with our own funds. Our main goal was to create a different experience of drinking culture and to popularize previously non-existent contemporary wine in modern culture.",
              paragraph3:
                "Bottling Zhuzhuna soon became friends with many cafes and bars in Georgia, and in 2020 it also filled the chain of stores in the form of a bottle, which is an important news for us in such a short period of time.",
              paragraph4:
                "The history of Zhuzhu goes beyond the borders of Georgia and exports the Tbilisi drinking culture to China and Japan.",
              contactForm: {
                title: "Contact Us",
                name: "Your Name",
                inputName: "Enter your name",
                email: "Email address",
                emailInput: "Enter your email",
                article: "About article",
                articleInput: "Enter your subject",
                message: "Message box",
                messageInput: "text here",
                button: "Send now",
              },
              contactDetails: {
                location: "25 Rustaveli Street, Tsalka, Kvemo Kartli, Georgia",
              },
            },
            bottle: {
              title: "Bottle",
              heading: "Zhuzhuna bottle",
              paragraph:
                "The Zhuzhu bottle is 250 ml, because this portion maintains the best temperature and gas for consumption.",
              volume: "Volume",
              volumeQuantity: "250 ml",
              alcohol: "Alcohol",
              alcoholQuantity: "11%",
              naturalWay: "The natural way",
              naturalWayQuantity: "2.5 ???",
              price: "GEL 4.5",
            },
            mobileBar: {
              title: "Mobile Bar",
              heading: "We will appear wherever you want",
              paragraph:
                "Zhuzhuna bar will find you wherever you are. He will bring a barman, a refrigerator of Korfa Zhuzhuna, and will take care of your guests' excitement with countless cocktails.",
              moreBtn: "Read more",
            },
          },
          cocktails: {
            cocktailsHeader: {
              p1: "Main page",
              p2: "Cocktails",
            },
            cocktailsSidebar: {
              alcohol: "Alcoholic",
              country: "Country",
              date: "Release year",
              volume: "Size/Volume (ml)",
            },
            cocktailDetails: {
              cart: "Add to cart",
              similarProducts: "Similar products",
            },
            cocktailDetailsHeader: {
              homePage: "Home page",
              cocktails: "Cocktails",
            },
          },
          news: {
            heroNews: {
              heading1: "BEHIND THE VINES",
              heading2: "No pretenses here — only the good stuff.",
              text1: "Discover the soul of Georgia through",
              text2: "its exceptional wines",
            },
            filterCategory: {
              wineClub: "WINE CLUB",
              wineCocktail: "WINE COCKTAIL",
              inspiration: "INSPIRATION",
              vineYard: "VINEYARD",
              latestNews: "LATEST NEWS",
            },
            blogDisplay: {
              latestNews: "Latest news",
              moreBtn: "Read more",
            },
            newsDetails: {
              heading: "Blogs",
              share: "Share",
            },
          },
          winePage: {
            list: {
              li1: "All Wines",
              li2: "Red Wine",
              li3: "White and Rose Wine",
              li4: "Gifts",
            },
            title: "Our Product",
            filter: "Filter",
            options: {
              price: "Price",
            },
            cart: "Add To Cart",
          },
          footer: {
            number: "mobile number",
            numberValue: "+995579760006",
            email: "e-mail",
            emailValue: "Hello@jujuna.ge",
            adress: "adress",
            adressValue: "#8 Ninoshvili street, Georgia",
            personalPol: "Personal data protection policy",
            security: "Security Center",
          },
          newsDetails: {
            backButton: "back",
            introduction: "Introduction",
            share: "Share",
          },
        },
      },
    },
  });

export default i18n;
