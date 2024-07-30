import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { close } from "../../../features/burgerMenuSlice";

const BurgerCloseX = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(close());
  };

  return (
    <button onClick={handleClose}>
      <IoClose size="50" />
    </button>
  );
};

export default BurgerCloseX;
