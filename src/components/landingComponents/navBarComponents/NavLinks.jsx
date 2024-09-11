import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { close, getIsOpen } from "../../../features/burgerMenuSlice";
import { RiInformation2Fill } from "react-icons/ri";
import { FaCocktail } from "react-icons/fa";
import { PiWineFill } from "react-icons/pi";
import { RiNewspaperLine } from "react-icons/ri";
import { getMode } from "../../../features/darkModeSlice";

const NavLinks = () => {
  const { t } = useTranslation();
  const open = useSelector(getIsOpen);
  const darkMode = useSelector(getMode);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(close());
  };

  const navbarItems = [
    { name: "about", id: "1", path: "/about", icon: RiInformation2Fill },
    { name: "news", id: "5", path: "/news", icon: RiNewspaperLine },
    { name: "bottle", id: "3", path: "/wines", icon: PiWineFill },
    { name: "cocktail", id: "2", path: "/cocktail", icon: FaCocktail },
  ];

  return (
    <ul
      className={`${
        open
          ? "flex flex-col gap-5 text-start text-2xl text-white"
          : "hidden text-base md:text-sm lg:text-base md:flex gap-0 md:gap-5 lg:gap-10 text-white items-center"
      }`}
    >
      {navbarItems.map((navbarItem) => (
        <li key={navbarItem.id}>
          <NavLink
            id={navbarItem.id}
            to={navbarItem.path}
            className={({ isActive }) =>
              `${isActive ? "text-backgroundColor-purpleStart font-bold" : ""}`
            }
            onClick={handleClose}
          >
            <div
              className={`flex items-center gap-2 ${
                darkMode ? "text-color-primary" : "text-color-black"
              }`}
            >
              <navbarItem.icon />
              {t(`navbar.${navbarItem.name}`)}
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
