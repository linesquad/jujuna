import { useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";

function SingleWineCardImage() {
  const darkMode = useSelector(getMode);

  return (
    <div className="flex flex-col items-center justify-center max-w-[400px] md:max-w-[600px] lg:max-w-[50%] relative">
      {/* <div className="flex flex-col items-center justify-center w-full lg:w-auto lg:max-w-[400px] md:max-w-[600px] relative"> */}
      <div
        className={`absolute -bottom-1/3 -inset-10 xl:-inset-40 bg-no-repeat bg-center bg-contain z-0 ${
          darkMode
            ? "bg-[url('/images/grapeContourDark.png')]"
            : "bg-[url('/images/grapeContour.png')]"
        }`}
      ></div>
      <img
        src="/images/winebottle.png"
        alt="winebottle"
        className="w-60 md:w-80 lg:w-96 z-10"
      />
      <div className="flex gap-2 mt-4">
        <div className="w-2 h-2 bg-buttonColor-secondary rounded"></div>
        <div className="w-2 h-2 bg-buttonColor-dark-primary rounded"></div>
      </div>
    </div>
  );
}

export default SingleWineCardImage;
