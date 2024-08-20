/* eslint-disable react/prop-types */
function Button({ children, onClick, type, disabled }) {
  const base = `w-[130px] h-[32px] rounded-[50px] text-[16px] text-[#fff] font-arialgeo font-normal md:w-[130px] md:h-[40px] xl:w-[126px] xl:h-[49px] xl:text-[18px] 
    ${disabled ? "cursor-not-allowed" : ""}`;

  const styles = {
    primary: base + " bg-buttonColor-primary",
    secondary: base + " bg-buttonColor-secondary",
    large:
      base + " xl:w-[222px] xl:h-[55px] xl:text-[24px] bg-buttonColor-primary",
    signIn: base + " flex items-center gap-2",
  };

  return (
    <button className={styles[type]} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
