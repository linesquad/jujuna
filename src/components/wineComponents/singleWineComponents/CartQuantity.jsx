import { useState } from "react";

export default function CartQuantity() {
  const [count, setCount] = useState(1);
  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        className="bg-[#C6C6C6] rounded-full w-[24px] h-[24px] flex justify-center items-center 
                   text-black text-[16px] font-semibold cursor-pointer"
        onClick={decrement}
      >
        −
      </button>
      <span className="w-[25px] text-center">{count}</span>
      <button
        className="bg-[#C6C6C6] rounded-full w-[24px] h-[24px] flex justify-center items-center 
                   text-black text-[16px] font-semibold cursor-pointer"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
}
