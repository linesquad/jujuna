import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";
import Wrapper from "../Wrapper";
import { useTranslation } from "react-i18next";

function WineNavbar() {
  const mode = useSelector(getMode);
  const { t } = useTranslation();

  return (
    <nav
      className={`relative p-4 ${
        mode
          ? "bg-wineNavbarColor-dark text-buttonColor-dark-secondary"
          : "bg-wineNavbarColor-light lg:bg-wineNavbarColor-dark text-wineNavbarColor-dark lg:text-buttonColor-dark-secondary"
      }`}
    >
      <Wrapper>
        <ul className="flex gap-0 justify-around text-sm md:text-lg">
          <li className="cursor-pointer">{t("winePage.list.li1")}</li>
          <li className="cursor-pointer">{t("winePage.list.li2")}</li>
          <li className="cursor-pointer">{t("winePage.list.li3")}</li>
          <li className="cursor-pointer">{t("winePage.list.li4")}</li>
        </ul>
      </Wrapper>
    </nav>
  );
}
export default WineNavbar;