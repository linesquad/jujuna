import Lottie from "lottie-react";
import errorRobot from "../animation/errorRobot.json";

const ReusableErrorRobot = ({ width, height }) => {
  return (
    <Lottie
      animationData={errorRobot}
      loop={true}
      autoplay={true}
      style={{ width, height }}
    />
  );
};

export default ReusableErrorRobot;
