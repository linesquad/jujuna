import { useState } from "react";
import { FaStar } from "react-icons/fa";

const NewsStar = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
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
              onChange={() => setRating(currentRating)}
              className="hidden"
            />
            <FaStar
              size={30}
              color={currentRating <= (hover || rating) ? "#613994" : "#ffffff"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
              className="transition-colors duration-200"
            />
          </label>
        );
      })}
    </div>
  );
};

export default NewsStar;
