import { RiDeleteBin7Line } from "react-icons/ri";

const WishListItem = ({ item }) => {
  return (
    <div
      key={item._id}
      className="flex items-center py-4 border-b border-gray-200 tiny:flex-col smaller:flex-col"
    >
      <div className="flex items-center">
        <img
          src={item?.image}
          alt={item.title}
          className="w-[80px] h-[120px] object-cover mr-3 rounded-md cursor-pointer
                  tiny:w-[40px] tiny:h-[80px] smaller:w-[60ox] smaller:h-auto"
        />
      </div>
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

      <div className="w-full">
        <div className="">
          <RiDeleteBin7Line size={20} />
        </div>
      </div>
    </div>
  );
};

export default WishListItem;
