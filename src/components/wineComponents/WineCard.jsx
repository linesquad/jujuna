import { useSelector } from "react-redux";
import { getMode } from "../../features/darkModeSlice";
import useWines from "../../hooks/useWines";
import Wrapper from "../Wrapper";
import WineCardDetails from "./WineCardDetails";

function WineCard() {
  const mode = useSelector(getMode);
  const { data } = useWines();

  return (
    <Wrapper>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 relative mb-24">
        {data?.map((item) => (
          <WineCardDetails key={item.id} item={item} mode={mode} />
        ))}
      </div>
    </Wrapper>
  );
}

export default WineCard;
