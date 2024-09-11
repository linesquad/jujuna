import SingleWineCardContent from "./SingleWineCardContent";
import SingleWineCardImage from "./SingleWineCardImage";

function SingleWineCard({ wine }) {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:gap-28 lg:w-full lg:max-w-6xl mx-auto lg:mt-28">
      <SingleWineCardImage wine={wine} />
      <SingleWineCardContent wine={wine} />
    </div>
  );
}

export default SingleWineCard;
