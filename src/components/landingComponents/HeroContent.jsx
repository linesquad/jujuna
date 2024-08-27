function HeroContent({
  containerStyle = "flex flex-col gap-[24px] max-w-[371px] md:max-w-[400px] lg:max-w-[650px]",
  title = "",
  titleStyle = "text-color-primary text-[48px] lg:text-[60px]",
  heading = "",
  headingStyle = "text-color-primary/50 text-[30px] lg:max-w-[553px]",
  desktopDescription = "",
  description = [],
  descriptionStyle = "text-color-primary text-[16px] lg:text-[20px] lg:w-[928px]",
}) {
  return (
    <div className={containerStyle}>
      <h2 className={titleStyle}>{title}</h2>
      <p className={headingStyle}>{heading}</p>
      <p className="hidden md:block text-color-primary text-[20px] lg:text-[24px]">
        {desktopDescription}
      </p>
      <div className="flex flex-col gap-[20px]">
        {description?.map((item, index) => {
          return (
            <p className={descriptionStyle} key={index}>
              {item.paragraph}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default HeroContent;
