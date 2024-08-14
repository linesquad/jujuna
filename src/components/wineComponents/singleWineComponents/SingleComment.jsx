import { useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";

function SingleComment() {
  const mode = useSelector(getMode);

  return (
    <div>
      <div className="flex flex-col items-center md:items-start text-left">
        <h3
          className={`${
            mode
              ? "text-wineNavbarColor-textPurple"
              : "text-buttonColor-primary"
          }`}
        >
          An Absolute Delight!
        </h3>
        <span>1 day ago</span>
        <span className="block font-semibold">Larry43</span>
        <p className="m-10 max-w-[400px] text-center md:text-left md:ml-0 md:mt-5 md:max-w-[450px]">
          The Purple Grape Wine exceeded my expectations. The natural flavors of
          blackberry, plum, and black cherry are refreshing and indulgent.
          Perfect for a relaxing evening, especially when chilled. My new go-to
          wine!
        </p>
      </div>
    </div>
  );
}
export default SingleComment;
