import Wrapper from "../../Wrapper";

function RatingBar() {
  const ratings = [
    { stars: 5, total: 48, percentage: 80 },
    { stars: 4, total: 20, percentage: 50 },
    { stars: 3, total: 6, percentage: 30 },
    { stars: 2, total: 1, percentage: 10 },
    { stars: 1, total: 0, percentage: 0 },
  ];

  return (
    <Wrapper>
      <div className="w-full max-w-2/3">
        {ratings.map((rating, index) => (
          <div key={index} className="flex items-center gap-2 -mt-1 mr-5 ">
            <span className="tiny:text-sm tiny:w-10 smaller:text-sm smaller:w-10 smaller:ml-4 w-16">
              {rating.stars} stars
            </span>
            <div className="relative tiny:max-w-[130px] smaller:max-w-[200px] w-[230px] md:w-[300px] lg:w-[520px] h-3 bg-wineCardColor-light">
              <div
                className="absolute top-0 left-0 h-full bg-buttonColor-primary"
                style={{ width: `${rating.percentage}%` }}
              ></div>
            </div>
            <span className="tiny:text-sm smaller:text-sm w-8 text-left">
              {rating.total}
            </span>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

export default RatingBar;
