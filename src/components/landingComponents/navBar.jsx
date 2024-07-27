import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const NavBar = () => {
  const { t } = useTranslation();

  const navbarItems = [
    { name: "about", id: "1", path: "/about" },
    { name: "news", id: "2", path: "/news" },
    { name: "bottle", id: "3", path: "/bottle" },
    { name: "cocktails", id: "4", path: "/cocktails" },
    { name: "mobileBar", id: "5", path: "/mobileBar" },
    { name: "contact", id: "6", path: "/contact" },
  ];

  return (
    <div className=" bg-color-black text-color-primary py-4  xl:flex justify-between">
      <nav>
        <ul className="flex flex-col gap-5 xl:gap-10 text-center text-base leading-[18px] xl:flex-row xl:ml-[222px]">
          {navbarItems.map(({ name, id, path }) => (
            <li key={id} className="cursor-pointer">
              <NavLink
                id={id}
                to={path}
                className={({ isActive }) => `${isActive ? "bg-red-600" : ""}`}
              >
                {t(`navbar.${name}`)}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <LanguageSwitcher />
    </div>
  );
};

export default NavBar;
