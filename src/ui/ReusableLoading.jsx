import Lottie from "lottie-react";
import grapeLoader from "../animation/grapeLoader.json";

const ReusableLoading = ({ width, height }) => {
  return (
    <Lottie
      animationData={grapeLoader}
      loop={true}
      autoplay={true}
      style={{ width, height }}
    />
  );
};

export default ReusableLoading;
