import logo from "/images/logo.svg";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-color-black py-5 px-6 xl:px-20">
      <div className="flex flex-row gap-5 xl:gap-16 ">
        <img className="w-[45px] h-[45px] " src={logo} alt="logo" />
        <div className="text-color-primary text-3  xl:text-4 xl:leading-[18px] flex flex-col gap-4 lg:gap-[18px]">
          <p className="flex flex-col gap-3">
            ტელეფონი
            <Link to="tel:+995579760006">+995 579 76 00 06</Link>
          </p>
          <p className="flex flex-col gap-3">
            ელ.ფოსტა
            <Link to="mailto:Hello@jujuna.ge">Hello@jujuna.ge</Link>
          </p>
          <p className="flex flex-col gap-3">
            მისამართი
            <Link
              to="https://maps.app.goo.gl/aYMAvtLq6vYTaHos9"
              target="_blank"
            >
              ნინოშვილი #8 თბილისი,საქართველო
            </Link>
          </p>
        </div>
        <div className="ml-auto mt-auto flex flex-row text-color-primary ">
          <Link
            to="https://www.instagram.com"
            target="_blank"
            className="cursor-pointer"
          >
            <FaInstagram className="xl:w-6 xl:h-6" />
          </Link>
          <Link
            to="https://www.facebook.com"
            target="_blank"
            className="cursor-pointer"
          >
            <FiFacebook className="xl:w-6 xl:h-6" />
          </Link>
          <Link
            to="https://www.linkedin.com"
            target="_blank"
            className="cursor-pointer"
          >
            <FiLinkedin className="xl:w-6 xl:h-6" />
          </Link>
        </div>
      </div>
      <div className="text-[8px] sm:text-[10px] xl:text-[14px] xl:leading-4 text-[#908F8F] mt-8 xl:mt-[17px] mx-4 sm:mx-[28px]  flex gap-2 sm:gap-5 xl:gap-12 justify-end">
        <Link to="#" target="_blank">
          პერსონალური მონაცემების დაცვის პოლიტიკა
        </Link>
        <Link to="#" target="_blank">
          უსაფრთხოების ცენტრი
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
