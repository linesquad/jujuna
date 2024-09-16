import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import OneSubcategory from "./OneSubcategory";

export default function FilterItem({
  title,
  mobile,
  subCategories,
  setCategoryId,
  categoryId,
}) {
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
          {subCategories?.map((item, index) => {
            return (
              <OneSubcategory
                key={index}
                item={item}
                setCategoryId={setCategoryId}
                categoryId={categoryId}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
