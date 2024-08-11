import React from "react";
import WineBottle from "/images/winebottle.png";

export default function WineCover() {
  return (
    <div className="relative flex justify-center items-center bg-[url('/images/splash.png')] bg-no-repeat bg-contain bg-center">
      <div className="relative flex justify-center -space-x-80 gap-32 mt-10">
        <img src={WineBottle} alt="winebottle" className="w-60 md:w-80" />
        <img
          src={WineBottle}
          alt="winebottle"
          className="w-60 md:w-80 relative top-10"
        />
        <img src={WineBottle} alt="winebottle" className="w-60 md:w-80" />
      </div>
    </div>
  );
}
