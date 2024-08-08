function Header() {
  return (
    <div>
      <div className="flex justify-center items-center md:h-[499.84px] md:w-[573.83px] relative">
        <img
          src={"/images/splash.png"}
          alt=""
          className="w-[350px]  md:w-[765px] md:h-[920.77px] -rotate-[66deg]"
        />
        <img
          src={"/images/winebottle.png"}
          alt=""
          className="absolute w-[200px] left-[100px] top-[100px] md:w-[300.22px] md:left-[170px] md:top-[100px]"
        />
        <img
          src={"/images/winebottle.png"}
          alt=""
          className="absolute w-[200px] left-[30px] md:w-[300.22px] md:left-[50px]"
        />
        <img
          src={"/images/winebottle.png"}
          alt=""
          className="absolute w-[200px] left-[170px] md:w-[300.22px] md:left-[280px]"
        />
      </div>
    </div>
  );
}

export default Header;
