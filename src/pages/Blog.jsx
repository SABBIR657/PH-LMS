import FeatureBlog from "../components/Blogs/FeatureBlog";
import RecentBlog from "../components/Blogs/RecentBlog";
import SearchBlog from "../components/Blogs/SearchBlog";

const Blog = () => {
  return (
    <div>
      <FeatureBlog />
      <SearchBlog />
      <RecentBlog />
    </div>
  );
};

export default Blog;
