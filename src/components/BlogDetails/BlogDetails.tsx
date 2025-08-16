import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axios } from "../../api/index"
interface IBlog {
  id: number;
  title: string;
  content: string;
  image: string;
  createdAt: string;
}

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<IBlog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`/blogs/${id}`);
        if (res.status !== 200) {
          return (
            <div className="text-center">
              <p className="text-red-500">{error}</p>
              <p>Please try refreshing the page or come back later.</p>
            </div>
          );
        }
        const data = res.data;

        if (data.status && data.data) {
          setBlog(data.data);
        } else {
          throw new Error(data.message || "Blog not found");
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchBlog();
  }, [id]);

  if (loading) return <p className="text-center text-lg">Loading blog...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!blog) return <p className="text-center">Blog not found</p>;

  return (
    <article
      className="max-w-6xl mx-auto py-12 px-6"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
      />
      <h1
        className="text-4xl font-bold mb-4"
        style={{ color: "var(--color-text-primary)" }}
      >
        {blog.title}
      </h1>
      <p
        className="mb-6"
        style={{
          color: "var(--color-text-secondary)",
          fontStyle: "italic",
        }}
      >
        {new Date(blog.createdAt).toLocaleDateString()}
      </p>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />

    </article>
  );
};

export default BlogDetail;
