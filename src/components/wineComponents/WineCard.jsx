import useWines from "../../hooks/useWines";
import Spinner from "../Spinner";
import Wrapper from "../Wrapper";
import WineCardDetails from "./WineCardDetails";

function WineCard() {
  const { data: wines, isLoading, isError, error } = useWines();

  if (isLoading) return <Spinner />;

  if (isError) {
    return (
      <div className="text-center bg-purple-700 p-2 -mb-24">
        <p className="text-purple-200 font-bold">{error.message}</p>
      </div>
    );
  }

  return (
    <Wrapper>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 relative mb-24">
        {wines?.map((item) => (
          <WineCardDetails key={item.id} item={item} />
        ))}
      </div>
    </Wrapper>
  );
}

export default WineCard;
