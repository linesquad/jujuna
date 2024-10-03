import { FaCoins } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import SingleDashboardStat from "./SingleDashboardStat";
import { useTotalAmount } from "../../../hooks/useTotalAmount";
import { useOrders } from "../../../hooks/useOrders";
import { useReviews } from "../../../hooks/useReviews";

function DashboardStats() {
  const { data: totalAmount } = useTotalAmount();
  const { data: orders } = useOrders();
  const { data: reviews } = useReviews();

  return (
    <div className="mt-[32px] flex flex-col gap-[12px] xl:flex-row xl:items-center xl:gap-[24px]">
      <SingleDashboardStat
        icon={FaCoins}
        title="Total Amount"
        value={totalAmount}
        iconcolor="#FFAA42"
        iconBg="#FFEDD6"
      />
      <SingleDashboardStat
        icon={FaBoxOpen}
        title="Total Orders"
        value={orders?.length}
        iconcolor="#4B8DF8"
        iconBg="#D7E6FF"
      />
      <SingleDashboardStat
        icon={FaEnvelope}
        title="Total Feedback"
        value={reviews?.length}
        iconcolor="#6FD3AE"
        iconBg="#E0F5ED"
      />
    </div>
  );
}

export default DashboardStats;
