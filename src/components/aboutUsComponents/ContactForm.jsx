import { useTranslation } from "react-i18next";

function ContactForm() {
  const { t } = useTranslation();
  return (
    <form className="w-[303px] mt-[55px] mx-auto">
      <input
        type="email"
        placeholder={t("home.aboutUs.contactForm.email")}
        className="w-full py-[13px] pl-[10px] text-[14px]"
      />
      <div className="flex mt-[21px] gap-[13px]">
        <input
          type="text"
          placeholder={t("home.aboutUs.contactForm.firstName")}
          className="py-[13px] pl-[10px] text-[14px] w-full"
        />
        <input
          type="text"
          placeholder={t("home.aboutUs.contactForm.lastName")}
          className="py-[13px] pl-[10px] text-[14px] w-full"
        />
      </div>
      <input
        type="text"
        placeholder={t("home.aboutUs.contactForm.address")}
        className="w-full py-[13px] pl-[10px] text-[14px] mt-[21px]"
      />
      <input
        type="text"
        placeholder={t("home.aboutUs.contactForm.city")}
        className="w-full py-[13px] pl-[10px] text-[14px] mt-[14px]"
      />
      <div className="mt-[18px] flex gap-[14px]">
        <select
          className="pl-[7px] py-[14px] pr-[16px] text-[14px] text-[#908F8F] w-full"
          id="Countries"
        >
          <option value="">{t("home.aboutUs.contactForm.country")}</option>
        </select>
        <select
          className="pl-[7px] py-[14px] pr-[16px] text-[14px] text-[#908F8F] w-full"
          id="States"
        >
          <option value="">{t("home.aboutUs.contactForm.state")}</option>
        </select>
        <select
          className="pl-[7px] py-[14px] pr-[16px] text-[14px] text-[#908F8F] w-full"
          id="Zip Code"
        >
          <option value="">{t("home.aboutUs.contactForm.zipCode")}</option>
        </select>
      </div>
      <input
        type="text"
        placeholder={t("home.aboutUs.contactForm.phone")}
        className="w-full py-[13px] pl-[10px] text-[14px] mt-[25px]"
      />
      <button className="bg-[#fff] px-[10px] py-[12px] mt-[33px] flex mx-auto text-[16px] text-color-black font-semibold">
        {t("home.aboutUs.contactForm.submit")}
      </button>
    </form>
  );
}

export default ContactForm;
