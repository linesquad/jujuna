import PaymentMethod from "./PaymentMethod";

const ContactInformation = () => {
  return (
    <div className="w-full pr-5">
      <h1 className="text-lg font-bold pb-3 pt-5">Contact Information</h1>
      <form className="w-full flex flex-col gap-2">
        <div className="w-full pb-3">
          <input
            type="text"
            id="city"
            name="city"
            className="bg-[#EAEAEA] w-full p-2 pl-3 placeholder:text-[#908F8F] focus:outline-none focus:ring-0"
            placeholder="City"
          />
        </div>
        <div className="w-full flex gap-2">
          <select
            name="country"
            id="country"
            className="bg-[#EAEAEA] w-[50%] p-2 pl-3 placeholder:text-[#908F8F] focus:outline-none focus:ring-0"
          >
            <option value="" disabled selected>
              Your country
            </option>
            <option value="georgia">Georgia</option>
          </select>
          <select
            name="state"
            id="state"
            className="bg-[#EAEAEA] w-[50%] p-2 pl-3 placeholder:text-[#908F8F] focus:outline-none focus:ring-0"
          >
            <option value="" disabled selected>
              Your state
            </option>
            <option value="tbilisi">Tbilisi</option>
            <option value="kutaisi">Kutaisi</option>
          </select>
        </div>

        <div className="w-full">
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            className="bg-[#EAEAEA] w-full p-2 pl-3 placeholder:text-[#908F8F] focus:outline-none focus:ring-0"
            placeholder="Postal Code"
          />
        </div>

        <div className="w-full pb-3">
          <input
            type="text"
            id="currentAddress"
            name="currentAddress"
            className="bg-[#EAEAEA] w-full p-2 pl-3 placeholder:text-[#908F8F] focus:outline-none focus:ring-0"
            placeholder="Current Address"
          />
        </div>

        <div className="w-full">
          <textarea
            id="note"
            name="note"
            rows="4"
            className="bg-[#EAEAEA] w-full p-2 pl-3 placeholder:text-[#908F8F] focus:outline-none focus:ring-0"
            placeholder="Note"
            style={{ resize: "none" }}
          />
        </div>

        <div className="flex justify-end">
          <div className="bg-[#EAEAEA] px-2 py-2 shadow-md">
            <button className="">Address update</button>
          </div>
        </div>
      </form>
      <div className="pt-4">
        <PaymentMethod />
      </div>
    </div>
  );
};

export default ContactInformation;
