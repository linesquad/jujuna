import Wrapper from "../Wrapper";
import rotateBottle1 from "/images/rotateBottleMobile1.png";
import rotateBottle2 from "/images/rotateBottleMobile2.png";
import rotateBottle3 from "/images/rotateBottleDesktop1.png";
import rotateBottle4 from "/images/rotateBottleDesktop2.png";

function Hero() {
  return (
    // ეს ჩასვი დივში და ბექგრაუნდ ქოლორი გაუკეტე ვიდსი მთლიანე დანარჩენი კაია
    <Wrapper>
      {/* ჯობია ეს კომპონენტში გაიტანო */}
      <div className="w-full bg-[linear-gradient(249deg,_#A583D1_22.95%,_#724AA4_46.44%,_#1E122E_93.06%)] relative">
        <div className="w-full h-[459px] lg:h-[650px]  pt-[30px] px-[23px] relative lg:pt-[77px] lg:px-[40px] xl:px-[80px]">
          <div className="flex flex-col gap-[24px] max-w-[371px] md:max-w-[400px] lg:gap-[48px] lg:max-w-[650px]">
            <h2 className="text-color-primary text-[48px] font-tommaso lg:text-[72px]">
              ჟუჟუნა
            </h2>
            <p className="text-color-primary/60 text-[36px] font-tommaso lg:text-[48px] lg:max-w-[553px]">
              ღვინო არც ისე წყნარი და არც ბოლომდე ცქრიალაა
            </p>
            <p className="hidden md:block text-color-primary text-[20px] lg:text-[24px]">
              მას ადრეულ რთველზე მიღებული რქაწითელითა და მწვანეთი ვამზადებთ,
              ამიტომაც სახასიათო სიმჟავე აქვს. მეორადი დუღილისგან კი ბუნებრივ
              მსუბუქ გაზს იძენს.
            </p>
          </div>
        </div>

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
    </Wrapper>
  );
}

export default Hero;
