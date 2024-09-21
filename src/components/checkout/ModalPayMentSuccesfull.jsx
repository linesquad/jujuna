import { IoMdClose } from "react-icons/io";
import { MdDone } from "react-icons/md";
import ModalInfo from "./ModalInfo";
import useCreateOrder from "../../hooks/useCreateOrder";

const ModalPayMentSuccesfull = ({ totalPrice, orderData }) => {
  const { isLoading } = useCreateOrder();

  if (isLoading || !orderData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-10 rounded-[2.5rem] shadow-lg flex flex-col relative max-h-[100vh] ">
        <div className="absolute top-2 right-2 cursor-pointer">
          <IoMdClose size={60} color="grey" />
        </div>
        <div className="w-full flex justify-center pb-7">
          <div className="w-24 h-24 bg-[#E5F4ED] rounded-full border-[#613994] border-[3px] relative mt-10">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-[#613994] rounded-full">
              <MdDone color="white" size={43} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <h1 className="text-[26px] font-bold text-[#474747]">
            Payment Success!
          </h1>
          <h1 className="text-[40px] font-semibold text-[#121212]">{`$${totalPrice}`}</h1>
        </div>

        <hr className="mt-14 pb-6" />

        <div className="grid grid-rows-2 grid-cols-2 gap-5">
          <ModalInfo title="Ref Number" info={orderData.phone} />
          <ModalInfo title="Payment Time" info={orderData.createdAt} />
          <ModalInfo title="Customer Name" info={orderData.username} />
          <ModalInfo title="Customer Country" info={orderData.country} />
        </div>
        <div>
          <h1 className="text-xl font-bold pt-12 pb-20 text-center">
            Thank you!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ModalPayMentSuccesfull;
