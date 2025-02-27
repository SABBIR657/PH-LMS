/* eslint-disable react/prop-types */
import { useState } from "react";
import { postData } from "../../helpers/axios";

const CreateComment = ({ postId, onCommentAdded, onClose }) => {
  const [newComment, setNewComment] = useState("");

  const handleNewCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    const commentData = {
      postId: postId,
      description: newComment,
    };

    try {
      const response = await postData(
        "https://ph-clone-alchemy.onrender.com/api/v1/comment/create-comment",
        commentData
      );

      if (response.success) {
        onCommentAdded({
          description: response.data.commentData.description,
          username: response.data.username,
        });
        setNewComment("");
      } else {
        console.error("Failed to create comment");
      }
    } catch (error) {
      console.error("Error creating comment:", error);
    }
  };

  return (
    <form onSubmit={handleCommentSubmit} className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-purple-700">Add a Comment</h3>
        <button
          type="button"
          onClick={onClose}
          className="text-gray-600 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>
      </div>

      <textarea
        value={newComment}
        onChange={handleNewCommentChange}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none placeholder-gray-500 text-black"
        placeholder="Add a comment..."
        rows="4"
        required
      />
      <button
        type="submit"
        className="mt-4 bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition duration-300 w-full"
      >
        Create Comment
      </button>
    </form>
  );
};

export default CreateComment;