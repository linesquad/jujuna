import { useTranslation } from "react-i18next";
import OneSignupInput from "./OneSignupInput";
import { useState } from "react";
import { useForm } from "react-hook-form";

function SignUp() {
  const { t } = useTranslation();
  const [isRemembered, setIsRemembered] = useState(false);

  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  console.log(errors);

  async function onSubmit(data) {
    try {
      const response = await fetch("http://localhost:8001/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `HTTP error! Status: ${response.status}. Message: ${errorText}`
        );
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }

  return (
    <form className="px-[24px]" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-[5px] mt-[14px]">
        <div className="flex flex-col gap-[5px]">
          <p
            className={`font-semibold text-[12px] ${
              errors?.email?.message ? "text-red-600" : ""
            }`}
          >
            {t("auth.email")}*
          </p>
          <OneSignupInput
            type="email"
            placeholder={t("auth.email")}
            register={register}
            name="email"
            errorMessage={t("auth.emailError")}
            error={errors?.email?.message}
            pattern={{
              value: /^[a-zA-Z0-9._%+-]+@?[a-zA-Z0-9.-]+\.[com]{3}$/,
              message: t("auth.emailPattern"),
            }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-[5px] mt-[14px]">
        <div className="flex flex-col gap-[5px]">
          <p
            className={`font-semibold text-[12px] ${
              errors?.username?.message ? "text-red-600" : ""
            }`}
          >
            {t("auth.fullName")}*
          </p>
          <OneSignupInput
            type="text"
            placeholder={t("auth.fullName")}
            register={register}
            name="username"
            errorMessage={t("auth.fullnameError")}
            error={errors?.username?.message}
          />
        </div>
      </div>

      <div className="flex flex-col gap-[5px] mt-[14px]">
        <div className="flex flex-col gap-[5px]">
          <p
            className={`font-semibold text-[12px] ${
              errors?.mobile?.message ? "text-red-600" : ""
            }`}
          >
            {t("auth.mobile")}*
          </p>
          <OneSignupInput
            type="text"
            placeholder={t("auth.mobile")}
            register={register}
            name="phone"
            errorMessage={t("auth.mobileError")}
            error={errors?.mobile?.message}
            pattern={{
              value: /^[0-9]+$/,
              message: t("auth.mobilePattern"),
            }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-[5px] mt-[14px]">
        <div className="flex flex-col gap-[5px]">
          <p
            className={`font-semibold text-[12px] ${
              errors?.password?.message ? "text-red-600" : ""
            }`}
          >
            {t("auth.password")}*
          </p>
          <div className="flex items-start gap-[20px]">
            <OneSignupInput
              type="password"
              placeholder={t("auth.password")}
              register={register}
              name="password"
              errorMessage={t("auth.passwordError")}
              error={errors?.password?.message}
            />
            <OneSignupInput
              type="password"
              placeholder={t("auth.repeatPassword")}
              name="confirmPassword"
              register={register}
              errorMessage={t("auth.passwordError")}
              error={errors?.repeatPassword?.message}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-[5px] mt-[20px]">
        <div
          className={`w-[8px] h-[8px] border border-[#767676] ${
            isRemembered ? "bg-[#5C5C5C]" : ""
          }`}
          onClick={() => setIsRemembered((remember) => !remember)}
        ></div>
        <p className="text-[12px] font-semibold">დამახსოვრება</p>
      </div>

      <div>
        <button className="bg-[#000] w-full rounded-[42px] text-color-primary h-[42px] mt-[20px]">
          რეგისტრაცია
        </button>
      </div>
    </form>
  );
}

export default SignUp;
