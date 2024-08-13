import { useTranslation } from "react-i18next";
import OneInputField from "./OneInputField";
import { useForm } from "react-hook-form";

function UserDetails() {
  const { t } = useTranslation();

  const form = useForm();
  const { register, handleSubmit } = form;

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="px-[26px] pt-[16px] pb-[19px] bg-[#fff] rounded-t-[20px] max-w-[361px] mx-auto">
      <h2 className="text-[#1e1e1e] text-[24px] font-bold text-center">
        {t("home.aboutUs.contactForm.title")}
      </h2>
      <form
        className="w-[303px] mt-[31px] mx-auto flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-[23px]">
          <OneInputField
            label={t("home.aboutUs.contactForm.name")}
            inputType="text"
            placeholder={t("home.aboutUs.contactForm.inputName")}
            register={register}
            name="name"
          />
          <OneInputField
            label={t("home.aboutUs.contactForm.email")}
            inputType="email"
            placeholder={t("home.aboutUs.contactForm.emailInput")}
            register={register}
            name="email"
          />
          <OneInputField
            label={t("home.aboutUs.contactForm.article")}
            inputType="text"
            placeholder={t("home.aboutUs.contactForm.articleInput")}
            register={register}
            name="article"
          />
          <OneInputField
            label={t("home.aboutUs.contactForm.message")}
            placeholder={t("home.aboutUs.contactForm.messageInput")}
            textType="message"
            register={register}
            name="message"
          />
        </div>
        <button className="px-[33px] py-[16px] w-[141px] text-[15px] text-[#634A81] bg-[#eaeaea] mt-[13px] rounded-[12px] self-end">
          {t("home.aboutUs.contactForm.button")}
        </button>
      </form>
    </div>
  );
}

export default UserDetails;
