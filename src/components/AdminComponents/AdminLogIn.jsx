import { useForm } from "react-hook-form";
import Logo from "../Logo";
import Wrapper from "../Wrapper";
import { FaCheck } from "react-icons/fa";

function AdminLogIn() {
  const form = useForm();
  const { register, handleSubmit } = form;

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <Wrapper>
      <div className="absolute z-[10] w-full flex flex-col items-center max-w-[350px] px-[20px] pt-[20px] pb-[40px] top-[70px] bg-[#fff] left-[50%] translate-x-[-50%] rounded-[15px] md:static md:w-[500px] md:max-w-[500px] md:translate-x-0 md:ml-[-60px] md:mt-[100px] md:pt-[41px] md:px-[80px] lg:mt-[70px] lg:pb-[100px] lg:w-[649px]">
        <Logo />
        <h2 className="text-[26px] md:text-[36px] mt-[25px] md:mt-[42px] text-[#613994]">
          Log in
        </h2>
        <form
          className="mt-[40px] md:mt-[80px] w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            className="w-full bg-[#fff] [box-shadow:0px_2.657px_2.657px_0px_rgba(0,_0,_0,_0.25)] md:w-[100%] placeholder:text-[#613994] text-[16px] rounded-[15px] py-[5px] pl-[25px]"
            placeholder="Enter your name"
            {...register("name")}
          />
          <input
            type="text"
            className="w-full bg-[#fff] [box-shadow:0px_2.657px_2.657px_0px_rgba(0,_0,_0,_0.25)] md:w-[100%] placeholder:text-[#613994] text-[16px] rounded-[15px] py-[5px] pl-[25px] mt-[20px] md:mt-[40px]"
            placeholder="Enter your name"
            {...register("secondName")}
          />
          <div className="flex justify-between mt-[6px]">
            <div className="flex items-center gap-[8px]">
              <div className="w-[20px] h-[20px] rounded-[50%] border-[1px] border-[#BB8DF580] flex items-center justify-center">
                <FaCheck size={12} />
              </div>
              <p className="text-[13px] text-[#613994]">save information</p>
            </div>
            <p className="text-[13px] text-[#848282]">Forgot password?</p>
          </div>

          <button className="text w-full flex justify-center py-[5px] bg-[#613994] mt-[25px] md:mt-[47px] text-[#fff] rounded-[22px]">
            Get started
          </button>
        </form>
      </div>
    </Wrapper>
  );
}

export default AdminLogIn;
