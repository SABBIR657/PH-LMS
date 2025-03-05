import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaUser,
  FaEnvelope,
  FaVideo,
  FaListAlt,
  FaPlusCircle,
  FaRegUser,
} from "react-icons/fa";
import { CiViewList, CiCirclePlus, CiVideoOn } from "react-icons/ci";
import { PiExamLight } from "react-icons/pi";
import { IoSpeedometerOutline } from "react-icons/io5";

import { Link, useLocation } from "react-router-dom";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { sidebarUrlList } from "../../data/sidebar";
import GradientTitle from "../../components/Admin/components/typography/GradientTitle";

const SideBar = () => {
  const location = useLocation(); // Get current route location
  const [selectedItem, setSelectedItem] = useState(null); // Track selected item

  const renderIcon = (label) => {
    switch (label) {
      case "Course":
        return <CiViewList />;
      case "Admin":
        return <FaRegUser />;
      case "Milestone":
        return <IoSpeedometerOutline />;
      case "Module":
        return <CiCirclePlus />;
      case "Video":
        return <CiVideoOn />;
      case "Question":
        return <PiExamLight />;
      default:
        return <FaTachometerAlt />;
    }
  };

  return (
    <div className="flex flex-col w-64 bg-[#0C0721] text-white h-full">
      <header className="flex justify-between items-center border-b border-gray-600 p-4">
        <div>
          <Link to={"/"}>
            <GradientTitle title="SkillForge" className={"text-xl"} />
          </Link>
        </div>
      </header>

      <div className="flex-grow overflow-y-auto mt-4">
        <Accordion>
          {sidebarUrlList.map((parent) => (
            <AccordionItem
              key={parent.parentLabel}
              title={
                <div
                  className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded-md cursor-pointer"
                  onClick={() => setSelectedItem(parent.parentLabel)}
                >
                  <div className="text-xl">
                    {renderIcon(parent.parentLabel)}
                  </div>
                  <h2 className="text-xl font-semibold">
                    {parent.parentLabel}
                  </h2>
                </div>
              }
            >
              <ul className="space-y-2 pl-4">
                {parent.children.map((child) => (
                  <li key={child.label}>
                    <Link
                      to={child.url}
                      className={`flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md ${
                        location.pathname === child.url
                          ? "bg-gray-700 font-bold"
                          : ""
                      }`}
                    >
                      <span className="text-lg p-1">{child.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default SideBar;
