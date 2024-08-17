import { useTranslation } from "react-i18next";
import EnterOneInfo from "./EnterOneInfo";
import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";
import { useForm } from "react-hook-form";

function EnterUserInfo() {
  const { t } = useTranslation();
  const darkMode = useSelector(getMode);

  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form
      className="max-w-[400px] px-[12px] mx-auto mt-[31px] md:mx-[0px] md:w-[400px] lg:w-full lg:max-w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="lg:flex lg:items-start lg:gap-[40px]">
        <div className="flex flex-col gap-[20px] lg:w-[350px]">
          <EnterOneInfo
            type="text"
            value="მარიამ"
            register={register}
            name="firtsName"
          />
          <EnterOneInfo
            type="text"
            value="წიქარიშვილი"
            register={register}
            name="lastName"
          />
          <EnterOneInfo
            type="text"
            placeholder={t("userPage.inputMobile")}
            register={register}
            name="mobile"
            isRequired={true}
            errorMessage={t("userPage.mobileError")}
            error={errors?.mobile?.message}
            pattern={{
              value: /^[\d\s]*$/,
              message: t("userPage.numberPattern"),
            }}
          />
          <EnterOneInfo
            type="text"
            placeholder={t("userPage.inputDate")}
            register={register}
            name="date"
            isRequired={true}
            errorMessage={t("userPage.dateError")}
            error={errors?.date?.message}
          />
        </div>
        <div className="flex flex-col gap-[20px] mt-[20px] lg:mt-[0px] lg:w-[350px]">
          <EnterOneInfo
            type="text"
            placeholder={t("userPage.inputCity")}
            register={register}
            name="city"
            isRequired={true}
            errorMessage={t("userPage.cityError")}
            error={errors?.city?.message}
          />
          <EnterOneInfo
            type="text"
            placeholder={t("userPage.inputAddress")}
            register={register}
            name="address"
            isRequired={true}
            errorMessage={t("userPage.addressError")}
            error={errors?.address?.message}
          />
          <EnterOneInfo
            type="password"
            placeholder={t("userPage.inputCurPassword")}
            register={register}
            name="currentPassword"
            isRequired={true}
            errorMessage={t("userPage.passwordError")}
            error={errors?.currentPassword?.message}
          />
          <EnterOneInfo
            type="password"
            placeholder={t("userPage.inputNewPassword")}
            register={register}
            name="newPassword"
            isRequired={true}
            errorMessage={t("userPage.passwordError")}
            error={errors?.currentPassword?.message}
          />
          <EnterOneInfo
            type="password"
            placeholder={t("userPage.inputConfirmPassword")}
            register={register}
            name="submitPassword"
            isRequired={true}
            errorMessage={t("userPage.passwordError")}
            error={errors?.currentPassword?.message}
          />
          <button
            className={`mt-[100px] text-[13px] ${
              darkMode
                ? "text-color-black bg-[#fff]"
                : "text-color-primary bg-[#613994]"
            } px-[10px] py-[20px] w-[153px]  rounded-[15px] whitespace-nowrap lg:w-full lg:py-[10px] lg:mt-[35px]`}
          >
            {t("userPage.submitButton")}
          </button>
        </div>
      </div>
    </form>
  );
}

export default EnterUserInfo;
