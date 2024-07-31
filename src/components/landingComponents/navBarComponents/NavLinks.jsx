import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { close, getIsOpen } from "../../../features/burgerMenuSlice";

const NavLinks = () => {
  const { t } = useTranslation();
  const open = useSelector(getIsOpen);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(close());
  };

  const navbarItems = [
    { name: "about", id: "1", path: "/about" },
    { name: "cocktail", id: "2", path: "/cocktail" },
    { name: "wines", id: "3", path: "/wines" },
    { name: "news", id: "5", path: "/news" },
    { name: "enter", id: "4", path: "/enter" },
  ];

  return (
    <ul
      className={`${
        open
          ? "flex flex-col gap-5 text-start text-2xl"
          : "hidden text-base md:text-sm lg:text-base md:flex gap-0 md:gap-5 lg:gap-10"
      }`}
    >
      {navbarItems.map(({ name, id, path }) => (
        <li key={id}>
          <NavLink
            id={id}
            to={path}
            className={({ isActive }) =>
              `${isActive ? "text-backgroundColor-purpleStart font-bold" : ""}`
            }
            onClick={handleClose}
          >
            {t(`navbar.${name}`)}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
