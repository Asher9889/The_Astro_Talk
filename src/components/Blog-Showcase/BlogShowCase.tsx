import { useNavigate } from "react-router-dom";
import { stripHtml } from "string-strip-html"; 

interface IBlog {
  id: number;
  image: string;
  title: string;
  content: string;
}

interface BlogShowcaseProps {
  blogs: IBlog[];
}

const BlogShowcase: React.FC<BlogShowcaseProps> = ({ blogs }) => {
  const navigate = useNavigate();
  
  return (
    <section
      className="py-12 px-6 md:px-12"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Header */}
      <div className="text-center mb-10">
        <h2
          className="text-3xl md:text-4xl font-bold mb-2"
          style={{ color: "var(--color-text-primary)" }}
        >
          Latest from Blog
        </h2>
        <p
          className="text-sm md:text-base"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Discover insights, tips, and stories from our expert astrologers
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => {
          const plainText = stripHtml(blog.content).result;

          return (
            <div
            key={index}
            className="rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300"
            style={{ backgroundColor: "white" }}
          >
            {/* Image with overlay */}
            <div className="relative group">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <button
                  className="px-4 py-2 rounded-full font-semibold transition-colors cursor-pointer"
                  style={{
                    backgroundColor: "var(--color-button-primary)",
                    color: "var(--color-button-text)",
                  }}
                  onClick={()=> (navigate(`/astrology-insight/${blog.id}`))}
                >
                  Read More
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3
                className="text-lg font-bold mb-2"
                style={{ color: "var(--color-text-primary)" }}
              >
                {blog.title}
              </h3>
              <p
                className="text-sm"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {plainText.length > 100
                  ? plainText.substring(0, 100) + "..."
                  : plainText}
              </p>
            </div>
          </div>
          )
        }
          
          
        )}
      </div>
    </section>
  );
};

export default BlogShowcase;
