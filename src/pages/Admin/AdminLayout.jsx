import { Link, Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto text-black">
        {/* Render nested routes here */}
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
