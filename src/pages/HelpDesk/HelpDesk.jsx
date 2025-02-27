import { useEffect, useState } from "react";
import CreatePostModal from "../../components/help-desk/CreatePostModal";
import CreateComment from "./CreateComment";
import ShowComments from "./ShowComment";
import { FaTimes } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { FaUserSecret } from "react-icons/fa6";
import { postData } from "../../helpers/axios";

const HelpDesk = () => {
  const [posts, setPosts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [commentModalOpen, setCommentModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    content: "",
    photoUrl: "",
  });
  const [currentPost, setCurrentPost] = useState(null);
  const [comments, setComments] = useState([]);

  // Fetch posts from the API on component mount
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://ph-clone-alchemy.onrender.com/api/v1/post/all-posts"
        );
        const data = await response.json();

        if (data.success) {
          setPosts(data.data);
        } else {
          console.error("Failed to fetch posts");
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  // Fetch the comments for a specific post
  const fetchComments = async (commentList) => {
    try {
      const commentResponses = await Promise.all(
        commentList.map(async (commentId) => {
          const response = await fetch(
            `https://ph-clone-alchemy.onrender.com/api/v1/comment/${commentId}`
          );
          const commentData = await response.json();
          return commentData.data;
        })
      );
      setComments(commentResponses);
    } catch (error) {
      console.error("Error fetching comments:", error);
      setComments([]);
    }
  };

  // Handle post click to open the modal
  const handlePostClick = async (post) => {
    setCurrentPost(post);
    setCommentModalOpen(true);

    if (post.commentList && post.commentList.length > 0) {
      fetchComments(post.commentList);
    } else {
      setComments([]);
    }
  };

  // Handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission for creating posts
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title: formData.title,
      type: formData.type,
      platform: "Website",
      content: formData.content,
      media: {
        photoUrl: formData.photoUrl ? [formData.photoUrl] : [],
      },
    };

    try {
      const response = await postData(
        "https://ph-clone-alchemy.onrender.com/api/v1/post/create-post",
        data
      );

      if (response.success) {
        setPosts((prev) => [response.data, ...prev]);
        setModalOpen(false);
        setFormData({
          title: "",
          type: "",
          content: "",
          photoUrl: "",
        });
      } else {
        console.error("Failed to create post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6 font-sans">
      {/* Header Section */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-purple-700">Help Desk</h1>
        <div className="text-lg text-gray-700">
          <span>Hi, Sabbir</span>
        </div>
      </header>

      {/* Create Post Section */}
      <section className="mb-8">
        <textarea
          onClick={() => setModalOpen(true)}
          className="w-full p-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none placeholder-gray-500"
          placeholder="Share or Ask Something to Everyone?"
          rows="4"
        ></textarea>
      </section>

      {/* Filter Buttons Section */}
      <section className="mb-8 flex space-x-4">
        <button className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition duration-300">
          All Posts
        </button>
        <button className="bg-purple-100 text-purple-600 py-2 px-6 rounded-lg hover:bg-purple-200 transition duration-300">
          My Posts
        </button>
        <button className="bg-purple-100 text-purple-600 py-2 px-6 rounded-lg hover:bg-purple-200 transition duration-300">
          Admin Posts
        </button>
      </section>

      {/* Posts Section */}
      <section className="space-y-6">
        {posts.length === 0 ? (
          <p className="text-center text-gray-600">No posts available.</p>
        ) : (
          posts.map((post) => (
            <div
              key={post._id}
              className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Post Header (User Info) */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <FaUserSecret className="w-6 h-6 text-purple-500 " />{" "}
                    {/* Render the icon directly */}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    {post.username || "Anonymous"}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {new Date(post.createdAt).toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <p className="text-gray-700 mb-4">{post.content}</p>

              {/* Post Image */}
              {post.media.photoUrl.length > 0 && (
                <img
                  src={post.media.photoUrl[0]}
                  alt="Post Visual"
                  className="w-[400px] h-48 object-cover rounded-lg mb-4"
                />
              )}

              {/* Action Buttons (Like, Comment, Share) */}
              <div className="flex items-center space-x-4 border-t border-gray-200 pt-4">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-purple-700 transition duration-300">
                  <BiSolidLike />
                  <span>Like</span>
                </button>
                <button
                  onClick={() => handlePostClick(post)}
                  className="flex items-center space-x-2 text-gray-600 hover:text-purple-700 transition duration-300  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123A7 7 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    {post.commentList ? post.commentList.length : 0} Comments
                  </span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-purple-700 transition duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                  <span>Share</span>
                </button>
              </div>
            </div>
          ))
        )}
      </section>

      {/* Sidebar Section */}
      <aside className="mt-8 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-purple-700 mb-4">
          Categories
        </h3>
        <ul className="space-y-3">
          <li className="text-gray-700 hover:text-purple-700 transition duration-300">
            Courses Topics: 21
          </li>
          <li className="text-gray-700 hover:text-purple-700 transition duration-300">
            Bugs: 25
          </li>
          <li className="text-gray-700 hover:text-purple-700 transition duration-300">
            Feature Requests: 3
          </li>
          <li className="text-gray-700 hover:text-purple-700 transition duration-300">
            Others: 7
          </li>
          <li className="text-gray-700 hover:text-purple-700 transition duration-300">
            Announcements: 62
          </li>
        </ul>
      </aside>

      {/* Modal for Commenting */}
      {commentModalOpen && currentPost && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-2xl">
            {" "}
            {/* Changed max-w-2xl to max-w-lg */}
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-purple-700">
                {currentPost.title}
              </h3>{" "}
              {/* Reduced font size to text-xl */}
              <button
                onClick={() => setCommentModalOpen(false)}
                className="text-gray-600 hover:text-gray-800 transition duration-300"
              >
                <FaTimes className="w-6 h-6" /> {/* Close icon */}
              </button>
            </div>
            {/* Post Content */}
            <div className="mb-6">
              <p className="text-gray-700">{currentPost.content}</p>
              {currentPost.media.photoUrl.length > 0 && (
                <img
                  src={currentPost.media.photoUrl[0]}
                  alt="Post Visual"
                  className="mt-4 w-full h-48 object-cover rounded-lg"
                />
              )}
            </div>
            {/* Comments Section */}
            <div className="max-h-[300px] overflow-y-auto pr-4">
              {" "}
              {/* Reduced max height to 300px */}
              <ShowComments comments={comments} />
            </div>
            {/* Create Comment Section */}
            <div className="mt-6">
              <CreateComment
                postId={currentPost._id}
                onCommentAdded={(newComment) => {
                  // Update the comments state
                  setComments((prev) => [...prev, newComment]);

                  // Update the posts state to reflect the new comment count
                  setPosts((prevPosts) =>
                    prevPosts.map((post) =>
                      post._id === currentPost._id
                        ? {
                            ...post,
                            commentList: [
                              ...(post.commentList || []),
                              newComment._id,
                            ], // Add the new comment ID to the post's commentList
                          }
                        : post
                    )
                  );
                }}
                onClose={() => {
                  setCommentModalOpen(false);
                  // setComments([]);
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Modal for Post Creation */}
      {modalOpen && (
        <CreatePostModal
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          setModalOpen={setModalOpen}
        />
      )}
    </div>
  );
};

export default HelpDesk;
