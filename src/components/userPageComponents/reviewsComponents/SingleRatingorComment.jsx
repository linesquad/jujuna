import adminProfile from "/images/adminProfile.jfif";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import bottle from "/images/bottle.png";
import { useParams } from "react-router-dom";

function SingleRatingorComment({
  name,
  surname,
  date,
  rating,
  productName,
  comment,
}) {
  const { feedback } = useParams();
  return (
    <div className="pb-[20px] border-b-[1px] border-b-[#ECEDEE] px-[16px]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[10px]">
          <img
            src={adminProfile}
            alt="admin-profile"
            className="w-[24px] h-[24px] rounded-[50%] object-cover"
          />
          <p className="text-[14px] text-[#5D6264]">
            {name} {surname} rated on {date}
          </p>
        </div>
        <FiMoreHorizontal size={20} />
      </div>

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
        <p className="text-[#222528] mt-[12px]">
          {comment.slice(0, 25) + "..."}
        </p>
      )}

      <div className="flex items-center gap-[10px] mt-[16px] xl:w-[184px]">
        <div className="w-[48px] h-[54px] bg-[#F5F5F5] rounded-[4px] flex justify-center items-center">
          <img src={bottle} alt="product" className="w-[26px] h-[39px]" />
        </div>
        <p className="text-[12px] text-[#0E0F12] font-medium">{productName}</p>
      </div>
    </div>
  );
}

export default SingleRatingorComment;
