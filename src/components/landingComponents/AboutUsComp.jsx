import Wrapper from "../Wrapper";
import HeroContent from "./HeroContent";

function AboutUsComp() {
  return (
    <div className="w-full pt-0 md:pt-[30px] md:pb-[30px]">
      <Wrapper>
        <div className="p-[23px] lg:px-[40px] lg:pt-[70px] lg:pb-[40px] bg-[url('/images/marani.png')] bg-no-repeat bg-cover w-full md:rounded-md">
          <HeroContent
            title="ჩვენ შესახებ"
            description={[
              {
                paragraph:
                  "ჟუჟუნა ძალიან მშრალი და მომჟავო ღვინო 2017 წელს შეიქმნა.",
              },
              {
                paragraph:
                  "ბევრი ფიქრისა და ღვინის მრავალწლიანი სიყვარულის შემდეგ, კომპანია, ჩვენივე სახსრებით, 6-მა მეგობარმა დავაარსეთ. ჩვენი მთავარი მიზანი, დალევის კულტურის განსხვავებული გამოცდილების შექმნა და აქამდე არარსებული თანამდეროვე ღვინის თანამედროვე კულტურაში პოპულარიზაცია იყო.",
              },
              {
                paragraph:
                  "ჩამოსასხმელი ჟუჟუნა საქართველოს უამრავ კაფე-ბარს მალევე დაუმეგობრდა და 2020 წელს ბოთლის ფორმითაც შეავსო მაღაზიათა ქსელი, რაც ასეთ მოკლე დროში, ჩვენთვის, მნიშვნელოვანი სიახლეა",
              },
              {
                paragraph:
                  "ჟუჟუს ისტორია საქართველოს ფარგლებსაც სცდება და ჩინეთსა და იაპონიაში ექსპორტით გააქვს თბილისური დალევის კულტურა.",
              },
            ]}
          />
        </div>
      </Wrapper>
    </div>
  );
}

export default AboutUsComp;
