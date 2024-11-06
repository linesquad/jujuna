import { useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";

function SingleWineCardImage({ wine }) {
  const darkMode = useSelector(getMode);

  return (
    <div className="flex flex-col items-center justify-center max-w-[400px] md:max-w-[600px] lg:max-w-[50%] relative">
      <div
        className={`absolute -bottom-1/3 -inset-10 xl:-inset-20 bg-no-repeat bg-center bg-contain -z-0 ${
          darkMode
            ? "bg-[url('/images/grapeContourDark.png')]"
            : "bg-[url('/images/grapeContour.png')]"
        }`}
      ></div>
      <img
        src={wine.url}
        alt="winebottle"
        className="w-60 md:w-80 lg:w-96 z-10"
      />
    </div>
  );
}

export default SingleWineCardImage;
