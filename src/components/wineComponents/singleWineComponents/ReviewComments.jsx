import { IoIosStar } from "react-icons/io";
import Wrapper from "../../Wrapper";
import RateQuality from "./RateQuality";
import SingleComment from "./SingleComment";

function ReviewComments() {
  return (
    <div className="mt-8">
      <Wrapper>
        <div className="flex gap-0.5 mb-10 justify-center md:justify-start">
          <IoIosStar className="w-6 h-6 text-purple-800" />
          <IoIosStar className="w-6 h-6 text-purple-800" />
          <IoIosStar className="w-6 h-6 text-purple-800" />
          <IoIosStar className="w-6 h-6 text-purple-800" />
          <IoIosStar className="w-6 h-6 text-purple-800" />
        </div>
        <div className="lg:flex ">
          <SingleComment />
          <RateQuality />
        </div>
        <SingleComment />
        <SingleComment />
      </Wrapper>
    </div>
  );
}
export default ReviewComments;
