import { useEffect, useState } from "react";
import { BlogShowcase } from "../../components";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("http://localhost:3005/api/v1/blogs"); // change to your endpoint
        const data = await res.json();

        if (data.status && Array.isArray(data.data)) {
          setBlogs(data.data);
        } 
        // else if (data.status && data.data) {
        //   // handle case when API returns single object
        //   setBlogs([data.data]);
        // }
         else {
          throw new Error(data.message || "Failed to fetch blogs");
        }
      } catch (err:any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p className="text-center text-lg">Loading blogs...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="">
      <BlogShowcase blogs={blogs} />
    </div>
  )
};

export default Blog;
