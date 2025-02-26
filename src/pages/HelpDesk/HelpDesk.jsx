import { useEffect, useState } from "react";
import CreatePostModal from "../../components/help-desk/CreatePostModal";

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
  const [comments, setComments] = useState([]); // Store the fetched comments

  // Fetch posts from the API on component mount
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://ph-clone-alchemy.onrender.com/api/v1/post/all-posts"
        );
        const data = await response.json();

        if (data.success) {
          setPosts(data.data); // Set the fetched posts data into state
        } else {
          console.error("Failed to fetch posts");
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts(); // Call the function to fetch posts
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
          return commentData.data.description; // Get the comment description
        })
      );
      setComments(commentResponses); // Store the comments in state
    } catch (error) {
      console.error("Error fetching comments:", error);
      setComments([]); // In case of error, set comments to empty array
    }
  };

  // Handle post click to open the modal
  const handlePostClick = async (post) => {
    setCurrentPost(post); // Set the current post
    setCommentModalOpen(true); // Open the modal

    // Fetch the comments for this post
    if (post.commentList && post.commentList.length > 0) {
      fetchComments(post.commentList); // Fetch comments using comment IDs
    } else {
      setComments([]); // If no comments, set comments as empty
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

    const postData = {
      title: formData.title,
      type: formData.type,
      platform: "Website", // Hardcoded as "Website"
      content: formData.content,
      media: {
        photoUrl: formData.photoUrl ? [formData.photoUrl] : [],
      },
    };

    try {
      const response = await fetch(
        "https://ph-clone-alchemy.onrender.com/api/v1/post/create-post",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );

      const result = await response.json();

      if (result.success) {
        // Update posts after submission
        setPosts((prev) => [result.data, ...prev]);
        setModalOpen(false); // Close modal after submission
        setFormData({
          title: "",
          type: "",
          content: "",
          photoUrl: "",
        }); // Reset form fields
      } else {
        console.error("Failed to create post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="bg-white text-black">
      <div className="p-6 font-sans">
        {/* Header Section */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl text-purple-600 font-semibold">Help Desk</h1>
          <div className="text-lg text-gray-700">
            <span>Hi, Sabbir</span>
          </div>
        </header>

        {/* Create Post Section */}
        <section className="mb-6">
          <textarea
            onClick={() => setModalOpen(true)}
            className="w-full p-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
            placeholder="Share or Ask Something to Everyone?"
            rows="4"
          ></textarea>
        </section>

        {/* Filter Buttons Section */}
        <section className="mb-6">
          <button className="mr-3 bg-purple-100 text-purple-600 py-2 px-6 rounded-md hover:bg-purple-200">
            All Posts
          </button>
          <button className="mr-3 bg-purple-100 text-purple-600 py-2 px-6 rounded-md hover:bg-purple-200">
            My Posts
          </button>
          <button className="bg-purple-100 text-purple-600 py-2 px-6 rounded-md hover:bg-purple-200">
            Admin Posts
          </button>
        </section>

        {/* Posts Section */}
        <section className="space-y-4">
          {posts.length === 0 ? (
            <p className="text-center text-gray-600">No posts available.</p>
          ) : (
            posts.map((post) => (
              <div
                key={post._id}
                className="p-4 border border-gray-300 rounded-lg shadow-sm"
              >
                <h3 className="font-semibold text-lg">{post.title}</h3>
                <p className="text-gray-700">{post.content}</p>
                <span className="text-sm text-gray-500">
                  {new Date(post.createdAt).toLocaleString()}
                </span>

                {/* Comment Button */}
                <button
                  onClick={() => handlePostClick(post)}
                  className="mt-2 bg-blue-500 text-white py-1 px-4 rounded-md"
                >
                  {post.commentList ? post.commentList.length : 0} Comments
                </button>

                <div className="mt-3">
                  {post.media.photoUrl.length > 0 && (
                    <img
                      src={post.media.photoUrl[0]}
                      alt="Post Visual"
                      className="w-[250px] h-[200px] rounded-lg "
                    />
                  )}
                </div>
              </div>
            ))
          )}
        </section>

        {/* Sidebar Section */}
        <aside className="mt-6 p-4 border border-gray-300 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Courses Topics: 21</li>
            <li>Bugs: 25</li>
            <li>Feature Requests: 3</li>
            <li>Others: 7</li>
            <li>Announcements: 62</li>
          </ul>
        </aside>

        {/* Modal for Commenting */}
        {commentModalOpen && currentPost && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h3 className="text-2xl font-semibold mb-4">{currentPost.title}</h3>
              <p>{currentPost.content}</p>

              {/* Display comments */}
              <div className="mt-4">
                {comments && comments.length > 0 ? (
                  <ul>
                    {comments.map((comment, index) => (
                      <li key={index} className="text-sm text-gray-600 mb-2">
                        {comment}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-600">No comments yet.</p>
                )}
              </div>

              <button
                type="button"
                onClick={() => setCommentModalOpen(false)}
                className="mt-2 w-full text-gray-600 hover:text-gray-800"
              >
                Close
              </button>
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
    </div>
  );
};

export default HelpDesk;
