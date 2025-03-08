import { useState } from "react";

const ProfilePage = () => {
  const [devices, setDevices] = useState([
    { id: 1, platform: "Mac/iOS", date: "08-03-2025 07:58 AM" },
    { id: 2, platform: "Windows 10", date: "07-03-2025 08:44 PM" },
  ]);

  const removeDevice = (id) => {
    setDevices(devices.filter((device) => device.id !== id));
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex justify-center p-6">
      <div className="w-full max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="border-b border-gray-700 pb-4 mb-4">
          <h2 className="text-xl font-semibold text-purple-400">My Profile</h2>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-400">Full Name</span>
            <span>Md Samsel Arfin</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Email</span>
            <span>arfin.cse.green.edu.bd@gmail.com</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Student ID</span>
            <span>WEB7-3352</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Mobile Number</span>
            <span>+8801952487468</span>
          </div>
        </div>

        <div className="border-b border-gray-700 pb-4 my-4">
          <h2 className="text-lg font-semibold text-purple-400">
            Device Activity
          </h2>
        </div>

        <div className="bg-gray-700 p-4 rounded-lg">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-400 text-sm border-b border-gray-600">
                <th className="py-2">Serial</th>
                <th>Platform</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {devices.map((device, index) => (
                <tr key={device.id} className="border-b border-gray-600">
                  <td className="py-2">{index + 1}</td>
                  <td>{device.platform}</td>
                  <td>{device.date}</td>
                  <td>
                    <button
                      onClick={() => removeDevice(device.id)}
                      className="text-purple-400 hover:underline"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
