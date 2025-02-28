import { useEffect, useState } from "react";
import CreatePostModal from "../../components/help-desk/CreatePostModal";
import CreateComment from "./CreateComment";
import ShowComments from "./ShowComment";
import { FaTimes } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { FaUserSecret } from "react-icons/fa6";
import { postData } from "../../helpers/axios";
import Cookies from "js-cookie";
import Categories from "./Categories"; // Import the Categories component
import CommonWrapper from "../../components/CommonWrapper";


const HelpDesk = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]); // State for filtered posts
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
  const [activeCategory, setActiveCategory] = useState("All"); // Track active category
  const username = Cookies.get("userName");
  const isAdmin = Cookies.get("userRole") === "admin"; // Check if the user is an admin
  const [showCategories, setShowCategories] = useState(false); // Add state to toggle categories

  // Fetch posts from the API on component mount
  console.log("userName...", username)
  console.log("isAdmin...", isAdmin)
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://ph-clone-alchemy.onrender.com/api/v1/post/all-posts"
        );
        const data = await response.json();

        if (data.success) {
          console.log("Fetched Posts:", data.data); // Log the posts data
          setPosts(data.data);
          setFilteredPosts(data.data); // Initialize filteredPosts with all posts
        } else {
          console.error("Failed to fetch posts");
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  // Generate dynamic categories based on post types
  const generateCategories = () => {
    const categoryMap = new Map();

    posts.forEach((post) => {
      if (categoryMap.has(post.type)) {
        categoryMap.set(post.type, categoryMap.get(post.type) + 1);
      } else {
        categoryMap.set(post.type, 1);
      }
    });

    return Array.from(categoryMap).map(([name, count]) => ({
      name,
      count,
    }));
  };

  // Calculate counts for "My Posts" and "Admin Posts"
  const myPostCount = username ? posts.length: 0;
  const adminPostCount = isAdmin ? posts.length : 0; // Show all posts if the user is an admin

  console.log("myPostCount...", myPostCount)
  console.log("adminPostCount...", adminPostCount)

  // Handle category filter
  const handleCategoryFilter = (category) => {
    setActiveCategory(category); // Set the active category

    if (category === "All") {
      setFilteredPosts(posts); // Show all posts
    } else if (category === "My Posts") {
      const filtered = username ? posts: [];
      setFilteredPosts(filtered); // Filter posts by the logged-in user
    } else if (category === "Admin Posts") {
      const filtered = isAdmin ? posts : [];
      setFilteredPosts(filtered); // Filter posts by admin
    } else {
      const filtered = posts.filter((post) => post.type === category);
      setFilteredPosts(filtered); // Filter posts by type
    }
  };

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
        setFilteredPosts((prev) => [response.data, ...prev]); // Update filteredPosts as well
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

    <div className="bg-gray-200 min-h-screen p-6 font-sans">
      {/* Header Section */}
      <header className="flex justify-between items-center mb-6 bg-gray-400 py-5 px-8 w-full">
        <h1 className="text-3xl font-bold text-purple-700">Help Desk</h1>
        <div className="text-lg  flex gap-2">
        <span className="pt-1 text-purple-500 bg-white rounded-full p-1"><FaUserSecret/></span>  <span className="text-gray-600">Hi, <span className="text-pink-700 font-bold">{username}</span></span>
        </div>
      </header>
    <CommonWrapper>
      {/* Create Post Section */}
      <section className="mb-8">
        <textarea
          onClick={() => setModalOpen(true)}
          className="w-full p-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none placeholder-gray-500"
          placeholder="Share or Ask Something to Everyone?"
          rows="4"
        ></textarea>
      </section>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Posts Section */}
        <section className="w-full lg:w-3/4 space-y-6">
          {filteredPosts.length === 0 ? (
            <p className="text-center text-gray-600">No posts available.</p>
          ) : (
            filteredPosts.map((post) => (
              <div
                key={post._id}
                className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Post Header (User Info) */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <FaUserSecret className="w-6 h-6 text-purple-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      {username || "Anonymous"}
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
                    className="flex items-center space-x-2 text-pink-600 hover:text-purple-700 transition duration-300"
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

        {/* Categories Section */}
        
        <Categories
          categories={generateCategories()}
          onFilter={handleCategoryFilter}
          activeCategory={activeCategory}
          myPostCount={myPostCount}
          adminPostCount={adminPostCount}
        />
      </div>

      {/* Modal for Commenting */}
      {commentModalOpen && currentPost && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-purple-700">
                {currentPost.title}
              </h3>
              <button
                onClick={() => setCommentModalOpen(false)}
                className="text-gray-600 hover:text-gray-800 transition duration-300"
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </div>
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
            <div className="max-h-[300px] overflow-y-auto pr-4">
              <ShowComments comments={comments} />
            </div>
            <div className="mt-6">
              <CreateComment
                postId={currentPost._id}
                onCommentAdded={(newComment) => {
                  setComments((prev) => [...prev, newComment]);
                  setPosts((prevPosts) =>
                    prevPosts.map((post) =>
                      post._id === currentPost._id
                        ? {
                            ...post,
                            commentList: [...(post.commentList || []), newComment._id],
                          }
                        : post
                    )
                  );
                }}
                onClose={() => {
                  setCommentModalOpen(false);
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
      </CommonWrapper>
    </div>
    
  );
};

export default HelpDesk;