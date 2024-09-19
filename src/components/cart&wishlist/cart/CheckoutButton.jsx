import React from "react";
import { Link } from "react-router-dom";

const CheckoutButton = ({ onClose }) => {
  return (
    <Link to={"/checkout"} onClick={onClose}>
      <div className="p-5 border-gray-200 bg-gray-50">
        <div className="flex justify-center items-center">
          <button className="bg-black text-white px-20 py-2 rounded cursor-pointer">
            Check Out
          </button>
        </div>
      </div>
    </Link>
  );
};

const MemoizedCheckoutButton = React.memo(CheckoutButton);
export default MemoizedCheckoutButton;
