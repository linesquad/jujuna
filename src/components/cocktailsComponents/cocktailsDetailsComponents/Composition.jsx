import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";

function Composition({ ingredients }) {
  const { i18n } = useTranslation();
  const darkMode = useSelector(getMode);
  const lngIngredients =
    i18n.language === "ge" ? ingredients.ge : ingredients.en;

  return (
    <div className="mt-[40px] mx-auto max-w-[360px]">
      <h2
        className={`font-medium text-[16px] ${
          darkMode ? "text-[#fff]" : "text-[#000]"
        }`}
      >
        შემადგენლობა:
      </h2>
      <div className="mt-[24px] flex flex-col gap-[12px]">
        {lngIngredients?.map((item, index) => {
          return (
            <div className="flex gap-[10px] items-center" key={index}>
              <div
                className={`w-[5px] h-[5px] rounded-[50%] ${
                  darkMode ? "bg-[#fff]" : "bg-[#000]"
                }`}
              ></div>
              <p
                className={`font-medium text-[16px] ${
                  darkMode ? "text-[#fff]" : "text-[#000]"
                }`}
              >
                {item}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Composition;
