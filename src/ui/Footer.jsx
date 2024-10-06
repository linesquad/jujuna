import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import Wrapper from "../components/Wrapper";
import Logo from "../components/Logo";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getMode } from "../features/darkModeSlice";
import OneContactInfo from "../components/footerComponents/OneContactInfo";

const Footer = () => {
  const { t } = useTranslation();
  const darkMode = useSelector(getMode);

  return (
    <div className={`${darkMode ? "bg-[#000]" : "bg-[#1E122E]"} pb-[32px]`}>
      <Wrapper>
        <div className="grid grid-cols-[1fr_1fr] md:gird-cols-[1fr_1fr_1fr_1fr] max-w-[400px] px-[10px] mx-auto pt-[26px] gap-y-[64px] md:hidden">
          <div className="col-span-2 flex justify-center">
            <Logo />
          </div>
          <div className="col-span-2 flex justify-between">
            <OneContactInfo title={t("footer.number")} info="+995579760006" />
            <OneContactInfo title={t("footer.email")} info="Hello@jujuna.ge" />
          </div>
          <div className="col-span-2 flex justify-between">
            <OneContactInfo
              title={t("footer.adress")}
              info={t("footer.adressValue")}
            />
            <div className="flex items-center gap-[16px]">
              <FaInstagram color="#fff" size={23} />
              <FaFacebook color="#fff" size={23} />
              <FaLinkedin color="#fff" size={23} />
            </div>
          </div>
        </div>

        <div className="pt-[81px] hidden md:block">
          <div className="flex justify-between items-center">
            <Logo />
            <OneContactInfo title={t("footer.number")} info="+995579760006" />
            <OneContactInfo title={t("footer.email")} info="Hello@jujuna.ge" />
            <OneContactInfo
              title={t("footer.adress")}
              info={t("footer.adressValue")}
            />
          </div>

          <div className="mt-[62px] hidden lg:flex  justify-between items-center">
            <div className="flex items-center gap-[16px]">
              <FaInstagram color="#fff" size={23} />
              <FaFacebook color="#fff" size={23} />
              <FaLinkedin color="#fff" size={23} />
            </div>
            <div className="flex items-center gap-[40px] text-[#908F8F]">
              <p>{t("footer.personalPol")}</p>
              <p>{t("footer.security")}</p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
