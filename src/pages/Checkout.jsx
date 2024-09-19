import ContactInformation from "../components/checkout/ContactInformation";
import OrderItems from "../components/checkout/OrderItems";

const Checkout = () => {
  return (
    <div className="bg-[#EAEAEA] h-screen py-16 px-64">
      <div className="bg-white border shadow-lg rounded-lg h-full w-full flex gap-20">
        <div className="flex-[2]">
          <OrderItems />
        </div>
        <div className="flex-[1]">
          <ContactInformation />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
