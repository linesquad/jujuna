import { FaTimes } from "react-icons/fa";
import Wrapper from "./Wrapper";

const ModalCart = ({ isOpen, onClose, title, checkAllProductsText }) => {
  if (!isOpen) return null;

  // lg:pr-[5000px]

  // hidden lg:flex fixed inset-0 bg-black bg-opacity-50 items-start z-50  pt-[110px]
  return (
    <>
      <div className="lg:fixed lg:inset-0 lg:bg-black lg:bg-opacity-50 lg:z-50 lg:pt-[110px]">
        <Wrapper>
          <div className="hidden w-full lg:flex justify-end">
            <div className="bg-white w-[434px] rounded-lg shadow-lg">
              <div className="flex justify-between items-center px-5 py-4">
                <h2 className="text-base font-semibold">{title}</h2>
                <FaTimes
                  size={20}
                  className="cursor-pointer"
                  onClick={onClose}
                />
              </div>
              <hr />
              <div className="h-[123px] p-5">
                {/* Your cart content here */}
                <p>No items in the cart.</p>
              </div>
              <hr />
              <div className="flex justify-between items-center mb-4 p-5">
                <h2 className="text-lg font-bold">სულ:</h2>
                <h2>100$</h2>
              </div>
              <button
                className="bg-black text-white py-[10px] px-[131px] rounded-full text-base mb-4 mx-5"
                onClick={onClose}
              >
                {checkAllProductsText}
              </button>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default ModalCart;
