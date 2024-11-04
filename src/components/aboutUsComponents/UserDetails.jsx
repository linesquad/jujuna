import { useTranslation } from "react-i18next";
import OneInputField from "./OneInputField";
import { useForm } from "react-hook-form";
import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";

function UserDetails() {
  const { t } = useTranslation();
  const darkMode = useSelector(getMode);

  const form = useForm();
  const { register, watch, handleSubmit, formState, reset } = form;
  const { errors, isSubmitSuccessful, isSubmitting } = formState;

  const formRef = useRef();

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  async function onSubmit() {
    try {
      await emailjs.sendForm(
        "service_r2rzhyi",
        "template_8e18ch6",
        formRef.current,
        "lCDNh2nw5t1Ek4MQ8"
      );
      toast.success(t(`toast.success`));
    } catch (error) {
      toast.error(t(`toast.error`));
    }
  }

  return (
    <div
      className={`px-[26px] pt-[16px] md:pt-[30px] pb-[19px] ${
        darkMode ? "bg-[#5f3dc4] " : "bg-[#fff]"
      } rounded-t-[20px] max-w-[361px] w-full  md:max-w-[450px] md:w-[450px] lg:w-[630px] lg:max-w-[630px] mx-auto md:mx-[0px] md:rounded-l-[20px] md:rounded-tr-[0px] z-10`}
    >
      <h2
        className={` ${
          darkMode ? "text-[#fff]" : "text-[#1e1e1e]"
        }  text-[24px] font-bold text-center`}
      >
        {t("home.aboutUs.contactForm.title")}
      </h2>
      <form
        className="mt-[31px] mx-auto md:mx-[0px] flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
        ref={formRef}
      >
        <div className="flex flex-col gap-[23px] md:gap-[30px]">
          <OneInputField
            label={t("home.aboutUs.contactForm.name")}
            inputType="text"
            placeholder={t("home.aboutUs.contactForm.inputName")}
            register={register}
            name="name"
            isRequired={true}
            errorMessage={t("home.aboutUs.contactForm.nameError")}
            error={errors?.name?.message}
            pattern={{
              value: /^[A-Za-z\s]*$/,
              message: t("home.aboutUs.contactForm.namePattern"),
            }}
          />
          <OneInputField
            label={t("home.aboutUs.contactForm.email")}
            inputType="email"
            placeholder={t("home.aboutUs.contactForm.emailInput")}
            register={register}
            name="email"
            isRequired={true}
            errorMessage={t("home.aboutUs.contactForm.emailError")}
            error={errors?.email?.message}
            pattern={{
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: t("home.aboutUs.contactForm.emailPattern"),
            }}
          />
          <OneInputField
            label={t("home.aboutUs.contactForm.article")}
            inputType="text"
            placeholder={t("home.aboutUs.contactForm.articleInput")}
            register={register}
            name="article"
            isRequired={true}
            errorMessage={t("home.aboutUs.contactForm.articleError")}
            error={errors?.article?.message}
          />
          <OneInputField
            label={t("home.aboutUs.contactForm.message")}
            placeholder={t("home.aboutUs.contactForm.messageInput")}
            textType="message"
            register={register}
            name="message"
            isRequired={true}
            errorMessage={t("home.aboutUs.contactForm.messageError")}
            error={errors?.message?.message}
            watch={watch}
          />
        </div>
        <button
          className={`px-[33px] py-[16px] w-[141px] text-[15px] text-[#634A81] bg-[#eaeaea] mt-[13px] md:mt-[35px] rounded-[12px] self-end ${
            isSubmitting ? "cursor-not-allowed" : ""
          }`}
          disabled={isSubmitting}
        >
          {t("home.aboutUs.contactForm.button")}
        </button>
      </form>
      <ToastContainer className="mt-[60px]" />
    </div>
  );
}

export default UserDetails;
