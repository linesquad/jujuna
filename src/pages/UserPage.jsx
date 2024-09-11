import { useSelector } from "react-redux";
import EnterUserInfo from "../components/userPageComponents/EnterUserInfo";
import MessengerIcon from "../components/userPageComponents/MessengerIcon";
import UserPageHeader from "../components/userPageComponents/UserPageHeader";
import UserPageProfile from "../components/userPageComponents/UserPageProfile";
import Wrapper from "../components/Wrapper";
import { getMode } from "../features/darkModeSlice";

function UserPage() {
  const darkMode = useSelector(getMode);
  return (
    <div className={`${darkMode ? "bg-[#613994]" : "bg-[#eaeaea]"} pb-[130px]`}>
      <UserPageHeader />
      <Wrapper>
        <div className="md:flex md:justify-between lg:gap-[40px] lg:justify-start lg:mt-[70px]">
          <UserPageProfile />
          <EnterUserInfo />
          <MessengerIcon />
        </div>
      </Wrapper>
    </div>
  );
}

export default UserPage;
