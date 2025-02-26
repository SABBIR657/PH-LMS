/* eslint-disable react/prop-types */

const CreatePostModal = ({ formData, handleInputChange, handleSubmit, setModalOpen }) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Create New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Post Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
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

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Content</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Photo URL</label>
            <input
              type="text"
              name="photoUrl"
              value={formData.photoUrl}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="bg-purple-600 text-white py-2 px-6 rounded-lg w-full hover:bg-purple-700"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => setModalOpen(false)}
            className="mt-3 text-center w-full text-gray-600 hover:text-gray-800"
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePostModal;
