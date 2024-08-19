import { useEffect, useState } from "react";
import leftVector from "/images/vectorLeft.svg";
import rightArrow from "/images/vectorRight.svg";

function Pegination({ itemsArray, itemsPerPage, setPeginatedItems }) {
  const pageQuantity = Math.ceil(itemsArray?.length / itemsPerPage);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    for (let i = 0; i < pageQuantity; i++) {
      setPages((pages) => [...pages, i + 1]);
    }

    return () => setPages([]);
  }, [pageQuantity]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    setPeginatedItems(itemsArray?.slice(startIndex, startIndex + itemsPerPage));
  }, [currentPage, itemsArray, itemsPerPage, setPeginatedItems]);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < pageQuantity) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex gap-[10px] lg:gap-[30px] items-center justify-center mt-[30px]">
      <img
        src={leftVector}
        alt="left-vector"
        onClick={handlePrevClick}
        className="cursor-pointer"
      />
      <div className="flex items-center gap-[5px] lg:gap-[15px]">
        {pages.map((item, index) => {
          return (
            <div
              key={index}
              className={`tiny:w-[20px] tiny:h-[20px] w-[40px] h-[40px] rounded-[15px] ${
                currentPage === item
                  ? "bg-[#ae3ec9] text-[#fff]"
                  : "bg-[#d9d9d9] text-color-black"
              } flex justify-center items-center cursor-pointer`}
              onClick={() => setCurrentPage(item)}
            >
              <p className="tiny:text-[13px] text-[16px]  font-bold">{item}</p>
            </div>
          );
        })}
      </div>
      <img
        src={rightArrow}
        alt="right-arrow"
        onClick={handleNextClick}
        className="cursor-pointer"
      />
    </div>
  );
}

export default Pegination;
