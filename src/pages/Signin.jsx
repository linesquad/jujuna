import Wrapper from "../components/Wrapper";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import SigninContainer from "../components/enterComponents/SigninContainer";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

function Signin() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="lg:pb-[30px] min-h-screen bg-[#7b5191] overflow-hidden">
      <Wrapper>
        <div className="flex flex-col items-center justify-center lg:items-end xl:mr-40 pt-10 relative">
          <button
            onClick={() => navigate(-1)}
            className="hidden lg:flex text-white text-xl text-white absolute left-0 top-10 items-center"
          >
            <MdOutlineKeyboardArrowLeft className="w-12 h-12" />
            <span>Back</span>
          </button>
          <img
            src="/images/banner2PNG.png"
            alt="banner"
            className="hidden lg:block absolute left-0 -bottom-12"
          />
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center gap-2}">
              <button
                onClick={() => navigate(-1)}
                className="flex lg:hidden text-white text-xl text-white items-center -ml-6"
              >
                <MdOutlineKeyboardArrowLeft className="w-12 h-12" />
                <span>Back</span>
              </button>
              <div className="flex flex-col gap-2 smallExtra:flex-row smallExtra:justify-center smallExtra:space-x-4 mb-8">
                <Link
                  to={"/enter/register"}
                  className="font-tommaso tracking-wide text-center text-xl px-6 py-2 bg-white rounded-full"
                >
                  {t("enter.register")}
                </Link>
                <Link
                  to={"/enter/signin"}
                  className="font-tommaso tracking-wide text-xl px-6 py-2 bg-purple-300 rounded-full bg-purple-300 "
                >
                  {t("enter.auth")}
                </Link>
              </div>
            </div>
            <SigninContainer />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Signin;
