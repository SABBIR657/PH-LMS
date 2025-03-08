import "./sidebar.css";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import ProgressBar from "./ProgressBar";
import { FaRegUserCircle } from "react-icons/fa";
import { CiCircleInfo, CiLocationOn } from "react-icons/ci";
import { FaGraduationCap, FaUsersRectangle } from "react-icons/fa6";
import { AiFillProfile, AiOutlineImport } from "react-icons/ai";
import { MdLightbulbOutline } from "react-icons/md";
import { GiLevelFourAdvanced } from "react-icons/gi";
import { HiRefresh } from "react-icons/hi";
import { BiCertification } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../../hooks/AuthContextProvider";

// User details
const staticUser = {
  name: "Md Samsel Arfin",
  studentId: "WEB7-3352",
  email: "arfin.cse.green.edu.bd@gmail.com",
  phone: "+8801952487468",
  profileCompletion: 100,
  profileImage:
    "https://lh3.googleusercontent.com/a/ACg8ocJYO2z0aV3cT15IeV9_txuD04rcmJOVffuQD2WhH9OHs75WOyk=s288-c-no",
};

export default function ProfileSidebar() {
  const { user } = useContext(AuthContext);

  return (
    <Sidebar className="w-80 bg-gray-900 text-white rounded-lg p-4 overflow-auto scrollbar">
      <SidebarContent>
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center">
          <Avatar className="w-24 h-24 border-2 border-blue-500">
            <AvatarImage src={user.profileImage} alt="Profile" />
            <AvatarFallback>MS</AvatarFallback>
          </Avatar>
          <h2 className="mt-4 text-lg font-semibold">{user.name}</h2>
          <p className="text-sm text-gray-400">{user._id}</p>
          <p className="text-sm text-gray-400">{user.email}</p>
          <p className="text-sm text-gray-400">{staticUser.phone}</p>
          <ProgressBar value={user.profileCompletion} />
        </div>

        {/* Sidebar Menu */}
        <SidebarGroup className="mt-6">
          <SidebarGroupLabel className="text-white">
            Profile Sections
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="h-14 w-48">
                  <a
                    href="#"
                    className="flex items-center p-3 space-x-4 rounded-lg hover:bg-purple-100 transition-colors"
                  >
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-r from-purple-500 via-purple-800 to-indigo-500 text-white">
                      <FaRegUserCircle className="w-6 h-6 " />
                    </div>
                    <span className="text-lg text-purple-500 font-semibold">
                      My Profile
                    </span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild className="h-14 w-48">
                  <a
                    href="#"
                    className="flex items-center p-3 space-x-4 rounded-lg hover:bg-purple-100 transition-colors"
                  >
                    <div className="flex items-center justify-center w-9 h-9  rounded-full bg-gradient-to-r from-purple-500 via-purple-800 to-indigo-500 text-white">
                      <CiCircleInfo className="w-6 h-6" />
                    </div>
                    <span className="text-lg text-purple-500 font-semibold">
                      Additional Info
                    </span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild className="h-14 w-48">
                  <a
                    href="#"
                    className="flex items-center p-3 space-x-4 rounded-lg hover:bg-purple-100 transition-colors"
                  >
                    <div className="flex items-center justify-center w-9 h-9  rounded-full bg-gradient-to-r from-purple-500 via-purple-800 to-indigo-500 text-white">
                      <CiLocationOn className="w-6 h-6" />
                    </div>
                    <span className="text-lg text-purple-500 font-semibold">
                      Address
                    </span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild className="h-14 w-48">
                  <a
                    href="#"
                    className="flex items-center p-3 space-x-4 rounded-lg hover:bg-purple-100 transition-colors"
                  >
                    <div className="flex items-center justify-center w-9 h-9  rounded-full bg-gradient-to-r from-purple-500 via-purple-800 to-indigo-500 text-white">
                      <FaGraduationCap className="w-6 h-6" />
                    </div>
                    <span className="text-lg text-purple-500 font-semibold">
                      Education
                    </span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild className="h-14 w-48">
                  <a
                    href="#"
                    className="flex items-center p-3 space-x-4 rounded-lg hover:bg-purple-100 transition-colors"
                  >
                    <div className="flex items-center justify-center w-9 h-9  rounded-full bg-gradient-to-r from-purple-500 via-purple-800 to-indigo-500 text-white">
                      <AiOutlineImport className="w-6 h-6" />
                    </div>
                    <span className="text-lg text-purple-500 font-semibold">
                      Important Links
                    </span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild className="h-14 w-48">
                  <a
                    href="#"
                    className="flex items-center p-3 space-x-4 rounded-lg hover:bg-purple-100 transition-colors"
                  >
                    <div className="flex items-center justify-center w-9 h-9  rounded-full bg-gradient-to-r from-purple-500 via-purple-800 to-indigo-500 text-white">
                      <MdLightbulbOutline className="w-6 h-6" />
                    </div>
                    <span className="text-lg text-purple-500 font-semibold">
                      Skill Set
                    </span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild className="h-14 w-48">
                  <a
                    href="#"
                    className="flex items-center p-3 space-x-4 rounded-lg hover:bg-purple-100 transition-colors"
                  >
                    <div className="flex items-center justify-center w-9 h-9  rounded-full bg-gradient-to-r from-purple-500 via-purple-800 to-indigo-500 text-white">
                      <GiLevelFourAdvanced className="w-6 h-6" />
                    </div>
                    <span className="text-lg text-purple-500 font-semibold">
                      Level-2 Goal
                    </span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild className="h-14 w-48">
                  <a
                    href="#"
                    className="flex items-center p-3 space-x-4 rounded-lg hover:bg-purple-100 transition-colors"
                  >
                    <div className="flex items-center justify-center w-9 h-9  rounded-full bg-gradient-to-r from-purple-500 via-purple-800 to-indigo-500 text-white">
                      <AiFillProfile className="w-6 h-6" />
                    </div>
                    <span className="text-lg text-purple-500 font-semibold">
                      Job Profile
                    </span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="h-14 w-48">
                  <a
                    href="#"
                    className="flex items-center p-3 space-x-4 rounded-lg hover:bg-purple-100 transition-colors"
                  >
                    <div className="flex items-center justify-center w-9 h-9  rounded-full bg-gradient-to-r from-purple-500 via-purple-800 to-indigo-500 text-white">
                      <HiRefresh className="w-6 h-6" />
                    </div>
                    <span className="text-lg text-purple-500 font-semibold">
                      Got hired
                    </span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="h-14 w-48">
                  <a
                    href="#"
                    className="flex items-center p-3 space-x-4 rounded-lg hover:bg-purple-100 transition-colors"
                  >
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-r from-purple-500 via-purple-800 to-indigo-500 text-white">
                      <FaUsersRectangle className="w-6 h-6" />
                    </div>
                    <span className="text-lg text-purple-500 font-semibold">
                      Course Request
                    </span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="h-14 w-48">
                  <a
                    href="#"
                    className="flex items-center p-3 space-x-4 rounded-lg hover:bg-purple-100 transition-colors"
                  >
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-r from-purple-500 via-purple-800 to-indigo-500 text-white">
                      <AiFillProfile className="w-6 h-6" />
                    </div>
                    <span className="text-lg text-purple-500 font-semibold">
                      Order History
                    </span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="h-14 w-48">
                  <a
                    href="#"
                    className="flex items-center p-3  rounded-lg hover:bg-purple-100 transition-colors"
                  >
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-r from-purple-500 via-purple-800   to-indigo-500 text-white">
                      <BiCertification className="w-6 h-6" />
                    </div>
                    <span className="text-lg text-purple-500 font-semibold">
                      Certification
                    </span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
