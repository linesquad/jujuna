import { useSelector } from "react-redux";
import { getMode } from "../features/darkModeSlice";

/* eslint-disable react/prop-types */
function Button({ children, onClick, type, disabled }) {
  const darkMode = useSelector(getMode);
  const base = `w-full h-[32px] rounded-[30px] text-[16px] text-[#fff] font-arialgeo font-normal  md:h-[40px]  xl:h-[49px] xl:text-[18px] 
    ${disabled ? "cursor-not-allowed" : ""}`;

  const styles = {
    primary: base + ` ${darkMode ? "bg-[#58387F]" : "bg-[#000]"} `,
    secondary: base + " bg-buttonColor-secondary",
    large: base + " xl:w-full   bg-[#1E122E] text-[#FFF]/60",
    signIn: base + " flex items-center gap-2",
  };

  return (
    <button className={styles[type]} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
