import Button from "../Button";

export default function MobileBar() {
  return (
    <div
      style={{ backgroundPosition: "13% center" }}
      className="pt-[12px] pr-[12px] pb-[16px] pl-[110px]  bg-mobileBar bg-left bg-no-repeat bg-cover beforeTablet:pt-[20px] beforeTablet:pl-[150px] tablet:pt-[60px] tablet:pl-[300px] tablet:pr-[70px] tablet:pb-[50px]  desktop:pt-[100px] desktop:pl-[450px] desktop:pb-[100px] biggerDesktop:pl-[600px]"
    >
      <div className="flex  flex-col ml-[20px] ">
        <h1 className="font-tommaso text-[32px] leading-[37px] text-black tablet:text-[38px] biggerDesktop:text-[60px] ">
          მობილური ბარი
        </h1>
        <h2 className="font-tommaso font-[400] text-[24px] leading-[28px] text-white mt-[5px] tablet:text-[28px] tablet:mt-[20px] biggerDesktop:mt-[52px] biggerDesktop:text-[36px]">
          გავჩნდებით ყველგან, სადაც ისურვებ
        </h2>
        <p className="text-[16px] leading-[18px] text-white mt-[26px] tablet:text-[18px] biggerDesktop:text-[20px] biggerDesktop:mt-[40px]">
          ჟუჟუნას ბარი მოგაგნებს ყველგან, სადაც იქნები. თან მოიყვანს ბარმენს,
          ქორფა ჟუჟუნას მაცივარს დააა შენი სტუმრების ჩაჟუჟუნებაზე უუამრავი
          კოქტეილით იზრუნებს.
        </p>
        {/* <button className="bg-buttonColor-primary text-white self-end pt-[7px] pr-[21.5px] pb-[7px] pl-[21.5px] rounded-full mt-[10px] tablet:self-center tablet:mt-[40px] tablet:text-[18px] biggerDesktop:text-[20px]">
          გაიგე მეტი
        </button> */}
        <div className=" pt-[7px] pr-[21.5px] pb-[7px] pl-[21.5px] self-center mt-[10px] tablet:self-center tablet:mt-[40px] tablet:text-[18px] biggerDesktop:text-[20px]">
          <Button type="large">გაიგე მეტი</Button>
        </div>
      </div>
    </div>
  );
}
