import { useEffect, useState } from "react";
import leftVector from "/images/vectorLeft.svg";
import rightArrow from "/images/vectorRight.svg";

function Pegination({ pageQuantity }) {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    for (let i = 0; i < pageQuantity; i++) {
      setPages((pages) => [...pages, i + 1]);
    }

    return () => setPages([]);
  }, [pageQuantity]);
  return (
    <div className="flex gap-[10px] lg:gap-[30px] items-center justify-center mt-[30px]">
      <img src={leftVector} alt="left-vector" />
      <div className="flex items-center gap-[5px] lg:gap-[15px]">
        {pages.map((item, index) => {
          return (
            <div
              key={index}
              className="tiny:w-[20px] tiny:h-[20px] w-[40px] h-[40px] rounded-[15px] bg-[#d9d9d9] flex justify-center items-center"
            >
              <p className="tiny:text-[13px] text-[16px] text-color-black font-bold">
                {item}
              </p>
            </div>
          );
        })}
      </div>
      <img src={rightArrow} alt="right-arrow" />
    </div>
  );
}

export default Pegination;
