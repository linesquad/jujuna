import { IoIosStar } from "react-icons/io";
import Wrapper from "../../Wrapper";
import RateQuality from "./RateQuality";
import SingleComment from "./SingleComment";

function ReviewComments({ wine }) {
  return (
    <div className="mt-8 flex flex-col justify-center">
      <Wrapper>
        <div className="flex gap-0.5 mb-10 justify-center md:justify-start">
          <IoIosStar className="w-6 h-6 text-purple-800" />
          <IoIosStar className="w-6 h-6 text-purple-800" />
          <IoIosStar className="w-6 h-6 text-purple-800" />
          <IoIosStar className="w-6 h-6 text-purple-800" />
          <IoIosStar className="w-6 h-6 text-purple-800" />
        </div>
        <div className="lg:flex lg:flex-row-reverse lg:justify-between lg:items-start lg:max-w-[57%] gap-4">
          <RateQuality />
          <div>
            {/* <SingleComment wine={wine} />
            <SingleComment wine={wine} />
            <SingleComment wine={wine} /> */}
            {wine?.feedback.map((comment) => (
              <SingleComment key={comment._id} comment={comment} />
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
export default ReviewComments;
