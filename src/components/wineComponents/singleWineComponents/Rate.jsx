import { useEffect, useState } from "react";
import Wrapper from "../../Wrapper";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";
import { useTranslation } from "react-i18next";

function Rate() {
  const { t, i18n } = useTranslation();
  const [stars, setStars] = useState(0);
  const [hoveredStars, setHoveredStars] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [isRated, setIsRated] = useState(false);
  const darkMode = useSelector(getMode);

  useEffect(() => {
    if (stars > 0) {
      setIsRated(true);
    }
  }, [stars]);

  const AddStar = ({ filled }) => {
    return (
      <div className="tiny:m-0 tiny:p-1 smaller:m-0 smaller:p-1 mr-2 border-2 border-purple-800 p-2 rounded">
        {filled ? (
          <IoIosStar className="tiny:w-5 smaller:w-6 w-9 h-9 text-purple-800" />
        ) : (
          <IoIosStarOutline className=" tiny:w-5 smaller:w-6 w-9 h-9 text-purple-800" />
        )}
      </div>
    );
  };

  const handleStarClick = (index) => {
    setStars(index + 1);
    setIsClicked(true);
    setIsRated(true);
  };

  const handleMouseEnter = (index) => {
    if (!isClicked) {
      setHoveredStars(index + 1);
    }
  };

  const handleMouseLeave = () => {
    if (!isClicked) {
      setHoveredStars(0);
    }
  };

  return (
    <div className="mt-10 flex flex-col ">
      <Wrapper>
        <p className="tiny:text-center smaller:text-center">
          {t("winePage.singleWine.reviews.heading2")}
        </p>
        {!isRated ? (
          <div className="flex space-x-2 mt-6 mb-6 smaller:justify-center">
            {[...Array(5)].map((_, i) => (
              <button
                key={i}
                onClick={() => handleStarClick(i)}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
              >
                <AddStar filled={i < Math.max(stars, hoveredStars)} />
              </button>
            ))}
          </div>
        ) : (
          <div
            className={`pt-6 pb-6 font-semibold text-lg tiny:text-center smaller:text-center ${
              darkMode ? "text-white" : "text-purple-900"
            }`}
          >
            {i18n.language === "en"
              ? `YOU HAVE RATED THIS PRODUCT WITH ${stars} STAR${
                  stars > 1 ? "S" : ""
                }`
              : `შენ შეაფასე პროდუქტი ${stars} ვარსკვლავით`}
          </div>
        )}

        <p className="tiny:text-center smaller:text-center">
          {t("winePage.singleWine.reviews.paragraph")}
        </p>
        <hr
          className={`smaller:ml-4 smaller:mr-4 max-w-[640px] mt-8 border-t-2  ${
            !darkMode && "border-gray-500"
          }`}
        />
      </Wrapper>
    </div>
  );
}
export default Rate;
