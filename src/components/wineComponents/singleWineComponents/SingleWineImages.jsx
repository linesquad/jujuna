import { useTranslation } from "react-i18next";

function SingleWineImages({ wine }) {
  const { t } = useTranslation();

  return (
    <div className="tiny:max-w-[200px] tiny:m-auto tiny:mt-10 mt-20 flex flex-col items-center lg:flex-row lg:justify-center lg:gap-40 lg:-mt-20">
      <div>
        {/* <img
          src="/images/singleWineImage1.png"
          alt="wine image"
          className="w-[300px] lg:w-[429px] m-auto mb-4"
        /> */}
        <img
          src={wine.singleWine[0]}
          alt="wine image"
          className="w-[300px] lg:w-[429px] m-auto mb-4"
        />

        <p className="text-center max-w-96 lg:mt-8">
          {t("winePage.singleWine.text.img1")}
        </p>
      </div>
      <div>
        {/* <img
          src="/images/singleWineImage2.png"
          alt="wine image"
          className="w-[300px] lg:w-[429px] m-auto mt-16 mb-4 lg:mt-96"
        /> */}
        <img
          src={wine.singleWine[1]}
          alt="wine image"
          className="w-[300px] lg:w-[429px] m-auto mt-16 mb-4 lg:mt-96"
        />
        <p className="text-center max-w-96 lg:mt-8">
          {t("winePage.singleWine.text.img2")}
        </p>
      </div>
    </div>
  );
}
export default SingleWineImages;
