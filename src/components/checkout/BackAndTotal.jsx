import { IoIosArrowRoundBack } from "react-icons/io";

const BackAndTotal = ({ handleBackToPage, totalPrice }) => {
  return (
    <div className="flex justify-between items-center px-4">
      <div
        onClick={handleBackToPage}
        className="cursor-pointer flex items-center"
      >
        <IoIosArrowRoundBack size={30} />
        <p className="tiny:text-[10px] smaller:text-[11px] text-xs sm:text-[13px] md:text-sm lg:text-[15px]">
          back to page
        </p>
      </div>
      <div>
        <p className="tiny:text-xs smaller:text-[13px] text-xs sm:text-sm md:text-[15px] lg:text-base">{`Total: ₾${totalPrice}`}</p>
      </div>
    </div>
  );
};

export default BackAndTotal;
