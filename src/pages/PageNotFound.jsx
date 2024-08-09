import Contact from "/images/contact.svg";
import Grape from "/images/grape-animation.png";
import Wrapper from "../components/Wrapper";

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
    >
      <Wrapper>
        <div className="flex">
          <div className="w-full h-full max-w-screen-xl mx-auto absolute inset-0 bg-no-repeat bg-top  bg-[url('/images/bg-leaves.png')] bg-cover"></div>
          <div className="w-full h-full max-w-screen-xl mx-auto absolute inset-0 bg-no-repeat bg-center bg-[url('/images/bg-grapes.svg')] bg-cover"></div>
          <div className="z-10 flex-grow flex flex-col md:flex-row-reverse justify-center items-center text-center md:text-left p-4 md:justify-around relative h-screen">
            <img
              src={Grape}
              alt="grape"
              className="w-48 h-48 md:w-80 md:h-80"
            />
            <div className="md:ml-8 flex flex-col items-center md:items-start md:max-w-80 md:mt-20">
              <h1 className="text-3xl md:text-4xl mb-2">404 Error</h1>
              <h1 className="text-3xl md:text-4xl mb-2">Ooops.....</h1>
              <h2 className="text-2xl  mb-4">Page not found</h2>
              <p className="max-w-80">
                The page you&apos;re looking for can&apos;t be found. Please
                check the URL or go back to the homepage.
              </p>
              <div className="w-full flex justify-center md:justify-end">
                <button
                  className={`p-4 pl-8 pr-8 mt-6 mb-16 md:mb-4 rounded-lg shadow-[rgba(0,0,15,0.3)_8px_8px_16px_0px] ${
                    mode
                      ? "text-buttonColor-secondary"
                      : "bg-backgroundColor-purpleMid text-buttonColor"
                  }`}
                >
                  <Link to="/">Back To Home</Link>
                </button>
              </div>
            </div>
            <img
              src={Contact}
              alt="contact"
              className="w-16 h-16 absolute bottom-0 right-10  md:right-20 cursor-pointer"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default PageNotFound;
