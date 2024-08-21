import Wrapper from "../Wrapper";
import { FaEnvelope } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import adminProfile from "/images/adminProfile.jfif";

function AdminHeader() {
  return (
    <div className="w-full h-[80px] bg-[#fff] rounded-b-[15px] border-[1px] border-[#BB8DF580]">
      <Wrapper>
        <div className="flex justify-end pr-[46px] py-[10px]">
          <div className="flex items-center gap-[18px]">
            <div className="relative cursor-pointer">
              <FaEnvelope size={20} />
              <div className="w-[15px] h-[15px] rounded-[50%] bg-[#FF1E00] flex justify-center items-center absolute top-[-7px] right-[-7px]">
                <span className="text-color-primary text-[8px]">14</span>
              </div>
            </div>
            <div className="relative cursor-pointer">
              <FaBell size={20} />
              <div className="w-[15px] h-[15px] rounded-[50%] bg-[#FF1E00] flex justify-center items-center absolute top-[-7px] right-[-7px]">
                <span className="text-color-primary text-[8px]">23</span>
              </div>
            </div>
            <img
              src={adminProfile}
              alt="admin-profile"
              className="w-[60px] h-[60px] rounded-[50%] object-cover"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default AdminHeader;
