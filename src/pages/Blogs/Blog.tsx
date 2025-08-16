import { useEffect, useState } from "react";
import { axios } from "../../api"; // Make sure this is the default export
import { BlogShowcase } from "../../components";

interface Blog {
  id: number;
  title: string;
  content: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

const Blog = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get("/blogs");

        // Basic response validation
        if (response.status === 200 && response.data.status === true) {
          if (Array.isArray(response.data.data)) {
            setBlogs(response.data.data);
          } else {
            throw new Error("Unexpected data format: 'data' is not an array.");
          }
        } else {
          throw new Error(response.data.message || "Failed to fetch blogs.");
        }
      } catch (err: any) {
        console.error("Error fetching blogs:", err);
        setError(err.message || "Something went wrong, please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <p className="text-center text-lg">Loading blogs...</p>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        <p>{error}</p>
        <p className="text-black">Please try refreshing the page or come back later.</p>
      </div>
    );
  }

  return (
    <div>
      <BlogShowcase blogs={blogs} />
    </div>
  );
};

export default Blog;
