import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";

export default function WineImages() {
  const mode = useSelector(getMode);

  return (
    <div className="flex items-center justify-around gap-2 mt-4 w-full">
      <div
        className={`rounded-md p-1 shadow-[rgba(0,0,15,0.3)_8px_8px_16px_0px] xl:shadow-none
              ${
                mode
                  ? "bg-backgroundColor-purpleMid"
                  : "bg-wineCardColor-light xl:bg-transparent"
              } `}
      >
        <img src="/images/winebottle.png" alt="wine bottle" className="w-11" />
      </div>
      <div
        className={`rounded-md p-1 shadow-[rgba(0,0,15,0.3)_8px_8px_16px_0px] xl:shadow-none
              ${
                mode
                  ? "bg-backgroundColor-purpleMid"
                  : "bg-wineCardColor-light  xl:bg-transparent"
              } `}
      >
        <img src="/images/winebottle.png" alt="wine bottle" className="w-11" />
      </div>
      <div
        className={`rounded-md p-1 shadow-[rgba(0,0,15,0.3)_8px_8px_16px_0px] xl:shadow-none
              ${
                mode
                  ? "bg-backgroundColor-purpleMid"
                  : "bg-wineCardColor-light  xl:bg-transparent"
              } `}
      >
        <img src="/images/winebottle.png" alt="wine bottle" className="w-11" />
      </div>
      <div
        className={`rounded-md p-1 shadow-[rgba(0,0,15,0.3)_8px_8px_16px_0px] xl:shadow-none
              ${
                mode
                  ? "bg-backgroundColor-purpleMid"
                  : "bg-wineCardColor-light  xl:bg-transparent"
              } `}
      >
        <img src="/images/winebottle.png" alt="wine bottle" className="w-11" />
      </div>
      <div
        className={`flex justify-center items-center border rounded-full w-16 h-16 ml-4 lg:ml-10 ${
          mode
            ? "border border-wineCardColor-border"
            : "border border-wineNavbarColor-textGray"
        }`}
      >
        <img src="images/rightarrow.png" alt="arrow" className="w-8" />
      </div>
    </div>
  );
}
