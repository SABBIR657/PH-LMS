/* eslint-disable react/prop-types */
import { FaTimes } from "react-icons/fa"; // Import the X icon from react-icons

const CreatePostModal = ({ formData, handleInputChange, handleSubmit, setModalOpen }) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50 text-black">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[1000px] relative">
        {/* Close Icon */}
        <button
          type="button"
          onClick={() => setModalOpen(false)}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition duration-300"
        >
          <FaTimes className="w-6 h-6" />
        </button>

        {/* Modal Title */}
        <h2 className="text-2xl font-bold text-purple-700 mb-6">Create New Post</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Enter post title"
              required
            />
          </div>

          {/* Post Type Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Post Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            >
              <option value="" disabled>
                Select Post Type
              </option>
              <option value="Course Topics">Course Topics</option>
              <option value="Bugs">Bugs</option>
              <option value="Guideline">Guideline</option>
              <option value="Feature Request">Feature Request</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* Content Textarea */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
              placeholder="Write your post content here..."
              rows="6"
              required
            />
          </div>

          {/* Photo URL Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Photo URL</label>
            <input
              type="text"
              name="photoUrl"
              value={formData.photoUrl}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Optional: Add a photo URL"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePostModal;