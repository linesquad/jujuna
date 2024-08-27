import { FaTimes } from "react-icons/fa";

const ModalCart = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-[434px] rounded shadow-lg">
        <div className="flex justify-between items-center px-5 ">
          <h2 className="text-base font-semibold">ჩემი კალათა</h2>
          <FaTimes size={20} className="cursor-pointer" onClick={onClose} />
        </div>
        <hr />
        <div className="h-[123px]">
          {/* Your cart content here */}
          <p>No items in the cart.</p>
        </div>
        <hr />
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">სულ:</h2>
          <h2>100$</h2>
        </div>
        <button
          className="bg-black text-white py-[10px] px-[131px] rounded-full text-base"
          onClick={onClose}
        >
          კალათის ნახვა
        </button>
      </div>
    </div>
  );
};

export default ModalCart;
