import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white p-6 space-y-4">
        <h2 className="text-xl font-bold">Admin Panel</h2>
        <nav className="space-y-2">
          <Link
            to="/admin/dashboard"
            className="block py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
          >
            Dashboard
          </Link>
          <Link
            to="/admin/create-instructor"
            className="block py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
          >
            Instructor
          </Link>
          <Link
            to="/admin/create-course"
            className="block py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
          >
            Course
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Render nested routes here */}
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
