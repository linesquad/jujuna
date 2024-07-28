import bottle from "../..//../public/images/bottle.png";

function HeroSection() {
  return (
    <>
      <div className="overflow-hidden relative w-[100%] pt-[30px] pr-[46px] pb-[126px] pl-[23px] flex flex-col gap-[24px] bg-gradient-to-bl from-backgroundColor-purpleStart via-backgroundColor-purpleMid to-backgroundColor-purpleEnd text-white beforeTablet:pr-[100px] beforeTablet:pl-[25px] tablet:pr-[230px] desktop:pt-[60px] desktop:pl-[40px] desktop:pr-[400px] desktop:pb-[200px] biggerDesktop:pr-[550px] biggerDesktop:gap-[46px] biggerDesktop:pl-[60px]">
        <h1 className="text-[48px] leading-[55px] font-[400] font-tommaso biggerDesktop:text-[72px]">
          ჟუჟუნა
        </h1>
        <h2 className="text-[36px] leading-[42px] font-[400] opacity-[0.6] font-tommaso biggerDesktop:text-[48px] biggerDesktop:pr-[150px]  ">
          ღვინო არც ისე წყნარი და არც ბოლომდე ცქრიალაა
        </h2>
        <p className="text-[20px] leading-[23px] text-[400] biggerDesktop:text-[24px]">
          მას ადრეულ რთველზე მიღებული რქაწითელითა და მწვანეთი ვამზადებთ,
          ამიტომაც სახასიათო სიმჟავე აქვს. მეორადი დუღილისგან კი ბუნებრივ მსუბუქ
          გაზს იძენს.
        </p>

        <img
          src={bottle}
          className="w-[207px] h-[260px] rotate-[225deg] absolute bottom-[-70px] right-[-70px] tablet:w-[250px] tablet:h-[280px] tablet:right-[-80px] tablet:bottom-[-40px]  desktop:h-[600px] desktop:w-[470px] desktop:bottom-[-120px] desktop:right-[-180px] biggerDesktop:w-[530px] biggerDesktop:h-[570px] biggerDesktop:bottom-[-60px]"
        />
        <img
          src={bottle}
          className="w-[207px] h-[260px] rotate-[45deg] absolute right-[30px] bottom-[-95px] tablet:w-[250px] tablet:h-[280px] tablet:right-[60px] desktop:h-[600px] desktop:w-[470px] desktop:bottom-[-150px] biggerDesktop:w-[530px] biggerDesktop:h-[570px] biggerDesktop:right-[100px] biggerDesktop:bottom-[-140px]"
        />
      </div>
    </>
  );
}

export default HeroSection;
