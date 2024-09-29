import DesktopSingleRatingOrComment from "./DesktopSingleRatingOrComment";
import SingleRatingorComment from "./SingleRatingorComment";

function DisplayReviews() {
  return (
    <div className="mt-[20px] ">
      <div className="hidden xl:flex xl:items-center justify-between h-[40px] bg-[#EDF0F2] px-[32px]">
        <p className="w-[185px] text-center">Product</p>
        <p className="w-[78px] text-center">Date</p>
        <p className="w-[300px] text-center">Rating</p>
        <div></div>
      </div>
      <div className="hidden xl:flex flex-col gap-[20px]">
        <DesktopSingleRatingOrComment
          name="Name"
          surname="Surname"
          date="10/02/2024"
          rating={4}
          comment="Lorem ipsum dolor sit amet, consectetur adipisci ..."
          productName="Mitsuko’s Vineyard Carneros"
        />
        <DesktopSingleRatingOrComment
          name="Name"
          surname="Surname"
          date="10/02/2024"
          rating={4}
          comment="Lorem ipsum dolor sit amet, consectetur adipisci ..."
          productName="Mitsuko’s Vineyard Carneros"
        />
        <DesktopSingleRatingOrComment
          name="Name"
          surname="Surname"
          date="10/02/2024"
          rating={4}
          comment="Lorem ipsum dolor sit amet, consectetur adipisci ..."
          productName="Mitsuko’s Vineyard Carneros"
        />
      </div>
      <div className="xl:hidden flex flex-col gap-[20px]">
        <SingleRatingorComment
          name="Name"
          surname="Surname"
          date="10/02/2024"
          rating={4}
          comment="Lorem ipsum dolor sit amet, consectetur adipisci ..."
          productName="Mitsuko’s Vineyard Carneros"
        />
        <SingleRatingorComment
          name="Name"
          surname="Surname"
          date="10/02/2024"
          rating={3}
          comment="Lorem ipsum dolor sit amet, consectetur adipisci ..."
          productName="Mitsuko’s Vineyard Carneros"
        />
        <SingleRatingorComment
          name="Name"
          surname="Surname"
          date="10/02/2024"
          rating={5}
          comment="Lorem ipsum dolor sit amet, consectetur adipisci ..."
          productName="Mitsuko’s Vineyard Carneros"
        />
      </div>
    </div>
  );
}

export default DisplayReviews;
