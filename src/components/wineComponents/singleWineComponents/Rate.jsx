import { useState } from "react";
import Wrapper from "../../Wrapper";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";

function Rate() {
  const [stars, setStars] = useState(0);
  const mode = useSelector(getMode);

  const AddStar = ({ filled }) => {
    return (
      <div className="mr-2 border-2 border-purple-800 p-2 rounded">
        {filled ? (
          <IoIosStar className="w-9 h-9 text-purple-800" />
        ) : (
          <IoIosStarOutline className="w-9 h-9 text-purple-800" />
        )}
      </div>
    );
  };

  return (
    <div className="mt-10 flex flex-col">
      <Wrapper>
        <p>REVIEW THIS PRODUCT</p>
        <div className="flex space-x-2 mt-6 mb-6">
          {[...Array(5)].map((_, i) => (
            <button key={i} onClick={() => setStars(i + 1)}>
              <AddStar
                filled={i < Math.floor(stars)}
                half={i === Math.floor(stars) && stars % 1 !== 0}
              />
            </button>
          ))}
        </div>
        <p>Adding a review will require a valid email for verification</p>
        <hr
          className={`max-w-[640px] mt-8 border-t-2  ${
            !mode && "border-gray-500"
          }`}
        />
      </Wrapper>
    </div>
  );
}
export default Rate;
