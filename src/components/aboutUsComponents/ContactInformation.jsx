import ContactDetails from "./ContactDetails";
import UserDetails from "./UserDetails";

function ContactInformation() {
  return (
    <div className="flex flex-col">
      <UserDetails />
      <ContactDetails />
    </div>
  );
}

export default ContactInformation;
