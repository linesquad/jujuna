import ReactCountryFlag from "react-country-flag";
import i18n from "../../../i18n";
import { useSelector } from "react-redux";
import { getIsOpen } from "../../../features/burgerMenuSlice";

const LanguageChanger = () => {
  const open = useSelector(getIsOpen);

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  const size = open ? 3 : 1.7;

  return (
    <div className="flex gap-2">
      <button onClick={() => handleChangeLanguage("ge")}>
        <ReactCountryFlag
          countryCode="GE"
          svg
          style={{
            width: `${size}rem`,
            height: `${size}rem`,
          }}
        />
      </button>
      <button onClick={() => handleChangeLanguage("en")}>
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
