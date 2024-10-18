import Lottie from "lottie-react";
import grapeLoader from "../animation/errorRobot.json";

const ReusableErrorRobot = ({ width, height }) => {
  return (
    <Lottie
      animationData={grapeLoader}
      loop={true}
      autoplay={true}
      style={{ width, height }}
    />
  );
};

export default ReusableErrorRobot;
