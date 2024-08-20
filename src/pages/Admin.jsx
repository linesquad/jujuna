import AdminImage from "../components/AdminComponents/AdminImage";
import AdminLogIn from "../components/AdminComponents/AdminLogIn";
import Wrapper from "../components/Wrapper";

function Admin() {
  return (
    <Wrapper>
      <div className="relative md:flex bg-[#EAEAEA]">
        <AdminImage />
        <AdminLogIn />
      </div>
    </Wrapper>
  );
}

export default Admin;
