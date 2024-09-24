import ContactInformation from "../components/checkout/ContactInformation";
import OrderItems from "../components/checkout/OrderItems";
import OrderWrapper from "../components/checkout/OrderWrapper";

const Checkout = () => {
  return (
    <OrderWrapper>
      <div
        className="bg-[#EAEAEA] min-h-screen tiny:px-3 tiny:py-32 smaller:px-5 smaller:py-7 py-5 px-10 
    md:p-14 md:px-12 lg:p-12 lg:px-28"
      >
        <div className="bg-white border shadow-lg rounded-lg h-full w-full lg:flex">
          <div className="lg:flex-[2]">
            <OrderItems />
          </div>
          <div className="lg:flex-[1]">
            <ContactInformation />
          </div>
        </div>
      </div>
    </OrderWrapper>
  );
};

export default Checkout;
