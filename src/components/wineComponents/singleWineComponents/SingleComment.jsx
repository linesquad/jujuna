import { useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";
// import { formatDistanceToNowStrict } from "date-fns";

function SingleComment({ comment }) {
  const darkMode = useSelector(getMode);

  return (
    <div>
      <div className="flex flex-col items-center md:items-start text-left">
        <h3 className={`${darkMode ? "text-[#A583D1]" : "text-[#613994]"}`}>
          An Absolute Delight!
        </h3>
        <span>
          {/* {formatDistanceToNowStrict(comment.updatedAt, { addSuffix: true })} */}
          {/* {comment.updatedAt} */}
          2019-09-10
        </span>
        <span className="block font-semibold">{comment.username}</span>
        <p className="m-10 max-w-[400px] text-center md:text-left md:ml-0 md:mt-5 md:max-w-[450px]">
          {comment.text}
        </p>
      </div>
    </div>
  );
}
export default SingleComment;
