import React from "react";
import {
  FaTachometerAlt,
  FaUser,
  FaEnvelope,
  FaVideo,
  FaListAlt,
  FaPlusCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import { sidebarUrlList } from "../../data/sidebar";

const SideBar = () => {
  const renderIcon = (label) => {
    switch (label) {
      case "Course":
        return <FaListAlt />;
      case "Admin":
        return <FaUser />;
      case "Milestone":
        return <FaTachometerAlt />;
      case "Module":
        return <FaPlusCircle />;
      case "Video":
        return <FaVideo />;
      default:
        return <FaTachometerAlt />;
    }
  };
  return (
    <div className="flex flex-col w-64 bg-gray-800 text-white h-full">
      <header className="flex justify-between items-center border-b border-gray-600 p-4">
        <div>
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>
      </header>

      <div className="flex-grow overflow-y-auto">
        <ul className="space-y-4 p-4">
          {sidebarUrlList.map((parent) => (
            <li key={parent.parentLabel} className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="text-xl">{renderIcon(parent.parentLabel)}</div>
                <h2 className="text-lg font-semibold">{parent.parentLabel}</h2>
              </div>
              <ul className="space-y-2 pl-4">
                {parent.children.map((child) => (
                  <li key={child.label}>
                    <Link
                      to={child.url}
                      className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md"
                    >
                      <span className="text-sm">{child.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
