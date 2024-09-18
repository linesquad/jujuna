const TotalSummary = ({ cartItems }) => {
  return (
    <div className="p-5 border-t border-gray-200 bg-gray-50">
      <div className="flex justify-around items-center">
        <p className="text-lg font-semibold text-gray-700 max-w-[44px]">
          Total:
        </p>
        <p className="text-lg font-bold text-gray-800 max-w-[300px]">
          $
          {cartItems.reduce((total, item) => total + item.price * item.unit, 0)}
        </p>
      </div>
    </div>
  );
};

export default TotalSummary;
