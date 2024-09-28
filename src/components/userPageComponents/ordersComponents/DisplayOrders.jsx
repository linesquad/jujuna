import { useParams } from "react-router-dom";
import SingleOrder from "./SingleOrder";

function DisplayOrders() {
  const { order: orderPage } = useParams();
  return (
    <div className="mt-[20px]">
      {orderPage === "current" && (
        <div className="flex flex-col gap-[20px]">
          <SingleOrder
            orderId="145685"
            price={540}
            date="24/10/2024"
            status="Current"
          />
          <SingleOrder
            orderId="145685"
            price={540}
            date="24/10/2024"
            status="Current"
          />
          <SingleOrder
            orderId="145685"
            price={540}
            date="24/10/2024"
            status="Current"
          />
          <SingleOrder
            orderId="145685"
            price={540}
            date="24/10/2024"
            status="Current"
          />
        </div>
      )}
      {orderPage === "history" && (
        <div className="flex flex-col gap-[20px]">
          <SingleOrder
            orderId="145685"
            price={540}
            date="24/10/2024"
            status="Current"
          />
          <SingleOrder
            orderId="145685"
            price={540}
            date="24/10/2024"
            status="Current"
          />
          <SingleOrder
            orderId="145685"
            price={540}
            date="24/10/2024"
            status="Cancelled"
          />
          <SingleOrder
            orderId="145685"
            price={540}
            date="24/10/2024"
            status="completed"
          />
        </div>
      )}
    </div>
  );
}

export default DisplayOrders;
