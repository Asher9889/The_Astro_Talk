import { useEffect, useState } from "react";
import { axios } from "../../api"; 
import { BlogShowcase, Loader } from "../../components";

interface Blog {
  id: number;
  title: string;
  content: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

const LIMIT = 10; // number of blogs per page

const Blog = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1); // current page (1-based)
  const [total, setTotal] = useState(0); // total blogs
  const totalPages = Math.ceil(total / LIMIT);

  const fetchBlogs = async (pageNumber: number) => {
    try {
      setLoading(true);
      setError(null);

      const start = (pageNumber - 1) * LIMIT;
      const end = start + LIMIT - 1;

      const response = await axios.get(
        `/blogs?range=[${start},${end}]&sort=["id","ASC"]`
      );

      if (response.status === 200 && response.data.status === true) {
        if (Array.isArray(response.data.data)) {
          setBlogs(response.data.data);
          setTotal(response.data.total ?? 0);
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

  useEffect(() => {
    fetchBlogs(page);
  }, [page]);

  if (loading) {
    // return <p className="text-center text-lg">Loading blogs...</p>;
    return <Loader />
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

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 space-x-2 mb-10">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => setPage(pageNum)}
            disabled={pageNum === page}
            className={`px-3 py-1 rounded-md border ${
              pageNum === page
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {pageNum}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Blog;
