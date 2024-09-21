import { DevTool } from "@hookform/devtools";
import PaymentMethod from "./PaymentMethod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import useCreateOrder from "../../hooks/useCreateOrder";
import { useGetCartItems } from "../../hooks/useGetCartItems";
import ModalPayMentSuccesfull from "./ModalPayMentSuccesfull";
const ContactInformation = () => {
  const { mutate: createOrder, data: orderData } = useCreateOrder();
  const { data } = useGetCartItems();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const totalPrice = data.reduce(
    (total, item) => total + item.unit * item.price,
    0
  );

  const form = useForm({
    defaultValues: {
      city: "",
      postalCode: "",
      currentAddress: "",
      note: "",
    },
  });
  const { register, control, handleSubmit, formState, reset } = form;
  const { errors, isSubmitSuccessful } = formState;
  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  const onSubmit = (data) => {
    createOrder({
      postalCode: data.postalCode,
      city: data.city,
      state: data.state,
      country: data.country,
      currentAddress: data.currentAddress,
      note: data.note,
      totalAmount: totalPrice,
    });

    setIsModalVisible(true);
  };

  return (
    <div className="w-full pr-5">
      <h1 className="text-lg font-bold pb-3 pt-5">Contact Information</h1>
      <form
        className="w-full flex flex-col gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full pb-3">
          <input
            type="text"
            id="city"
            name="city"
            className={`bg-[#EAEAEA] w-full p-2 pl-3 border  ${
              errors.city
                ? "placeholder:text-red-500 border-red-500 focus:outline-none focus:ring-0"
                : "placeholder:text-[#908F8F] focus:outline-none focus:ring-0"
            }`}
            placeholder={errors.city ? errors.city.message : "City"}
            {...register("city", {
              required: {
                value: true,
                message: "City is required",
              },
              pattern: {
                value: /^[A-Z][a-zA-Z]*$/,
                message: "There is no city",
              },
            })}
          />
        </div>
        <div className="w-full flex gap-2">
          <select
            name="country"
            id="country"
            className="bg-[#EAEAEA] w-[50%] p-2 pl-3 placeholder:text-[#908F8F] focus:outline-none focus:ring-0"
            defaultValue="" // Set the default value here
            {...register("country", {
              required: {
                value: true,
                message: "Country is required",
              },
            })}
          >
            <option value="" disabled>
              Your country
            </option>
            <option value="georgia">Georgia</option>
          </select>
          <select
            name="state"
            id="state"
            className="bg-[#EAEAEA] w-[50%] p-2 pl-3 placeholder:text-[#908F8F] focus:outline-none focus:ring-0"
            defaultValue=""
            {...register("state", {
              required: {
                value: true,
                message: "State is required",
              },
            })}
          >
            <option value="" disabled>
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
            className={`bg-[#EAEAEA] w-full p-2 pl-3 border  ${
              errors.postalCode
                ? "placeholder:text-red-500 border-red-500 focus:outline-none focus:ring-0"
                : "placeholder:text-[#908F8F] focus:outline-none focus:ring-0"
            }`}
            placeholder={
              errors.postalCode ? errors.postalCode.message : "Postal Code"
            }
            maxLength={5}
            {...register("postalCode", {
              required: {
                value: true,
                message: "Postal Code is required",
              },
              pattern: {
                value: /^[0-9]{1,5}$/,
                message: "Postal Code must be numeric",
              },
            })}
          />
        </div>

        <div className="w-full pb-3">
          <input
            type="text"
            id="currentAddress"
            name="currentAddress"
            className={`bg-[#EAEAEA] w-full p-2 pl-3 border  ${
              errors.currentAddress
                ? "placeholder:text-red-500 border-red-500 focus:outline-none focus:ring-0"
                : "placeholder:text-[#908F8F] focus:outline-none focus:ring-0"
            }`}
            placeholder={
              errors.currentAddress
                ? errors.currentAddress.message
                : "Current Address"
            }
            {...register("currentAddress", {
              required: {
                value: true,
                message: "Address is required",
              },
            })}
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
            maxLength={100}
            {...register("note", {
              maxLength: {
                value: 100,
                message: "Note cannot exceed 100 characters",
              },
            })}
          />
        </div>

        <div className="flex justify-end">
          <div className="bg-[#EAEAEA] px-2 py-2 shadow-md">
            <button className="" type="submit">
              Address update
            </button>
          </div>
        </div>
      </form>
      <DevTool control={control} />
      <div className="pt-4">
        <PaymentMethod />
      </div>

      {isModalVisible && (
        <ModalPayMentSuccesfull totalPrice={totalPrice} orderData={orderData} />
      )}

      {/* {isLoading && <div>Loading...</div>}
      {isSuccess && data && (
        <ModalPayMentSuccesfull totalPrice={totalPrice} orderData={orderData} />
      )}
      {error && <div>Error: {error.message}</div>} */}
      {/* {isModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Order Submitted</h2>
            <p>Your order has been placed successfully!</p>
            <div className="flex justify-end pt-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                // onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default ContactInformation;
