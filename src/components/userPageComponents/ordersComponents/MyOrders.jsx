import { Outlet, useNavigate, useParams } from "react-router-dom";

function MyOrders() {
  const { order: orderPage } = useParams();
  const navigate = useNavigate();
  return (
    <div className="px-[16px] pt-[13px] bg-[#fff] mt-[32px] pb-[140px] xl:rounded-[16px]">
      <div className="flex items-start gap-[48px]">
        <p
          className={`text-[22px] text-[#222528] font-medium pb-[13px] cursor-pointer ${
            orderPage === "current" ? " border-b-[3px] border-b-[#724AA4]" : ""
          }`}
          onClick={() => navigate("/userPage/orders/current")}
        >
          Current orders
        </p>
        <p
          className={`text-[22px] text-[#222528] font-medium pb-[13px] cursor-pointer ${
            orderPage === "history" ? "border-b-[3px] border-b-[#724AA4]" : ""
          } `}
          onClick={() => navigate("/userPage/orders/history")}
        >
          History
        </p>
      </div>
      <Outlet />
    </div>
  );
}

export default MyOrders;
