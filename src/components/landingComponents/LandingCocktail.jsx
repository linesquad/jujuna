import { useTranslation } from "react-i18next";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function OneCocktail({ title, image, ingredients, size, position, id }) {
  console.log(ingredients);
  const { t, i18n } = useTranslation();
  return (
    <div className={size === "big" ? "md:col-span-2" : "md:col-span-1"}>
      <div className="bg-[#000] rounded-2xl mx-2 pb-14 md:pb-4">
        {size === "small" && (
          <h2 className="text-color-primary text-[32px] font-tommaso font-normal lg:text-[40px] mb-[15px] p-2 pl-8">
            {title}
          </h2>
        )}

        {size === "big" && (
          <h2 className="md:hidden text-color-primary text-[32px] font-tommaso font-normal lg:text-[40px] p-2 pl-8">
            {title}
          </h2>
        )}

        <div
          className={`flex flex-col items-center smallExtra:flex-row smallExtra:items-start  smallExtra:gap-[15px] lg:mt-[0px] ${
            position === "right" && "smallExtra:flex-row-reverse"
          } ${size === "small" && "items-center"}`}
        >
          <img
            src={image}
            alt="cocktail"
            className="w-[186px] h-[276px] xl:w-[301px] xl:h-[447px] rounded-2xl  -mb-14 md:-mb-4 smallExtra:self-end"
          />

          <div
            className={`flex flex-col items-center mt-16 smallExtra:block w-full md:mt-8 smallExtra:ml-20 ${
              size === "small" && position !== "right" && "smallExtra:ml-0"
            } ${position === "right" && "ml-8"}`}
          >
            {size === "big" && (
              <h2 className="hidden md:block text-color-primary text-[32px] font-tommaso font-normal lg:text-[40px]">
                {title}
              </h2>
            )}

            <div
              className={`grid sm:grid-cols-[1fr_1fr] gap-x-[30px] md:gap-x-[40px] gap-y-[31px] mt-[15px] ${
                size === "small"
                  ? "md:grid-cols-[1fr] lg:grid-cols-[1fr_1fr] md:-mt-[40px] h-[260px]"
                  : "md:grid-cols-[1fr_1fr_1fr]"
              }`}
            >
              {ingredients?.map((item, index) => {
                const [ingredientName, volume] = item.split(" - ");
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-[16px] text-[14px] text-color-primary lg:text-[20px]"
                  >
                    <p>{ingredientName}</p>
                    <p className="opacity-50">{volume}</p>
                  </div>
                );
              })}
            </div>

            <Link
              to={`/cocktails/${id}`}
              className={`
                ${
                  size === "big"
                    ? "mt-6 md:mt-10 lg:mt-24"
                    : "md:mt-10 lg:mt-14"
                } text-white border border-white p-1 px-4 pl-5 rounded-full flex items-center ${
                i18n.language === "ge" ? "w-[110px]" : "w-[80px]"
              } small:mt-10`}
            >
              <span>{t("home.cocktails.buyBtn")}</span>
              <RiArrowRightSLine className="w-6 h-6 mt-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneCocktail;
