import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";

const NewsStar = () => {
  const darkMode = useSelector(getMode);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const [clicked, setClicked] = useState(false);

  const handleMouseEnter = (currentRating) => {
    if (!clicked) {
      setHover(currentRating);
    }
  };

  const handleMouseLeave = () => {
    if (!clicked) {
      setHover(null);
    }
  };

  const handleClick = (currentRating) => {
    setRating(currentRating);
    setClicked(true);
  };

  return (
    <div className="flex">
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onChange={() => handleClick(currentRating)}
              className="hidden"
            />
            {currentRating <= (hover || rating) ? (
              <FaStar
                size={30}
                color="#613994"
                onMouseEnter={() => handleMouseEnter(currentRating)}
                onMouseLeave={handleMouseLeave}
                className="transition-colors duration-200 cursor-pointer"
              />
            ) : (
              <FaRegStar
                size={30}
                color={`${darkMode ? "white" : "#613994"}`}
                onMouseEnter={() => handleMouseEnter(currentRating)}
                onMouseLeave={handleMouseLeave}
                className="transition-colors duration-200 cursor-pointer"
              />
            )}
          </label>
        );
      })}
    </div>
  );
};

export default NewsStar;
