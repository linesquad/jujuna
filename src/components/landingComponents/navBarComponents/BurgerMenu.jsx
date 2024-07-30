import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { toggleBurgerMenu } from "../../../features/burgerMenuSlice";

const BurgerMenu = () => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleBurgerMenu());
  };

  return (
    <button onClick={handleToggle}>
      <GiHamburgerMenu size="25" />
    </button>
  );
};

export default BurgerMenu;
