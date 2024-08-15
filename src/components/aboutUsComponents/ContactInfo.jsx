import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";

function ContactInfo({ text, image, textStyle = `text-[13px] ` }) {
  const darkMode = useSelector(getMode);
  const darkModeStyle = `${darkMode ? "text-[#000] " : "text-[#fff] "}`;
  return (
    <div className="flex items-center gap-[20px]">
      <img
        src={image}
        alt="location"
        className={darkMode ? "bg-[#55426E] rounded-md" : ""}
      />
      <p className={textStyle + darkModeStyle}>{text}</p>
    </div>
  );
}

export default ContactInfo;
