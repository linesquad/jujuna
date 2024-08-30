import { useTranslation } from "react-i18next";
import { FaTimes } from "react-icons/fa";

const FullCartDisplay = ({ isOpen, onClose, title, items }) => {
  const { i18n } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="hidden lg:flex fixed inset-0 z-50  lg:pt-[110px]">
      {/* Overlay to close the modal when clicking outside */}
      <div className="absolute inset-0 " onClick={onClose}></div>

      {/* Cart on the right */}
      <div className="ml-auto w-[350px] h-full bg-white shadow-lg">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button className="text-gray-500" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        {/* Cart items */}
        <div className="p-4 h-[calc(100%-64px)] overflow-y-auto">
          {items.length === 0 ? (
            <p className="text-center">Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex items-center py-4 border-b">
                <img
                  src={item.image}
                  alt={i18n.language === "en" ? item.name.en : item.name.ge}
                  className="w-16 h-16 object-cover rounded mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-sm font-semibold">
                    {i18n.language === "en" ? item.name.en : item.name.ge}
                  </h3>
                  <p className="text-sm text-gray-600">Price: ${item.price}</p>
                  <p className="text-sm text-gray-600">
                    Quantity: {item.quantity}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Summary */}
        {items.length > 0 && (
          <div className="p-4 border-t">
            <p className="text-right font-semibold">
              Total: $
              {items.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FullCartDisplay;
