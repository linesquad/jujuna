import { FaCamera } from "react-icons/fa";
import profile from "/images/adminProfile.jfif";
import OneInfoField from "../components/userPageComponents/settingsComponents/OneInfoField";

function UserSettings() {
  return (
    <div className="px-[16px]">
      <h2 className="text-[22px] text-[#222528] font-medium">Profile</h2>
      <div className="w-[100px] h-[100px] mt-[32px] relative">
        <img
          src={profile}
          alt="profile"
          className="w-full h-full rounded-[50%] object-cover"
        />
        <div className="absolute bottom-0 right-0 bg-[#fff] w-[32px] h-[32px] rounded-[50%] flex items-center justify-center">
          <FaCamera size={20} />
        </div>
      </div>
      <div className="flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[16px] mt-[32px] pb-[24px] border-b-[1px] border-b-[#E2E5E8]">
          <p className="text-[14px] text-[#222528] font-medium">Email</p>
          <p className="text-[#222528] font-medium">Name1235@gmail.com</p>
        </div>
        <OneInfoField title="Name" description="Abcd Abcd" />
        <OneInfoField title="Phone Number" description="555 55 55 55" />
      </div>
    </div>
  );
}

export default UserSettings;
