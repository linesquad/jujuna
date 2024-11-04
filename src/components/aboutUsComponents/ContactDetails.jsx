import { useTranslation } from "react-i18next";
import location from "/images/location.svg";
import phone from "/images/phone.svg";
import gmail from "/images/gmail.svg";
import linkedIn from "/images/linkedIn.png";
import facebook from "/images/facebook.png";
import twitter from "/images/twitter.png";
import ContactInfo from "./ContactInfo";
import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";

function ContactDetails() {
  const { t } = useTranslation();
  const darkMode = useSelector(getMode);
  return (
    <div
      className={` ${
        darkMode ? "bg-[#eaeaea]" : "bg-[#4E3270]"
      } max-w-[361px] mx-auto pt-[20px] px-[40px] pb-[66px] rounded-b-[20px] [box-shadow:5px_8px_10px_0px_rgba(0,_0,_0,_0.25)] flex flex-col items-center md:mx-[0px] md:rounded-b-[0px] md:rounded-r-[20px] z-10`}
    >
      <h2
        className={` ${
          darkMode ? "text-color-black" : "text-color-primary"
        } text-[20px] font-bold text-center`}
      >
        {t("home.aboutUs.contactForm.title")}
      </h2>
      <div className="mt-[33px] flex flex-col gap-[46px]">
        <ContactInfo
          text={t("home.aboutUs.contactDetails.location")}
          image={location}
        />
        <ContactInfo
          text="+995 599 123 456"
          image={phone}
          textStyle="text-[16px] "
        />
        <ContactInfo
          text="junjuna123@gmail.com"
          image={gmail}
          textStyle="text-[16px] "
        />
      </div>
      <div className="flex items-center gap-[25px] mt-[70px]">
        <img
          src={linkedIn}
          alt="linkedin"
          className={darkMode ? "bg-[#55426E] rounded-md" : ""}
        />
        <img
          src={facebook}
          alt="facebook"
          className={darkMode ? "bg-[#55426E] rounded-md" : ""}
        />
        <img
          src={twitter}
          alt="twitter"
          className={darkMode ? "bg-[#55426E] rounded-md" : ""}
        />
      </div>
    </div>
  );
}

export default ContactDetails;
