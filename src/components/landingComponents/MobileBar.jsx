import Button from "../Button";
import Wrapper from "../Wrapper";

function MobileBar() {
  return (
    <Wrapper>
      <div className="bg-[url('/images/banner2.png')] bg-no-repeat bg-cover pt-[12px] pr-[12px] pb-[16px] md:pt-[30px] md:pr-[30px] md:pb-[40px] lg:pt-[80px] lg:pr-[114px] lg:pb-[87px] flex justify-end rounded-md">
        <div className="w-[305px] md:w-[450px] lg:w-[600px] flex flex-col">
          <h2 className="text-[32px] lg:text-[60px] text-color-black font-tommaso">
            მობილური ბარი
          </h2>
          <h3 className="text-[24px] lg:text-[34px] lg:mt-[52px] text-color-primary font-tommaso">
            გავჩნდებით ყველგან, სადაც ისურვებ
          </h3>
          <p className="text-[16px] lg:text-[24px] text-color-primary mt-[20px]">
            ჟუჟუნას ბარი მოგაგნებს ყველგან, სადაც იქნები. თან მოიყვანს ბარმენს,
            ქორფა ჟუჟუნას მაცივარს დააა შენი სტუმრების ჩაჟუჟუნებაზე უუამრავი
            კოქტეილით იზრუნებს.
          </p>
          <div className="flex justify-end md:justify-center mt-[14px] md:mt-[30px] lg:mt-[70px]">
            <Button type="large">გაიგე მეტი</Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default MobileBar;
