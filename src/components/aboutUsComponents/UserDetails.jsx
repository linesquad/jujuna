import { useTranslation } from "react-i18next";
import OneInputField from "./OneInputField";

function UserDetails() {
  const { t } = useTranslation();
  return (
    <div className="px-[26px] pt-[16px] pb-[19px] bg-[#fff] rounded-t-[20px] max-w-[361px] mx-auto">
      <h2 className="text-[#1e1e1e] text-[24px] font-bold text-center">
        {t("home.aboutUs.contactForm.title")}
      </h2>
      <form className="w-[303px] mt-[31px] mx-auto">
        <div className="flex flex-col gap-[23px]">
          <OneInputField
            label={t("home.aboutUs.contactForm.name")}
            inputType="text"
            placeholder={t("home.aboutUs.contactForm.inputName")}
          />
          <OneInputField
            label={t("home.aboutUs.contactForm.email")}
            inputType="email"
            placeholder={t("home.aboutUs.contactForm.emailInput")}
          />
          <OneInputField
            label={t("home.aboutUs.contactForm.article")}
            inputType="text"
            placeholder={t("home.aboutUs.contactForm.articleInput")}
          />
          <OneInputField
            label={t("home.aboutUs.contactForm.message")}
            placeholder={t("home.aboutUs.contactForm.messageInput")}
            textType="message"
          />
        </div>
      </form>
    </div>
  );
}

export default UserDetails;
