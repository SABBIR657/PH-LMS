import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background shadow-sm">
      <Link
        to="/"
        className="flex justify-center items-center gap-2 hover:opacity-80 transition-opacity"
      >
        <span>
          <img
            src="https://web.programming-hero.com/static/media/ph_logo.cda7f338.svg"
            alt="Programming Hero logo"
            width={60}
            height={60}
            className="object-contain"
          />
        </span>
        <span className="text-xl font-bold text-white">SkillForge</span>
      </Link>

      <div className="flex items-center gap-8">
        <Link
          to="#"
          className="text-gray-200 hover:text-white transition-colors"
        >
          Level 2
        </Link>
        <Link
          to="/course-details"
          className="text-gray-200 hover:text-white transition-colors"
        >
          Course Details
        </Link>
        <Link
          to="/about"
          className="text-gray-200 hover:text-white transition-colors"
        >
          About Us
        </Link>
        <Link
          to="/blog"
          className="text-gray-200 hover:text-white transition-colors"
        >
          Blog
        </Link>
        <Link
          to="/success"
          className="text-gray-200 hover:text-white transition-colors"
        >
          Success
        </Link>
        <Link
          to="/my-class"
          className="text-gray-200 hover:text-white transition-colors"
        >
          My Classes
        </Link>

        {/* Custom Dropdown */}
        <div className="relative">
          <Button
            onClick={toggleDropdown}
            variant="ghost"
            className="text-gray-200 hover:text-white focus:outline-none"
          >
            <Link to={"/help-desk"}>
            Help Desk
            </Link>
           
          </Button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-background border border-gray-700 rounded-lg shadow-lg">
              <ul className="py-2">
                <li>
                  <Link
                    to="/help-desk"
                    className="block px-4 py-2 text-gray-200 hover:bg-gray-700"
                  >
                    Help Desk
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-gray-200 hover:bg-gray-700"
                  >
                    Application
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-gray-200 hover:bg-gray-700"
                  >
                    Career
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
          Enroll Now
        </Button>
      </div>
    </nav>
  );
}