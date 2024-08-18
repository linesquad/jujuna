import { useTranslation } from "react-i18next";
import useCocktails from "../../hooks/useCocktails";
import { useNavigate } from "react-router-dom";

function SearchResult({ searchCocktail }) {
  const { data: cocktails } = useCocktails();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  // Filter the cocktails based on the searchCocktail input value
  const filteredCocktails = cocktails.filter(
    (item) =>
      item.name.ge.toLowerCase().startsWith(searchCocktail.toLowerCase()) ||
      item.name.en.toLowerCase().startsWith(searchCocktail.toLowerCase())
  );

  return (
    <div className="absolute w-full top-[40px] bg-[#fff]/30 px-[10px] py-[20px] flex flex-col gap-[20px]">
      {filteredCocktails.map((item) => {
        return (
          <div
            className="flex items-center gap-[30px] py-[10px] pl-[5px] bg-[#dee2e6] [box-shadow:5px_8px_10px_0px_rgba(0,_0,_0,_0.25)] rounded-md cursor-pointer"
            key={item.id}
            onClick={() => navigate(`/cocktails/${item.id}`)}
          >
            <img
              src={item.image}
              alt="cocktail"
              className="w-[40px] h-[40px] object-cover rounded-md"
            />
            <p>{i18n.language === "ge" ? item.name.ge : item.name.en}</p>
          </div>
        );
      })}
      {filteredCocktails.length === 0 && searchCocktail.length > 0 && (
        <div className="flex items-center gap-[30px] py-[10px] pl-[30px] bg-[#dee2e6] [box-shadow:5px_8px_10px_0px_rgba(0,_0,_0,_0.25)] rounded-md cursor-pointer">
          <p>Cocktail not found</p>
        </div>
      )}
    </div>
  );
}

export default SearchResult;
