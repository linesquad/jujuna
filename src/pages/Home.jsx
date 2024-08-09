import AboutUsComp from "../components/landingComponents/AboutUsComp";
import Bottle from "../components/landingComponents/Bottle";
import CocktailsComp from "../components/landingComponents/CocktailsComp";
import Connect from "../components/landingComponents/Connect";
import Hero from "../components/landingComponents/Hero";
import MobileBar from "../components/landingComponents/MobileBar";
import News from "../components/landingComponents/News";

const Home = () => {
  return (
    <div>
      <div className="bg-[linear-gradient(249deg,_#A583D1_22.95%,_#724AA4_46.44%,_#1E122E_93.06%)]">
        <Hero />
        <AboutUsComp />
        <News />
        <Bottle />
        <CocktailsComp />
        <MobileBar />
        <Connect />
      </div>
    </div>
  );
};

export default Home;
