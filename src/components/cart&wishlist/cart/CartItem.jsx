import { RiDeleteBin7Line } from "react-icons/ri";

const CartItem = ({
  item,
  handleDecrease,
  handleIncrease,
  handleDelete,
  isPending,
}) => {
  return (
    <div
      key={item._id}
      className="flex items-center py-4 border-b border-gray-200 tiny:flex-col smaller:flex-col"
    >
      <div className="flex items-center">
        <img
          src={item?.image}
          alt={item?.title}
          // alt={i18n.language === "en" ? item.name.en : item.name.ge}
          className="w-[80px] h-[120px] object-cover mr-3 rounded-md cursor-pointer
                  tiny:w-[40px] tiny:h-[80px] smaller:w-[60ox] smaller:h-auto"
        />
        <div className="flex flex-col flex-grow justify-between gap-2">
          <h3
            className="text-base break-words w-[120px] cursor-pointer
                  tiny:text-xs smaller:text-sm"
          >
            {/* {i18n.language === "en" ? item.name.en : item.name.ge} */}
            {item.title}
          </h3>
          <p className="font-semibold text-[22px] tiny:text-lg smaller:text-xl">
            ${item.price}
          </p>
        </div>
      </div>

      <div className="w-full">
        <div
          className="flex flex-col items-end gap-6 w-full px-2 py-1 
                    tiny:flex-row-reverse tiny:items-center tiny:pt-3
                  tiny:justify-around
                  smaller:flex-row-reverse smaller:items-center smaller:pt-4 smaller:justify-around"
        >
          <RiDeleteBin7Line size={20} onClick={() => handleDelete(item)} />
          <div className="w-[80px] h-[35px] border rounded-full border-[#8F8F8F] px-2 py-1 flex gap-4">
            <button
              className="cursor-pointer"
              onClick={() => handleDecrease(item)}
              disabled={isPending}
            >
              -
            </button>
            <span>{item.unit}</span>
            <button
              className="cursor-pointer"
              onClick={() => handleIncrease(item)}
              disabled={isPending}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
