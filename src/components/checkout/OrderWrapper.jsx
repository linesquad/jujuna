const OrderWrapper = ({ children }) => {
  return (
    <div className="w-full bg-[#EAEAEA]">
      <div className="lg:w-[1024px] mx-auto h-full">{children}</div>
    </div>
  );
};

export default OrderWrapper;
