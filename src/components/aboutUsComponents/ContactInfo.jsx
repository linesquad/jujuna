function ContactInfo({
  text,
  image,
  textStyle = "text-[13px] text-color-primary",
}) {
  return (
    <div className="flex items-center gap-[20px]">
      <img src={image} alt="location" />
      <p className={textStyle}>{text}</p>
    </div>
  );
}

export default ContactInfo;
