import DashboardStats from "../components/userPageComponents/dashboardComponents/DashboardStats";
import MostPurchased from "../components/userPageComponents/dashboardComponents/MostPurchased";
import OrderHistory from "../components/userPageComponents/dashboardComponents/OrderHistory";

function UserDashboard() {
  return (
    <div className="">
      <h2 className="text-[22px] text-[#222528] font-medium pl-[16px]">
        Dashboard
      </h2>
      <div className="px-[16px]">
        <DashboardStats />
      </div>
      <OrderHistory />
      <MostPurchased />
    </div>
  );
}

export default UserDashboard;
