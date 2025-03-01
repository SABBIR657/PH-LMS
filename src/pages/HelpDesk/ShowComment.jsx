/* eslint-disable react/prop-types */
import { FaUserCircle } from "react-icons/fa"; // Import a user icon for avatars
import Cookies from "js-cookie";

const ShowComments = ({ comments }) => {
    const userName = Cookies.get("userName");
    const role = Cookies.get("userRole");
    console.log("user name", userName)
  return (
    <div className="space-y-4">
      {comments && comments.length > 0 ? (
        comments.map((comment, index) => (
          <div key={index} className="flex items-start space-x-3">
            {/* User Avatar */}
            <div className="flex-shrink-0">
              <FaUserCircle className="w-8 h-8 text-gray-400" /> {/* Placeholder for user avatar */}
            </div>

            {/* Comment Content */}
            <div className="flex-1">
              <div className="bg-gray-50 p-3 rounded-lg">
                <strong className="text-purple-700">{userName}</strong>
                <p className="text-gray-700 mt-1">{comment.description}</p>
              </div>
              <span className="text-xs text-gray-500 mt-1 block">
                {new Date().toLocaleString()} {/* Add a timestamp */}
              </span>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-600 text-center">No comments yet.</p>
      )}
    </div>
  );
};

export default ShowComments;