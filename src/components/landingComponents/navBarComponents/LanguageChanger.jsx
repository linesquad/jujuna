import ReactCountryFlag from "react-country-flag";
import i18n from "../../../i18n";
import { useSelector } from "react-redux";
import { getIsOpen } from "../../../features/burgerMenuSlice";
import { useState } from "react";

const LanguageChanger = () => {
  const open = useSelector(getIsOpen);
  const [language, setLanguage] = useState(localStorage.getItem("lng") || "ge");

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
    setLanguage(lng);
  };

  const size = open ? 3 : 1.7;

  return (
    <div className="flex gap-2">
      <button
        onClick={() => handleChangeLanguage("ge")}
        disabled={language === "ge"}
        className={`${language === "ge" ? "cursor-no-drop" : ""}`}
      >
        <ReactCountryFlag
          countryCode="GE"
          svg
          style={{
            width: `${size}rem`,
            height: `${size}rem`,
          }}
        />
      </button>
      <button
        onClick={() => handleChangeLanguage("en")}
        disabled={language === "en"}
        className={`${language === "en" ? "cursor-no-drop" : ""}`}
      >
        <ReactCountryFlag
          countryCode="US"
          svg
          style={{
            width: `${size}rem`,
            height: `${size}rem`,
          }}
        />
      </button>
    </div>
  );
};

export default LanguageChanger;
