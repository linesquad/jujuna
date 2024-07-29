const Wrapper = ({ children }) => {
  return (
    <div className=" md:w-[700px] lg:w-[1000px]  xl:w-[1200px] mx-auto">
      {children}
    </div>
  );
};

export default Wrapper;
