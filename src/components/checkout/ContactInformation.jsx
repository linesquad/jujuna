import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import useCreateOrder from "../../hooks/useCreateOrder";
import { useGetCartItems } from "../../hooks/useGetCartItems";
import ModalPayMentSuccesfull from "./ModalPayMentSuccesfull";
import BackAndTotal from "./BackAndTotal";
import { useNavigate } from "react-router-dom";
const ContactInformation = () => {
  const { mutate: createOrder, data: orderData } = useCreateOrder();
  const { data } = useGetCartItems();
  const navigate = useNavigate();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const totalPrice = data.reduce(
    (total, item) => total + item.unit * item.price,
    0
  );

  const handleBackToPage = () => {
    navigate(-1);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

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
    <div
      className="w-full tiny:px-2 smaller:px-3 px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4
    lg:px-6 lg:py-3"
    >
      <div
        className="tiny:py-1 smaller:text-[13px] smaller:pl-3 text-sm pl-3 sm:text-[15px] sm:py-1 sm:pl-4
      md:text-base md:py-2 md:pl-5 lg:text-[17px] lg:py-3 lg:pl-6"
      >
        <h1
          className="tiny:text-xs tiny:pl-2 tiny:pb-1 tiny:font-medium smaller:font-semibold smaller:pb-[6px]
        font-semibold pb-2 sm:font-bold sm:pb-[10px] md:pb-3 lg:pb-3"
        >
          Contact Information
        </h1>
      </div>
      <hr className="tiny:pb-1 smaller:pb-2 pb-3 sm:pb-[14px] md:pb-4 lg:hidden" />
      <form
        className="w-full flex flex-col tiny:gap-1 smaller:gap-[6px] gap-2 sm:gap-[10px] md:gap-3 lg:gap-[14px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full tiny:pb-1 smaller:pb-[6px] pb-[10px] sm:pb-3 md:pb-[14px] lg:pb-2">
          <input
            type="text"
            id="city"
            name="city"
            className={`bg-[#EAEAEA] w-full tiny:p-1 tiny:pl-1 smaller:p-[6px] smaller:pl-[6px] p-2 pl-2 sm:p-3 sm:pl-3 md:p-4 md:pl-4 lg:p-3 lg:pl-3 border  ${
              errors.city
                ? "placeholder:text-red-500 border-red-500 focus:outline-none focus:ring-0 tiny:text-[10px] smaller:text-[11px] text-sm"
                : "placeholder:text-[#908F8F] focus:outline-none focus:ring-0 tiny:text-[10px] smaller:text-[11px] text-xs sm:text-[13px] md:text-sm lg:text-[13px]"
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
            className="bg-[#EAEAEA] w-[50%] tiny:p-1 tiny:pl-1 tiny:text-[10px] placeholder:text-[#908F8F] focus:outline-none focus:ring-0
            smaller:p-[6px] smaller:pl-[6px] smaller:text-[11px] text-xs p-2 pl-2 sm:p-3 sm:pl-3 sm:text-[13px] md:p-4 md:pl-4 md:text-sm lg:p-3 lg:pl-3 lg:text-[13px]"
            defaultValue=""
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
            className="bg-[#EAEAEA] w-[50%] tiny:p-1 tiny:pl-1 tiny:text-[10px] placeholder:text-[#908F8F] focus:outline-none focus:ring-0
            smaller:p-[6px] smaller:pl-[6px] smaller:text-[11px] text-xs p-2 pl-2 sm:p-3 sm:pl-3 sm:text-[13px] md:pl-4 md:text-sm md:p-4 lg:p-3 lg:pl-3 lg:text-[13px]"
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
            className={`bg-[#EAEAEA] w-full tiny:p-1 tiny:pl-1 border smaller:p-[6px] smaller:pl-[6px] p-2 pl-2 sm:p-3 sm:pl-3 md:pl-4 md:p-4 lg:p-3 lg:pl-3 ${
              errors.postalCode
                ? "placeholder:text-red-500 border-red-500 focus:outline-none focus:ring-0 tiny:text-[10px] smaller:text-[11px] text-xs sm:text-[13px] md:text-sm"
                : "placeholder:text-[#908F8F] focus:outline-none focus:ring-0 tiny:text-[10px] smaller:text-[11px] text-xs sm:text-[13px] md:text-sm lg:text-[13px]"
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
            className={`bg-[#EAEAEA] w-full tiny:p-1 tiny:pl-1 smaller:p-[6px] smaller:pl-[6px] p-2 pl-2 sm:p-3 sm:pl-3 md:pl-4 md:p-4 lg:p-3 lg:pl-3 border  ${
              errors.currentAddress
                ? "placeholder:text-red-500 border-red-500 focus:outline-none focus:ring-0 tiny:text-[10px] smaller:text-[11px] text-xs sm:text-[13px] md:text-sm"
                : "placeholder:text-[#908F8F] focus:outline-none focus:ring-0 tiny:text-[10px] smaller:text-[11px] text-xs sm:text-[13px] md:text-sm lg:text-[13px]"
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
            className="bg-[#EAEAEA] w-full tiny:p-1 tiny:pl-1 placeholder:text-[#908F8F] focus:outline-none focus:ring-0
            tiny:text-[10px] smaller:p-[6px] smaller:pl-[6px] smaller:text-[11px] text-xs p-2 pl-2 sm:p-3 sm:pl-3 sm:text-[13px]
            md:pl-4 md:text-sm md:p-4 lg:p-3 lg:pl-3 lg:text-[13px]"
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
        <div className="lg:hidden">
          <BackAndTotal
            totalPrice={totalPrice}
            handleBackToPage={handleBackToPage}
          />
        </div>
        <div className="flex justify-end tiny:pb-2 smaller:pb-3 pb-4">
          <div className="bg-[#EAEAEA] tiny:px-4 smaller:px-5 px-6 sm:px-7 md:px-8 lg:px-9 shadow-md">
            <button
              className="tiny:text-[10px] smaller:text-[11px] text-xs sm:text-[13px] md:text-sm lg:text-[15px]"
              type="submit"
            >
              Pay With Cash
            </button>
          </div>
        </div>
      </form>
      <DevTool control={control} />

      {isModalVisible && (
        <ModalPayMentSuccesfull
          orderData={orderData}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ContactInformation;
