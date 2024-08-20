import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";
import Wrapper from "../Wrapper";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function WineNavbar({ onCategoryChange }) {
  const mode = useSelector(getMode);
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  const categories = [
    { key: "All", label: t("winePage.list.li1") },
    { key: "Red", label: t("winePage.list.li2") },
    { key: "White", label: t("winePage.list.li3") },
    { key: "Rose", label: t("winePage.list.li4") },
  ];

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
          {/* <li className="cursor-pointer">{t("winePage.list.li1")}</li>
          <li className="cursor-pointer">{t("winePage.list.li2")}</li>
          <li className="cursor-pointer">{t("winePage.list.li3")}</li>
          <li className="cursor-pointer">{t("winePage.list.li4")}</li> */}
          {categories.map((category) => (
            <li
              key={category.key}
              className={`cursor-pointer ${
                activeCategory === category.key
                  ? "text-purple-900 font-semibold"
                  : ""
              }`}
              onClick={() => handleCategoryClick(category.key)}
            >
              {category.label}
            </li>
          ))}
        </ul>
      </Wrapper>
    </nav>
  );
}
export default WineNavbar;
