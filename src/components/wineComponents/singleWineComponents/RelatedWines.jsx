import { useTranslation } from "react-i18next";
import useWines from "../../../hooks/useWines";
import Wrapper from "../../Wrapper";
import RelatedWineCard from "./RelatedWIneCard";
import SameWines from "./SameWines";

function RelatedWines() {
  const { data: wines } = useWines();
  const { t } = useTranslation();

  return (
    <div className="mt-20">
      <Wrapper>
        <h3 className="text-center text-lg">
          {t("winePage.singleWine.relatedWines.title")}
        </h3>
        <SameWines products={wines} CardComponent={RelatedWineCard} />
      </Wrapper>
    </div>
  );
}
export default RelatedWines;
