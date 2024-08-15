import { useSelector } from "react-redux";
import ContactInformation from "../components/aboutUsComponents/ContactInformation";
import Map from "../components/aboutUsComponents/Map";
import { getMode } from "../features/darkModeSlice";

const AboutUs = () => {
  const darkMode = useSelector(getMode);
  return (
    <div className={`pb-[36px]  ${darkMode ? "bg-[#55426E]" : "bg-[#eaeaea]"}`}>
      <Map />
      <ContactInformation />
    </div>
  );
};

export default AboutUs;
