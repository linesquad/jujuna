import { useTranslation } from "react-i18next";
import useCocktails from "../../hooks/useCocktails";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";

function SearchResult({ searchCocktail }) {
  const { data: cocktails } = useCocktails();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const darkMode = useSelector(getMode);

  const filteredCocktails = cocktails.filter(
    (item) =>
      item.titleTranslations.ge
        .toLowerCase()
        .startsWith(searchCocktail.toLowerCase()) ||
      item.titleTranslations.en
        .toLowerCase()
        .startsWith(searchCocktail.toLowerCase())
  );

  return (
    <div
      className={`absolute w-full top-[40px] ${
        darkMode ? "bg-[#613994]" : "bg-[#fff]"
      } px-[10px] py-[20px] flex flex-col gap-[20px] z-[10]`}
    >
      {filteredCocktails.map((item) => {
        return (
          <div
            className="flex items-center gap-[30px] py-[10px] pl-[5px] bg-[#dee2e6]/30 [box-shadow:5px_8px_10px_0px_rgba(0,_0,_0,_0.25)] rounded-md cursor-pointer"
            key={item._id}
            onClick={() => navigate(`/cocktails/${item.id}`)}
          >
            <img
              src={item.url}
              alt="cocktail"
              className="w-[40px] h-[40px] object-cover rounded-md"
            />
            <p
              className={`${
                darkMode ? "text-color-primary" : "text-color-black"
              }`}
            >
              {i18n.language === "ge"
                ? item.titleTranslations.ge
                : item.titleTranslations.en}
            </p>
          </div>
        );
      })}
      {filteredCocktails.length === 0 && searchCocktail && (
        <div className="flex items-center gap-[30px] py-[10px] pl-[30px] bg-[#dee2e6] [box-shadow:5px_8px_10px_0px_rgba(0,_0,_0,_0.25)] rounded-md cursor-pointer">
          <p>Cocktail not found</p>
        </div>
      )}
    </div>
  );
}

export default SearchResult;
