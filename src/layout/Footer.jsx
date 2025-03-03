import {
  FaApple,
  FaFacebook,
  FaGooglePlay,
  FaInstagram,
  FaLinkedin,
  FaMicrosoft,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0d0023] to-purple-900 text-gray-300 py-10 px-5 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Office Address */}
        <div>
          <h3 className="text-lg font-semibold text-white">Office Address</h3>
          <p className="mt-2">Level-4, 34, Awal Centre, Banani, Dhaka</p>
          <p className="flex items-center mt-2">📧 web@programming-hero.com</p>
          <p className="flex items-center mt-2">📞 01322901105</p>
          <p className="mt-2 text-sm">
            (Available: Sat - Thu, 10:00 AM to 7:00 PM)
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Useful Links</h3>
          <ul className="mt-2 space-y-2">
            <li className="hover:text-white transition-colors cursor-pointer">
              Home
            </li>
            <li className="hover:text-white transition-colors cursor-pointer">
              About Us
            </li>
            <li className="hover:text-white transition-colors cursor-pointer">
              Success Page
            </li>
            <li className="hover:text-white transition-colors cursor-pointer">
              Refund Policy
            </li>
            <li className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-white transition-colors cursor-pointer">
              App Privacy Policy
            </li>
            <li className="hover:text-white transition-colors cursor-pointer">
              Terms And Condition
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer">
              <FaFacebook />
              Facebook
            </li>
            <li className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer">
              <FaYoutube />
              Youtube
            </li>
            <li className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer">
              <FaLinkedin />
              Linkedin
            </li>
            <li className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer">
              <FaInstagram />
              Instagram
            </li>
          </ul>
        </div>

        {/* Download Apps */}
        <div>
          <h3 className="text-lg font-semibold text-white">Download Apps</h3>
          <div className="mt-3 space-y-2">
            <button className="bg-gray-800 px-4 py-2 rounded-lg flex items-center space-x-2 w-full justify-center hover:bg-gray-700 transition">
              <span>
                <FaGooglePlay />
              </span>{" "}
              <span>Google Play</span>
            </button>
            <button className="bg-gray-800 px-4 py-2 rounded-lg flex items-center space-x-2 w-full justify-center hover:bg-gray-700 transition">
              <span>
                <FaApple />
              </span>{" "}
              <span>App Store</span>
            </button>
            <button className="bg-gray-800 px-4 py-2 rounded-lg flex items-center space-x-2 w-full justify-center hover:bg-gray-700 transition">
              <span>
                <FaMicrosoft />
              </span>{" "}
              <span>Microsoft</span>
            </button>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center ">
        © Programming Hero 2025
      </div>
    </footer>
  );
};

export default Footer;
