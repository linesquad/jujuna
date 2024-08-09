import Wrapper from "../Wrapper";
import bottle from "/images/bottle1.png";

function Bottle() {
  return (
    <Wrapper>
      <div className="relative md:pb-[30px]">
        <div className="bg-[#eaeaea]  lg:px-[40px]  xl:px-[80px] lg:pb-[60px] md:rounded-md">
          <h2 className="ml-[20px] pt-[10px] text-[40px] text-color-black  font-tommaso font-normal lg:text-[64px]">
            ბოთლი
          </h2>

          <div className="border-y-2 border-[#613994] p-[14px] flex lg:gap-[77px] lg:p-[0px] ">
            <div className="w-[50%] lg:w-[386px]">
              <img
                className="w-[205px] h-[255px] lg:w-[386px] lg:h-full"
                src={bottle}
                alt="bottle"
              />
              <p className="text-[16px] font-normal lg:hidden">
                ჟუჟუს ბოთლი 250 მლ-იანია, რადგან სწორედ ეს პორცია ინარჩუნებს
                მისართმევად საუკეთესო ტემპერატურასა და გაზს.
              </p>
            </div>
            <div className="w-[50%] lg:w-[69%] lg:pb-[20px] bg-[url('/images/layerBlack.png')] bg-no-repeat bg-cover">
              <h2 className="text-[32px] text-color-primary font-tommaso text-center lg:text-left lg:text-[40px] mix-blend-difference">
                ჟუჟუნა ბოთლი
              </h2>
              <div className="flex flex-col items-center gap-[10px] mt-[15px] w-[160px] m-auto lg:w-[100%] lg:items-start lg:flex-row lg:mt-[40px] lg:gap-[20px]">
                <div className="w-[160px] h-[68px] flex flex-col justify-center items-center bg-[#613994] text-color-primary text-[14px] rounded-[10px]">
                  <p>მოცულობა</p>
                  <p>250 მლ</p>
                </div>

                <div className="w-[160px] h-[68px] flex flex-col justify-center items-center bg-[#613994] text-color-primary text-[14px] rounded-[10px]">
                  <p>ალკოჰოლი</p>
                  <p>11%</p>
                </div>

                <div className="w-[160px] h-[68px] flex flex-col justify-center items-center bg-[#613994] text-color-primary text-[14px] rounded-[10px]">
                  <p>ბუნებრივი გზა</p>
                  <p>2.5 ბარი</p>
                </div>
              </div>

              <p className="hidden lg:block text-[16px] font-normal lg:text-[24px] lg:mt-[50px] mix-blend-difference text-color-primary">
                ჟუჟუს ბოთლი 250 მლ-იანია, რადგან სწორედ ეს პორცია ინარჩუნებს
                მისართმევად საუკეთესო ტემპერატურასა და გაზს.
              </p>

              <div className="flex justify-end w-[160px] m-auto mt-[15px] lg:w-[100%] lg:mt-[46px] lg:pr-[50px]">
                <div className="w-[61px] h-[58px] border-[1px] border-[#613994] self-end rounded-[10px] flex justify-center items-center lg:w-[114px] lg:h-[108px] lg:bg-[#613994] lg:text-color-primary">
                  <p className="text-[12px] lg:text-[24px]">4.5₾</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Bottle;
