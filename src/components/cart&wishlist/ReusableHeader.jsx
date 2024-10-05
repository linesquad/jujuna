import React from "react";
import { FaTimes } from "react-icons/fa";

const ReusableHeader = ({ title, onClose }) => {
  return (
    <div className="flex justify-between items-center p-5 border-b border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 tiny:text-base smaller:text-lg">
        {title}
      </h2>
      <button className="text-gray-600 hover:text-gray-800" onClick={onClose}>
        <FaTimes className="tiny:text-[18px] smaller:text-[19px] text-[20px]" />
      </button>
    </div>
  );
};

const MemoizedReusableHeader = React.memo(ReusableHeader);

export default MemoizedReusableHeader;
