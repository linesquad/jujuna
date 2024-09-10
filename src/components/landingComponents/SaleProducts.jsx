import Wrapper from "../Wrapper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SingleSaleProduct from "./SingleSaleProduct";

function SaleProducts() {
  return (
    <div>
      <Wrapper>
        <div className="mt-[100px]">
          <div className="flex items-start justify-between pl-[50px]">
            <h2 className="text-[32px] text-[#848282]">
              ფასდაკლებული პროდუქტები
            </h2>

            <div className="flex items-center gap-[4px]">
              <div className="w-[36px] h-[36px] border-[1px] border-[#BB8DF580] rounded-[50%] flex justify-center items-center">
                <FaArrowLeft color="#DCC6FA" />
              </div>

              <div className="w-[36px] h-[36px] border-[1px] border-[#BB8DF580] rounded-[50%] flex justify-center items-center">
                <FaArrowRight color="#DCC6FA" />
              </div>
            </div>
          </div>
          <div className="mt-[32px]">
            <SingleSaleProduct />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default SaleProducts;
