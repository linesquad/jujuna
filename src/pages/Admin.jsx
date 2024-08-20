import AdminImage from "../components/AdminComponents/AdminImage";
import AdminLogIn from "../components/AdminComponents/AdminLogIn";

function Admin() {
  return (
    <div className="relative md:flex bg-[#EAEAEA]">
      <AdminImage />
      <AdminLogIn />
    </div>
  );
}

export default Admin;
