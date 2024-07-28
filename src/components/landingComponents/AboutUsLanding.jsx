import maraniResizedPhone from "../../../public/images/maraniResizedPhone.png";
import marani from "../../../public/images/marani.png";

function AboutUsLanding() {
  return (
    <div className="relative text-white w-[100%] scroll-m-[95px] " id="aboutUs">
      <img
        src={maraniResizedPhone}
        className="absolute z-[-100] h-[100%] w-[100%] beforeTablet:hidden bg-contain bg-center bg-no-repeat bg-size"
      />
      <img
        src={marani}
        className="hidden z-[-100] h-[100%] w-[100%] beforeTablet:absolute beforeTablet:block "
      />
      {/* tablet:pt-[50px] tablet:pb-[37px] tablet:pr-[200px] tablet:pl-[20px] desktop:pt-[70px] desktop:pl-[80px] desktop:pr-[480px] desktop:pb-[30px] desktop:h-[630px] */}
      <div className="pt-[24px] pr-[50px] pb-[6px] pl-[23px] beforeTablet:pr-[100px] beforeTablet:pt-[35px] beforeTablet:pl-[25px] tablet:pt-[45px] tablet:pr-[200px] tablet:pb-[20px] desktop:pt-[60px] desktop:pr-[300px] desktop:pb-[30px] desktop:pl-[40px] biggerDesktop:pl-[60px] biggerDesktop:pr-[400px] biggerDesktop:pb-[35px]">
        <h1 className="text-[48px] font-tommaso">ჩვენ შესახებ</h1>
        <p className="mt-[32px] mb-4 desktop:text-[18px] biggerDesktop:text-[22px]">
          ჟუჟუნა ძალიან მშრალი და მომჟავო ღვინო 2017 წელს შეიქმნა.
          <br /> <br /> ბევრი ფიქრისა და ღვინის მრავალწლიანი სიყვარულის შემდეგ,
          კომპანია, ჩვენივე სახსრებით, 6-მა მეგობარმა დავაარსეთ. ჩვენი მთავარი
          მიზანი, დალევის კულტურის განსხვავებული გამოცდილების შექმნა და აქამდე
          არარსებული თანამდეროვე ღვინის თანამედროვე კულტურაში პოპულარიზაცია იყო.
          <br />
          <br />
          ჩამოსასხმელი ჟუჟუნა საქართველოს უამრავ კაფე-ბარს მალევე დაუმეგობრდა და
          2020 წელს ბოთლის ფორმითაც შეავსო მაღაზიათა ქსელი, რაც ასეთ მოკლე
          დროში, ჩვენთვის, მნიშვნელოვანი სიახლეა.
          <br />
          <br /> ჟუჟუს ისტორია საქართველოს ფარგლებსაც სცდება და ჩინეთსა და
          იაპონიაში ექსპორტით გააქვს თბილისური დალევის კულტურა.
        </p>
      </div>
    </div>
  );
}

export default AboutUsLanding;
