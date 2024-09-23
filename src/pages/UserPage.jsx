import { Outlet } from "react-router-dom";
import UserPageMenu from "../components/userPageComponents/UserPageMenu";
import Wrapper from "../components/Wrapper";

function UserPage() {
  return (
    <div>
      <Wrapper>
        <div className="flex items-start mt-[48px] gap-[72px] pb-[100px]">
          <div className="hidden md:block">
            <UserPageMenu />
          </div>
          <div className="mt-[56px]">
            <Outlet />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default UserPage;
