const CartItemsCheckOut = ({ item }) => {
  return (
    <div className="p-1">
      <div className="py-3 px-1 w-full flex items-center border rounded-md shadow-lg">
        <div className="flex-shrink-0">
          <img src={item.image} alt={item.title} className="max-h-[100px]" />
        </div>
        <div className="flex-1 ml-4 flex gap-3 flex-col">
          <h1 className="text-sm font-semibold text-[#613994]">
            {item.title.length > 24
              ? item.title.slice(0, 24) + "..."
              : item.title}
          </h1>
          <h2 className="text-xs ">Mitsuko’s Vineyard Carneros</h2>
        </div>
        <div className="flex-shrink-0 text-lg w-16 text-center">
          {item.unit}
        </div>
        <div className="flex-shrink-0 text-lg w-24 text-center">
          {`$${(item.unit * item.price).toFixed(2)}`}
        </div>
      </div>
    </div>
  );
};

export default CartItemsCheckOut;
