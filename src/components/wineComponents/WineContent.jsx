import Wrapper from "../Wrapper";
import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";
import { useTranslation } from "react-i18next";
import WineFilter from "./WineFilter";

export default function WineContent() {
  const mode = useSelector(getMode);
  const { t } = useTranslation();

  return (
    <Wrapper>
      <div className="flex flex-col items-center md:flex-row md:items-end justify-center md:justify-between">
        <h1
          className={`md:font-semibold text-2xl mt-8 ${
            mode ? "text-wineNavbarColor-textDark" : "text-wineNavbarColor-dark"
          }`}
        >
          {t("winePage.title")}
        </h1>
        <WineFilter />
      </div>
    </Wrapper>
  );
}
