import { useParams } from "react-router-dom";
import SingleOrder from "./SingleOrder";
import { useOrders } from "../../../hooks/useOrders";

function DisplayOrders() {
  const { order: orderPage } = useParams();
  const { data: orders } = useOrders();
  console.log(orders);
  return (
    <div className="mt-[20px]">
      {orderPage === "current" && (
        <div className="flex flex-col gap-[20px]">
          {orders?.map((item) => {
            return (
              <SingleOrder
                key={item._id}
                orderId={item._id.slice(0, 6)}
                price={item.totalAmount}
                date="24/10/2024"
                status={item.deliveryStatus}
              />
            );
          })}
        </div>
      )}
      {orderPage === "history" && (
        <div className="flex flex-col gap-[20px]">
          {orders?.map((item) => {
            return (
              <SingleOrder
                key={item._id}
                orderId={item._id.slice(0, 6)}
                price={item.totalAmount}
                date="24/10/2024"
                status={item.deliveryStatus}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default DisplayOrders;
