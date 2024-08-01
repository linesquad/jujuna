import Button from "../Button";
import Wrapper from "../Wrapper";
import HeroContent from "./HeroContent";

function MobileBar() {
  return (
    <Wrapper>
      <div className="bg-[url('/images/banner2.png')] bg-no-repeat bg-cover pt-[12px] pl-[10px] pr-[12px] pb-[16px] md:pt-[30px] md:pr-[30px] md:pb-[40px] lg:pt-[80px] lg:pr-[114px] lg:pb-[87px] flex justify-end rounded-md">
        <div className="justify-end w-[371px] md:w-[400px] lg:w-[650px]">
          <HeroContent
            containerStyle=""
            title="მობილური ბარი"
            titleStyle="text-[32px] lg:text-[60px] text-color-black font-tommaso"
            heading="გავჩნდებით ყველგან, სადაც ისურვებ"
            headingStyle="text-[24px] lg:text-[34px] lg:mt-[52px] text-color-primary font-tommaso"
            description={[
              {
                paragraph:
                  "ჟუჟუნას ბარი მოგაგნებს ყველგან, სადაც იქნები. თან მოიყვანს ბარმენს,  ქორფა ჟუჟუნას მაცივარს დააა შენი სტუმრების ჩაჟუჟუნებაზე უუამრავი კოქტეილით იზრუნებს.",
              },
            ]}
            descriptionStyle="text-[16px] lg:text-[24px] text-color-primary mt-[20px]"
          />
          <div className="flex justify-end md:justify-center mt-[14px] md:mt-[30px] lg:mt-[70px]">
            <Button type="large">გაიგე მეტი</Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default MobileBar;
