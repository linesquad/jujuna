import { RiDeleteBin7Line } from "react-icons/ri";
import useAddToWishList from "../../../hooks/useAddToWishList";
import { updateWishListCache } from "../../../features/wishListUtils";
import { useQueryClient } from "@tanstack/react-query";

const WishListItem = ({ item }) => {
  const { mutate: removeFromWishList } = useAddToWishList();
  const queryClient = useQueryClient();

  const handleRemoveFromWishList = () => {
    removeFromWishList(
      {
        productId: item.productId,
        title: item.title,
        image: item.url,
        price: item.price,
        productType: "wine",
      },
      {
        onSuccess: () => {
          updateWishListCache(item.productId, queryClient);
        },
      }
    );
  };

  return (
    <div
      key={item._id}
      className="flex items-center py-4 border-b border-gray-200 gap-10
      tiny:flex-row tiny:gap-5 smaller:flex-row smaller:gap-8 text-[#000]"
    >
      <div className="flex items-center">
        <img
          src={item?.image}
          alt={item.title}
          className="min-w-[80px] h-[120px] object-cover mr-3 rounded-md cursor-pointer
                  tiny:w-[20px] tiny:h-auto smaller:w-[60px] smaller:h-auto"
        />
      </div>
      <div className="flex flex-col flex-grow justify-between gap-2">
        <h3
          className="text-base break-words w-[120px] cursor-pointer
                  tiny:text-xs smaller:text-sm tiny:w-[40px]"
        >
          {/* {i18n.language === "en" ? item.name.en : item.name.ge} */}
          {item.title}
        </h3>
        <p className="font-semibold text-[22px] tiny:text-lg smaller:text-xl">
          ${item.price}
        </p>
      </div>

      <div className="w-full">
        <div className="cursor-pointer">
          <RiDeleteBin7Line size={20} onClick={handleRemoveFromWishList} />
        </div>
      </div>
    </div>
  );
};

export default WishListItem;
