import ContactForm from "./ContactForm";
import backArrow from "/images/backArrow.png";
import masterCard from "/images/masterCard.png";
import visa from "/images/visa.png";
import ruPay from "/images/ruPay.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function UserDetails() {
  const { t } = useTranslation();
  return (
    <div className="px-[14px] pb-[19px] bg-[#fff] rounded-t-[20px] max-w-[361px] mx-auto">
      <Link to={-1}>
        <img src={backArrow} alt="back-arrow" className="pt-[3px]" />
      </Link>
      <h2 className="text-[#1e1e1e] text-[15px] font-bold text-center">
        {t("home.aboutUs.contactForm.title")}
      </h2>
      <ContactForm />

      <p className="text-[#1E1E1E] font-bold text-[15px] mt-[45px] text-center">
        {t("home.aboutUs.contactForm.method")}
      </p>
      <div className="bg-[#D9D9D9] rounded-[7px] flex items-center justify-between gap-[10px] py-[21px] px-[15px] mt-[20px]">
        <div className="flex flex-col">
          <p className="text-[#908F8F] text-[15px]">
            {t("home.aboutUs.contactForm.card")}
          </p>
          <p className="text-[#908F8F] text-[11px]">
            {t("home.aboutUs.contactForm.safety")}
          </p>
        </div>
        <div className="flex gap-[10px]">
          <img src={masterCard} alt="mastercard" />
          <img src={visa} alt="visa" />
          <img src={ruPay} alt="ruPay" />
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
