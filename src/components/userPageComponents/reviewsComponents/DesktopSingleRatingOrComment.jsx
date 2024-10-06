import { useParams } from "react-router-dom";
import bottle from "/images/bottle.png";
import { FaStar } from "react-icons/fa";

function DesktopSingleRatingOrComment({ date, rating, productName, comment }) {
  const { feedback } = useParams();
  return (
    <div className="flex items-center justify-between px-[32px] py-[23px] border-b-[1px] border-b-[#ECEDEE]">
      <div className="w-[185px] text-center flex items-center gap-[10px]">
        <div className="w-[48px] h-[54px] bg-[#F5F5F5] flex justify-center items-center">
          <img src={bottle} alt="" className="w-[26px] h-[39px] object-cover" />
        </div>
        <p className="text-[12px] text-[#0E0F12] font-medium">
          {productName.slice(0, 20) + "..."}
        </p>
      </div>
      <p className="w-[78px] text-center text-[14px] text-[#5D6264]">{date}</p>
      <div className="w-[300px] flex justify-center items-center">
        {feedback === "rating" ? (
          <div className="flex items-center gap-[8px] mt-[12px]">
            <div className="flex gap-[4px] ">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  size={18}
                  key={index}
                  color={index < rating ? "#F8C134" : "#D1D6D8"}
                />
              ))}
            </div>
            <p className="text-[12px] text-[#5D6264] font-medium">({rating})</p>
          </div>
        ) : (
          <p className="text-[#222528] mt-[12px] text-center">
            {comment.slice(0, 50) + "..."}
          </p>
        )}
      </div>
      <div></div>
    </div>
  );
}

export default DesktopSingleRatingOrComment;
