import SingleRatingorComment from "./SingleRatingorComment";

function DisplayReviews() {
  return (
    <div className="mt-[20px] flex flex-col gap-[20px]">
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
  );
}

export default DisplayReviews;
