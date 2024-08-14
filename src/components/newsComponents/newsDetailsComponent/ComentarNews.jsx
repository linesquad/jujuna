import { useTranslation } from "react-i18next";

const ComentarNews = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-gradient-to-r from-[#A583D1] to-[#54436B] rounded">
      <h1
        className="py-6 tiny:pl-[16px] smaller:pl-[17px] pl-[18px] sm:pl-[25px] md:pl-[32px] lg:pl-[39px]
      tiny:text-base smaller:text-[17px] text-lg sm:text-xl md:text-[22px] lg:text-2xl text-white"
      >
        {t("newsDetails.newestComentar")}
      </h1>
      <div className="tiny:pl-[11px] smaller:pl-[12px] pl-[13px] sm:pl-[18px] md:pl-[23px] lg:-[28px] ">
        <div className="flex  items-center tiny:gap-[8px] smaller:gap-[9px] gap-[10px] sm:gap-[17px] md:gap-[24px] lg:gap-[30px]">
          <div className="tiny:w-[60px] smaller:w-[60px] w-[70px] sm:w-[96px]">
            <img
              src="/images/user.jpg"
              alt="user"
              className="tiny:w-12 tiny:h-12 smaller:w-12 smaller:h-12 w-16 h-16 
          sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full object-cover "
            />
          </div>
          <div>
            <p className="text-white tiny:text-[14px] smaller:text-[15px] text-base sm:text-[17px] md:text-lg">
              გმადლობთ კარგი მომსახურებისთვის
            </p>
            <p>example@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComentarNews;
