import Rate from "./Rate";
import RatingBar from "./RatingBar";
import ReviewComments from "./ReviewComments";
import StarRatings from "./StarRatings";

const SingleWineReviews = ({ wine }) => {
  return (
    <div className="flex flex-col mt-40 tiny:w-[200px] tiny:m-auto">
      <StarRatings wine={wine} />
      <RatingBar />
      <Rate />
      <ReviewComments wine={wine} />
    </div>
  );
};

export default SingleWineReviews;
