import { useSelector } from "react-redux";
import AboutUsComp from "../components/landingComponents/AboutUsComp";
import Bottle from "../components/landingComponents/Bottle";
import CocktailsComp from "../components/landingComponents/CocktailsComp";
import Connect from "../components/landingComponents/Connect";
import Hero from "../components/landingComponents/Hero";
import MobileBar from "../components/landingComponents/MobileBar";
import News from "../components/landingComponents/News";
import { getMode } from "../features/darkModeSlice";
import PopularProducts from "../components/landingComponents/PopularProducts";
import SaleProducts from "../components/landingComponents/SaleProducts";

const Home = () => {
  const darkMode = useSelector(getMode);
  return (
    <div>
      <div className={`${darkMode ? "bg-[#12151C]" : "bg-[#fff]"}`}>
        <Hero />
        <SaleProducts />
        <PopularProducts />
        <CocktailsComp />
        <Bottle />
        <MobileBar />
        <News />
        <AboutUsComp />
        <Connect />
      </div>
    </div>
  );
};

export default Home;
