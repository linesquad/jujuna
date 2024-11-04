import MyOrders from "../components/userPageComponents/ordersComponents/MyOrders";

function UserOrders() {
  return (
    <div>
      <div>
        <h2 className="text-[22px] text-[#222528] font-medium pl-[16px]">
          My Order
        </h2>
      </div>
      <MyOrders />
    </div>
  );
}

export default UserOrders;
