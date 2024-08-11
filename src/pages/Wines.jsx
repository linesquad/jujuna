import useWines from "../hooks/useWines";
import { useSelector } from "react-redux";
import { getMode } from "../features/darkModeSlice";
import Wrapper from "../components/Wrapper";
import { useTranslation } from "react-i18next";
import WineCard from "../components/wineComponents/WineCard";
import WineNavbar from "../components/wineComponents/WineNavbar";
import WineCover from "../components/wineComponents/WineCover";

const Wines = () => {
  const { data } = useWines();
  const mode = useSelector(getMode);
  const { t } = useTranslation();
  console.log("wine page data", data);

  return (
    <div
      className={`flex flex-col ${
        mode
          ? "bg-[linear-gradient(249deg,_#A583D1_22.95%,_#724AA4_46.44%,_#1E122E_93.06%)] text-[#fff]"
          : "bg-wineNavbarColor-light text-dark-black"
      }`}
    >
      <Wrapper>
        <WineCover />
      </Wrapper>
      <WineNavbar />
      <Wrapper>
        <div
          className={`pb-24 h-screen${
            mode
              ? "bg-[linear-gradient(249deg,_#A583D1_22.95%,_#724AA4_46.44%,_#1E122E_93.06%)] text-[#fff]"
              : "bg-wineNavbarColor-light text-dark-black"
          }`}
        >
          <div className="flex items-end justify-center md:justify-between">
            <h1
              className={`md:font-semibold text-2xl mt-8 ${
                mode
                  ? "text-wineNavbarColor-textDark"
                  : "text-wineNavbarColor-dark"
              }`}
            >
              {t("winePage.title")}
            </h1>
            <form action="" className="absolute right-10 top-100 md:relative">
              <label
                htmlFor="filter"
                className={`md:text-lg ${
                  mode
                    ? "text-wineNavbarColor-textDark"
                    : "text-wineNavbarColor-textGray"
                }`}
              >
                {t("winePage.filter")}
              </label>
              <select
                name="filter"
                id="filter"
                className={`text-sm md:text-lg outline-none bg-transparent  rounded md:p-1 ml-1 md:ml-4 md:w-[140px] cursor-pointer ${
                  mode
                    ? "text-wineNavbarColor-textDark border border-black"
                    : "text-wineNavbarColor-textGray border border-wineNavbarColor-textGray bg-color-primary"
                }`}
              >
                <option value="price">{t("winePage.options.price")}</option>
              </select>
            </form>
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 relative mb-24">
            {data?.map((item) => {
              return <WineCard key={item.id} item={item} />;
            })}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Wines;
