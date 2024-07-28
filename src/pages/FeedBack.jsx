import React from "react";
import Form from "../components/Form";

function FeedBack() {
  return (
    <div
      id="ჩვენ შესახებ"
      className="xl:h-[594px] xl:pt-[91px] xl:pr-[224px] xl:pb-[70px] xl:pl-[80px] xl:scale-x-[1] bg-[url('/images/banner1.png')] bg-no-repeat bg-cover px-5 py-6 w-full transform scale-x-[-1] bg-right font-arialgeo"
    >
      <div className=" flex gap-[20px] xl:gap-[123px] ">
        <Form />
        <div className="xl:scale-x-[1] xl:order-10 scale-x-[-1] order-3">
          <p className="xl:text-[24px] font-arialgeo md:text-[16px]  text-white text-[12px] mt-4">
            ქორფა ჟუჟუნა უუუამრავ კაფე-ბარში შეგხვდება და შენთვის საყვარელ
            კოქტეილებს ააცქრიალებს. ცივი და ჩქრიალა ჟუჟუ კოქტეილში პირდაპირ
            ონკანიდან ეშვება.
            <br />
            <br />
            ჩამოსასხმელი ჟუჟუნა კაფე-ბარებს მრავალჯერადი გამოყენების კეგებში
            მიეწოდება და დამატებით შეფუთვას არ საჭიროებს, რის გამოც გარემოსთან
            განსაკუთრებით მეგობრობს და არც მის დაბინძურებას იწვევს.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeedBack;
