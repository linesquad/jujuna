import Wrapper from "../Wrapper";
import ContactDetails from "./ContactDetails";
import UserDetails from "./UserDetails";

function ContactInformation() {
  return (
    <Wrapper>
      <div className="flex flex-col md:flex-row md:justify-center mt-[-320px]">
        <UserDetails />
        <ContactDetails />
      </div>
    </Wrapper>
  );
}

export default ContactInformation;
