import Wrapper from "../Wrapper";
import rotateBottle1 from "/images/rotateBottleMobile1.png";
import rotateBottle2 from "/images/rotateBottleMobile2.png";
import rotateBottle3 from "/images/rotateBottleDesktop1.png";
import rotateBottle4 from "/images/rotateBottleDesktop2.png";
import HeroContent from "./HeroContent";

function Hero() {
  return (
    <div className="w-full bg-[linear-gradient(249deg,_#A583D1_22.95%,_#724AA4_46.44%,_#1E122E_93.06%)] relative">
      <Wrapper>
        <div className="">
          <div className="w-full h-[459px] lg:h-[650px]  pt-[30px] px-[23px] relative lg:pt-[77px] lg:px-[0px]">
            <HeroContent
              title="ჟუჟუნა"
              heading="ღვინო არც ისე წყნარი და არც ბოლომდე ცქრიალაა"
              desktopDescription=" მას ადრეულ რთველზე მიღებული რქაწითელითა და მწვანეთი ვამზადებთ, ამიტომაც სახასიათო სიმჟავე აქვს. მეორადი დუღილისგან კი ბუნებრივ მსუბუქ გაზს იძენს."
            />
          </div>
        </div>
      </Wrapper>
      <div className="flex items-center absolute bottom-0 right-0 space-x-[-160px] lg:space-x-[-255px] xl:space-x-[-360px] justify-end">
        <img
          src={rotateBottle1}
          alt="bottle"
          className="w-[265px] h-[259px] object-cover lg:hidden"
        />
        <img
          src={rotateBottle2}
          alt="bottle"
          className="w-[207px] h-[259px] object-cover lg:hidden"
        />
        <img
          src={rotateBottle3}
          alt="bottle"
          className="hidden lg:block w-[450px] h-[350px] object-cover xl:w-[600px] xl:h-[500px]"
        />
        <img
          src={rotateBottle4}
          alt="bottle"
          className="hidden lg:block w-[400px] h-[350px] object-cover xl:w-[600px] xl:h-[500px]"
        />
      </div>
    </div>
  );
}

export default Hero;
