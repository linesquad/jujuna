import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function FilterItem({ title, mobile, categories }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className={`flex items-center ${
          mobile ? "justify-between " : "gap-2"
        } w-full tiny:text-[16px] text-lg text-left py-2 justify-between`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className="text-xl">
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </button>
      {isOpen && (
        <div className="pl-4 pt-2 flex flex-col gap-[17px]">
          {categories?.map((item, index) => {
            return <span key={index}>{item}</span>;
          })}
        </div>
      )}
    </div>
  );
}
