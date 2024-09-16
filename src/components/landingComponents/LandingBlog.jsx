import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

function OneNews({ image, title, description, id }) {
  const { t } = useTranslation();
  // i18n
  const darkMode = useSelector(getMode);
  const navigate = useNavigate();

  // const currentTitle = title;
  // const currentDescription = description;

  // console.log(title);

  return (
    <div className={`mx-[10px] `}>
      <div
        className={`mt-[30px] mx-auto max-w-[400px]  border-[1px] ${
          darkMode ? "border-[#fff]" : "border-[#000]"
        } h-[500px] rounded-[30px] `}
      >
        <div className="w-full h-[221px] overflow-hidden rounded-t-[31px]">
          <img
            src={image}
            alt="landing"
            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-[1.3] cursor-pointer"
          />
        </div>
        <div className="pt-[20px] pl-[28px] flex flex-col">
          <h2
            className={` text-[26px] h-[50px] ${
              darkMode ? "text-color-primary" : "text-color-black"
            }`}
          >
            {title.slice(0, 20) + "..."}
          </h2>
          <p
            className={`mt-[10px] pr-[20px] h-[100px] ${
              darkMode ? "text-color-primary" : "text-color-black"
            }`}
          >
            {description.slice(0, 90) + "..."}
          </p>
        </div>
        <div className="flex justify-center w-[200px] mx-auto">
          <Button type="primary" onClick={() => navigate(`/news/${id}`)}>
            {t("home.aboutUs.button")}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default OneNews;
