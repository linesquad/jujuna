import ge from "/ge.svg";
import en from "/us.svg";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    console.log(lng);
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-5 lg:mt-[0px] lg:flex-row">
      <img
        onClick={() => changeLanguage("ge")}
        className={`w-[23px] border-[2px] border-solid border-[transparent] rounded-[3px] cursor-pointer`}
        src={ge}
        alt="Georgian"
      />

      <img
        onClick={() => changeLanguage("en")}
        className={`w-[23px] border-[2px] border-solid border-[transparent] rounded-[3px] cursor-pointer`}
        src={en}
        alt="English"
      />
    </div>
  );
};

export default LanguageSwitcher;
