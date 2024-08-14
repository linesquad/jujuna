import { useSelector } from "react-redux";
import { getMode } from "../../../features/darkModeSlice";

function SingleWineHeader() {
  const mode = useSelector(getMode);

  return (
    <div
      className={`bg-buttonColor-dark-primary lg:bg-wineNavbarColor-textPurple ${
        !mode && "lg:bg-buttonColor-dark-primary"
      } flex flex-col lg:flex-row lg:gap-6 justify-center p-5 mb-8 text-center`}
    >
      <p className="text-wineDetailsColor-textColor">
        Signature Cocktail Shipping Sale
      </p>
      <p className="text-wineDetailsColor-textDark">
        $10 shipping on 1-6 bottles with the purchase of one Signature Cocktail
      </p>
    </div>
  );
}

export default SingleWineHeader;
