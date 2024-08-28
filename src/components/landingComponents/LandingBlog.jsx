import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";

function OneNews({ image, title, description }) {
  const { t, i18n } = useTranslation();
  const darkMode = useSelector(getMode);

  const currentTitle = i18n.language === "en" ? title.en : title.ge;
  const currentDescription =
    i18n.language === "en" ? description.en : description.ge;

  return (
    <div
      className={`mx-[10px] mt-[30px] max-w-[400px]  border-[1px] ${
        darkMode ? "border-[#fff]" : "border-[#000]"
      } h-[500px] rounded-[30px]`}
    >
      <img
        src={image}
        alt="landing"
        className="w-full h-[221px] object-cover rounded-[30px]"
      />
      <div className="pt-[20px] pl-[28px] flex flex-col">
        <h2
          className={` text-[26px] h-[50px] ${
            darkMode ? "text-color-primary" : "text-color-black"
          }`}
        >
          {currentTitle.length > 17
            ? currentTitle.split(" ").slice(0, 1).join(" ") + "..."
            : currentTitle}
        </h2>
        <p
          className={`mt-[10px] h-[120px] ${
            darkMode ? "text-color-primary" : "text-color-black"
          }`}
        >
          {currentDescription.split(" ").length > 8
            ? currentDescription.split(" ").slice(0, 8).join(" ")
            : currentDescription}
        </p>
      </div>
      <div className="flex justify-center">
        <button
          className={`w-[200px] rounded-[30px] py-[12px] text-color-primary ${
            darkMode ? " bg-[#58387F]" : "bg-[#000]"
          }`}
        >
          {t("home.aboutUs.button")}
        </button>
      </div>
    </div>
  );
}

export default OneNews;
