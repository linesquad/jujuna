import { Link, useParams } from "react-router-dom";
import useGetOrderById from "../../hooks/useGetOrderById";

const DisplayCheckoutInfo = () => {
  const { id } = useParams();
  const { data, isError, error, isLoading } = useGetOrderById(id);

  // orderItems.map();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;
  const { orderItems } = data;
  return (
    <div className="bg-[#EAEAEA] h-screen py-16 px-64">
      <div className="bg-white border shadow-lg rounded-lg h-full w-full flex gap-10">
        <div className="flex-[2] pl-16 py-12 flex flex-col gap-[30px]">
          <div className="">
            <div className="bg-[#C4C4C4] pl-3 py-3 border rounded-t-lg">
              <h1 className="text-lg font-bold">Customer Information</h1>
            </div>
            <div className="flex bg-[#EAEAEA] border rounded-b-lg gap-36 pl-4 pt-4 pb-4">
              <div className="flex flex-col gap-[10px]">
                <h1 className="text-sm font-bold">Email</h1>
                <p className="text-[13px]">{data.email}</p>
              </div>
              <div className="flex flex-col gap-[10px]">
                <h1 className="text-sm font-bold">Shipping Address</h1>
                <ul>
                  <li className="text-[13px]">{data.username}</li>
                  <li className="text-[13px]">{data.currentAddress}</li>
                  <li className="text-[13px]">{data.city}</li>
                  <li className="text-[13px]">{data.country}</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-[#C4C4C4] pl-3 py-3 border rounded-t-lg">
              <h1 className="text-lg font-bold">Shipping method </h1>
            </div>
            <div className="flex bg-[#EAEAEA] border rounded-b-lg gap-4 pl-4 pt-4 pb-4 flex-col">
              <h1 className="text-[13px]">Standard Shipping</h1>
              <h1 className="text-[13px]">
                Estimated delivery time is 5-7 business days
              </h1>
            </div>
          </div>

          <div>
            <div className="bg-[#C4C4C4] pl-3 py-3 border rounded-t-lg">
              <h1 className="text-lg font-bold">Payment Info</h1>
            </div>
            <div className="flex bg-[#EAEAEA] border rounded-b-lg gap-36 pl-4 pt-4 pb-4">
              <div className="flex flex-col gap-[10px]">
                <h1 className="text-sm font-bold">Payment Info</h1>
                <p className="text-[13px]">Standard Shipping: $15.00</p>
              </div>
              <div className="flex flex-col gap-[10px]">
                <h1 className="text-sm font-bold">Billing Address</h1>
                <ul>
                  <li className="text-[13px]">{data.username}</li>
                  <li className="text-[13px]">{data.currentAddress}</li>
                  <li className="text-[13px]">{data.city}</li>
                  <li className="text-[13px]">{data.country}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-[1] py-12 pr-12 flex flex-col gap-[30px]">
          <div>
            <div className="bg-[#C4C4C4] pl-3 py-3 border rounded-t-lg">
              <h1 className="text-lg font-bold text-center">Order Summary</h1>
            </div>
            <div className="flex bg-[#EAEAEA] border rounded-b-lg gap-36 pl-4 pt-4 pb-4">
              <div className="flex flex-col gap-[10px]">
                <ul className="flex justify-center w-full gap-20 pl-3">
                  <li className="text-[13px] w-[60px]">Subtotal</li>
                  <li className="text-[13px]">32$</li>
                </ul>
                <ul className="flex justify-center w-full gap-20 pl-3">
                  <li className="text-[13px] w-[60px]">Flat-flate</li>
                  <li className="text-[13px]">5$</li>
                </ul>
                <ul className="flex justify-center w-full gap-20 pl-3">
                  <li className="text-[13px] w-[60px]">Total</li>
                  <li className="text-[13px]">{data.totalAmount}</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-[#C4C4C4] pl-3 py-3 border rounded-t-lg">
              <h1 className="text-lg font-bold text-center">Items In Number</h1>
            </div>
            <div className="p-4 bg-[#EAEAEA] max-h-[282px] overflow-y-scroll gap-5 flex flex-col">
              {orderItems.map((item) => (
                <div
                  key={item.productId}
                  className="flex bg-white max-h-[100px] items-center gap-2 p-1"
                >
                  <div className="max-w-[70px] bg-[#D9D9D9] h-[70px] flex items-center justify-center rounded-md">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover p-1"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <h1 className="text-xs text-[#613994] font-bols">
                      {item.title.length > 10
                        ? item.title.slice(0, 10) + "..."
                        : item.title}
                    </h1>
                    <p className="text-[10px]">Mitsuko’s Vineyard Carneros</p>
                    <p className="text-[13px] font-medium">
                      ${item.price * item.unit}
                    </p>
                  </div>
                  <div className="ml-2">
                    <h1 className="text-[15px] font-semibold">{item.unit}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex justify-center">
            <Link to="/">
              <div className="w-[216px] h-[43px] bg-[#D9D9D9] flex justify-center items-center shadow-lg">
                <button className="text-base">Back to home</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCheckoutInfo;
