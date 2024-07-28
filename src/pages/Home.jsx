import AboutUsLanding from "../components/landingComponents/AboutUsLanding";
import Bottle from "../components/landingComponents/Bottle";
import HeroSection from "../components/landingComponents/HeroSection";
import MobileBar from "../components/landingComponents/MobileBar";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutUsLanding />
      <Bottle />
      <MobileBar />
    </div>
  );
};

export default Home;
