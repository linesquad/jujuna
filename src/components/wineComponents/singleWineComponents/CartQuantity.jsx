export default function CartQuantity() {
  return (
    <div className="flex items-center gap-2">
      <button className="bg-[#C6C6C6] rounded-full w-[18px] h-[18px] flex justify-center items-center text-black text-[20px] cursor-pointer">
        -
      </button>
      <span>1</span>
      <button className="bg-[#C6C6C6] rounded-full w-[18px] h-[18px] flex justify-center items-center text-black text-[20px] cursor-pointer">
        +
      </button>
    </div>
  );
}
