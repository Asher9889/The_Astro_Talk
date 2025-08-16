import { useEffect, useState } from "react";
import axios from "axios"; // Importing Axios directly
import { BlogShowcase } from "../../components";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Type explicitly as string or null

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null); // Reset error state before fetching new data

        const response = await axios.get("/blogs");

        // Assuming the response is structured like this: { status: true, data: [...] }
        if (response.status === 200 && Array.isArray(response.data)) {
          //@ts-ignore
          setBlogs(response.data); // Successfully fetched the blogsß
        } else {
          throw new Error(response.data.message || "Unexpected API response structure");
        }
      } catch (err: any) {
        console.error("Error fetching blogs:", err); // Logging the error
        setError(err?.message || "Something went wrong, please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []); // Empty dependency array to run the effect once on component mount

  if (loading) {
    return <p className="text-center text-lg">Loading blogs...</p>;
  }

  if (error) {
    return (
      <div className="text-center">
        <p className="text-red-500">{error}</p>
        <p>Please try refreshing the page or come back later.</p>
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
