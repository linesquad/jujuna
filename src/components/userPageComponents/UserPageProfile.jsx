import profile from "/images/profile.jfif";
import downArrow from "/images/downArrow.svg";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";

function UserPageProfile() {
  const darkMode = useSelector(getMode);
  const { t } = useTranslation();
  return (
    <div
      className={`flex justify-between items-center mx-auto max-w-[400px] mt-[38px] px-[11px] md:flex-col md:pb-[90px] md:pt-[9px] md:px-[9px] ${
        darkMode ? "md:bg-[#5f3dc4]" : "md:bg-[#fff]"
      }  md:rounded-[15px] md:w-[220px] md:mx-[0px] md:h-[320px] lg:w-[300px] lg:px-[20px]`}
    >
      <div className="pb-[5px] border-b-[1px] border-b-[#D9D9D9] flex justify-between w-full">
        <div className="flex items-center gap-[12px]">
          <img
            src={profile}
            alt="profile"
            className="w-[60px] h-[60px] rounded-[50%] object-cover"
          />
          <div
            className={`text-[13px] font-medium ${
              darkMode ? "text-color-primary" : ""
            } `}
          >
            <p>მარიამ</p>
            <p>წიქარიშვილი</p>
          </div>
        </div>
        <img src={downArrow} alt="down-arrow" className="md:hidden" />
      </div>
      <div
        className={`hidden md:flex flex-col mt-[24px] gap-[16px] text-[14px] font-medium ${
          darkMode ? "text-color-primary" : ""
        }`}
      >
        <p>{t("userPage.profile")}</p>
        <p>{t("userPage.shoppingList")}</p>
        <p>{t("userPage.cancelAccount")}</p>
        <p>{t("userPage.cards")}</p>
        <p>{t("userPage.logOut")}</p>
      </div>
    </div>
  );
}

export default UserPageProfile;
