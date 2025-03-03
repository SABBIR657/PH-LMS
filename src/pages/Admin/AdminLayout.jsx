import { Link, Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto text-black bg-[#45496D]">
        {/* Render nested routes here */}
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
