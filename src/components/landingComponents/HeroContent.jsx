function HeroContent({
  title = "",
  heading = "",
  desktopDescription = "",
  description = [],
}) {
  return (
    <div className="flex flex-col gap-[24px] max-w-[371px] md:max-w-[400px] lg:max-w-[650px]">
      <h2 className="text-color-primary text-[48px] font-tommaso lg:text-[72px]">
        {title}
      </h2>
      <p className="text-color-primary/60 text-[36px] font-tommaso lg:text-[48px] lg:max-w-[553px]">
        {heading}
      </p>
      <p className="hidden md:block text-color-primary text-[20px] lg:text-[24px]">
        {desktopDescription}
      </p>
      <div className="flex flex-col gap-[20px]">
        {description?.map((item, index) => {
          return (
            <p
              className="text-color-primary text-[16px] lg:text-[24px] lg:w-[928px]"
              key={index}
            >
              {item.paragraph}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default HeroContent;
