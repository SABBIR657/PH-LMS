import { Link, Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto text-black bg-gradient-to-r from-[#161A42] to-purple-50">
        {/* Render nested routes here */}
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
