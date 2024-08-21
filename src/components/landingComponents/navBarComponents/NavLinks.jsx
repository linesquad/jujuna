import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { close, getIsOpen } from "../../../features/burgerMenuSlice";
import { RiInformation2Fill } from "react-icons/ri";
import { FaCocktail } from "react-icons/fa";
import { PiWineFill } from "react-icons/pi";
import { RiNewspaperLine } from "react-icons/ri";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import Button from "../../Button";
import { IoEnterOutline } from "react-icons/io5";
import { useRegistration } from "../../../hooks/useRegistration";

const NavLinks = () => {
  const { user } = useUser();
  const path = useLocation();
  const { pathname } = path;
  const { t } = useTranslation();
  const open = useSelector(getIsOpen);
  const { registerUser } = useRegistration();

  const handleSignIn = async (user) => {
    console.log(user);
    await registerUser(user);
  };

  console.log(user?.id);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(close());
  };

  const navbarItems = [
    { name: "about", id: "1", path: "/about", icon: RiInformation2Fill },
    { name: "cocktail", id: "2", path: "/cocktail", icon: FaCocktail },
    { name: "wines", id: "3", path: "/wines", icon: PiWineFill },
    { name: "news", id: "5", path: "/news", icon: RiNewspaperLine },
    // { name: "enter", id: "4", path: "/enter/register", icon: IoEnterOutline },
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
            <div className="flex items-center gap-2">
              <navbarItem.icon />
              {t(`navbar.${navbarItem.name}`)}
            </div>
          </NavLink>
        </li>
      ))}
      <li>
        {!user ? (
          <SignInButton mode="modal" forceRedirectUrl={pathname}>
            <Button type={"signIn"}>
              <IoEnterOutline className=" w-[20px]" /> Enter
            </Button>
          </SignInButton>
        ) : (
          <UserButton />
        )}
      </li>
      <li>
        {user && (
          <button onClick={(user) => handleSignIn(user)}>register</button>
        )}
      </li>
    </ul>
  );
};

export default NavLinks;
