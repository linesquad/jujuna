import { Link } from "react-router-dom";
import useCreateOrder from "../../hooks/useCreateOrder";

const DisplayCheckoutInfo = () => {
  const { data, isSuccess } = useCreateOrder();
  console.log(data);

  console.log(isSuccess);

  if (isSuccess) {
    console.log(data);
  }
  return (
    <div className="bg-[#EAEAEA] h-screen py-16 px-64">
      <div className="bg-white border shadow-lg rounded-lg h-full w-full flex gap-20">
        <div className="flex-[2]">
          <p>nugo</p>
        </div>
        <Link to="/">
          <div className="flex-[1]">
            <p>bibilashvili</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DisplayCheckoutInfo;
