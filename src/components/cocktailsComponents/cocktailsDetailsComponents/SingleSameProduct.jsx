import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMode } from "../../../features/darkModeSlice";

function SingleSameProduct({ item }) {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const darkMode = useSelector(getMode);
  console.log(item);
  return (
    <div
      className="flex flex-col items-center justify-center"
      onClick={() => navigate(`/cocktails/${item.id}`)}
    >
      <img
        src={item.image}
        alt="cocktail-image"
        className="w-[120px] h-[160px] object-cover"
      />
      <p className={`${darkMode ? "text-[#fff]" : "text-[#000]"}`}>
        {i18n.language === "ge" ? item.name.ge : item.name.en}
      </p>
    </div>
  );
}

export default SingleSameProduct;
