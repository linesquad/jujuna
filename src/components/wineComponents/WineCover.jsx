import Wrapper from "../Wrapper";
import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";

export default function WineCover() {
  const mode = useSelector(getMode);

  return (
    <div
      className={`relative flex justify-center items-center bg-no-repeat bg-center  bg-contain text-[#fff] pb-20 bg-[url('/images/splash.png')] ${
        mode
          ? "bg-[linear-gradient(249deg,_#A583D1_22.95%,_#724AA4_46.44%,_#1E122E_93.06%)] text-[#fff]"
          : " lg:bg-[url('/images/splash.png'),linear-gradient(249deg,#A583D1_22.95%,#724AA4_46.44%,#1E122E_93.06%)]"
      }`}
    >
      <Wrapper>
        <div className="relative flex justify-center -space-x-80 gap-32 mt-10">
          <img
            src="/images/winebottle.png"
            alt="winebottle"
            className="w-60 md:w-80"
          />
          <img
            src="/images/winebottle.png"
            alt="winebottle"
            className="w-60 md:w-80 relative top-10"
          />
          <img
            src="/images/winebottle.png"
            alt="winebottle"
            className="w-60 md:w-80"
          />
        </div>
      </Wrapper>
    </div>
  );
}
