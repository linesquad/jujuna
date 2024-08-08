import Header from "../ui/Header";
import Footer from "../ui/Footer";
import BackgroundGrapes from "../../public/images/bg-grapes.svg";
import Contact from "../../public/images/contact.svg";
import Grape from "../../public/images/grape-animation.png";
import Leaves from "../../public/images/bg-leaves.png";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { getMode } from "../features/darkModeSlice";

const PageNotFound = () => {
  const mode = useSelector(getMode);

  return (
    <div
      className={`min-h-screen flex flex-col ${
        mode
          ? "bg-dark-backgroundCol text-dark-black"
          : "bg-[linear-gradient(249deg,_#A583D1_22.95%,_#724AA4_46.44%,_#1E122E_93.06%)] text-[#fff]"
      }`}
      // className="min-h-screen flex flex-col bg-[linear-gradient(249deg,_#A583D1_22.95%,_#724AA4_46.44%,_#1E122E_93.06%)] text-[#fff]"
      // style={{
      //   backgroundImage: `url(${BackgroundGrapes})`,
      //   // backgroundRepeat: "no-repeat",
      //   // backgroundSize: "cover",
      //   backgroundSize: "50%",
      //   // backgroundPosition: "center",
      // }}
    >
      <Header />
      <div
        className="flex-grow flex flex-col md:flex-row-reverse justify-center items-center text-center md:text-left p-4 md:justify-around"
        style={{
          // backgroundImage: `url(${BackgroundGrapes}), url(${Leaves})`,
          // backgroundRepeat: "no-repeat, no-repeat",
          // // backgroundSize: "cover",
          // backgroundSize: "50%, 50%",
          // // backgroundPosition: "center",
          // backgroundPosition: "start, right",

          backgroundImage: `url(${Leaves}), url(${BackgroundGrapes})`,
          backgroundRepeat: "repeat, no-repeat",
          backgroundSize: "70%, 50%",
          backgroundPosition: "right, left top",
        }}
      >
        <img src={Grape} alt="grape" className="w-48 h-48 md:w-80 md:h-80" />
        <div className="md:ml-8 flex flex-col items-center md:items-start md:max-w-80 md:mt-20">
          <h1 className="text-3xl md:text-4xl mb-2">404 Error</h1>
          <h1 className="text-3xl md:text-4xl mb-2">Ooops.....</h1>
          <h2 className="text-2xl  mb-4">Page not found</h2>
          <p>
            The page you&apos;re looking for can&apos;t be found. Please check
            the URL or go back to the homepage.
          </p>
          <div className="w-full flex justify-center md:justify-end">
            <button
              className={`p-4 pl-8 pr-8 mt-6 mb-8 md:mb-4 rounded-lg shadow-[rgba(0,0,15,0.3)_8px_8px_6px_0px] ${
                mode
                  ? "bg-buttonColor-dark-primary text-buttonColor-secondary"
                  : "bg-backgroundColor-purpleMid text-buttonColor"
              }`}
              //  className="bg-backgroundColor-purpleMid p-4 pl-8 pr-8 mt-6 mb-8 md:mb-4 rounded-lg shadow-[rgba(0,0,15,0.3)_8px_8px_6px_0px]"
            >
              <Link to="/">Back To Home</Link>
            </button>
          </div>
        </div>
      </div>
      <img
        src={Contact}
        alt="contact"
        className="w-16 h-16 absolute bottom-1/4 right-10  md:top-2/4 md:right-20 cursor-pointer"
      />
      <Footer />
    </div>
  );
};

export default PageNotFound;
