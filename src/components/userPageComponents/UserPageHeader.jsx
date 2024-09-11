import { useTranslation } from "react-i18next";
import rightArrow from "/images/rightArrow.svg";
import Wrapper from "../Wrapper";
import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";

function UserPageHeader() {
  const { t } = useTranslation();
  const darkMode = useSelector(getMode);
  return (
    <Wrapper>
      <div
        className={` ${
          darkMode ? "text-[#999797]" : "text-[#848282CC]"
        } text-[13px] flex items-center pt-[26px] pl-[16px] gap-[8px]`}
      >
        <p>{t("userPage.h1")}</p>
        <img src={rightArrow} alt="right-arrow" />
        <p>{t("userPage.h2")}</p>
      </div>
    </Wrapper>
  );
}

export default UserPageHeader;
