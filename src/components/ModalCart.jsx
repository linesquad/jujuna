import { useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import Wrapper from "./Wrapper";
import { useTranslation } from "react-i18next";
import DisplayCartItems from "./DisplayCartItems";

const ModalCart = ({
  isOpen,
  onClose,
  title,
  checkAllProductsText,
  onView,
}) => {
  const modalRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleClickCartView = () => {
    onView();
  };

  if (!isOpen) return null;

  return (
    <div className="lg:fixed lg:inset-0 lg:bg-black lg:bg-opacity-50 lg:z-50 lg:pt-[110px]">
      <Wrapper>
        <div className="hidden w-full lg:flex justify-end">
          <div
            ref={modalRef}
            className="bg-white w-[434px] rounded-lg shadow-lg"
          >
            <div className="flex justify-between items-center px-5 py-4">
              <h2 className="text-base font-semibold">{title}</h2>
              <div
                className="cursor-pointer bg-[#EAE7E7] rounded-full p-2"
                onClick={onClose}
              >
                <FaTimes size={12} />
              </div>
            </div>
            <hr />
            <div className="px-5 h-[123px] overflow-y-scroll w-full">
              <DisplayCartItems
              // items={items}
              // onNavigateToDetails={handleNavigateToDetails}
              />
            </div>
            <hr />
            <div className="flex justify-between items-center px-5 pt-2 pb-7">
              <h2 className="text-lg font-bold">{t("cartSlicer.total")}</h2>
              {/* <h2 className="text-[22px] font-semibold">{`$${totalItemsPrice}`}</h2> */}
            </div>
            <div className="flex justify-center">
              <button
                className="bg-black text-white py-[10px] px-[131px] rounded-full text-base mb-4 mx-5 text-center font-semibold"
                onClick={() => handleClickCartView()}
              >
                {checkAllProductsText}
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ModalCart;
