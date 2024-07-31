import instagram from "/images/instagram.svg";
import facebook from "/images/facebook.svg";
import linkedin from "/images/linkedin.svg";
import Wrapper from "../components/Wrapper";
import Logo from "../components/Logo";

const Footer = () => {
  return (
    <div className="w-full bg-[#000]">
      <Wrapper>
        <div className="py-[20px] pr-[10px] pl-[30px] lg:pr-[0px] lg:pl-[0px]">
          <div className="flex justify-between">
            <div className="flex gap-[20px] lg:gap-[64px]">
              <div className="bg-[#ba92ed] w-[45px] h-[45px] flex items-center justify-center rounded-full lg:mt-[15px]">
                <Logo />
              </div>
              <div className="flex flex-col gap-[12px] text-color-primary text-[12px] lg:text-[16px]">
                <p>ტელეფონი</p>
                <p>+995579760006</p>
                <p>ელ.ფოსტა</p>
                <p>Hello@jujuna.ge</p>
                <p>მისამართი</p>
                <p>ნინოშვილი #8 თბილისი,საქართველო</p>
              </div>
            </div>

            <div className="flex flex-col justify-end gap-[10px] items-end md:flex-col md:justify-end md:gap-[17px]">
              <div className="flex gap-[2px] lg:gap-[10px]">
                <a href="https://www.instagram.com/">
                  <img
                    src={instagram}
                    alt="instagram"
                    className="lg:w-[24px] lg:h-[24px]"
                  />
                </a>
                <a href="https://www.facebook.com/">
                  <img
                    src={facebook}
                    alt="facebook"
                    className="lg:w-[24px] lg:h-[24px]"
                  />
                </a>
                <a href="https://www.linkedin.com/feed/">
                  <img
                    src={linkedin}
                    alt="linkedin"
                    className="lg:w-[24px] lg:h-[24px]"
                  />
                </a>
              </div>

              <div className="hidden text-[10px] lg:text-[14px] text-[#908F8F] md:flex md:gap-[49px]">
                <p className="whitespace-nowrap">
                  პერსონალური მონაცემების დაცვის პოლიტიკა
                </p>
                <p className="whitespace-nowrap">უსაფრთხოების ცენტრი</p>
              </div>
            </div>
          </div>
          <div className="text-[10px] text-[#908F8F] mt-[32px] flex justify-between md:hidden">
            <p>პერსონალური მონაცემების დაცვის პოლიტიკა</p>
            <p>უსაფრთხოების ცენტრი</p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
