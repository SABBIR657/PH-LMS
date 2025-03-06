import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Import icons for the toggle button
import toast from "react-hot-toast";
import Cookies from "js-cookie"; 

export default function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility
  const navigate = useNavigate();


  const isAuthenticated = !!Cookies.get("user");

  const handleLoginClick = (e) => {
     if(isAuthenticated){
      e.preventDefault();
      toast.error("You are already logged in");
     }
     else{
      navigate("/login");
     }
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background shadow-sm">
      {/* Logo and Brand Name */}
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

      {/* Mobile Toggle Button */}
      <div className="lg:hidden">
        <Button
          onClick={toggleMobileMenu}
          variant="ghost"
          className="text-gray-200 hover:text-white focus:outline-none"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Desktop Navigation Menu */}
      <div className="hidden lg:flex items-center gap-8">
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

             <Link
              to="/admin"
              className="text-gray-200 hover:text-white transition-colors"
              onClick={toggleMobileMenu}
            >
              Dashboard
            </Link>


        {/* Custom Dropdown */}
        <div className="relative">
          <Button
            onClick={toggleDropdown}
            variant="ghost"
            className="text-gray-200 hover:text-white focus:outline-none"
          >
            <Link to={"/help-desk"}>Help Desk</Link>
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

        <Link
          to="/login"
          className="text-gray-200 hover:text-white transition-colors"
          onClick={handleLoginClick}
        >
          Login
        </Link>

        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
          Enroll Now
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-background shadow-lg p-6">
          <div className="flex flex-col space-y-4">
            <Link
              to="#"
              className="text-gray-200 hover:text-white transition-colors"
              onClick={toggleMobileMenu}
            >
              Level 2
            </Link>
            <Link
              to="/course-details"
              className="text-gray-200 hover:text-white transition-colors"
              onClick={toggleMobileMenu}
            >
              Course Details
            </Link>
            <Link
              to="/about"
              className="text-gray-200 hover:text-white transition-colors"
              onClick={toggleMobileMenu}
            >
              About Us
            </Link>
            <Link
              to="/blog"
              className="text-gray-200 hover:text-white transition-colors"
              onClick={toggleMobileMenu}
            >
              Blog
            </Link>
            <Link
              to="/success"
              className="text-gray-200 hover:text-white transition-colors"
              onClick={toggleMobileMenu}
            >
              Success
            </Link>
            <Link
              to="/my-class"
              className="text-gray-200 hover:text-white transition-colors"
              onClick={toggleMobileMenu}
            >
              My Classes
            </Link>

            {/* Mobile Dropdown */}
            <div className="relative">
              <Button
                onClick={toggleDropdown}
                variant="ghost"
                className="text-gray-200 hover:text-white focus:outline-none"
              >
                Help Desk
              </Button>
              {isDropdownOpen && (
                <div className="mt-2 w-48 bg-background border border-gray-700 rounded-lg shadow-lg">
                  <ul className="py-2">
                    <li>
                      <Link
                        to="/help-desk"
                        className="block px-4 py-2 text-gray-200 hover:bg-gray-700"
                        onClick={toggleMobileMenu}
                      >
                        Help Desk
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block px-4 py-2 text-gray-200 hover:bg-gray-700"
                        onClick={toggleMobileMenu}
                      >
                        Application
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block px-4 py-2 text-gray-200 hover:bg-gray-700"
                        onClick={toggleMobileMenu}
                      >
                        Career
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <Link
              to="/admin"
              className="text-gray-200 hover:text-white transition-colors"
              onClick={toggleMobileMenu}
            >
              Dashboard
            </Link>

            <Link
              to="/login"
              className="text-gray-200 hover:text-white transition-colors"
              onClick={(e)=>{
                toggleMobileMenu();
                handleLoginClick(e);
              }}
              
            >
              Login
            </Link>

            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Enroll Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
