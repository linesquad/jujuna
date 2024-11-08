import Rate from "./Rate";
import RatingBar from "./RatingBar";
import StarRatings from "./StarRatings";

const SingleWineReviews = ({ wine }) => {
  return (
    <div className="flex flex-col mt-40 tiny:w-[200px] tiny:m-auto">
      <StarRatings wine={wine} />
      <RatingBar />
      <Rate />
    </div>
  );
};

export default SingleWineReviews;
