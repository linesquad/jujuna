import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import Wrapper from "../../Wrapper";

const StarRatings = () => {
  const rating = 1.5;
  const total = 72;
  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<IoIosStar key={i} className="w-6 h-6 text-purple-800" />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(
          <IoIosStarHalf key={i} className="w-6 h-6 text-purple-800" />
        );
      } else {
        stars.push(
          <IoIosStarOutline key={i} className="w-6 h-6 text-gray-400" />
        );
      }
    }

    return stars;
  };

  return (
    <Wrapper>
      <div className="-ml-[175px] md:m-0">
        <p>COMMUNITY REVIEWS</p>
        <div className="flex mt-4 mb-6">
          {renderStars()}
          <span className="ml-4">
            {rating} ({total})
          </span>
        </div>
      </div>
    </Wrapper>
  );
};

export default StarRatings;
