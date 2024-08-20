import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/AdminComponents/AdminHeader";
import Sidebar from "../../components/AdminComponents/Sidebar";
import Wrapper from "../../components/Wrapper";

function AdminLayout() {
  return (
    <div className="bg-[#eaeaea]">
      <AdminHeader />
      <Wrapper>
        <div className="mt-[30px] flex gap-[40px]">
          <Sidebar />
          <Outlet />
        </div>
      </Wrapper>
    </div>
  );
}

export default AdminLayout;
