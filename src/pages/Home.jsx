import AboutUsComp from "../components/landingComponents/AboutUsComp";
import Hero from "../components/landingComponents/Hero";

const Home = () => {
  return (
    <div>
      <div className="bg-[linear-gradient(249deg,_#A583D1_22.95%,_#724AA4_46.44%,_#1E122E_93.06%)]">
        <Hero />
        <AboutUsComp />
      </div>
    </div>
  );
};

export default Home;
