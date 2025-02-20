import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4">
      <Link href="/" className="flex items-center gap-2">
        <span className="text-xl font-bold text-white">Programming Hero</span>
      </Link>

      <div className="flex items-center gap-8">
        <Link
          href="#"
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
          to="/blog"
          className="text-gray-200 hover:text-white transition-colors"
        >
          Blog
        </Link>
        <Link
          to="my-class"
          className="text-gray-200 hover:text-white transition-colors"
        >
          My Classes
        </Link>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
          Enroll Now
        </Button>
      </div>
    </nav>
  );
}
