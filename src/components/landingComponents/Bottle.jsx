import bottle from "../../../public/images/bottle1.png";
import layerBlack from "../../../public/images/layerBlack.png";
import BottleDescription from "./BottleDescription";
function Bottle() {
  return (
    <div className="" id="bottle">
      <h1 className="pl-[23px]  font-tommaso text-[48px] leading-[46px] font-[400] mb-[19px] mt-[20px] beforeTablet:pl-[25px] desktop:pl-[40px] biggerDesktop:pl-[60px]">
        ბოთლი
      </h1>
      <div className="relative overflow-hidden flex justify-between pt-[10px] pr-[14px] pb-[10px] pl-[10px] border-t-[3px] border-b-[3px]  border-backgroundColor-purpleMid beforeTablet:pr-[50px] tablet:pl-[0] tablet:pt-0 tablet:pb-0 tablet:gap-[20px] biggerDesktop:pr-[60px] ">
        <img
          src={layerBlack}
          className="absolute z-[-10] right-[-170px] beforeTablet:right-[-250px] tablet:right-[-420px]"
        />
        <div className="flex flex-col max-w-[250px] beforeTablet:max-w-[300px] tablet:max-w-[380px] biggerDesktop:min-w-[400px] ">
          <img
            src={bottle}
            className="w-[80%] tablet:h-[100%] tablet:w-[100%]"
          />
          <p className="font-[400] text-[16px] tablet:hidden">
            ჟუჟუს ბოთლი 250 მლ-იანია, რადგან სწორედ ეს პორცია ინარჩუნებს
            მისართმევად საუკეთესო ტემპერატურასა და გაზს.
          </p>
        </div>
        <div className="flex flex-col gap-[10px] items-start beforeTablet:pr-[60px] tablet:gap-[35px] tablet:w-[70%] desktop:w-[50%] desktop:gap-[50px] biggerDesktop:w-[60%]">
          <h1 className="tablet:hidden text-white text-[30px] font-tommaso leading-[37px] font-[400] tablet:mt-[36.5px] tablet:text-[36px] desktop:text-[40px]">
            ჟუჟუნა ბოთლი
          </h1>
          <h1 className="hidden tablet:block text-[30px] font-tommaso leading-[37px] font-[400] tablet:mt-[36.5px] tablet:text-[36px] desktop:text-[40px]">
            ჟუჟუნა ბოთლი
          </h1>
          <div className="flex flex-col gap-[10px] tablet:flex tablet:flex-row tablet:gap-[20px] ">
            {/* <div className=" w-[160px] h-[58px] flex flex-col items-center justify-center rounded-md text-white bg-backgroundColor-purpleMid pr-[11px] pl-[11px] tablet tablet:w-[120px] tablet:text-[14px]  tablet:pl-1 tablet:pr-1 ">
              <p>მოცულობა</p>
              <p>250 მლ</p>
            </div> */}
            <BottleDescription title="მოცულობა" measure="250 მლ" />

            {/* <div className="h-[58px] flex flex-col items-center justify-center rounded-md text-white bg-backgroundColor-purpleMid pr-[5px] pl-[5px] tablet:w-[120px] tablet:text-[14px]  tablet:pl-1 tablet:pr-1">
              <p>ალკოჰოლი</p>
              <p>11%</p>
            </div> */}
            <BottleDescription title="ალკოჰოლი" measure="11%" />
            {/* <div className=" h-[58px] flex flex-col items-center justify-center rounded-md text-white bg-backgroundColor-purpleMid pr-[11px] pl-[11px]  tablet:w-[125px] tablet:text-[14px] tablet:pl-1 tablet:pr-1">
              <p>ბუნებრივი გაზი</p>
              <p>2.5 ბარი</p>
            </div> */}
            <BottleDescription title="ბუნებრივი გაზი" measure="2.5 ბარი" />
          </div>
          <p className="font-[400] text-[16px] tablet:block hidden desktop:text-[18px]">
            ჟუჟუს ბოთლი 250 მლ-იანია, რადგან სწორედ ეს პორცია ინარჩუნებს
            მისართმევად საუკეთესო ტემპერატურასა და გაზს.
          </p>
          <div className="self-start beforeTablet:self-end border-2 border-backgroundColor-purpleMid pt-[22px] pr-[18px] pb-[22px] pl-[18px] rounded-md tablet:mb-[26.5px] tablet:text-white tablet:bg-backgroundColor-purpleMid desktop:text-[20px]">
            <p className="">4.5₾</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bottle;
