import { Outlet, useNavigate, useParams } from "react-router-dom";

function UserReviews() {
  const navigate = useNavigate();
  const { feedback } = useParams();
  return (
    <div>
      <h2 className="text-[#222528] text-[22px] font-medium pl-[16px]">
        My Review
      </h2>
      <div className="bg-[#fff]  pt-[13px] mt-[32px] pb-[100px]">
        <div className="flex items-start gap-[48px] px-[16px]">
          <p
            className={`text-[18px] text-[#222528] font-medium pb-[13px] cursor-pointer ${
              feedback === "rating" ? "border-b-[3px] border-b-[#724AA4]" : ""
            } `}
            onClick={() => navigate("/userPage/reviews/rating")}
          >
            Rating
          </p>
          <p
            className={`text-[18px] text-[#222528] font-medium pb-[13px] cursor-pointer ${
              feedback === "comment" ? "border-b-[3px] border-b-[#724AA4]" : ""
            }`}
            onClick={() => navigate("/userPage/reviews/comment")}
          >
            Comment
          </p>
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default UserReviews;
