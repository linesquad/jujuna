import { useState } from "react";
import SingleOrder from "./SingleOrder";

function MyOrders() {
  const [orderPage, setOrderPage] = useState("current");
  return (
    <div className="px-[16px] pt-[13px] bg-[#fff] mt-[32px] pb-[140px]">
      <div className="flex items-start gap-[48px]">
        <p
          className={`text-[22px] text-[#222528] font-medium pb-[13px] ${
            orderPage === "current" ? " border-b-[3px] border-b-[#724AA4]" : ""
          }`}
          onClick={() => setOrderPage("current")}
        >
          Current orders
        </p>
        <p
          className={`text-[22px] text-[#222528] font-medium pb-[13px] ${
            orderPage === "history" ? "border-b-[3px] border-b-[#724AA4]" : ""
          } `}
          onClick={() => setOrderPage("history")}
        >
          History
        </p>
      </div>
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
    </div>
  );
}

export default MyOrders;
