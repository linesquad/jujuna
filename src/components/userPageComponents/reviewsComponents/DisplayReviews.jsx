import { useReviews } from "../../../hooks/useReviews";
import DesktopSingleRatingOrComment from "./DesktopSingleRatingOrComment";
import SingleRatingorComment from "./SingleRatingorComment";

function DisplayReviews() {
  const { data: reviews } = useReviews();
  console.log(reviews);
  return (
    <div className="mt-[20px] ">
      <div className="hidden xl:flex xl:items-center justify-between h-[40px] bg-[#EDF0F2] px-[32px]">
        <p className="w-[185px] text-center">Product</p>
        <p className="w-[78px] text-center">Date</p>
        <p className="w-[300px] text-center">Rating</p>
        <div></div>
      </div>
      <div className="hidden xl:flex flex-col gap-[20px]">
        {reviews?.map((item) => {
          return (
            <DesktopSingleRatingOrComment
              key={item._id}
              name={item.username.split(" ")[0]}
              surname={item.username.split(" ")[1]}
              date="10/02/2024"
              rating={item.rate}
              comment={item.text.slice(0, 25) + "..."}
              productName="Mitsuko’s Vineyard Carneros"
            />
          );
        })}
      </div>
      <div className="xl:hidden flex flex-col gap-[20px]">
        {reviews?.map((item) => {
          return (
            <SingleRatingorComment
              key={item._id}
              name={item.username.split(" ")[0]}
              surname={item.username.split(" ")[1]}
              date="10/02/2024"
              rating={item.rate}
              comment={item.text.slice(0, 25) + "..."}
              productName="Mitsuko’s Vineyard Carneros"
            />
          );
        })}
      </div>
    </div>
  );
}

export default DisplayReviews;
