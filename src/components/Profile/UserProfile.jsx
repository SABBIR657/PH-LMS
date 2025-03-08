import { useLocation } from "react-router-dom";
import Footer from "../../layout/Footer";
import NavBar from "../../layout/Navbar";
import { SidebarProvider } from "../ui/sidebar";
import ProfileSidebar from "./ProfileSidebar";
import ProfilePage from "./ProfileContent/ProfilePage";

const UserProfile = () => {
  const location = useLocation();

  const hideNavbarFooter = location.pathname === "/user-profile";

  return (
    <>
      {!hideNavbarFooter && <NavBar />}
      <div className="min-h-screen">
        <SidebarProvider>
          <ProfileSidebar />
        </SidebarProvider>
      </div>
      {!hideNavbarFooter && <Footer />}
    </>
  );
};

export default UserProfile;
