import { useTranslation } from "react-i18next";
import OneInputField from "./OneInputField";
import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";

function EnterUserInfo() {
  const { t } = useTranslation();
  const darkMode = useSelector(getMode);
  return (
    <form className="max-w-[400px] px-[12px] mx-auto mt-[31px] md:mx-[0px] md:w-[400px] lg:w-full lg:max-w-full">
      <div className="lg:flex lg:items-start lg:gap-[40px]">
        <div className="flex flex-col gap-[20px] lg:w-[350px]">
          <OneInputField type="text" value="მარიამ" />
          <OneInputField type="text" value="წიქარიშვილი" />
          <OneInputField type="text" placeholder={t("userPage.inputMobile")} />
          <OneInputField type="text" placeholder={t("userPage.inputDate")} />
        </div>
        <div className="flex flex-col gap-[20px] mt-[20px] lg:mt-[0px] lg:w-[350px]">
          <OneInputField type="text" placeholder={t("userPage.inputCity")} />
          <OneInputField type="text" placeholder={t("userPage.inputAddress")} />
          <OneInputField
            type="text"
            placeholder={t("userPage.inputCurPassword")}
          />
          <OneInputField
            type="text"
            placeholder={t("userPage.inputNewPassword")}
          />
          <OneInputField
            type="text"
            placeholder={t("userPage.inputConfirmPassword")}
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
