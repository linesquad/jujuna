import Wrapper from "../Wrapper";
import ConnectForm from "./connectComponents/ConnectForm";
import HeroContent from "./HeroContent";

const Connect = () => {
  return (
    <Wrapper>
      <div
        className="p-[23px] lg:px-[40px] lg:pt-[70px] lg:pb-[40px] bg-[url('/images/connect.png')]
        bg-no-repeat bg-cover w-full  rounded-b-md lg:rounded-md
        bg-right md:bg-right grid grid-rows-1 grid-cols-2 md:grid-cols-2 gap-x-5"
      >
        <ConnectForm />
        <div>
          <div className="block md:hidden">
            <HeroContent
              descriptionStyle="text-sm text-color-primary md:text-base lg:text-lg xl:text-xl"
              containerStyle="font-normal p-5"
              description={[
                {
                  paragraph:
                    "ქორფა ჟუჯუნა უამრავ კაფე-ბარში შეგხვდება და შენთვის საყვარელ კოქტეილებს ააცქრიალებს. ცივი და ჩქრიალა ჟუჟუ კოქტეილში პირდაპირ ონკანიდან ეშვება.",
                },
                {
                  paragraph:
                    "ჩამოსასხმელი ჟუჟუნა კაფე-ბარებს მრავალჯერადი გამოყენების კეგებში მიეწოდება და დამატებით შეფუთვას არ საჭიროებს",
                },
              ]}
            />
          </div>
          <div className="hidden md:block">
            <HeroContent
              descriptionStyle="text-base text-color-primary md:text-base lg:text-lg xl:text-xl"
              containerStyle="font-normal p-5"
              description={[
                {
                  paragraph:
                    "ქორფა ჟუჯუნა უამრავ კაფე-ბარში შეგხვდება და შენთვის საყვარელ კოქტეილებს ააცქრიალებს. ცივი და ჩქრიალა ჟუჟუ კოქტეილში პირდაპირ ონკანიდან ეშვება.",
                },
                {
                  paragraph:
                    "ჩამოსასხმელი ჟუჟუნა კაფე-ბარებს მრავალჯერადი გამოყენების კეგებში მიეწოდება და დამატებით შეფუთვას არ საჭიროებს, რის გამოც გარემოსთან განსაკუთრებით მეგობრობს და არც მის დაბინძურებას იწვევს.",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Connect;
