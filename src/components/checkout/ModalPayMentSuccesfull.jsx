import { IoMdClose } from "react-icons/io";
import { MdDone } from "react-icons/md";
import ModalInfo from "./ModalInfo";
import useCreateOrder from "../../hooks/useCreateOrder";
import { Link } from "react-router-dom";

const ModalPayMentSuccesfull = ({ orderData, handleCloseModal }) => {
  const { isLoading } = useCreateOrder();

  if (isLoading || !orderData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-none sm:rounded-3xl shadow-lg w-full h-full sm:max-h-[90vh] sm:max-w-lg relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={handleCloseModal}
        >
          <IoMdClose size={36} />
        </button>

        <div className="w-full flex justify-center pb-7">
          <div className="w-24 h-24 bg-[#E5F4ED] rounded-full border-[#613994] border-4 flex items-center justify-center relative mt-6">
            <div className="w-11 h-11 bg-[#613994] rounded-full flex items-center justify-center">
              <MdDone color="white" size={36} />
            </div>
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-700">Payment Success!</h1>
          <h1 className="text-4xl font-semibold text-gray-900 mt-2">
            ${orderData.totalAmount}
          </h1>
        </div>

        <hr className="my-10 border-gray-300" />

        <div className="grid grid-cols-2 gap-6">
          <ModalInfo title="Ref Number" info={orderData.phone} />
          <ModalInfo
            title="Payment Time"
            info={new Date(orderData.createdAt).toLocaleString()}
          />
          <ModalInfo title="Customer Name" info={orderData.username} />
          <ModalInfo title="Customer Country" info={orderData.country} />
        </div>

        <div className="text-center mt-10">
          <Link
            to={`/order/${orderData._id}`}
            onClick={handleCloseModal}
            className="text-xl font-bold text-gray-900 hover:text-purple-600"
          >
            Thank you!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModalPayMentSuccesfull;
