import Rate from "./Rate";
import RatingBar from "./RatingBar";
import ReviewComments from "./ReviewComments";
import StarRatings from "./StarRatings";

const SingleWineReviews = () => {
  return (
    <div className="flex flex-col mt-20">
      <StarRatings />
      <RatingBar />
      <Rate />
      <ReviewComments />
    </div>
  );
};

export default SingleWineReviews;
