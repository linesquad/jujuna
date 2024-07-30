import { useDispatch, useSelector } from "react-redux";
import { getMode, toggleDarkMode } from "../features/darkModeSlice";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { getIsOpen } from "../features/burgerMenuSlice";

const ThemeChanger = () => {
  const mode = useSelector(getMode);
  const open = useSelector(getIsOpen);
  const dispatch = useDispatch();

  const size = open ? 50 : 25;
  return (
    <div className="mt-1">
      <button onClick={() => dispatch(toggleDarkMode())}>
        {mode ? (
          <MdLightMode size={`${size}`} />
        ) : (
          <MdDarkMode size={`${size}`} />
        )}
      </button>
    </div>
  );
};

export default ThemeChanger;
