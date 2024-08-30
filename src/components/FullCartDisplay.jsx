import { FaTimes } from "react-icons/fa";

const FullCartDisplay = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex lg:pt-[110px]">
      <div className="absolute inset-0 " onClick={onClose}></div>

      {/* Cart on the right */}
      <div className="ml-auto w-[350px] h-full bg-white shadow-lg">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button className="text-gray-500" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        {/* Your cart content goes here */}
        <div className="p-4">
          <p>Your cart items...</p>
          {/* Add your cart item structure here */}
        </div>
      </div>
    </div>
  );
};

export default FullCartDisplay;
